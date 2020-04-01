import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

    isOpen = false;

    constructor() { }

    ngOnInit(): void {
    }
}
