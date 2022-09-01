import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController) {
    //Formulario de Ingreso
    this.formularioRegistro = this.fb.group({
      'cod': new FormControl("", Validators.required),
      'user': new FormControl("", Validators.required),
      'pass': new FormControl("", Validators.required),
      'conPass': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

  //Guardar usuario nuevo
  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes llenar todos los campos.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }else{
      const alert = await this.alertController.create({
        header: '¡Perfecto!',
        message: 'Usuario registrado exitosamente.',
        buttons: ['Aceptar']
      });
      await alert.present();
      this.navCtrl.navigateRoot('home');
    }

    var usuario = {
      cod: f.cod,
      user: f.user,
      pass: f.pass
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

}
