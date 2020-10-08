const navLinks = document.querySelector("header nav ul")
const menu = document.querySelector(".menu")
let viewPassword = document.querySelector('.fa-eye-slash')
const passwordInput = document.querySelector('.password')

menu.addEventListener('click', showNavLinks);
viewPassword.addEventListener('click', viewHidePassword);

function showNavLinks(e) {
  e.preventDefault();

  navLinks.classList.toggle('show');
}

document.addEventListener('click', e => {
  if (e.target.parentElement !== menu && navLinks.classList.contains('show')  ) {
    navLinks.classList.remove('show')
  }
})

function viewHidePassword(e) {
  e.preventDefault();
  
  if (viewPassword.classList.contains("fa-eye-slash")) {
    passwordInput.type = "text"
    viewPassword.classList.remove("fa-eye-slash")
    viewPassword.classList.add("fa-eye")
    viewPassword = document.querySelector('.fa-eye')
  } else {
    passwordInput.type = "password"
    viewPassword.classList.remove("fa-eye")
    viewPassword.classList.add("fa-eye-slash")
    viewPassword = document.querySelector('.fa-eye-slash')
  }

}


