# auto-js-lola-tech

Before running tests for the first time, run "nvm use" in the terminal

How to run tests:

yarn test:wdio - this is the basic command which runs all the feature files
tag=@test - add this argument to the command to specify which tag should be run
--target_browser=firefoxResponsive - add this argument to the command to specify on which browser the test should be run

Example:

# this command will run any test which has the @test tag, on Chrome:

tag=@test yarn test:wdio --target_browser=chrome
