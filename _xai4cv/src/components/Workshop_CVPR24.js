import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import People from './People_CVPR24';
import Speakers from './Speakers_CVPR24';
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
                                            The 3rd Explainable AI for Computer Vision (XAI4CV) Workshop at CVPR 2024
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Recording:</b> <Link target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=o2YmzPXtAgc&ab_channel=ComputerVisionFoundationVideos">https://www.youtube.com/watch?v=o2YmzPXtAgc&ab_channel=ComputerVisionFoundationVideos</Link><br />
                                            <br />
                                            <b>Date:</b> Tuesday, June 18, 2024 <br />
                                            <b>Location:</b> Arch 2A, Seattle Convention Center, Seattle, WA, USA <br />
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
                                                <b>09:30 AM - 10:00 AM: </b> Invited Talk 1:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/people/bernt-schiele">Bernt Schiele</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li>
                                              <b>Inherent Interpretability for Deep Learning in Computer Vision</b>: Computer Vision has been revolutionized by Machine Learning and in particular Deep Learning. End-to-end trainable models often allow to achieve top performance across a wide range of computer vision tasks and settings. While recent progress is remarkable, current deep learning models are hard to interpret. In this talk discuss a new class of neural networks which are performant image classifiers with a high degree of inherent interpretability. In particular, these novel networks perform classification through a series of input-dependent linear transformations, that outperform existing attribution methods both quantitatively as well as qualitatively.
                                              </li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>10:00 AM - 10:30 AM: </b> Invited Talk 2:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://ml-research.github.io/people/kkersting/">Kristian Kersting</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li>
                                              <b>Reasonable Artificial Intelligence</b>: To understand how to get (generative) AI right, we need to know how it can go wrong but also make assumptions on what is “right” and “wrong.” Consequently, I will argue that we need both explainable & interpretable AI and illustrate this using several examples.
                                              </li>
                                            </ul>
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
                                              <li><b>P08</b>
                                                <Link target="_blank" rel="noopener" href="assets/papers2024/P08.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P08_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                                <b> Recent Trends, Challenges, and Limitations of Explainable AI in Remote Sensing.</b> Adrian Höhl*, Ivica Obadic*, Miguel-Ángel Fernández-Torres, Dario Oliveira, Xiao Xiang Zhu.</li>
                                              <li><b>P02</b>
                                                <Link target="_blank" rel="noopener" href="assets/papers2024/P02.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="https://youtu.be/R6WiiiCBbZY?si=Yjg9Yq9JYcviWjs-"> <VideoIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P02_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                                <b> Spatial Sensitive Grad-CAM++: Improved Visual Explanation for Object Detectors via Weighted Combination of Gradient Map.</b> Toshinori Yamauchi.</li>
                                              <li><b>P04</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P04.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P04_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                                <b> Exploring Explainability in Video Action Recognition.</b> Avinab Saha*, Shashank Gupta*, Sravan Kumar Ankireddy*, Karl Chahine, Joydeep Ghosh.</li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>11:00 AM - 12:00 PM: </b> Poster Session 1
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>12:00 PM - 01:30 PM: </b> Lunch Social
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>01:30 PM - 02:00 PM: </b> Invited Talk 3:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://eecs.uq.edu.au/profile/9477/tim-miller">Tim Miller</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li>
                                              <b>Human-Centered Counterfactual Explanations for Image Classification</b>: In this talk, I’ll discuss some foundations of explainable AI based on social science research, with a particular focus on contrastive and counterfactual explanations. I will discuss some work in applying these ideas to image classification, in which we use concept-based explainers to generate counterfactuals orders of magnitude more quickly than existing image counterfactuals explanations, while also improving the interpretability/understandability of these.
                                              </li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>02:00 PM - 02:30 PM: </b> Invited Talk 4:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://aims.cs.washington.edu/su-in-lee">Su-In Lee</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li>
                                              <b>Explainable AI for Clinical AI Auditing</b>
                                              </li>
                                            </ul>
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
                                              <li><b>P11</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P11.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P11_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                                <b> PURE: Turning Polysemantic Neurons Into Pure Features by Identifying Relevant Circuits.</b> Maximilian Dreyer, Erblina Purelku, Johanna Vielhaben, Wojciech Samek, Sebastian Lapuschkin.</li>
                                              <li><b>P13</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P13.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P13_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                                <b> Quantifying Explainability with Multi-Scale Gaussian Mixture Models.</b> Anthony Rhodes, Yali Bian, Ilke Demir.</li>
                                              <li><b>P05</b>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P05.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                                <Link target="_blank" rel="noopener" href="./assets/papers2024/P05_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                                <b> LVLM-Intrepret: An Interpretability Tool for Large Vision-Language Models.</b> Gabriela Ben Melech Stan*, Estelle Aflalo*, Raanan Yehezkel Rohekar*, Anahita Bhiwandiwalla*, Shao-Yen Tseng*, Matthew Lyle Olson*, Yaniv Gurwicz*, Chenfei Wu, Nan Duan, Vasudev Lal.</li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>03:00 PM - 04:00 PM: </b> Poster Session 2
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>04:00 PM - 04:30 PM: </b> Invited Talk 5:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://www.cs.ubc.ca/~lsigal/">Leonid Signal</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li>
                                              <b>Understanding, Control and Debiasing of Text-to-Image Models</b>: Text-to-image (TTI) diffusion models, such as Latent Diffusion, have emerged as a powerful class of generative models capable of generating stunning visuals conditioned on a text specification of the intended content. However, the quality of the textual prompts provided to these models ultimately determines the faithfulness of the generated content. Further, the “quality” of the prompt is both the function of the linguistic expression of the user’s desire and the (generally unknown) distribution over the text-image pairs which were used to train the model in the first place. To greatly simplify the task of “prompt engineering”, we propose an intuitive prompt inversion approach which allows optimization of the prompt that is most likely to lead to a given example visual. This enables much simpler generation and manipulation of image content by direct editing (or concatenation) of inverted text prompts. Secondarily, TTI models have also been shown to suffer from harmful biases, including exaggerated societal biases (e.g., gender, ethnicity), as well as incidental correlations that limit such model’s ability to generate more diverse imagery. I will subsequently talk about an approach we developed to study and quantify a broad spectrum of biases, for any TTI model and for any prompt, using counterfactual reasoning -- we call this framework TIBET. Our approach automatically identifies potential biases that might be relevant to the given prompt, and measures those biases. We show that our method is uniquely capable of explaining complex multi-dimensional biases through semantic concepts, as well as mitigating identified biases using existing approaches. This work is a collaboration between UBC, TTI-C, Carleton and UPenn.
                                              </li>
                                            </ul>
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container justify="flex-start">
                                        <Grid item xs={12} lg={12} className={classes.gridItem}>
                                            <Typography className={classes.SectionHeader} variant="subtitle1" align="left">
                                                <b>04:30 PM - 05:00 PM: </b> Invited Talk 6:
                                                &nbsp;<a target="_blank" rel="noopener" href="https://people.iith.ac.in/vineethnb/">Vineeth N Balasubramanian</a>
                                            </Typography>
                                            <Typography className={classes.sectionHeader} variant="body2" align="left">
                                            <ul>
                                              <li>
                                              <b>Moving beyond an Afterthought: Toward Learning via Explanations</b>: The growing demand for explainability  in AI and machine learning models has largely been addressed with post-hoc methods that explain a model trained a priori.  While these methods have been valuable, this talk advocates for a shift towards incorporating  explainability directly into the learning process. We will discuss our recent work towards this objective from two perspectives: (i) integrating interpretability during model training in popular vision models; and (ii) integrating and maintaining causal attributions using domain knowledge in neural network models during the training process.  Presented at prominent venues like CVPR and ICML, our work exemplifies our goal to advance explainable AI systems from prediction-based learning to explanation-based learning.
                                              </li>
                                            </ul>
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
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P01.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P01_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> ReciproCAM: Lightweight Gradient-free Class Activation Map for Post-hoc Explanations.</b> Seok-Yong Byun, Wonju Lee. </li>
                                          <li><b>P02</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P02.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/R6WiiiCBbZY?si=Yjg9Yq9JYcviWjs-"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P02_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Spatial Sensitive Grad-CAM++: Improved Visual Explanation for Object Detectors via Weighted Combination of Gradient Map.</b> Toshinori Yamauchi.</li>
                                          <li><b>P03</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P03.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/CBXNTmYLjJc?si=8Ij9lmzEZedNDANr"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P03_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Allowing Humans to Interactively Guide Machines Where to Look Does Not Always Improve Human-AI Team’s Classification Accuracy.</b> Giang Nguyen*, Mohammad Reza Taesiri*, Sunnie S. Y. Kim, Anh Totti Nguyen.</li>
                                          <li><b>P04</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P04.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P04_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Exploring Explainability in Video Action Recognition.</b> Avinab Saha*, Shashank Gupta*, Sravan Kumar Ankireddy*, Karl Chahine, Joydeep Ghosh.</li>
                                          <li><b>P05</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P05.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P05_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> LVLM-Intrepret: An Interpretability Tool for Large Vision-Language Models.</b> Gabriela Ben Melech Stan*, Estelle Aflalo*, Raanan Yehezkel Rohekar*, Anahita Bhiwandiwalla*, Shao-Yen Tseng*, Matthew Lyle Olson*, Yaniv Gurwicz*, Chenfei Wu, Nan Duan, Vasudev Lal.</li>
                                          <li><b>P06</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P06.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P06_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Interactive Visual Feature Search.</b> Devon Ulrich, Ruth Fong.</li>
                                          <li><b>P07</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P07.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/mCckSgctoCY?si=MP4GQBM_lohCwzQS"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P07_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Explaining Models Relating Objects and Privacy.</b> Alessio Xompero, Myriam Bontonou, Jean-Michel Arbona, Emmanouil Benetos, Andrea Cavallaro.</li>
                                          <li><b>P08</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P08.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P08_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Recent Trends, Challenges, and Limitations of Explainable AI in Remote Sensing.</b> Adrian Höhl*, Ivica Obadic*, Miguel-Ángel Fernández-Torres, Dario Oliveira, Xiao Xiang Zhu.</li>
                                          <li><b>P09</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P09.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/bEZp089HHAg?si=yeWG9AvB7OAlmzXs"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P09_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> CA-Stream: Attention-based Pooling for Interpretable Image Recognition.</b> Felipe Torres, Hanwei Zhang, Ronan Sicre, Stéphane Ayache, Yannis Avrithis.</li>
                                          <li><b>P10</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P10.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/PZpOPtXDDHo?si=XP2pIBfDGb8PGXI4"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P10_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> SUNY: A Visual Interpretation Framework for Convolutional Neural Networks from a Necessary and Sufficient Perspective.</b> Xiwei Xuan, Ziquan Deng, Hsuan-Tien Lin, Zhaodan Kong, Kwan-Liu Ma.</li>
                                          <li><b>P11</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P11.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P11_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> PURE: Turning Polysemantic Neurons Into Pure Features by Identifying Relevant Circuits.</b> Maximilian Dreyer, Erblina Purelku, Johanna Vielhaben, Wojciech Samek, Sebastian Lapuschkin.</li>
                                          <li><b>P12</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P12.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="https://youtu.be/Uz21yZ04gfE?si=SOh-uYizbjqvB5jl"> <VideoIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P12_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                          <b> Semantic Approach to Quantifying the Consistency of Diffusion Model Image Generation.</b> Brinnae Bent.</li>
                                          <li><b>P13</b>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P13.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                            <Link target="_blank" rel="noopener" href="./assets/papers2024/P13_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                            <b> Quantifying Explainability with Multi-Scale Gaussian Mixture Models.</b> Anthony Rhodes, Yali Bian, Ilke Demir.</li>
                                        </ul>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Non-proceedings Track</b>
                                        </Typography>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        <ul>
                                        <li><b>P14</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P14.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P14_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Identifying Spurious Correlations using Counterfactual Alignment.</b> Joseph Paul Cohen, Louis Blankemeier, Akshay Chaudhari.</li>
                                        <li><b>P15</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P15.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P15_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Visual Concept Connectome (VCC): Open World Concept Discovery and their Interlayer Connections in Deep Models.</b> Matthew Kowal, Richard P. Wildes, Konstantinos G. Derpanis.</li>
                                        <li><b>P16</b>
                                        <b> Utility-Fairness Trade-Offs and How to Find Them.</b> </li>
                                        <li><b>P17</b>
                                        <b> FairerCLIP: Debiasing Zero-Shot Predictions of CLIP in RKHSs.</b> </li>
                                        <li><b>P18</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P18.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://youtu.be/hxR8nVGLbMU?si=qke2fa35arX1032A"> <VideoIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P18_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Connect, Collapse, Corrupt: Learning Cross-Modal Tasks with Uni-Modal Data.</b> Yuhui Zhang*, Elaine Sui*, Serena Yeung-Levy.</li>
                                        <li><b>P19</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P19.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P19_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> Describe-and-Dissect: Interpreting Neurons in Vision Networks with Language Models.</b> Nicholas Bai*, Rahul Ajay Iyer*, Tuomas Oikarinen, Tsui-Wei Weng.</li>
                                        <li><b>P20</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P20.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P20_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> An Image Patch Row-Column Ranking Method Using the Feature Accumulation Matrix to Explain Decisions of a Convolutional Neural Network.</b> Luna M. Zhang.</li>
                                        <li><b>P21</b>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P21.pdf"> <PDFIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="https://youtu.be/ewYqahy-Pso?si=ls0cpBVo2M238xDJ"> <VideoIcon fontSize="inherit"/></Link>
                                          <Link target="_blank" rel="noopener" href="./assets/papers2024/P21_poster.pdf"> <PhotoSizeSelectActualIcon fontSize="inherit"/></Link>
                                        <b> DiG-IN: Diffusion Guidance for Investigating Networks - Uncovering Classifier Differences, Neuron Visualisations, and Visual Counterfactual Explanations.</b> Maximilian Augustin, Yannic Neuhaus, Matthias Hein.</li>
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
                                            Aditya Chattopadhyay, Aditya Chinchure, Amin Parchami-Araghi, Angelos Nalmpantis,
                                            Anirban Sarkar, Anmol Kalia, Chenyang Zhao, Chirag Shukla, Deepti Ghadiyaram, Dhruv Srikanth, Eunji Kim,
                                            Gaurav Bhatt, Hubert Baniecki, Indu	Panigrahi, Jawad Tayyub, John Gkountouras, Jonathan Donnelly,
                                            Joseph Paul Cohen, Julien Colin, Katelyn Morrison, Kwan Ho Ryan Chan, Lan Wang, Laura O'Mahony, Lenka Tětková,
                                            Manxi Lin, Matthew Kowal, Muhammad Sarmad, Navdeeppal Singh, Nhi Pham, Nina Weng,
                                            Piotr Komorowski, Pushkar Shukla, Robin Hesse, Romain	Xu-Darme, Sadaf Gulshad, Satyapriya Krishna,
                                            Sebastian	Bordt, Simone Schaub-Meyer, Stefan Kolek, Sukrut Rao, Sunnie S. Y. Kim, Sweta Mahajan, Syed Nouman Hasany,
                                            Teresa Dorszewski, Tobias Labarta, Vikram V. Ramaswamy, Vipin Pillai.
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
                                                Email: <Link href="mailto:xai4cv2024@googlegroups.com">xai4cv2024@googlegroups.com</Link>
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
                                            <b>Proceedings track:</b> We welcome <b>max 4-page</b> submissions of papers and demos. Submissions accepted to this track <b>will be published</b> in the CVPR workshop proceedings.
                                          </li>
                                          <li>
                                            <b>Non-proceedings track:</b> We welcome <b>max 2-page</b> submissions (commonly referred to as "extended abstracts") of papers and demos. For the non-proceedings track, we encourage submissions of published or accepted work (e.g., papers and demos accepted to the CVPR main program). Submissions accepted to this track <b>will <i>not</i> be published</b> in the CVPR workshop proceedings.
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
                                        <s>Submission deadline: <b>March 17, 2024 (5pm PT)</b></s> <br/>
                                        <s>Notification to authors (accept as spotlight, accept as poster, or reject): <b>April 6, 2024</b></s> <br/>
                                        <s>Camera-ready hard deadline: <b>April 14, 2024 (11:59pm PT)</b></s>
                                        <br/>
                                        <br/>
                                        <b>Non-proceedings track</b> <br/>
                                        <s>Submissions deadline (to be considered for spotlights): <b>March 17, 2024 (5pm PT)</b></s> <br/>
                                        <s>Notification to authors (accept as spotlight, accept as poster, or reject): <b>April 6, 2024</b></s> <br/>
                                        <s>Rolling submissions and notifications (accept as poster or reject): <b>Until April 22, 2024</b></s> <br/>
                                        <s>Camera-ready deadline: <b>May 8, 2024 (5pm PT)</b> <b>June 14, 2024 (5pm PT)</b></s>
                                        </Typography>
                                    </Grid>


                                    <Grid item xs={12} className={classes.gridItem}>
                                        <Typography className={classes.sectionHeader} variant="subtitle1" align="left">
                                            <b>Submission instructions</b>
                                        </Typography>
                                        <br/>
                                        <Typography className={classes.sectionHeader} variant="body2" align="left">
                                        All submissions should be in the <b>anonymized</b> CVPR 2024 format available at <a target="_blank" rel="noopener" href="https://cvpr.thecvf.com/Conferences/2024/AuthorGuidelines"><b>https://cvpr.thecvf.com/Conferences/2024/AuthorGuidelines</b></a>.
                                        <br/>
                                        The page limits <b>do not</b> include references.
                                        <br/>
                                        You may optionally upload supplementary material. Reviewers will be encouraged to look at it, but are not obligated to do so.
                                        <br/>
                                        Submissions can be done at <a target="_blank" rel="noopener" href="https://cmt3.research.microsoft.com/XAI4CV2024"><b>https://cmt3.research.microsoft.com/XAI4CV2024</b></a>.
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
                                        Abiding by the <a target="_blank" rel="noopener" href="https://cvpr.thecvf.com/Conferences/2024/Pricing2"><b>CVPR guidelines</b></a>, all accepted papers <b>must be presented by one of the authors</b>.
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
