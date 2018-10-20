import { AnimalsService } from '../../providers/animals-service';
import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: './animals-modal.html'
})

export class AnimalsModalPage {
    @ViewChild('name') name;
    animals: any = {};
    error: any;

    constructor(public animalsService: AnimalsService, public params: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController, public navCtrl: NavController){
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    save(form : NgForm) {
        let update: boolean = form['href'];
        this.animalsService.save(form).subscribe(result => {
            let toast = this.toastCtrl.create({
                message: 'Animal "' + form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
                duration: 2000
            });
            toast.present();
            this.dismiss();
        }, error => this.error = error);
    }

    ionViewDidLoad() {
        setTimeout(() => {
            this.name.setFocus();
        },150);
    }
}
