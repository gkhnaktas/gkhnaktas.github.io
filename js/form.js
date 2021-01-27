(function() {
  var floatingLabel;

  floatingLabel = (function() {
    function floatingLabel(form, options) {
      var event, i, input, j, label, len, len1, ref, ref1;
      if (options == null) {
        options = {};
      }
      if (!form) {
        return;
      }
      options.focusClass || (options.focusClass = "focus");
      options.activeClass || (options.activeClass = "active");
      options.errorClass || (options.errorClass = "error");
      form.classList.add('has-floated-label');
      ref = form.querySelectorAll('label');
      for (i = 0, len = ref.length; i < len; i++) {
        label = ref[i];
        if (!(input = document.querySelector("#" + (label.getAttribute('for'))))) {
          return;
        }
        ref1 = ['keyup', 'input', 'change'];
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          event = ref1[j];
          input.addEventListener(event, function() {
            this.parentNode.classList.remove(options.errorClass);
            return this.parentNode.classList.toggle(options.activeClass, !!this.value);
          });
        }
        input.addEventListener('focus', function() {
          return this.parentNode.classList.add(options.focusClass);
        });
        input.addEventListener('blur', function() {
          return this.parentNode.classList.remove(options.focusClass);
        });
        input.parentNode.classList.toggle(options.activeClass, !!input.value);
      }
    }

    return floatingLabel;

  })();

  window.floatingLabel = new floatingLabel(document.querySelector('.form'));

}).call(this);

document.querySelector('button').addEventListener('click', function() {
  event.preventDefault();

  let contact_form = document.getElementById('contact-form');
  let formData = new FormData(contact_form);


  console.log(formData);

  fetch('https://formspree.io/f/me@gaktas.com', {
      method: 'post',
      body: formData,
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  })
})
