import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainDashboard {}
