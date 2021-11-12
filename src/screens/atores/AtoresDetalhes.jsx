import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { Row, Column as Col } from 'react-native-responsive-grid'
import ImagemCapa from '../../components/ImagemCapa'

const AtoresDetalhes = ({ navigation, route }) => {

    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const id = route.params.id

        apiFilmes.get(`/person/${id}?language=pt-BR`).then(resultado => {
            setAtor(resultado.data)
        })

        apiFilmes.get(`/person/${id}/movie_credits?language=pt-BR`).then(resultado => {
            setFilmes(resultado.data.cast)
        })
    }, [])

    return (
        <ScrollView>
            {ator.id &&
                <>
                    <Image style={{ height: 500 }} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }} />

                    <Title>{ator.name}</Title>
                    <Paragraph>{ator.biography}</Paragraph>
                    <Paragraph>Data de Nascimento: {ator.birthday}</Paragraph>
                    <Paragraph>Local de Nascimento: {ator.place_of_birth}</Paragraph>

                    <Row>
                        {filmes.map(filme => (
                            <Col size={50} key={filme.id} >
                                <TouchableOpacity
                                    onPress={() => navigation.push('filmes/detalhes', { id: filme.id })}>
                                    <ImagemCapa foto={filme.poster_path}  />
                                </TouchableOpacity>
                            </Col>
                        ))}
                    </Row>


                </>
            }
        </ScrollView>
    )
}

export default AtoresDetalhes
