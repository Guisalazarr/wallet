import React from "react"
import CardStyled from "./CardStyled"
import { Typography } from "@mui/material"
import { toFormatReal } from "../../../utils/toFormatReal"

interface CardProps {
    title: string,
    value: number
}


const Card: React.FC<CardProps> = ({ title, value }) => {
    return (

        <CardStyled elevation={3}>
            <Typography variant="h5" color="white" marginBottom={5}>{title}</Typography>
            <Typography variant="h3" color="white">{toFormatReal(value)}</Typography>
        </CardStyled >
    )
}

export default Card