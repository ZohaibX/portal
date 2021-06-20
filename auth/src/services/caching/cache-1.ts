const redis = require('redis');
import { BadRequestError } from '@zbprojector/project1';
import express , {Request , Response , NextFunction} from 'express'
import util from 'util'


export const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  retry_strategy: () => 1000,
});

client.hget = util.promisify(client.hget); // so we can use await here

client.on('connect', function(){
  console.log('...');
});

export const clearHash = (hashKey: any) => {
  client.del(JSON.stringify(hashKey));
}

// cache middleware -- we can use it as a middleware when data cache is saved 
export const cache = async (req: Request, res: Response, next: NextFunction) => {
  const hashKey = req.currentUser!.id ;
  const key = req.params!.key ;

  if(!hashKey && !key) throw new BadRequestError('currentUser id and Key on params must be provided')
  
  client.get(JSON.stringify(hashKey), (err: any, data: any) => {
    if (err) throw err;

    if (data !== null) {
      console.log("RUNNING THROUGH CACHE")
      res.send(JSON.parse(data));
    } else {
      console.log("RUNNING THROUGH DATABASE")
      next();
    }
  });
  
}


// there are more and more methods for redis -- to work 
// ie hget , hgetAll and more 