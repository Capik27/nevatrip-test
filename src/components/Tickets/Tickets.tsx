import { useState } from "react";
import {
	Box,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	SelectChangeEvent,
	TextField,
	Button,
	Modal,
	Typography,
} from "@mui/material";

const TIME_AB = [
	"2021-08-21 18:00:00",
	"2021-08-21 18:30:00",
	"2021-08-21 18:45:00",
	"2021-08-21 19:00:00",
	"2021-08-21 19:15:00",
	"2021-08-21 21:00:00",
];

const TIME_BA = [
	"2021-08-21 18:30:00",
	"2021-08-21 18:45:00",
	"2021-08-21 19:00:00",
	"2021-08-21 19:15:00",
	"2021-08-21 19:35:00",
	"2021-08-21 21:50:00",
	"2021-08-21 21:55:00",
];

const PATH_TIME = 50;
const PRICE = [700, 1200];
const LIMIT = 100;

////////////////////////////////////

export const Tickets = () => {
	const [path, setPath] = useState("");
	const [price, setPrice] = useState(PRICE[0]);
	const [timeAOpts, setTimeAOpts] = useState("");
	const [timeBOpts, setTimeBOpts] = useState("");
	const [tickets, setTickets] = useState(0);
	const [openModal, setOpenModal] = useState(false);

	const handleChangeInput = (event: any) => {
		setTickets(event.target.value);
	};
	const handleChangePath = (event: SelectChangeEvent) => {
		if (event.target.value === "из A в B и обратно в А") {
			setPrice(PRICE[1]);
		} else {
			setPrice(PRICE[0]);
		}
		setPath(event.target.value as string);
		setTimeAOpts("");
		setTimeBOpts("");
		setTickets(0);
	};
	const handleChangePathOptions = (event: SelectChangeEvent) => {
		setTimeAOpts(event.target.value as string);
		setTimeBOpts("");
	};
	const handleChangePathBackOptions = (event: SelectChangeEvent) => {
		setTimeBOpts(event.target.value as string);
	};
	const handleCloseModal = () => setOpenModal(false);
	const handleOpenModal = () => {
		if (tickets > 0) {
			if (path === "из A в B и обратно в А") {
				if (timeAOpts && timeBOpts) setOpenModal(true);
			} else if (path === "из A в B" || path === "из B в A") {
				if (timeAOpts) setOpenModal(true);
			}
		}
	};

	const getTimeStr = () => {
		let time = PATH_TIME;
		let result = ``;

		if (path === "из A в B и обратно в А") time = time * 2;
		let m = Math.floor(time / 60);
		if (m > 0) result = `${m} ч. `;
		m = time % 60;
		if (m > 0) result = result + `${m} минут`;

		return result;
	};

	const getConvertedDate = (date: any) => {
		const d = getZonedTime(date);
		const hours = d.getHours() > 9 ? d.getHours() : `0${d.getHours()}`;
		const mins = d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`;
		return `${hours}:${mins}`;
	};
	const timeRangeCheck = (dataA: any, dataB: any) => {
		const A = getArrivalTime(dataA);
		const B = new Date(dataB);
		return A <= B;
	};
	const getZonedTime = (data: any) => {
		const T = new Date(data);
		const T_diff = Math.abs(T.getTimezoneOffset()) - 180;
		if (T_diff !== 0) T.setMinutes(T.getMinutes() + T_diff);
		return T;
	};
	const getArrivalTime = (data: any) => {
		const A = new Date(data);
		A.setMinutes(A.getMinutes() + PATH_TIME);
		return A;
	};

	return (
		<Box style={{ display: "flex", flexDirection: "column" }}>
			<Box sx={{ minWidth: 220 }}>
				<FormControl fullWidth style={{ marginBottom: 0 }}>
					<InputLabel id="demo-simple-select-label">Маршрут</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={path}
						label="Маршрут"
						onChange={handleChangePath}
					>
						<MenuItem value={"из A в B"}>из A в B</MenuItem>
						<MenuItem value={"из B в A"}>из B в A</MenuItem>
						<MenuItem value={"из A в B и обратно в А"}>
							из A в B и обратно в А
						</MenuItem>
					</Select>
				</FormControl>
			</Box>

			{path && (
				<p style={{ margin: "10px 0 20px 0", textAlign: "center" }}>
					Cтоимость билета: {price}р.
				</p>
			)}

			{path && (
				<Box sx={{ minWidth: 220 }}>
					<FormControl fullWidth style={{ marginBottom: 15 }}>
						<InputLabel id="demo-simple-select-label">Отплытие</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={timeAOpts}
							label="Отплытие"
							onChange={handleChangePathOptions}
						>
							{path !== "из B в A"
								? TIME_AB.map((data, index) => (
										<MenuItem key={index} value={data}>
											{getConvertedDate(data)}
										</MenuItem>
								  ))
								: TIME_BA.map((data, index) => (
										<MenuItem key={index} value={data}>
											{getConvertedDate(data)}
										</MenuItem>
								  ))}
						</Select>
					</FormControl>
				</Box>
			)}

			{path === "из A в B и обратно в А" && timeAOpts && (
				<Box sx={{ minWidth: 220 }}>
					<FormControl fullWidth style={{ marginBottom: 15 }}>
						<InputLabel id="demo-simple-select-label">Обратно</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={timeBOpts}
							label="Обратно"
							onChange={handleChangePathBackOptions}
						>
							{TIME_BA.map(
								(data, index) =>
									timeRangeCheck(timeAOpts, data) && (
										<MenuItem key={index} value={data}>
											{getConvertedDate(data)}
										</MenuItem>
									)
							)}
						</Select>
					</FormControl>
				</Box>
			)}

			{path && (
				<>
					<Box sx={{ minWidth: 220 }}>
						<TextField
							style={{ marginBottom: 15 }}
							id="outlined-name"
							label="Количество билетов"
							type="number"
							value={tickets}
							onChange={handleChangeInput}
						/>
					</Box>
					<Button variant="outlined" onClick={handleOpenModal}>
						Посчитать
					</Button>
					<Modal
						open={openModal}
						onClose={handleCloseModal}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box
							sx={{
								position: "absolute" as "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: 410,
								bgcolor: "background.paper",
								border: "2px solid #000",
								boxShadow: 24,
								p: 4,
							}}
						>
							{tickets <= LIMIT ? (
								<Typography id="modal-modal-description" sx={{ mt: 2 }}>
									{`Вы выбрали ${tickets} билета по маршруту ${path} стоимостью ${
										tickets * price
									}р. Это путешествие займет у вас ${getTimeStr()} (время в пути). Теплоход отправляется в ${getConvertedDate(
										timeAOpts
									)}, а прибудет в ${getConvertedDate(
										getArrivalTime(timeAOpts)
									)}.`}
									{path === "из A в B и обратно в А" &&
										` Обратная отправка в ${getConvertedDate(
											timeBOpts
										)}, а прибудет в ${getConvertedDate(
											getArrivalTime(timeBOpts)
										)}.`}
								</Typography>
							) : (
								<Typography id="modal-modal-description" sx={{ mt: 2 }}>
									{`Выбрано ${tickets} билетов, теплоход не выдержит такое количество людей!`}
								</Typography>
							)}
						</Box>
					</Modal>
				</>
			)}
		</Box>
	);
};
