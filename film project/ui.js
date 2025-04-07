function UI(){

}

UI.prototype.addFilmToUI = function(newFilm){

    const filmList = document.getElementById("films");
    filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail" style="width: 200px; height: 300px; object-fit: cover;"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td>${newFilm.imdb}</td>
            <td>${newFilm.yil}</td>
            <td>${newFilm.oyuncu}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 
        `;
}

UI.prototype.clearInputs = function(element1,element2,element3,element4,element5,element6){
    element1.value = "";
    element2.value = "";
    element3.value = "";
    element4.value = "";
    element5.value = "";
    element6.value = "";

}

UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelector(".card-body");
    //alert divini oluşturma

    const div = document.createElement("div");

    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function () { //1 sn sonra alert mesajımız silinecek
        div.remove();
    }, 1000);
}

UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films");

    films.forEach(function (film) {
        filmList.innerHTML += `<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail" style="width: 200px; height: 300px; object-fit: cover;"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td>${film.imdb}</td>
        <td>${film.yil}</td>
        <td>${film.oyuncu}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
    });
  }

  UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
  }

  UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films");

    while(filmList.firstElementChild !== null){ //child olduğu sürece
        filmList.firstElementChild.remove();

    }
  }