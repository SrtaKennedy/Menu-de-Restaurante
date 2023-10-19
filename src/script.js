const menu = [
    {
        id: 1,
        title: "Croissant",
        categoria: "breakfast",
        price: 25.00,
        img: "/src/images/item-1.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 2,
        title: "Macarrão",
        categoria: "dinner",
        price: 35.05,
        img: "/src/images/item-2.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 3,
        title: "Hambúrguer",
        categoria: "lunch",
        price: 20.00,
        img: "/src/images/item-3.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 4,
        title: "Pancakes",
        categoria: "breakfast",
        price: 25.00,
        img: "/src/images/item-4.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 5,
        title: "Torta",
        categoria: "dessert",
        price: 25.00,
        img: "/src/images/item-5.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 6,
        title: "Espetinho de Carne",
        categoria: "lunch",
        price: 25.00,
        img: "/src/images/item-6.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 7,
        title: "Macarrão com legumes",
        categoria: "dinner",
        price: 25.00,
        img: "/src/images/item-7.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 8,
        title: "Choco Power",
        categoria: "lunch",
        price: 18.00,
        img: "/src/images/item-8.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 9,
        title: "Morango Love",
        categoria: "lunch",
        price: 18.30,
        img: "/src/images/item-9.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 10,
        title: "Uva com Granola",
        categoria: "lunch",
        price: 10.05,
        img: "/src/images/item-10.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 11,
        title: "Shakes",
        categoria: "combo",
        price: 35.00,
        img: "/src/images/item-11.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 12,
        title: "Bolinho de Morango",
        categoria: "dessert",
        price: 20.00,
        img: "/src/images/item-12.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 13,
        title: "Bolo de Leite Ninho",
        categoria: "dessert",
        price: 30.00,
        img: "/src/images/item-13.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    },
    {
        id: 14,
        title: "Pudim",
        categoria: "dessert",
        price: 35.00,
        img: "/src/images/item-14.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis vitae sapien fermentum sodales. Ut maximus nulla in ullamcorper pretium."
    }
]

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener ("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">R$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`;
    });

    displayMenu = displayMenu.join("");
    
    sectionCenter.innerHTML = displayMenu;
};


function displayMenuButtons() {
    const categorias = menu.reduce(
        function (values, item) {
            if (!values.includes(item.categoria)) {
                values.push(item.categoria);
            }
            return values;
        },
        ["all"]
    );

    const categoriaBtns = categorias
    .map(function(categoria) {
        return `<button type="button" class="filter-btn" data-id=${categoria}>${categoria}</button>`;
    })
    .join("");

    btnContainer.innerHTML = categoriaBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const categoria = e.currentTarget.dataset.id;
            const menuCategoria = menu.filter(function (menuItem) {
                if (menuItem.categoria === categoria) {
                    return menuItem;
                }
            });

            if (categoria === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategoria);
            }
        });
    });
}