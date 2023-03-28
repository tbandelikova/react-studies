import React, { Component } from 'react';
import { InputText } from '../components/InputText';
import { InputDate } from '../components/InputDate';
import { InputFile } from '../components/InputFile';
import { InputSelect } from '../components/InputSelect';
import { InputSwitch } from '../components/InputSwitch';
import { InputCheckbox } from '../components/InputCheckbox';
import Header from '../components/Header';
import CardUser from '../components/CardUser';

type CardProps = {
  name: string;
  birthday: string;
  gender: string;
  location: string;
  img: string;
};

class Forms extends Component<object, { data: Array<CardProps> }> {
  inputTextRef: React.RefObject<HTMLInputElement>;
  inputDateRef: React.RefObject<HTMLInputElement>;
  inputSelectRef: React.RefObject<HTMLSelectElement>;
  inputSwitchRef: React.RefObject<HTMLInputElement>;
  inputFileRef: React.RefObject<HTMLInputElement>;
  inputCheckRef: React.RefObject<HTMLInputElement>;
  ref: React.RefObject<HTMLFormElement>;

  constructor(props: object) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);

    this.ref = React.createRef<HTMLFormElement>();
    this.inputTextRef = React.createRef<HTMLInputElement>();
    this.inputDateRef = React.createRef<HTMLInputElement>();
    this.inputSelectRef = React.createRef<HTMLSelectElement>();
    this.inputSwitchRef = React.createRef<HTMLInputElement>();
    this.inputCheckRef = React.createRef<HTMLInputElement>();
    this.inputFileRef = React.createRef<HTMLInputElement>();
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const image = this.inputFileRef.current?.files ? this.inputFileRef.current?.files[0] : '';
    let imgSrc;
    if (image) {
      imgSrc = window.URL.createObjectURL(image);
    }
    if (!this.inputCheckRef.current?.checked) {
      return alert('Make concent to your personal data');
    }
    const userData = {
      name: this.inputTextRef.current ? this.inputTextRef.current.value : '',
      birthday: this.inputDateRef.current ? this.inputDateRef.current.value : '',
      location: this.inputSelectRef.current ? this.inputSelectRef.current.value : '',
      gender: this.inputSwitchRef.current?.checked ? 'Male' : 'Female',
      img: imgSrc ? imgSrc : 'src/assets/secondImg.svg',
    };
    this.setState({ data: [...this.state.data, userData] });
    this.ref.current?.reset();
    alert(`Add user ${userData.name}`);
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Header />
        <main>
          <div className="wrapper center-column">
            <div className="formcontainer">
              <form className="form" ref={this.ref} onSubmit={this.handleSubmit} autoComplete="off">
                <div className="form-element">
                  <label htmlFor="textInput">Name:</label>
                  <InputText ref={this.inputTextRef} />
                </div>
                <div className="form-element">
                  <label htmlFor="dateInput">Birthday:</label>
                  <InputDate ref={this.inputDateRef} />
                </div>
                <div className="form-element">
                  <InputSwitch ref={this.inputSwitchRef} />
                </div>
                <div className="form-element">
                  <InputSelect ref={this.inputSelectRef} />
                </div>
                <div className="form-element">
                  <InputFile ref={this.inputFileRef} />
                </div>
                <div className="form-element">
                  <InputCheckbox ref={this.inputCheckRef} />
                </div>
                <div className="form-element form-submit">
                  <input className="submit" type="submit" value="Send" />
                </div>
              </form>
            </div>
            <div className="form-cards">
              {data && data.map((item, index) => <CardUser {...item} key={index} />)}
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Forms;
