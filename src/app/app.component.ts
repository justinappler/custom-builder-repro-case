import { Component, OnInit } from '@angular/core';
import { B, BService } from './b';
import { A, AService } from './a';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'custom-builders-repro';
  public a: A;
  public b: B;

  constructor(private aService: AService, private bService: BService) {}

  public ngOnInit(): void {
    this.a = this.aService.getA();
    this.b = this.bService.getB();
  }
}
