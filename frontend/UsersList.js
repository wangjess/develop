import  React, { Component } from  'react';

import  UsersService  from  './UsersService';
const  usersService  =  new  UsersService();

class  UsersList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            users: [],
            nextPageURL:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }

    componentDidMount() {
        var  self  =  this;
        usersService.getUsers().then(function (result) {
            self.setState({ users:  result.data, nextPageURL:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        var  self  =  this;
        usersServicedeleteCustomer({pk :  pk}).then(()=>{
            var  newArr  =  self.state.users.filter(function(obj) {
                return  obj.pk  !==  pk;
            });
            self.setState({users:  newArr})
        });
    }

    nextPage(){
        var  self  =  this;
        usersServicegetUsersByURL(this.state.nextPageURL).then((result) => {
            self.setState({ users:  result.data, nextPageURL:  result.nextlink})
        });
    }

    render() {
        return (
        <div  className="users--list">
            <table  className="table">
                <thead  key="thead">
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Emaile</th>
                    <th>Password</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.users.map( c  =>
                    <tr  key={c.pk}>
                        <td>{c.pk}  </td>
                        <td>{c.username}</td>
                        <td>{c.email}</td>
                        <td>{c.password}</td>
                        <td>
                        <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                        <a  href={"/user/" + c.pk}> Update</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.nextPage  }>Next</button>
        </div>
        );
    }
}
export  default  UsersList;