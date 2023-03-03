import { useState } from 'react'
import Grid from '@mui/material/Grid'
import NotificationBell from '../../components/common/Notificiation/NotificationBell'
import BasicMenu from '../../components/common/BasicMenu/BasicMenu'


const Database = () => {

	return (
		<Grid item xs={8}>
			<NotificationBell 
				iconColor="primary" 
				badgeContent={0} />
		</Grid>
	)
}

export default Database