import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetListPanelComponent } from './asset-list-panel.component';

describe('AssetListPanelComponent', () => {
  let component: AssetListPanelComponent;
  let fixture: ComponentFixture<AssetListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
