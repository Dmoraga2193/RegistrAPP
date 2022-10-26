import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {
  fechaClase : any;
  horaClase : any;
  cursoClase : any;
  seccClase : any;


  constructor(private loadingCtrl: LoadingController, private activatedRoute: ActivatedRoute,private route: Router, public alertController: AlertController) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(this.route.getCurrentNavigation().extras.state){
        this.fechaClase = this.route.getCurrentNavigation().extras.state.fecha;
        console.log("Fecha : " + this.fechaClase)
      }
      if(this.route.getCurrentNavigation().extras.state){
        this.horaClase = this.route.getCurrentNavigation().extras.state.hora;
        console.log("Hora : " + this.horaClase)
      }
      if(this.route.getCurrentNavigation().extras.state){
        this.cursoClase = this.route.getCurrentNavigation().extras.state.curso;
        console.log("Curso : " + this.cursoClase)
      }
      if(this.route.getCurrentNavigation().extras.state){
        this.seccClase = this.route.getCurrentNavigation().extras.state.seccion;
        console.log("Seccion : " + this.seccClase)
      }
    })
   }

  async showCodigo() {
    const loading = await this.alertController.create({
      header: 'CODIGO QR: ',
                    message: `<img src="assets/qr-code.png" alt="g-maps" style="border-radius: 2px">`,
                    buttons: [
                        {
                            text: 'Cerrar',
                            role: 'cancel',
                        }                        
                    ],
                });

    loading.present();
  }   

  ngOnInit() {
  }

}
