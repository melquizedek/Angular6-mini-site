import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'alert',
  templateUrl: '../templates/alert.component.html',
  styleUrls: ['../stylesheets/alert.component.scss']
})

export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
    message: any;
 
    constructor(private alertService: AlertService,
    private matSnackBar: MatSnackBar) { }
 
    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(res => { 
            //this.message = res;
            if (res) {
              this.matSnackBar.open(res.text, '', {
                duration: 2000,
                verticalPosition: 'top',
                horizontalPosition: 'center'
              });
            }
        });
    }
 
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
