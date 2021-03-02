import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  email: string;
  password: string;
  private cargando: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async login() {
    try {
      this.cargando = true;
      await this.authService.login(this.email, this.password);
      this.router.navigateByUrl('/lista');
      this.cargando = false;
    } catch (error) {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error Acceso',
      subHeader: 'No se ha podido acceder a la cuenta',
      message: 'Comprueba si el correo electrónico y contraseña son correctos',
      buttons: ['Aceptar']
    });
    this.cargando=false;
    await alert.present();
  }

}
