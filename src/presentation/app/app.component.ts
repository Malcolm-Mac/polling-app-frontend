import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ContainerComponent } from "./container/container.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { Top5pollsComponent } from "./top5polls/top5polls.component";
import { Top5pollresultsComponent } from "./top5pollresults/top5pollresults.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ContainerComponent, FooterComponent, HeaderComponent, Top5pollsComponent, Top5pollresultsComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'polling-app-frontend';
}
