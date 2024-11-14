import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    SquareComponent,
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {

  constructor( public boardService: GameService ) { }

  ngOnInit() {}

}
