import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from 'app/public/public.component';
import { PublicRoutes } from 'app/public/public.routes';
import { AdminComponent } from 'app/admin/admin.component';
import { AdminRoutes } from 'app/admin/admin.routes';

const routes: Routes = [
    { path: '', component: PublicComponent, children: PublicRoutes },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
    // { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PublicRoutes }
    // { path: '', component: AdminComponent, data: { title: 'Admin Views' }, children: ADMIN_ROUTES }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);