import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput,IonItem, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonicModule,IonInput,IonItem, IonButton],
})
export class Tab2Page {

  constructor() {}
  result: number = 0;
  calculateProduct(a: any, b: any): void {
    const numA = parseInt(a);
    const numB = parseInt(b);

    if (!isNaN(numA) && !isNaN(numB)) {
      this.result = 1;
      for (let i = numA; i <= numB; i++) {
        if (i % 2 === 0 && i % 8 === 0) {
          this.result *= i;
        }
      }
    } else {
      this.result = 0; 
    }
  }
}
