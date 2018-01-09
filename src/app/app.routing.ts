import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from 'app/public/public.module';
import { PublicRoutes } from 'app/public/public.routes';
import { AdminRoutes } from 'app/admin/admin.routes';
import { NotFoundComponent } from './error-pages/notfound/not-found.component';

const routes: Routes = [
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: '', loadChildren: './public/public.module#PublicModule' },
    { path: '**', component: NotFoundComponent }
    // { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PublicRoutes }
    // { path: '', component: AdminComponent, data: { title: 'Admin Views' }, children: ADMIN_ROUTES }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
