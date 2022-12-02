import _ from 'lodash';

export default class CopyObjectService {
  static cloneAsObject(obj: {}) {
    const result = _.defaultsDeep(obj);
    return result;
  }
}
