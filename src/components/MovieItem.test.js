import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import MovieItem from './MovieItem';

test('MovieItem', assert => {
  const msg = 'MovieItem should render movie name';

  const movie = {
    name: 'The Thing',
    director: 'John Carpenter',
    released: '1982',
    id: 8
  }

  const props = {
    movie
  };

  const $ = shallow(<MovieItem movie={props.movie} />);
  const re = new RegExp(movie.name, 'g');
  const output = $.find('.movie-name').html();

  const actual = re.test(output);
  const expected = true;

  assert.equal(actual, expected, msg);
  assert.end();
});