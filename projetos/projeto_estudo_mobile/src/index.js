import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api'


// View: div, footer, header, ... (container)
// Text: p, spam, h1, h3, ... (texto)

export default function App () {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        })
    },
    []
    );

    async function handleAddProject(){
        const response = await api.post('/projects',{
            title : 'Projeto' + Date.now(),
            owner: "Pablo"
        })

        setProjects([...projects, response.data])
    }

    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
        {/* <View style={styles.container}>
            <Text style={styles.title}>Hello Word</Text>
            {
                projects.map(project => (
                    <Text style={styles.title} key={project.id}>{project.title}</Text>
                ))
            }
        </View> */}
        <SafeAreaView style={styles.container}>
            <FlatList
                data={projects}
                keyExtrator={project => project.id}
                renderItem={({item}) => (
                    <Text style={styles.title}>{item.title}</Text>
                )}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddProject}>
                <Text style={styles.buttonText}>Adicionar Projeto</Text>
            </TouchableOpacity>            
        </SafeAreaView>
        </>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1'
    },
    title:{
        color: "#ffffff",
        fontSize: 32,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#ffffff',
        margin: 20,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 17
    }
});