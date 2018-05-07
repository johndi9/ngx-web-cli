import { Injectable } from '@angular/core';
import { createClient, MapOptions } from '@google/maps';
import { styledMap } from '../../helpers/google-maps.helper';
import {} from '@types/googlemaps';

@Injectable()
export class GoogleMapsService {
  private geoCoder;
  private readonly KEY = 'AIzaSyAVVJ9dsIF1kXP0mfqAfCWOg5oyB1cvRWs';

  public constructor() {
    this.geoCoder = createClient({ key: this.KEY });
  }

  public getGoogleMapsUrl(): string {
    return `https://maps.googleapis.com/maps/api/js?key=${this.KEY}&v=3&callback=googleMapsReady`;
  }

  public createMap(mapDiv: Element, address: string): void {
    this.geocodeAddress(address).then((response) => {
      const position: google.maps.LatLng = response[ 0 ].geometry.location;
      const map = this.getNewGoogleMaps(mapDiv, position);

      this.createMarket(map, position);
    });
  }

  public geocodeAddress(address: string): Promise<google.maps.GeocoderResult[]> {
    const request: google.maps.GeocoderRequest = { address };

    return new Promise<google.maps.GeocoderResult[]>((resolve, reject) => {
      this.geoCoder.geocode(request, (error, response) => {
        if (error) { reject(error); }
        resolve(response.json.results);
      });
    });
  }

  private getNewGoogleMaps(mapDiv: Element, position: google.maps.LatLng): google.maps.Map {
    return new google.maps.Map(mapDiv, {
      center: position,
      styles: styledMap,
      zoom: 9,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false
    });
  }

  private createMarket(map: google.maps.Map, position: google.maps.LatLng) {
    new google.maps.Marker({ map, position });
  }
}
