'use strict';

fetch('/api/v0/images')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(images){
    //**FOR LOOP TO CREATE GALLERY INSIDE index.html DIV**

    const gallery = document.querySelector(".gallery");

    for (let i = 0; i < images.length; i++) {

      //**FIGURE CREATED TO HOUSE IMAGES**

      const imageFigure = document.createElement("figure");
      gallery.appendChild(imageFigure);

      //**H3 ELEMENT CREATED FOR IMAGE TITLE**

      const imageTitle = document.createElement('h3');
      imageTitle.innerText = `${images[i].title}`;
      imageFigure.append(imageTitle);

      //**ANCHOR ELEMENT CREATED FOR ORIGINAL IMAGE LINK**

      const imageLink = document.createElement('a');
      imageLink.href = `${images[i].linkURL}`;
      imageFigure.append(imageLink);

      //**IMG ELEMENT CREATED TO RETREIVE LOCALY HOSTED IMAGE AND CREATE ALT FOR ACCESIBILITY**

      const figLinkImg = document.createElement('img');
      figLinkImg.src = `${images[i].pathURL}`;
      figLinkImg.alt = `${images[i].description}`;
      imageLink.append(figLinkImg);

      //**FIGCAPTION ELEMENT CREATED TO GIVE CREDIT AND LINK TO THEIR PERSONAL ACCOUNT**

      const imageCaption = document.createElement('figcaption');
      imageFigure.append(imageCaption);
      const figureLink = document.createElement('a');
      figureLink.href = `${images[i].creditURL}`;
      figureLink.innerText = `Photographer credit: ${images[i].credit}`;
      imageCaption.append(figureLink);
    };

  })
  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });