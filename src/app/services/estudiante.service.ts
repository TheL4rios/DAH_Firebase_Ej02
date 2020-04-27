import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Estudiante } from '../models/estudiante';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  students: Estudiante[] = [];

  constructor(private firestore: AngularFirestore) { }

  createStudent(student: Estudiante) {
    return this.firestore.collection('estudiante').add(student);
  }

  getSudent() {
    return this.firestore.collection('estudiante').snapshotChanges();
  }
}
