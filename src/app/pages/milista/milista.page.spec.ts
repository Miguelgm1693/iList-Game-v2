import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MilistaPage } from './milista.page';

describe('MilistaPage', () => {
  let component: MilistaPage;
  let fixture: ComponentFixture<MilistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MilistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
