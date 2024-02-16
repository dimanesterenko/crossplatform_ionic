import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonGrid, IonCol, IonRow, IonTitle, IonContent, IonInput,IonItem, IonButton, IonCard, IonCardContent, IonLabel} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [FormsModule,  CommonModule, IonHeader, IonToolbar, IonGrid, IonCol, IonRow, IonTitle, IonContent, ExploreContainerComponent,IonInput,IonItem, IonLabel, IonCardContent, IonButton, IonCard],
})
export class Tab3Page {

  matrixSize: number = 5; 
  matrix: number[][] = [];
  columnProducts: number[] = [];

  constructor() {
    this.generateMatrix();
    this.calculateColumnProducts();
  }

  generateMatrix(): void {
    for (let i = 0; i < this.matrixSize; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < this.matrixSize; j++) {
        this.matrix[i][j] = Math.floor(Math.random() * 10) + 1; // Заповнення випадковими числами
      }
    }
  }

  calculateColumnProducts(): void {
    for (let j = 0; j < this.matrixSize; j++) {
      let product = 1;
      for (let i = 0; i < this.matrixSize; i++) {
        product *= this.matrix[i][j];
      }
      this.columnProducts.push(product);
    }
  }
}
