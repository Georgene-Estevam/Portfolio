const botaoMobile = document.getElementById ('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById ('nav')
    nav.classList.toggle('active')
}

botaoMobile.addEventListener('click', toggleMenu)