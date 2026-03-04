"use client"
import InteractiveNavComponent from "./interactive";
import { useEffect, useRef, useState } from "react";
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import dccs_default from './dccs.json'
export interface dccType {
	id: string
	label: string
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


const CFDEWheel = ({button, new_window}: {button?:boolean, new_window?:boolean}) => {
	const [dccs, setDccs] = useState<Array<dccType>>([])
	const [open, setOpen] = useState(true);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const Wrapper = button ? Button: FabComponent
	useEffect(()=>{
		const fetch_dccs = async () => {
			try {
				console.log("Fetching")
				const r = await fetch("https://raw.gitahubusercontent.com/MaayanLab/cfde-wheel/refs/heads/main/src/dccs.json")
				setDccs(await r.json())
			} catch (error) {
				setDccs(dccs_default)
			}
			
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
					<InteractiveNavComponent dccs={dccs} handleClose={handleClose} new_window={new_window}/>
				</>
			</Modal>
		</div>
	)
}

export default CFDEWheel