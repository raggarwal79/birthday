import React, { Component } from 'react';
class Users extends Component {
    state = { 
        users: [{ name: "c", age: "02/09/1895" }, { name: "b", age: "02/09/1892" }]
    }

    handleOptionChange = (changeEvent) => {
        var list = [...this.state.users];
        if (changeEvent.target.value == "sort_by_name") {
            list.sort((a, b) => (a.name > b.name) ? 1 : -1);
            this.setState({ users: list });
        }
        if (changeEvent.target.value == "sort_by_age") {
            list.sort((a, b) => (a.age > b.age) ? 1 : -1);
            this.setState({ users: list });
        }
        console.log(list);
    };
     
    render() { 
        return (<div>
            <h1>Birthday Records</h1>
            <input type="radio" value="sort_by_name" onChange={this.handleOptionChange} name="sorting"/> Sort by name&nbsp;&nbsp;
            <input type="radio" value="sort_by_age" onChange={this.handleOptionChange} name="sorting"/> Sort by Age
            <div>
                <div>
                    <div>Name</div>
                    <div>Date Of Birth</div>
                </div>
                {this.state.users.map(({ name, age }) => (
                    <div>
                        <div>{name}</div>
                        <div>{age}</div>
                    </div>
                ))}
            </div>
        </div> );
    }
}
 
export default Users;