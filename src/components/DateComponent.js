import React from "react";

const CurrentDate = (props) => {
    return (
        <div>
            {
                <p>The current date is :{props.date} </p>
            }
        </div>
    );
};

class Calender extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <h3>What date it is?</h3>
                <CurrentDate date={Date()}/>
            </div>
        );
    }
}

export default Calender;