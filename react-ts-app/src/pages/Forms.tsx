import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import InputText from '../components/InputText';
import InputDate from '../components/InputDate';
import InputFile from '../components/InputFile';
import InputSelect from '../components/InputSelect';
import InputSwitch from '../components/InputSwitch';
import InputCheckbox from '../components/InputCheckbox';
import { CardUser } from '../components/CardUser';
import { Loader } from '../components/Loader/Loader';
import { IFormInput } from '../types/types';
import { getCardsAction, getSuccessAction, getCardsDeletedAction } from '../redux/formSlice';

export const Forms: React.FC = function Forms() {
  const { users, isLoading } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>({
    mode: 'onSubmit',
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(getCardsAction(true));
    const check = confirm(
      `Check your info\n${data.name}\n${data.date}\n${data.location}\n${data.gender}\n`
    );
    if (check) {
      const image = window.URL.createObjectURL(data.file[0]);
      const userData = {
        name: data.name,
        birthday: data.date,
        location: data.location,
        gender: data.gender,
        img: image ? image : 'src/assets/secondImg.svg',
      };
      dispatch(getSuccessAction(userData));
      reset();
    }
    dispatch(getCardsAction(false));
  };
  const handleClick = () => {
    dispatch(getCardsDeletedAction());
  };
  return (
    <main>
      <div className="wrapper center-column">
        <div className="top-part">
          <div className="formcontainer">
            <form className="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="form-element">
                <InputText
                  {...register('name', {
                    required: 'required field',
                    pattern: {
                      value: /( |^|-)[A-Z][a-z-]{2,20}$/,
                      message:
                        'at least three latin characters required each word must be capitalized',
                    },
                  })}
                />
              </div>
              <div className="error">{errors?.name && <p>{errors?.name.message}</p>}</div>
              <div className="form-element">
                <InputDate {...register('date', { required: true })} />
              </div>
              <div className="error">{errors?.date && <p>required field</p>}</div>
              <div className="form-element">
                <InputSwitch {...register('gender', { required: true })} />
              </div>
              <div className="error">{errors?.gender && <p>required field</p>}</div>
              <div className="form-element">
                <InputSelect {...register('location', { required: true })} />
              </div>
              <div className="error">{errors?.location && <p>select location</p>}</div>
              <div className="form-element">
                <InputFile {...register('file', { required: true })} />
              </div>
              <div className="error">{errors?.file && <p>foto required</p>}</div>
              <div className="form-element">
                <InputCheckbox {...register('consent', { required: true })} />
                <div className="error">{errors?.consent && <p>we need your consent</p>}</div>
              </div>
              <div className="form-element form-submit">
                <input className="btn submit" type="submit" value="Send" />
              </div>
            </form>
          </div>
          <div className="form-clear">
            <button className="btn search-button" onClick={handleClick}>
              Clear All
            </button>
            {isLoading && <Loader />}
          </div>
        </div>
        <div className="form-cards">
          {!isLoading && users && users.map((item, index) => <CardUser {...item} key={index} />)}
        </div>
      </div>
    </main>
  );
};
