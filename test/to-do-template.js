import template from '../src/to-do-template.js';
const test = QUnit.test;

QUnit.module('templating');


test('testing template function', (assert) => {
    //Arrange
    const task = {
        'task': 'homework',
        'completed': true
    };

    const expected = /*html*/ `
        <li>
            <ol id="tasks">
            <h1 id="header">To Do List:</h1>
        </li>
    `;
 

    //Act 
    const html = template(task);
   
    //Assert
    assert.equal(html, expected);
});