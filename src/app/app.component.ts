import { error } from '@angular/compiler/src/util';
import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item ...${item}`),
      error: (err) => console.error(`error occurred ${err}`),
      complete: () => console.log(`complete!!!`),
    });

    of('Apple', 'Samsung', 'Xiaomi').subscribe({
      next: (item) => console.log(`I buy an ${item}`),
      error: (err) => console.error(`error occurred ${err}`),
      complete: () => console.log(`complete stream!!!`),
    });
  }
}
