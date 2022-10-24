import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Popover from '@mui/material/Popover';
import "./style.css";
import CLOCK from "assets/clock.svg"

const BREACKPOINT = 580;
const TP_breakpoint= [1109,1031,953, 564,496,428,360]

export const AdaptiveCard = (props) => {
	let isDesctop = useMediaQuery({query: `(min-width: ${BREACKPOINT + 1}px)`});

	const is_3x = useMediaQuery({query: `(max-width: ${TP_breakpoint[0] + 1}px)`});
	const is_2x = useMediaQuery({query: `(max-width: ${TP_breakpoint[1] + 1}px)`});
	const is_1x = useMediaQuery({query: `(max-width: ${TP_breakpoint[2] + 1}px)`});

	const is_6m = useMediaQuery({query: `(max-width: ${TP_breakpoint[3] + 1}px)`});
	const is_5m = useMediaQuery({query: `(max-width: ${TP_breakpoint[4] + 1}px)`});
	const is_4m = useMediaQuery({query: `(max-width: ${TP_breakpoint[5] + 1}px)`});
	const is_3m = useMediaQuery({query: `(max-width: ${TP_breakpoint[6] + 1}px)`});
////////////////////////////////////////////////////////
	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
    	setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
    	setAnchorEl(null);
	};
	const openPopover = Boolean(anchorEl);
	const _id = openPopover ? 'simple-popover' : undefined;
////////////////////////////////////////////////////////

	const {title,tagline,tagline_style,btn_style,li_items,timepoints,
		    duration,preview,price_online,price_offline,uniqcode,
			desctop_mode
	} = props;

	if (typeof desctop_mode !== "undefined") {
		isDesctop = desctop_mode ? true : false;
	}

	const CARD_CLASS = isDesctop  ? 'card':'card card__fd-column';
	const PREVIEW_CLASS = isDesctop  ? 'card_preview card_preview__BL-radius' : 'card_preview card_preview__TR-radius' ;
	const FOOTER_CLASS = isDesctop  ? 'card_info-footer card_info-footer__FS': 'card_info-footer';
	const TIMEPOINT_CLASS = isDesctop  ? 'card_timepoint card_timepoint__desctop': 'card_timepoint';
	const TAGLINE_CLASS = isDesctop ? "card_tagline card_tagline__desctop" : "card_tagline";
	const TITLE_CLASS = isDesctop ? "card_title card_title__desctop" : "card_title";
	const DURATION_CLASS = isDesctop ? "card_duration card_duration__desctop" : "card_duration";
	const LISTITEM_CLASS = isDesctop ? "card_list-item card_list-item__desctop" : "card_list-item";
	const LIST_CLASS = isDesctop ? "card_list card_list__PB-0" : "card_list";
	const PRICE_CLASS = isDesctop ? 'card_price card_price__desctop' : 'card_price';
	const PRICEOFF_CLASS = isDesctop ? 'card_price-off__desctop' : 'card_price-off';
	const BTN_CLASS = isDesctop ? "card_btn card_btn__desctop" : 'card_btn';
	const INFOWRAPPER_CLASS = isDesctop ? 'card_info-wrapper card_info-wrapper__desctop' : 'card_info-wrapper';

	let tp_sample = [];
	let tp_hidden = [];
	let tp_elem_pos;
	if(isDesctop){
		tp_elem_pos = 3;
		if(is_3x) tp_elem_pos = 2;
		if(is_2x) tp_elem_pos = 1;
		if(is_1x) tp_elem_pos = 0;
	} else { 
		tp_elem_pos = 6;
		if (is_6m)tp_elem_pos = 5;
		if (is_5m)tp_elem_pos = 4;
		if (is_4m)tp_elem_pos = 3;
		if (is_3m)tp_elem_pos = 2;
	};
	
	let tp_more = false;
	if (timepoints.length > tp_elem_pos + 1) {
		tp_more = true;
		for(let i = 0; i < tp_elem_pos; i++){
			tp_sample.push(timepoints[i])
		}
		
		tp_sample[tp_elem_pos] = `ещё...`

		if(tp_elem_pos + 1 === timepoints.length){
			tp_hidden.push(timepoints[tp_elem_pos + 1])
		} else{
			for(let i = tp_elem_pos ; i < timepoints.length; i++){
				tp_hidden.push(timepoints[i])
			}
		}
	} else {
		tp_sample = timepoints.map(point => point)
	}


	const popover_elem = (
		<Popover
        id={_id}
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
			vertical: 'top',
			horizontal: 'right',
		  }}
		  transformOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		  }}>
			<div style={{paddingTop: "5px",paddingRight: "5px", maxWidth: isDesctop ? 315 : 277}}>
				{tp_hidden.map((point,index)=>
				<a key={index} className={TIMEPOINT_CLASS}>{point}</a>)}
			</div>
        	
      	</Popover>
	)

	const tpoints_sample = (
		<span className={"card_timepoint-wrapper"}>
			{tp_more && popover_elem}
			{tp_sample.map((point,index)=>
			point === 'ещё...' ? 
			<a key={index} className={TIMEPOINT_CLASS} aria-describedby={_id} onClick={handleClick}>{point}</a> :
			<a key={index} className={TIMEPOINT_CLASS} >{point}</a>)}
		</span>);

	const infoList = li_items.map( (item,index) => 
		(<li key={index} className={LISTITEM_CLASS} style={{whiteSpace: index === li_items.length-1 && isDesctop && "nowrap"}}>
			<span><span>{item}</span>{index === li_items.length-1 && isDesctop && tpoints_sample}</span>
		</li>));

	if (!isDesctop) {
		infoList[infoList.length] = (<li key={infoList.length} className="card_list-item__mobile-time">{tpoints_sample}</li>);
	}

///////////////////////////////////////////
	
	const tagline_elem = (
		<div className={TAGLINE_CLASS} style={tagline_style || {}}>
			<span>{tagline}</span>
		</div>)

	const duration_elem = (
		<div className={DURATION_CLASS}>
			<img src={CLOCK} alt="clock icon"/>
			<span>{duration}</span>
		</div>)
	
	return (
		<>
			<div className={CARD_CLASS} >
				{tagline && tagline_elem}
				<div className={PREVIEW_CLASS}>
					<img className="card_preview-img" src={preview} alt="preview"/>
				</div>
				<div className={INFOWRAPPER_CLASS}>

					{!isDesctop && duration_elem}

					<a className="card-link">
						<h3 className={TITLE_CLASS}>{title}</h3>
					</a>

					{isDesctop && duration_elem}

					<ul className={LIST_CLASS}>
						{infoList}
					</ul>

					<div className={FOOTER_CLASS}>
						<div className={PRICE_CLASS}>
							<span>{price_online}</span>
							{price_offline && <small className={PRICEOFF_CLASS}>{price_offline}</small>}
							{uniqcode && <small className={PRICEOFF_CLASS}>{uniqcode}</small>}
						</div>
						<button className={BTN_CLASS} style={btn_style || {}}>Подробнее</button>
					</div>
				</div>
			</div>
		</>
	);
};
