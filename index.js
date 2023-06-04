

async function getMenu() {
  try {
    let response  =  await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    let result =await response.json();
console.log(result);
  let container = document.getElementById("container");
  // console.log(result);
  result.forEach(element => {
    let div = document.createElement("div");
    div.className="card"
    div.innerHTML=`
    <div class="img-div">
        <img src="${element.imgSrc}" alt="${element.name}" class="img">
    </div>  
    <div class="btn-div">
    <p>${element.name}</p>
        <button class="btn">$
          ${element.price}
        </button>
    </div>`

   container.append(div);
  });
  //after data fetch ;
  takeOrder(result).then(orderPrep).then(payOrder).then(thankyouFnc).catch(()=>{
    alert("something mistake");
  });
  } catch (error) {
    alert(error);
  }
}

// Call the getMenu() function when the screen loads
window.addEventListener('load', getMenu);

 function takeOrder(data) {
  return new Promise((resolve, reject) => {
   
    setTimeout(() => {
      const burgers = data;

      const selectedBurgers = [];
      while (selectedBurgers.length < 3) {
        const randomIndex = Math.floor(Math.random() * burgers.length);
        const burger = burgers[randomIndex];

        if (!selectedBurgers.includes(burger)) {
          selectedBurgers.push(burger);
        }
      }
      
      const order = { burgers: selectedBurgers };
      // console.log(order);
      resolve(order);
    }, 2500);
  });
}


function orderPrep(){
  
       try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              const orderPreparation = { order_status: true, paid: false };
                let order ={result : orderPreparation};
                // console.log(order,"orderP");
            resolve(order);
             
            }, 1500);
          });
       } catch (error) {
        alert(error);
       }
}

function payOrder() {
 try {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     
      const orderPayment = { order_status: true, paid: true };

      // console.log('Order payment:', orderPayment);

      resolve(orderPayment);
    }, 1000);
  });
 } catch (error) {
  alert(error);
 }
}

function thankyouFnc() {
  alert("thanks you");
}
