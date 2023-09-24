import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroData: any;
  constructor (private _apiService: ApiServiceService) {}

  title = 'Tour of Heroes!';
  name = 'Shihab Mahmud'

  ngOnInit() {
    this._apiService.getData().subscribe(res=>{
      this.heroData = res;
    })
  }
}
