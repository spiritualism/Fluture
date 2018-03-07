import {isFuture} from '../core.mjs';
import {throwInvalidFuture} from '../internal/throw.mjs';

export function swap(m){
  if(!isFuture(m)) throwInvalidFuture('Future.swap', 0, m);
  return m.swap();
}
