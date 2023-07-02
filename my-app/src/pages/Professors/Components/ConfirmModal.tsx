import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default ({ openModal, setOpenModal, callback }: { openModal: boolean, setOpenModal: (value: boolean) => void, callback: () => void }) => {


    const handleClose = () => {
        setOpenModal(false);
    };

    const handlerConfirm = async () => {
        await callback();
        setOpenModal(false);
    }

    return (
        <div>
            <Dialog
                open={openModal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Você Tem Certeza Disso?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Se você excluir uma turma todas as presenças relacionadas a ela serão excluídas.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlerConfirm}>Excluir Turmar</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancelar Exclusão
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


