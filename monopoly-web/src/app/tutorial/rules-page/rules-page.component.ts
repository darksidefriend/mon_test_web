import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialRule } from 'src/app/interfaces/tutroial-rule';
import { TutorialDataService } from 'src/app/services/tutorial-data.service';

@Component({
  selector: 'app-rules-page',
  templateUrl: './rules-page.component.html',
  styleUrls: ['./rules-page.component.scss']
})
export class RulesPageComponent implements OnInit {

  activeRulesPage : TutorialRule;

  constructor(private activeRoute : ActivatedRoute, private tutorialData : TutorialDataService) {

    let selectedRulePageId = parseInt(this.activeRoute.snapshot.paramMap.get('id')!);
    this.activeRulesPage = this.tutorialData.tutorialRules.find((elem) => elem.id === selectedRulePageId)!;

  }

  ngOnInit(): void {    

  }


}
