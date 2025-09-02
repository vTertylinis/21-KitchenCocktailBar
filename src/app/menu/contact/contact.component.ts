import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = { name: '', email: '', message: '' };
  submitting = false;
  success = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  sendMessage() {
    // simple validation
    if (!this.contact.name || !this.contact.email || !this.contact.message) {
      this.error = 'Please fill all fields.';
      return;
    }

    this.submitting = true;
    this.error = null;
    this.success = false;

    const url =  'https://4tb3b4efah.execute-api.eu-north-1.amazonaws.com/prod/contact'; 

    this.http.post(url, this.contact).subscribe({
      next: () => {
        this.success = true;
        this.contact = { name: '', email: '', message: '' };
        this.submitting = false;
      },
      error: (err) => {
        console.error('Error sending message', err);
        this.error = 'Something went wrong. Please try again later.';
        this.submitting = false;
      }
    });
  }
}