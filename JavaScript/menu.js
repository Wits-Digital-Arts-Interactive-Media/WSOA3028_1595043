const root = "/"
const menuItems =
    [
        {name: "Home", href: "WSOA3028_1595043/index.html"},
        {name: "Blog Posts", href: "WSOA3028_1595043/index.html"},
        {name: "Essay", href: "WSOA3028_1595043/index.html"},
        {name: "Portfolio", href: "WSOA3028_1595043/Portfolio.html"},
        {name: "Profile", href: "WSOA3028_1595043/about.html"},
        {name: "Design", href: "WSOA3028_1595043/Design.html"},
        {name: "Misc", href: "WSOA3028_1595043/Misc.html"},
        
    ]
const blogPa =
    [
        {name :"Post 1"},
        {name :"Post 2"},
        {name :"Post 3"},
        {name :"Post 4"},
        {name :"Post 5"},
        {name :"Post 6"},
        {name :"Post 7"},
        {name :"Post 8"},
    ]
    function GetRoot()
{
    return root;
}
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
