import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthcallbackComponent } from './oauthcallback.component';

describe('OauthcallbackComponent', () => {
  let component: OauthcallbackComponent;
  let fixture: ComponentFixture<OauthcallbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OauthcallbackComponent]
    });
    fixture = TestBed.createComponent(OauthcallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
