import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { AppRoutes } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';


@NgModule({

    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        JsonpModule
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
    ],
    
    providers: [Configuration,
                { provide: LocationStrategy, useClass: HashLocationStrategy }],

    bootstrap: [AppComponent]

})
export class AppModule { }