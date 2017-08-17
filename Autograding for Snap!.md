# Autograding for Snap!
Teaching computer science has long relied on *autograders*, programs that can execute students' programs and provide feedback and scores, all with minimal work from the instructor. However, blocks-based languages like Snap! and Scratch, have been largely left out from the ability to use autograders.

Two years ago, we endeavored to bring our course, The Beauty and Joy of Computing, to the online world via edx.org. To scale for thousands of students, we experimented with Lambda, an autograder for Snap!. Lambda consists of two components: an augmented Snap! environment that runs the autograding programs and a web server with a database of questions.

## How an Autograder Works

The autograder augments Snap! with scripts (written in Javascript) that allow authors to execute students' code in the background and run a series of tests to generate feedback. Tests can vary from simple to complex. The most common tests are "input / output" tests that call a reporter with some inputs and compare the results to an expected value. More complex tests can input the properties of a sprite, such as its pen color or position, or the structure of the script itself. For example, when working on a "draw square" program, we can assert that a student uses a "repeat" block with an input of "4", to guide them towards a specific solution.

Like for all traditional autograders, it is worth mentioning that our approach is not perfect. It is impossible to account for all solution types that students may create, and we must be careful not to stifle each student's own progress. We have tried to develop our autograders to err on the side of checking for whether students have attempted a solution, rather than if they have a perfectly correct solution. For exercises such as sorting a list or generating a Fibonacci number, it is clear when a solution is correct, and this is where the autograder is perfectly positioned.

The second component of Lambda is a website that contains exercises a teacher can assign to students. The website allows students to access and retrieve their submission history for a particular exercise, enabling students to freely experiment. We plan to use the collective submission history to improve feedback given in future exercises. Teachers can choose to integrate the autograders into their own courses so that students can automatically receive grades in their school's normal gradebook.

## Getting Started Writing Autograders
Today, Lambda is a beta-version of autograding, but teachers who are interested can get started at https://lambda.cs10.org where you can play with example exercises. However, if you are interested in connecting autograders to your own course or writing your own test cases, you can get started by writing to contact@bjc.berkeley.edu. (In the future, the site will more open.)

Finally, through this autograding work, we have been developing some Snap! projects that will allow anyone to experiment with writing tests for Snap! blocks directly within Snap!. This project can be a starting point for writing more complicated autograders or practicing test driven development. Anyone is free to use the project at http://bjc.link/testing-in-snap.

---

## Q&A About Using Autograders

### Q: Should autograders replace manual review?

Probably not, especially with new programmers. Most often, you can use them together to get fast (but generic) feedback along with more personalized feedback that might take a little longer to return to students.

### Q: Are there any projects where the autograder doesn't work well?

The more free-form the assignment, the more challenging developing an autograder will be. In particular, assessing creativity is incredibly challenging. Some times, it's better to leave out the autograder because fast but inaccurate feedback can be even more confusing to students.
