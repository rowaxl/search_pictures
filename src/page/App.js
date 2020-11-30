import React, { useState } from 'react'

import {
    Container,
    Typography,
    IconButton,
} from '@material-ui/core'
import {
    ChevronLeft as PreviousIcon,
    ChevronRight as NextIcon,
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

import SearchBar from '../components/SearchBar'
import ImageList from '../components/ImageList'
import ImageModal from '../components/ImageModal'

import { useSearchImages, useGetImageDetail } from '../hooks/useGetImages'

import '../styles/global.css'

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        paddingTop: 24,
    },
    optionBar: {
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: 50,
        alignItems: 'center',
    }
}))

const App = () => {
    const styles = useStyles()

    const [query, setQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(0)

    const [selectedImageId, setSelectedImageId] = useState(null)
    const [openImageModal, setOpenImageModal] = useState(false)

    const [searchData, searchTotalPages, searchLoading] = useSearchImages(query, currentPage)
    const [detailData, detailLoading] = useGetImageDetail(selectedImageId)

    const onSearchSubmit = (query) => {
        setQuery(query)
        setCurrentPage(1)
    }

    const loadPage = (targetPage) => {
        if (targetPage < 1 || targetPage > searchTotalPages) return

        setCurrentPage(targetPage)
    }

    const showFullImage = (id) => {
        setSelectedImageId(id)
        setOpenImageModal(true)
    }

    const closeImageModal = () => {
        setSelectedImageId('')
        setOpenImageModal(false)
    }

    return (
        <Container className={styles.root}>
            <Typography variant="h4" color="textPrimary">
                Let's Search Beautiful Photos!
            </Typography>

            <SearchBar onSubmit={onSearchSubmit} />

            <div className={styles.optionBar}>
                <Typography variant="h6" color="textPrimary">
                    Page {currentPage} / {searchTotalPages}
                </Typography>

                <div>
                    <IconButton color="primary" onClick={() => { loadPage(currentPage - 1) }}>
                        <PreviousIcon fontSize="large" />
                    </IconButton>
                    <IconButton color="primary" onClick={() => { loadPage(currentPage + 1) }}>
                        <NextIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>

            <ImageList images={searchData} onClickTile={showFullImage} isLoading={searchLoading} />

            <ImageModal image={detailData} open={openImageModal} handleClose={closeImageModal} isLoading={detailLoading} />
        </Container>
    )
}

export default App
