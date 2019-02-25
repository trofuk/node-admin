import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    handleEditUser(user) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    handleChange(event) {
        // const { name, value } = event.target;
        
        // const { user } = this.props;
        console.log(this.props)
        // this.setState({
        //     user: {
        //         ...user,
        //         [name]: value
        //     }
        // });
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Department</th>
                                <th>Position</th>
                                <th>Skills</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                        {users.items.map((user, index) =>
                            <tr key={user.id}>
                                <td>{index}</td>
                                <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                                {/* <td>{user.firstName}</td> */}
                                <td>{user.lastName}</td>
                                <td>{user.department}</td>
                                <td>{user.position}</td>
                                <td>{user.skills}</td>
                                <td>
                                    <Button onClick={this.handleDeleteUser(user.id)}>DELETE</Button>
                                    <Button onClick={this.handleEditUser(user)}>EDIT</Button>

                                </td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                }
                <p>
                    <Link to="/login">Logout</Link>
                    <Link to="/register">Add User</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };