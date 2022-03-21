import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import StartIcon from '@mui/icons-material/Start';

import { delTask, updateTask } from "./tasks.functions"


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function TaskCard({ data,action,card, ...props }) {

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card >

            <CardHeader
                style={{ background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,121,88,1) 0%, rgba(0,212,255,1) 100%)' }}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <>
                        <IconButton aria-label="settings"
                            onClick={() => { action() }}
                        >
                            <ModeEditIcon color="primary" />
                        </IconButton>

                        <IconButton aria-label="settings"
                            onClick={() => { delTask(card.id) }}
                        >
                            <DeleteOutlinedIcon color="primary" />
                        </IconButton>
                    </>
                }
                title={card.title}
                subheader={card.date}
            />
            <CardActions disableSpacing>
                Ver detalles...
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>

                {
                    card.status !== "finished" &&
                    <Button
                        variant="contained"
                        endIcon={<StartIcon />}
                        size="small"
                        style={{ background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,121,88,1) 0%, rgba(0,212,255,1) 100%)' }}
                        onClick={() => {
                            updateTask(card.id,
                                {
                                    status: `${card.status === "pending" ? ("processing") : (card.status === "processing" && ("finished"))}`
                                })
                        }}
                    >
                        {
                            card.status === "pending" ? ("Iniciar") : (card.status === "processing" && ("Finalizar"))
                        }
                    </Button>
                }

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {card.description && card.description.toString()}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
