import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToTutorial() : void{
    this.router.navigate(['tutorial/rules', 1]);
  }

  goToRoomsList() : void{
    this.router.navigate(['rooms-list']);
  }

  goToCardsTutorial() : void{
    this.router.navigate(['tutorial/cards', 1]);
  }

}
