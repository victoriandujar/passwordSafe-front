import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "../Login/styles";

function Home() {
    const [passwords, setPasswords] = useState([])
    return (
        <Container>
            {JSON.stringify(passwords)}
        </Container>
    )
}
export default Home;