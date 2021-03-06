
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
    selector: 'short-message-snack-bar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss']
})
export class ShortMessageComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any ) { }
}
