import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailsComponent },
      { path: '', redirectTo: '/welcome', pathMatch: 'full' },
      { path: '**', redirectTo: '/welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
