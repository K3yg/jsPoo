class Car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getBrand(){
        return this.brand;
    }
    getModel(){
        return this.model;
    }
    getYear(){
        return this.year;
    }

    describeCar(){
        return `The car brand is ${this.brand}, model: ${this.model} and the year is ${this.year}`;
    }

};

const car = new Car('Ford', 'Mustang', '2018');


class CarCollection extends Car {
    constructor(model, collectionNm){
        super(model);
        this.collectionNm = collectionNm;
    }

    getCollectionNm(){
        return this.collectionNm;
    }

    getBrand(){
        return this.brand;
    }
}

const carCollection = new CarCollection('Mustang', 'Ford Cars');

console.log(carCollection.getBrand());
