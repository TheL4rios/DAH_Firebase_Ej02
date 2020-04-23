import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Estudiante } from '../../models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';
import { UtilService } from '../../services/utils/util.service';
 
@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  public myForm: FormGroup;
  public student: Estudiante;

  constructor(private serviceStudent: EstudianteService, private fb: FormBuilder, private utils: UtilService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(150)])],
      controlNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      // tslint:disable-next-line: max-line-length
      curp: ['', Validators.compose([Validators.required, Validators.pattern('^([A-Z&]|[a-z&]{1})([AEIOU]|[aeiou]{1})([A-Z&]|[a-z&]{1})([A-Z&]|[a-z&]{1})([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([HM]|[hm]{1})([AS|as|BC|bc|BS|bs|CC|cc|CS|cs|CH|ch|CL|cl|CM|cm|DF|df|DG|dg|GT|gt|GR|gr|HG|hg|JC|jc|MC|mc|MN|mn|MS|ms|NT|nt|NL|nl|OC|oc|PL|pl|QT|qt|QR|qr|SP|sp|SL|sl|SR|sr|TC|tc|TS|ts|TL|tl|VZ|vz|YN|yn|ZS|zs|NE|ne]{2})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([^A|a|E|e|I|i|O|o|U|u]{1})([0-9]{2})$')])],
      age: [0, Validators.required],
      active: [false, Validators.required]
    });
  }

  create() {
    this.student = {
      name: this.myForm.controls.name.value,
      controlNumber: this.myForm.controls.controlNumber.value,
      curp: this.myForm.controls.curp.value,
      age: this.myForm.controls.age.value,
      active: this.myForm.controls.active.value
    };
    this.serviceStudent.createStudent(this.student).then(() => {
      this.utils.showMessageToast('Se insertó correctamente');
      this.myForm.controls.name.setValue('');
      this.myForm.controls.controlNumber.setValue('');
      this.myForm.controls.curp.setValue('');
      this.myForm.controls.age.setValue(0);
      this.myForm.controls.active.setValue(false);
    }).catch(() => {
      this.utils.showMessageAlert('Atención', 'Algo salió mal :/');
    });
  }
}
