import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { cursorTo } from 'readline';

@Component({
  selector: 'app-generar',
  templateUrl: './generar.page.html',
  styleUrls: ['./generar.page.scss'],
})

export class GenerarPage implements OnInit {

  formularioClase: FormGroup;

  constructor(
    public fb: FormBuilder, 
    public alertController: AlertController,
    public navCtrl: NavController) {
    //Formulario de Ingreso
    this.formularioClase = this.fb.group({
      'fecha': new FormControl("", Validators.required),
      'hora': new FormControl("", Validators.required),
      'curso': new FormControl("", Validators.required),
      'secc': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

  //Guardar Clase nueva
  async guardarClase(){
    let navigationExtras: NavigationExtras = {
      state: {fecha: this.formularioClase.value.fecha,
      hora: this.formularioClase.value.hora,
      curso: this.formularioClase.value.curso,
      seccion: this.formularioClase.value.secc}
    };
    
    var f = this.formularioClase.value;

    if(this.formularioClase.invalid){
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
        message: 'Revisa bien los datos ingresados antes de continuar.',
        buttons: ['Aceptar']
      });
      await alert.present();
      this.navCtrl.navigateRoot('qr', navigationExtras);
    }

    var clases = {
      fecha: f.fecha,
      hora: f.hora,
      curso: f.curso,
      secc: f.secc,
    }

    localStorage.setItem('clases', JSON.stringify(clases));
  }
  

}
