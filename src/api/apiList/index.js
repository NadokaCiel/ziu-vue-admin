import Common from './Common';
import User from './User';

const getApi = (version) => [
  ...Common(version),
  ...User(version),
];

export default getApi;