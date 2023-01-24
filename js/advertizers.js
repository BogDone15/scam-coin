$(document).ready(function () {
  const textarea = document.querySelector('textarea');
  const leadsInput = document.querySelectorAll('.leads__input');

  if (leadsInput) {
    leadsInput.forEach((item) => {
      item.addEventListener('focus', (e) => {
        e.target.previousElementSibling.style.display = 'none';
      });
    });
  }

  if (textarea) {
    textarea.addEventListener('focus', (e) => {
      e.target.previousElementSibling.style.display = 'none';
    });
  }

  const prevSlide = document.querySelector('.prev-slide');
  const nextSlide = document.querySelector('.next-slide');
  const currentPos = document.querySelector('#currentPos');

  document.querySelectorAll(`[data-pos="1"]`).forEach((item) => {
    item.style.display = 'block';
  });

  let counter = 1;

  const showNextSlide = () => {
    if (counter < 6) {
      document.querySelectorAll(`[data-pos="${counter}"]`).forEach((item) => {
        item.style.display = 'none';
      });

      document
        .querySelectorAll(`[data-pos="${counter + 1}"]`)
        .forEach((item) => {
          item.style.display = 'block';
        });

      counter++;

      currentPos.textContent = counter;
    }
  };

  const showPrevSlide = () => {
    if (counter > 1) {
      document.querySelectorAll(`[data-pos="${counter}"]`).forEach((item) => {
        item.style.display = 'none';
      });

      document
        .querySelectorAll(`[data-pos="${counter - 1}"]`)
        .forEach((item) => {
          item.style.display = 'block';
        });

      counter--;

      currentPos.textContent = counter;
    }
  };

  nextSlide.addEventListener('click', showNextSlide);
  prevSlide.addEventListener('click', showPrevSlide);

  var typed = new Typed('#advertisers1', {
    // Тут id того блока, в которм будет анимация
    stringsElement: '#advertisers-strings1', // Тут id блока из которого берем строки для анимации
    typeSpeed: 80, // Скорость печати
    startDelay: 500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    showCursor: false,
    loop: false, // Указываем, повторять ли анимацию
  });

  const advertisersLeft = document.querySelector('.advertisers__left');

  const advertisersImg = document.querySelector(
    '.advertisers__left-block-cover-img'
  );
  const advertisersRightTop = document.querySelector('.advertisers__right-top');
  const advertisersRightBottom = document.querySelector(
    '.advertisers__right-bottom'
  );

  setTimeout(() => {
    advertisersLeft.classList.add('scale');
  }, 1500);

  setTimeout(() => {
    advertisersImg.classList.add('opacity');
  }, 1800);

  setTimeout(() => {
    advertisersRightTop.classList.add('scale');
  }, 1800);

  setTimeout(() => {
    advertisersRightBottom.classList.add('scale');
  }, 1800);

  const menuOpen = document.querySelector('.menu__open');
  const menuClose = document.querySelector('.menu__close');
  const menuTop = document.querySelector('.header__wrapper-mob-top');
  const menuBottom = document.querySelector('.header__wrapper-mob-bottom');

  menuOpen.addEventListener('click', () => {
    menuBottom.classList.add('show-item');
    menuTop.classList.add('menu-open');
  });

  menuClose.addEventListener('click', () => {
    menuBottom.classList.remove('show-item');
    menuTop.classList.remove('menu-open');
  });

  const backHomePage = document.querySelector('.popup__back');
  const popup = document.querySelector('.popup');
  const popupCircles = document.querySelector('.popup__circles');

  backHomePage.addEventListener('click', () => {
    popup.classList.remove('show-popup');
    popupCircles.classList.remove('show-circles');
  });

  //Form
  let repeatPopup = true;

  const $signupForm = $('.form');

  jQuery.validator.addMethod(
    'emailfull',
    function (value, element) {
      return (
        this.optional(element) ||
        /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(
          value
        )
      );
    },
    '<span>Enter correct email!</span>'
  );

  $signupForm.validate({
    rules: {
      email: {
        required: true,
        email: true,
        emailfull: true,
      },
      name: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      email: {
        required: '<span>Enter correct email!</span>',
        email: '<span>Enter correct email!</span>',
      },
      name: {
        required: '<span>Enter correct name (min. 6 latin chars)!</span>',
      },
    },

    submitHandler: function (form) {
      let dataStr = $(form).serialize();
      $.ajax({
        type: 'POST',
        url: 'send.php',
        dataType: 'text',
        data: dataStr,

        error: function () {
          alert('Error occured.please try again');
        },
      }).done(function () {
        popup.classList.add('show-popup');

        setTimeout(() => {
          popupCircles.classList.add('show-circles');
        }, 2000);

        if (repeatPopup) {
          repeatPopup = false;
          var typed = new Typed('#typed1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#typed-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#typed2', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#typed-strings2', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 800, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#typed3', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#typed-strings3', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 1400, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });

          var typed = new Typed('#typed4', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#typed-strings4', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 1700, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#typed5', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#typed-strings5', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 2100, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#typed6', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#typed-strings6', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 2300, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });

          var typed = new Typed('#typed7', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#typed-strings7', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 2600, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#typed8', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#typed-strings8', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 3200, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        }
      });
      return false; // required to block normal submit since you used ajax
    },
  });
});

const advertisersContent = $('.advertisers__content');
const advertisersWin = document.querySelector('.advertisers__win');
const advertisersWinImg = document.querySelector('.advertisers__win-img');
let startAnim = true;

$(window).scroll(function () {
  let scroll = $(window).scrollTop() + $(window).height();
  let offsetAdvertisers = advertisersContent.offset().top;

  if (scroll > offsetAdvertisers) {
    if (startAnim) {
      kaScroll.init();
    }

    startAnim = false;
  }
});

const kaScroll = (function ($) {
  let s;
  let animation = true;
  let speed = 50;

  return {
    settings: {
      $wrap: $('.advertisers__row-center'),
    },

    init: function () {
      s = this.settings;
      this.bindUIActions();
    },

    bindUIActions: function () {
      kaScroll.slideOne();
    },

    slideOne: function () {
      s.$wrap
        .find('img')
        .first()
        .animate(
          {
            height: 'toggle',
          },
          speed,
          'linear',
          function () {
            kaScroll.appendEnd();
          }
        );
    },

    slideLast: function () {
      s.$wrap
        .find('.advertisers__img-num')
        .first()
        .animate(
          {
            height: 'toggle',
          },
          5000,
          'linear',
          function () {
            kaScroll.appendEnd();
          }
        );
    },

    appendEnd: function () {
      s.$wrap
        .find('.advertisers__img-num')
        .first()
        .appendTo('.advertisers__row-center')
        .show();
      if (animation) {
        kaScroll.slideOne();
      }

      const interval = setInterval(speedincrease, 3000);

      function speedincrease() {
        speed += 10;
      }

      if (speed >= 405) {
        animation = false;
        clearInterval(interval);
        setTimeout(() => {
          advertisersWinImg.classList.add('opacity');
          advertisersWin.classList.add('full-width');
        }, 600);
      }
    },
  };
})(jQuery);
