import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-restaura-password',
  templateUrl: './restaura-password.page.html',
  styleUrls: ['./restaura-password.page.scss'],
})
export class RestauraPasswordPage implements OnInit {

  email: string;

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  resetPass() {
    this.authService.resetPassword(this.email).then(
      () => {
        this.alertResetPassword();
        this.router.navigateByUrl('/login');
      }
    ).catch(
      () => this.alertError()
    );
  }

  async alertResetPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contaseña',
      message: 'Se le ha enviado el correo perfectamete. Ábralo y acceda al enlace para recuperar la contraseña',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async alertError() {
    const alert = await this.alertController.create({
      header: 'Recuperación de contraseña',
      message: 'No se ha podido enviar el correo para restaurar la contraseña. Inténtelo más tarde',
      buttons: ['Aceptar']
    });
    await alert.present();
  }

}
