import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

@Component({
    // moduleId: module.id,
    selector: 'my-app',
    template: `
<div class="container">
    <router-outlet></router-outlet>
</div>
`
})
export class AppComponent { }