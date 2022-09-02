import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
userName : any;

  constructor(private activatedRoute: ActivatedRoute,private route : Router) {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(this.route.getCurrentNavigation().extras.state){
        this.userName = this.route.getCurrentNavigation().extras.state.user;
        console.log("data : " + this.userName)
      }
    })
   }

  ngOnInit() {
  }

}
