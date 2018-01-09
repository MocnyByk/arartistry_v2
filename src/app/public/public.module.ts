import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Level Items
import { PublicComponent } from './public.component';
import { PublicRoutes } from './public.routes';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

// Children
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
    imports: [
        CommonModule,
        PublicRoutes
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        PublicComponent,
        HomeComponent,
        GalleryComponent
    ]
})

export class PublicModule {}
