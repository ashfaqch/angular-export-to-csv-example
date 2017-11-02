import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <h1>{{ title }}</h1>
    <p>Angular export data to CSV file example</p>
    <app-employees></app-employees>`
})
export class HomeComponent {
    title = 'Home';
}
