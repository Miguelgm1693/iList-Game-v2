import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  email: string;
  password: string;
  ultemail: string;

  private cargando: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    public alertController: AlertController,
    private storage: Storage
    
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

    this.storage.set(this.ultemail, this.email);

  }

  recordar() {
    this.storage.get(this.ultemail).then((ultemail) => {
      this.ultemail = ultemail;
    })
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
