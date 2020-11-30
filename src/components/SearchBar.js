import React, { useState } from 'react'
import {
    Paper,
    InputBase,
    IconButton
} from '@material-ui/core'
import {
    Search as SearchIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    input: {
        marginLeft: 4,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const SearchBar = ({ onSubmit }) => {
    const styles = useStyles()
    const [query, setQuery] = useState('')

    const handleSubmit = event => {
        event.preventDefault();

        onSubmit(query);
    }

    return (
        <Paper component="form" className={styles.root} onSubmit={handleSubmit}>
            <InputBase
                className={styles.input}
                placeholder="Input keyword"
                inputProps={{ 'aria-label': 'search images' }}
                onChange={e => setQuery(e.target.value)}
            />
            <IconButton type="submit" className={styles.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;
