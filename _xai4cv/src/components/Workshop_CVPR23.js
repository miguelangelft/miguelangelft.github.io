import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import People from './People_CVPR23';
import Speakers from './Speakers_CVPR23';
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
                                            The 2nd Explainable AI for Computer Vision (XAI4CV) Workshop at CVPR 2023
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Recording:</b> <Link target="_blank" rel="noopener" href="https://cvpr.thecvf.com/virtual/2023/workshop/18445">https://cvpr.thecvf.com/virtual/2023/workshop/18445</Link><br />
                                            <br />
                                            <b>Date:</b> Monday, June 19, 2023 <br />
                                            <b>Location:</b> West 121-122, Vancouver Convention Center, Vancouver, BC, Canada <br />
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

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="h5" align="left">
                                            Schedule
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                The schedule is in local time (PDT).
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>09:15 AM - 09:30 AM: </b> Opening Remarks
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>09:30 AM - 10:00 AM: </b> Invited Talk 1: <a target="_blank" rel="noopener" href="https://www.atb-potsdam.de/en/about-us/team/staff-members/person/marina-hohne">Marina M.-C. Höhne (née Vidovic)</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul><li>
                                              <b>How Much Can I Trust You? Towards Understanding Neural Networks</b>:
                                              In my presentation I will talk about the need to understand the AI models, which are often referred to as black box models. Due to correlations in the training data, the models might have learned artifacts, which lead to undesired behavior and might pose a risk especially in safety-critical applications. I will present DORA, a framework to automatically detect neurons that have learned spurious concepts, such as Clever Hans artifacts. Furthermore, I will show how we can improve local and global explanation methods by incorporating the uncertainty knowledge from Bayesian neural networks (BNN) into the explanations and how to quantitatively evaluate your explanations by using Quantus.
                                            </li></ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>10:00 AM - 10:30 AM: </b> Invited Talk 2: <a target="_blank" rel="noopener" href="https://arvindsatya.com/">Arvind Satyanarayan</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul><li>
                                              <b>Model Saliency is an Abstraction of Model Behavior</b>:
                                              Saliency methods are a commonly used class of interpretability techniques that calculate how important each input feature is to a model's output. However, a growing body of evaluative work questions how faithfully saliency methods represent model behavior, and the degree to which we should rely on them to explain model reasoning. In this talk, I will instead frame saliency maps as computational abstractions: views into model behavior that selectively preserve and necessarily sacrifice information in service of human-centric goals. With this framing, we can think of individual methods as lying in a broader "design space"—a common research methodology from HCI and Visualization that allows us to systematically analyze tradeoffs. In doing so, downstream users can now make informed decisions, choosing a saliency method best suited for their specific needs and context. Moreover, we are able to identify gaps in the current landscape and opportunities for future research (e.g., task-specific methods, new evaluative metrics, etc.).
                                            </li></ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>10:30 AM - 11:00 AM: </b> Spotlight Session 1
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                            <li><b>P03</b>
                                              <Link target="_blank" rel="noopener" href="./assets/papers2023/P03_ManifoldHypothesis.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                              <b> The Manifold Hypothesis for Gradient-Based Explanations.</b> Sebastian Bordt, Uddeshya Upadhyay, Zeynep Akata, Ulrike von Luxburg.</li>
                                            <li><b>P04</b>
                                              <Link target="_blank" rel="noopener" href="./assets/papers2023/P04_HierarchicalExplanations.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                              <Link target="_blank" rel="noopener" href="https://youtu.be/Cic0IWWnSnA"> <VideoIcon fontSize="inherit"/></Link>
                                              <Link target="_blank" rel="noopener" href="https://youtu.be/DzO-1Pc2NQ4"> <MovieIcon fontSize="inherit"/></Link>
                                              <b> Hierarchical Explanations for Video Action Recognition.</b> Sadaf Gulshad, Teng Long, Nanne van Noord.</li>
                                              <li><b>P09</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P09_SegXResCAM.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/QsxcVJQ2cmI"> <MovieIcon fontSize="inherit"/></Link>
                                                <b> Seg-XRes-CAM: Explaining Spatially Local Regions in Image Segmentation.</b> Syed Nouman Hasany, Caroline Petitjean, Fabrice Mériaudeau.</li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>11:00 AM - 12:00 PM: </b> Poster Session 1 @ West Exhibit Hall #203 - #241
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li><b>P01</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P01_ODSmoothGrad.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/mifgW9vzfgQ"> <VideoIcon fontSize="inherit"/></Link>
                                                <b> ODSmoothGrad: Generating Saliency Maps for Object Detectors.</b> Chul Gwon, Steven C. Howell. </li>
                                              <li><b>P02</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P02_SanityChecks.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/q5SwSM1Y_Tc"> <VideoIcon fontSize="inherit"/></Link>
                                                <b> Sanity Checks for Patch Visualisation in Prototype-based Image Classification.</b> Romain Xu-Darme, Georges Quénot, Zakaria Chihani, Marie-Christine Rousset.</li>
                                              <li><b>P03</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P03_ManifoldHypothesis.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <b> The Manifold Hypothesis for Gradient-Based Explanations.</b> Sebastian Bordt, Uddeshya Upadhyay, Zeynep Akata, Ulrike von Luxburg.</li>
                                              <li><b>P04</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P04_HierarchicalExplanations.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/Cic0IWWnSnA"> <VideoIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/DzO-1Pc2NQ4"> <MovieIcon fontSize="inherit"/></Link>
                                                <b> Hierarchical Explanations for Video Action Recognition.</b> Sadaf Gulshad, Teng Long, Nanne van Noord.</li>
                                              <li><b>P05</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P05_ConfusionMatrix.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/nlZwTpZ8wdI"> <VideoIcon fontSize="inherit"/></Link>
                                                <b>A Confusion Matrix for Evaluating Feature Attribution Methods.</b> Anna Arias-Duart, Ettore Mariotti, Dario Garcia-Gasulla, Jose Maria Alonso-Moral.</li>
                                              <li><b>P06</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P06_Robustness.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/J1dyxo9eZpM"> <VideoIcon fontSize="inherit"/></Link>
                                                <b> Robustness of Visual Explanations to Common Data Augmentation Methods.</b> Lenka Tětková, Lars Kai Hansen.</li>
                                              <li><b>P07</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P07_ShortcutRemoval.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/hfA4yE4Z0Qo"> <VideoIcon fontSize="inherit"/></Link>
                                                <b> Localized Shortcut Removal.</b> Nicolas M. Müller*, Jochen Jacobs*, Jennifer Williams, Konstantin Böttinger.</li>
                                              <li><b>P08</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P08_MedicalImaging.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/sk3WLuUY3ho"> <VideoIcon fontSize="inherit"/></Link>
                                                <b> Towards Evaluating Explanations of Vision Transformers for Medical Imaging.</b> Piotr Komorowski, Hubert Baniecki, Przemyslaw Biecek.</li>
                                              <li><b>P09</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P09_SegXResCAM.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/QsxcVJQ2cmI"> <MovieIcon fontSize="inherit"/></Link>
                                                <b> Seg-XRes-CAM: Explaining Spatially Local Regions in Image Segmentation.</b> Syed Nouman Hasany, Caroline Petitjean, Fabrice Mériaudeau.</li>
                                              <li><b>P10</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P10_MonocularCriteria.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/HvFCZLBOVg4"> <VideoIcon fontSize="inherit"/></Link>
                                                <b> Analyzing Results of Depth Estimation Models with Monocular Criteria.</b> Jonas Theiner, Nils Nommensen, Jim Rhotert, Matthias Springstein, Eric Müller-Budack, Ralph Ewerth.</li>
                                              <li><b>P11</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P11_Text2Concept.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/_70P9hBB-Fs"> <VideoIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P11_Text2Concept_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                                <b> Text2Concept: Concept Activation Vectors Directly From Text.</b> Mazda Moayeri, Keivan Rezaei, Maziar Sanjabi, Soheil Feizi.</li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>12:00 PM - 01:30 PM: </b> Lunch Social @ West Ballrooms
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>01:30 PM - 02:00 PM: </b> Invited Talk 3: <a target="_blank" rel="noopener" href="https://www.cs.unc.edu/~mbansal/">Mohit Bansal</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul><li>
                                              <b>Interpretable Image Generation+Evaluation and Right-for-the-Right-Reason Explanation Supervision</b>:
                                              In this talk, we will first discuss interpretable visual programming frameworks for text-to-image (T2I) generation and evaluation. VPGen decomposes T2I generation into three steps: object/count generation, layout generation, and image generation, providing stronger counts/spatial relations/scales control than end-to-end models and leveraging the world knowledge of pretrained LMs to go beyond predefined object classes. Next, VPEval produces evaluation programs that invoke a set of visual modules that are experts in different skills, and also provides visual+textual explanations of the evaluation results, resulting in a more human-correlated evaluation. In the second part of the talk, we will discuss how to make model explanation supervision 'meaningfully' improve VQA model accuracy as well as performance on several Right-for-the-Right-Reason (RRR) metrics by optimizing for four key model objectives: sufficiency, uncertainty, invariance, and plausibility. While past work suggests that the mechanism for improved accuracy is through improved explanation plausibility, we show that this relationship depends crucially on explanation faithfulness (i.e., whether explanations truly represent the model's internal reasoning).
                                            </li></ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>02:00 PM - 02:30 PM: </b> Invited Talk 4: <a target="_blank" rel="noopener" href="http://qveraliao.com/">Q. Vera Liao</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul><li>
                                              <b>Towards Human-Compatible Explainable AI</b>:
                                              While a vast collection of explainable AI (XAI) techniques have been developed in recent years, human-computer interaction (HCI) studies have found mixed results of their effectiveness, even pitfalls, in helping people work with AI systems. There is often a lack of compatibility with, and to begin with, a lack of understanding of, how people process and make use of explanations. In this talk, I will first draw on our own work and the broader HCI research to provide a more principled understanding of how people use AI explanations, focusing on the context of AI-assisted decision support. I will then suggest a path to more human-compatible XAI by drawing inspiration from human explanation behaviors, and encourage the community to pay more attention to the communication of explanations.
                                            </li></ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>02:30 PM - 03:00 PM: </b> Spotlight Session 2
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li><b>P12</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P12_CAVLI.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/D0a7gRyjCeU"> <MovieIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P12_CAVLI_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                                <b> CAVLI - Using Image Associations to Produce Local Concept-based Explanations.</b> Pushkar Shukla, Sushil Bharati, Matthew Turk.</li>
                                              <li><b>P16</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P16_SharedInterestSometimes.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/C180ttgD-18"> <MovieIcon fontSize="inherit"/></Link>
                                              <b> Shared Interest...Sometimes: Understanding the Alignment between Human Perception, Vision Architectures, and Saliency Map Techniques.</b> Katelyn Morrison, Ankita Mehra, Adam Perer.</li>
                                              <li><b>P20</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P20_PIPNet.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/GfQQFQ62SLU"> <VideoIcon fontSize="inherit"/></Link>
                                              <b> PIP-Net: Patch-Based Intuitive Prototypes for Interpretable Image Classification.</b> Meike Nauta, Jörg Schlötterer, Maurice Van Keulen, Christin Seifert.</li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>03:00 PM - 04:00 PM: </b> Poster Session 2 @ West Exhibit Hall #203 - #241
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li><b>P12</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P12_CAVLI.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/D0a7gRyjCeU"> <MovieIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P12_CAVLI_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                              <b> CAVLI - Using Image Associations to Produce Local Concept-based Explanations.</b> Pushkar Shukla, Sushil Bharati, Matthew Turk.</li>
                                              <li><b>P13</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P13_VisionDiffMask.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/YVtpcq6ceVI"> <VideoIcon fontSize="inherit"/></Link>
                                              <b> Vision DiffMask: Faithful Interpretation of Vision Transformers with Differentiable Patch Masking.</b> Angelos Nalmpantis*, Apostolos Panagiotopoulos*, John Gkountouras*, Konstantinos Papakostas, Wilker Aziz.</li>
                                              <li><b>P14</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P14_TaskAgnostic.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/9zagQAm4krs"> <VideoIcon fontSize="inherit"/></Link>
                                              <b> Ante-Hoc Generation of Task-Agnostic Interpretation Maps.</b> Akash Guna R T, Raul Benitez, Sikha O K.</li>
                                              <li><b>P15</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P15_Disentangling.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/wOWUfS11HV8"> <VideoIcon fontSize="inherit"/></Link>
                                              <b> Disentangling Neuron Representations with Concept Vectors.</b> Laura O'Mahony, Vincent Andrearczyk, Henning Müller, Mara Graziani.</li>
                                              <li><b>P16</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P16_SharedInterestSometimes.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/C180ttgD-18"> <MovieIcon fontSize="inherit"/></Link>
                                              <b> Shared Interest...Sometimes: Understanding the Alignment between Human Perception, Vision Architectures, and Saliency Map Techniques.</b> Katelyn Morrison, Ankita Mehra, Adam Perer.</li>
                                              <li><b>P17</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P17_ZEBRA.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/u_m2tos100A"> <VideoIcon fontSize="inherit"/></Link>
                                              <b> ZEBRA: Explaining Rare Cases through Outlying Interpretable Concepts.</b> Pedro Madeira, André Carreiro, Alex Gaudio, Luís Rosado, Filipe Soares, Asim Smailagic.</li>
                                              <li><b>P18</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P18_ChestXray.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/iT90lH14g4Y"> <VideoIcon fontSize="inherit"/></Link>
                                              <b> The Effect of Counterfactuals on Reading Chest X-rays.</b> Joseph Paul Cohen, Rupert Brooks, Sovann En, Evan Zucker, Anuj Pareek, Matthew Lungren, Akshay Chaudhari.</li>
                                              <li><b>P19</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P19_SOXAI.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                              <b> Explaining Explainability: Towards Deeper Actionable Insights into Deep Learning through Second-order Explainability.</b> E. Zhixuan Zeng, Hayden Gunraj, Sheldon Fernandez, Alexander Wong.</li>
                                              <li><b>P20</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P20_PIPNet.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/GfQQFQ62SLU"> <VideoIcon fontSize="inherit"/></Link>
                                              <b> PIP-Net: Patch-Based Intuitive Prototypes for Interpretable Image Classification.</b> Meike Nauta, Jörg Schlötterer, Maurice Van Keulen, Christin Seifert.</li>
                                              <li><b>P21</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P21_CRAFT.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                              <b> CRAFT: Concept Recursive Activation FacTorization for Explainability.</b> Thomas Fel, Agustin Picard, Louis Bethune, Thibaut Boissin, David Vigouroux, Julien Colin, Rémi Cadène, Thomas Serre.</li>
                                              <li><b>P22</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2023/P22_MACO.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                              <b> Unlocking Feature Visualization for Deeper Networks with MAgnitude Constrained Optimization.</b> Thomas Fel, Thibaut Boissin, Victor Boutin, Agustin Picard, Paul Novello, Julien Colin, Drew Linsley, Tom Rousseau, Rémi Cadène, Laurent Gardes, Thomas Serre.</li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>04:00 PM - 04:30 PM: </b> Invited Talk 5: <a target="_blank" rel="noopener" href="https://baulab.info/">David Bau</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul><li>
                                              <b>Causal Explanations</b>:
                                              If every explanation of a neural network is just an approximation to the actual network, then what makes a good explanation? I will talk about the role of causal models, mechanistic interpretability, and model editing, and I will talk about how a good explanation is falsifiable.  Then I will share a story about a recent piece of research where we missed a key part of the explanation, and another researcher used the same causal methods to find a better explanation for the same network.
                                            </li></ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>04:30 PM - 05:00 PM: </b> Invited Talk 6: <a target="_blank" rel="noopener" href="https://ai.sony/people/Alice-Xiang/">Alice Xiang</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul><li>
                                              <b>Being 'Seen' vs. 'Mis-Seen': Tensions between Privacy and Fairness in Computer Vision</b>:
                                              The rise of facial recognition and related computer vision technologies has been met with growing anxiety over the potential for AI to create mass surveillance systems and further entrench societal biases. These concerns have led to calls for greater privacy protections and fairer, less biased algorithms. An under-appreciated tension, however, is that privacy protections and bias mitigation efforts can sometimes conflict in the context of AI. Reducing bias in human-centric computer vision systems (“HCCV”), including facial recognition, can involve collecting large, diverse, and candid image datasets, which can run counter to privacy protections. In this talk, I discuss this tension between privacy and fairness in the context of algorithmic bias mitigation for HCCV, review the strategies proposed for resolving this tension, and examine the implications of a right not to be disproportionately “mis-seen” by AI, in contrast to regulations around what data should remain “unseen.” De-tethering these notions (being seen versus unseen versus mis-seen) can help clarify what rights relevant laws and policies should seek to protect.
                                            </li></ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>05:00 PM - 05:15 PM: </b> Closing Remarks
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
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P01_ODSmoothGrad.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/mifgW9vzfgQ"> <VideoIcon fontSize="inherit"/></Link>
                                            <b> ODSmoothGrad: Generating Saliency Maps for Object Detectors.</b> Chul Gwon, Steven C. Howell. </li>
                                          <li><b>P02</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P02_SanityChecks.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/q5SwSM1Y_Tc"> <VideoIcon fontSize="inherit"/></Link>
                                            <b> Sanity Checks for Patch Visualisation in Prototype-based Image Classification.</b> Romain Xu-Darme, Georges Quénot, Zakaria Chihani, Marie-Christine Rousset.</li>
                                          <li><b>P03</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P03_ManifoldHypothesis.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <b> The Manifold Hypothesis for Gradient-Based Explanations.</b> Sebastian Bordt, Uddeshya Upadhyay, Zeynep Akata, Ulrike von Luxburg.</li>
                                          <li><b>P04</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P04_HierarchicalExplanations.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/Cic0IWWnSnA"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/DzO-1Pc2NQ4"> <MovieIcon fontSize="inherit"/></Link>
                                            <b> Hierarchical Explanations for Video Action Recognition.</b> Sadaf Gulshad, Teng Long, Nanne van Noord.</li>
                                          <li><b>P05</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P05_ConfusionMatrix.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/nlZwTpZ8wdI"> <VideoIcon fontSize="inherit"/></Link>
                                            <b>A Confusion Matrix for Evaluating Feature Attribution Methods.</b> Anna Arias-Duart, Ettore Mariotti, Dario Garcia-Gasulla, Jose Maria Alonso-Moral.</li>
                                          <li><b>P06</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P06_Robustness.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/J1dyxo9eZpM"> <VideoIcon fontSize="inherit"/></Link>
                                            <b> Robustness of Visual Explanations to Common Data Augmentation Methods.</b> Lenka Tětková, Lars Kai Hansen.</li>
                                          <li><b>P07</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P07_ShortcutRemoval.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/hfA4yE4Z0Qo"> <VideoIcon fontSize="inherit"/></Link>
                                            <b> Localized Shortcut Removal.</b> Nicolas M. Müller*, Jochen Jacobs*, Jennifer Williams, Konstantin Böttinger.</li>
                                          <li><b>P08</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P08_MedicalImaging.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/sk3WLuUY3ho"> <VideoIcon fontSize="inherit"/></Link>
                                            <b> Towards Evaluating Explanations of Vision Transformers for Medical Imaging.</b> Piotr Komorowski, Hubert Baniecki, Przemyslaw Biecek.</li>
                                          <li><b>P09</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P09_SegXResCAM.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/QsxcVJQ2cmI"> <MovieIcon fontSize="inherit"/></Link>
                                            <b> Seg-XRes-CAM: Explaining Spatially Local Regions in Image Segmentation.</b> Syed Nouman Hasany, Caroline Petitjean, Fabrice Mériaudeau.</li>
                                          <li><b>P10</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P10_MonocularCriteria.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/HvFCZLBOVg4"> <VideoIcon fontSize="inherit"/></Link>
                                            <b> Analyzing Results of Depth Estimation Models with Monocular Criteria.</b> Jonas Theiner, Nils Nommensen, Jim Rhotert, Matthias Springstein, Eric Müller-Budack, Ralph Ewerth.</li>
                                          <li><b>P11</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P11_Text2Concept.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/_70P9hBB-Fs"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P11_Text2Concept_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Text2Concept: Concept Activation Vectors Directly From Text.</b> Mazda Moayeri, Keivan Rezaei, Maziar Sanjabi, Soheil Feizi.</li>
                                          <li><b>P12</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P12_CAVLI.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/D0a7gRyjCeU"> <MovieIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P12_CAVLI_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                          <b> CAVLI - Using Image Associations to Produce Local Concept-based Explanations.</b> Pushkar Shukla, Sushil Bharati, Matthew Turk.</li>
                                          <li><b>P13</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P13_VisionDiffMask.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/YVtpcq6ceVI"> <VideoIcon fontSize="inherit"/></Link>
                                          <b> Vision DiffMask: Faithful Interpretation of Vision Transformers with Differentiable Patch Masking.</b> Angelos Nalmpantis*, Apostolos Panagiotopoulos*, John Gkountouras*, Konstantinos Papakostas, Wilker Aziz.</li>
                                          <li><b>P14</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P14_TaskAgnostic.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/9zagQAm4krs"> <VideoIcon fontSize="inherit"/></Link>
                                          <b> Ante-Hoc Generation of Task-Agnostic Interpretation Maps.</b> Akash Guna R T, Raul Benitez, Sikha O K.</li>
                                          <li><b>P15</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P15_Disentangling.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/wOWUfS11HV8"> <VideoIcon fontSize="inherit"/></Link>
                                          <b> Disentangling Neuron Representations with Concept Vectors.</b> Laura O'Mahony, Vincent Andrearczyk, Henning Müller, Mara Graziani.</li>
                                          <li><b>P16</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P16_SharedInterestSometimes.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/C180ttgD-18"> <MovieIcon fontSize="inherit"/></Link>
                                          <b> Shared Interest...Sometimes: Understanding the Alignment between Human Perception, Vision Architectures, and Saliency Map Techniques.</b> Katelyn Morrison, Ankita Mehra, Adam Perer.</li>
                                          <li><b>P17</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2023/P17_ZEBRA.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/u_m2tos100A"> <VideoIcon fontSize="inherit"/></Link>
                                          <b> ZEBRA: Explaining Rare Cases through Outlying Interpretable Concepts.</b> Pedro Madeira, André Carreiro, Alex Gaudio, Luís Rosado, Filipe Soares, Asim Smailagic.</li>
                                        </ul>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Non-proceedings Track</b>
                                        </Typography>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <ul>
                                        <li><b>P18</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2023/P18_ChestXray.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://youtu.be/iT90lH14g4Y"> <VideoIcon fontSize="inherit"/></Link>
                                        <b> The Effect of Counterfactuals on Reading Chest X-rays.</b> Joseph Paul Cohen, Rupert Brooks, Sovann En, Evan Zucker, Anuj Pareek, Matthew Lungren, Akshay Chaudhari.</li>
                                        <li><b>P19</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2023/P19_SOXAI.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                        <b> Explaining Explainability: Towards Deeper Actionable Insights into Deep Learning through Second-order Explainability.</b> E. Zhixuan Zeng, Hayden Gunraj, Sheldon Fernandez, Alexander Wong.</li>
                                        <li><b>P20</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2023/P20_PIPNet.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://youtu.be/GfQQFQ62SLU"> <VideoIcon fontSize="inherit"/></Link>
                                        <b> PIP-Net: Patch-Based Intuitive Prototypes for Interpretable Image Classification.</b> Meike Nauta, Jörg Schlötterer, Maurice Van Keulen, Christin Seifert.</li>
                                        <li><b>P21</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2023/P21_CRAFT.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                        <b> CRAFT: Concept Recursive Activation FacTorization for Explainability.</b> Thomas Fel, Agustin Picard, Louis Bethune, Thibaut Boissin, David Vigouroux, Julien Colin, Rémi Cadène, Thomas Serre.</li>
                                        <li><b>P22</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2023/P22_MACO.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                        <b> Unlocking Feature Visualization for Deeper Networks with MAgnitude Constrained Optimization.</b> Thomas Fel, Thibaut Boissin, Victor Boutin, Agustin Picard, Paul Novello, Julien Colin, Drew Linsley, Tom Rousseau, Rémi Cadène, Laurent Gardes, Thomas Serre.</li>
                                        </ul>
                                        </Typography>
                                    </Grid>

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
                                            Abhimanyu Dubey, Andrew Elliott, Angelina Wang, Anirban Sarkar, Anmol Kalia, Arijit Ray,
                                            Chenyang Zhao, Chhavi Yadav, Chirag Agarwal, David Schinagl, Deepti Ghadiyaram, Devon Ulrich,
                                            Donald Honeycutt, Eunji Kim, Filip Radenovic, Giang Nguyen, Haofan Wang, Hubert Baniecki,
                                            Indu Panigrahi, Itana Bulatovic, Jae Myung Kim, Jihoon Chung, Jonathan Donnelly,
                                            Joseph Paul Cohen, Julien Colin, Kira Vinogradova, Lan Wang, Matthew Kowal, Mehdi Nourelahi,
                                            Mert Yuksekgonul, Moritz Böhle, Peter Hase, Qi Li, Rama Kovvuri, Ruth Fong, Satyapriya Krishna,
                                            Sunnie S. Y. Kim, Thomas Fel, Vikram V. Ramaswamy, Vipin Pillai, William Yang, Xinran Liang
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
                                                Email: <Link href="mailto:xai4cv2023@googlegroups.com">xai4cv2023@googlegroups.com</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>

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
                                            <b>Proceedings track:</b> We welcome <b>max 4-page</b> submissions of papers and demos. Submissions accepted to this track <b>will be published</b> in the CVPR 2023 workshop proceedings.
                                          </li>
                                          <li>
                                            <b>Non-proceedings track:</b> We welcome <b>max 2-page</b> submissions (commonly referred to as "extended abstracts") of papers and demos. For the non-proceedings track, we encourage submissions of published or accepted work (e.g., papers and demos accepted to the CVPR 2023 main program). Submissions accepted to this track <b>will <i>not</i> be published</b> in the CVPR 2023 workshop proceedings.
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
                                        Submissions due <b><strike>March 14, 2023 (5pm PT)</strike> March 17, 2023 (5pm PT)</b>. <br/>
                                        Decisions on <b><strike>April 1, 2023</strike> April 4, 2023</b>. <br/>
                                        Camera-ready due on <b><strike>April 8, 2023 (5pm PT)</strike> April 13, 2023 (5pm PT)</b>.
                                        <br/>
                                        <br/>
                                        <b>Non-proceedings track</b> <br/>
                                        Submissions due <b>May 19, 2023 (5pm PT)</b>. <br/>
                                        Rolling decisions from <b>May 1, 2023</b> to <b>May 25, 2023</b>. <br/>
                                        Camera-ready due on <b>June 8, 2023 (5pm PT)</b>.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Submission instructions</b>
                                        </Typography>
                                        <br/>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        All submissions should be in the <b>anonymized</b> CVPR 2023 format available at <a target="_blank" rel="noopener" href="https://cvpr.thecvf.com/Conferences/2023/AuthorGuidelines"><b>https://cvpr.thecvf.com/Conferences/2023/AuthorGuidelines</b></a>.
                                        <br/>
                                        The page limits <b>do not</b> include references.
                                        <br/>
                                        Submissions can be done at <a target="_blank" rel="noopener" href="https://cmt3.research.microsoft.com/XAI4CV2023"><b>https://cmt3.research.microsoft.com/XAI4CV2023</b></a>.
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
                                        <b>Spotlights: </b> We will pick 6-8 works among the submissions to be presented as spotlights.
                                        Presentations can either be <b>in-person</b> or <b>pre-recorded</b>.
                                        <br /><br />
                                        Abiding by the <a target="_blank" rel="noopener" href="https://cvpr2023.thecvf.com/Conferences/2023/Pricing2"><b>CVPR guidelines</b></a>, all accepted papers <b>must be presented by one of the authors</b>.
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
