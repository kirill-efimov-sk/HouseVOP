//ОБРАБОТЧИК СОБЫТИЙ ПРИ СКРОЛЛЕ (HEADER)
window.addEventListener('scroll', function() {
  let id = document.querySelector('header');
  let stic = id.classList
  if (pageYOffset > 25 && !stic.contains('sticky-style')) {
    id.classList.add('sticky-style');
  } else if (pageYOffset < 25 && stic.contains('sticky-style')) {
    id.classList.remove('sticky-style');
  }
});


function sendfunction() {
  return send(document.forms.recordform);
}
function sendfunctionQuestion() {
  return send(document.forms.recordformQuestion);
}
//РАБОТА С ФОРМОЙ
function send(form) {
  let name = form.elements[0].value;
  let phone = form.elements[1].value;

  let formNameId = document.querySelector(`#${form.elements[0].id}`);
  let formPhoneId = document.querySelector(`#${form.elements[1].id}`);
  //ДАЛЕЕ ОТПРАВКА ДАННЫХ НА СЕРВЕР (async/await)
  //формат JSON (name, phone)
  if (name.length>0 && phone.length>0) {
    alert(`${name}, Ваша форма отправлена. По указанному телефону
    ${phone} с Вами скоро свяжутся`);
    formNameId.classList.add('checked');
    formPhoneId.classList.add('checked');
  } else {
    alert(`Заполните все поля формы!`);
  };
  return false;
}


//ФУНКЦИИ РАБОТЫ С ВИДЕО
function vidplay() {
  const video = document.getElementById("video-preview");
  const button = document.getElementById("play");
  if (video.paused) {
    play(video, button);
  } else {     
    pause(video, button);
  }
}  
function play(video, button) {
  button.classList.add('hidden');
  video.play();
}
function pause(video, button) {
  button.classList.remove('hidden');
  video.pause();
}


//SLIDER
let slideIndex = 1;
function nextSlide() {
  showSlides(slideIndex += 1);
}
function previousSlide() {
  showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});
/* Функция перелистывания: */
function showSlides(n) {
  let slides = document.querySelectorAll('.slider__item');
    
  /* Проверяем количество слайдов: */
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }
  for (let slide of slides) {
    slide.classList.add("image_anvisible");
  }
  slides[slideIndex - 1].classList.remove("image_anvisible");    
}