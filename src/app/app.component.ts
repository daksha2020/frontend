import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appComponent';
  details = [
    {
      id: 1,
      title: 'Honda Accord',
      type: 'TCU',
      make: 'Honda',
      model: 'Accord'
    },
    {
      id: 2,
      title: 'Acura TLX',
      type: 'Non-TCU',
      make: 'Acura',
      model: 'TLX'
    },
    {
      id: 3,
      title: 'Honda CR-V',
      type: 'TCU',
      make: 'Honda',
      model: 'CR-V'
    }
  ];
}
