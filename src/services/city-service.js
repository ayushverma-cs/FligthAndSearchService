const {CityRepository}= require('../repository/index');   
//service layer will have the business logic and it will call the repository layer to interact with the database
class CityService{
    constructor(){
        this.cityRepository=new  CityRepository();
    }
    async createCity(data){
        try{
            const city = await this.cityRepository.createCity(data);
            return city;

        }catch(error){
            console.log("something wemnt wrong at service layer");
            throw{error};
        }

    }

    async deletecity(cityId){
        try{
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
            
        }catch(error){
            console.log("something wemnt wrong at service layer");
            throw{error};
        }

    }

    async updateCity(cityId, data){
        try{
            const city= await this.cityRepository.updateCity(cityId, data);
            return city;

        }catch(error){
            console.log("something wemnt wrong at service layer");
            throw{error};
        }

    }

    async getCity(cityId){
        try{

            const city = await this.cityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("something wemnt wrong at service layer");
            throw{error};
        }

    }
    async getAllCities(){
        try{
            const cities = await this.cityRepository.getAllCities();
            return cities;
        }catch(error){
            console.log("something wemnt wrong at service layer");
            throw{error};
        }
}
}
module.exports= CityService;