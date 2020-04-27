import { Component } from '@angular/core';
import { EstudianteService } from '../services/estudiante.service';
import { Estudiante } from '../models/estudiante';
import { UtilService } from '../services/utils/util.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  students: Estudiante[];

  constructor(private studentService: EstudianteService, public utils: UtilService) {
    this.studentService.getSudent().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.get('name'),
          controlNumber: e.payload.doc.get('controlNumber'),
          curp: e.payload.doc.get('curp'),
          age: e.payload.doc.get('age'),
          active: e.payload.doc.get('active')
        } as Estudiante;
      });
    });
  }

}
