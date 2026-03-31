document.getElementById("imageInput").addEventListener("change", (e) => {
  let file = e.target.files[0];

  let reader = new FileReader();

  reader.onload = function (evt) {
    let img = new Image();

    img.onload = function () {
      let canvas = document.createElement("canvas");

      let ctx = canvas.getContext("2d");

      canvas.width = 800;

      canvas.height = img.height * (800 / img.width);

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      let compressed = canvas.toDataURL("image/jpeg", 0.7);

      document.getElementById("preview").src = compressed;

      localStorage.setItem("image", compressed);
    };

    img.src = evt.target.result;
  };

  reader.readAsDataURL(file);
});
