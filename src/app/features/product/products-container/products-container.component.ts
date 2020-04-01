import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-products-container',
    templateUrl: './products-container.component.html',
    styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {

    products: Product[];

    constructor() {
        this.products = [
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
            {name: 'TV', price: 122, imgUrl: 'assets/img/products/product-grey-1.jpg', discount: 0},
        ];
    }

    ngOnInit(): void {
    }

}
