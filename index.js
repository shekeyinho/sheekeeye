const primarynav = document.querySelector(".linkbuttons")
const navtoggle = document.querySelector(".mobile-nav-toggle")

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
