import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDataComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
