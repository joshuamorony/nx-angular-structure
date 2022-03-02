import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-appointment',
  templateUrl: './client-appointment.component.html',
  styleUrls: ['./client-appointment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientAppointmentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
