// src/app/pipes/translate.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private currentLang = 'gr';

  constructor(private translationService: TranslationService) {
    this.translationService.lang$.subscribe(lang => this.currentLang = lang);
  }

  transform(value: string): string {
    return this.translationService.translate(value);
  }
}
