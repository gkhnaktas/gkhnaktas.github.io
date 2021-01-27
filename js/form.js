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
window.addEventListener("DOMContentLoaded", function() {

// get the form elements defined in your form HTML above

var form = document.getElementById("contact-form");
var button = document.getElementById("contact-button");
var status = document.getElementById("form-status");

// Success and Error functions for after the form is submitted

function success() {
  form.reset();
  button.style = "display: none ";
  status.innerHTML = "Thanks!";
}

function error() {
  status.innerHTML = "Oops! There was a problem.";
}

// handle the form submission event

form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = function() {
  if (xhr.readyState !== XMLHttpRequest.DONE) return;
  if (xhr.status === 200) {
    success(xhr.response, xhr.responseType);
  } else {
    error(xhr.status, xhr.response, xhr.responseType);
  }
};
xhr.send(data);
}
