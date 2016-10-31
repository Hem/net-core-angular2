
import { Component, OnInit } from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'app-home',
    templateUrl: '/app/components/home/home.component.html'
})
export class HomeComponent implements OnInit {

    public title: string;

    ngOnInit() {
        this.title = "Home Component";
    }

}