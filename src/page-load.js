
import MainImage from './burger.jpg'

export default function pageLoad(parent){
    const mainHeader = document.createElement('h1')
    const description = document.createElement('div')
    const homePage = document.createElement('div')



    description.textContent ="Welcome to a Taste Adventure! Dive into a world where tradition meets innovation. At Flavor Fusion Burger House, we\'re not just serving burgers; we\'re crafting culinary experiences that tantalize your taste buds. Here\'s a flavor journey like no other:"
    mainHeader.textContent= "The Grand Burger"
    const titleImage = new Image();
    titleImage.src = MainImage
    homePage.appendChild(mainHeader)
    homePage.appendChild(titleImage)
    homePage.appendChild(description)
    parent.appendChild(homePage)
}


