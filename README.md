# eslint-plugin-pure

Enforce rules to make your code purely functional by disallowing some language constructs.

__Note:__ Your code must be using ES6 modules, because `module.exports =` is considered impure code!


## What are disallowed?

- __ExpressionStatements__ are disallowed. ExpressionStatements are statements whose result is not used (i.e. not stored in a variable, thrown, or returned). This signifys that some side-effect is taking place.

  ```js
  array.push(1)
  ```

  Binding to a variable is allowed, though, e.g.
  
  ```js
  export function getArrayLength (array) {
    const arrayLength = array.length
    return arrayLength
  }
  ```

  To prevent cheating by just binding side-effect to an unused variable, use `no-unused-vars` rule.

- __AssignmentExpressions__ are disallowed for obvious reasons.

- __UpdateExpressions__ are disallowed for obvious reasons.

- __SequenceExpressions__ are disallowed, because `(a, b, c)` results in `c`, and that means `a` and `b` are evaluated for purely side-effects.


## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-pure`:

```
$ npm install purely-functional/eslint-plugin-pure --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-pure` globally.



## Usage

Add `pure` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```yaml
plugins:
  - pure
```

Then in the files you want to make pure, put this comment in:

```js
/* eslint pure/pure: 2 */
```

Use these built-in recommended rules. These rules are useful outside of pure code but when used in conjunction with this plugin yields a powerful effect:

```yaml
rules:
  no-var: 2
  prefer-const: 2
  no-undef: 2
  no-unused-vars: 2
```

Also look into [eslint-plugin-immutable](https://github.com/jhusain/eslint-plugin-immutable) for even more enforcement (such as disallowing `this`).



## Should I use this everywhere?

Probably not.
I recommend using this in your reducers or in entity modules.



## Supported Rules

* [pure](docs/rules/pure.md)
