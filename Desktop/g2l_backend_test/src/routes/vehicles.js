import express from 'express';

import { getVehicle } from '../middlewares/getOne';

import Driver from '../models/drivers';
import Vehicle from '../models/vehicles';

const router = express.Router();

// POST -
// Adicionar id do veículo ao motorista
router.post('/post-new-vehicle/:id',  async (req, res)=> {
  try{
    const {id} = req.body
    const newDriver = await Driver.findByIdAndUpdate(
        id,
        { $push: { vehicles: req.params.id } }
     );
    res.status(200).json(newDriver)
  } catch(error) {
    res.status(400).json({ message: error.message})
  }
})

// POST – Cadastro de veículo.
// Campos (_id, nome do proprietário, placa e renavam )
router.post('/',  async (req, res)=> {
      const {ownerName, plate, renavam} = req.body
      const vehicle = new Vehicle({
        ownerName,
        plate,
        renavam
      })
      try{
        const newVehicle = await vehicle.save();
        res.status(200).json(newVehicle)
      } catch(error) {
        res.status(400).json({ message: error.message})
      }
  })

//   UPDATE:
router.put('/:id' , async (req, res)=> {
  try{

    const updateVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id ,
      { $set: req.body}
     )

    res.status(200).json(updateVehicle)
  } catch(error) {
    res.status(400).json({message: "Vehicle has been updated successfully."})
    throw error;
  }
})


//   GET:
//   Lista todos
router.get('/', async (req, res)=> {
  try{
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles)
  } catch(error) {
    res.status(500).json({ message: error.message})
  }
})

//   Delete:
//   Remove Vehicle
router.delete('/:id',getVehicle ,async (req, res)=> {
  try {
    await res.vehicle.remove()
    res.status(200).json({message: "Vehicle has been deleted successfully."})
  } catch(error) {
    res.status(500).json({ message: error.message})
  }
})


module.exports = router