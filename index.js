const primarynav = document.querySelector(".buttons")
const navtoggle = document.querySelector(".mobile-nav-toglle")

navtoggle.addEventListener('click', ()=> {
    const visibilty = primarynav.getAttribute('data-visible')

    if(visibilty === "false"){
        primarynav.setAttribute('data-visible', true)

        navtoggle.setAttribute('aria-expanded', "true")
    }
    else if(visibilty === "true"){
        primarynav.setAttribute('data-visible', false)
        navtoggle.setAttribute('aria-expanded', "false")
    }
})
