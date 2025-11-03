let diCartscard = document.getElementById("homecardsni")
let diCartscart = JSON.parse(localStorage.getItem("card") || "[]")
console.log(diCartscart);


let badge = document.getElementById("badge")
localStorage.setItem("card", JSON.stringify(diCartscart))

badge.textContent = diCartscart.length

function showcards(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML += `
              <div class="aksiy2">
              <div class="h-[100px]">
                  <img class="aksiy2-img" src="${el.images[0]}" alt="${el.name}">
                  <p class="aksiyo-p">${el.discount}%</p>
                <img class="like-img" src="../paka/Button (4).png" alt="layk">
              </div>
  
              <div class="aksiy3">
                <div class="aksiy4">
                  <h1 class="aksiy4-h1">${el.price} ₽</h1>
                  <h2 class="aksiy4-h2">С картой</h2>
                </div>
                <div class="aksiy4">
                  <h1 class="aksiy4-h1">${el.price - 10} ₽</h1>
                  <h2 class="aksiy4-h2">Обычная</h2>
                </div>
             </div>
              <p class="aksiy1-p">${el.description}</p>
              <img class="aksiy1-img1" src="../assets/images/general/rating (1).png" alt="yulduzcha">
          
                  <div class="buttoncard">
              <button onClick="decreaseQuatity(${el.id})" class="btncard1">-</button>
              <span>${el.qty}</span>
              <button onClick="increaseQuatity(${el.id})" class="btncard2">+</button>
              </div>:
           
            <button onClick="addToCart(${el.id})"
              class="aksiy1-button" >В корзину</button>
               </div>
      `
    })
}
showcards(diCartscard , diCartscart);
function addToCart(id) {
    let item = products.find((el) => el.id === id);
    item.qty = 1
  diCartscart.push(item)
    badge.textContent =diCartscart.length
    showcards(diCartscard, diCartscart);

}

function increaseQuatity(id) {
    let item =diCartscart.find((el) => el.id === id)
    item.qty += 1
    localStorage.setItem("card", JSON.stringify(diCartscart))
    showcards(diCartscard, diCartscart);

}

function decreaseQuatity(id) {
    let item = diCartscart.find((el) => el.id === id)
    item.qty -= 1

    if (item.qty <= 0) {
       diCartscard= diCartscart.filter((el) => el.id !== id)
    }
    badge.textContent =diCartscart.length
  localStorage.setItem("card", JSON.stringify(diCartscart))

    showcards(diCartscard, diCartscart);

  }