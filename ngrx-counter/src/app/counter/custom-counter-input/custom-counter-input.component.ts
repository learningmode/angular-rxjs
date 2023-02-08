import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { customIncrement,changeText } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value!:number;
  channelName!:string;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data=>{
      return this.channelName = data.channelName;
    })
  }

  onAdd():void{
    this.store.dispatch(customIncrement({value:Number(this.value)}));
    console.log(this.value);
  }

  changeText(){
    this.store.dispatch(changeText());
  }


}
