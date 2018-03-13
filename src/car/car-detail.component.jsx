import React, { Component } from 'react';

class CarDetail extends Component {
    render(){
        // Car array
        const cars = this.props.data;
        // Car Id from param
        const id = this.props.match.params.id;
        // Filter car with ID
        const car = cars.filter(car => {
            if(car.id == id) {
                return car;
            }
        });

        return (
            <div>
                <h1>{car[0].name}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={car[0].media} alt={car[0].name} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                              <li><strong>Model</strong>: {car[0].model}</li>
                           <li><strong>Make</strong>: {car[0].make}</li>
                           <li><strong>Year</strong>: {car[0].year}</li>
                           <li><strong>Price</strong>: {car[0].price}</li>
                           <li><strong>Color</strong>: {car[0].colour}</li>
                           <li><strong>Expert</strong>: {car[0].expert}</li>
                           <li><strong>Height</strong>: {car[0].Height}</li>
                             <li><strong>Width</strong>: {car[0].Width}</li>
                             <li><strong>Thickness</strong>: {car[0].Thickness}</li>
                             <li><strong>Weight</strong>: {car[0].Weight}</li>
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarDetail
