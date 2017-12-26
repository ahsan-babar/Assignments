
Feature: Visiting the website and updating records
	In order to check test the functionality of website
	Website will be visited
	User will login
	Profile data will be updated
	A message will be sent
	User will logout

@visit  
	Scenario: Visit the PHP Travels website
	Given I visit phptravels website

@login  
	Scenario: Login to your account
	Given I visit login page
	When I provide login credentials
	Then I should be redirected to my profile
	Then I should see Hi
	
	
@editProfile
	Scenario: Edit Profile Details
	Given I visit login page
	When I provide login credentials
	Then I should be redirected to my profile
	Given I click My Profile button
	Given I edit my profile information
	Then I should see a message about successful updation

	
@contact
	Scenario: Send a message
	Given I visit login page
	When I provide login credentials
	Then I should be redirected to my profile
	Given I click CONTACT button
	Given I input details and message and submit the message
	Then I should see a successful response

@logout
	Scenario: Logout from your account
	Given I visit login page
	When I provide login credentials
	Then I should be redirected to my profile
	Given I click dropdown
	Given I click the Logout button
	Then I should be redirected to login page

	
	
	
	
 
  	
