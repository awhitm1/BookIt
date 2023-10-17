import { LibraryComponent } from "./library/library.component";
import { BookshelfComponent } from "./bookshelf/bookshelf.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookshelfHomeComponent } from "./bookshelf/bookshelf-home/bookshelf-home.component";
import { BookDetailsComponent } from "./bookshelf/book-details/book-details.component";
import { BookshelfEditorComponent } from "./bookshelf/bookshelf-editor/bookshelf-editor.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/bookshelf", pathMatch: "full" },
  { path: "bookshelf", component: BookshelfComponent,
      children:[{path: "", component: BookshelfHomeComponent },
                {path: ":id", component: BookDetailsComponent},
                {path: "new", component: BookshelfEditorComponent},
                {path: ":id/edit", component: BookshelfEditorComponent}]},
  { path: "library", component: LibraryComponent },
  { path: "bookshelf-home", component: BookshelfHomeComponent},
  { path: "book-details", component: BookDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
