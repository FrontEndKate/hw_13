class Product {
    static countId = 0;
    #id;
    #title;
    #manufacture;
    #price;

    constructor(title, manufacture, price) {
        this.#id = Product.countId++;
        this.#title = title;
        this.#manufacture = manufacture;
        this.#price = price;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    get manufacture() {
        return this.#manufacture;
    }

    get price() {
        return this.#price;
    }
}

class Milk extends Product {
    #fat;

    constructor(title, manufacture, price, fat) {
        super(title, manufacture, price);
        this.#fat = fat;
    }

    get fat() {
        return this.#fat;
    }
}

class Chocolate extends Product {
    #kind;

    constructor(title, manufacture, price, kind) {
        super(title, manufacture, price);
        this.#kind = kind;
    }

    get kind() {
        return this.#kind;
    }
}

class Wine extends Product {
    #alcohol;

    constructor(title, manufacture, price, alcohol) {
        super(title, manufacture, price);
        this.#alcohol = alcohol;
    }

    get alcohol() {
        return this.#alcohol;
    }
}

class Store {
    #products;

    constructor() {
        this.#products = [];
    }

    get all() {
        return [...this.#products];
    }

    add(product) {
        if (!this.#products.some(p => p.id === product.id)) {
            this.#products.push(product);
        }
    }

    getByType(type) {
        return this.#products.filter(product => product.constructor.name === type);
    }

    getByTitle(title) {
        return this.#products.filter(product => product.title === title);
    }
}

const store = new Store();

store.add(new Milk("Milk", "Brand ABC", 7.99, 3.5));
store.add(new Milk("Whole Milk", "Brand A", 9.99, 0.5));
store.add(new Chocolate("Dark Chocolate", "Brand B", 2.99, "Dark"));
store.add(new Wine("Red Wine", "Brand C", 10.99, 13.5));

const milkDiv = document.querySelector("#milk");
const chocolateDiv = document.querySelector("#chocolate");
const wineDiv = document.querySelector("#wine");

const milkProducts = store.getByType('Milk');
milkDiv.innerHTML = milkProducts.map(product => `<p> ${product.title} - $${product.price}</p>`).join('');

const chocolateProducts = store.getByType('Chocolate');
chocolateDiv.innerHTML = chocolateProducts.map(product => `<p>${product.title} - $${product.price}</p>`).join('');

const wineProducts = store.getByType('Wine');
wineDiv.innerHTML = wineProducts.map(product => `<p>${product.title} - $${product.price}</p>`).join('');
