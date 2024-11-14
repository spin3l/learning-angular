import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameService } from '../services/game.service';
import { Square } from '../types';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div 
      class="game-square rounded-lg border bg-teal-lightest shadow-md"
      (click)="changePlayer()"
      [ngClass]="{noClick: gameService.winner}">
        
    </div>
  `,
  styleUrl: './square.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareComponent {

  @Input() square!: Square;

  constructor( public gameService: GameService ) {}

  ngOnInit() {}

  changePlayer() {
    this.gameService.isGameRunning = true;

    if (this.gameService.isGameRunning && this.square.state == null) {
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square);
    }
  }

}
