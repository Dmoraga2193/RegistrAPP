import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions} from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {
  userName : any;
  constructor(private loadingCtrl: LoadingController,private activatedRoute: ActivatedRoute,private route : Router, private camera: Camera) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(this.route.getCurrentNavigation().extras.state){
        this.userName = this.route.getCurrentNavigation().extras.state.user;
        console.log("data : " + this.userName)
      }
    })
   }
   abrirCamara() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  ngOnInit() {
  }

}