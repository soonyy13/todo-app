import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));


export default function Contents() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Container maxWidth="sm" sx = {{bgcolor: 'grey.300'}}>
                        {/*임시로 일단 box 넣어줌*/}
                        <Box sx={{ height: '100vh', width: 'auto', backgroundColor: 'ivory' }} />
                    </Container>
                </Grid>
                <Grid xs={6}>
                    <Container maxWidth="sm" sx = {{bgcolor: 'grey.300'}}>
                        {/*임시로 일단 box 넣어줌*/}
                        <Box sx={{  width: 'auto', height: '100vh', bgcolor: 'ivory' }} />

                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
}