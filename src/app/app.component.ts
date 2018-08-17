import { Component } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes, animation} from '@angular/animations';
import{FormBuilder, FormGroup, Validator, Validators}from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('myfirstanimation',[
      state('small', style({height : '0px'})),
      state('large', style({height : '10000px'})),

      transition('small <=> large', animate('400ms ease-in'))
    ])

  ]
})
export class AppComponent {
  
  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';


constructor(private fb:FormBuilder){

  this.rForm = fb.group({
    'name': [null, Validators.required],
    'description':[null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    'validate' : ''
});
}

addPost(post){
  this.description = post.description;
  this.name = post.name;
}
  state: string = 'small';

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small' );
  }
}
