import React from 'react';
import Link from '@material-ui/core/Link';

import { withStyles, Typography } from "@material-ui/core";
import * as speakers from '../speakers_list_cvpr24.json';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
    avatar: {
        width: 100,
        height: 100,
        margin: '0 auto'
    },
    gridItem: {
        padding: theme.spacing(2)
    }
});

const Speakers = (props) => {
    let selectedSpeakers = []
    let lgSize = 4;
    if (props.speakers) {
        selectedSpeakers = props.speakers;
    } else {
        selectedSpeakers = speakers.speakers;
    }

    if (props.lgSize) {
        lgSize = props.lgSize;
    }

    const speakersJSX = selectedSpeakers.map((person) => {
        const key = Math.random();
        return (
            <Grid item key={key} xs={12} sm={8} md={6} lg={lgSize}>
                <Link target="_blank" rel="noopener" href={person.website}>
                    <Avatar className={props.classes.avatar} src={person.img_url}/>
                </Link>
                <Link target="_blank" rel="noopener" href={person.website}>
                    <Typography variant="subtitle1">
                        <b>{person.name}</b>
                    </Typography>
                </Link>
                <Typography variant="caption">
                    {person.organization}
                </Typography>
            </Grid>
        )
    });

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            {speakersJSX}
        </Grid>
    )
};


export default withStyles(styles)(Speakers);
