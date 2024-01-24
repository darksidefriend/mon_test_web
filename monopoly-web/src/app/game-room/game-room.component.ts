import { Component, OnInit } from '@angular/core';
import { PlayingCard } from '../interfaces/playing-card';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit {

  constructor() { }

  cardArray : PlayingCard[] = [
    // {id : 1, name : 'HELSINKINKATU', type : 'property', color : 'orange', secondaryColor : null, value : 1, rent : null},
    {id : 2, name : 'PASS THE START', type : 'action', color : null, secondaryColor : null, value : 3, rent : null},
    {id : 2, name : 'STEAL THE DEAL', type : 'action', color : null, secondaryColor : null, value : 3, rent : null},
    {id : 2, name : 'RENT', type : 'action', color : null, secondaryColor : null, value : 3, rent : null},
    {id : 2, name : 'HAPPY BIRTH DAY', type : 'action', color : null, secondaryColor : null, value : 3, rent : null},
    {id : 2, name : 'JUST SAY NO', type : 'action', color : null, secondaryColor : null, value : 3, rent : null},
    {id : 2, name : 'UNFAIR DEAL', type : 'action', color : null, secondaryColor : null, value : 3, rent : null},
    {id : 2, name : 'FORCED DEAL', type : 'action', color : null, secondaryColor : null, value : 3, rent : null},
    {id : 2, name : 'RENT X2', type : 'action', color : null, secondaryColor : null, value : 3, rent : null},
  ];

  ngOnInit(): void {
  }

}
