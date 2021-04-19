import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from './posts/post-list/post-list.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import {AuthGuard} from './auth/auth.guard';
import { TestComponent } from './test/test.component';
import { AdminDashboardComponent } from './adminDashboard/adminDashboard.component';


const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create', component: PostCreateComponent, canActivate: [AuthGuard]},
  {path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard]},
  {path: 'user', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'test', component: TestComponent},
  {path: 'admin', component: AdminDashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModules {

}
