import express from 'express';

import {getDriver} from '../middlewares/getOne';
import { validatePost } from '../middlewares/validate';

import Driver from '../models/drivers';

const router = express.Router();

// POST – Cadastro de motoristas.
router.post('/', validatePost,  async (req, res)=> {
  const {name, lastName, cpf, birthDate, status, vehicles} = req.body
  const driver = new Driver({
    name,
    lastName,
    cpf,
    birthDate,
    status,
    vehicles
  })
  try{
    const newDriver = await driver.save();
    res.status(200).json(newDriver)
  } catch(error) {
    res.status(400).json({ message: error.message})
  }
})

//   UPDATE:
router.put('/:id', async (req, res)=> {
  try{

    const updateDriver = await Driver.findByIdAndUpdate(
      req.params.id ,
      { $set: req.body}
     )

    res.status(200).json(updateDriver)
  } catch(error) {
    res.status(400).json({ message: error.message})
    throw error;
  }
})


//   GET:
//   Lista todos os motoristas
router.get('/', async (req, res)=> {
  try{
    const drivers = await Driver.find();
    res.status(200).json(drivers)
  } catch(error) {
    res.status(500).json({ message: error.message})
  }
})

//   Delete:
//   Remove motorista
router.delete('/:id',getDriver ,async (req, res)=> {
  try {
    await res.driver.remove()
    res.status(200).json({message: "Driver has been deleted successfully."})
  } catch(error) {
    res.status(500).json({ message: error.message})
  }
})


module.exports = router