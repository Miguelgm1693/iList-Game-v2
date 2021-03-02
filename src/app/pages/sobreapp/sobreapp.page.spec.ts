import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SobreappPage } from './sobreapp.page';

describe('SobreappPage', () => {
  let component: SobreappPage;
  let fixture: ComponentFixture<SobreappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreappPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SobreappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
