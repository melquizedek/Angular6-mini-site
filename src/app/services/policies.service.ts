import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from '../../../node_modules/rxjs/operators';
import { Settings } from '../../settings'

class Policy {
  id: number;
  customer_id: number;
  product_id: number;
  type: string;
  face_amount: number;
  insured_name: string; 
}

@Injectable({
  providedIn: 'root'
})

export class PoliciesService {

  constructor(private http: HttpClient, private settings: Settings) { }

  getPolicies() {
    return this.http.get<Policy[]>(this.settings.API.END_POINT.POLICIES).pipe(
      map(res => 
        res
      )
    )
  }

}
