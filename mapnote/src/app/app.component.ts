import { AfterViewInit, Component, VERSION } from '@angular/core';
import { TimerService } from './timer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'mapnote';

  public myAttrs = {
    id1: 0, 
    id2: 100,
    }
  
  onClick() {
    this.myAttrs = {
      id1: this.randomInt(1, 10), 
      id2: this.randomInt(100, 999)
      }
  }
 
  public randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  
  // hw 5 service and DI
  name = 'Angular ' + VERSION.major;
  constructor(private timerService: TimerService) {}

  public ngAfterViewInit() {
    this.timerService.start();
  }

  
}

