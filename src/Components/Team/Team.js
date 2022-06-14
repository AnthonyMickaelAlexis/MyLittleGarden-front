import avatar from '../../assets/images/avatar.jpg';
import './Team.scss';

import React from 'react'
import { Card, Header, Image } from 'semantic-ui-react';
import Navigation from '../Navigation/Navigation';

const Team = () => (
    <div className="team">
        <Navigation/>
        <Header/>
        <div className="card">
             <Card>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Bilel M.</Card.Header>
                <Card.Description>
                    Product owner
                </Card.Description>
                </Card.Content>
            </Card>
        </div>
       
        <div className="card">
            <Card>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Mickaël A.</Card.Header>
                <Card.Description>
                    Product manager
                </Card.Description>
                </Card.Content>
            </Card>
        </div>

        <div className="card">
            <Card>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Alexandra M.</Card.Header>
                <Card.Description>
                    Lead developer front
                </Card.Description>
                </Card.Content>
            </Card>
        </div>

        <div className="card">
            <Card>
                <Image src={avatar} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Nordine H.</Card.Header>
                <Card.Description>
                    Lead developer back
                </Card.Description>
                </Card.Content>
            </Card>
        </div>

        <div className="card">
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
        
  </div>
)

export default Team