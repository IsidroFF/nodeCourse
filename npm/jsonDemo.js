let anime = {
    "titulo" : "El valor de la Amistad",
    "palabras" : 59035,
    "duracion" : 1904,
    "temas" : [
      "Kobayashi no maid dragon",
      "One punch man"
    ],
    "esPublico" : true
  }

  let infoAnime = JSON.stringify(anime);
  console.log(infoAnime);
  console.log(typeof infoAnime);

  let objetoAnime = JSON.parse(infoAnime);
  console.log(objetoAnime);
  console.log(typeof objetoAnime);

// const curso = require("./curso.json");

// console.log(curso.temas);