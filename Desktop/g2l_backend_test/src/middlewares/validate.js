import * as yup from 'yup';

export const validateUpdate =  async (req, res, next) => {
    const diverSchema = yup.object({
        name: yup.string(),
        lastName: yup.string(),
        cpf: yup.string(),
        birthDate: yup.string(),
        status: yup.string().required(),
      });

    const resource = req.body;
    try{
        await diverSchema.validate(resource)
        next();
    } catch(error) {
        res.status(400).json({ error: e.errors.join(', ') });
    }
  };


export const validatePost =  async (req, res, next) => {
    const diverSchema = yup.object({
        name: yup.string().required(),
        lastName: yup.string().required(),
        cpf: yup.string().required(),
        birthDate: yup.string().required(),
        status: yup.string(),
        vehicles: yup.array(),
        });

    const resource = req.body;
    try {
        await diverSchema.validate(resource);
        next();
    } catch (e) {
        console.error(e);
        res.status(400).json({ error: e.errors.join(', ') });
    }
};

