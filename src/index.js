"use strict";
export default class ViewWin {
  ele = null
  options = {
    target: this.ele,
    direction: 'y', // x | y
    vmid: false,
  }
  EVENTSTACK = []
  constructor(conf) {
    this.init(conf)
  }
  /**
   * 初始化
   * @param {*} conf init opntions
   */
  init(conf) {
    try {
      if (!conf.target) {
        throw new Error('element target is not found!') 
      }
      this.options = conf
      this.ele = this.options.target
      this.initListener(this.ele, 'wheel', this.wheel)
      if (this.options.vmid) {
        if (this.ele.hasChildNodes()) {
          if (this.ele.children.length === 0) {
            throw new Error('container is empty!') 
          }
          for (let index = 0; index < this.ele.children.length; index++) {
            const element = this.ele.children[index];
            this.initListener(element, 'mouseup', this.active)
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * 注册监听器
   * @param {HTMLElement} target 监听对象
   * @param {string} event 事件名
   * @param {function} callback 
   */
  initListener(target, event, callback) {
    this.EVENTSTACK.push({ target, event, callback })
    target.addEventListener(event, callback)
  }
  // 移除监听器
  removeListener(target, event, callback) {
    target.removeEventListener(event, callback)
  }
  // 卸载
  rmEvent() {
    if (!(this instanceof ViewWin)) {
      throw new Error('Receiver must be an instance of class ViewWin')
    }
    for (const item of this.EVENTSTACK) {
      const { target, event, callback } = item
      this.removeListener(target, event, callback)
    }
    this.EVENTSTACK = []
  }
  active = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (this.options.direction === 'x') {
      this.ele.scrollLeft = (e.target.offsetLeft + e.target.offsetWidth / 2) - this.ele.offsetWidth / 2
    } else {
      this.ele.scrollTop = (e.target.offsetTop + e.target.offsetHeight / 2) - this.ele.offsetHeight / 2
    }
  }
  wheel = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const ow = e.currentTarget.offsetWidth
    const sw = e.currentTarget.scrollWidth
    const preventYWheel = ow <= sw
    if (!preventYWheel || e.deltaY === 0) return
    if (this.options.direction === 'x') {
      e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
    } else if (this.options.direction === 'y') {
      e.currentTarget.scrollTop += e.deltaY + e.deltaX;
    }
  }
}
