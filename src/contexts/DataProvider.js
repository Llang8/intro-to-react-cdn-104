import { useState, useEffect, createContext, useContext } from 'react'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            const response = await fetch('https://chief-flat-goose.glitch.me/api/posts')
            const data = await response.json()
            setPosts(data)
        }

        getPosts()
    }, [])

    async function loadPost(id) {
        const response = await fetch(`https://chief-flat-goose.glitch.me/api/post/${id}`)
        const data = await response.json()
        return data
    }

        
    async function fetchPokemon(parameter) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${parameter}`)
        const data = await response.json()
        return data
    }

    const value = {
        posts,
        fetchPokemon,
        loadPost
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}