import React, {Component} from 'react'
import './style.css'
import api from '../../services/api'
import UserInput from '../../components/UserInput'

export default class UsersPainel extends Component{ 
    
    constructor(props){
        super(props);
        this.state =  {
            nome: 'brendo',
            email: '123',
            senha: '123',
            docs: []
        };
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setSenha = this.setSenha.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.getUsers = this.getUsers.bind(this);
    }

    async getUsers(){
        const response = await api.get('/users');
        let { docs } = response.data
        this.setState({docs});
    }

    componentDidMount(){
        this.getUsers();
    }
    
    setNome  = (event) => this.setState({nome : event.target.value});
    setSenha = (event) => this.setState({senha : event.target.value});
    setEmail = (event) => this.setState({email : event.target.value});

    enviaForm  = (event) => {
        api.post('/users',{
            nome: this.state.nome,
            senha: this.state.senha,
            email: this.state.email
        })
        .then( response => this.getUsers())
        .catch( err => console.log(err))
        event.preventDefault();
    }

    render(){
        return(
            <div className="UserPanel">
                <form className="userForm" onSubmit={this.enviaForm} method="post">
                    <h4 className="formHeader">
                        User Panel
                    </h4>
                    <UserInput 
                    id="nome"
                    type="text"
                    name="nome" 
                    label="nome"
                    value={this.state.nome} 
                    onChange={this.setNome}
                    />
                    <UserInput 
                    id="Email"
                    type="email"
                    name="Email" 
                    label="Email"
                    value={this.state.Email} 
                    onChange={this.setEmail}
                    />
                    <UserInput 
                    id="Senha"
                    type="password"
                    name="Senha" 
                    label="Senha"
                    value={this.state.senha} 
                    onChange={this.setSenha}
                    />
                    <br/>
                    <button type="submit" className="formButton"> Save </button>
                </form>

                <div className="UsersIndex">
                    <h3 className="IndexHeader">
                        Users index
                    </h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Senha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.docs.map( user =>(
                                <tr key={user._id}>
                                    <td>
                                        {user.nome}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.senha}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}