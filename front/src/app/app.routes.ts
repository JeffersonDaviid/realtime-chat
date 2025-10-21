import { Routes } from '@angular/router';
import { Home } from '@page/home/home';
import { UserLogin } from '@page/user-login/user-login';
import { UserRegister } from '@page/user-register/user-register';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: UserLogin },
  { path: 'register', component: UserRegister },
];
