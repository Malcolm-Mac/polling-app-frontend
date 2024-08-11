import { Component } from '@angular/core';
import { HeroComponent } from "../../../../shared/components/hero/hero.component";
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { Top5pollsComponent } from "../../../../shared/components/top5polls/top5polls.component";
import { Top5pollresultsComponent } from "../../../../shared/components/top5pollresults/top5pollresults.component";
import { TourComponent } from "../../../../shared/components/tour/tour.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HeaderComponent, Top5pollsComponent, Top5pollresultsComponent, TourComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
hero: any;

}
