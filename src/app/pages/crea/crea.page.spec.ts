import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreaPage } from './crea.page';

describe('CreaPage', () => {
  let component: CreaPage;
  let fixture: ComponentFixture<CreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
