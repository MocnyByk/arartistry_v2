import { NgModule } from '@angular/core';

// Module Level Items
import { AdminComponent } from './admin.component';
import { AdminRoutes } from './admin.routes';
import { AdminHeaderComponent } from './layout/header/admin-header.component';
import { AdminFooterComponent } from './layout/footer/admin-footer.component';

// Children
import { AdminHomeComponent } from './home/admin-home.component';

@NgModule({
    imports: [
        AdminRoutes
    ],
    declarations: [
        AdminHeaderComponent,
        AdminFooterComponent,
        AdminComponent,
        AdminHomeComponent
    ]
})

export class AdminModule {}
