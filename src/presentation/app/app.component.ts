import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { Top5pollsComponent } from "./shared/components/top5polls/top5polls.component";
import { Top5pollresultsComponent } from "./shared/components/top5pollresults/top5pollresults.component";
import { HeroComponent } from "./shared/components/hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, FooterComponent, HeaderComponent, Top5pollsComponent, Top5pollresultsComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'polling-app-frontend';
}
