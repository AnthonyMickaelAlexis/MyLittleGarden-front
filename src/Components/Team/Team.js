import avatar from '../../assets/images/avatar.jpg';
import './Team.scss';

import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Team = () => (
    <div className="team">
        <Card className="card">
            <Image src={avatar} wrapped ui={false} />
            <Card.Content>
            <Card.Header>Bilel M.</Card.Header>
            <Card.Description>
                Product owner
            </Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Image src={avatar} wrapped ui={false} />
            <Card.Content>
            <Card.Header>Mickaël A.</Card.Header>
            <Card.Description>
                Product manager
            </Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Image src={avatar} wrapped ui={false} />
            <Card.Content>
            <Card.Header>Alexandra M.</Card.Header>
            <Card.Description>
                Lead developer front
            </Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Image src={avatar} wrapped ui={false} />
            <Card.Content>
            <Card.Header>Nordine H.</Card.Header>
            <Card.Description>
                Lead developer back
            </Card.Description>
            </Card.Content>
        </Card>

        <Card>
            <Image src={avatar} wrapped ui={false} />
            <Card.Content>
            <Card.Header>Pierre M.</Card.Header>
            <Card.Description>
                Git master
            </Card.Description>
            </Card.Content>
        </Card>
  </div>
)

export default Team