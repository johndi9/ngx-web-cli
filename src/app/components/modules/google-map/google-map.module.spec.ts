import { GoogleMapModule } from './google-map.module';

describe('GoogleMapModule', () => {
  let googleMapModule: GoogleMapModule;

  beforeEach(() => {
    googleMapModule = new GoogleMapModule();
  });

  it('should create an instance', () => {
    expect(googleMapModule).toBeTruthy();
  });
});
