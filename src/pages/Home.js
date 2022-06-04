import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div className="home-page">
      <h1 className="home-title">Welcome to Math Magician!</h1>
      <h4 className="sub-title">Interesting and Amazing Facts About Maths</h4>
      <p>
        Words such as formula, equation and calculation sounds boring
        for those who hate Maths as a subject,
        whereas it is fun for those who have keen
        interest towards solving equations/problems.
      </p>
      <p>
        October 14th is celebrated as World Maths Day.
        Let us know some interesting and amazing facts about Mathematics.
        You can ours on our
        {' '}
        <Link to="/quote">Quote page</Link>
      </p>
    </div>
  </>
);

export default Home;
