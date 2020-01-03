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
  private sectionCollection: AngularFirestoreCollection<Section>;
  private parentTagCollection: AngularFirestoreCollection<ParentTag>;

  constructor(private db: AngularFirestore) {
    this.sectionCollection = this.db.collection<Section>("sections");
    this.parentTagCollection = this.db.collection<ParentTag>("categoryTags");
  }

  getSections() {
    return this.sectionCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Section;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getParentTags(section: string) {
    return this.db
      .collection<ParentTag>("categoryTags", ref =>
        ref.where("section", "==", section)
      )
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as ParentTag;
            const id = a.payload.doc.id;
            console.log(data);
            return { id, ...data };
          })
        )
      );
  }
}
