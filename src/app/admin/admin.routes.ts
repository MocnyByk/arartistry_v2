import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './home/admin-home.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '', component: AdminComponent,
            children:  [
                { path: 'home', component: AdminHomeComponent }
            ]
    }
    // { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PublicRoutes }
    // { path: '', component: AdminComponent, data: { title: 'Admin Views' }, children: ADMIN_ROUTES }
];

export const AdminRoutes: ModuleWithProviders = RouterModule.forChild(routes);
