import React, { useState } from 'react';
import './App.css';
import imgs from './img/cherry_charity.jpg';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import myDBRef from './Firebase/firebase.js';

const useStyles = makeStyles((theme) => ({
    layout: {
        width: '800px',
        height: '450px',
        // backgroundColor: 'red',
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1)
    },
    subdiv: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imgs})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1)
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: theme.spacing(15.5),
    },
    dateInput: {
        border: 'none',
        fontSize: theme.spacing(1.8),
        marginRight: theme.spacing(3),
    },
    nameContainer: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column'
    },
    nameInput: {
        border: 'none',
        width: '100%',
        fontSize: theme.spacing(3.5),
        marginTop: theme.spacing(3.5),
        marginLeft: theme.spacing(15),
    },
    amountInput: {
        border : 'none',
        width: '60%',
        fontSize: theme.spacing(3.5),
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(15),
    }
}));

function App() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date().toDateString());

    const btnPrint = async () => {
        await myDBRef.push({
            date : date,
            name : name,
            amount : amount
        });
        
        window.print();

        setTimeout(() => {
            setName("");
            setAmount("");
        }, 3000);
    }

    return (
        <React.Fragment>
            <div className={classes.layout}>
                <div className={classes.subdiv}>
                    <div className={classes.inputContainer}>
                        <input type="text"
                            className={classes.dateInput}
                            value={date}
                        />
                    </div>
                    <div className={classes.nameContainer}>
                        <input type="text"
                            className={classes.nameInput}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="text"
                            className={classes.amountInput}
                            value={amount}
                            onChange={ e => setAmount(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Button
                        id="btnPrint"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={btnPrint}
                    >
                        Print
                </Button>
                </div>
            </div>
        </React.Fragment>

    );
}

export default App;
