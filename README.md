# eslint-plugin-pure

Enforce rules to make your code purely functional.

__Note:__ Your code must be using ES6 modules, because `module.exports =` is considered impure code!!!


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


Then create an `.eslintrc` in places where you want your code to be pure:

```yaml
rules:
  pure/pure: 2
```

You should also use these rules. These rules are useful outside of pure code but when used in conjunction with this plugin yields a powerful effect:

```yaml
  no-var: 2
  prefer-const: 2
  no-undef: 2
  no-unused-vars: 2
```

Also look into [eslint-plugin-immutable](https://github.com/jhusain/eslint-plugin-immutable) for even more enforcement (such as disallowing `this`).


## Supported Rules

* [pure](docs/rules/pure.md)
