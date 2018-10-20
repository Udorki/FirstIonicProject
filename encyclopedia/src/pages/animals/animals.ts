import { Component } from '@angular/core';
import { IonicPage, ModalController, ToastController, AlertController, NavController, NavParams } from 'ionic-angular';
import { AnimalsService } from '../../providers/animals-service';
import { AnimalsModalPage } from './animals-modal';

@IonicPage()
@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html'
})

export class AnimalsPage {
  protected animals: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public animalsService: AnimalsService, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad AnimalsPage');
    this.animalsService.getAnimals().subscribe(animals => {
      this.animals = animals;
    })
  }
  
  openModal(){
    let modal = this.modalCtrl.create(AnimalsModalPage);
    modal.present();
    modal.onDidDismiss(() => this.ionViewWillEnter())
  }
  
  remove(animals) {
    let alertCtrl = this.alertCtrl.create({
      title: 'Delete animal',
      message: 'Do you want to delete this animal?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.animalsService.remove(animals.id).subscribe(response => {
              for (let i = 0; i < this.animals.length; i++) {
                if (this.animals[i] === animals) {
                  this.animals.splice(i, 1);
                  let toast = this.toastCtrl.create({
                    message: 'Animal "' + animals.name + '"deleted.',
                    duration: 2000,
                    position: 'top'
                  });
                  toast.present();
                }
              }
            });
          }
        }
      ]
    });
    alertCtrl.present();
  }
}
