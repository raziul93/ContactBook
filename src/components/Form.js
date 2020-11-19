import React from 'react';

const form = () => {
  return (
    <div className="form-view">
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="Phone Number (include dashes and area code)" />
      <input type="text" placeholder="email" />
      <fieldset>
        <legend>Contact Type</legend>
        <label><input type="radio" value="work" />Work</label>
        <label><input type="radio" value="personal" />Personal</label>
        <label><input type="radio" value="other" />Other</label>
      </fieldset>
      <button>Create Contact</button>
    </form>
    </div>
  );
};

export default form;