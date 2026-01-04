import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Parent } from '../dynamic-content/parent/parent';
@Component({
  selector: 'app-spot-details',
  imports: [Parent],
  templateUrl: './spot-details.html',
  styleUrl: './spot-details.css',
})
export class SpotDetails {
  subscription: Subscription[] = [];
  spotId = '';
  spotParam = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.subscription.push(
      this.activatedRoute.params.subscribe((params) => {
        this.spotId = params['id'];
      }),
      this.activatedRoute.queryParams.subscribe((queryParams) => {
        this.spotParam = queryParams['q'] || '';
      })
    );
  }

  ngOnInit() {
    // Initialization logic can go here
  }

  ngAfterViewInit() {
    // Logic after the view has been initialized can go here
  }

  ngOnDestroy() {
    // Clean up subscriptions to prevent memory leaks
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  updateSpotParam() {
    let newParam = '';
    if (this.spotId === '1') {
      newParam = 'clicked_book';
    } else if (this.spotId === '2') {
      newParam = 'clicked_host';
    } else {
      newParam = 'clicked_city';
    }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { q: newParam },
      queryParamsHandling: 'merge', // keeps other params
    });
  }
}
