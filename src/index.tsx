"use client"
import InteractiveNavComponent from "./interactive";
import { useEffect, useRef, useState } from "react";
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';

export interface dccType {
	id: string
	short_label: string
	homepage: string
	icon: string
	description?: string 
}

const FabComponent = ({children, ...props}: {children: React.ReactNode}) => (
	<Fab {...props} sx={{
		position: 'fixed',
		bottom: 50,
		right: 50,
		height: 70,
		width: 70,
		backgroundColor: '#FFF',
		padding: 0
	}}>{children}</Fab>
)


const CFDEWheel = ({button}: {button?:boolean}) => {
	const [dccs, setDccs] = useState<Array<dccType>>([])
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const Wrapper = button ? Button: FabComponent
	useEffect(()=>{
		const fetch_dccs = async () => {
			const r = await fetch("https://raw.githubusercontent.com/MaayanLab/cfde-wheel/refs/heads/main/src/dccs.json")
			setDccs(await r.json())
		}
		fetch_dccs()
	}, [])
	
	return (
		<div>
			<Wrapper onClick={handleOpen}>
				<img src="https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/cfde_unified_icon.svg" alt={'nav-but'} width={120} height={120}/>
			</Wrapper>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<>
					<InteractiveNavComponent dccs={dccs} handleClose={handleClose}/>
				</>
			</Modal>
		</div>
	)
}

export default CFDEWheel