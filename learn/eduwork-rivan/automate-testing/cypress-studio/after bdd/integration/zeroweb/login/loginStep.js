/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPage from './loginPage'

Given('I open login page', () => {
    loginPage.visit()
 })

 When('I input valid user-password and I submit login', () => {
    loginPage.fillUsername('valid_user')
    loginPage.fillPassword('valid_password')
    loginPage.signIn()
 })
 
 Then('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
 })

 Given('I open login page', () => {
    loginPage.visit()
 })

 When('I input invalid user-password and I submit login', () => {
    loginPage.fillInvalidUsername('invalid_user')
    loginPage.fillInvalidPassword('invalid_password')
    loginPage.signIn()
 })
 
 Then('I should still on login page', () => {
    cy.url().should('include', 'login.html')
    cy.get('.alert-error').should('be.visible').and('have.contain', 'Login and/or password are wrong.')
 })