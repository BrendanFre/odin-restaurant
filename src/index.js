import './style.css';
import pageLoad from './page-load.js'
import contact from './contact.js'
import menu from './menu.js'

const content = document.querySelector('#content')
const navBar = document.createElement('div')
const pageContent = document.createElement('div')
const menuButton = document.createElement('button')

// Navbar
navBar.appendChild(createButton('Home', 'home', pageContent))
navBar.appendChild(createButton('Menu', "menu", pageContent))
navBar.appendChild(createButton('Contact Us', "contact", pageContent))

// Menu Button

function createButton(label, content, target){
    const navButton = document.createElement('button')
    navButton.textContent = label
    navButton.addEventListener('click', ()=>{
        removeAllChildren(target)
        if(content == "menu"){
            menu(target)
        } else if(content == "contact"){
            contact(target)

        } else if(content == "home"){
            pageLoad(pageContent)
        }

    })
    return navButton

}

content.appendChild(navBar)
content.appendChild(pageContent)



const removeAllChildren = (parent)=>{
    console.log('outside remove')
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
        console.log('Removing')
    }
}

pageLoad(pageContent)