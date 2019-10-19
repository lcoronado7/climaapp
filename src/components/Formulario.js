import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Formulario extends Component{
    paisRef=React.createRef();
    ciudadRef=React.createRef();
    buscarClima=(e)=>{
        e.preventDefault();

        //Leer los ref y crear el objeto
        const respuesta={
            ciudad:this.ciudadRef.current.value,
            pais:this.paisRef.current.value
        }
        
        //Enviar por props
        this.props.datosConsulta(respuesta);
        //Reset Formulario
        
    }
    render(){
        return(
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad "type="text" ref={this.ciudadRef} />
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}>
                                    <option value="" defaultValue>Elige un pais</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO" >Colombia</option>
                                    <option value="CR" >Costa Rica</option>
                                    <option value="ES" >España</option>
                                    <option value="US" >Estado Unidos</option>
                                    <option value="MX" >Mexico</option>
                                    <option value="PE" >Perú</option>
                                    <option value="VE" >Venezuela</option>

                                </select>
                                <label htmlFor="pais">Pais:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large 
                                yellow accent-4" value="Buscar..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Formulario.propTypes ={
    datosConsulta:PropTypes.func.isRequired
}

export default Formulario;