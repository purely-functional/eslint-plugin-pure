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
      context.report(node, 'Sequence expressions are considered impure.')
    },
    AssignmentExpression: function (node) {
      context.report(node, 'Assignments are considered impure.')
    },
    ExpressionStatement: function (node) {
      context.report(node, 'Discarding expression result is considered impure.')
    },
    UpdateExpression: function (node) {
      context.report(node, 'Update expressions are considered impure.')
    }
  }
}

module.exports.schema = []
