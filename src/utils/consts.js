
const images = [
    "https://nevatrip.ru/assets/img/e/day/avtorskaya-peshekhodnaya-ehkskursiya-po-sankt-peterburgu.jpg",
    "https://nevatrip.ru/assets/img/e/day/vechernyaya-progulka-na-teplohode-zolotoj-chas.jpg",
    "https://nevatrip.ru/assets/img/e/day/hop-on-hop-off.jpg",
    "https://nevatrip.ru//assets/img/e/night/music.jpg",
]

const sample = {
    title: "АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019",
    tagline: "НОВИНКА",
    li_items: [
        'Билет на целый день',
        'Неограниченное число катаний',
        '6 остановок у главных достопримечательностей',
        'Ближайший рейс сегодня',
    ],
    timepoints: ["10:00","11:00","12:00","13:00"],
    duration: "2 часа",
    preview: "",
    price_online: '900 ₽',
    price_offline: '1200 ₽ на причале',
}

export const ITEM_LIST = [
    {...sample, preview: images[0], id: 0  },
    {...sample, preview: images[0], id: 1, price_online: '2900 ₽', price_offline: '1200 ₽ на причале', uniqcode:'dmfklsfsdfl'},
    {...sample, preview: images[1], id: 2, timepoints: ["10:00","11:00","12:00"], title: "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020"},
    {...sample, preview: images[2], id: 3, price_offline: "", tagline: "КРУГЛЫЙ ГОД",title: "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020"},
    {...sample, preview: images[3], id: 4, tagline: "", timepoints: ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"],title: "Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020"},
]




export const tagline_styles = {
	custom1: {
		top: -1,
		left: -1,
		color: "#fff",
		backgroundColor: "#7553FF",
		fontSize: 14,
		fontFamily: "Open Sans, Helvetica, Arial, sans-serif",
		fontWeight: 600,
		fontStyle: "normal",
		height: 43,
        padding: "0 27px",
		lineHeight: "43px",
		borderTopLeftRadius: "16px",
		borderBottomRightRadius: "16px",
	},
	custom2: {
		color: "#FFF",
		backgroundColor: "#099CE8",
	},
};

export const btn_style = {
    borderRadius: "10px",
    fontWeight: 600,
    flexGrow: 1,
}


export const table = [
     {
        title: 'Вопрос 1',
        th: ['id',
        'event_id',
        'event_date',
        'adult_price',
        'adult_q-ty',
        'kid_price',
        'kid_q-ty',

        'benefit_price',
        'benefit_q-ty',
        'group_price',
        'group_q-ty',

        'barcode',
        'user_id',
        'equal_price',
        'created'],
        td: [
            [1,2,3],
            ["003","006","003"],
            ['2021-08-21 13:00:00','2021-07-29 18:00:00','2021-08-15 17:00:00'],
            [700,1000,700],
            [1,0,4],
            [450,800,450],
            [0,2,3],

            [300,300,300],
            [0,0,0],
            [1000,1000,1000],
            [0,0,0],

            [11111111,22222222,33333333],
            ['00451','00364','00015'],
            [700,1600,4150],
            ['2021-01-11 13:22:09','2021-01-12 16:62:08','2021-01-13 10:08:45'],
        ]
    },

    {
        title: 'Вопрос 2',
        th: ['id',
        'event_id',
        'event_date',

        'ticket_type',

        'barcode',
        'user_id',
        'equal_price',
        'created'],
        td: [
            [1,2,3,4,5,6,7,8,9],
            ["001","001","001","001","001","001","001","001","001"],
            ['2021-08-21 13:00:00','2021-08-21 13:00:00','2021-08-21 13:00:00',
            '2021-08-21 13:00:00','2021-08-21 13:00:00','2021-08-21 13:00:00',
            '2021-08-21 13:00:00','2021-08-21 13:00:00','2021-08-21 13:00:00'],

            ["adult","adult","kid","kid","kid",'benefit','benefit','benefit','benefit'],
            
            [11111111,22222222,33333333,44444444,55555555,66666666,77777777,88888888,99999999],
            ['00715','00715','00715','00715','00715','00715','00715','00715','00715'],
            [700,700,450,450,450,300,300,300,300],
            ['2021-01-11 13:22:09','2021-01-11 13:22:09','2021-01-11 13:22:09',
            '2021-01-11 13:22:09','2021-01-11 13:22:09','2021-01-11 13:22:09',
            '2021-01-11 13:22:09','2021-01-11 13:22:09','2021-01-11 13:22:09'],
        ]
    }
]