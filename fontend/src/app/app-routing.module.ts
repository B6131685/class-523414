import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component'
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { AuthGuard } from './auth.guard';
import { NewBookComponent } from './adminMode/new-book/new-book.component';
import { StockComponent } from './adminMode/stock/stock.component';
const routes: Routes = [
  {path: 'home1', component: AppComponent},
  {path: 'home2', component: MainhomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
  data: {
    role: 'admin'
  }, children: [
    {
      path: 'newbook', component: NewBookComponent
    },{
      path: 'stock', component: StockComponent
    }
  ]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard],
  data: {
    role: 'customer'
  }},
  {path: '',
    redirectTo: 'home2',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
