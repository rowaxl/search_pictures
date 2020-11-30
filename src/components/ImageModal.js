import React from 'react'
import {
  Modal,
  Fade,
  Backdrop,
  Link,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from '@material-ui/core'
import { CloseOutlined as CloseIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalImageWrap: {
    maxHeight: '90vh',
    maxWidth: '90vw',

    '& img': {
      width: '100%',
      maxHeight: '80vh'
    },
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  }
}))

const ImageModal = ({ image, open, handleClose }) => {
  const styles = useStyles()

  return (
    <>
    {
      image === null
        ? <></>
        : <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={styles.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Card className={styles.modalImageWrap}>
                <CardMedia
                  component="img"
                  alt={image.description}
                  image={image.urls.regular}
                />

                <CardContent>
                  <Link href={image.links.html} color="textPrimary" target="_blank" referrerPolicy="no-referrer">
                    Photo by {image.user.name}, Unsplash
                  </Link>
                </CardContent>

                <IconButton className={styles.closeButton} onClick={handleClose} size="medium" color="secondary">
                  <CloseIcon />
                </IconButton>
              </Card>
            </Fade>
          </Modal>
        }
    </>
  )
}

export default ImageModal