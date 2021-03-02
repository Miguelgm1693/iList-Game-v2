import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestauraPasswordPage } from './restaura-password.page';

describe('RestauraPasswordPage', () => {
  let component: RestauraPasswordPage;
  let fixture: ComponentFixture<RestauraPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauraPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestauraPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
