import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Create() {
	return (
		<div>
			<Typography
				variant='h6'
				component='h2'
				color='textSecondary'
				align='center'>
				Create a new Note
			</Typography>
			{/* <Typography color='error' noWrap>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Quibusdam saepe eius illo eum nisi facere ipsam, rerum quos
				earum consequatur.
			</Typography> */}
		</div>
	)
}
