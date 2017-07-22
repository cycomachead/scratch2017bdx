# Autograding for Snap!

Teaching computer science has long relied on *autograders*, programs that can execute students' programs and provide feedback and scores, all with minimal work from the instructor. However, blocks-based languages like Snap! and Scratch, have been largely left out from the ability to use autograders. Two years ago, we began to teach an online version of our course, The Beauty and Joy of Computing, via edX.org. In order to reach thousands of students, we started experimenting with an autograder for Snap!, called Lambda. Lambda consists of two components: an augmented Snap! environment that runs the autograding programs, and a web server with a database of questions.

In short, the autograder works by augmenting Snap! with scripts (written in Javascript) that allow authors to execute students' code in the background and run a series of tests to generate feedback. Tests can vary from simple to complex. The most common tests we've written are "input / output" tests, that call a reporter with some inputs and compare the results to an expected value. More complex tests can input the properties of a sprite, such as its pen color or position, or the structure of the script itself. For example, when working on a "draw square" program, you could assert that a student uses a "repeat" block with an input of 4, to guide them towards a specific solution.

It's worth mentioning that our approach, like all traditional autograders, is not perfect. It's impossible to account for all types of solutions that students may create, and you must be careful not to stifle each student's own progress. We've generally tried to develop our autograders to err on the side of checking for whether or not students have attempted a solution, rather than if they have a perfectly correct solution. For exercises, such a sorting a list or generating a Fibonacci number, it's clear when a solution is correct and this is where the autograder is easiest to use.

The second component with Lambda is a web site that contains exercises you can assign to students. This allows students to access and retrieve their submission history for a particular exercise, that way students are free to experiment. Additionally, we are planning to use the collective submission history to be able to improve the feedback we give in future exercises. Teachers who want can integrate the autograders into their own courses so that students can automatically receive grades in the normal gradebook.

Today, Lambda is definitely a beta-version of autograding, but teachers who are interested can get started at https://lambda.cs10.org. This will allow you to play with the example exercises. However, if you are interested in connecting autograders to your own course, or writing your own test cases, you can get started by writing to contact@bjc.berkeley.edu. (In the future, the site will more open.)

Finally, through this work of autograding, we've been developing some Snap! projects that will allow anyone to experiment with writing tests for Snap! blocks directly within Snap!. This project can be a starting point for writing more complicated autograders, or practicing test driven development. Anyone is free to use the project at http://bjc.link/testing-in-snap.