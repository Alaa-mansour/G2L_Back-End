import Driver from '../models/drivers';
import Vehicle from '../models/vehicles';

export const getDriver =  async (req, res, next) => {
    let driver;
    try{
      driver = await Driver.findById(req.params.id);
      if( driver === null ) {
        return res.status(404).json({message: 'can not find the required driver.'})
      }
    } catch(error) {
      res.status(500).json({ message: error.message})
      throw error
    }
    res.driver = driver;
    next();
  }

  export const getVehicle =  async (req, res, next) => {
    let vehicle;
    try{
      vehicle = await Vehicle.findById(req.params.id);
      if( vehicle === null ) {
        return res.status(404).json({message: 'can not find the required vehicle.'})
      }
    } catch(error) {
      res.status(500).json({ message: error.message})
      throw error
    }
    res.vehicle = vehicle;
    next();
  }
