import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput,IonItem,IonItemGroup, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonicModule,IonInput,IonItem, IonButton, IonItemGroup],
})
export class Tab1Page {
  constructor() {}
  a:number = 0;
  b:number = 0;
  c:number = 0;
  d:number = 0;
  ras(a:any, b:any, c:any){
    try {
      this.a=parseFloat(a);
      this.b=parseFloat(b);
      this.c=parseFloat(c);
      this.d=0;
      if ((isNaN(this.a)==true) || (isNaN(this.b)==true) || (isNaN(this.c)==true) )
      {
        throw new Error("Параметри - не числа!!!");
      }
      if (this.a % 2 === 0 && this.b % 2 === 0 && this.c % 2 === 0) {
        this.d = this.a * this.b * this.c;
    } else {
        let sum = this.a + this.b + this.c;
        this.d = sum * sum;
    }
    }
     catch (error) {
      console.log(error);
    }
  }

}
