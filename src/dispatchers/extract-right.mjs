import {isFuture} from '../core.mjs';
import {throwInvalidFuture} from '../internal/throw.mjs';

export function extractRight(m){
  if(!isFuture(m)) throwInvalidFuture('Future.extractRight', 0, m);
  return m.extractRight();
}
