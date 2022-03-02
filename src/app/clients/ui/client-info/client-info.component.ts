import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientInfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
