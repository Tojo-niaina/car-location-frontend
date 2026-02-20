import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { StayInformed } from '../stay-informed/stay-informed';

@Component({
  selector: 'app-main-footer',
  imports: [Footer, StayInformed],
  templateUrl: './main-footer.html',
  styleUrl: './main-footer.css',
})
export class MainFooter {

}
