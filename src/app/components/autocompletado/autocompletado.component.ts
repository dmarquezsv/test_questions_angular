import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule,moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autocompletado',
  standalone: true,
  imports: [DragDropModule, CommonModule,FormsModule,ReactiveFormsModule,MatInputModule],
  templateUrl: './autocompletado.component.html',
  styleUrl: './autocompletado.component.css'
})
export class AutocompletadoComponent {

  sentences = [
    'El ____ es el órgano más grande del cuerpo humano.',
    'El ____ es el principal órgano de la respiración.',
    'La ____ es la base del sistema digestivo.'
  ];

  answers = ['hígado', 'pulmón', 'boca'];

  drop(event: CdkDragDrop<string[]>, sentenceIndex: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.sentences[sentenceIndex] = this.sentences[sentenceIndex].replace('____', event.container.data[0]);
    }
  }

}
