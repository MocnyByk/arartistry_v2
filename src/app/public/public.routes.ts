import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: PublicComponent,
            children: [
                { path: 'home', component: HomeComponent },
                { path: 'gallery', component: GalleryComponent }
            ]
    }
];

export const PublicRoutes: ModuleWithProviders = RouterModule.forChild(routes);