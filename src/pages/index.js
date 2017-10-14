import React from 'react'
import Link from 'gatsby-link'
import { Button, Grid, Col, Carousel } from 'react-bootstrap'

const IndexPage = () => (
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
      <Grid className={'about-1'}>
        <div>
          <h1 className={'about-heading'}><strong>A LITTLE ABOUT ME</strong></h1>
          <p className={'about-para'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
          <p className={'about-para'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
          <p className={'about-para'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
        </div>
        <img src={'../images/thumb-1.jpg'} />
      </Grid>
      <div style={{'width':'100%', }}>
        <img className={'about-1-img'} src={'../images/thumb-1.jpg'} />
      </div>
      <div className={'about-2'}>
        <Grid className={'child'}>
          <div className={'text-center'}>
            <h1 className={'about-heading'}><strong>MY MISSION</strong></h1>
            <p className={'about-para'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
          </div>
          <div>
            <Col xs={6} md={4}>
              <img className={'img-responsive'} src={'../images/thumb-2.jpg'} />
              <h4><strong>OVERSEAS PAKISTANIS RETURN</strong></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
            </Col>
            <Col xs={6} md={4}>
              <img className={'img-responsive'} src={'../images/thumb-3.jpg'} />
              <h4><strong>GAMECHANGER IN REALESTATE</strong></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
            </Col>
            <Col xs={6} md={4}>
              <img className={'img-responsive'} src={'../images/thumb-4.jpg'} />
              <h4><strong>AMAZON MALL</strong></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
            </Col>
          </div>
        </Grid>
      </div>
    </section>
    <section className={'contact'}>
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
    <section className={'text-center quotes'}>
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

export default IndexPage
