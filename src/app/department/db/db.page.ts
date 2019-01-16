import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-db',
  templateUrl: './db.page.html',
  styleUrls: ['./db.page.scss'],
})
export class DbPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.goBack();
  }

}
