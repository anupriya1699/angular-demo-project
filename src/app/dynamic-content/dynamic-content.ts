import { Component, ContentChild, ElementRef } from '@angular/core';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-dynamic-content',
  imports: [Parent],
  templateUrl: './dynamic-content.html',
  styleUrl: './dynamic-content.css',
})
export class DynamicContent {
  @ContentChild('user_agreement') userAgreement!: ElementRef;
  @ContentChild('privacy_policy') privacyPolicy!: ElementRef;
  @ContentChild('terms_and_conditions') termsAndConditions!: ElementRef;
}
