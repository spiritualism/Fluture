import {isFuture} from '../core.mjs';
import {throwInvalidFuture} from '../internal/throw.mjs';

export function extractLeft(m){
  if(!isFuture(m)) throwInvalidFuture('Future.extractLeft', 0, m);
  return m.extractLeft();
}
