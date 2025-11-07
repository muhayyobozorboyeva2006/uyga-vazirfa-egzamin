






let profilBtn = document.getElementById('profilBtn');
let profilOyna = document.getElementById('profilOyna');
let yopishX = document.getElementById('yopishX');
let jonatishBtn = document.getElementById('jonatishBtn');
let ism = document.getElementById('ism');
let email = document.getElementById('email');
let xatoMatni = document.getElementById('xatoMatni');
let forminput = document.getElementById('forminput')
let pholo = document.getElementById('pholo');
let profilInfo = document.getElementById('profilInfo');
let profileImage = document.getElementById('profile-image'); 
let profileName = profilBtn.querySelector('p')


profilBtn.addEventListener('click', () => {
    profilOyna.style.display = 'flex';
});

yopishX.addEventListener('click', () => {
    profilOyna.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === profilOyna) {
        profilOyna.style.display = 'none';
    }
}); 


jonatishBtn.addEventListener('click', (e) => {
    e.preventDefault(); 

    const pholoVal = pholo.value.trim();
    const ismVal = ism.value.trim();
    const emailVal = email.value.trim();

    if (!pholoVal || !ismVal || !emailVal) {
        xatoMatni.textContent = 'Iltimos, barcha maydonlarni to‘ldiring!';
        return;
    }

    xatoMatni.textContent = '';

    localStorage.setItem('pholo', pholoVal);
    localStorage.setItem('ism', ismVal);
    localStorage.setItem('email', emailVal);

    forminput.reset();

    profilOyna.style.display = 'none';

    showProfilInfo();

    alert('Maʼlumotlar saqlandi!');
});

function showProfilInfo() {
    const pholoVal = localStorage.getItem('pholo') || '../paka/avatar (5).png'
    const ismVal = localStorage.getItem('ism') || 'Алексей' ;
    const emailVal = localStorage.getItem('email') || '' ;

    if (pholoVal || ismVal || emailVal) {
        profilInfo.innerHTML = `
        <div class="profil-karta">
          <img src="${pholoVal || 'https://via.placeholder.com/80'}" alt="Photo" style="width:80px;height:80px;border-radius:50%;">
          <p><strong>Email:</strong> ${ismVal}</p>
          <p><strong>Parol:</strong> ${emailVal}</p>
        </div>
      `;
    } else {
        profilInfo.innerHTML = '<p>Hozircha maʼlumot yo‘q.</p>';
    }
    profileImage.src = pholoVal;
    profileName.textContent = ismVal;
}

window.addEventListener('load', showProfilInfo);

// jonatishBtn.addEventListener('click', () => {
//     if (ism.value.trim() === '' || email.value.trim() === '') {
//         xatoMatni.textContent = 'Iltimos, barcha maydonlarni to‘ldiring!';
//     } else {
//         xatoMatni.textContent = '';
//         profilOyna.style.display = 'none'; 
//         ism.value = '';
//         email.value = '';
//         alert('Maʼlumotlar jo‘natildi! ');
//     }
// });



// forminput.addEventListener("submit" , function(e){
//     e.preventDefault();
//     console.log(e.target[1].value);
//     localStorage

    
  
// })

