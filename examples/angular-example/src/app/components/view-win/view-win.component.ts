import { Component, ElementRef, ViewChild } from '@angular/core';
import ViewWin from 'view-win'

@Component({
  selector: 'app-view-win',
  templateUrl: './view-win.component.html',
  styleUrls: ['./view-win.component.scss']
})
export class ViewWinComponent {
  list = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'rmListener', 'JQuery', 'Angular', 'React', 'Vue', 'Nodejs', 'npm', 'nrm', 'nvm']
  viewWin!: any
  @ViewChild('eleRef')
  eleRef!: ElementRef;
  constructor() {
    
  }
  ngOnInit(): void {
    this.init()
  }
  // 初始化
  init() {
    setTimeout(() => {
      console.log(this.eleRef);
      this.viewWin = new ViewWin({
        target: this.eleRef.nativeElement,
        direction: 'x',
        vmid: true
      })
    });
  }
  // 移除事件
  handleRemove() {
    this.viewWin.rmEvent()
  }
}
