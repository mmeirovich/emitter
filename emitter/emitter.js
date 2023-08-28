class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    on(eventName, handler) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(handler) - 1;
      let called = false;
      return () => {
        if (called) return;
        const index = this.events[eventName].indexOf(handler);
        this.events[eventName].splice(index, 1);
        called = true;
      };
    }
  
    trigger(eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(handler => {
          handler(data);
        });
      }
    }
  
  }
  
  module.exports = EventEmitter;
  