import { Component, OnInit } from '@angular/core';
import { TutorialDataService } from 'src/app/services/tutorial-data.service';
import { ActivatedRoute } from '@angular/router';
import { TutorialCard } from 'src/app/interfaces/tutorial-card';

@Component({
  selector: 'app-cards-page',
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.scss']
})
export class CardsPageComponent implements OnInit {

  activeCardsPage : TutorialCard;

  constructor(private activeRoute : ActivatedRoute, private tutorialData : TutorialDataService) {

    let selectedRulePageId = parseInt(this.activeRoute.snapshot.paramMap.get('id')!);
    this.activeCardsPage = this.tutorialData.tutorialCards.find((elem) => elem.id === selectedRulePageId)!;

  }

  ngOnInit(): void {
  }

}
