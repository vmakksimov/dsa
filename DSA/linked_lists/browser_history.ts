class BrowserHistory {
  private current: string;
  private backStack: string[];
  private forwardStack: string[];
  constructor(homepage: string) {
    this.current = homepage;
    this.backStack = [];
    this.forwardStack = [];
  }

  visit(url: string) {
    this.backStack.push(this.current);
    this.current = url;
    this.forwardStack = []; // clear forward history
  }

  back() {
    if (this.backStack.length === 0) {
      return this.current;
    }

    this.forwardStack.push(this.current);
    this.current = this.backStack.pop();
    return this.current;
  }

  forward() {
    if (this.forwardStack.length === 0) {
      return this.current;
    }

    this.backStack.push(this.current);
    this.current = this.forwardStack.pop();
    return this.current;
  }

  getCurrent() {
    return this.current;
  }
}

const history = new BrowserHistory("google.com");


history.visit("github.com");
history.visit("stackoverflow.com");

console.log(history.back());    // github.com
console.log(history.back());    // google.com
console.log(history.forward()); // github.com

history.visit("linkedin.com");
console.log(history.forward()); // linkedin.com (no forward available)