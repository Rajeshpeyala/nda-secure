import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  notifications: object = [
    { description: 'Swarm’s message sush notificationh noti practices.', date: '02/06/2018' },
    { description: 'Sunshine is asonalized forecasts based on your tastes.', date: '13/06/2018' },
    { description: 'Delectable, the wine dataevents into its messaging.', date: '09/07/2018' },
    { description: 'QuizUp, a mobile trivia game, came up with this ingenious re-eage.', date: '17/07/2018' },
    { description: 'Swarm’s messages are a gauit so many of the push notification best practices.', date: '02/06/2018' },
    { description: 'Sunshine is a weather app that sends personalized forecasts bn your tastes.', date: '13/06/2018' },
    { description: 'Delectable, the wine databaund a way to incorpopical events into its messaging.', date: '09/07/2018' },
    { description: 'QuizUp, a mobile trivia game, care-engagement message.', date: '17/07/2018' }
  ]

  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

}
