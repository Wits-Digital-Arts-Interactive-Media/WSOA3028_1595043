const root = "/WSOA3028A_1595043"
const menuItems =
    [
        { name: "Home", href: `${root}/index.html` },
        { name: "Blog", href: `${root}/Blog Posts/Blogs.html` },
        { name: "Essays", href: `${root}/Essay/Essay.html` },
        { name: "Portfolio", href: `${root}/Portfolio/Portfolio.html` },
        { name: "Design", href: `${root}/Design/Design.html` },
        { name: "Miscellaneous", href: `${root}/Miscellaneous/Misc.html` },
    ]
const blogPages =
    [
        {name :"Blog Posts"},
    ]
export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")

    for (let menuItem of menuItems) {
        const li = document.createElement("li")
        if (currentPage != menuItem.name) {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
           
        } else (li.innerText = menuItem.name)
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}