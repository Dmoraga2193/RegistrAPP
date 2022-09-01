import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-generar',
  templateUrl: './generar.page.html',
  styleUrls: ['./generar.page.scss'],
})
export class GenerarPage implements OnInit {

  constructor(private loadingCtrl: LoadingController, public alertController: AlertController) { }

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
