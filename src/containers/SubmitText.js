import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Formik
        onSubmit={(values) => {
          console.log(values)
          axios.post('https://localhost:8083', values)
        }}
        render={formProps => (
          <form
            onSubmit={values => {
              formProps.handleSubmit(values)
            }}
          >
            <input
              type='text'
              name='message'
              value={formProps.values.message}
              onChange={formProps.handleChange}
            />
            <button style={{ marginLeft: '10px', cursor: 'pointer' }}>Submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default App;
