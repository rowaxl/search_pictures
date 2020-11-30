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

import {
    searchImagesByQuery,
    getImageDetail
} from '../api/ImageClient'
import SearchBar from '../components/SearchBar'
import ImageList from '../components/ImageList'
import ImageModal from '../components/ImageModal'

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

    const [images, setImages] = useState([])
    const [query, setQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const [selectedImage, setSelectedImage] = useState(null)
    const [openImageModal, setOpenImageModal] = useState(false)

    const onSearchSubmit = async (query) => {
        const { data } = await searchImagesByQuery(query, 1);

        setImages(data.results)
        setQuery(query)
        setCurrentPage(1)
        setTotalPages(data.total_pages)
    }

    const loadPage = async (targetPage) => {
        if (targetPage < 1 || targetPage > totalPages) return;

        const { data } = await searchImagesByQuery(query, targetPage);

        setImages(data.results)
        setCurrentPage(targetPage)
    }

    const showFullImage = async (id) => {
        const { data } = await getImageDetail(id)

        setSelectedImage(data)
        setOpenImageModal(true)
    }

    const closeImageModal = () => {
        setSelectedImage(null)
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
                    Showing {images.length} images
                </Typography>
                <Typography variant="h6" color="textPrimary">
                    Page {currentPage} / {totalPages}
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

            <ImageList images={images} onClickTile={showFullImage} />

            <ImageModal image={selectedImage} open={openImageModal} handleClose={closeImageModal} />
        </Container>
    )
}

export default App
