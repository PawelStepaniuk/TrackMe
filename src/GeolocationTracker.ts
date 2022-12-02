import DateAndTime from './DateAndTime';
import Message from './Messages';
import ResultHandler from './ResultHandler';

export default class GeolocationTracker {
  startTracking(watchID:number) {
    const navigatorIsWorking = (watchID !== 0);
    if (!navigatorIsWorking) {
      return navigator.geolocation.watchPosition(
        this.success,
        this.error,
        this.options,
      );
    }
    return 0;
  }

  stopTracking(watchID:number) {
    const navigatorIsWorking = (watchID !== 0);
    if (navigatorIsWorking) {
      navigator.geolocation.clearWatch(watchID);
    }
  }

  private success(position: GeolocationPosition) {
    ResultHandler.showResult(position);
    ResultHandler.showJSON(position);
  }

  private error(errorInfo: GeolocationPositionError) {
    const textOfAlert = ` ${DateAndTime.getTimeAsString()} - nie udalo sie pobrac danych. Blad: ${errorInfo}`;
    Message.createError('GeolocationError', textOfAlert);
  }

  private options: PositionOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };
}
