const $signupForm = $('#reg');

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
  '<span class="ua">Enter correct email!</span>'
);

jQuery.validator.addMethod(
  'passfull',
  function (value, element) {
    return (
      this.optional(element) ||
      /^[a-z0-9\.-_\-\%\*\)\(\?\@\#\$\~]{6,}$/i.test(value)
    );
  },
  '<span class="ua"></span>'
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
      required: '<span class="ua">Enter correct email!</span>',
      email: '<span class="ua">Enter correct email!</span>',
    },
    name: {
      required:
        '<span class="ua">Enter correct name (min. 6 latin chars)!</span>',
    },
  },
});

$('#reg').on('submit', function (e) {
  console.log(1);
  if ($signupForm.valid()) {
    e.preventDefault();

    $.ajax({
      type: $(this).attr('method'),

      url: $(this).attr('action'),

      data: $(this).serialize(),

      dataType: 'json',

      success: function (response) {
        if (response.redirectURL) {
          window.location.href = response.redirectURL;

          return;
        }

        alert(response.error);
      },
    });
  }
});
