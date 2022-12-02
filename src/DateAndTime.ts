export default class DateAndTime {
  static getTimeAsString() {
    const today = new Date();
    const date = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    return date;
  }
}
