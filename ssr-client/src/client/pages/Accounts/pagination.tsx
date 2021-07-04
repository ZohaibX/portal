import * as React from 'react';
import '../../css/main.css'
import _ from 'lodash'


/// css
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        marginTop: theme.spacing(2),
        backgroundColor: "white",
        paddingLeft: "50px",
    },
  }),
);


const PaginationComponent = ({singlePageRows , rowsLength , updateCurrentPage , currentPage , rows}: 
  {singlePageRows: number , rowsLength: number , updateCurrentPage: any , currentPage: number , rows: string[]}) => {
  
  const classes = useStyles(); // css

  const pages: number = Math.ceil(rowsLength / singlePageRows);
  // const range = _.range(1, pages + 1); // if we have 2 pages , we will get [1,2]

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    updateCurrentPage(value)
  }
  
  return (
    <div className="accounts-pagination">
      <Pagination className={classes.root} onChange={handleChange} count={pages} variant="outlined" shape="rounded" />
    </div>
  )
}

export default {
  component: PaginationComponent
}