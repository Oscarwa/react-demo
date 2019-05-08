import React, { Component } from 'react';
import { Card, Image, Icon, Button, Placeholder } from 'semantic-ui-react';

export default class Item extends Component {
    render() {
        const {name, username, email, website} = this.props.item;
        const {loading} = this.props;
        const imgSrc = `https://via.placeholder.com/300/0000FF/808080?text=${username}`;
        return (
                <Card>
                    {loading ? (
                        <Placeholder>
                            <Placeholder.Image square />
                        </Placeholder>
                    ) : (
                        <Image src={imgSrc} wrapped />
                    )}
                    <Card.Content> 
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>{email}</Card.Meta>
                        <Card.Description>{website}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button icon>
                            <Icon name="delete" />
                        </Button>
                        <Button icon>
                            <Icon name="search" />
                        </Button>
                        <Button icon>
                            <Icon name="edit" />
                        </Button>
                    </Card.Content>
                </Card>
        )
    }
}
