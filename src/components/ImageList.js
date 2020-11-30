import React from 'react'
import {
    GridList,
    useMediaQuery,
    GridListTile
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    gridList: {
        width: '100%',
        height: '100%',
        background: 'transparent'
    },
}))

const ImageList = ({ images, onClickTile }) => {
    const styles = useStyles()
    const breakpoints = useMediaQuery('(min-width: 768px)')

    const calcAspect = (width, height) => {
        if (width < height) return 1

        return Math.ceil(width / height)
    }

    return (
        <div className={styles.root}>
            <GridList
                cellHeight={450}
                cols={breakpoints ? 6 : 2}
                spacing={4}
            >
                {images.map(image=> (
                    <GridListTile
                        key={image.id}
                        cols={calcAspect(image.width, image.height)}
                        onClick={() => onClickTile(image.id)}
                    >
                        <img
                            src={image.urls.thumb}
                            alt={image.description}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default ImageList;