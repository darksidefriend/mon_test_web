import { Component, OnInit, Input } from '@angular/core';
import { PlayingCard } from 'src/app/interfaces/playing-card';

@Component({
  selector: 'md-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.scss']
})
export class PlayingCardComponent implements OnInit {

  constructor() { }

  @Input() cardData! : PlayingCard;

  ngOnInit(): void {

  }

}
