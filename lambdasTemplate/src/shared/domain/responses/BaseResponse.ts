export abstract class BaseResponse {
  constructor(public name: string) {
    this.name = name;
  }

  toString() {
    return JSON.stringify(this);
  }
}
