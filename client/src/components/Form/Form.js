import React, { useState } from 'react'
import useStyles from './style'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts'


const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const dispatch =useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(postData))
    }

    const clear = () => {

    }
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <form className={`${classes.form} ${classes.root}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memories</Typography>
                <TextField
                    name='creator'
                    variant="outlined"
                    label="Creator"
                    fullwidth 
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField
                    name='title'
                    variant="outlined"
                    label="title"
                    fullwidth 
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField
                    name='message'
                    variant="outlined"
                    label="message"
                    fullwidth 
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField
                    name='tags'
                    variant="outlined"
                    label="tags"
                    fullwidth 
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({base64})=>setPostData({...postData,selectedFile:base64})}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullwidth>
                        Submit
                    </Button>
                    <Button  variant="contained" color="secondary" size="large" onClick={clear} fullwidth>
                        Clear
                    </Button>
            </form>
        </Paper>
    )
}

export default Form



