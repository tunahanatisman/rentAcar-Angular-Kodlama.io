import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  info(message: (message: any) => any) {
    throw new Error('Method not implemented.');
  }
  error(error: any) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
