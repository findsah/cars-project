import React from "react";
import { observable, action, computed } from "mobx";

class CarStore {
  @observable makeInput = React.createRef();
  @observable modelInput = React.createRef();
  @observable imageInput = React.createRef();
  @observable infoInput = React.createRef();
  @observable isSorted = false;
  @observable newId = React.createRef();
  @observable newMake = React.createRef();
  @observable newModel = React.createRef();
  @observable newImage = React.createRef();
  @observable newInfo = React.createRef();

  @observable cars = [
    {
      id: "0",
      VehicleMake: "Corolla",
      VehicleModel: "gli",
      image:
        "https://d1ek71enupal89.cloudfront.net/images/blocks_png/HYUNDAI/I30/5DR/18HyuI30NLiPlu5drWhiFL1_800.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "1",
      VehicleMake: "City",
      VehicleModel: "v8",
      image:
        "https://d1ek71enupal89.cloudfront.net/images/blocks_png/HYUNDAI/I30/5DR/18HyuI30NLiPlu5drWhiFL1_800.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "2",
      VehicleMake: "BMW",
      VehicleModel: "v8",
      image:
        "https://d1ek71enupal89.cloudfront.net/images/blocks_png/HYUNDAI/I30/5DR/18HyuI30NLiPlu5drWhiFL1_800.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "3",
      VehicleMake: "BMW",
      VehicleModel: "v8",
      image:
        "https://d1ek71enupal89.cloudfront.net/images/blocks_png/HYUNDAI/I30/5DR/18HyuI30NLiPlu5drWhiFL1_800.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "4",
      VehicleMake: "Mercedes",
      VehicleModel: "v8",
      image:
        "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/c/coupe/byo/options/2020-AMG-C-CLASS-COUPE-MP-047.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "5",
      VehicleMake: "City",
      VehicleModel: "v9",
      image: "https://www.tportal.hr/media/thumbnail/w1000/792440.jpeg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "6",
      VehicleMake: "Hyundai",
      VehicleModel: "v9",
      image:
        "https://d1ek71enupal89.cloudfront.net/images/blocks_png/HYUNDAI/I30/5DR/18HyuI30NLiPlu5drWhiFL1_800.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "7",
      VehicleMake: "Mehran",
      VehicleModel: "v10",
      image:
        "https://proauto.ba/wp-content/uploads/2019/05/skoda-superb-2019-proauto-03-skoda-superb-lk-625x391.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "8",
      VehicleMake: "BMW",
      VehicleModel: "v8",
      image:
        "https://proauto.ba/wp-content/uploads/2019/05/skoda-superb-2019-proauto-03-skoda-superb-lk-625x391.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "9",
      VehicleMake: "Toyota",
      VehicleModel: "v9",
      image:
        "https://proauto.ba/wp-content/uploads/2019/05/skoda-superb-2019-proauto-03-skoda-superb-lk-625x391.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "10",
      VehicleMake: "Volkswagen",
      VehicleModel: "v10",
      image:
        "https://proauto.ba/wp-content/uploads/2019/05/skoda-superb-2019-proauto-03-skoda-superb-lk-625x391.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "11",
      VehicleMake: "Volkswagen",
      VehicleModel: "v11",
      image:
        "https://proauto.ba/wp-content/uploads/2019/05/skoda-superb-2019-proauto-03-skoda-superb-lk-625x391.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "12",
      VehicleMake: "Civic",
      VehicleModel: "v10",
      image:
        "https://proauto.ba/wp-content/uploads/2019/05/skoda-superb-2019-proauto-03-skoda-superb-lk-625x391.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "13",
      VehicleMake: "Land Cruiser",
      VehicleModel: "v15",
      image:
        "https://purepng.com/public/uploads/medium/purepng.com-ford-mondeo-red-carcarvehicletransportford-96152463841846uwj.png",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "14",
      VehicleMake: "Pejaro",
      VehicleModel: "v9",
      image:
        "https://images.dealer.com/ddc/vehicles/2020/Audi/S5/Hatchback/color/Daytona%20Gray%20Pearl%20Effect-6Y6Y-70,72,68-640-en_US.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "15",
      VehicleMake: "Prado",
      VehicleModel: "v2",
      image:
        "https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2014/10/11/Photos/car--621x414.jpg",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
    {
      id: "16",
      VehicleMake: "Prius",
      VehicleModel: "v7",
      image:
        "https://pictures.dealer.com/aoa-images/42f3217ec5c4c42feeb7fae938ba6396.png",
      info: "This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.This is a very nice car.",
    },
  ];
  @observable filter = "";
  @observable lastId = this.cars.slice(-1)[0].id;
  @observable currentPage = 1;
  @observable carsPerPage = 5;
  @observable indexOfLastCar = this.currentPage * this.carsPerPage;
  @observable indexOfFirstCar = this.indexOfLastCar - this.carsPerPage;
  @computed get currentCars() {
    return this.filteredCars.slice(this.indexOfFirstCar, this.indexOfLastCar);
  }
  @computed get filteredCars() {
    const matchesFilter = new RegExp(this.filter, "i");
    return this.cars
      .filter((car) => car !== null)
      .filter((car) => !this.filter || matchesFilter.test(car.VehicleMake));
  }
  @computed get currentSortedCars() {
    return this.sortedCars.slice(this.indexOfFirstCar, this.indexOfLastCar);
  }

  @computed get sortedCars() {
    return this.filteredCars
      .filter((car) => car !== null)
      .slice()
      .sort((a, b) => (a.VehicleMake > b.VehicleMake ? 1 : -1));
  }
  @action addCar = ({ id, VehicleMake, VehicleModel, image, info }) => {
    this.cars.push({
      id: ++this.lastId,
      VehicleMake: this.newMake.current.value,
      VehicleModel: this.newModel.current.value,
      image: this.newImage.current.value,
      info: this.newInfo.current.value,
    });
  };
  @action editCar = (id) => {
    this.cars[id].VehicleModel = this.modelInput.current.value;
    this.cars[id].VehicleMake = this.makeInput.current.value;
    this.cars[id].image = this.imageInput.current.value;
    this.cars[id].info = this.infoInput.current.value;
  };
  @action removeCar = (id) => {
    this.cars[id] = null;
  };
  @action setPage = (pageNumber) => {
    this.currentPage = pageNumber;
    this.indexOfLastCar = this.currentPage * this.carsPerPage;
    this.indexOfFirstCar = this.indexOfLastCar - this.carsPerPage;
  };
}
const store = new CarStore();
export default store;
