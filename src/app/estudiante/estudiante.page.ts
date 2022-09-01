import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  async abrirCamara() {
    const loading = await this.loadingCtrl.create({
      message: 'Abriendo Camara...',
      duration: 3000,
    });

    loading.present();
  
}

  ngOnInit() {
  }

}
