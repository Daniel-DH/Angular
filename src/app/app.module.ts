import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { TitleComponent } from './shared/title/title.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { RegistroComponent } from './registro/registro.component';
import { appRouting } from './app.routes';
import { ZombiesComponent } from './pages/zombies/zombies.component';
import { CerebrosComponent } from './pages/cerebros/cerebros.component';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraphsComponent,
    HeaderComponent,
    SidemenuComponent,
    TitleComponent,
    SettingsComponent,
    RegistroComponent,
    ZombiesComponent,
    CerebrosComponent
  ],
  imports: [
    BrowserModule, FormsModule, appRouting, HttpClientModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
