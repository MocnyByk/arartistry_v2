import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeModel, HomeDataModel } from './home.model';
import { DocumentModel } from './../../shared/models/document.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    private model: HomeModel;

    ngOnInit() {
        this.model = new HomeModel();
        this.model.tag = 'home';
        this.model.data = new HomeDataModel();
        this.model.data.banner = new DocumentModel();
        this.model.data.banner.title = 'title';
        this.model.data.banner.docType = 'doc-type';
        this.model.data.banner.mimeType = 'mime-type';
        this.model.data.banner.docUrl = 'this-is-a-url';
        console.log(JSON.stringify(this.model));
    }
}
