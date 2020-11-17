// Ricreare lo slider di immagini ma questa volta con Vue.
// facciamo funzionare i bottoni next e prev
// e mettiamo in pagina i pallini

//inizializzo rendering Vue

var app = new Vue({
  el: "#app",
  data: {
    imgIndex: 0,
    images: [
      "img/image1.jpg",
      "img/image2.jpg",
      "img/image3.jpg",
      "img/image4.jpg",
    ],
    dotNav: [
      "<i class='fas fa-circle'></i>",
      "<i class='fas fa-circle'></i>",
      "<i class='fas fa-circle'></i>",
      "<i class='fas fa-circle'></i>",
    ],
  },
  methods: {
    nextFunction: function () {
      this.imgIndex++;
      if (this.imgIndex > this.images.length - 1) {
        this.imgIndex = 0;
      }
    },
    prevFunction: function () {
      this.imgIndex--;
      if (this.imgIndex < 0) {
        this.imgIndex = this.images.length - 1;
      }
    },
  },
});

// BONUS:
// vediamo se troviamo una nostra tecnica per affrontare la cosa;
// facciamo si che sia evidenziato solo il pallino relativo all’img in corso;
// altro che volete provare.
