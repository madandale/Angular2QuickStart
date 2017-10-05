import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Angular Router</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/about" routerLinkActive="active">Heroes</a>

    </nav>
    <router-outlet></router-outlet>
  `

})
export class AppComponent {
}
