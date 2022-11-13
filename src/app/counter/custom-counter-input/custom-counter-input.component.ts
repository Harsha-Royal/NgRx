import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { channelNameChange, customIncrement } from '../state/counter.action';
import { getChannelName, getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value : number;
  channelName : string;
  constructor(private store : Store<{counter:CounterState}>) { }
  channelName$ : Observable<string>;
  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd(){
    this.store.dispatch(customIncrement({count : +this.value}));
  }

  onChangeChannelName(){
    this.store.dispatch(channelNameChange());
  }  
}
