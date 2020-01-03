import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "./modules/core/core.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from "./app.component";
import { TagAdminComponent } from "./components/tag-admin/tag-admin.component";
import { TagAdminListComponent } from "./components/tag-admin/tag-admin-list/tag-admin-list.component";
import { TagAdminCreateFormComponent } from "./components/tag-admin/tag-admin-create-form/tag-admin-create-form.component";
import { environment } from "../environments";
import { TagAdminCreateFormTestComponent } from "./components/tag-admin/tag-admin-create-form-test/tag-admin-create-form-test.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    TagAdminComponent,
    TagAdminListComponent,
    TagAdminCreateFormComponent,
    TagAdminCreateFormTestComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
