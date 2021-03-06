import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AuthInterceptor} from './AuthInterceptor'
import {ToastrModule} from 'ngx-toastr'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { RootviewComponent } from './home/rootview/rootview.component';
import { HomeviewComponent } from './home/homeview/homeview.component';
import { PostComponent } from './post/post/post.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { StatComponent } from './stat/stat/stat.component';

import {WebSocketService} from './Chat/web-socket.service';
import { ChatComponent } from './Chat/chat/chat.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    RootviewComponent,
    HomeviewComponent,
    PostComponent,
    ProfileComponent,
    StatComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() ,
    UiModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS , useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
