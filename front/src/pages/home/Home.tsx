import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import PersonForm from "../personRecord/personForm";

const Home = () => {

    return (
        <Box width="100%">
            <Container>
                <Box >
                    <AppBar>
                        <Toolbar>
                            <Typography sx={{ flexGrow: 1 }}>Cadastro pessoa fisica</Typography>
                            <Button color="inherit">Ver todos os registros</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
            <PersonForm />
        </Box>
    );
}

export default Home;