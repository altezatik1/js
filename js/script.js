function createNewObject(num) {
  num = +prompt ('введите число');
     let pull = {
      hundred:null,
      dozen:null,
      units:null
     }
     
      if (num <= 999) {
      let str = num + '';
      pull.units = str[2];
      pull.dozen = str[1];
      pull.hundred = str[0];
        console.log(pull);
      }
      else {
        console.log(pull);
      }
}

createNewObject()




//база
let PRODUCTS_NAMES = ['Кофе','Сахар','Сливки','Соль','Перец','Паприка'];
let PRICES = [150,240,110,230,121,413];
let IDS = [0,1,2,3,4,5];


let products = [];

let cart = {
  items: [],
  total: 0
}

let data = {
    items: [],
    getData: function () {
      for (i = 0; i < IDS.length;i++){
       products.push (createNewProduct(i))
    }
  }
}

function createNewProduct (index) {
  return {
    product_name: PRODUCTS_NAMES [index],
    price: PRICES [index],
    product_id: IDS [index]
  }
}

function addProduct (id) {
  let find = products.find (el => el.product_id === id)
  cart.items.push (Object.assign ({},find,{quantity: 1}))
}



