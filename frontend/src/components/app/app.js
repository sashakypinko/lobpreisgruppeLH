import React, {Fragment} from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import Button from "../ui/button";
import { Input } from '@mui/material';


const App = () => {
    return (
        <Fragment>
            <Header/>
            <Input value="" onChange={console.log}/>
            <Button>
                Add New
            </Button>
            <Footer/>
        </Fragment>
    );
};

export default App;
