(function () {
  "use strict";

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", async function () {
      var text = button.dataset.copy;
      var originalText = button.textContent;

      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "已复制";
      } catch (error) {
        window.prompt("请复制客服号码：", text);
      }

      window.setTimeout(function () {
        button.textContent = originalText;
      }, 1600);
    });
  });

  var imageDialog = document.getElementById("image-dialog");
  var dialogImage = document.getElementById("dialog-image");
  var closeButton = imageDialog.querySelector(".dialog-close");

  document.querySelectorAll(".tutorial-image").forEach(function (image) {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "点击放大：" + image.alt);

    function openImage() {
      dialogImage.src = image.src;
      dialogImage.alt = image.alt;
      imageDialog.showModal();
    }

    image.addEventListener("click", openImage);
    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openImage();
      }
    });
  });

  closeButton.addEventListener("click", function () {
    imageDialog.close();
  });

  imageDialog.addEventListener("click", function (event) {
    if (event.target === imageDialog) {
      imageDialog.close();
    }
  });
})();
