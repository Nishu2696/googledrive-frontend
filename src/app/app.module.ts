import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { MaindisplayComponent } from './maindisplay/maindisplay.component';
import { NewmodalComponent } from './newmodal/newmodal.component';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { VerificationComponent } from './verification/verification.component';
import { FoldersComponent } from './folders/folders.component';
import { SubfolderComponent } from './subfolder/subfolder.component';
import { UgradeComponent } from './ugrade/ugrade.component';
import { NgxFileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForgotComponent,
    LoginComponent,
    MaindisplayComponent,
    NewmodalComponent,
    RegisterComponent,
    ResetpassComponent,
    ToastContainerComponent,
    VerificationComponent,
    FoldersComponent,
    SubfolderComponent,
    UgradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    NgxFileDropModule
  ],
  providers: [
    AuthGuard,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
