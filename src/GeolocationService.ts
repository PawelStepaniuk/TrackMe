import DeviceParameters from './DeviceParameters';
import Message from './Messages';
import Button from '../HTMLElements/Button';

import GeolocationTracker from './GeolocationTracker';

export default class GeolocationService {
  private watchID:number;

  public startButton:Button | null;

  public stopButton:Button | null;

  private geoTracker;

  constructor() {
    this.watchID = 0;
    this.startButton = null;
    this.stopButton = null;
    this.createService();
    this.geoTracker = new GeolocationTracker();
  }

  createService() {
    const deviceType = DeviceParameters.deviceType();
    const isDesktopDevice = deviceType === 'desktop';

    if (!isDesktopDevice) {
      Message.createError(
        'error',
        'Strona dziala tylko na przegladarkach mobilnych',
      );
      return 0;
    }
    this.startButton = new Button('start', () => { this.start(); });
    this.stopButton = new Button('stop', () => { this.stop(); });
    return 0;
  }

  private start() {
    this.watchID = this.geoTracker.startTracking(this.watchID);
  }

  private stop() {
    this.geoTracker.stopTracking(this.watchID);
    this.watchID = 0;
  }
}
