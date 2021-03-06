import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './user/register/register.component'
import { LoginComponent } from './user/login/login.component'
import { RootviewComponent } from './home/rootview/rootview.component'
import { HomeviewComponent } from './home/homeview/homeview.component'
import { PostComponent } from './post/post/post.component'
import { ProfileComponent } from './profile/profile/profile.component'
import { StatComponent } from './stat/stat/stat.component'
import { ChatComponent } from './Chat/chat/chat.component'


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: RootviewComponent },
  { path: 'home', component: HomeviewComponent },
  { path: 'post', component: PostComponent },
  { path: 'profile/:name', component: ProfileComponent },
  { path: 'stat', component: StatComponent },
  { path: 'chat', component: ChatComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }