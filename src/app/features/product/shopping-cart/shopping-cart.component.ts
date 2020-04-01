import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

    products: Product[];

    constructor() { }

    ngOnInit(): void {
    }

    getTotalCost(): number {

        let totalCost = 0;

        for (const product of this.products) {

            totalCost += product.price * (1 - product.discount);
        }

        return totalCost;
    }
}
