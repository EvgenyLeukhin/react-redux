const sidebarLinks = [
  {
    id: 1,
    to: '',
    exact: true,
    linkText: 'Home'
  },
  {
    id: 2,
    to: 'login',
    exact: false,
    linkText: 'Login'
  },
  {
    id: 3,
    to: 'profile',
    exact: true,
    linkText: 'Show profile'
  },
  {
    id: 4,
    to: 'profile/add',
    exact: false,
    linkText: 'Add profile'
  },
  {
    id: 5,
    to: 'profile/edit',
    exact: false,
    linkText: 'Edit profile'
  },
  {
    id: 6,
    to: 'profiles',
    exact: false,
    linkText: 'Profiles list'
  },
  {
    id: 7,
    to: 'unknown-path',
    exact: false,
    linkText: '404 page'
  },
  // {
  //   id: 8,
  //   to: 'redux-test',
  //   exact: false,
  //   linkText: 'Redux test'
  // },
];

export default sidebarLinks;
