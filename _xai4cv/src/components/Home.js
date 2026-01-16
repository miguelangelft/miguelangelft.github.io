import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link';


const styles = theme => ({
    content: {
        margin: '0 auto',
        marginTop: '1.5em'
    },
    root: {
    },
    gridItem: {
        padding: theme.spacing(1.5),
    },
    sectionHeader: {
        marginTop: '0.15em',
    },
    container: {
        padding: theme.spacing(2),
    },
    footer: {
        marginTop: '0.15em',
        fontSize: 14,
    }
});

class Home extends React.Component {
    state = {
        checked: false
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid
                    container
                    justify="center"
                    alignContent="center"
                >
                    <Grid
                        item
                        xs={10}
                        md={9}
                        lg={9}
                        className={classes.content}
                    >
                        <Grid container justify="center" alignContent="center">
                            <Grid item xs={12} lg={12}>
                                <Grid container justify="flex-start">
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography
                                                className={classes.sectionHeader}
                                                variant="h4"
                                                gutterBottom
                                                align="left"
                                                >
                                                Explainable AI for Computer Vision (XAI4CV)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Upcoming workshop
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>TBD</b>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Previous workshops
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <a href="./workshop_cvpr25"><b>The 4th XAI4CV Workshop at CVPR 2025</b></a>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <a href="./workshop_cvpr24"><b>The 3rd XAI4CV Workshop at CVPR 2024</b></a>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <a href="./workshop_cvpr23"><b>The 2nd XAI4CV Workshop at CVPR 2023</b></a>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <a href="./workshop_cvpr22"><b>The 1st XAI4CV Workshop at CVPR 2022</b></a>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <Grid container justify="flex-start">
                                      <Grid item xs={12} lg={9} className={classes.gridItem}>
                                      <img className="img-fluid" width="100%" alt="CVPR 2022 Workshop" src="assets/images/xai4cv_cvpr22.jpeg"/>
                                      </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
