import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

// images
import reactImage from 'Images/react.png';
import reactBigImage from 'Images/react-heavy.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>React-Redux | Home page</title>
      </Helmet>

      <h1>Home page</h1>
      <p>
        <NavLink to="/login">Login page</NavLink>
      </p>
      <p>
        <NavLink to="/page-1">Page 1</NavLink>
      </p>
      <p>
        <NavLink to="/page-2">Page 2</NavLink>
      </p>
      <p>
        <NavLink to="/123">404 page</NavLink>
      </p>
      <div className="spacer" />
      <h2 className="text-center">Bootstrap card-component</h2>

      <Row>
        <Col>
          <h4>Bootstrap cols (.col)</h4>

          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <h4>Bootstrap cols (.col)</h4>

          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <h4>Bootstrap cols (.col)</h4>

          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <hr />

      <div className="load-images">
        <h2 className="text-center">Load images</h2>

        <div className="load-images__item">
          <h4>Load image by img tag with <u>url-loader (base-64)</u></h4>
          <img src={reactImage} alt="reactImage" width="100" height="auto" />
        </div>

        <div className="load-images__item">
          <h4>Load image by css-background with <u>url-loader (base-64)</u></h4>
          <div className="load-image"></div>
        </div>

        <div className="load-images__item">
          <h4>Load heavy image by img tag with <u>file-loader</u></h4>
          <img src={reactBigImage} alt="reactImage" width="100%" height="auto" />
        </div>

        <div className="load-images__item">
          <h4>Load heavy image by css-background with <u>file-loader</u></h4>
          <div className="load-image2"></div>
        </div>
      </div>

      <hr />

      <div className="custom-font">
        <h2 className="text-center">Load custom fonts</h2>
        <h4 className="roboto">Roboto</h4>
        <p className="roboto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates odio corporis est excepturi consequatur facilis assumenda nesciunt saepe. Dolorem sunt perferendis iste omnis veniam, ut temporibus tempore animi quod.</p>

        <h4 className="consolas">Consolas</h4>
        <p className="consolas">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eos ducimus cupiditate illo vero sit quas dignissimos doloribus aperiam error, inventore nesciunt voluptates tempore, aut excepturi facilis. Numquam, excepturi maxime.</p>

        <h4 className="indie-flower">Indie flower</h4>
        <p className="indie-flower">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis molestias velit tempora aliquid atque veniam quidem. Doloremque, aliquam alias repudiandae veniam hic eveniet veritatis, est, sit magnam nam adipisci esse.</p>
      </div>
    </div>
  );
}

export default Home;
