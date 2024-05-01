const yeniGorev =document.querySelector('.input-gorev');
const yeniGorevEkleButton= document.querySelector('.button-gorev-ekle');
const gorevListesi=document.querySelector('.gorev-listesi');

yeniGorevEkleButton.addEventListener('click',gorevEkle);
gorevListesi.addEventListener('click',gorevSilTamamla)
function gorevSilTamamla(e){
const tiklanilanEleman=e.target;
if(tiklanilanEleman.classList.contains('gorev-button-tamamlandi')){
console.log('checked tıklandı');
tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
}
if(tiklanilanEleman.classList.contains('gorev-button-sil')){
    console.log('sil tıklandı');
    tiklanilanEleman.parentElement.remove();
    
    }
}



function gorevEkle(e){
e.preventDefault();

//div oluşturma
const gorevDiv= document.createElement('div');
gorevDiv.classList.add('gorev-item');

// li oluşturma 
const gorevLi=document.createElement('li');
gorevLi.classList.add('gorev-tanim');
gorevLi.innerText=yeniGorev.value;
gorevDiv.appendChild(gorevLi);

// tamamlandı butonu
const gorevTamamButton= document.createElement('button');
gorevTamamButton.classList.add('gorev-button');
gorevTamamButton.classList.add('gorev-button-tamamlandi');
gorevTamamButton.innerHTML=' <i class="fa-solid fa-check"></i>';
gorevDiv.appendChild(gorevTamamButton);

const gorevSilButton= document.createElement('button');
gorevSilButton.classList.add('gorev-button');
gorevSilButton.classList.add('gorev-button-sil');
gorevSilButton.innerHTML=' <i class="fa-sharp fa-solid fa-trash"></i>';
gorevDiv.appendChild(gorevSilButton);

yeniGorev.value='';

// ul ye oluşturulan divi ekle
gorevListesi.appendChild(gorevDiv);


}