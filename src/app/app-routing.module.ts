import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authguard/auth.guard';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditlabelsComponent } from './components/editlabels/editlabels.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword/resetpassword.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotpasswordComponent},
  {path:'reset-password/:token',component:ResetpasswordComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],

  children:[
    {path:'notes',component:NotesComponent},
    {path:'reminders',component:RemindersComponent},
    {path:'editlabels',component:EditlabelsComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'trash',component:TrashComponent}
  ]
},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
