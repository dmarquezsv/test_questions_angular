import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioComponent } from './components/audio/audio.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AutocompletadoComponent } from './components/autocompletado/autocompletado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AudioComponent,DragDropModule,AutocompletadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo_reproductor';
  city = 'San salvador';
}
