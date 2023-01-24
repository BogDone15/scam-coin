// const popup = document.querySelector('.popup');
// const regPopup = document.querySelector('.registration');
// const popupCircles = document.querySelector('.popup__circles');
// let repeatPopup = true;

// const $signupForm = $('.form');

// jQuery.validator.addMethod(
//   'emailfull',
//   function (value, element) {
//     return (
//       this.optional(element) ||
//       /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(
//         value
//       )
//     );
//   },
//   '<span class="ua">Enter correct email!</span>'
// );

// $signupForm.validate({
//   rules: {
//     email: {
//       required: true,
//       email: true,
//       emailfull: true,
//     },
//     name: {
//       required: true,
//       minlength: 6,
//     },
//   },
//   messages: {
//     email: {
//       required: '<span class="ua">Enter correct email!</span>',
//       email: '<span class="ua">Enter correct email!</span>',
//     },
//     name: {
//       required:
//         '<span class="ua">Enter correct name (min. 6 latin chars)!</span>',
//     },
//   },

//   submitHandler: function (form) {
//     let dataStr = $(form).serialize();
//     $.ajax({
//       type: 'POST',
//       url: 'send.php',
//       dataType: 'text',
//       data: dataStr,

//       error: function () {
//         alert('Error occured.please try again');
//       },
//     }).done(function () {
//       if (regPopup) {
//         regPopup.classList.add('hide-reg-popup');
//       }
//       popup.classList.add('show-popup');

//       setTimeout(() => {
//         popupCircles.classList.add('show-circles');
//       }, 2000);

//       if (repeatPopup) {
//         repeatPopup = false;
//         var typed = new Typed('#typed1', {
//           // Тут id того блока, в которм будет анимация
//           stringsElement: '#typed-strings1', // Тут id блока из которого берем строки для анимации
//           typeSpeed: 5, // Скорость печати
//           startDelay: 500, // Задержка перед стартом анимации
//           backSpeed: 50, // Скорость удаления
//           showCursor: false,
//           loop: false, // Указываем, повторять ли анимацию
//         });
//         var typed = new Typed('#typed2', {
//           // Тут id того блока, в которм будет анимация
//           stringsElement: '#typed-strings2', // Тут id блока из которого берем строки для анимации
//           typeSpeed: 5, // Скорость печати
//           startDelay: 800, // Задержка перед стартом анимации
//           backSpeed: 50, // Скорость удаления
//           showCursor: false,
//           loop: false, // Указываем, повторять ли анимацию
//         });
//         var typed = new Typed('#typed3', {
//           // Тут id того блока, в которм будет анимация
//           stringsElement: '#typed-strings3', // Тут id блока из которого берем строки для анимации
//           typeSpeed: 5, // Скорость печати
//           startDelay: 1400, // Задержка перед стартом анимации
//           backSpeed: 50, // Скорость удаления
//           showCursor: false,
//           loop: false, // Указываем, повторять ли анимацию
//         });

//         var typed = new Typed('#typed4', {
//           // Тут id того блока, в которм будет анимация
//           stringsElement: '#typed-strings4', // Тут id блока из которого берем строки для анимации
//           typeSpeed: 5, // Скорость печати
//           startDelay: 1700, // Задержка перед стартом анимации
//           backSpeed: 50, // Скорость удаления
//           showCursor: false,
//           loop: false, // Указываем, повторять ли анимацию
//         });
//         var typed = new Typed('#typed5', {
//           // Тут id того блока, в которм будет анимация
//           stringsElement: '#typed-strings5', // Тут id блока из которого берем строки для анимации
//           typeSpeed: 5, // Скорость печати
//           startDelay: 2100, // Задержка перед стартом анимации
//           backSpeed: 50, // Скорость удаления
//           showCursor: false,
//           loop: false, // Указываем, повторять ли анимацию
//         });
//         var typed = new Typed('#typed6', {
//           // Тут id того блока, в которм будет анимация
//           stringsElement: '#typed-strings6', // Тут id блока из которого берем строки для анимации
//           typeSpeed: 5, // Скорость печати
//           startDelay: 2300, // Задержка перед стартом анимации
//           backSpeed: 50, // Скорость удаления
//           showCursor: false,
//           loop: false, // Указываем, повторять ли анимацию
//         });

//         var typed = new Typed('#typed7', {
//           // Тут id того блока, в которм будет анимация
//           stringsElement: '#typed-strings7', // Тут id блока из которого берем строки для анимации
//           typeSpeed: 5, // Скорость печати
//           startDelay: 2600, // Задержка перед стартом анимации
//           backSpeed: 50, // Скорость удаления
//           showCursor: false,
//           loop: false, // Указываем, повторять ли анимацию
//         });
//         var typed = new Typed('#typed8', {
//           // Тут id того блока, в которм будет анимация
//           stringsElement: '#typed-strings8', // Тут id блока из которого берем строки для анимации
//           typeSpeed: 5, // Скорость печати
//           startDelay: 3200, // Задержка перед стартом анимации
//           backSpeed: 50, // Скорость удаления
//           showCursor: false,
//           loop: false, // Указываем, повторять ли анимацию
//         });
//       }
//     });
//     return false; // required to block normal submit since you used ajax
//   },
// });
