import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RulesPageComponent } from './tutorial/rules-page/rules-page.component';
import { CardsPageComponent } from './tutorial/cards-page/cards-page.component';

const tutorialRoutes: Routes = [
  {path: 'rules/:id', component: RulesPageComponent, data: {animation : 'changeTutorialPage'}},
  {path: 'cards/:id', component: CardsPageComponent, data: {animation : 'changeTutorialPage'}}
];

const mainRoutes: Routes = [
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'rooms-list', component: RoomsListComponent},
  {path: 'game-room', component: GameRoomComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'tutorial', component: TutorialComponent, children : tutorialRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
