import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Estudiante } from 'src/app/models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private alertController: AlertController, private toastController: ToastController) { }

  async showMessageAlert(titleAlert: string, messageAlert: string) {
    const alert = await this.alertController.create({
      header: titleAlert,
      message: messageAlert,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showMessageToast(mess: string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
    });
    toast.present();
  }

  showDetails(student: Estudiante) {
    const details = 'Curp: ' + student.curp + '\n\r' +
                    'Edad: ' + student.age;
    this.showMessageAlert('Detalles del estudiante', details);
  }
}
