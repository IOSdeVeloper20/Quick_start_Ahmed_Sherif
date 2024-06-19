//pick all tab
const tabs = document.querySelectorAll(".tab");
//pick the image div or place
const imageElement = document.querySelector("#tabs_img img");

//images sources in an object
const tabImages = {
  tab_1: "img/tabs-1.jpg",
  tab_2: "img/tabs-2.jpg",
  tab_3: "img/tabs-3.jpg",
};

//loop on all the tabs and display an image specified for each tab.
tabs.forEach((tab) => {
  //add an click listener for each tab
  tab.addEventListener("click", () => {
    //get the id of each tab from the html
    const tabId = tab.id;
    console.log(tabId);
    //assign the image depending on which tab is clicked.
    const newImageSrc = tabImages[tabId];
    //check if it has value or not
    if (newImageSrc) {
      //change the src of the image inside the div of the image.
      imageElement.setAttribute("src", newImageSrc);
    }
  });
});

//get all elements
const form = document.getElementById('form');
const f_name = document.getElementById('firstName');
const l_name = document.getElementById('lastName');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

//add event listener
form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});
//error funtion
const set_error = (element, message) => {
  const input_control = element.parentElement;
  const error_display = input_control.querySelector('.error');

  error_display.innerText = message;
};
//success funtion
const set_success = element => {
  const input_control = element.parentElement;
  const error_display = input_control.querySelector('.error');

  error_display.innerText = '';
};

const validateInputs = () => {
  //remove spaces for check
  const f_name_value = f_name.value.trim();
  const l_name_value = l_name.value.trim();
  const subject_value = subject.value.trim();
  const message_value = message.value.trim();
  //check for values
  if (f_name_value === '') {
    set_error(f_name, 'First Name Shouldn\'t be Empty.')
  } else {
    set_success(f_name);
  }

  if (l_name_value === '') {
    set_error(l_name, 'Last Name Shouldn\'t be Empty.')
  } else {
    set_success(l_name);
  }

  if (subject_value === '') {
    set_error(subject, 'Subject Name Shouldn\'t be Empty.')
  } else {
    set_success(subject);
  }

  if (message_value === '') {
    set_error(message, 'Message Name Shouldn\'t be Empty.')
  } else {
    set_success(message);
  }
};