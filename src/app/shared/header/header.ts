import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { User } from '../../service/user/user';
@Component({
  standalone: true,
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router, private userService: User) {}

  navigateToSpotDetails(spot_id: string, queryParams: any = {}) {
    if (this.router.url === `/spot-details/${spot_id}`) {
      return;
    }
    this.router.navigate([`/spot-details/${spot_id}`], { queryParams: { q: queryParams } });
  }

  signOut() {
    localStorage.clear();
    this.userService.userData.set(null);
    this.router.navigate(['/login']);
  }
}
