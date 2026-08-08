import React from 'react'
import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
    const [fields, setFields] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', or 'success'

    function handleChange(event) {
        const { name, value } = event.target;
        setFields(prev => ({ ...prev, [name]: value }));
    }
//3.handle form
    async function handleSubmit(event) {
        event.preventDefault();

        setStatus('sending');
        await new Promise(resolve => setTimeout(resolve, 3000));

        setStatus('success');
    }

    if (status === 'success') {
        return <div className='success-msg'>Your message has been sent successfully!</div>
    }

    return (
      <div>
        <form onSubmit={handleSubmit} className='contact-form' noValidate>
          <div className="form-group">
              <label>Name</label>
              <input
                name='name'
                type='text'
                required value={fields.name}
                onChange={handleChange}
              />
          </div>
          <div className="form-group">
              <label>Email</label>
              <input
                name='email'
                type='email'
                required value={fields.email}
                onChange={handleChange}
              />
          </div>
          <div className="form-group">
              <label>Message</label>
              <textarea
                name='message'
                rows='5'
                required value={fields.message}
                onChange={handleChange}
              />
          </div>
          <button type="submit" disabled={status === 'sending'} className="btn btn-primary">
              {status === 'sending'
                ? 'Sending...'
                : 'Send Message 🚀'}
          </button>
          {status === 'success' && <p className='form-success'>Your message has been sent.</p>}
        </form>
      </div>
    )
}

export default ContactForm