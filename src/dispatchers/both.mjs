import {isFuture} from '../core.mjs';
import {partial1} from '../internal/fn.mjs';
import {throwInvalidFuture} from '../internal/throw.mjs';

function both$left(left, right){
  if(!isFuture(right)) throwInvalidFuture('Future.both', 1, right);
  return left.both(right);
}

export function both(left, right){
  if(!isFuture(left)) throwInvalidFuture('Future.both', 0, left);
  if(arguments.length === 1) return partial1(both$left, left);
  return both$left(left, right);
}
