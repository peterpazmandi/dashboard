import React from 'react'
import Button from '@mui/material/Button'
import { SxProps, Theme } from '@mui/system';

const CommonButton = ({children, color, disabled, size, variant, sx}: any) => {

  return (
    <Button
        color={color}
        disabled={disabled}
        size={size}
        variant={variant}
        sx={sx} >
        {children}
    </Button>
  )
}

export default CommonButton