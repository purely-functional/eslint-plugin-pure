/**
 * @fileoverview Disallows impure constructs.
 * @author Thai Pangsakulyanont
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/pure')
var RuleTester = require('eslint').RuleTester

// ------------------------------------------------------------------------------
  // Tests
  // ------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('pure', rule, {
  valid: [
    {
      parser: 'babel-eslint',
      code: 'const value = f()'
    },
    {
      parser: 'babel-eslint',
      code: 'const value = a'
    },
    {
      parser: 'babel-eslint',
      code: `
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
      `
    }
  ],

  invalid: [
    {
      parser: 'babel-eslint',
      code: 'f()',
      errors: [
        { message: 'Discarding expression result is considered as impure code.' }
      ]
    },
    {
      parser: 'babel-eslint',
      code: 'const value = (a, b)',
      errors: [
        { message: 'Sequence expressions are considered impure code.' }
      ]
    },
    {
      parser: 'babel-eslint',
      code: 'const value = window.MyValue = 99',
      errors: [
        { message: 'Assignments are considered impure.' }
      ]
    }
  ]
})
