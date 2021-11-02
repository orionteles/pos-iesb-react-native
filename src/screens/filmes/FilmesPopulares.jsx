import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { Card, Title } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = ({navigation}) => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiFilmes.get(`/movie/popular?language=pt-BR`).then(resultado => {
            setFilmes(resultado.data.results)
        })
    }, [])

    return (
        <ScrollView margin={10}>
            {filmes.map(filme => (
                <Card key={filme.id} marginBottom={10} onPress={() => navigation.push('filmes/detalhes', {id: filme.id})}>
                    <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
                    <Card.Content>
                        <Title>{filme.title}</Title>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    )
}

export default FilmesPopulares
