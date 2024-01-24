import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute, private router : Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.activeRoute.paramMap
  }

  isChildRouteOpen() : boolean{
    return this.activeRoute.snapshot.firstChild == null ? false : true;
  }

  goToRoomsList() : void{
    this.router.navigate(['rooms-list']);
  }

  continueTutorial() : void{
    this.router.navigate(['rules', 1], {relativeTo: this.activeRoute});
  }

  changePage(pageTo : 'next' | 'previous') : void{

    let routeName : string = this.activeRoute.snapshot.firstChild?.url[0].path!;
    let routeIndex : number = parseInt(this.activeRoute.snapshot.firstChild?.paramMap.get('id')!);
    
    switch (true){

      case (routeName === 'rules' && routeIndex === 1 && pageTo === 'previous'):
        this.router.navigate(['tutorial']);
        return;

      case (routeName === 'rules' && routeIndex === 10 && pageTo === 'next'):
        this.router.navigate(['cards', 1], {relativeTo: this.activeRoute});
        return;

      case (routeName === 'cards' && routeIndex === 14 && pageTo === 'next'):
        this.goToRoomsList();
        return;

      case (routeName === 'cards' && routeIndex === 1 && pageTo === 'previous'):
        this.router.navigate(['rules', 10], {relativeTo: this.activeRoute});
        return;
      
      default:
        pageTo == 'next' ? this.router.navigate([routeName, (routeIndex + 1)], {relativeTo: this.activeRoute}) : this.router.navigate([routeName, routeIndex - 1], {relativeTo: this.activeRoute});
        return;

    } 
  }
}
