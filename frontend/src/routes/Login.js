import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios'; 

import './Login.css';

class Login extends React.Component {
    
    constructor(){
        
        super();
        
        this.state = {
            
            username : '',
            userpass : ''
        }
        
        this.handleUserName = this.handleUserName.bind(this);
        this.handleUserPass = this.handleUserPass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleUserName(e){
        
         this.setState({ username : e.target.value });
    }
    
    handleUserPass(e){
        
        this.setState({ userpass : e.target.value });
    }
    
    handleSubmit(){
        axios.post('http://localhost:4000/login', { 
            username : this.state.username , 
            userpass : this.state.userpass 
        }).then ((response)=>{
            
            let { success, error } = response.data;
            let { history } = this.props;
            
            if ( success === 1 ){
                
                history.push('/company');
                
            } else if ( success === 2 ){
                
                history.push('/register');
                
            } else if ( error === -1 ){
                
                return;
            }
            
        });
    }

    render(){
        return (
        <div className="login-bg">
            <div className="login">
              <Form>
                <Form.Field>
                   <label>User Name</label>
                   <input placeholder='User Name' value={this.state.username} onChange={this.handleUserName} />
                </Form.Field>
                    <Form.Field>
                    <label>User Password</label>
                    <input placeholder='User Password' value={this.state.userpass} onChange={this.handleUserPass} />
                    </Form.Field>
                 <Button onClick={this.handleSubmit}>Submit</Button>
               </Form>
            </div>
        </div>
        )
    }
}

export default Login;