import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {
  userName : any;
  constructor(private loadingCtrl: LoadingController,private activatedRoute: ActivatedRoute,private route : Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(this.route.getCurrentNavigation().extras.state){
        this.userName = this.route.getCurrentNavigation().extras.state.user;
        console.log("data : " + this.userName)
      }
    })
   }

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
