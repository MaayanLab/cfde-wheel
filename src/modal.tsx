"use client"
import { Container, Button, IconButton, Typography, Tooltip, Link, Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import InteractiveNavComponent from "./interactive";

export default function InteractiveModal({dccs, handleClose, new_window=false}: {dccs: Array<any>, handleClose: any, new_window?: boolean}) {
	const divRef = useRef<any>(null); // Ref for HTML Element
	useEffect(()=>{
		if (divRef.current) {
			divRef.current.addEventListener("click", handleClose)
		}
	}, [divRef.current])
	const link_props: {[key: string]: string} = {}
	if (new_window)
		link_props.target="_blank" 
		link_props.rel="noopener noreferrer"
	return (
		<Container sx={{position: "relative", height: "100vh"}} ref={divRef}>
			<Container sx={{position: "absolute", margin: 0, top: "50%", left: "50%",  transform: "translate(-50%, -50%)"}}>
				<InteractiveNavComponent dccs={dccs} new_window={new_window}/>
			</Container>
		</Container>
	)
}