import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalContentComponent } from './journal-content.component';

describe('JournalContentComponent', () => {
  let component: JournalContentComponent;
  let fixture: ComponentFixture<JournalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
