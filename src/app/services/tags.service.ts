import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Section } from '../models/section.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private sections: Observable<Section[]>;

  constructor(private db: AngularFirestore) {
    this.sections = this.db.collection<Section>('sections').valueChanges();
  }

  getSections() {
    return this.sections;
  }
}
