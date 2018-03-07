import {isFuture} from '../core.mjs';
import {partial1} from '../internal/fn.mjs';
import {throwInvalidFuture} from '../internal/throw.mjs';

function or$left(left, right){
  if(!isFuture(right)) throwInvalidFuture('Future.or', 1, right);
  return left.or(right);
}

export function or(left, right){
  if(!isFuture(left)) throwInvalidFuture('Future.or', 0, left);
  if(arguments.length === 1) return partial1(or$left, left);
  return or$left(left, right);
}
