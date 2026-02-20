import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input'

@Component({
  selector: 'app-subscribe',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './subscribe.html',
  styleUrl: './subscribe.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Subscribe {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
