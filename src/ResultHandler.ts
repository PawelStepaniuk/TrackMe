import objectify from 'geoposition-to-object';
import Paragraph from '../HTMLElements/Paragraph';
import DateAndTime from './DateAndTime';
import GeolocationData from './GeolocationData';

export default class ResultHandler {
  static showResult(result:GeolocationPositionProps) {
    const longitude = result.coords?.longitude;
    const latitude = result.coords?.latitude;
    const isCorrectObject = (longitude && latitude);
    if (!isCorrectObject) return '';
    const geoLocationText = `
      Latitude: ${latitude}
      Longitude: ${longitude} 
      Godzina: ${DateAndTime.getTimeAsString()}
      `;

    const geoLocationInfo = new GeolocationData();
    geoLocationInfo.create('geoInfo', geoLocationText);
    return 0;
  }

  static showJSON(object: GeolocationPositionProps) {
    const textInJSON = JSON.stringify(objectify(object));
    const isElementExist = document.getElementById('json');
    if (!isElementExist) {
      const pJSON = new Paragraph('json', textInJSON);
      return 0;
    }
    const currentElement = document.getElementById('json');
    if (currentElement !== null) {
      currentElement.textContent = textInJSON;
    }
    return 0;
  }
}
