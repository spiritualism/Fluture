import {isFuture} from '../core.mjs';
import {throwInvalidFuture} from '../internal/throw.mjs';

export function promise(m){
  if(!isFuture(m)) throwInvalidFuture('Future.promise', 0, m);
  return m.promise();
}
