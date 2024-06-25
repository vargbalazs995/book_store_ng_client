import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BookCardComponent} from "./book-card/book-card.component";
import {BookPageComponent} from "./book-page/book-page.component";

const routes: Routes = [
  {path:"", component: BookPageComponent},
  {path:"books-card", component: BookCardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
