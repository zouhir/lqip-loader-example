require("./style.scss");

var image1 = require("./media/mount.jpg");
var image2 = require("./media/bee.jpg");
var image3 = require("./media/lamps.jpg");
var image4 = require("./media/paper-ships.jpg");

(function() {
  var root = document.getElementById("gallery");
  var images = [image1, image2, image3, image4];

  images.forEach(function(image) {
    var img = document.createElement("img");
    img.src = image.preSrc;
    root.appendChild(img);
    setTimeout(function() {
      img.src = image.src;
    }, Math.floor(Math.random() * (1500 - 500 + 1) + 500));
  });

  function template(preSrc, src) {
    return `
      <section>
        <img src='${preSrc}' />
        <img src='${src}' />
      </section>
    `;
  }

})();
