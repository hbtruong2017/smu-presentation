import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presentation';

  howdareyou() {
    let audio = new Audio("../assets/howdareyou.mp3");
    audio.play();
  }

  playSound() {
    let audio = new Audio("../assets/gretaspeech.mp3");
    audio.play();
  }

  goToVideo() {
    window.location.href = "https://youtu.be/haewHZ8ubKA";
  }

  goToTranscript() {
    window.location.href = "https://www.npr.org/2019/09/23/763452863/transcript-greta-thunbergs-speech-at-the-u-n-climate-action-summit"
  }
}


