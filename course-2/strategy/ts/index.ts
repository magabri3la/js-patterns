interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string) {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy{
  login(user: string, password: string) {
    console.log('LoginDBStrategy');
    if( user === 'admin' && password === 'admin' ) {
      return true;
    }
    return false;
  }
}

class LoginServiceStrategy implements Strategy{
  login(user: string, password: string) {
    console.log('LoginServiceStrategy');
    if( user === 'admin' && password === 'admin' ) {
      return true;
    }
    return false;
  }
}

class LoginGoogleStrategy implements Strategy{
  login(user: string, password: string) {
    console.log('LoginGoogleStrategy');
    if( user === 'admin' && password === 'admin' ) {
      return true;
    }
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
auth.login('admin', 'admin');
auth.setStrategy(new LoginServiceStrategy());
auth.login('admin', 'admin');
auth.setStrategy(new LoginGoogleStrategy());
auth.login('admin', 'admin');