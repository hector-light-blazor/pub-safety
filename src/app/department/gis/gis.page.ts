import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-gis',
  templateUrl: './gis.page.html',
  styleUrls: ['./gis.page.scss'],
})
export class GisPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.goBack();
  }

}
