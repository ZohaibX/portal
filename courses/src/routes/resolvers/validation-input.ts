import joi from 'joi'

interface ReqBody {
  description: string;
}

export const validateCourseInput = (reqBody : ReqBody) => {

  const schema = joi.object({ description: joi.string().max(50).min(5).required() });
  const validation = schema.validate(reqBody);

  if (validation.error) return validation.error.details[0].message;
  return null;
}
