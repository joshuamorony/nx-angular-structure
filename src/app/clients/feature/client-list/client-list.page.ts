import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.page.html',
  styleUrls: ['./client-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
