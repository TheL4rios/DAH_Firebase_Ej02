import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../../services/utils/util.service';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private utils: UtilService, private users: UserService, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  findUser() {
    const email = this.myForm.controls.email.value;
    const password = this.myForm.controls.password.value;
    let found = false;

    this.users.getUsers().subscribe(data => {
      data.map(e => {
          if (email === e.payload.doc.get('email') && password === e.payload.doc.get('password')) {
            this.signIn(false);
            found = true;
          }
      });

      if (!found) {
        this.signIn(true);
      }
    });
  }

  signIn(err: boolean) {
    if (err) {
      this.utils.showMessageAlert('Atención', 'Usuario o contraseña incorrectos');
    } else {
      this.router.navigate(['/tabs']);
    }
  }

}
