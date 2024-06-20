import React, { useReducer } from 'react'
import { formReducer } from './ReduceDynamicForm'
import { FormState, FormField, Action } from './DynamicForm.types';

const initialFormState: FormState = {
  fields: [],
  isValid: false,
};

const DynamicForm: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const handleAddField = () => {
    const newField: FormField = {
      id: `field-${state.fields.length + 1}`,
      label: `Field ${state.fields.length + 1}`,
      value: '',
      validation: (value: string) => value.length > 0,
    };
    dispatch({ type: 'ADD_FIELD', field: newField });
  };

  const handleRemoveField = (id: string) => {
    dispatch({ type: 'REMOVE_FIELD', id });
  };

  const handleInputChange = (id: string, value: string) => {
    dispatch({ type: 'UPDATE_FIELD', id, value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (state.isValid) {
      // Perform form submission logic
      console.log('Form submitted!', state.fields);
    } else {
      console.log('Form is invalid!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={handleAddField}>
          Add Field
        </button>
      </div>
      {state.fields.map(field => (
        <div key={field.id}>
          <label>{field.label}</label>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleInputChange(field.id, e.target.value)}
          />
          <button type="button" onClick={() => handleRemoveField(field.id)}>
            Remove
          </button>
          
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
