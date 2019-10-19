import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Clima extends Component {
    mostrarResultado= ()=>{
        const {name,weather,main}=this.props.resultado
        if(!name || !weather || !main) return null

        const kelvin=273.15; //Para convertir de grados kelvin a centigrados
        const urlIcono=`http://openweathermap.org/img/w/${weather[0].icon}.png`;
        const alt=`Clima de ${name}`;
        return (
            <div className="row">
               <div className="resultado col s12 m8 16 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado Clima de: {name}</h2>
                            <p className="temperatura">
                                Actual:{(main.temp - kelvin).toFixed(2)} &deg;C
                                <img src={urlIcono}  alt={alt} />
                                <p>Max. {(main.temp_max -kelvin).toFixed(2)} &deg;C </p>
                                <p>Min. {(main.temp_min -kelvin).toFixed(2)} &deg;C </p>
                            </p>
                        </span>
                    </div>
               </div>
            </div>
        )
    }
    render() {
        const resultado=this.props.resultado;
        console.log(resultado)
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        )
    }
}
Clima.propTypes={
    resultado:PropTypes.object.isRequired
}
export default Clima
