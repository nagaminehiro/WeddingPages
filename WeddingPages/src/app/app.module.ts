import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './pages/about/about.module';
import { AttendanceModule } from './pages/attendance/attendance.module';
import { GiftsModule } from './pages/gifts/gifts.module';
import { HomeModule } from './pages/home/home.module';
import { MessagesModule } from './pages/messages/messages.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MusicPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    AttendanceModule,
    GiftsModule,
    HomeModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
