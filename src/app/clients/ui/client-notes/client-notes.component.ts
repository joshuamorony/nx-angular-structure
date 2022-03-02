import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-notes',
  templateUrl: './client-notes.component.html',
  styleUrls: ['./client-notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientNotesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
