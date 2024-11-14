import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameService } from '../services/game.service';
import { SquareValue } from '../types';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SquareComponent {

  @Input() state!: SquareValue;

  constructor( public gameService: GameService ) {}

  ngOnInit() {}

}
