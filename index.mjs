import concurrify from 'concurrify';
import type from 'sanctuary-type-identifiers';
import {throwInvalidArgument} from './src/internal/throw.mjs';
import {Future, of, reject, never} from './src/core.mjs';
import {FL} from './src/internal/const.mjs';
import {chainRec} from './src/chain-rec.mjs';
import {ap, map, bimap, chain, race, alt} from './src/dispatchers.mjs';

Future.of = Future[FL.of] = of;
Future.chainRec = Future[FL.chainRec] = chainRec;
Future.reject = reject;
Future.ap = ap;
Future.map = map;
Future.bimap = bimap;
Future.chain = chain;

var Par = concurrify(Future, never, race, function parallelAp(a, b){ return b._parallelAp(a) });
Par.of = Par[FL.of];
Par.zero = Par[FL.zero];
Par.map = map;
Par.ap = ap;
Par.alt = alt;

function isParallel(x){
  return x instanceof Par || type(x) === Par['@@type'];
}

function seq(par){
  if(!isParallel(par)) throwInvalidArgument('Future.seq', 0, 'to be a Par', par);
  return par.sequential;
}

export {Future, Future as default, Par, isParallel, seq};
export {isFuture, reject, of, never, isNever} from './src/core.mjs';
export * from './src/dispatchers.mjs';
export {after, rejectAfter} from './src/after.mjs';
export {attempt, attempt as try} from './src/attempt.mjs';
export {cache} from './src/cache.mjs';
export {encase} from './src/encase.mjs';
export {encase2} from './src/encase2.mjs';
export {encase3} from './src/encase3.mjs';
export {encaseN} from './src/encase-n.mjs';
export {encaseN2} from './src/encase-n2.mjs';
export {encaseN3} from './src/encase-n3.mjs';
export {encaseP} from './src/encase-p.mjs';
export {encaseP2} from './src/encase-p2.mjs';
export {encaseP3} from './src/encase-p3.mjs';
export {go, go as do} from './src/go.mjs';
export {hook} from './src/hook.mjs';
export {node} from './src/node.mjs';
export {parallel} from './src/parallel.mjs';
export {tryP} from './src/try-p.mjs';
