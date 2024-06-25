import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {LandingComponent} from "./landing/landing.component";
import {ContactComponent} from "./contact/contact.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  {path: "", component: LandingComponent},
  {
    path: 'book',
    loadChildren: () =>
      import('./books/book-routing.module').then((b) => b.BookRoutingModule),
  },
  {path: 'contact', component: ContactComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'mainpage', component: LandingComponent},
  {path:'**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
