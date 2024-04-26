
import { Box, Typography, colors, styled } from '@mui/material';
import crud from '../Assets/Images/crud.jpeg';
// import Youtube from '../Assets/Images/youtube.png';
// import InstaTele from '../Assets/Images/InstaTele.jpeg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '100%',
    height: '100%'
});

const Home = () => {
    
    return (
        <Header>
            <Typography variant="h3" textAlign="center"> Crud Application </Typography>
            <Box style={{display: 'flex'}}>
                <Image src={crud}  />
                {/* <Image src={InstaTele} /> */}
            </Box>
        </Header>
    )
}

export default Home;