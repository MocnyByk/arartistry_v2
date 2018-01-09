import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// App Level Items
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

// Shared Items
import { NotFoundComponent } from './error-pages/notfound/not-found.component';

/*
  To start running, enter 'npm start'
*/

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
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
