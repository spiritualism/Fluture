import {isFuture} from '../core.mjs';
import {partial1} from '../internal/fn.mjs';
import {isFunction} from '../internal/is.mjs';
import {throwInvalidArgument, throwInvalidFuture} from '../internal/throw.mjs';

function value$cont(cont, m){
  if(!isFuture(m)) throwInvalidFuture('Future.value', 1, m);
  return m.value(cont);
}

export function value(cont, m){
  if(!isFunction(cont)) throwInvalidArgument('Future.value', 0, 'be a Function', cont);
  if(arguments.length === 1) return partial1(value$cont, cont);
  return value$cont(cont, m);
}
