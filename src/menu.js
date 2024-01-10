import MainMenu from './menu.csv'

export default function menu(page){
console.log('Yay')
console.log(menuList)

page.innerHTML = menuList.join("")


}

const menuList = MainMenu.map((item)=>{
    return `<div>${item[0]}<span>${item[1]}</span></div>`
})