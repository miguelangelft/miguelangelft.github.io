import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import People from './People_CVPR25';
import Speakers from './Speakers_CVPR25';
import Link from '@material-ui/core/Link';
import PDFIcon from '@material-ui/icons/PictureAsPdf';
import VideoIcon from '@material-ui/icons/VideoLibrary';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import MovieIcon from '@material-ui/icons/Movie';


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
    },
    people: {
        margin: '0 auto',
        marginTop: '1.5em'
    }
});

class Workshop extends React.Component {
    state = {
        checked: false
    }

    render() {
        const { classes } = this.props;
        document.title='Workshop';

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
                                    <Grid item xs={12} md={12} lg={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h4" gutterBottom align="center">
                                            The 4th Explainable AI for Computer Vision (XAI4CV) Workshop at CVPR 2025
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Recording:</b> <Link target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=Y47yian9rnY">https://www.youtube.com/watch?v=Y47yian9rnY</Link><br />
                                            <br />
                                            <b>Date & Time:</b> June 11, 2025, 1pm - 5pm (CDT local time) <br />
                                            <b>Location:</b> 107 B, Music City Center, Nashville, TN, USA <br />
                                        </Typography>
                                    </Grid>


                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Motivation
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            Explainability of computer vision systems is critical for people to effectively use and interact with them.
                                            This workshop seeks to contribute to the development of more explainable CV systems by:
                                            (1) initiating discussions across researchers and practitioners in academia and industry to identify successes, failures, and priorities in current XAI work;
                                            (2) examining the strengths, weaknesses, and underlying assumptions of proposed XAI methods and establish best practices in evaluation of these methods;
                                            and (3) discussing the various nuances of explainability and brainstorm ways to build explainable CV systems that benefit all involved stakeholders.
                                        </Typography>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Schedule
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                The schedule is in CDT local time.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>13:00 PM - 13:10 PM: </b> Opening
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>13:10 PM - 13:35 PM: </b> Invited Talk 1:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://lilyweng.github.io/">Tsui-Wei (Lily) Weng</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li>
                                              <b>Toward Principled and Automated Interpretability in Neural Networks</b>: In this talk, I will share recent advancements from my lab in explainable AI and interpretable machine learning for computer vision. I will present a series of works aimed at advancing interpretability in deep learning across three key fronts: (i) unveiling the inner workings of neural networks through automated mechanistic interpretability techniques, (ii) designing inherently interpretable architectures such as concept bottleneck models, and (iii) establishing a unified framework for evaluating neuron-level explanations, with practical guidelines and reliable evaluation metrics. Together, these efforts mark important steps toward building trustworthy and transparent deep learning systems for computer vision.
                                              </li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>13:35 PM - 14:00 PM: </b> Invited Talk 2:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://www.vanderschaar-lab.com/prof-mihaela-van-der-schaar/">Mihaela van der Schaar</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                              <ul>
                                                <li>
                                                <b>The Road to Transparent AI: Lessons Learned</b>
                                                </li>
                                              </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>14:00 PM - 14:25 PM: </b> Invited Talk 3:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://web.ml.tu-berlin.de/author/prof.-dr.-klaus-robert-muller/">Klaus-Robert Müller</a>
                                            </Typography>
                                        </Grid>
                                    </Grid>



                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>14:25 PM - 14:50 PM: </b> Invited Talk 4:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://www.brookings.edu/people/chinasa-t-okolo/">Chinasa T. Okolo</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                              <ul>
                                                <li>
                                                <b>AI Explainability in the Global Majority: Development and Policy Perspectives</b>
                                                </li>
                                              </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>14:50 PM - 15:20 PM: </b> Spotlight Session 1
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li><b>14:50 PM - 15:00 PM</b>: Disentangling Visual Transformers: Patch-level Interpretability for Image Classification</li>
                                              <li><b>15:00 PM - 15:10 PM</b>: PCBEAR: Pose Concept Bottleneck for Explainable Action Recognition</li>
                                              <li><b>15:10 PM - 15:20 PM</b>: X-Edit: Detecting and Localizing Edits in Images Altered by Text-Guided Diffusion Models</li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>15:20 PM - 16:10 PM: </b> Poster Session
                                            </Typography>
                                        </Grid>
                                    </Grid>



                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>16:10 PM - 16:35 PM: </b> Invited Talk 5:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://research.google/people/106417/?&type=google">Junfeng He</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li>
                                              <b>User Simulator as Interpretable and More Generalizable Model to Evaluate and Improve AI Generated Content</b>: In this talk, I will present our recent works on building user models as well as how to apply them to evaluate and improve AIGC. In particular, I will talk about how to build an rich human feedback (auto-rater) model to predict raters’ rich feedback for generated images (<a target="_blank" rel="noopener" href="https://openaccess.thecvf.com/content/CVPR2024/papers/Liang_Rich_Human_Feedback_for_Text-to-Image_Generation_CVPR_2024_paper.pdf">CVPR 2024 paper</a>), which can serve as an interpretable AIGC evaluation and reward model. Moreover, I will show how to improve image generation models via fine-tuning with our auto-rater model predictions, e.g. achieving region-aware fine-tuning for T2I models to fix problematic regions (<a target="_blank" rel="noopener" href="https://arxiv.org/abs/2501.06481">CVPR 2025 paper</a>), and more. Finally, we will also discuss a rich human behavior model across various kinds of visual content (<a target="_blank" rel="noopener" href="https://arxiv.org/abs/2312.10175">NeurIPS 2024 paper</a>), and give some example about how to use it to improve visual content for better user experience.
                                              </li>
                                            </ul>
                                            </Typography>


                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>16:35 PM - 16:55 PM: </b> Spotlight Session 2
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li><b>16:35 PM - 16:45 PM</b>: ExaM: Unsupervised Concept-Based Representation Learning to Better Explain Models in Vision Tasks</li>
                                              <li><b>16:45 PM - 16:55 PM</b>: Visually Interpretable Subtask Reasoning for Visual Question Answering</li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>16:55 PM - 17:00 PM: </b> Closing
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Invited Speakers
                                        </Typography>
                                    </Grid>

                                    <Speakers/>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Accepted Papers
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Proceedings Track</b>
                                        </Typography>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <ul>
                                          <li><b>P01</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1jV-rrNOjkiB7xlmVn4ZoJn--xx5AqyNX"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1urLG4uk8kz688izIcf98qbV3JSNn6e6K"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Disentangling Visual Transformers: Patch-level Interpretability for Image Classification.</b> Guillaume Jeanneret, Loic Simon, Frederic Jurie. </li>
                                          <li><b>P02</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/file/d/1wO4qUvYUHPMVY8MFH8dhnLRnIsg1D7i2/view?usp=sharing"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/file/d/1cp5g3Vs6zZFX7XTuXC-9xYku4EGy5eUn/view?usp=sharing"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>

                                            <b> PCBEAR: Pose Concept Bottleneck for Explainable Action Recognition.</b> Jongseo Lee, Wooil Lee, Gyeong-Moon Park, Seong Tae Kim, Jinwoo Choi.</li>
                                          <li><b>P03</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1Kit8hB5uv7htpEaellS4PTmKXC3-ghu1"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1c21efaytIq9JnH6Od2pd1ETJlIQ8G0Lc"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> ScoreCAM++: Gated Score-Weighted Visual Explanations for CNNs.</b> Soham Mitra, Atri Sukul, Swalpa Kumar Roy, Pravendra Singh and Vinay Kumar Verma.</li>
                                          <li><b>P04</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1d97ZJ-g8UadC4w7QzEjWGEI9grDal8BV"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1jLjthC9hegv5JNs4gevRZks20lFjf0-w"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> How does the Machine Perceive Depth for Indoor Single Images with CNN?.</b> Yihong Wu, Yuwen Heng, Mahesan Niranjan, Hansung Kim.</li>
                                          <li><b>P05</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/file/d/16Gvxtyerg3Hs7ISB5OOcUvcdKn3QpzJQ/view?usp=sharing"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/file/d/14LEDUfN-PI0FsttUHkAbTqvPnIL3FAnn/view?usp=sharing"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Towards Synthetic Concept Activation Vectors via Generative Models.</b> Riccardo Campi, Santiago Borrego, Antonio De Santis, Matteo Bianchi, Andrea Tocchetti, Marco Brambilla.</li>
                                          <li><b>P06</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1VTnDzO7QM8Ek_47UNlnZ4Q3QUsLQxn-0"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1x2p19x8QOCJ8ikMQbgPW42jPWvWjYPWX"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> X-Edit: Detecting and Localizing Edits in Images Altered by Text-Guided Diffusion Models.</b> Valentina Bazyleva, Nicolò Bonettini, Gaurav Bharaj.</li>
                                          <li><b>P07</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1Y5xv4NLQZ7r-jzXV7XojHZ3FDyqX6QpL"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1kKWVykcpqrAi38BLKbR7-Zh7_0LXFt7W"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> PoseGuru: Landmarks for Explainable Pose Correction using Exemplar-Guided Algorithmic Recourse.</b> Bhat Dittakavi, Bharathi Callepalli, Swarnim Maheshwari, Vineeth Balasubramanian.</li>
                                          <li><b>P08</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1ifygg6jkn6shTF4zXBl8aV0reHNRX1AD"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1yIE5-pIqJGEWqrXng44vK-hAYtus7yxN"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=16Rks0LAHTknJOkjXJXKaVcO0AcP_BDqn"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> ExaM: Unsupervised Concept-Based Representation Learning to Better Explain Models in Vision Tasks.</b> Maguelonne Heritier, Djebril Mekhazni, Cedric Leblond-Menard, Benoit Godbout, Nathan Guilbaud, Mahdi Alehdaghi, Eric Granger.</li>
                                          <li><b>P09</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1paVmMA79asjUaJQCKp5zPLFIS3jRhiTd"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1zwdL1Z8iVSUe6z2WPz8EV56Hc2ReZK2x"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Visually Interpretable Subtask Reasoning for Visual Question Answering.</b> Yu Cheng, Arushi Goel, Hakan Bilen.</li>
                                          <li><b>P10</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1JlJS1BGFIPx9NhjXOGRPJtEmePSM-KQb"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=18fSEt1TScxPWEmQfknsKTGo3oIlsAGRf"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1xspUbz4xjCMSA2Rizm5packoPhXSVZpg"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> gMINT: Gradiant-based Membership Inference Test applied to Image Models..</b> Daniel DeAlcala, Aythami Morales, Julian Fierrez, Gonzalo Mancera, Ruben Tolosana.</li>
                                          <li><b>P11</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1IlfGIdxOUtmbXhhPzRW3L-Pm3l6MangN"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=17pqeD2Yu7UFbA0C9iukPg3_yn-evw4mz"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Explaining 3D Point Cloud Semantic Segmentation Models Through Adversarial Attacks.</b> Jorge Francisco Ciprián Sánchez, Josafat-Mattias Burmeister, Rico Richter, Jürgen Döllner.</li>
                                          <li><b>P12</b>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1HjtxSKUwzzymxr7g_fmuRBDkjxE16yQE"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1Fojz03gcVLXomRmAs_JsdKLoli3AcXVA"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1478YJpiZgem-IJs2TZbQScJ2Gaw7Od2K"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                          <b> Rel-SA: Alzheimer’s Disease Detection using Relevance-augmented Self Attention by Inducing Domain Priors in Vision Transformers.</b> Madhumitha V, Sunayna Padhye, Shanawaj Sahebpatel Madarkar, Susmit Agrawal, Konda Reddy Mopuri.</li>
                                        </ul>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Non-proceedings Track</b>
                                        </Typography>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <ul>
                                        <li><b>P13</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/file/d/1_mXD-sCrk26uVMXpYS1XtkPdw2uNXbGL/view?usp=sharing"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/file/d/1ptKedINv1z5xE6ZOZcGwGl7gv9XH55eQ/view?usp=sharing"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> DEPICT: Diffusion-Enabled Permutation Importance for Image Classification Tasks.</b> Sarah Jabbour, Gregory Kondas, Ella Kazerooni, Michael Sjoding, David Fouhey, Jenna Wiens.</li>
                                        <li><b>P14</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1WBeAnfut8ee427E8XhGt8okGoowbwoAf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1VSjlbxYoAkn2_YoO3ZyCC0uSkqW2J4WL"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Rashomon Sets for Prototypical-Part Networks: Editing Interpretable Models in Real-Time.</b> Jon Donnelly, Zhicheng Guo, Alina Jade Barnett, Hayden McTavish, Chaofan Chen, Cynthia Rudin.</li>
                                        <li><b>P15</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1X3NLxULwe-sV6ENgqw5mhyeDoB-gBhfS"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1zejtXr8ShLeljRkdyqk0gujFMSVapxYL"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Interpretable Generative Models through Post-hoc Concept Bottlenecks.</b> Akshay Kulkarni, Ge Yan, Chung-En Sun, Tuomas Oikarinen, Tsui-Wei Weng.</li>
                                        <li><b>P16</b>
                                        <b> OASIS Uncovers: High-Quality T2I Models, Same Old Stereotypes.</b> Sepehr Dehdashtian, Gautam Sreekumar, Vishnu Boddeti</li>
                                        <li><b>P17</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1Wy0bvDUHZL0iV8xriIUAeCxOFFtUuiaC"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1yBJsMRANg1Cm0a5-3RC_qEkS1g6k_X1U"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> LibraGrad: Balancing Gradient Flow for Universally Better Vision Transformer Attributions.</b> Faridoun Mehri, Mahdieh Soleymani Baghshah, Mohammad Taher Pilehvar</li>
                                        <li><b>P18</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1YO_GnRFLVypt-mY13spsoViJSsFuUVEN"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1du2BCwS_yBvMWARhK5QHrwlrbOxh6l_3"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Sparse Autoencoders Learn Monosemantic Features in Vision-Language Models.</b> Mateusz Pach, Shyamgopal Karthik, Quentin Bouniot, Serge Belongie, Zeynep Akata.</li>
                                        <li><b>P19</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1pOl-2razqjVweSQLwYelRZr0JcSnLcBv"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1DwQMEk23fEkv_WZHPUc7HYcK-Zbx5av0"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Is What You Ask For What You Get? Investigating Concept Associations in Text-to-Image Models.</b> Salma Abdel Magid, Weiwei Pan, Simon Warchol, Grace Guo, Junsik Kim, Mahia Rahman, Hanspeter Pfister.</li>
                                        <li><b>P20</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1zoLETWyuIJ-n2hCiPRYmtoFruG4T0N-w"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1W4Kx8gPlqzKyNEjhlzWyaFbUA7aVs8EN"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Analyzing Hierarchical Structure in Vision Models with Sparse Autoencoders.</b> Matthew Lyle Olson, Musashi Hinck, Neale Ratzlaff, Changbai Li, Phillip Howard, Vasudev Lal, Shao-Yen Tseng.</li>
                                        <li><b>P21</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=13tolKorCCjmdcKVMq9EYO0ixeiW5sCGf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1tKbszhLPyl8T4_8KdlByQyOVrSZziV51"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Cosine Similarity is Almost All You Need (for Prototypical Part Models).</b> Luke Moffett, Frank Willard, Emanuel Mokel, Jon Donnelly, Zhicheng Guo, Julia Yang, Giyoung Kim, Alina Jade Barnett, Cynthia Rudin.</li>
                                        <li><b>P22</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1NHHcJINhZwHWHO3XRF9tf9k430BD_bIE"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1ivpmVYVY-2NBn3H4fZdzlAIkLeBOaNxt"> <VideoIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1JpdRxabsWQN0xil_UmGjAg3F5EzvZYYq"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Attention IoU: Examining Biases in CelebA using Attention Maps.</b> Aaron Serianni, Tyler Zhu, Olga Russakovsky, Vikram V. Ramaswamy.</li>
                                        <li><b>P23</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1yjGlUqiypeA1Q9Ok5qjbgksqNvCJE3Rd"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1XpUxliZjz1wgi-N3C3d8qe5H-5Snlvt1"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b>  Compositional Targeted Multi-Label Universal Perturbations.</b> Hassan Mahmood, Ehsan Elhamifar.</li>
                                        <li><b>P24</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1ANP4RM7tjlxF67OaoDvGJrY7yNH17acj"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=12EYvKM-OQmg-XaeZ35XoCpUr3NjrHYBx"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> How Visual Representations Map to Language Feature Space in Multimodal LLMs.</b> Constantin Venhoff, Ashkan Khakzar, Sonia Joseph, Philip Torr, Neel Nanda.</li>
                                        <li><b>P25</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=15L1jEj0P0VANrtaRN1TaGL0HCUfCEh6Z"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1e_YC8rBwoJ7skTzvmOgEr1WQLWFunTjJ"> <VideoIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1JNdI5-rdfJ3yIpcor9NNPSaTp3rJdFGj"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Data-Eﬃcient Visual Concept Bottleneck Models.</b> Katharina Prasse, Patrick Knab, Sascha Marton, Christian Bartelt, Margret Keuper.</li>
                                        <li><b>P26</b>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=14sgDRcWPzKQa5EFIT4XK1hF06dM3GZbd"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://drive.google.com/open?id=1E_ObtHM1ej9bHsL0CI8jUo-Imv-99IhI"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Agents for Clinical Imaging: A Clinician-Aligned, Intent-Guided, Information Optimal Multi-modal Approach.</b> Kailas Dayanandan, Brejesh Lall.</li>
                                        </ul>
                                        </Typography>
                                    </Grid>

                                    <div className={classes.container}/>

                                    <div className={classes.container}/>

                                    <div className={classes.container}/>


                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Organizers
                                        </Typography>
                                    </Grid>

                                    <People/>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Program Committee
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                            <b>We thank our wonderful program committee members who made this workshop possible!</b>
                                            <br/><br/>
                                            Ada Görgün, Adrian Höhl, Amin Parchami-Araghi, Anders Gjølbye, Angelos Nalmpantis, Anirban Sarkar, Anthony Rhodes, Avinab Saha, Bartlomiej Sobieski, Bor-Shiun Wang, Brinnae Bent, Chenyang Zhao, Dahye Kim, Eike Peterson, Elaine Sui, Elisa Nguyen, Fawaz Sammani, Frederic Jurie, Giang Nguyen, Guillaume Jeanneret, Hubert Baniecki, Indu Panigrahi, Ivica Obadic, Jinwoo Choi, John Gkountouras, Jonathan Donnelly, Joseph Paul Cohen, Lan Wang, Laura O'Mahony, Lenka Tětková, Luna Zhang, Manxi Lin, Marina Gavrilova, Matthew Olson, Mayank Singh, Miguel-Ángel Fernández-Torres, Nhi Pham, Nils Huetten, Nina Weng, Paraskevas Pegios, Pattarawat Chormai, Paul Gavrikov, Ping Xiong, Piotr Komorowski, Pushkar Shukla, Quentin Bouniot, Rajat Sahay, Romain Xu-Darme, Sadaf Gulshad, Satyapriya Krishna, Saurabh Pitre, Shashank Gupta, Simon Schrodi, Simone Schaub-Meyer, Sukrut Rao, Sunnie S. Y. Kim, Susu Sun, Sweta Mahajan, Teresa Dorszewski, Thea Brüsch, Tobias Labarta, Tobias Meisen, Vikram V. Ramaswamy, Vipin Pillai, Xiwei Xuan, Yuhui Zhang
                                            </Typography>
                                        </Grid>
                                    </Grid>


                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Contact
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                Email: <Link href="mailto:xai4cv2025@googlegroups.com">xai4cv2025@googlegroups.com</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            (Closed) Call for Papers & Demos
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        We welcome paper and demo submissions.
                                        <ul>
                                          <li>
                                            <b>Papers</b> should describe high-quality, original research. Contributions can include novel XAI methods; applications of existing methods on new domains, models, and tasks; evaluation or analysis of existing methods; and practical toolboxes.
                                          </li>
                                          <li>
                                            <b>Demos</b> should consist of static or interactive presentations of XAI for CV models and tasks, accompanied by a description. Contributions can include visualizations, explanations, and explorations of novel XAI systems; novel visualizations, explanations, and explorations of existing XAI systems; studies of how different  visualizations, explanations, and explorations of XAI systems are perceived by people; among others.
                                          </li>
                                        </ul>

                                        We have two tracks of submissions.
                                        <ul>
                                          <li>
                                            <b>Proceedings track:</b> We welcome <b>max 8-page</b> submissions of papers and demos. Submissions accepted to this track <b>will be published</b> in the CVPR workshop proceedings.
                                          </li>
                                          <li>
                                            <b>Non-proceedings track:</b> We welcome <b>max 4-page</b> submissions (commonly referred to as "extended abstracts") of papers and demos. For the non-proceedings track, we encourage submissions of published or accepted work (e.g., papers and demos accepted to the CVPR main program). Submissions accepted to this track <b>will <i>not</i> be published</b> in the CVPR workshop proceedings.
                                          </li>
                                        </ul>

                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Timeline</b>
                                        </Typography>
                                        <br/>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <b>Proceedings track</b> <br/>
                                        Submission deadline: <b><s>March 10, 2025 (5pm PT)</s> March 13, 2025 (5pm PT)</b> <br/>
                                        Notification to authors (accept as spotlight, accept as poster, or reject): <b>March 30, 2025</b> <br/>
                                        Camera-ready deadline: <b>April 6, 2025 (5pm PT)</b>
                                        <br/>
                                        <br/>
                                        <b>Non-proceedings track</b> <br/>
                                        Submissions deadline (to be considered for spotlights): <b><s>March 10, 2025 (5pm PT)</s> March 13, 2025 (5pm PT)</b> <br/>
                                        Notification to authors (accept as spotlight, accept as poster, or reject): <b>March 30, 2025</b> <br/>
                                        Rolling submissions and notifications (accept as poster or reject): <b>Until April 25, 2025</b> <br/>
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Submission instructions</b>
                                        </Typography>
                                        <br/>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        All submissions should be in the <b>anonymized</b> CVPR 2025 format available at <a target="_blank" rel="noopener" href="https://cvpr.thecvf.com/Conferences/2025/AuthorGuidelines"><b>https://cvpr.thecvf.com/Conferences/2025/AuthorGuidelines</b></a>.
                                        <br/>
                                        The page limits <b>do not</b> include references.
                                        <br/>
                                        You may optionally upload supplementary material. Reviewers will be encouraged to look at it, but are not obligated to do so.
                                        <br/>
                                        Submissions can be done at <a target="_blank" rel="noopener" href="https://cmt3.research.microsoft.com/XAI4CV2025"><b>https://cmt3.research.microsoft.com/XAI4CV2025</b></a>
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Attendance & Presentation</b>
                                        </Typography>
                                        <br/>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <b>Posters: </b> All accepted submissions will be invited to participate in an <b>in-person</b> poster session at our workshop.
                                        Additionally, the authors will be asked to upload their posters which will be hosted on our webpage.
                                        <br /><br />
                                        <b>Spotlights: </b> We will pick several works among the submissions to be presented as spotlights.
                                        Presentations can either be <b>in-person</b> or <b>pre-recorded</b>.
                                        <br /><br />
                                        Abiding by the <a target="_blank" rel="noopener" href="https://cvpr.thecvf.com/Conferences/2025/Pricing2"><b>CVPR guidelines</b></a>, all accepted papers <b>must be presented by one of the authors</b>.
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Topics</b>
                                        </Typography>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <ul>
                                          <li>Interpretable-by-design CV models</li>
                                          <li>Post-hoc explanations of CV models</li>
                                          <li>Evaluation and analysis of XAI for CV</li>
                                          <li>Applications of XAI for CV</li>
                                          <li>Methods for new interactions with CV models (e.g., debugging, editing)</li>
                                          <li>Multimodal XAI, including both multimodal explanations of CV models and (unimodal) explanations of multimodal models</li>
                                          <li>Datasets for developing and evaluating XAI for CV</li>
                                          <li>Visualizations and toolboxes for XAI for CV</li>
                                          <li>Human-centered XAI for CV (e.g., human evaluations, qualitative studies)</li>
                                          <li>Studies of XAI for CV and related topics (e.g., fairness, transparency, interpretability, trust)</li>
                                        </ul>
                                        </Typography>
                                    </Grid>



                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>
                                    <div className={classes.container}/>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Workshop.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Workshop);
