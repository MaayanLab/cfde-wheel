"use client"
import { Container, Button, IconButton, Typography, Tooltip, Link, Box, useMediaQuery, useTheme, Card, CardHeader, CardContent, Stack, CardActionArea, tooltipClasses, styled, TooltipProps } from "@mui/material";
import Image from "next/image";
  const centers = (radius:number) => ([
	{
			label: "coordination",
			endpoint: "https://cfdeconnect.org/",
			rotate: '216deg',
			position: {
				// right: "50%",
				// top: "0%"
				// top: 60
				transform: `translate(${-radius/20}px, ${radius/3.2 + 10}px)`,
				":hover": {
					transform: `translate(${-radius/20}px, ${radius/3.2 - 10}px)`,
				}
			},
			text_position: {
				top: "30%",
				left: "23%"
			},
			image_position: {
				top: "60%",
				left: "47%"
			},
			tooltip: {
				name: "Integration and Coordination Center",
				hero: "Learn How to Engage with the CFDE Consortium",
				blurb: "CFDE CONNECT is the Integration and Coordination Center (ICC) of the CFDE. The center is dedicated to organizing the CFDE consortium and for developing evaluation and sustainability methods for Common Fund programs and the CFDE.",
				image: "https://cfde-drc.s3.amazonaws.com/assets/img/centers/IC.png",
				link: "https://cfdeconnect.org/",
				width: 400
			}
		},
		{
			label: "cloud",
			endpoint: "https://cfdeworkspace.org/",
			rotate: "-72deg",
			position: {
				// left: "40%",
				// top: "70%"
				transform: `translate(${radius/2.5}px, ${radius/1.77 + 10}px)`,
				":hover": {
					transform: `translate(${radius/2.1}px, ${radius/1.77 + 10}px)`,
				}
			},
			text_position: {
				top: "50%",
				left: "55%"

			},
			image_position: {
				top: "50%",
				left: "20%"
			},
			tooltip: {
				name: "Cloud Workspace Implementation Center",
				hero: "Sign Up for Your Own CFDE Cloud Workspace",
				blurb: "The CFDE Cloud Workspace provides researchers with a free cloud computing platform that serves Galaxy to analyze and integrate large NIH Common Fund datasets using a variety of workflows.",
				image: "https://cfde-drc.s3.amazonaws.com/assets/img/centers/CWIC.png",
				link: "https://cfdeworkspace.org/",
				width: 400
			}
		},
		{
			label: "knowledge",
			endpoint: "https://cfdeknowledge.org/r/kc_landing",
			position: {
				transform: `translate(${radius/3.25}px, ${radius*1.07 + 10}px)`,
				":hover": {
					transform: `translate(${radius/3.25}px, ${radius*1.07 + 30}px)`,
				}
			},
			text_position: {
				top: "75%",
				left: "10%"
			},
			image_position: {
				top: "30%",
				left: "13%"
			},
			tooltip: {
				name: "Knowledge Center",
				hero: "Discover Knowledge Extracted from CFDE Datasets",
				blurb: "The CFDE Knowledge Center (KC) translates complex Common Fund data into highly curated biological insights using tailored visualizations to help researchers easily analyze genes, phenotypes, and pathways from across NIH Common Fund programs.",
				image: "https://cfde-drc.s3.amazonaws.com/assets/img/centers/KC.svg",
				link: "https://cfdeknowledge.org/r/kc_landing",
				width: 230
			}
		},
		{
			label: "training",
			endpoint: "https://orau.org/cfde-trainingcenter/",
			rotate: "72deg",
			position: {
				transform: `translate(${-radius/5}px, ${radius*1.135 + 10}px)`,
				":hover": {
					transform: `translate(${-radius/5}px, ${radius*1.135 + 30}px)`,
				}
			},
			text_position: {
				top: "65%",
				left: "15%"
			},
			image_position: {
				top: "20%",
				left: "45%"
			},
			tooltip: {
				name: "Training Center",
				hero: "Acquire Skills in Using CFDE Datasets and Tools",
				blurb: "The CFDE Training Center is dedicated to expanding the user base of NIH Common Fund and CFDE resources by delivering educational and outreach activities such as workshops, competitions, hackathons, webinars, and podcasts.",
				image: "https://cfde-drc.s3.amazonaws.com/assets/img/centers/TC.svg",
				link: "https://orau.org/cfde-trainingcenter/",
				width: 300
			}
		},
		{
			label: "data",
			endpoint: "https://data.cfde.cloud/",
			rotate: "144deg",
			position: {
				transform: `translate(${-radius/2.4}px, ${radius/1.49 + 10}px)`,
				":hover": {
					transform: `translate(${-radius/2}px, ${radius/1.49 + 10}px)`,
					// width: radius
				}
			},
			text_position: {
				top: "25%",
				left: "25%"
			},
			image_position: {
				top: "35%",
				left: "60%"
			},
			tooltip: {
				name: "Data Resource Center",
				hero: "Explore Harmonized Common Fund Datasets",
				blurb: "The CFDE Data Resource Center (DRC) hosts the CFDE Workbench, a comprehensive platform that provides harmonized metadata, processed data, and tools for data analysis across NIH Common Fund programs.",
				image: "https://cfde-drc.s3.amazonaws.com/assets/img/centers/DRC.png",
				link: "https://cfde.cloud",
				width: 400
			}
		},
	])

const default_radius = 250
// const radius_small = 200


function useRadius() {
//   const [dimensions, setDimensions] = useState(() => ({ height: 700, width: 700}))
//   const theme = useTheme()
//   const matches = useMediaQuery(theme.breakpoints.down('sm'));
//   useEffect(() => {
//     const ctx: any = {}
//     const listener = () => {
//       if (ctx.resizeTimeout) clearTimeout(ctx.resizeTimeout);
//       ctx.resizeTimeout = setTimeout(() => {
// 		if (window.innerHeight < 700 || window.innerWidth < 700)
//         setDimensions({
//           height: window.innerHeight,
//           width: window.innerWidth,
//         })
//       }, 200);
//     };
//     window.addEventListener('resize', listener)
//     return () => window.removeEventListener('resize', listener)
//   }, [])
//   const divider = (window.innerHeight < 700 || window.innerWidth < 700) ? 4: 2
//   return Math.min(dimensions.width/divider, dimensions.height/divider) - 30
	const theme = useTheme()
	const lg = useMediaQuery(theme.breakpoints.up('lg'))
	const md = useMediaQuery(theme.breakpoints.up('md'))
	const sm = useMediaQuery(theme.breakpoints.up('sm'))
	const xs = useMediaQuery(theme.breakpoints.up('xs'))
 	if (lg) return 300
	if (md) return 300
	if (sm) return 200
	if (xs) return 150
	else return 350
}

const CenterTooltip = (center: {
	name: string,
	hero: string,
	blurb: string,
	image: string,
	link: string,
	width: number,
}) => {
	return (
		<Card sx={{minHeight: 300, display: "flex", flexDirection: "column"}}>
                  <CardHeader 
                    title={<Typography variant="h5">{center.name}</Typography>}
                    subheader={<Typography variant="body1">{center.hero}</Typography>}
                  />
                  <CardContent sx={{minHeight: 100, flexGrow: 1}}>
                    <Stack spacing={3} sx={{height: "100%", justifyContent: "space-around"}}>
                      {/* <Image src={center.image} alt={center.name} width={center.width} height={200}/>	 */}
                      <Typography variant="body2">{center.blurb}</Typography>
                      {/* <Button sx={{color: "oklch(85% .16 195)", mb: 2}} target="_blank" rel="noopener noreferrer" href={center.link} endIcon={<Icon path={mdiArrowTopRight} size={1} />}>
                        <Typography sx={{color: "oklch(85% .16 195)"}} variant="body2">Go to {center.name} Portal</Typography>
                      </Button> */}
                    </Stack>
                  </CardContent>
                </Card>
	)
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    // color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: 'none',
    // fontSize: 11,
  },
}));
const CenterWrapper = ({center_tooltip, props, children}: {center_tooltip: boolean, props: {
	name: string,
	hero: string,
	blurb: string,
	image: string,
	link: string,
	width: number,
}, children: React.ReactElement}) => {
	if (center_tooltip) {
		return <LightTooltip title={<CenterTooltip {...props}/>}
		>
			{children}
		</LightTooltip>
	} else return children
}

export default function InteractiveNavComponent({dccs, center_tooltip=false, new_window=false}: {dccs: Array<any>, new_window?: boolean, center_tooltip?:boolean}) {
	const pie_chunk = 2*Math.PI/(dccs.length)
	// const dimensions = useViewportDimensions()
	// const radius = Math.max(Math.min(dimensions.width/3, dimensions.height/3, default_radius) - 30, 100)
	const radius = useRadius()
	// const radius = 350
	const clamp_radius = {xs: 200, md: 350, xl: 350}
	const link_props: {[key: string]: string} = {}
	if (new_window)
		link_props.target="_blank" 
		link_props.rel="noopener noreferrer"
	return (
		<Container sx={{
			position: "relative",
			display: "flex",
			justifyContent: "center",
			marginTop: 10,
			height: radius*2.7,
		}}>
			{dccs.map((dcc:any, i:number)=>{
				const angle = pie_chunk * i
				const x = radius * Math.cos(angle)
				// const x = `clamp(${clamp_radius.xs * Math.cos(angle)}, ${clamp_radius.md * Math.cos(angle)}, ${clamp_radius.xl * Math.cos(angle)})`
				const y = radius * Math.sin(angle) + radius
				// const y = `clamp(${clamp_radius.xs * Math.sin(angle) + radius}, ${clamp_radius.md * Math.sin(angle) + radius}, ${clamp_radius.xl * Math.sin(angle) + radius})`
				return (
					<Tooltip title={<Typography>{dcc.description}</Typography>} key={dcc.label || ''} >
						<IconButton 
							href={dcc.homepage}
							{...link_props}
							// disableElevation
							// onClick={handleClose}
							sx={{
								background: "#fff", 
								borderRadius: 1000, 
								width: radius/3.5, 
								height:  radius/3.5,
								position: "absolute",
								transform: `translate(${x}px, ${y}px)`,
								":hover": {
									background: "#C3E1E6", 
								}
							}}
						>
							<Box 
								sx={{
									position: 'relative',
									width: radius/5,
									overflow: 'hidden',
									height: radius/5
								}}
							>
								<img src={dcc.icon || ''} alt={dcc.short_label || ''} style={{
									top: 0,
									left: 0,
									position: 'absolute',
									maxWidth: '100%',
									height: '100%',
									objectFit: 'contain',
									color: 'transparent'
								}}/>
							</Box>
						</IconButton>
					</Tooltip>
				)
			})}
			
			{centers(radius).map((center, i)=>{
				return (
					<CenterWrapper center_tooltip={center_tooltip} props={center.tooltip} key={center.label}>
						<Button 
							key={center.label} 
							href={center.endpoint}
							{...link_props}
							// onClick={handleClose}
							sx={{
								position: "absolute",
								width: radius/1.47,
								height: radius/1.47,
								// transform: `translate(${x}px, ${y}px) rotate(${center.rotate || '0deg'})`,
								...(center.position || {}),
						}}>
							<Container sx={{
								position: "relative",
								width: radius/1.65,
								height: radius/1.65,
							}}>
								<img src={`https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label}.png`} alt={center.label} loading="lazy" decoding="async"  sizes="100vw" style={{
									position: "absolute",
									height: "100%",
									width: "100%",
									maxWidth: "100%",
									inset: "0px",
									objectFit: "contain",
									color: "transparent",
									display: "block",
									transform: `rotate(${center.rotate || '0deg'})`,
								}}
									/>
								<Typography sx={{color: "#FFF", position: "absolute", textTransform: "uppercase", fontSize: radius/17.5, ...(center.text_position || {})}}>
									<b>{center.label}</b>
								</Typography>
								<Container>
									<img src={`https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/${center.label} 1.png`} alt={center.label} style={{position: "absolute", width: radius/7, height: radius/7, zIndex: 100, ...(center.image_position || {})}}/>
								</Container>
								
									
							</Container>
						</Button>
					</CenterWrapper>
				)
			})}
			<Button variant="contained"
				// onClick={handleClose}
				href="https://info.cfde.cloud" 
				{...link_props}
				sx={{
					background: "#fff", 
					borderRadius: 1000, 
					width: radius/2.3, 
					height: radius/2.3,
					position: "absolute",
					transform: `translate(${radius/250}px, ${radius/1.14 + 10}px)`,
					padding: 1,
					zIndex: 100,
					":hover": {
						background: "#C3E1E6", 
					}
				}}
			>
				<Box 
					sx={{
						position: 'relative',
						width: radius/3,
						overflow: 'hidden',
						height: radius/3,
						zIndex: 1000,
					}}
				>
					<img src={'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/CFDE_logo.png'} alt={'CFDE_Logo'} style={{
						top: 0,
						left: 0,
						position: 'absolute',
						maxWidth: '100%',
						height: '100%',
						objectFit: 'contain',
						color: 'transparent'
					}}/>
				</Box>
			</Button>
			<Container
				sx={{
					background: "#000", 
					borderRadius: "50%", 
					width: radius/1.2, 
					height: radius/1.2,
					position: "absolute",
					transform: `translate(${radius/250}px, ${radius/1.46 + 10}px)`,
					opacity: "0.5"
				}}
			></Container>
			
		</Container>
	)
}