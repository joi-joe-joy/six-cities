import * as React from 'react';
import {PageType} from "../../types";
import Page from "../page/page";

interface Props {
  onSubmit: ({email, password}: {email: string, password: string}) => void
};

class Login extends React.PureComponent<Props, {}> {
  private emailRef: React.RefObject<HTMLInputElement>;
  private passwordRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const {onSubmit} = this.props;

    e.preventDefault();
    onSubmit({
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (
      <Page type={PageType.LOGIN}>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post"
                onSubmit={this.handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    className="login__input form__input"
                    type="email" name="email"
                    placeholder="Email" required
                    ref={this.emailRef}
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    className="login__input form__input"
                    type="password" name="password"
                    placeholder="Password" required
                    ref={this.passwordRef}
                  />
                </div>
                <button
                  className="login__submit form__submit button" type="submit">
                  Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </Page>
    );
  }
}

export default Login;
