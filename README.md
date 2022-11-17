# Lab 8 - Unit & E2E Testing
\
Done By: Mandeep Chera

1.) I would put my automated tests within a GitHub action when code is pushed. I would do this because it is crucial to know if the code being pushed to the repository actually works as intended. In the case it does not, the test will let you know of the errors and it will not push the error infested code to the repository thus protecting it from problems.\
\
2.) No, a unit test would be more appropriate for this situation. End to end checks the entirety of the workflow through the simulation of user actions.\
\
3.) I would use end to end testing instead for this case because you can simulate the message feature by sending one and receiving one back. This would be difficult with unit testing as you need to inspect more than just an output.\
\
4.) I would use a unit test for this because you can simply check if the output, which is the message in this case, has the correct length or not. A simple check like this can easily be done with a unit test.
