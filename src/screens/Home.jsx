import React from 'react'
import { Text, ScrollView } from 'react-native';
import { Avatar, Button, Card, Divider, List, Paragraph, Title } from 'react-native-paper';

const Home = ({navigation}) => {

    return (
        <ScrollView margin={10}>
            <Text>Orion</Text>

            <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('p1')}>
                Página 1
            </Button>
            <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('p2')}>
                Página 2
            </Button>

            <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('filmes/populares')}>
                Filmes
            </Button>

            <Card marginTop={10}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Title>Card title</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" onPress={() => console.log('Detalhar')}>Detalhar</Button>
                </Card.Actions>
            </Card>

            <List.Item title="First Item" description="Item description" left={props => <List.Icon {...props} icon="home" />} />
            <Divider />
            <List.Item title="First Item" description="Item description" left={props => <List.Icon {...props} icon="heart" />} />
            <Divider />
            <List.Item title="First Item" description="Item description" left={props => <List.Icon {...props} icon="folder" />} />
            <Divider />
            <List.Item title="First Item" description="Item description" left={props => <List.Icon {...props} icon="camera" />} />


        </ScrollView>
    )
}

export default Home
