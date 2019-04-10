import { Component } from '@angular/core';
import { User } from './models/user.model';
import { Assessment } from './models/assessment.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life-balance';

  // mock data
  UserList: User[] = [
    new User ('Luna', 'Lovegood', 'luna@inthemoon.com',[new Assessment ('2019-01-01', 4, 5, 7, 3), new Assessment ('2019-02-01', 6, 5, 8, 5), new Assessment ('2019-03-01', 8, 7, 7, 6),new Assessment ('2019-04-01', 8, 7, 9, 8) ]),

    new User ('Harry', 'Potter', 'harry@pottermore.com',[new Assessment ('2019-01-14', 9, 3, 5, 3), new Assessment ('2019-02-15', 9, 3, 4, 4), new Assessment ('2019-03-13', 9, 2, 4, 5)]),

    new User ('Draco', 'Malfoy', 'draco@de-anon.com',[new Assessment ('2019-01-21', 8, 5, 4, 3), new Assessment ('2019-02-07', 6, 5, 4, 5), new Assessment ('2019-02-28', 3, 7, 6, 6), new Assessment ('2019-03-12', 5, 6, 7, 8), new Assessment ('2019-04-03', 6, 8, 9, 9)]),

    new User ('Ginny', 'Weasley', 'gw@ddarmy.com',[new Assessment ('2019-01-21', 1, 6, 4, 3), new Assessment ('2019-02-07', 2, 5, 4, 5), new Assessment ('2019-02-28', 3, 8, 6, 6),new Assessment ('2019-03-12', 5, 8, 7, 6) ])
  ]
}
