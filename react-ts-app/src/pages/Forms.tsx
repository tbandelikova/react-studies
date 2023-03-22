import React, { Component } from 'react';
import InputDate from '../components/InputDate';
import InputFile from '../components/InputFile';
import InputSelect from '../components/InputSelect';
import InputSubmit from '../components/InputSubmit';
import InputSwitch from '../components/InputSwitch';
import InputText from '../components/InputText';

// const inputs = ['InputText', 'InputText', 'InputText', 'InputText']

type FormState = {
  inputText: string;
  inputDate: string;
  inputSelect: string;
  inputSwitchMale: boolean;
  inputSwitchFemale: boolean;
  showData: object;
};

class Forms extends Component<FormState> {
  state = {
    inputText: '',
    inputDate: '',
    inputSelect: '',
    inputSwitchMale: false,
    inputSwitchFemale: false,
    showData: {},
  };

  inputTextRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputDateRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputSelectRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputSwitchMRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputSwitchFRef: React.RefObject<HTMLInputElement> = React.createRef();

  handleChange() {
    this.setState({
      inputText: this.inputTextRef.current.value,
      inputDate: this.inputDateRef.current.value,
      inputSelect: this.inputDateRef.current.value,
      inputSwitchMale: this.inputDateRef.current.checked,
      inputSwitchFemale: this.inputDateRef.current.checked,
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(`You clicked send. ${this.state}`);
  }

  render() {
    return (
      <main>
        <div className="wrapper two-columns">
          <div className="formcontainer">
            <form className="form" action="">
              <InputText />
              <InputDate />
              <InputSwitch />
              <InputSelect />
              <InputFile />
              <InputSubmit />
            </form>
          </div>
          <div className="form-cards">Card here</div>
        </div>
      </main>
    );
  }
}

export default Forms;
