




 
let store = {
  name: "متجر الإلكترونيات",
  city: "Cairo",
  phone: "01012345678"
};

 

document.getElementById("store-name").innerHTML = 
`<span>${store.name}</span>`;

document.getElementById("store-info").innerHTML = `
  <strong>المدينة:</strong> ${store.city}  <strong>الهاتف:</strong> ${store.phone}
`;






let cart = [
  { name: "Mouse", price: 250, qty: 2 },
  { name: "Keyboard", price: 500, qty: 1 },
  { name: "Headset", price: 450, qty: 1 }
];


cart.push({ name: "Laptop", price: 12000, qty: 1 });


cart.unshift({ name: "Gift Sticker", price: 0, qty: 5 });


cart.pop();


cart.shift();



let cartHTML = "";
let totalPrice = 0;


for (let i = 0; i < cart.length; i++) {
  let item = cart[i];
  let itemTotal = item.price * item.qty; 
  totalPrice += itemTotal; 
  
  
  cartHTML += `<li>${item.name} - ${item.price} EGP x ${item.qty} = ${itemTotal} EGP</li>`;
}


document.getElementById("cart").innerHTML = cartHTML;



document.getElementById("count").innerText = `You have ${cart.length} items in your cart`;


document.getElementById("total").innerText = `Total: ${totalPrice.toFixed(2)} EGP`;