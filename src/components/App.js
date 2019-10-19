import React, { Component } from 'react'
import Header from './Header'
import Formulario from './Formulario';
import Error from './Error';
import Clima from './Clima';


export class App extends Component{

  state={
    error:false,
    consulta:{},
    resultado:{}
  }
  consultarAPI=()=>{
    const {ciudad,pais} = this.state.consulta
    
    if(!ciudad && !pais) return null
    
    const appId='3f7824ca52ed0294e9428e6cd2b62cad'
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    console.log(url)
    //Queary con fetch api
    fetch(url)
      .then( respuesta =>{
        return respuesta.json()
      })
      .then(datos=>{
        this.setState({
          resultado:datos
        })
      })
      .catch(error =>{
        console.log("ERROR "+error)
      })
    

  }
  componentDidUpdate(prevProps,prevState){
    if(this.state.consulta!==prevState.consulta){
      this.consultarAPI();
    }
    

  }
  datosConsulta = (respuesta)=>{

      if(respuesta.ciudad==="" || respuesta.pais===""){
        this.setState({
          error:true
        })
      }else{
        this.setState({
          consulta:respuesta,
          error:false

        })
      }
  }

  render(){
    const error= this.state.error;
    let resultado;

    if(error){
      resultado =<Error mensaje="CAMPOS REQUERIDOS VACIOS"/>
    }else{
      resultado=<Clima resultado={this.state.resultado} />;
    }
    return(
      <div className="App">
        <Header
          titulo='CLIMA HELPER'
        />

        <Formulario
          datosConsulta={this.datosConsulta}
        />
        
        {resultado}
        
      </div>
      
    )
  }
}

export default App;
