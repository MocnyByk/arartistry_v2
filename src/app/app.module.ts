import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// App Level Items
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

// Public Items
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { HeaderComponent } from './public/layout/header/header.component';
import { FooterComponent } from './public/layout/footer/footer.component';

/*
  To start running, enter 'npm start'
*/

@NgModule({
  declarations: [
    AppComponent,

    // Shared Items
    HeaderComponent,
    FooterComponent,

    // Public Items
    PublicComponent,
      HomeComponent

    // Admin Items
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
