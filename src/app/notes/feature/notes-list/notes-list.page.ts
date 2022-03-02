import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.page.html',
  styleUrls: ['./notes-list.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
