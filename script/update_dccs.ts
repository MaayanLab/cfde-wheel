import fs from 'fs'
const dcc_list: {[key:string]:any} = {
	"Kids First": {
	  id: '65af85ae-82d5-5b81-bc66-6bddaa6420ce',
	  short_label: 'Kids First',
	  homepage: 'https://cfde.cloud/info/dccs/Kids First',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/Kids First.png',
	  description: 'Data, tools, and resources empowering pediatric research'
	},
	A2CPS: {
	  id: 'e332dadd-8084-5fbc-be41-29d75775aab3',
	  short_label: 'A2CPS',
	  homepage: 'https://cfde.cloud/info/dccs/A2CPS',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/A2CPS.png',
	  description: 'Understanding the complex biological processes underlying chronic pain'
	},
	HuBMAP: {
	  id: '803ad44d-e7a2-550a-95c6-57855bf06be8',
	  short_label: 'HuBMAP',
	  homepage: 'https://cfde.cloud/info/dccs/HuBMAP',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/HuBMAP.png',
	  description: 'Cellular spatial atlas of the human body'
	},
	"4DN": {
	  id: 'd6bb00c3-7224-5001-b9c5-9838622fba40',
	  short_label: '4DN',
	  homepage: 'https://cfde.cloud/info/dccs/4DN',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/4DN.png',
	  description: 'Nuclear organization in space and time'
	},
	LINCS: {
	  id: 'f3f490cf-fd69-579c-8ea3-472c7cf3fb59',
	  short_label: 'LINCS',
	  homepage: 'https://cfde.cloud/info/dccs/LINCS',
	  icon: 'https://cfde-drc.s3.amazonaws.com/assets/img/LINCS-logo.png',
	  description: 'Omics signatures for drug & target discovery'
	},
	IDG: {
	  id: 'a1289ebb-0306-59a1-b0fc-e4d03a4790d7',
	  short_label: 'IDG',
	  homepage: 'https://cfde.cloud/info/dccs/IDG',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/IDG.png',
	  description: 'Illuminating GPCRs, kinases, ion channels, & other drug targets'
	},
	NPH: {
	  id: undefined,
	  short_label: 'NPH',
	  homepage: 'https://commonfund.nih.gov/nutritionforprecisionhealth',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/nph.png',
	  description: 'Predictive algorithms to advance nutrition research'
	},
	GlyGen: {
	  id: 'e31052b0-ac50-5ede-9828-698ff3610427',
	  short_label: 'GlyGen',
	  homepage: 'https://cfde.cloud/info/dccs/GlyGen',
	  icon: 'https://cfde-drc.s3.amazonaws.com/assets/img/glygen.png',
	  description: 'Computational and informatics resources for glycoscience'
	},
	Bridge2AI: {
	  id: '75b3be39-a021-5d80-b7e2-2a7938a1e11a',
	  short_label: 'Bridge2AI',
	  homepage: 'https://cfde.cloud/info/dccs/Bridge2AI',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/Bridge2AI.png',
	  description: 'Biomedical AI ↔ people, data & ethics'
	},
	MoTrPAC: {
	  id: 'a9aeab22-4fbc-5329-aef6-21110f463c23',
	  short_label: 'MoTrPAC',
	  homepage: 'https://cfde.cloud/info/dccs/MoTrPAC',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/MoTrPAC.png',
	  description: 'The molecular map of exercise'
	},
	Metabolomics: {
	  id: '089d8d63-3364-526f-9706-80d62d0ec88c',
	  short_label: 'Metabolomics',
	  homepage: 'https://cfde.cloud/info/dccs/Metabolomics',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/Metabolomics.png',
	  description: 'Metabolomics'
	},
	SCGE: {
	  id: undefined,
	  short_label: 'SCGE',
	  homepage: 'https://commonfund.nih.gov/editing',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/scge.png',
	  description: 'Reducing the burden of diseases caused by genetic changes'
	},
	SPARC: {
	  id: '2399794e-74c6-5735-a039-0782cdeeb1e2',
	  short_label: 'SPARC',
	  homepage: 'https://cfde.cloud/info/dccs/SPARC',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/SPARC.svg',
	  description: 'Bridging the body and brain'
	},
	SMaHT: {
	  id: undefined,
	  short_label: 'SMaHT',
	  homepage: 'https://cfde.cloud/info/dcc/SMaHT',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/smath.png',
	  description: "Mapping somatic mutations' health implications"
	},
	HMP: {
	  id: 'cbfd44b8-684d-56b9-bfd4-45c0e259f896',
	  short_label: 'HMP',
	  homepage: 'https://cfde.cloud/info/dccs/HMP',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/HMP.png',
	  description: 'Human microbiome in health and disease'
	},
	GTEx: {
	  id: 'b3028db2-209c-5862-8f4d-33c5b312332e',
	  short_label: 'GTEx',
	  homepage: 'https://cfde.cloud/info/dccs/GTEx',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/GTEx.png',
	  description: 'Gene expression and regulation across human tissues'
	},
	SenNet: {
	  id: 'dd66e8a5-0e05-5a43-a0ca-18cc3698bb36',
	  short_label: 'SenNet',
	  homepage: 'https://cfde.cloud/info/dccs/SenNet',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/SenNet.png',
	  description: 'Mapping senescent cells'
	},
	ExRNA: {
	  id: 'f65babf7-2875-5725-9635-210d654533f1',
	  short_label: 'ExRNA',
	  homepage: 'https://cfde.cloud/info/dccs/ExRNA',
	  icon: 'https://cfde-drc.s3.us-east-2.amazonaws.com/assets/img/exRNA.png',
	  description: 'Extracellular RNA communication'
	}
}

const update_dccs = async () => {
	const r = await fetch("https://cfde-drc.s3.amazonaws.com/database/files/current_dccs.tsv")
	const dccs = await r.text()
	const [header, ...rows] = dccs.split("\n")
	const columns = header.split("\t")
	const id_index = columns.indexOf("id")
	const label_index = columns.indexOf("short_label")
	// const homepage_index = columns.indexOf("homepage")
	const icon_index = columns.indexOf("icon")
	const active_index = columns.indexOf("active")
	const hidden_index = columns.indexOf("hidden")
	const description_index = columns.indexOf("short_description")
	const all_dccs = []
	for (const row of rows) {
		const dccs = row.split("\t")
		const label:string = dccs[label_index]
		if (label && dccs[active_index] !== 'False' && dccs[hidden_index] !== 'True') {
			const info = {
				id: dccs[id_index],
				label,
				icon: dccs[icon_index],
				description: (dcc_list[label] || {}).description || dccs[description_index],
				homepage: `https://cfde.cloud/info/dcc/${label}`,
			}
			all_dccs.push(info)
		}
	}
	fs.writeFile('./src/dccs.json', JSON.stringify(all_dccs), 'utf-8', function(err: any) {
    	if (err) throw err;
    	console.log('complete');
    })
	
}

update_dccs()