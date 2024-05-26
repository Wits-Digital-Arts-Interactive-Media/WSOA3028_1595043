const root = "/WSOA3028_1595043"



const menuItems =
[
        { name: "Home", href: root + "/index.html"},
        { name: "Blog", href: root + "/Blog Posts/index.html" },
        { name: "Essays", href: `${root}/Essay/index.html` },
        { name: "Portfolio", href: `${root}/Portfolio/Portfolio.html` },
        { name: "Profile", href: `${root}/Profile/about.html` },
        { name: "Design", href: `${root}/Design/Design.html` },
        { name: "Misc", href: `${root}/Miscellaneous/Misc.html` },
        
]

const BlogPages = [
    { name: "Blog Home", href:  "/WSOA3028_1595043/Blog Posts/index.html" },
    { name: "Page 1", href:  "/WSOA3028_1595043/Blog Posts/Post 1.html"},
    { name: "Page 2", href:  "/WSOA3028_1595043/Blog Posts/Post 2.html"},
    { name: "Page 3", href:  "/WSOA3028_1595043/Blog Posts/Post 3.html"},
    { name: "Page 4", href:  "/WSOA3028_1595043/Blog Posts/Post 4.html"},
    { name: "Page 5", href:  "/WSOA3028_1595043/Blog Posts/Post 5.html"},
    { name: "Page 6", href:  "/WSOA3028_1595043/Blog Posts/Post 6.html"},
    { name: "Page 7", href:  "/WSOA3028_1595043/Blog Posts/Post 7.html"},
    { name: "Page 8", href:  "/WSOA3028_1595043/Blog Posts/Post 8.html"},
    { name: "Page 9", href:  "/WSOA3028_1595043/Blog Posts/Post 9.html"},
    { name: "Page 10", href:  "/WSOA3028_1595043/Blog Posts/Post 10.html"},
    { name: "Page 11", href:  "/WSOA3028_1595043/Blog Posts/Post 11.html"},
    
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
        } else { li.innerText = menuItem.name }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

export function Pageinitialise(currentPage) {
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")
    for (let BlgPage of BlogPages) {
        const li = document.createElement("li")
        if (currentPage != BlgPage.name) {
            const a = document.createElement("a")
            a.innerText = BlgPage.name
            a.setAttribute("href", BlgPage.href)
            li.appendChild(a)
        } else { li.innerText = BlgPage.name }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}

