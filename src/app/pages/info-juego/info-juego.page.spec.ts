import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoJuegoPage } from './info-juego.page';

describe('InfoJuegoPage', () => {
  let component: InfoJuegoPage;
  let fixture: ComponentFixture<InfoJuegoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoJuegoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoJuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
