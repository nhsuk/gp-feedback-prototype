module.exports = function (input, req) {
  input.callback = process.env.CALLBACK || 'http://localhost:3000/2_leave_a_written_review';
  input.gpFinder = process.env.GP_FINDER || 'http://localhost:3100/leave-a-review'

  return input;
}

