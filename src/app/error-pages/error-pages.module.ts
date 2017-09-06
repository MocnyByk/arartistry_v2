import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './notfound/not-found.component';

const errorsRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '404',
        redirectTo: ''
    },
    {
        path: '',
        component: NotFoundComponent
    }
]);

@NgModule({
    imports: [
        errorsRouting
    ],
    declarations: [
        NotFoundComponent
    ]
})

export class ErrorPagesModule {}
