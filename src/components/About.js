import React from 'react';

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

const PackingList = () => {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
          img
          src="https://github.com/aeshapatel025/Strive_UI/pull/11/files"
        />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
};

const About = () => {
  return (
    <div>
      About
      <PackingList />
    </div>
  );
};

export default About;
