
import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import CircularProgressWithLabel from './CircularProgressWithLabel';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 180,
    },
    button: {
        margin: theme.spacing(1),
        width: 150,
        fontWeight: 'bold',
        display: 'inline'
    },
}));


function ProgressPage() {
    // const madinahBooks = require('../madinah_books.json');

    // const allBooks = [1, 2, 3];
    // const [selectedBook, setSelectedBook] = useState(allBooks[0]);

    // useEffect(() => {
    //     let savedBook = localStorage.getItem('madinah-book');
    //     if (savedBook) {
    //         setSelectedBook(parseInt(savedBook))
    //     } else {
    //         setSelectedBook(allBooks[0]);
    //     }
    // }, []);

    // const [completedChapters, setCompletedChapters] = useState('');
    // const [totalChapters, setTotalChapters] = useState(0);

    const [progress, setProgress] = useState(0);
    const [days, setDays] = useState(0);

    useEffect(() => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        // 17th April 2024
        const firstDate = new Date(2021, 6, 13);
        const secondDate = new Date();

        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        setDays(diffDays);
        setProgress(100 * diffDays / 1009);
    }, [])


    // useEffect(() => {
    //     let savedChapter = JSON.parse(localStorage.getItem(`MB${selectedBook}-progress`));
    //     if (savedChapter) {
    //         savedChapter = parseInt(savedChapter);
    //         setCompletedChapters(savedChapter);
    //     } else {
    //         setCompletedChapters(0);
    //     }
    //     updateTotalChapters();
    //     localStorage.setItem('madinah-book', selectedBook);
    // }, [selectedBook]);

    // useEffect(() => {
    //     if (completedChapters === '') {
    //         return;
    //     }
    //     updateProgress();
    // }, [completedChapters]);

    // const updateTotalChapters = () => {
    //     let totalChapters = madinahBooks.find(book => book.book === selectedBook).chapters;
    //     setTotalChapters(totalChapters);
    // }

    // useEffect(() => {
    //     updateProgress();
    // }, [totalChapters])

    // const updateProgress = () => {
    //     let progress;
    //     if (!completedChapters) {
    //         progress = 0;
    //     } else {
    //         progress = Math.floor(100 * completedChapters / totalChapters);
    //     }
    //     setProgress(progress);
    //     localStorage.setItem(`MB${selectedBook}-progress`, JSON.stringify(completedChapters))
    // }

    const classes = useStyles();

    return (
        <>
            {/* <Box>
                {allBooks.map(bookNo => (
                    <Button
                        key={bookNo}
                        variant={selectedBook === bookNo ? 'contained' : 'outlined'}
                        className={classes.button}
                        onClick={() => setSelectedBook(bookNo)}
                    >Book {bookNo}</Button>))
                }
            </Box> */}
            <Box>
                {/* <Typography variant="h4" component="h4">دروس اللغة العربية</Typography> */}
                <Typography variant="h2" component="h2">
                    Lets <Typography variant="inherit" color={progress < 100 ? 'primary' : 'secondary'}>Go!</Typography>
                </Typography>
                <Typography variant="h5" component="h5" gutterBottom>17th April 2024</Typography>
            </Box>
            <Box marginTop={4}>
                <CircularProgressWithLabel value={progress} days={days} />
            </Box>
            <Box>
                {/* <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Chapter</InputLabel>
                    <Select
                        native
                        value={completedChapters}
                        onChange={e => setCompletedChapters(parseInt(e.target.value))}
                        label={'Chapter'}>
                        {
                            [<option value="" key=""></option>,
                            ...Array.from({ length: totalChapters }, (_, i) => i + 1).map(num => (
                                <option value={num} key={num}>{num}</option>
                            ))]
                        }
                    </Select>
                </FormControl> */}
            </Box>
        </>
    );
}


export default ProgressPage;