import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'main-view',
  templateUrl: './app.main.component.html',
  styleUrls: ['./app.main.component.scss'],
  providers: [AppService]
})
export class MainComponent {
  title = 'app works!';
}
