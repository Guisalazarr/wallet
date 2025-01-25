import { Grid2 } from "@mui/material";
import BoxLogin from "./components/BoxLogin";
import ContainerLogin from "./components/ContainerLogin";

interface LoginLayoutProps {
    component: React.FC;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ component: Component }) => {
    return (
        <ContainerLogin container>
            <Grid2 size={12}>
                <BoxLogin >
                    <Component />
                </BoxLogin>
            </Grid2>
        </ContainerLogin>
    );
};

export default LoginLayout;