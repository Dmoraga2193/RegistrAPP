import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConsumoAPIService } from '../service/consumo-api.service';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
userName : any;
tituloAPI : any;

  constructor(private activatedRoute: ActivatedRoute,private route: Router, private consumoApi:ConsumoAPIService) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(this.route.getCurrentNavigation().extras.state){
        this.userName = this.route.getCurrentNavigation().extras.state.user;
        console.log("data : " + this.userName)
      }
    })
   }
  //API
   mostrar(){
    this.consumoApi.getPost().subscribe((res)=>{
      this.tituloAPI =''+ res[0].title;
      console.log(res[0].title +"++++" + this.tituloAPI);
    }, (error)=>{
      console.log(error);
    });
  } 

  ngOnInit() {
  }

  

}
