import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Main from './Main'
import { render } from 'enzyme'
// this is a test snapshot
// test('Main snapshot test', () => {
//   const component = shallow(<Main />)
//   const tree = shallowToJson(component)
//   expect(tree).toMatchSnapshot()
// })
test('Search snapshot test', () => {
  const component = shallow(<Main />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Main should have text that says Manage', () => {
  const wrapper = shallow(<Main />)
  expect(wrapper.find(Manage).render()).toEqual('Manage UsersAdd MediaAdd Press')
})

// test('Searh should render correct amount of shows based on search', () => {

//   component.find('input').simulate('change', {target: {value:
//     searchWord}})
//   const showCount = shows.filter((show) => '${show.title} ${show.description}'
//    .toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length
//   expect(component.find(ShowCard).length).toEqual(showCount)
// })

// helpful for testing display components
// to run type: NODE_ENV=test jest
// every time you change the snapshot: NODE_ENV=test jest -u
// webpack will fuck things from bundle.js every now and then
// so npm test --cache clears it out
// npm test -- -u updates snapshot once you change

// some example tests:

// test('Search should do a thing', () => {
//   const component = shallow(<Search />)
//   expect(component.find(ShowCard).length).toEqual(shows.length)
// })

// test('Searh should render correct amount of shows based on search', () => {
//   const searchWord = 'house'
//   const component = shallow(<Search />)
//   component.find('input').simulate('change', {target: {value:
//     searchWord}})
//   const showCount = shows.filter((show) => '${show.title} ${show.description}'
//    .toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length
//   expect(component.find(ShowCard).length).toEqual(showCount)
// })
// check for coverage
// npm run test -- --coverage
// type this exactly into terminal for a webpage report of coverage:
// open coverage/lcov-report/index.html
//
//
