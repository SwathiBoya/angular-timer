import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // var i = 0;
      // (function repeat(){
      //   if(i++ >100) return;
      //   setTimeout(function(){
      //     document.write(i+ "<br/>");
      //     repeat();
      //   },2000);
      // }
      // )();

      for(var arr=0; arr<=100 ;arr++){
        (function(arr){
          setTimeout(function()
          {
            document.write(arr  + "<br/>");
          
          },arr*2000);
        })(arr);
      }
  }

}
