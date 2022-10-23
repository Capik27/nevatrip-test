export const Table = ({ title, th, td }: any) => {
	const col_length = td.length;
	const tr_list = [];

	for (let i = 0; i < td[0].length; i++) {
		let arr = [];
		for (let j = 0; j < col_length; j++) {
			arr.push(td[j][i]);
		}
		tr_list.push(arr);
	}

	return (
		<table>
			<caption>{title}</caption>
			<thead>
				<tr>
					{th.map((el: any, ind: any) => (
						<th key={ind} scope="col" className={`t_col_${ind + 1}`}>
							{el}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{tr_list.map((tr: any, ind: any) => (
					<tr key={ind}>
						{tr.map((el: any, ind: any) => (
							<td key={ind} scope="row">
								{el}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
