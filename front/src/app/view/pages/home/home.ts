import { Component } from '@angular/core';
import { FeaturesCard } from '@component/features-card/features-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [FeaturesCard, RouterLink],
})
export class Home {}
