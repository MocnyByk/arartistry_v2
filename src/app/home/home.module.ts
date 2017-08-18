import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './../shared/notfound/not-found.component';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    }
]);

@NgModule({
    imports: [
        homeRouting
    ],
    declarations: [
        HomeComponent,
        NotFoundComponent
    ]
})

export class HomeModule {}
