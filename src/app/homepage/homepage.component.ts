import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

   username:string="";
   password: string = '';

   constructor(private router: Router) {}

   onLogin() {
  
    localStorage.setItem('username', this.username);
    this.router.navigate(['/my-dashboard'],{ queryParams: { username: this.username } });
   }

}
