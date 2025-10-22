import { Routes } from '@angular/router';
import { MainChat } from '@page/dashboard/chat/main/main';
import { Communities } from '@page/dashboard/communities/communities';
import { MainDashboard } from '@page/dashboard/main/main';
import { Home } from '@page/home/home';
import { UserLogin } from '@page/user-login/user-login';
import { UserRegister } from '@page/user-register/user-register';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: UserLogin },
  { path: 'register', component: UserRegister },
  {
    path: 'dashboard',
    component: MainDashboard,
    children: [
      { path: 'communities', component: Communities },
      { path: 'chat', component: MainChat },
    ],
  },
];
