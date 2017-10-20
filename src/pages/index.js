import React from 'react'
import Link from 'gatsby-link'
import { Button, Grid, Col, Carousel, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default class IndexPage extends React.Component {
  render () {
    var settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true
    }
    return (
      <div className={'main'}>
        <section className={'intro'} style={{'background-image':'url(../images/background.jpg)', 'background-size':'auto 100vh', 'background-position':'bottom', }}>
          <div className={'intro-content container-fluid'}>
            <img className={'shafiq-img'} src={'../images/shafiq.png'} />
            <div className={'intro-frame'}>
              <h1 className={'text-right'}>Pakistan's Leading <br /> Real Estate <br /> Investment <br /> Advisor</h1>
              <a className={'text-right'}><strong>L</strong>earn-<strong>M</strong>ore</a>
              <img src={'../images/frame.png'} />
            </div>
            {/*<Link to="/page-2/">Go to page 2</Link>*/}
          </div>
        </section>
        <section className={'about'}>
          <Grid id={'about'} className={'about-1'}>
            <div>
              <h1 className={'about-heading'}><strong>A LITTLE ABOUT ME</strong></h1>
              <p className={'about-para'}>A prestigious and notable graduate from Cambridge University, Shafiq Akbar has an enviable record of completing outstanding mega projects in the field of real estate development. He started his career at Hyundai engineering and construction 19 years ago and worked on several momentous projects including Chashma Hydro-Power Project and Pirkoh Gas Compression Power Plant. He has also worked with one of the top realtors Douglas Allen and it's parent company Arun Estates. Mr. Akbar, procured over a decade's worth of experience in United Kingdom during which he established himself as a distinguished purveyor and a polished executive always yearning to return to Pakistan. After his return to Pakistan he has done a monumental work in the field of Real Estate.</p>
              <p className={'about-para'}>He is currently the founding Cheif Executive of Graana group of companies comprising Amazon Mall, Agency21, Graana Artec, Hadid Builders & Developers and Brando Marketing. </p>
            </div>
            <img src={'../images/thumb-1.jpg'} />
          </Grid>
          <div style={{'width':'100%', }}>
            <img className={'about-1-img'} src={'../images/thumb-1.jpg'} />
          </div>
          <div id={'mission'} className={'about-2'}>
            <Grid className={'child'}>
              <Row className={'text-center'}>
                <h1 className={'about-heading'}><strong>MY MISSION</strong></h1>
                <p className={'about-para'}>He preserved the cause of promoting a good image of Pakistan during his time abroad and is making tireless efforts to revolutionize the image of real estate in Pakistan.</p>
              </Row>
              <Row>
                <Col xs={6} md={4}>
                  <img className={'img-responsive'} src={'../images/thumb-2.png'} />
                  <h4><strong>Association of Overseas Pakistanis</strong></h4>
                  <p>This country has so much to offer in terms of potential not just in investment but in every other sector, all we need is a proper direction .Shafiq Akbar firmly believes that even if 1% of overseas Pakistanis return home with their investments, they can change the landscape of the country.</p>
                </Col>
                <Col xs={6} md={4}>
                  <img className={'img-responsive'} src={'../images/middle-thumb-2.jpg'} />
                  <h4><strong>Architecture and Real Estate Investment</strong></h4>
                  <p>Shafiq Akbar always had the vision of building the new. Emphasized on effective policy making and its implementation.</p>
                </Col>
                <Col xs={6} md={4}>
                  <img className={'img-responsive'} src={'../images/right-thumb.jpg'} />
                  <h4><strong>Public Policy Institute</strong></h4>
                  <p>Situated in the emerging commercial hub of Rawalpindi and Islamabad on the Grand Trunk Road, upsurges Amazon. The Mall is envisioned to provide secure, serene and stimulating environment to the promising as well as booming entrepreneurs.</p>
                </Col>
              </Row>
            </Grid>
          </div>
        </section>
        <section className={'logos'}>
          <Grid>
            <Slider {...settings} style={{'margin-top':'20px', 'margin-bottom':'20px'}}>
              <div><img className={'img-responsive'} src={'../images/AGENCY.jpg'} style={{'height':'100px', 'margin-top':'20px', 'margin-bottom':'20px'}} /></div>
              <div><img className={'img-responsive'} src={'../images/123.jpg'} style={{'height':'100px', 'margin-top':'20px', 'margin-bottom':'20px'}} /></div>
              <div><img className={'img-responsive'} src={'../images/ARTECH.jpg'} style={{'height':'100px','margin-top':'20px', 'margin-bottom':'20px' }} /></div>
              <div><img className={'img-responsive'} src={'../images/brando.jpg'} style={{'height':'100px', 'margin-top':'20px', 'margin-bottom':'20px'}} /></div>
              <div><img className={'img-responsive'} src={'../images/NEW1.png'} style={{'height':'100px','margin-top':'20px', 'margin-bottom':'20px' }} /></div>
              <div><img className={'img-responsive'} src={'../images/NEW2.png'} style={{'height':'100px','margin-top':'20px', 'margin-bottom':'20px' }} /></div>
              <div><img className={'img-responsive'} src={'../images/NEW3.jpg'} style={{'height':'100px','margin-top':'20px', 'margin-bottom':'20px' }} /></div>
              <div><img className={'img-responsive'} src={'../images/NEW4.png'} style={{'height':'100px', 'margin-top':'20px', 'margin-bottom':'20px'}} /></div>
            </Slider>
            {/*<Row style={{'padding-top':'5vh', 'margin-left':'auto', 'margin-right':'auto', }}>
              <Col xs={4} md={3}>

              </Col>
              <Col xs={4} md={3}>

              </Col>
              <Col xs={4} md={3}>

              </C pull-leftol>
              <Col xs={4} md={3}>

              </Col>
            </Row>
            <Row style={{'padding-top':'5vh', 'padding-bottom':'5vh', 'margin-left':'auto', 'margin-right':'auto', }}>
              <Col xs={4} md={3}>

              </Col>
              <Col xs={4} md={3}>

              </Col>
              <Col xs={4} md={3}>

              </Col>
              <Col xs={4} md={3}>

              </Col>
            </Row>*/}
          </Grid>
        </section>
        <section id={'contact'} className={'contact'}>
          <Grid>
            <div className={'contact-heading'}>
              <h2 className={'ch-1'} style={{'color':'white', }}><strong>Looking for a First-Class<br /> Real Estate <span style={{'color':'#55ad32', }}>Investment Advisor</span></strong></h2>
              <h2 className={'ch-2'} style={{'color':'white', 'font-size':'28px', }}><strong>Looking for a<br /> First-Class<br /> Real Estate <span style={{'color':'#55ad32', }}>Investment Advisor</span></strong></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet.</p>
              <button className={'contact-btn'}><strong>Contact Now</strong></button>
            </div>
            <img src={'images/contact-thumb.jpg'} />
          </Grid>
        </section>
        <section id={'quotes'} className={'text-center quotes'}>
          <Grid>
            <img src={'../images/quote-logo.png'} style={{'width':'50px', 'margin-top':'90px', 'margin-bottom':'70px', }} />
            <div style={{'margin-top':'20px', 'margin-bottom':'150px',}}>
              <Carousel interval={3500}>
                <Carousel.Item>
                  <blockquote className={"twitter-tweet"}><p lang={"en"} dir={"ltr"}><i>There is no such thing as perfect decision.Every decision you make is perfected with time. <a href={"https://twitter.com/hashtag/Entrepreneur?src=hash"} target={'_blank'}>&#35;Entrepreneur</a></i></p></blockquote>
                </Carousel.Item>
                <Carousel.Item>
                  <blockquote className={"twitter-tweet"}><p lang={"en"} dir={"ltr"}><i>I owe my humility to my roots and to the way I was raised in my homeland. <a href={"https://twitter.com/hashtag/PakistanZindabad?src=hash&amp;ref_src=twsrc%5Etfw"} target={'_blank'}>&#35;PakistanZindabad</a> <a href={"https://twitter.com/hashtag/RootsDay?src=hash&amp;ref_src=twsrc%5Etfw"} target={'_blank'}>&#35;RootsDay</a></i></p></blockquote>
                </Carousel.Item>
              </Carousel>
              <p style={{'color':'#103166', 'margin-top':'30px', }}><strong>&mdash; Shafiq Akbar <a href={"https://twitter.com/shafiqakbar1/status/812265970999951360?ref_src=twsrc%5Etfw"} target={'_blank'}>&#40;&#64;shafiqakbar1&#41;</a> &mdash;</strong></p>
            </div>
            <script async src={"//platform.twitter.com/widgets.js"} charset={"utf-8"}></script>
          </Grid>
        </section>
      </div>
    )
  }
}
