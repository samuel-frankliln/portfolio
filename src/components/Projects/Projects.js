import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import chatify from '../../Assets/Projects/chatify.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Water Depth Predictor'
              description='Water Depth Estimation Using Sentinel-2 Satellites for Shallow Water Directed the research and implementation of advanced algorithm’s, integrating SVMs and Deep Neural Networks to estimate shallow water depths from Sentinel-2 Satellite image bands achieving more than 90% accuracy '
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='LeetCode Problems'
              description='Here is a collection of LeetCode Problems.'
              ghLink='https://github.com/samuel-frankliln/leetcode-solutions'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Covid and Pneumonia Detection using X-ray Image and CNN'
              description='COVID  and Pneumonia detection model developed on Tensorflow and composed on Django framework and Flask backend with 98% accuracy.'
              ghLink='https://github.com/samuel-frankliln/covid'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Data Analysis using Kafka and AWS Services'
              description='It a real time simulation of stock market using. kafka and aws services'
              ghLink='https://github.com/samuel-frankliln/Data-Analysis-kafka-aws'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='MNIST GAN with Tensorflow and Keras'
              description='GANs to create handwritten digits using MNIST Dataset'
              ghLink='https://github.com/samuel-frankliln/MNIST_GAN'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='langchain -ask and answer'
              description='AskPDF is a Streamlit application that allows you to upload a PDF, extract its text, and ask questions about the content using OpenAIs GPT-3.5-turbo model.'
              ghLink='https://github.com/samuel-frankliln/langchain-ask-pdf'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Portfolio Website'
              description='Portfolio created using React and Bootstrap'
              ghLink='https://github.com/samuel-frankliln/Portfolio'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Connect 4 Game with a twist'
              description='Its a connect 4 game with a twist,instead of making horizontal ,vertical or diagonal lines of four our objective here is to make sqaures.'
              ghLink='https://github.com/samuel-frankliln/connect4-square'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
