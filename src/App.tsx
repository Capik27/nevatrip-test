import "./App.css";
import { AdaptiveCard } from "./components/AdaptiveCard/AdaptiveCard";

import { btn_style, ITEM_LIST, tagline_styles, table } from "utils/consts";
import { Tickets } from "components/Tickets/Tickets";
import { Table } from "components/Table/Table";

function App() {
	return (
		<>
			<div className="container_mobile">
				<h1 style={{ textAlign: "center" }}>375px max</h1>
				<AdaptiveCard {...ITEM_LIST[0]} desctop_mode={false} />
				<AdaptiveCard
					{...ITEM_LIST[1]}
					desctop_mode={false}
					tagline_style={tagline_styles.custom1}
					btn_style={btn_style}
				/>
			</div>
			<div className="container_default">
				<h1 style={{ textAlign: "center", alignSelf: "center" }}>1440px max</h1>

				<AdaptiveCard
					{...ITEM_LIST[2]}
					tagline_style={tagline_styles.custom2}
				/>
				<AdaptiveCard {...ITEM_LIST[3]} />
				<AdaptiveCard {...ITEM_LIST[4]} />
			</div>
			<div className="container_table">
				<h1 style={{ textAlign: "center", alignSelf: "center" }}>
					Билеты на событие
				</h1>
				<Table {...table[0]} />
				<Table {...table[1]} />
			</div>

			<h1 style={{ textAlign: "center", alignSelf: "center" }}>
				Время из A в B
			</h1>
			<div className="container_js">
				<Tickets />
			</div>
		</>
	);
}

export default App;
