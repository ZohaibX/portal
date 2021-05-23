import joi from 'joi';

export const validateAuthInput = (requestBody: {
  email: string;
  password: string;
  department:string;
section:string;
rollNo:number;
phone:number;
}) => {
  const schema = joi.object({
    email: joi.string().max(50).min(5).required(),
    password: joi.string().max(50).min(5).required(),
    department: joi.string().max(4),
    section: joi.string().max(1),
    rollNo: joi.number().max(3).min(3),
    phone: joi.number().max(11).min(11),
  });
  const validation = schema.validate(requestBody);

  if (validation.error) return validation.error.details[0].message;
  return null;
};
