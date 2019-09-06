import { B } from "./b";

export class A {
  public b: B;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AService {
  getA(): A {
    const a = new A();
    a.b = new B();
    return a;
  }
}
