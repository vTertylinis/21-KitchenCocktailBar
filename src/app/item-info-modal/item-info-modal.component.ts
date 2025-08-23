import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-info-modal',
  standalone: false,
  templateUrl: './item-info-modal.component.html',
  styleUrl: './item-info-modal.component.css'
})
export class ItemInfoModalComponent {
   @Input() item: any; // Item to display
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

}
