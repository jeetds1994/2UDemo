import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const News = () => {
  return(
    <div id="newscontainer">
      <h1 id="newshead">News</h1>
      <img src="http://cdn3.2u.com/content/02459f3ec6324cf2b0cfec54775964d3/2u-getsmarter-news.jpg" alt="news"/>

      <h1 id="newsmessage">2U Closes Acquisition of GetSmarter</h1>

      <div className="ui three column grid">
        <div className="row">
            <div className="column three wide"></div>
            <div className="column four wide" id="column1home">
            <Card>
                <Image src='https://cdn0.2u.com/content/953df09047ab41039aa7528eebdc06f6/harvard-annoucement.jpg' />
                <Card.Content>
                  <Card.Description>First cohort of students will begin in March 2018.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="https://2u.com/about/press/harvard-partner-with-2u-business-analytics-program/">2U Announces Harvard Business Analytics Program</a>
                </Card.Content>
              </Card>
            </div>
            <div className="column four wide" id="column1home">
            <Card>
                <Image src='https://cdn0.2u.com/content/35303f04ffa74bae80715778ac9308ef/christensen-institute.png' />
                <Card.Content extra>
                  <a href="https://2u.com/2016-annual-report/">2U Releases 2016 Annual Report</a>
                </Card.Content>
              </Card>
            </div>
            <div className="column four wide" id="column1home">
            <Card>
                <Image src='https://cdn0.2u.com/content/11609488752245b38a109f5d9c820650/annual-report.jpg' />
                <Card.Content>
                  <Card.Description>The Christensen Institute presents five examples of institutions that are successfully innovating in higher education including a case study on Simmons Colleges partnership with 2U.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href="http://www.christenseninstitute.org/publications/college-transformed/">College transformed: Five Institutions Leading the Charge in Innovation&nbsp;<span class="icon icon--open" aria-hidden="true"></span><span class="u--sr-only">External link</span>&nbsp;</a>
                </Card.Content>
              </Card>
            </div>
        </div>
      </div>
    </div>
  )
}

export default News
