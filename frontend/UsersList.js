import  React, { Component } from  'react';
import  UsersService  from  './UsersService.js';

const  usersService  =  new  UsersService();

class  usersList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            customers: [],
            nextPageURL:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }
}
export  default  usersList;