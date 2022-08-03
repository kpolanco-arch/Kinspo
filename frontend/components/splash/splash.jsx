import React from "react";

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
                <div>
                    <h1 className='splash-body'>Get your next</h1>
                    <h2 className='splash'>home decor idea</h2>
                </div>
                <div className="splash-wrap-grid">
                    {/* food */}
                    {/* <div className="splash-container-grid">
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food1.jpeg" alt="food1" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food3.jpeg" alt="food3" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food2.jpeg" alt="food2" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food5.jpeg" alt="food5" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food7green.jpeg" alt="food7" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food4.jpeg" alt="food4" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food6reddessert.jpeg" alt="food6" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food8cookies.jpeg" alt="food8" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food8paloma.jpeg" alt="food8" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food9corn.jpeg" alt="food9" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food9yellow.jpeg" alt="food9" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food4.jpeg" alt="food4" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/fooddrinks.jpeg" alt="" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/food8cookies.jpeg" alt="food8" />
                        </div>
                    </div> */}
                    {/* travel */}
                    {/* <div className="splash-container-grid">
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/home6plant.jpeg" alt="home6" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/home3library.jpeg" alt="home3" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/home1frames.jpeg" alt="home1" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/arch2exterior.jpeg" alt="pavilion" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/home2bath.jpeg" alt="home2" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/arch3green.jpeg" alt="planting" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/home4kitchen.jpeg" alt="home4" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/greenplant.jpeg" alt="plant" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/home5decor.jpeg" alt="home5" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/green.jpeg" alt="green" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/home7dessert.jpeg" alt="home7" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travel.jpeg" alt="travel" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/home8living.jpeg" alt="home8" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/homebath.jpeg" alt="bath" />
                        </div>
                    </div> */}
                    {/* lifestyle */}
                    <div className="splash-container-grid">
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travelsantorini.jpeg" alt="travel" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travel10.jpeg" alt="travel" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travelswitz.jpeg" alt="travel" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travel11turkey.jpeg" alt="turkey" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travelmountain.jpeg" alt="mntn" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travel12camel.jpeg" alt="camel" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travelhike.jpeg" alt="hike" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travel9boat.jpeg" alt="boat" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/traveleater.jpeg" alt="travel" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travel13moher.jpeg" alt="moher" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travelbeach.jpeg" alt="beach" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travel14tuscany.jpeg" alt="tuscany" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travel.jpeg" alt="travel" />
                            <img className="splash-image" src="https://kinspo-dev.s3.amazonaws.com/travel8france.jpeg" alt="france" />
                        </div>
                    </div>


                    {/* <div className="splash-container-grid">
                        <div className="column">
                            <img className="splash-image" src="#" alt="" />
                            <img className="splash-image" src="#" alt="" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="#" alt="" />
                            <img className="splash-image" src="#" alt="" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="#" alt="" />
                            <img className="splash-image" src="#" alt="" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="#" alt="" />
                            <img className="splash-image" src="#" alt="" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="#" alt="" />
                            <img className="splash-image" src="#" alt="" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="#" alt="" />
                            <img className="splash-image" src="#" alt="" />
                        </div>
                        <div className="column">
                            <img className="splash-image" src="#" alt="" />
                            <img className="splash-image" src="#" alt="" />
                        </div>
                    </div> */}
                    <div className="white-gradient"></div>
                </div>
                
            </div>
        )
    }
}

export default Splash ;