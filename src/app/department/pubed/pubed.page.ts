import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-pubed',
  templateUrl: './pubed.page.html',
  styleUrls: ['./pubed.page.scss'],
})
export class PubedPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.goBack();
  }

}
