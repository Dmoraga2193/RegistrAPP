import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { ElementFinder } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController) {

    //Formulario de Ingreso
    this.formularioLogin = this.fb.group({
      'cod': new FormControl("", Validators.required),
      'user': new FormControl("", Validators.required),
      'pass': new FormControl("", Validators.required),
    })
   }

   

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.user == f.user && usuario.pass == f.pass){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      if(usuario.cod == 666){
        this.navCtrl.navigateRoot('docente');
      }else{
        this.navCtrl.navigateRoot('estudiante');
      }
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Usuario o contraseña incorrecta',
        buttons: ['Aceptar']
      })
      
      await alert.present();
      return;
    }
  }
  

}
