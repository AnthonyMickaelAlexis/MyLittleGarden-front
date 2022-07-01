import avatar from '../../assets/images/avatar.jpg';
import alexandra from '../../assets/ImagesTeam/Alexandra.png';
import bilel from '../../assets/ImagesTeam/Bilell.png';
import micka from '../../assets/ImagesTeam/Micka.png';
import nordine from '../../assets/ImagesTeam/Nordine.png';
import pierre from '../../assets/ImagesTeam/Pierre.png';

import './Team.scss';
import React from 'react'
import { Card, Image } from 'semantic-ui-react';


const Team = () => (
    
    <div className="team">
        
        <div className="card">
             <Card>
                <Image src={bilel} wrapped ui={false} />
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
                <Image src={micka} wrapped ui={false} />
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
                <Image src={alexandra} wrapped ui={false} />
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
                <Image src={nordine} wrapped ui={false} />
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
                <Image src={pierre} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Pierre M.</Card.Header>
                <Card.Description>
                    Git master
                </Card.Description>
                </Card.Content>
        </Card>
        </div>
        </div>
//   </div>
)

export default Team;