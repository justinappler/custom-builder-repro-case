import { A } from "./a";

export class B {
  public a: A;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class BService {
  getB(): B {
    const b = new B();
    b.a = new A();
    return b;
  }
}
