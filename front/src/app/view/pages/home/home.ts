import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeaturesCard } from '@component/features-card/features-card';
import { Navbar } from '@component/navbar/navbar';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [FeaturesCard, RouterLink, Navbar],
})
export class Home {}
