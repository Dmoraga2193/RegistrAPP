import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    public router: Router,
    private storage: Storage
  ) {
    this.iniciarApp();
  }
  
  //Inicia la app con el splash
  iniciarApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('splash');
    });
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
}
