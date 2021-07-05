// Write your solution in this file!
const employee = {
    name: `Joshua`,
    street: `29 Marvin Place`
}; 
//this creates the employee "name" and "street address" in the object of employee i.e you call employee you are going to get name: Joshua, Street: 29 Marvin Place. always use CONST !! var sucks :(

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value});
}
//the function updateEmployeeWithKeyAndValue is using the employee object we built above calling that, a key, and a value which you can consider those too as one really. you are returning a empty object which you can thing of it like this (Object) {} <=== employee(which is above)<==key : value(which in this instance we are using those to update the Employee information).

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    const newObj = Object.assign(employee, {[key]: value});
    return newObj;
}
//This is really the same thing as the function above but all you do is make a new const (newObj) and have the Object.assign bit  equal newObj and return newObj. that destroys it and adds it to this "newObj" also you dont have the empty objective in Object.assign..

function deleteFromEmployeeByKey(employee, key){
    const cloneObj = {...employee}
    delete cloneObj[key]
    return cloneObj;
}
//Here all you are doing is creating a const cloneObj using the spread operatior which is just in my terms cloning the array to the object, than the task is asking you to delete the "key". JavaScript is super easy in this way by letting you just type delete to delete something ! so i put delete cloneObj[key] which is in my terms thinking of it like an array/object we just want "key" deleted so we type key in that way and than we return the cloneObj. pretty simple but tripped me up a bit.

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const ogEmp = employee
    delete employee[key]
    return ogEmp;
}
//Here we are doing the same thing as above but we are having ogEmp be the holder of the orginal employee, than we just delete employee key by typing that, finally we return ogEmp.