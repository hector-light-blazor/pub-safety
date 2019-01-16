import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-lv',
  templateUrl: './lv.page.html',
  styleUrls: ['./lv.page.scss'],
})
export class LvPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.goBack();
  }

}
