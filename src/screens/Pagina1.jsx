import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Button } from 'react-native-paper'

const Pagina1 = ({navigation}) => {
    return (
        <ScrollView>
            <Text>Página 1</Text>

            <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Home')}>
                Home
            </Button>
            <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('p2')}>
                Página 2
            </Button>

        </ScrollView>
    )
}

export default Pagina1
