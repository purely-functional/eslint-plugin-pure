/**
 * @fileoverview Disallows impure constructs.
 * @author Thai Pangsakulyanont
 */
'use strict'

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = function (context) {
  return {
    SequenceExpression: function (node) {
      context.report(node, 'Sequence expressions are considered impure code.')
    },
    ExpressionStatement: function (node) {
      context.report(node, 'Discarding expression result is considered as impure code.')
    }
  }
}

module.exports.schema = []