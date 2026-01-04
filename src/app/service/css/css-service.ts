import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CssService {
  primaryButtonClass =
    'mt-4 text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors';
  secondaryButtonClass =
    'mt-4 text-primary hover:text-primary-dark border border-primary focus:ring-4 focus:outline-none focus:ring-primary-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors';
  inputClass =
    'border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5';
  labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  errorClass = 'text-red-500 text-sm text-center';
  successClass = 'text-green-500 text-sm text-center';
  infoClass = 'text-blue-500 text-sm text-center';
}
