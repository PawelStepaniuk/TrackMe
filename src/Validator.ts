export default class Validator {
  static isName(name: string) {
    const isLength = (name.length > 4);
    const isSpecialChars = !this.isContainSpecialChars(name);
    return (isLength && isSpecialChars);
  }

  static isContainSpecialChars(name:string) {
    const spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return spChars.test(name);
  }
}
