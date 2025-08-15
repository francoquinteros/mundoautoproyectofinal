(function(){
  const form = document.querySelector('.needs-validation');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
})();