import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Section } from "../models/section.model";
import { ParentTag } from "../models/parent-tag.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TagsService {
  private sections: AngularFirestoreCollection<Section>;
  private parentTags: AngularFirestoreCollection<ParentTag>;

  constructor(private db: AngularFirestore) {
    this.sections = this.db.collection<Section>("sections");
  }

  getSections() {
    return this.sections.snapshotChanges().pipe(
      map(actions => {
        actions.map(a => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data() as Section;
          return { id, ...data };
        });
      })
    );
  }

  getParentTags() {}
}
