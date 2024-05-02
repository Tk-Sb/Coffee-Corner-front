const home = document.getElementById("home")
const menu = document.getElementById("menu")
const about = document.getElementById("about")
const contact = document.getElementById("contact")
const navBar = document.getElementById("nav-bar")
const navText = document.getElementsByClassName("nav-text")
const navLine = document.getElementById("nav-line")
const backText = document.getElementById("back-text")

// to load home page
function homeLoad(){
    const goesRight = document.getElementsByClassName("goes-right")
    const goesLeft = document.getElementsByClassName("goes-left")
    const decorations = document.getElementsByClassName("decoration-color")
    
    for(let i = 0; i < goesRight.length; i++){
        goesRight[i].style.transform = "translateX(-1000px)"
        goesRight[i].style.transition = "transform 1s ease-in-out"
    }
    for(let i = 0; i < goesLeft.length; i++){
        goesLeft[i].style.transform = "translateX(1000px)"
        goesLeft[i].style.transition = "transform 1s ease-in-out"
    }
    for(let i = 0; i < decorations.length; i++){
        decorations[i].setAttribute("fill", "#261D14")
        decorations[i].style.transition = "all 1s ease-in-out"
    }
    for(let i = 0; i < navText.length; i++){
        navText[i].style.color = "white"
        navText[i].style.transition = "all 1s ease-in-out"
    }

    navLine.style.backgroundColor = "white"
    navLine .style.transition = "all 1s ease-in-out"

    navBar.style.border = "3px solid white"
    navBar.style.transition = "all 1s ease-in-out"
    
    document.body.style.backgroundColor = "rgba(27, 17, 7, 1)"
    document.body.style.transition = "all 1s ease-in-out"

    backText.style.color = "#261D14"
    backText.style.transition = "all 1s ease-in-out"

}

// to exit home page
function exitHome(to){
    
    const goesRight = document.getElementsByClassName("goes-right")
    const goesLeft = document.getElementsByClassName("goes-left")
    const decorations = document.getElementsByClassName("decoration-color")
    
    for(let i = 0; i < goesLeft.length; i++){
        goesLeft[i].style.transform = "translateX(-1000px)"
        goesLeft[i].style.transition = "transform 1s ease-in-out"
    }
    if(to !== "sign-up"){
        for(let i = 0; i < goesRight.length; i++){
            goesRight[i].style.transform = "translateX(1000px)"
            goesRight[i].style.transition = "transform 1s ease-in-out"
        }
        for(let i = 0; i < decorations.length; i++){
            decorations[i].setAttribute("fill", "rgba(214, 197, 170, 1)")
            decorations[i].style.transition = "all 1s ease-in-out"
        }
        for(let i = 0; i < navText.length; i++){
            navText[i].style.color = "black"
            navText[i].style.transition = "all 1s ease-in-out"
        }
        navBar.style.border = "3px solid black"
        navBar.style.transition = "all 1s ease-in-out"

        document.body.style.backgroundColor = "rgba(239, 223, 197, 1)"
        document.body.style.transition = "all 1s ease-in-out"
        backText.style.color = "rgba(214, 197, 170, 1)"
        backText.style.transition = "all 1s ease-in-out"
    }
    if(to === "menu") {
        navLine.style.transform = "translateX(151px)"
        navLine.style.backgroundColor = "black"
        navLine .style.transition = "all 1s ease-in-out"
    }
    else if(to === "about"){
        navLine.style.transform = "translateX(300px)"
        navLine.style.width = "110px"
        navLine.style.backgroundColor = "black"
        navLine .style.transition = "all 1s ease-in-out"
    }
    else if(to === "contact"){
        navLine.style.transform = "translateX(490px)"
        navLine.style.width = "120px"
        navLine.style.backgroundColor = "black"
        navLine.style.transition = "all 1s ease-in-out"
    }
    setTimeout(() => {
        if(to !== "sign-up"){
            window.location.href = `${to}.html`
        }
    }, 1000)
    
}

// to load menu page
function menuLoad(){
    const goesRight = document.getElementsByClassName("goes-right")
    const goesLeft = document.getElementsByClassName("goes-left")
    const catagoriesNvaLine = document.getElementById("catagories-nav-line")

    for(let i = 0; i < goesRight.length; i++){
        goesRight[i].style.transform = "translateX(-1500px)"
        goesRight[i].style.transition = "all 1s ease-in-out"
    }
    for(let i = 0; i < goesLeft.length; i++){
        goesLeft[i].style.transform = "translateX(1000px)"
        goesLeft[i].style.transition = "all 1s ease-in-out"
    }
    setTimeout(() => {
        catagoriesNvaLine.style.backgroundColor = "white" 
        catagoriesNvaLine.style.transition = "all 1s ease-in-out"
    }, 1000)
}
function coffees(){
    const catagoriesNvaLine = document.getElementById("catagories-nav-line")
    const items = document.getElementById("items")

    if(catagoriesNvaLine.style.left == "1014px"){ // from pastries to coffees
        catagoriesNvaLine.style.left = "839px"
        items.style.transform = "translateX(-1500px)"
    }
    else if(catagoriesNvaLine.style.left == "1195px"){ // from sandwiches to coffees
        catagoriesNvaLine.style.left = "839px"
        catagoriesNvaLine.style.width = "100px"
        items.style.transform = "translateX(-1500px)"
    }
}
function pastries(){
    const catagoriesNvaLine = document.getElementById("catagories-nav-line")
    const items = document.getElementById("items")
    if(catagoriesNvaLine.style.left == "839px"){ // from coffees to pastries
        catagoriesNvaLine.style.left = "1014px"
        items.style.transform = "translateX(-3500px)"
    }
    else if(catagoriesNvaLine.style.left == "1195px"){ // from sandwiches to pastries
        catagoriesNvaLine.style.left = "1014px"
        catagoriesNvaLine.style.width = "100px"
        items.style.transform = "translateX(-3500px)"
    }
}
function sandwiches(){
    const catagoriesNvaLine = document.getElementById("catagories-nav-line")
    const items = document.getElementById("items")

    if(catagoriesNvaLine.style.left == "839px"){ // from coffees to sandwiches
        catagoriesNvaLine.style.left = "1195px"
        catagoriesNvaLine.style.width = "150px"
        items.style.transform = "translateX(-5500px)"
    }
    else if(catagoriesNvaLine.style.left == "1014px"){ // from pastries to sandwiches
        catagoriesNvaLine.style.left = "1195px"
        catagoriesNvaLine.style.width = "150px"
        items.style.transform = "translateX(-5500px)"
    }
}

// to exit menu page
function exitMenu(to){
    const goesRight = document.getElementsByClassName("goes-right")
    const goesLeft = document.getElementsByClassName("goes-left")
    const catagoriesNvaLine = document.getElementById("catagories-nav-line")
    const decorations = document.getElementsByClassName("decoration-color")

    for(let i = 0; i < goesRight.length; i++){
        goesRight[i].style.transform = "translateX(4714px)"
        goesRight[i].style.transition = "all 2s ease-in-out"
    }

    for(let i = 0; i < goesLeft.length; i++){
        goesLeft[i].style.transform = "translateX(-4714px)"
        goesLeft[i].style.transition = "all 2s ease-in-out"
    }

    
    catagoriesNvaLine.style.backgroundColor = "transparent" 
    catagoriesNvaLine.style.transition = "all 200ms ease-in-out"
    
    if(to === "home"){
        for(let i = 0; i < decorations.length; i++){
            decorations[i].setAttribute("fill", "#261D14")
            decorations[i].style.transition = "all 1s ease-in-out"
        }

        for(let i = 0; i < navText.length; i++){
            navText[i].style.color = "white"
            navText[i].style.transition = "all 1s ease-in-out"
        }

        navLine.style.backgroundColor = "white"
        navLine.style.transform = "translateX(-151px)"
        navLine.style.transition = "all 1s ease-in-out"

        document.body.style.backgroundColor = "rgba(27, 17, 7, 1)"
        document.body.style.transition = "all 1s ease-in-out"

        backText.style.color = "#261D14"
        backText.style.transition = "all 1s ease-in-out"

        navBar.style.border = "3px solid white"
        navBar.style.transition = "all 1s ease-in-out"
        
        document.body.style.backgroundColor = "rgba(27, 17, 7, 1)"
        document.body.style.transition = "all 1s ease-in-out"
        
        backText.style.color = "#261D14"
        backText.style.transition = "all 1s ease-in-out"
    
        navBar.style.border = "3px solid white"
        navBar.style.transition = "all 1s ease-in-out"
    }
    else if(to === "about"){
        navLine.style.width = "110px"
        navLine.style.transform = "translateX(151px)"
        navLine.style.transition = "all 1s ease-in-out"
    }
    else if(to === "contact"){
        navLine.style.transform = "translateX(341px)"
        navLine.style.width = "120px"
        navLine.style.transition = "all 1s ease-in-out"
    }



    setTimeout(() => {
        window.location.href = `${to}.html`
    }, 1000)
}

// to load about page
function aboutLoad(){
    const goesLeft = document.getElementsByClassName("goes-left")
    goesLeft[0].style.transform = "translateX(1500px)"
    goesLeft[0].style.transition = "all 1s ease-in-out"
}

// to exit about page
function exitAbout(to){
    const goesLeft = document.getElementsByClassName("goes-left")
    const decorations = document.getElementsByClassName("decoration-color")

    goesLeft[0].style.transform = "translateX(-1500px)"
    goesLeft[0].style.transition = "all 1s ease-in-out"

    if(to === "home"){
        for(let i = 0; i < navText.length; i++){
            navText[i].style.color = "white"
            navText[i].style.transition = "all 1s ease-in-out"
        }

        navLine.style.backgroundColor = "white"
        navLine.style.transform = "translateX(-300px)"
        navLine.style.width = "75px"
        navLine.style.transition = "all 1s ease-in-out"

        document.body.style.backgroundColor = "rgba(27, 17, 7, 1)"
        document.body.style.transition = "all 1s ease-in-out"

        backText.style.color = "#261D14"
        backText.style.transition = "all 1s ease-in-out"

        navBar.style.border = "3px solid white"
        navBar.style.transition = "all 1s ease-in-out"
        for(let element of decorations){
            element.setAttribute("fill", "#261D14")
            element.style.transition = "all 1s ease-in-out"
        }
    }
    else if(to === "menu"){
        navLine.style.transform = "translateX(-151px)"
        navLine.style.width = "75px"
        navLine.style.transition = "all 1s ease-in-out"
    }
    else if(to === "contact"){
        navLine.style.transform = "translateX(190px)"
        navLine.style.width = "120px"
        navLine.style.transition = "all 1s ease-in-out"
    }

    setTimeout(() => {
        window.location.href = `${to}.html`
    }, 1000)
}

// to load contact page
function contactLoad(){

}

// to exit contact page
function exitContact(to){
    const goesLeft = document.getElementsByClassName("goes-left")
    const decorations = document.getElementsByClassName("decoration-color")

    goesLeft[0].style.transform = "translateX(-1500px)"
    goesLeft[0].style.transition = "all 1s ease-in-out"

    if(to === "home"){
        for(let i = 0; i < navText.length; i++){
            navText[i].style.color = "white"
            navText[i].style.transition = "all 1s ease-in-out"
        }

        navLine.style.backgroundColor = "white"
        navLine.style.transform = "translateX(-490px)"
        navLine.style.width = "75px"
        navLine.style.transition = "all 1s ease-in-out"

        document.body.style.backgroundColor = "rgba(27, 17, 7, 1)"
        document.body.style.transition = "all 1s ease-in-out"

        backText.style.color = "#261D14"
        backText.style.transition = "all 1s ease-in-out"

        navBar.style.border = "3px solid white"
        navBar.style.transition = "all 1s ease-in-out"
        for(let element of decorations){
            element.setAttribute("fill", "#261D14")
            element.style.transition = "all 1s ease-in-out"
        }
    }
    else if(to === "menu"){
        navLine.style.transform = "translateX(-341px)"
        navLine.style.width = "75px"
        navLine.style.transition = "all 1s ease-in-out"
    }
    else if(to === "about"){
        navLine.style.transform = "translateX(-190px)"
        navLine.style.width = "110px"
        navLine.style.transition = "all 1s ease-in-out"
    }

    setTimeout(() => {
        window.location.href = `${to}.html`
    }, 1000)
}

// sign up
function signUpBox(){
    exitHome("sign-up")
    document.getElementById("sign-up-form").style.transform = "translateX(1000px)"
    document.getElementById("sign-up-form").style.transition = "all 1s ease-in-out"
}

// login
function login(){
    const form = document.getElementById("form")
    const email = document.getElementById("email")
    const emailIcon = document.getElementById("email-icon")
    const emailLabel = document.getElementById("email-label")
    const confirmPassword = document.getElementById("confirm-password")
    const confirmPasswordIcon = document.getElementById("confirm-password-icon")
    const confirmPasswordLabel = document.getElementById("confirm-password-label")
    const password = document.getElementById("password")
    const passwordIcon = document.getElementById("password-icon")
    const passwordLabel = document.getElementById("password-label")
    const line = document.getElementById("sign-up-nav-line")
    
    const ConfirmPassword = [confirmPassword, confirmPasswordIcon, confirmPasswordLabel]
    const Password = [password, passwordIcon, passwordLabel]
    const Email = [email, emailIcon, emailLabel]

    if(line.style.left === "100px"){
        for(const element of ConfirmPassword){
            element.style.transform = "translateX(-500px)"
            element.style.transition = "all 1s ease-in-out"
        }
        setTimeout(() => {
            for(const element of ConfirmPassword){
                if(element.tagName === "INPUT")
                    element.remove()
            }
        }, 1000)
    
        for(const element of Password){
            element.style.transform = "translateY(50px)"
            element.style.transition = "all 1s ease-in-out"
        }
        for(const element of Email){
            element.style.transform = "translateY(25px)"
            element.style.transition = "all 1s ease-in-out"
        }
    
        line.style.left = "340px"
        line.style.width= "110px"
        line.style.transition = "all 1s ease-in-out"

        form.setAttribute("action", "/login")
    }
}

function signUp(){
    const line = document.getElementById("sign-up-nav-line")
    const form = document.getElementById("form")
    const email = document.getElementById("email")
    const emailIcon = document.getElementById("email-icon")
    const emailLabel = document.getElementById("email-label")
    const confirmPasswordIcon = document.getElementById("confirm-password-icon")
    const confirmPasswordLabel = document.getElementById("confirm-password-label")
    const password = document.getElementById("password")
    const passwordIcon = document.getElementById("password-icon")
    const passwordLabel = document.getElementById("password-label")
    const ConfirmPassword = [confirmPasswordIcon, confirmPasswordLabel]
    const Password = [password, passwordIcon, passwordLabel]
    const Email = [email, emailIcon, emailLabel]

    if(line.style.left === "340px"){
        line.style.left = "100px"
        line.style.width= "130px"
        line.style.transition = "all 1s ease-in-out"
        const confirmPassword = document.createElement("input")
        confirmPassword.setAttribute("id", "confirm-password")
        confirmPassword.setAttribute("class", "inp")
        confirmPassword.setAttribute("placeholder", " ")
        confirmPassword.setAttribute("type", "password")
        confirmPassword.setAttribute("name", "confirmPassword")
        form.appendChild(confirmPassword)

        for(const element of ConfirmPassword){
            element.style.transform = "translateX(0px)"
            element.style.transition = "all 1s ease-in-out"
        }
        for(const element of Password){
            element.style.transform = "translateY(0px)"
            element.style.transition = "all 1s ease-in-out"
        }
        for(const element of Email){
            element.style.transform = "translateY(0px)"
            element.style.transition = "all 1s ease-in-out"
        }
        form.setAttribute("action", "/signUp")
    }
}
