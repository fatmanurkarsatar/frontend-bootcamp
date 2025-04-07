const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const imdbElement = document.querySelector("#imdb");
const yilElement = document.querySelector("#yil");
const oyuncuElement = document.querySelector("#oyuncu");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//UI objesini başlatma
const ui = new UI();

//storage objesi yükleme
const storage = new Storage();

//Tüm eventleri yükleme
EventListeners();

function EventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    const imdb = imdbElement.value;
    const yil = yilElement.value;
    const oyuncu = oyuncuElement.value;

    if(title === "" || director === "" || url === "" || imdb === "" || yil === "" || oyuncu === ""){
        //hepsi boşsa hata dönder
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }else{
        //yeni film oluştur
        const newFilm = new Film(title,director,url,imdb,yil,oyuncu);

        ui.addFilmToUI(newFilm); //arayüze yeni film ekleme yapıldı
        storage.addFilmToStorage(newFilm); //storage a film ekleme
        ui.displayMessages("film başarıyla eklendi...","success");
    }

    ui.clearInputs(titleElement,directorElement,urlElement,imdbElement,yilElement,oyuncuElement);

    e.preventDefault();
  }

function deleteFilm(e) {
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        
        ui.displayMessages("silme işlemi başarılı...","success");
    }
}

function clearAllFilms() {
    if(confirm("emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
  }
}