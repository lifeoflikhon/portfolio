// object oriented programing

// string, number, boolean, Date

class Human {
  name: string;
  age: number;
  address: Address;
  isMad: boolean;

  sleep() {
    console.log(`${this.name} is now sleeping...`);
  }

  work() {}

  eat() {}

  read() {}
}

class Student extends Human {
  class: string;
  university: string;
}

class Address {
  road: number;
  house: number;
  policeStation: string;
  district: string;
  division: string;
  country: string;
}

const likhon: Student = new Student();

const likhonsAddress: Address = new Address();
likhonsAddress.house = 8;
likhonsAddress.road = 10;
likhonsAddress.policeStation = 'Adabor';
likhonsAddress.district = 'Dhaka';
likhonsAddress.division = 'Dhaka';
likhonsAddress.country = 'Bangladesh';

likhon.name = 'Mehedi Hasan Likhon';
likhon.age = 20;
likhon.address = likhonsAddress;
likhon.isMad = true;
likhon.class = 'Class 9';

console.log(likhon);
