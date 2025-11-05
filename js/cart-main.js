let diCartscard = document.getElementById("homecardsni")
let badge = document.getElementById("badge")

let diCartscart = JSON.parse(localStorage.getItem("card") || "[]")
let cart7div = document.querySelector(".cart7div")
let dalates=document.getElementById("dalates")
let allcheck=document.getElementById("all-check")
badge.textContent = diCartscart.length


function showcards(content, data) {
    content.innerHTML = "";
    data.map((el) => {
        content.innerHTML += `
          <div class="cardlar1"> 
                <input onInput="getCHeck(this, ${el.id})" class="check " type="checkbox">
                <div class="cardlar-img">
                    <img class="cardlarimg" src="../paka/image (6).png" alt="">
                    <p class="cardlar9">${el.discount}%</p>
                </div>
             
                        <div>
                            <p class="cardlar2p">${el.description}</p>
        
                            <div class="aksiy3">
                                <div class="aksiy4">
                                    <h1 class="aksiy4-h1">${el.price*el.qty} ₽</h1>
                                    <h2 class="aksiy4-h2">С картой</h2>
                                </div>
                                <div class="aksiy4">
                                    <h1 class="aksiy4-h1">${(el.price - 10)*el.qty} ₽</h1>
                                    <h2 class="aksiy4-h2">Обычная</h2>
                                </div>
                            </div>
                        </div>
                        <div class="cardlar3">
                            <div class="cardlar4">
                                <h1 class="aksiy4-h1">${((el.price * el.discount)  - el.discount )/100*el.qty} ₽</h1>
                            </div>
                            <div class="buttoncard">
                                <button onClick="decreaseQuatity(${el.id})" class="btncard1">-</button>
                                <span>${el.qty}</span>
                                <button onClick="increaseQuatity(${el.id})" class="btncard2">+</button>
                            </div>
        
                        </div>
        
            </div>
      `
    })


}
showcards(diCartscard, diCartscart);

function increaseQuatity(id) {
    let item =diCartscart.find((el) => el.id === id)
    if(item){
      item.qty += 1
      localStorage.setItem("card", JSON.stringify(diCartscart))
      badge.textContent = diCartscart.length

      showcards(diCartscard, diCartscart);
    }
    

}

function decreaseQuatity(id) {
    let item = diCartscart.find((el) => el.id === id)
    if(item){
      item.qty -= 1;


      if (item.qty <= 0) {
        diCartscart = diCartscart.filter((el) => el.id != id)

      }
      localStorage.setItem("card", JSON.stringify(diCartscart))

      badge.textContent = diCartscart.length

      showcards(diCartscard, diCartscart);
    }

    

  }
  
let checkedIds =[];
let check = document.getElementsByClassName("check")

function getCHeck( checkbox , id){
    if (checkbox.checked) {
        checkedIds.push(id);
    } else {
        checkedIds = checkedIds.filter((el) => el !== id)
    }
    
   
    console.log(checkedIds);
    
}

deletes.addEventListener("click", function () {
    diCartscart = diCartscart.filter((el) => !checkedIds.includes(el.id))
    localStorage.setItem("card", JSON.stringify(diCartscart))

    showcards(diCartscard, diCartscart);

 })    

  allcheck.addEventListener("click" , function(){
    let innercheck=document.getElementsByClassName("check")
    let resArr=[...innercheck]
      resArr.map((el) => el.checked = false)

      if(resArr.every((el)=>el.checked===true)){
        allcheck.checked=true
      }
    if(allcheck.checked){
      diCartscart.map((el)=>{
        checkedIds.push(el.id)
      })  
      resArr.map((el)=>el.checked=true)
        localStorage.setItem("card", JSON.stringify(diCartscart))

    }
  })

