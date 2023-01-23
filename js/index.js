$(document).ready(function () {
  const loaderContainer = document.querySelector('.loader-container');
  setTimeout(() => {
    loaderContainer.classList.add('hide-loader');
  }, 3000);

  if (window.matchMedia('(max-width: 579px)').matches) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('.header').addClass('header-bottom');
      } else {
        $('.header').removeClass('header-bottom');
      }
    });
  }

  let repeatReg = true;
  let repeatPopup = true;
  let repeatSecondSection = true;
  let repeatThirdSection = true;
  let repeatFourthSection = true;
  let repeatFifthSection = true;
  let repeatSixthSection = true;
  let repeatSeventhSection = true;

  //START

  if (window.matchMedia('(max-width: 899px)').matches) {
    const infoSubtitle = $('.info__subtitle');
    const benefitsText = $('.benefits__title');
    const offersSubtitle = $('.offers__subtitle');
    const managerSubtitle = $('.manager__subtitle');
    const managerControl = $('.manager__control');
    const cooperationText = $('.cooperation__text');

    let repeatMobFirst = true;
    let repeatMobSecond = true;
    let repeatMobThird = true;
    let repeatMobFourh = true;
    let repeatMobFifth = true;
    let repeatMobSixth = true;
    $(window).scroll(function () {
      let scroll = $(window).scrollTop() + $(window).height();
      let offsetFirst = infoSubtitle.offset().top;
      let offsetSecond = benefitsText.offset().top;
      let offsetThird = offersSubtitle.offset().top;
      let offsetFourth = managerSubtitle.offset().top;
      let offsetFifth = managerControl.offset().top;
      let offsetSixth = cooperationText.offset().top;

      if (scroll > offsetFirst) {
        if (repeatMobFirst) {
          repeatMobFirst = false;
          var typed = new Typed('#info1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#info-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        }
      }

      if (scroll > offsetSecond) {
        if (repeatMobSecond) {
          repeatMobSecond = false;
          var typed = new Typed('#benefits1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#benefits-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 1, // Скорость печати
            startDelay: 100, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        }
      }

      if (scroll > offsetThird) {
        if (repeatMobThird) {
          repeatMobThird = false;
          var typed = new Typed('#offers1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#offers-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        }
      }

      if (scroll > offsetFourth) {
        if (repeatMobFourh) {
          repeatMobFourh = false;
          var typed = new Typed('#manager1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#manager-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        }
      }

      if (scroll > offsetFifth) {
        if (repeatMobFifth) {
          repeatMobFifth = false;
          var typed = new Typed('#manager2', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#manager-strings2', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        }
      }

      if (scroll > offsetSixth) {
        if (repeatMobSixth) {
          repeatMobSixth = false;
          var typed = new Typed('#footer1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#footer-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 80, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        }
      }
    });

    var typed = new Typed('#cash11', {
      // Тут id того блока, в которм будет анимация
      stringsElement: '#cash-strings11', // Тут id блока из которого берем строки для анимации
      typeSpeed: 80, // Скорость печати
      startDelay: 500, // Задержка перед стартом анимации
      backSpeed: 50, // Скорость удаления
      showCursor: false,
      loop: false, // Указываем, повторять ли анимацию
    });
    var typed = new Typed('#cash12', {
      // Тут id того блока, в которм будет анимация
      stringsElement: '#cash-strings12', // Тут id блока из которого берем строки для анимации
      typeSpeed: 80, // Скорость печати
      startDelay: 500, // Задержка перед стартом анимации
      backSpeed: 50, // Скорость удаления
      showCursor: false,
      loop: false, // Указываем, повторять ли анимацию
    });

    setTimeout(() => {
      garantBg.classList.add('full-width');
      garantSqr.classList.add('show-sqr');
      garantItem.forEach((item) => {
        item.classList.add('show-item');
      });
    }, 1000);
  }

  //END

  const garantBg = document.querySelector('.garant__bg');
  const garantItem = document.querySelectorAll('.garant__item');
  const garantSqr = document.querySelector('.garant__sqr');

  var slideIndexS = 0,
    sliding = false;

  if (window.matchMedia('(min-width: 900px)').matches) {
    $('#fullpage').fullpage({
      anchors: [
        'home',
        'steps',
        'benefits',
        'fieryoffers',
        'managers',
        'news',
        'partners',
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
          if (repeatSecondSection) {
            repeatSecondSection = false;

            var typed = new Typed('#cash11', {
              // Тут id того блока, в которм будет анимация
              stringsElement: '#cash-strings11', // Тут id блока из которого берем строки для анимации
              typeSpeed: 80, // Скорость печати
              startDelay: 500, // Задержка перед стартом анимации
              backSpeed: 50, // Скорость удаления
              showCursor: false,
              loop: false, // Указываем, повторять ли анимацию
            });
            var typed = new Typed('#cash12', {
              // Тут id того блока, в которм будет анимация
              stringsElement: '#cash-strings12', // Тут id блока из которого берем строки для анимации
              typeSpeed: 80, // Скорость печати
              startDelay: 500, // Задержка перед стартом анимации
              backSpeed: 50, // Скорость удаления
              showCursor: false,
              loop: false, // Указываем, повторять ли анимацию
            });
          }

          setTimeout(() => {
            garantBg.classList.add('full-width');
            garantSqr.classList.add('show-sqr');
            garantItem.forEach((item) => {
              item.classList.add('show-item');
            });
          }, 1000);
        }
        if (origin.index >= 0) {
          document.querySelector('#header').classList.add('show-header');
        }
        if (origin.index === 1 && direction === 'up') {
          document.querySelector('#header').classList.remove('show-header');
        }
        if (origin.index === 1 && slideIndexS === 0) {
          if (repeatThirdSection) {
            repeatThirdSection = false;
            var typed = new Typed('#benefits1', {
              // Тут id того блока, в которм будет анимация
              stringsElement: '#benefits-strings1', // Тут id блока из которого берем строки для анимации
              typeSpeed: 1, // Скорость печати
              startDelay: 100, // Задержка перед стартом анимации
              backSpeed: 50, // Скорость удаления
              showCursor: false,
              loop: false, // Указываем, повторять ли анимацию
            });
          }
        }
        if (origin.index === 2 && slideIndexS === 0) {
          if (repeatFourthSection) {
            repeatFourthSection = false;
            var typed = new Typed('#offers1', {
              // Тут id того блока, в которм будет анимация
              stringsElement: '#offers-strings1', // Тут id блока из которого берем строки для анимации
              typeSpeed: 80, // Скорость печати
              startDelay: 500, // Задержка перед стартом анимации
              backSpeed: 50, // Скорость удаления
              showCursor: false,
              loop: false, // Указываем, повторять ли анимацию
            });
          }
        }
        if (origin.index === 3 && slideIndexS === 0) {
          if (repeatFifthSection) {
            repeatFifthSection = false;
            var typed = new Typed('#manager1', {
              // Тут id того блока, в которм будет анимация
              stringsElement: '#manager-strings1', // Тут id блока из которого берем строки для анимации
              typeSpeed: 80, // Скорость печати
              startDelay: 500, // Задержка перед стартом анимации
              backSpeed: 50, // Скорость удаления
              showCursor: false,
              loop: false, // Указываем, повторять ли анимацию
            });

            var typed = new Typed('#manager2', {
              // Тут id того блока, в которм будет анимация
              stringsElement: '#manager-strings2', // Тут id блока из которого берем строки для анимации
              typeSpeed: 80, // Скорость печати
              startDelay: 500, // Задержка перед стартом анимации
              backSpeed: 50, // Скорость удаления
              showCursor: false,
              loop: false, // Указываем, повторять ли анимацию
            });
          }
        }
        if (origin.index === 4 && slideIndexS === 0) {
          if (repeatSixthSection) {
            repeatSixthSection = false;
            var typed = new Typed('#info1', {
              // Тут id того блока, в которм будет анимация
              stringsElement: '#info-strings1', // Тут id блока из которого берем строки для анимации
              typeSpeed: 80, // Скорость печати
              startDelay: 500, // Задержка перед стартом анимации
              backSpeed: 50, // Скорость удаления
              showCursor: false,
              loop: false, // Указываем, повторять ли анимацию
            });
          }
        }
        if (origin.index === 5 && slideIndexS === 0) {
          if (repeatSeventhSection) {
            repeatSeventhSection = false;
            var typed = new Typed('#footer1', {
              // Тут id того блока, в которм будет анимация
              stringsElement: '#footer-strings1', // Тут id блока из которого берем строки для анимации
              typeSpeed: 80, // Скорость печати
              startDelay: 500, // Задержка перед стартом анимации
              backSpeed: 50, // Скорость удаления
              showCursor: false,
              loop: false, // Указываем, повторять ли анимацию
            });
          }
        }
      },
    });
  }

  document.querySelector('.steps-move').addEventListener('click', () => {
    if (repeatSecondSection) {
      repeatSecondSection = false;

      var typed = new Typed('#cash11', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#cash-strings11', // Тут id блока из которого берем строки для анимации
        typeSpeed: 80, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
      var typed = new Typed('#cash12', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#cash-strings12', // Тут id блока из которого берем строки для анимации
        typeSpeed: 80, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
    }
  });

  document.querySelector('.benefits-move').addEventListener('click', () => {
    if (repeatThirdSection) {
      repeatThirdSection = false;
      var typed = new Typed('#benefits1', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#benefits-strings1', // Тут id блока из которого берем строки для анимации
        typeSpeed: 1, // Скорость печати
        startDelay: 100, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
    }
  });

  document.querySelector('.fieryoffers-move').addEventListener('click', () => {
    if (repeatFourthSection) {
      repeatFourthSection = false;
      var typed = new Typed('#offers1', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#offers-strings1', // Тут id блока из которого берем строки для анимации
        typeSpeed: 80, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
    }
  });

  document.querySelector('.managers-move').addEventListener('click', () => {
    if (repeatFifthSection) {
      repeatFifthSection = false;
      var typed = new Typed('#manager1', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#manager-strings1', // Тут id блока из которого берем строки для анимации
        typeSpeed: 80, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });

      var typed = new Typed('#manager2', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#manager-strings2', // Тут id блока из которого берем строки для анимации
        typeSpeed: 80, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
    }
  });

  document.querySelector('.news-move').addEventListener('click', () => {
    if (repeatSixthSection) {
      repeatSixthSection = false;
      var typed = new Typed('#info1', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#info-strings1', // Тут id блока из которого берем строки для анимации
        typeSpeed: 80, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
    }
  });

  document.querySelector('.partners-move').addEventListener('click', () => {
    if (repeatSeventhSection) {
      repeatSeventhSection = false;
      var typed = new Typed('#footer1', {
        // Тут id того блока, в которм будет анимация
        stringsElement: '#footer-strings1', // Тут id блока из которого берем строки для анимации
        typeSpeed: 80, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        showCursor: false,
        loop: false, // Указываем, повторять ли анимацию
      });
    }
  });

  if ($('.offers__move')) {
    $('.offers__move').marquee({
      duration: 15000,
      startVisible: true,
      duplicated: true,
      direction: 'right',
    });
  }

  const submitBtn = document.querySelector('.registration__group');
  const popup = document.querySelector('.popup');
  const popupCircles = document.querySelector('.popup__circles');
  const backHomePage = document.querySelector('.popup__back');
  const regBtn = document.querySelectorAll('.reg-btn');
  const regPopup = document.querySelector('.registration');
  const closeRegPopup = document.querySelector('.registration__back');
  const fullpage = document.querySelector('#fullpage');
  const menu = document.querySelector('#menu');
  const header = document.querySelector('#header');
  const registrationBgLeft = document.querySelector('.registration__bg-left');
  const registrationBgRight = document.querySelector('.registration__bg-right');
  const registrationBgCenter = document.querySelector(
    '.registration__bg-center'
  );

  var typed = new Typed('#coin1', {
    // Тут id того блока, в которм будет анимация
    stringsElement: '#coin-strings1', // Тут id блока из которого берем строки для анимации
    typeSpeed: 80, // Скорость печати
    startDelay: 1500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    showCursor: false,
    loop: false, // Указываем, повторять ли анимацию
  });
  var typed = new Typed('#coin2', {
    // Тут id того блока, в которм будет анимация
    stringsElement: '#coin-strings2', // Тут id блока из которого берем строки для анимации
    typeSpeed: 50, // Скорость печати
    startDelay: 1500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    showCursor: false,
    loop: false, // Указываем, повторять ли анимацию
  });

  regBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      regPopup.classList.add('show-popup');
      // fullpage.classList.add('hide-all');
      // menu.classList.add('hide-all');
      // header.classList.add('hide-all');

      if (repeatReg) {
        repeatReg = false;

        setTimeout(() => {
          registrationBgLeft.classList.add('scale');
          registrationBgRight.classList.add('scale');
          registrationBgCenter.classList.add('scale');

          var typed = new Typed('#root0', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings0', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 300, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root2', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings2', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 650, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root3', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings3', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 900, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root4', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings4', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 1200, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root5', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings5', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 1800, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root6', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings6', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 2100, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root7', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings7', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 2500, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root8', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings8', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 2900, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root9', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings9', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 3300, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root10', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings10', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 3700, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#root11', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#root-strings11', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 4200, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });

          var typed = new Typed('#cash1', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings1', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 300, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash2', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings2', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 600, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash3', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings3', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 1000, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash4', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings4', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 1400, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash5', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings5', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 1800, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash6', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings6', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 2200, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash7', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings7', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 2600, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
          var typed = new Typed('#cash8', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#cash-strings8', // Тут id блока из которого берем строки для анимации
            typeSpeed: 5, // Скорость печати
            startDelay: 3000, // Задержка перед стартом анимации
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

  backHomePage.addEventListener('click', () => {
    regPopup.classList.remove('hide-reg-popup');
    popup.classList.remove('show-popup');
    popupCircles.classList.remove('show-circles');
  });

  let seed = '';
  let delay = 1;
  let amount = 10;
  let numLength = 192;

  let amountNum = 0;
  let frameNum = 0;
  let numPosition = 0;
  let rng = new Math.seedrandom(seed);

  const offersNumbers = document.querySelectorAll('code');

  function tick() {
    frameNum++;
    if (frameNum > delay) {
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

  const benefitsPos = document.querySelectorAll('.benefits__pos');
  const benefitsNavPrev = document.querySelector('.benefits__nav-prev');
  const benefitsNavNext = document.querySelector('.benefits__nav-next');
  const moveLine = document.querySelector('.benefits__img-line-move');

  let itemPos = 1;

  let repeatSeconditemPos = true;
  let repeatThirditemPos = true;
  let repeatFourthitemPos = true;
  let repeatFifthitemPos = true;
  let repeatSixthitemPos = true;

  document.querySelectorAll(`[data-item="1"]`).forEach((item) => {
    item.style.display = 'block';
  });
  document
    .querySelector(`[data-visible="${itemPos}"]`)
    .classList.add('visible');

  const showNextItem = () => {
    if (itemPos < 6) {
      document.querySelectorAll(`[data-item="${itemPos}"]`).forEach((item) => {
        item.style.display = 'none';
      });

      document
        .querySelectorAll(`[data-benefits="${itemPos}"]`)
        .forEach((item) => {
          item.style.display = 'none';
        });

      document.querySelector(`[data-benefits="${itemPos}"]`).style.display =
        'none';

      document
        .querySelectorAll(`[data-item="${itemPos + 1}"]`)
        .forEach((item) => {
          item.style.display = 'block';
        });

      document
        .querySelector(`[data-visible="${itemPos + 1}"]`)
        .classList.add('visible');

      moveLine.classList.add('line');
      setTimeout(() => {
        moveLine.classList.remove('line');
      }, 200);

      itemPos++;

      if (itemPos == 2) {
        if (repeatSeconditemPos) {
          repeatSeconditemPos = false;
          var typed = new Typed('#benefits2', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#benefits-strings2', // Тут id блока из которого берем строки для анимации
            typeSpeed: 1, // Скорость печати
            startDelay: 100, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        } else {
          document.querySelector('#benefits2').style.display = 'block';
        }
      }

      if (itemPos == 3) {
        if (repeatThirditemPos) {
          repeatThirditemPos = false;
          var typed = new Typed('#benefits3', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#benefits-strings3', // Тут id блока из которого берем строки для анимации
            typeSpeed: 1, // Скорость печати
            startDelay: 100, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        } else {
          document.querySelector('#benefits3').style.display = 'block';
        }
      }

      if (itemPos == 4) {
        if (repeatFourthitemPos) {
          repeatFourthitemPos = false;
          var typed = new Typed('#benefits4', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#benefits-strings4', // Тут id блока из которого берем строки для анимации
            typeSpeed: 1, // Скорость печати
            startDelay: 100, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        } else {
          document.querySelector('#benefits4').style.display = 'block';
        }
      }

      if (itemPos == 5) {
        if (repeatFifthitemPos) {
          repeatFifthitemPos = false;
          var typed = new Typed('#benefits5', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#benefits-strings5', // Тут id блока из которого берем строки для анимации
            typeSpeed: 1, // Скорость печати
            startDelay: 100, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        } else {
          document.querySelector('#benefits5').style.display = 'block';
        }
      }

      if (itemPos == 6) {
        if (repeatSixthitemPos) {
          repeatSixthitemPos = false;
          var typed = new Typed('#benefits6', {
            // Тут id того блока, в которм будет анимация
            stringsElement: '#benefits-strings6', // Тут id блока из которого берем строки для анимации
            typeSpeed: 1, // Скорость печати
            startDelay: 100, // Задержка перед стартом анимации
            backSpeed: 50, // Скорость удаления
            showCursor: false,
            loop: false, // Указываем, повторять ли анимацию
          });
        } else {
          document.querySelector('#benefits6').style.display = 'block';
        }
      }

      benefitsPos.forEach((item) => {
        item.textContent = itemPos;
      });
    }
  };

  const showPrevItem = () => {
    if (itemPos > 1) {
      document.querySelectorAll(`[data-item="${itemPos}"]`).forEach((item) => {
        item.style.display = 'none';
      });

      document.querySelector(`[data-benefits="${itemPos}"]`).style.display =
        'none';

      document.querySelector(`[data-benefits="${itemPos - 1}"]`).style.display =
        'block';

      document
        .querySelectorAll(`[data-item="${itemPos - 1}"]`)
        .forEach((item) => {
          item.style.display = 'block';
        });

      document
        .querySelector(`[data-visible="${itemPos}"]`)
        .classList.remove('visible');

      moveLine.classList.add('line');
      setTimeout(() => {
        moveLine.classList.remove('line');
      }, 200);

      itemPos--;

      benefitsPos.forEach((item) => {
        item.textContent = itemPos;
      });
    }
  };

  benefitsNavPrev.addEventListener('click', showNextItem);
  benefitsNavNext.addEventListener('click', showPrevItem);

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

  var swiper = new Swiper('.mySwiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
  });

  var swiper = new Swiper('.mySwiperOffer', {
    scrollbar: {
      el: '.swiper-scrollbar-offer',
      hide: true,
    },
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
  });

  var swiper = new Swiper('.mySwiperGarant', {
    scrollbar: {
      el: '.swiper-scrollbar-garant',
      hide: true,
    },
    slidesPerView: 2,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
  });
});
