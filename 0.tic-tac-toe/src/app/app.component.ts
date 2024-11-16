import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BoardComponent, CommonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor( public gameService: GameService) {}

}
