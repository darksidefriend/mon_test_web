import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { EnemyFieldComponent } from './game-room/enemy-field/enemy-field.component';
import { PlayingCardComponent } from './game-room/playing-card/playing-card.component';
import { CardsPageComponent } from './tutorial/cards-page/cards-page.component';
import { RulesPageComponent } from './tutorial/rules-page/rules-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TutorialComponent,
    RoomsListComponent,
    MainMenuComponent,
    LoginPageComponent,
    GameRoomComponent,
    EnemyFieldComponent,
    PlayingCardComponent,
    CardsPageComponent,
    RulesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
