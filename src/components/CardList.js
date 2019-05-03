import React from 'react'
import CardComponent from './CardComponent'
import { Row, Col } from 'reactstrap'

const CardList = ({peoples}) => {
  console.log({peoples})
  return (
    <div>
        <Row>
        {
            peoples.map((people, i) => {
                return(
                <Col sm="4" key={i}>
                  <CardComponent
                    name={people.name}
                    genre={people.gender}
                    hairColor={people.hair_color}
                    height={people.height}
                    />
                </Col>
                )        
            })
        }
        </Row>
    </div>
  )
}

export default CardList
