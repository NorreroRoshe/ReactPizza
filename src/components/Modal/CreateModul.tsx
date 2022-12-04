import React from 'react'
import { ErrorMessage } from './ErrorMessage';

interface CreateProductProps {
  onCreate: () => void;
}

const CreateModul = ({onCreate}: CreateProductProps) => {

  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');

  const submitHundeler = (event: React.FormEvent) => {
    event.preventDefault();           // Страница не будет перезагружаться от клика на btn

    setError('');

    if(value.trim().length === 0) {
      setError('Please enter valid title.')
      return
    };

    onCreate();
  }

  const changeHundeler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={submitHundeler}>
      <input type="text" placeholder="Enter product title..." value={value} onChange={changeHundeler}/>
      <button type="submit">Create</button>
      {error && <ErrorMessage error={error}/>}
    </form>
  )
}

export default CreateModul;