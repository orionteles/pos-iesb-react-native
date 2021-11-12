import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Avatar, Button, Card, Divider, List, Paragraph, Title } from 'react-native-paper'
import ImagemCapa from '../../components/ImagemCapa'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = ({ navigation, route }) => {

    const [filme, setFilme] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        const id = route.params.id

        apiFilmes.get(`/movie/${id}?language=pt-BR`).then(resultado => {
            setFilme(resultado.data)
        })

        apiFilmes.get(`/movie/${id}/credits?language=pt-BR`).then(resultado => {
            setAtores(resultado.data.cast)
        })

    }, [])

    const imagemAtor = (foto) => {
        return foto ?
            <Avatar.Image size={50} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + foto }} /> :
            <Avatar.Icon size={50} icon="account" />
    }

    return (
        <ScrollView>
            {filme.id &&
                <>
                    <Card>
                        <ImagemCapa foto={filme.poster_path} tamanho={600} />
                        <Title>{filme.title}</Title>
                        <Paragraph>{filme.overview}</Paragraph>
                        <Paragraph>Data de Lançamento: {filme.release_date}</Paragraph>
                    </Card>

                    <Button 
                        margin={10} 
                        icon="home" 
                        mode="contained" 
                        onPress={() => navigation.push('filmes/imagens', {id: filme.id})}
                    >
                        Ver Imagens
                    </Button>

                    <Text marginTop={20} style={{ fontSize: 20, textAlign: 'center', color: 'red' }}>Atores</Text>
                    {atores.map(ator => (
                        <View key={ator.id}>
                            <List.Item onPress={() => navigation.push('atores/detalhes', { id: ator.id })}
                                title={ator.character}
                                description={ator.name}
                                left={() => imagemAtor(ator.profile_path)}
                            />
                            <Divider />
                        </View>
                    ))}
                </>
            }

        </ScrollView>
    )
}

export default FilmesDetalhes
