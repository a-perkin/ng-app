import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appService: AppService) {}

  title = 'ng-app';
  orders: string = '';

  getAllOrders() {
    this.appService.getOrders().pipe().subscribe((response: any) => {
      if (response && response.message)
      this.orders = response.message;
    });
  }
}
