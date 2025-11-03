
let searchInput = document.getElementById("inputlar");

let searchCards= document.getElementById("searchcards")




searchInput.addEventListener("input" , function(e){
    let searchValue = e.target.value.trim();
    console.log(searchValue);
    if(searchValue){
      searchCards.style.display = "block"

    }else{
      searchCards.style.display = "none"

    }
    let res = products.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()));
    searchCards.innerHTML = ""
  if (res.length > 0){
    res.map((el) => {
      searchCards.innerHTML += `
     <div class="search-card ">
     <div>
      <img class="search-card_img " src="${el.images[1]}" alt="mevalarni surtlar">
     </div>
      <div class="search-card1">
        <h1 class="search-card_h1 ">${el.name}</h1>
        <p class="search-card_p ">${el.description}
        </p>
      </div>
     </div>
  `
    });
  }else{
    searchCards.innerHTML = `<h1>Bunday mahsulod mavjud emas!</h1>`;
  }
  
})


