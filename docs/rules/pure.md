# Disallows impure constructs. (pure)

(Mostly adapted from [eslint-plugin-immutable/issues/4](https://github.com/jhusain/eslint-plugin-immutable/issues/4))

Based on [this blog post](http://blog.jenkster.com/2015/12/which-programming-languages-are-functional.html), when you call a function and don’t use it’s return value, chances are high that it is being called for its side effect. e.g.

```js
array.push(1)
alert('Hello world!')
```

Side-effects can be harder to reason about than purely functional code. (Look up on ‘idempotence’ and ‘referential transparency’.) By making the core logic of your application “purely functional,” it becomes easier both to reason and test your code.

But for your app to function, you need side-effects, right?
You can put all your side-effects outside the core logic of the application.
This idea is called [“Functional Core, Imperative Shell.”](http://chimera.labs.oreilly.com/books/1234000000754/ch22.html#_functional_core_imperative_shell).



## Rule Details

This rule aims to eliminate side-effects by disallowing some language constructs concerning side-effects, such as `ExpressionStatement` and `ExpressionStatement`

The following patterns are considered warnings:

```js
array.push(1)           // <-- Return value discarded,
                        //     It must be there for side-effects!

alert('Hello world!')   // <-- Return value discarded.
                        //     It must be there for side-effects!

const x = (f(), g())    // <-- Result of `f()` discarded.
                        //     It must be there for side-effects!
```

The following patterns are not warnings:

```js
export const x = f()

import _ from "lodash"
export function onlyEven (array) {
  const filteredArray = array.filter(function (item) {
    if (item % 2 === 0) {
      return true
    } else {
      return false
    }
  })
  return filteredArray
}
```


## When Not To Use It

In imperative code, don’t use this rule.


## Debugging Aid

For debugging via console, you can create a trace function. (Of course in a separate file with this rule turned off).

```js
/* eslint-disable pure/pure */
export function trace (...args) {
  return (value) => {
    console.log(...args, value)
    return value
  }
}
```

Then you can add `trace` anywhere to log a value. The code below looks purely functional, but it produces some `console.log` as side-effects.

```js
export const add = (a, b) => (
  trace('a =')(a) + trace('b =', b)
)
```

This breaks the purity rule, but [when you’re debugging, anything goes](https://tenderlovemaking.com/2016/02/05/i-am-a-puts-debuggerer.html). Haskell also contains the same `trace` function under [Debug.Trace](https://hackage.haskell.org/package/base-4.9.0.0/docs/Debug-Trace.html).



## Further Reading

- [Ports and Adapter / Hexagonal / Clean Architecture. _Test-Driven Web Development with Python_](http://chimera.labs.oreilly.com/books/1234000000754/ch22.html#_ports_and_adapters_hexagonal_clean_architecture)
- [Disallow ExpressionStatement and SequenceExpression. _eslint-plugin-immutable_ (issue)](https://github.com/jhusain/eslint-plugin-immutable/issues/4)
