import { Component } from '@angular/core';

@Component({
  selector: 'app-audio',
  standalone: true,
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'] // Corrige styleUrl a styleUrls
})
export class AudioComponent {
  audio!: HTMLAudioElement;
  playCount = 0;
  maxPlays = 2;

  constructor() {
    
    const audioFilePath = 'assets/ingles.mp3';
    console.log('Ruta del archivo de audio:', audioFilePath);

    if (typeof Audio !== 'undefined') {
      this.audio = new Audio(audioFilePath); // Asegúrate de que la ruta sea correcta
    } else {
      console.error('Audio API no está disponible en este contexto.');
    }
  }

  playAudio() {
    if (this.playCount < this.maxPlays) {
      this.audio.play();
      this.playCount++;
    } else {
      alert('Ya has alcanzado el número máximo de intentos.');
    }
  }
}
