import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModules} from './app-routing.modules';
import {HoverHighlightDirective} from './directives/hover-highlight.directive';
import {HighlightDirective} from './directives/highlight.directive';
import {AuthInterceptor} from './auth/auth-interceptor';
import {CommonDialogConfirmationComponent} from './common component/common-dialog-confirmation/common-dialog-confirmation.component';
import {ErrorInterceptor} from './error-interceptor';
import {ErrorComponent} from './error/error.component';
import {AngularMaterialModule} from './angular-material.module';
import {PostModule} from './posts/post.module';
import {AuthModule} from './auth/auth.module';
import {AwardComponent} from './header/awardsvg/award.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { AdminDashboardComponent } from './adminDashboard/adminDashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AwardComponent,
    HighlightDirective,
    HoverHighlightDirective,
    CommonDialogConfirmationComponent,
    TestComponent,
    ErrorComponent,
    AdminDashboardComponent
],
  imports: [
    BrowserModule,
    AppRoutingModules,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [CommonDialogConfirmationComponent, ErrorComponent]
})
export class AppModule {
}
