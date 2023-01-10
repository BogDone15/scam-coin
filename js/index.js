// window.onload = function () {};

$(document).ready(function () {
  var slideIndexS = 0,
    sliding = false;

  if ($('#fullpage')) {
    $('#fullpage').fullpage({
      anchors: [
        'firstPage',
        'secondPage',
        '3rdPage',
        '4thpage',
        '5thpage',
        '6thpage',
        '7thpage',
        'lastPage',
      ],
      menu: '#menu',
      css3: true,
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      afterSlideLoad: function (section, origin, destination, direction) {
        slideIndexS = destination.index + 1;
      },
      onLeave: function (origin, destination, direction) {
        console.log('Index: ' + origin.index + ' Slide Index: ' + slideIndexS);
        // console.log(index, nextIndex, direction, sliding);
        if (origin.index === 0 && slideIndexS === 0) {
          tickGarant();
        }
        if (origin.index >= 0) {
          document.querySelector('#header').classList.add('show-header');
        }
        if (origin.index === 1 && direction === 'up') {
          document.querySelector('#header').classList.remove('show-header');
        }
        if (origin.index === 2 && slideIndexS === 6) {
          tickOffer();
        }
        if (origin.index === 2 && !sliding) {
          if (direction === 'down' && slideIndexS < 6) {
            $.fn.fullpage.moveSlideRight();
            return false;
          } else if (direction === 'up' && slideIndexS > 1) {
            $.fn.fullpage.moveSlideLeft();
            return false;
          }
        } else if (sliding) {
          return false;
        }
      },
    });
  }

  if ($('.offers__move')) {
    $('.offers__move').marquee({
      duration: 15000,
      startVisible: true,
      duplicated: true,
      direction: 'right',
    });
  }

  const submitBtn = document.querySelector('.submit-btn');
  const popup = document.querySelector('.popup');
  const popupCrcles = document.querySelector('.popup__circles');
  const backHomePage = document.querySelector('.popup__back');
  const regBtn = document.querySelectorAll('.reg-btn');
  const regPopup = document.querySelector('.registration');
  const closeRegPopup = document.querySelector('.registration__back');
  const fullpage = document.querySelector('#fullpage');
  const menu = document.querySelector('#menu');
  const header = document.querySelector('#header');
  const registrationBgLeft = document.querySelector('.registration__bg-left');
  const registrationBgRight = document.querySelector('.registration__bg-right');
  const registrationBgCenter = document.querySelector('.registration__bg-center');

  let repeatReg = true;
  let repeatPopup = true;

  regBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      regPopup.classList.add('show-popup');
      fullpage.classList.add('hide-all');
      menu.classList.add('hide-all');
      header.classList.add('hide-all');

      if (repeatReg) {
        repeatReg = false;

        setTimeout(() => {
          registrationBgLeft.classList.add('scale');
          registrationBgRight.classList.add('scale');
          registrationBgCenter.classList.add('scale');

          var typed = new Typed('#root0', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings0', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root2', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings2', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root3', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings3', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root4', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings4', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root5', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings5', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root6', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings6', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root7', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings7', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root8', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings8', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root9', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings9', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root10', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings10', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root11', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings11', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });

          var typed = new Typed('#cash1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash2', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings2', // Тут id блока из которого берем строки для анимации
            typeSpeed: 60, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash3', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings3', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash4', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings4', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash5', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings5', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash6', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings6', // Тут id блока из которого берем строки для анимации
            typeSpeed: 60, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash7', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings7', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash8', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings8', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        }, 800);

        var typed = new Typed('#typed', {
          // Тут id того блока, в которм будет анимация
          stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
          typeSpeed: 80, // Скорость печати
          startDelay: 500, // Задержка перед стартом анимации
          backSpeed: 50, // Скорость удаления
          showCursor: false,
          loop: false, // Указываем, повторять ли анимацию
        });
      }
    });
  });

  closeRegPopup.addEventListener('click', () => {
    regPopup.classList.remove('show-popup');
    fullpage.classList.remove('hide-all');
    menu.classList.remove('hide-all');
    header.classList.remove('hide-all');
  });

  submitBtn.addEventListener('click', () => {
    regPopup.classList.add('hide-reg-popup');
    popup.classList.add('show-popup');
    setTimeout(() => {
      popupCrcles.classList.add('show-circles');
    }, 2000);

    if (repeatPopup) {
      repeatPopup = false;
      var typed = new Typed('#typed1', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#typed-strings1', // Тут id блока из которого берем строки для анимации
        typeSpeed: 100, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
      var typed = new Typed('#typed2', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#typed-strings2', // Тут id блока из которого берем строки для анимации
        typeSpeed: 25, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
      var typed = new Typed('#typed3', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#typed-strings3', // Тут id блока из которого берем строки для анимации
        typeSpeed: 40, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });

      var typed = new Typed('#typed4', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#typed-strings4', // Тут id блока из которого берем строки для анимации
        typeSpeed: 40, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
      var typed = new Typed('#typed5', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#typed-strings5', // Тут id блока из которого берем строки для анимации
        typeSpeed: 40, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
      var typed = new Typed('#typed6', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#typed-strings6', // Тут id блока из которого берем строки для анимации
        typeSpeed: 40, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });

      var typed = new Typed('#typed7', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#typed-strings7', // Тут id блока из которого берем строки для анимации
        typeSpeed: 40, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
      var typed = new Typed('#typed8', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#typed-strings8', // Тут id блока из которого берем строки для анимации
        typeSpeed: 40, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
    }
  });

  backHomePage.addEventListener('click', () => {
    regPopup.classList.remove('hide-reg-popup');
    popup.classList.remove('show-popup');
    popupCrcles.classList.remove('show-circles');
  });

  function tickOffer() {
    var seed = '';
    var delay = 1;
    var amount = 10;
    var numLength = 48;

    var amountNum = 0;
    var frameNum = 0;
    var numPosition = 0;
    var rng = new Math.seedrandom(seed);

    var offersNumbers = document.querySelectorAll('.offers__numbers code');

    function tick() {
      frameNum++;
      if (frameNum > delay) {
        amountNum++;
        frameNum = 0;
        for (i = numPosition; i < numLength; i++) {
          offersNumbers[i].innerHTML = Math.floor(rng() * 10);
        }
      }
      if (amountNum > amount) {
        numPosition++;
        amountNum = 0;
      }
      if (numPosition < numLength) {
        requestAnimationFrame(tick);
      } else {
        numPosition = 0;
      }
    }
    tick();
  }

  function tickGarant() {
    var seed = '';
    var delay = 1;
    var amount = 10;
    var numLength = 48;

    var amountNum = 0;
    var frameNum = 0;
    var numPosition = 0;
    var rng = new Math.seedrandom(seed);

    var garantNumbers = document.querySelectorAll('.garant__numbers code');
    function tick() {
      frameNum++;
      if (frameNum > delay) {
        amountNum++;
        frameNum = 0;
        for (i = numPosition; i < numLength; i++) {
          garantNumbers[i].innerHTML = Math.floor(rng() * 10);
        }
      }
      if (amountNum > amount) {
        numPosition++;
        amountNum = 0;
      }
      if (numPosition < numLength) {
        requestAnimationFrame(tick);
      } else {
        numPosition = 0;
      }
    }

    tick();
  }
});
