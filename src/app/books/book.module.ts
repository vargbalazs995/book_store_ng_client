import {NgModule} from "@angular/core";
import {BookPageComponent} from "./book-page/book-page.component";
import {BookCardComponent} from "./book-card/book-card.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {BookRoutingModule} from "./book-routing.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [BookPageComponent,BookCardComponent,BookDetailsComponent],
  imports: [CommonModule, BookRoutingModule, ReactiveFormsModule, MatGridListModule, MatCardModule,MatButtonModule]
})
export class BookModule { }
