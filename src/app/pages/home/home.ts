import { Component, ElementRef, ViewChild } from '@angular/core';
import { Menu } from '../../components/menu/menu';
import { StayInformed } from '../../components/stay-informed/stay-informed';
import { Footer } from '../../components/footer/footer';
import { VedetteCard } from '../../components/vedette-card/vedette-card';
import { MainFooter } from '../../components/main-footer/main-footer';

@Component({
  selector: 'app-home',
  imports: [Menu, MainFooter, VedetteCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
