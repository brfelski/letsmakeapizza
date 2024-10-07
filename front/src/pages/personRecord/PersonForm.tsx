import { Button, Container, Divider, FormControl, Snackbar, Stack } from "@mui/material";
import axios from "axios";
import { useCallback, useState } from "react";
import PersonField from "./PersonField";

const PersonForm = () => {

    const [personName, setPersonName] = useState<string>('');
    const [personPhone, setPersonPhone] = useState<string>('');
    const [personCpf, setPersonCpf] = useState<string>('');
    const [personAdressZipCode, setPersonAdressZipCode] = useState<string>('');
    const [personAdress, setPersonAdress] = useState<string>('');
    const [personAdressNumber, setPersonAdressNumber] = useState<string>('');
    const [personAdressComplement, setPersonAdressComplement] = useState<string>('');
    const [personAdressNeighborhood, setPersonAdressNeighborhood] = useState<string>('');
    const [personAdressCity, setPersonAdressCity] = useState<string>('');
    const [personAdressState, setPersonAdressState] = useState<string>('');

    const [isSnackBarOpen, setSnackBarOpen] = useState(false);

    const switchSnackBar = () => {
        setSnackBarOpen(prev => !prev);
    }

    const fillZipCode = useCallback((value: string) => {
        const cepPattern = /^[0-9]{8}$/;
        if (value && cepPattern.test(value)) {
            axios.get('https://viacep.com.br/ws/' + value + '/json/').then((response) => {
                if (response && response.data) {
                    const { logradouro, bairro, localidade, estado } = response.data;

                    setPersonAdress(logradouro);
                    setPersonAdressNeighborhood(bairro);
                    setPersonAdressCity(localidade);
                    setPersonAdressState(estado);
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }, []);

    const saveFormAction = () => {
        const formValues = {
            "person_name": personName,
            "person_phone": personPhone,
            "person_cpf": personCpf,
            "person_adress_zipCode": personAdressZipCode,
            "person_adress": personAdress,
            "person_adress_number": personAdressNumber,
            "person_adress_complement": personAdressComplement,
            "person_adress_neighborhood": personAdressNeighborhood,
            "person_adress_city": personAdressCity,
            "person_adress_state": personAdressState
        }


        axios.post('http://localhost:8080/person/v1/', formValues).then(response => {
            if (response && response.data && response.data.person_sequence) {
                switchSnackBar();
            }
        }).catch(error => {
            console.log(error);
        });

    };

    return (
        <Container>
            <FormControl fullWidth={true}>
                <Stack width="100%">
                    <Divider>Dados pessoais</Divider>
                    <PersonField fieldValue={personName} fieldId="person_name" fieldLabel="Nome completo" setFieldValue={setPersonName} />
                    <PersonField fieldValue={personPhone} fieldId="person_phone" fieldLabel="Telefone" setFieldValue={setPersonPhone} />
                    <PersonField fieldValue={personCpf} fieldId="person_cpf" fieldLabel="CPF" setFieldValue={setPersonCpf} />
                    <Divider>Endereço</Divider>
                    <PersonField fieldValue={personAdressZipCode} fieldId="person_adress_zipCode" fieldLabel="CEP" setFieldValue={setPersonAdressZipCode} fillZipCode={fillZipCode} />
                    <PersonField fieldValue={personAdress} fieldId="person_adress" fieldLabel="Endereço" setFieldValue={setPersonAdress} />
                    <PersonField fieldValue={personAdressNumber} fieldId="person_adress_number" fieldLabel="Numero" setFieldValue={setPersonAdressNumber} />
                    <PersonField fieldValue={personAdressComplement} fieldId="person_adress_complement" fieldLabel="Complemento" setFieldValue={setPersonAdressComplement} />
                    <PersonField fieldValue={personAdressNeighborhood} fieldId="person_adress_neighborhood" fieldLabel="Bairro" setFieldValue={setPersonAdressNeighborhood} />
                    <PersonField fieldValue={personAdressCity} fieldId="person_adress_city" fieldLabel="Cidade" setFieldValue={setPersonAdressCity} />
                    <PersonField fieldValue={personAdressState} fieldId="person_adress_state" fieldLabel="Estado" setFieldValue={setPersonAdressState} />

                    <Divider sx={{ height: '10px' }}></Divider>
                    <Stack direction="row">
                        <Button type="submit" variant="outlined" onClick={saveFormAction}>Salvar</Button>
                        <Button type="reset" variant="outlined">Limpar</Button>
                    </Stack>
                </Stack>
            </FormControl>
            <Snackbar open={isSnackBarOpen} autoHideDuration={2000} message="Salvo com sucesso" onClick={switchSnackBar} />
        </Container>
    );
}

export default PersonForm;