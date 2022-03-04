import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemImageURL: string =
    'https://www.ndsu.edu/fileadmin/www.ur.ndsu.edu/logo_usage/NDSU.logo.typebox.jpg';

  isSpecial: boolean = true;
  paraColor: string = 'blue';
  userName: string = '';

  onMouseOut() {
    this.isSpecial = !this.isSpecial;
  }

  isEmpty(): boolean {
    return this.userName == '';
  }

  onClick(): void {
    this.userName = 'Hello World';
  }
}
