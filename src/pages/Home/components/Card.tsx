import React from "react"
import CardStyled from "./CardStyled"
import { Typography } from "@mui/material"

interface CardProps {
    title: string,
    value: number
}

const Card: React.FC<CardProps> = ({ title, value }) => {
    return (

        <CardStyled elevation={3}>
            <Typography variant="h5" color="white" marginBottom={5}>{title}</Typography>
            <Typography variant="h3" color="white">R$ {value.toFixed(2)}</Typography>
        </CardStyled >
    )
}

export default Card