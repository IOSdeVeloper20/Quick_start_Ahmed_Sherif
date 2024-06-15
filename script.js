  //pick all tab
  const tabs = document.querySelectorAll('.tab');
  //pick the image div or place
  const imageElement = document.querySelector('#tabs_img img');

  //images sources in an object
  const tabImages = {
    tab_1: 'img/tabs-1.jpg',
    tab_2: 'img/tabs-2.jpg',
    tab_3: 'img/tabs-3.jpg'
  };

  //loop on all the tabs and display an image specified for each tab.
  tabs.forEach(tab => {
    //add an click listener for each tab
    tab.addEventListener('click', () => {
      //get the id of each tab from the html 
      const tabId = tab.id;
      console.log(tabId);
      //assign the image depending on which tab is clicked.
      const newImageSrc = tabImages[tabId];
      //check if it has value or not
      if (newImageSrc) {
        //change the src of the image inside the div of the image.
        imageElement.setAttribute('src', newImageSrc);
      }
    });
  });
