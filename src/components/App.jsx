import React from 'react'
import Accordion from './Accordion'

const items = [
    {
        title: 'What is React?',
        content: 'A front-end JavaScript library',
    },
    {
        title: 'Why use React?',
        content: 'It is a favorite library among front-end developers',
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components',
    },
]

export default () => {
    return (
        <div>
            <Accordion items={ items } />
        </div>
    )
}
