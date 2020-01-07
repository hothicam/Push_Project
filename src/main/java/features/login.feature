Feature: Login banking page

  Scenario: Login banking website
    Given Open website http://www.way2automation.com/angularjs-protractor/banking/#/login

  Scenario Outline: Login banking website
    Given Open website <website>

   Examples:
      | website                                                            |
      | http://www.way2automation.com/angularjs-protractor/banking/#/login |