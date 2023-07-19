import React, {useState} from "react";

const TrafficLight = () => {
	
	const [ color, setColor] = useState("red");
	const [ isPurple, setIsPurple] = useState(false);

	const CycleColors = () => {
		setInterval(() => {
			setColor((prevColor) => {
				if (prevColor === 'red') return 'yellow';
				if (prevColor === 'yellow') return 'green';
				if (prevColor === 'green') return 'red';
			  });
		  }, 1000);
	};

	const PurpleParty = () => {
		setIsPurple(isPurple => !isPurple)
	};

	return (
		<div className="mainWrapper">
			<div className="stick">
				<p className="m-0">.</p>
				<p className="m-0">.</p>
				<p className="m-0">.</p>
			</div>

			<div className="secondWrapper">
                <div onClick={() => setColor("red")} className={"light "+(isPurple && color === "red" ? "purple" : "red") + (color === "red" ? " glow-r" : "")}><i className="far fa-hand-paper"></i></div>
                <div onClick={() => setColor("yellow")} className={"light "+(isPurple && color === "yellow" ? "purple" : "yellow") + (color === "yellow" ? " glow-yw" : "")}><i className="fas fa-exclamation"></i></div>
                <div onClick={() => setColor("green")} className={"light "+(isPurple && color === "green" ? "purple" : "green") + (color === "green" ? " glow-g" : "")}><i className="fas fa-walking"></i></div>
            </div>
			
			<div className="buttons">
				<button onClick={CycleColors} className="cycle">Let's Cycle!</button>
				<button onClick={PurpleParty} className="purpleParty">Purple Party!</button>
			</div>
		</div>
	);
};

export default TrafficLight;
