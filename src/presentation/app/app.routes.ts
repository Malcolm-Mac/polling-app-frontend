import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { authroutes } from './features/auth/auth.routes';
import { HomeComponent } from './features/home/pages/home/home.component';
import { PollComponent } from './features/polls/pages/poll/poll.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    ...authroutes,
    { path: 'polls', component: PollComponent, canActivate: [AuthGuard] },
];
