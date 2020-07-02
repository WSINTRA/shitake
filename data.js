var faker = require('faker');

let numberOfTags = 5;
let numberOfProducts = 10;

class product{
    constructor(title, subHeading, tags, description, availability,pricePerWeight,itemCode){
        this.title = title
        this.subHeading = subHeading
        this.tags = tags
        this.description = description
        this.availability = availability
        this.pricePerWeight = pricePerWeight
        this.itemCode = itemCode
    }
}
const createTags=()=>{
    let tags = [];
    for (let index = 0; index < numberOfTags; index++) {
        tags.push( faker.commerce.productAdjective() )
    }
    return tags
}

export const createFakeData=()=>{
    let data = [];
    for (let index = 0; index < numberOfProducts; index++) {
      data.push(
          new product( 
            faker.commerce.productName(),
            faker.company.bsBuzz(),
            createTags(),
            faker.commerce.product(),
            faker.random.boolean(),
            faker.random.number(23),
            faker.finance.iban() 
            ) 
        )
    }
    return data
}




