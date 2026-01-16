import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import People from './People_CVPR22';
import Speakers from './Speakers_CVPR22';
import Link from '@material-ui/core/Link';
import VideoIcon from '@material-ui/icons/VideoLibrary';
import PDFIcon from '@material-ui/icons/PictureAsPdf';


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
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h4"
                                            gutterBottom
                                            align="center"
                                            >
                                            The 1st Explainable AI for Computer Vision (XAI4CV) Workshop at CVPR 2022
                                        </Typography>
                                    </Grid>


                                    <div className={classes.container}/>
                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                        >
                                            <b>Date:</b> Monday, June 20, 2022 <br />
                                            <b>Venue:</b> New Orleans Ernest N. Morial Convention Center, New Orleans, Louisiana <br />
                                            <b>Location:</b> 208-210 <br />
                                            <b>Motivation:</b> Provide a common forum for both computer vision practitioners in the industry and academia to initiate discussions and propose best ways to build explainable models that can benefit the global community.
                                        </Typography>
                                    </Grid>


                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Abstract
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                            Computer vision (CV) models are often used to improve applications and products and are very successful.
                                            However, these models are usually black-box in nature and do not provide explanations for their predictions, which sometimes leads to confusing behaviour.
                                            The current lack of transparency in CV models is one of the biggest barriers in building trust among consumers, often resulting in severe backlash when models make embarrassing mistakes.
                                            Trust in the models can be improved by making them fair, easily understandable for everyone, and correctable if necessary.
                                            The need for trustworthiness has prompted recent clauses in GDPR regulations that require models to also explain their results in a way a naive consumer can understand.
                                            <br /><br />
                                            With socio-political implications of AI in mind, this workshop aims to motivate proactive adaptation of explainability in computer vision systems.
                                            Specifically, our aim is to spark healthy conversations that address building top-performing explainable computer vision systems that not only identify "what" and "where" different visual entities occur in an image, but also provide a human-like reasoning of "why" the model made those predictions.
                                            Furthermore, such systems should allow a user to provide feedback and thereby correct potentially harmful mispredictions with minimal effort.
                                        </Typography>
                                    </Grid>

                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Invited Speakers
                                        </Typography>
                                    </Grid>

                                    <Speakers/>


                                    <div className={classes.container}/>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Schedule
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body1"
                                            align="left"
                                            >
                                            Video recordings for all sessions available on <Link target="_blank" rel="noopener" href="https://youtube.com/playlist?list=PLmTZeha8o7E9cRtwmOOuVBzpSsAN0smk1"><b><VideoIcon fontSize="inherit"/> YouTube</b></Link>.
                                        </Typography>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>09:00 AM - 09:10 AM: </b> Opening Remarks - <b>Filip Radenovic</b> (Meta AI)
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/_FhGrL3Fm2o"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>09:10 AM - 09:50 AM: </b> Spotlight Session 1 (<i>8 min + 2 min QA</i>)
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <li>S 06: <b>HIVE: Evaluating the Human Interpretability of Visual Explanations.</b> Sunnie S. Y. Kim, Nicole Meister, Vikram V. Ramaswamy, Ruth C Fong, Olga Russakovsky.</li>
                                                    <li>S 11: <b>Explaining Deep Convolutional Neural Networks via Latent Visual-Semantic Filter Attention.</b> Yu Yang, Seungbae Kim, Jungseock Joo.</li>
                                                    <li>S 17: <b>Causality for Inherently Explainable Transformers: CAT-XPLAIN.</b> Subash Khanal, Benjamin Brodie, Xin Xing, Ai-Ling Lin, Nathan Jacobs.</li>
                                                    <li>S 20: <b>Do learned representations respect causal relationships?</b> Lan Wang, Vishnu Boddeti.</li>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/7uysq-qAtr4"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>09:50 AM - 10:30 AM: </b> Coffee Break + Poster Session 1
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p2.pdf"><b><PDFIcon fontSize="inherit"/> P 02</b></Link>: <b>Finding and Fixing Spurious Patterns with Explanations.</b> Gregory Plump, Marco Tulio Ribeiro, Ameet Talwalkar.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p3.pdf"><b><PDFIcon fontSize="inherit"/> P 03</b></Link>: <b>Sanity Simulations for Saliency Methods.</b> Joon Sik Kim, Gregory Plumb, Ameet Talwalkar.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p4.pdf"><b><PDFIcon fontSize="inherit"/> P 04</b></Link>: <b>Xplique: A Deep Learning Explainability Toolbox.</b> Thomas FEL, Lucas Hervier, David Vigouroux, Antonin Poche, Justin Plakoo, Remi Cadene, Mathieu Chalvidal, Julien Colin, Thibaut Boissin, Louis Béthune, Agustin Picard, Claire NICODEME, Laurent Gardes, Grégory Flandin, Thomas Serre.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p6.pdf"><b><PDFIcon fontSize="inherit"/> P 06</b></Link>: <b>HIVE: Evaluating the Human Interpretability of Visual Explanations.</b> Sunnie S. Y. Kim, Nicole Meister, Vikram V. Ramaswamy, Ruth C Fong, Olga Russakovsky.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p10.pdf"><b><PDFIcon fontSize="inherit"/> P 10</b></Link>: <b>Give Users What They Want: Labeled Arrows.</b> Severine Soltani, Michael Pazzani.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p11.pdf"><b><PDFIcon fontSize="inherit"/> P 11</b></Link>: <b>Explaining Deep Convolutional Neural Networks via Latent Visual-Semantic Filter Attention.</b> Yu Yang, Seungbae Kim, Jungseock Joo.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p12.pdf"><b><PDFIcon fontSize="inherit"/> P 12</b></Link>: <b>HINT: Hierarchical Neuron Concept Explainer.</b> Andong Wang, W.N. Lee, Xiaojuan Qi</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p17.pdf"><b><PDFIcon fontSize="inherit"/> P 17</b></Link>: <b>Causality for Inherently Explainable Transformers: CAT-XPLAIN.</b> Subash Khanal, Benjamin Brodie, Xin Xing, Ai-Ling Lin, Nathan Jacobs.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p18.pdf"><b><PDFIcon fontSize="inherit"/> P 18</b></Link>: <b>Ensembles for Improved Explanation of Image Classification.</b> Aadil Ahamed, Kamran Alipour, Michael Pazzani, Sateesh Kumar.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p20.pdf"><b><PDFIcon fontSize="inherit"/> P 20</b></Link>: <b>Do learned representations respect causal relationships?</b>	Lan Wang, Vishnu Boddeti.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p21.pdf"><b><PDFIcon fontSize="inherit"/> P 21</b></Link>: <b>ELUDE: Generating Interpretable Explanations via a Decomposition into Labelled and Unlabelled features.</b> Vikram V. Ramaswamy, Sunnie S. Y. Kim, Nicole Meister, Ruth C Fong, Olga Russakovsky.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p22.pdf"><b><PDFIcon fontSize="inherit"/> P 22</b></Link>: <b>Explaining Local Discrepancies between Image Classification Models.</b> Thibault Laugel, Xavier Renard, Marcin Detyniecki.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p23.pdf"><b><PDFIcon fontSize="inherit"/> P 23</b></Link>: <b>CLEVR-X: A Visual Reasoning Dataset for Natural Language Explanations.</b> Leonard Salewski, A. Sophia Koepke, Hendrik P. A. Lensch, Zeynep Akata.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p24.pdf"><b><PDFIcon fontSize="inherit"/> P 24</b></Link>: <b>Cycle-Consistent Counterfactuals by Latent Transformations.</b> Saeed Khorram, Li Fuxin.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p26.pdf"><b><PDFIcon fontSize="inherit"/> P 26</b></Link>: <b>Subspace Based Visualization for Embedding Network.</b> Xiaotong Liu, Abby Stylianou, Zeyu Zhang, Robert Pless.</li>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>10:30 AM - 11:00 AM: </b> Invited Talk - <b>Antonio Torralba</b> (MIT)
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <b><i>Interpreting and editing networks</i></b>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/opNPswunmfY"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>11:00 AM - 11:30 AM: </b> Invited Talk - <b>Yixin Wang</b> (University of Michigan)
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <b><i>Representation Learning: A Causal Perspective</i></b>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <i>Representation learning constructs low-dimensional representations to summarize essential features of high-dimensional data like images and text. Ideally, such a representation should capture non-spurious features of the data in an efficient way. It shall also be disentangled so that we can freely manipulate each of its dimensions. However, these desiderata are often intuitively defined and challenging to quantify or enforce.
                                                    In this work, we take on a causal perspective of representation learning. We show how desiderata of representation learning can be formalized using counterfactual notions, which then enables algorithms that target efficient, non-spurious, and disentangled representations of data. We discuss the theoretical underpinnings of the algorithm and illustrate its empirical performance in both supervised and unsupervised representation learning.
                                                    This is joint work with Michael Jordan.</i>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://urldefense.com/v3/__https://yixinwang.github.io/papers/causal-rep-slides-public.pdf__;!!Bt8RZUm9aw!6HJjmzJvZjCXXLimgLDCFBHljTR3Q-GueFSoaY4aeHdW_S6ycHUDg8LnXUR9wiDHuFrVuvHNIlrzPALHSG8$"><b><PDFIcon fontSize="inherit"/> Presentation</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>11:30 AM - 12:00 PM: </b> Invited Talk - <b>Rich Caruana</b> (MSR)
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <b><i>Glassbox Deep Learning with Neural Additive Models (NAMs)</i></b>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <i>Most interpretable machine learning methods depend on models trained with linear regression, decision lists, rules, or trees.  However it is possible to train interpretable models with DNNs by restricting the architecture to learn components that have reduced complexity and thus are easy to explain.  In this presentation I’ll review NAMs --- Neural Additive Models --- where deep learning is used to train neural nets that are inherently interpretable yet highly accurate on tabular data.  Although these glassbox models are not designed for vision, I’ll briefly discuss how they might be used to improve the intelligibility of some vision systems.</i>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/cxc0zY0Btf4"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>12:00 PM - 12:50 PM: </b> Lunch Break
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>12:50 PM - 01:30 PM: </b> Spotlight Session 2 (<i>8 min + 2 min QA</i>)
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <li>S 27: <b>A Deeper Dive Into What Deep Spatiotemporal Networks Encode: Quantifying Static vs. Dynamic Information.</b> Matthew Kowal, Mennatullah Siam, Md Amirul Islam, Neil Bruce, Rick Wildes, Konstantinos G Derpanis.</li>
                                                    <li>S 31: <b>Consistent Explanations by Contrastive Learning.</b> Vipin Pillai, Soroush Abbasi Koohpayegani, Ashley Ouligian, Dennis Fong, Hamed Pirsiavash.</li>
                                                    <li>S 35: <b>OccAM's Laser: Occlusion-based Attribution Maps for 3D Object Detectors on LiDAR Data.</b> David Schinagl, Georg Krispel, Horst Possegger, Peter M. Roth, Horst Bischof.</li>
                                                    <li>S 54: <b>B-cos Networks: Alignment is All We Need for Interpretability.</b> Moritz Böhle, Mario Fritz, Bernt Schiele.</li>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/KnMFDeMk9Us"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>01:30 PM - 02:00 PM: </b> Invited Talk - <b>Been Kim</b> (Google Brain)
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <b><i>Bridging the representation gap between humans and machines: unique challenges in vision</i></b>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <i>Machines and humans are likely to understand the world differently. They may share some of their representational spaces, but not all. Bridging the gap between the two representational spaces is the key for the future ML in both developing and understanding them. While there have been many advances in bridging this gap in vision, there are unique challenges that we should keep in mind as we go forward. On the other hand, vision may offer unique (perhaps the only) ways for us to understand machine concepts. I will discuss some of our recent work that will help us discuss these topics.</i>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/bKpxteeXSh4"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>02:00 PM - 02:30 PM: </b> Invited Talk - <b>Trevor Darrell</b> (UC Berkeley)
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <b><i>From Explainable to Advisable Learning</i></b>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <i>Explainable AI can augment or interpret existing AI models to allow them to be more transparent to human users and/or developers.  This can lead to greater acceptance and understanding of an AI agent's actions and capabilities.  XAI techniques also can lead to more performant systems, when an inverse explanation process is employed to provide advice to an AI agent.  In this talk I'll review recent progress towards explainable and advisable systems, including continual learning methods that learn to "remember for the right reasons", methods for dealing with heavily biased datasets based on attention advice, and recent work on language-based advice for visual classification.  By developing AI systems that can explain themselves, we find that we can use those same mechanisms to teach them to become better at what they need to do.</i>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/74TE4NRiuaQ"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>02:30 PM - 03:10 PM: </b> Coffee Break + Poster Session 2
                                            </Typography>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p27.pdf"><b><PDFIcon fontSize="inherit"/> P 27</b></Link>: <b>A Deeper Dive Into What Deep Spatiotemporal Networks Encode: Quantifying Static vs. Dynamic Information.</b> Matthew Kowal, Mennatullah Siam, Md Amirul Islam, Neil Bruce, Rick Wildes, Konstantinos G Derpanis.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p31.pdf"><b><PDFIcon fontSize="inherit"/> P 31</b></Link>: <b>Consistent Explanations by Contrastive Learning.</b> Vipin Pillai, Soroush Abbasi Koohpayegani, Ashley Ouligian, Dennis Fong, Hamed Pirsiavash.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p32.pdf"><b><PDFIcon fontSize="inherit"/> P 32</b></Link>: <b>Testing Explanation Algorithms on Transformers.</b> Mingqi Jiang, Saeed Khorram, Li Fuxin.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p33.pdf"><b><PDFIcon fontSize="inherit"/> P 33</b></Link>: <b>FD-CAM: Improving Faithfulness and Discriminability of Visual Explanation for CNNs.</b> Hui Li, Zihao Li, Rui Ma, Tieru Wu.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p34.pdf"><b><PDFIcon fontSize="inherit"/> P 34</b></Link>: <b>Exploring Concept Contribution Spatially: Hidden Layer Interpretation with Spatial Activation Concept Vector.</b>	Andong Wang, W.N. Lee.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p35.pdf"><b><PDFIcon fontSize="inherit"/> P 35</b></Link>: <b>OccAM's Laser: Occlusion-based Attribution Maps for 3D Object Detectors on LiDAR Data.</b> David Schinagl, Georg Krispel, Horst Possegger, Peter M. Roth, Horst Bischof.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p36.pdf"><b><PDFIcon fontSize="inherit"/> P 36</b></Link>: <b>Pose Tutor: An Explainable System for Correction in the Wild.</b>	Bhat Dittakavi, Bharathi Callepalli, Sai Vikas Desai, Divyagna Bavikadi, Soumi Chakraborty, Nishant S Reddy, Ayon Sharma, Vineeth N Balasubramanian.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p39.pdf"><b><PDFIcon fontSize="inherit"/> P 39</b></Link>: <b>CheXplaining in Style: Counterfactual Explanations for Chest X-rays.</b> Matan Atad, Vitalii Dmytrenko, Yitong Li, Xinyue Zhang, Matthias Keicher, Jan S. Kirschke, Bene Wiestler, Ashkan Khakzar, Nassir Navab.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p42.pdf"><b><PDFIcon fontSize="inherit"/> P 42</b></Link>: <b>Auditing Privacy Protection in Split Computing via Data-Free Model Inversion.</b>	Xin Dong, Hongxu Yin, Jose M. Alvarez, Jan Kautz, Pavlo Molchanov.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p44.pdf"><b><PDFIcon fontSize="inherit"/> P 44</b></Link>: <b>Towards ML Methods for Biodiversity: A Novel Wild Bee Dataset and Evaluations of XAI Methods for ML-Assisted Rare Species Annotations.</b> Teodor Chiaburu, Felix Bießmann, Frank Haußer.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p46.pdf"><b><PDFIcon fontSize="inherit"/> P 46</b></Link>: <b>Spatial-temporal Concept based Explanation of 3D ConvNets.</b> Ying Ji, Yu Wang, Kensaku Mori, Jien Kato.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p49.pdf"><b><PDFIcon fontSize="inherit"/> P 49</b></Link>: <b>Visual correspondence-based explanations improve human-AI team accuracy.</b> Anh Nguyen, GIANG NGUYEN, Mohammad Reza Taesiri.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p50.pdf"><b><PDFIcon fontSize="inherit"/> P 50</b></Link>: <b>Improving Visual Grounding by Encouraging Consistent Gradient-based Explanations.</b>	Ziyan Yang, Kushal Kafle, Franck Dernoncourt, Vicente Ordonez.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p52.pdf"><b><PDFIcon fontSize="inherit"/> P 52</b></Link>: <b>Gradient-weighted Class Activation Mapping for spatio temporal graph convolutional network.</b> PRATYUSHA DAS, ANTONIO ORTEGA.</li>
                                                    <li><Link target="_blank" rel="noopener" href="./assets/posters/p54.pdf"><b><PDFIcon fontSize="inherit"/> P 54</b></Link>: <b>B-cos Networks: Alignment is All We Need for Interpretability.</b> Moritz Böhle, Mario Fritz, Bernt Schiele.</li>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>03:10 PM - 03:40 PM: </b> Invited Talk - <b>Pradeep Ravikumar</b> (Carnegie Mellon University)
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <b><i>Objective criteria for explanations of machine learning models</i></b>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <i>Objective criteria to evaluate explanations of machine learning models are a critical ingredient in bringing greater rigor to the field of explainable artificial intelligence. We discuss three such criteria that each target different classes of explanations. In the first, targeted at real-valued feature importance explanations, we define a class of “infidelity” measures that capture how well the explanations match the ML models. We show that instances of such infidelity minimizing explanations correspond to many popular recently proposed explanations and, moreover, can be shown to satisfy well-known game-theoretic axiomatic properties. In the second, targeted to feature set explanations, we define a robustness analysis-based criterion and show that deriving explainable feature sets based on the robustness criterion yields more qualitatively impressive explanations. Lastly, for sample explanations, we provide a decomposition-based representer criterion that allows us to provide very scalable and compelling classes of sample-based explanations. Joint with Chih-Kuan Yeh.</i>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/lBiuROaEvnw"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>03:40 PM - 04:10 PM: </b> Invited Talk - <b>Serena Yeung</b> (Stanford)
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <b><i>Multimodal vision-language models towards explainable medical computer vision</i></b>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <i>The COVID-19 pandemic and needs that arose were a test for real-world application of computer vision models in healthcare. In this talk I will first discuss how computer vision models that were developed during the pandemic fared, including with respect to explainability. I will then discuss learning cross-modal representation spaces towards explainability, in the context of medical imaging. Finally I will discuss work on more generally investigating the structure of cross-modal representation spaces, in particular the phenomenon of modality gap, and its implications.</i>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/aPoDbpnpC7I"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>04:10 PM - 04:40 PM: </b> Invited Talk - <b>Hima Lakkaraju</b> (Harvard University)
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <b><i>Bringing Order to the Chaos: Probing the Disagreement Problem in XAI</i></b>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/8ptuYPxxRbk"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>04:40 PM - 04:50 PM: </b> Break
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>04:50 PM - 05:50 PM: </b> Panel Discussion
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <i>We would like to initiate discussions across industry and academia that work on building interpretable and trustworthy systems useful to the broader vision community.</i>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <i><b>Panelists: </b> Antonio Torralba, Yixin Wang, Rich Caruana, Pradeep Ravikumar, Hima Lakkaraju.</i>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <i><b>Discussion lead by: </b> Filip Radenovic, Deepti Ghardiyaram, Devi Parikh.</i>
                                                </ul>
                                            </Typography>

                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                <ul>
                                                    <Link target="_blank" rel="noopener" href="https://youtu.be/wGPNW_H_z5w"><b><VideoIcon fontSize="inherit"/> Video Recording</b></Link>
                                                </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body1" align="left">
                                                <b>05:50 PM - 06:00 PM: </b> Closing Remarks - <b>Filip Radenovic</b> (Meta AI)
                                            </Typography>
                                        </Grid>
                                    </Grid>


                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            id="call_for_papers"
                                            >
                                            Call for Papers
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        We welcome 2 page (including references) extended abstract submissions that showcase successful application of XAI methods on popular computer vision tasks,
                                        helping users better understand the results of a model.
                                        Moreover, we also welcome the submission of novel XAI for CV techniques, visualizations, and practical libraries.
                                        <br /> <br />
                                        Finally, we encourage submitting papers accepted in the CVPR 2022 main program, or in a relevant 2022 conference, in which case authors do not need to prepare extended abstract,
                                        but simply submit the camera-ready version of the accepted paper.
                                        <br /> <br />
                                        Note that, accepted extended abstracts will not be published in conjunction with the CVPR 2022 proceedings.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                            >
                                            <b>Timeline</b>
                                        </Typography>
                                        <br/>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        CMT portal opens on <b>Feb 2, 2022</b>. <br/>
                                        Submissions until <b>May 18, 2022</b>. <br/>
                                        Rolling acceptances from <b>May 1, 2022</b> until <b>May 20, 2022</b>. <br/>
                                        Spotlight / Poster decisions on <b>May 23, 2022</b>.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                            >
                                            <b>Submission instructions</b>
                                        </Typography>
                                        <br/>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        <b>Extended Abstracts: </b> All submissions should be in the anonymized CVPR 2022 format, and submissions will be subjected to the double-blind review process.
                                        Submitted extended abstracts will be reviewed by 1-2 reviewers, with the organizing team serving as a program committee.
                                        <br /><br />
                                        <b>Papers accepted in a relevant 2022 conference: </b> Authors of papers accepted in the CVPR 2022 main program, or in a relevant 2022 conference, are encouraged to submit the camera-ready version and present their work at our workshop.
                                        Organizing team will review the relevance of submitted papers to the XAI4CV workshop.
                                        <br /><br />
                                        <b>Submissions</b> can be done at <Link target="_blank" rel="noopener" href="https://cmt3.research.microsoft.com/XAI4CV2022"><b>https://cmt3.research.microsoft.com/XAI4CV2022</b></Link>.
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                            >
                                            <b>Attendance</b>
                                        </Typography>
                                        <br/>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        <b>Posters: </b> All accepted submissions will be invited to participate in an <b>in-person</b> poster session at our workshop.
                                        Additionally, the authors will be asked to upload their posters which will be hosted on our webpage.
                                        <br /><br />
                                        <b>Spotlights: </b> We will pick the best 6 papers from among the submissions / main conference to be presented as spotlights.
                                        Presentations can either be <b>in-person</b> or <b>pre-recorded</b>.
                                        <br /><br />
                                        Abiding by the <Link target="_blank" rel="noopener" href="https://cvpr2022.thecvf.com/registration"><b>CVPR guidelines</b></Link>, all accepted papers <b>must be presented by one of the authors</b>.
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="subtitle1"
                                            align="left"
                                            >
                                            <b>Topics</b>
                                        </Typography>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="body2"
                                            align="left"
                                        >
                                        <ul>
                                            <li> Building inherently interpretable CV models,</li>
                                            <li> Black-box CV model explanations visualized on test images and / or presented in a human interpretable language,</li>
                                            <li> Object classification / detection / segmentation model explanations,</li>
                                            <li> Action detection model explanations,</li>
                                            <li> VQA model explanations,</li>
                                            <li> Medical imaging model explanations,</li>
                                            <li> Human intervention and correctability in computer vision,</li>
                                            <li> Machine teaching via explanations,</li>
                                            <li> Constructing datasets for benchmarking explainability,</li>
                                            <li> Offline and online evaluation methods for explanations,</li>
                                            <li> Building practical libraries for explainable computer vision, and their integration with popular CV libraries.</li>
                                        </ul>
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Organizers
                                        </Typography>
                                    </Grid>

                                    <People/>

                                    <div className={classes.container}/>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography
                                            className={classes.sectionHeader}
                                            variant="h5"
                                            align="left"
                                            >
                                            Contact
                                        </Typography>
                                    </Grid>
                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={9} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="body2" align="left">
                                                Email: <Link href="mailto:filipradenovic@fb.com">filipradenovic@fb.com</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>

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
