import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

const CardComponent = ({name,genre, height, hairColor}) => {
  return (
    <div>
      <Card>
        <CardBody>
        <CardTitle className="text-primary">{name}</CardTitle>
        <CardText>Gender: {genre}</CardText>
        <CardText>Height: {height}</CardText>
        <CardText>Hair Color: {hairColor}</CardText>
        </CardBody>
      </Card>
    </div>

  )
}

export default CardComponent
