import {  useAppSelector } from 'hooks'
import LoadingOverlay from 'react-loading-overlay-ts'
import "./style.css"


function AuthenticationLayout(props) {
    const [
        isLoading
      ] = useAppSelector((state) => [
        state.app.isLoading
      ]);
    const { children } = props
    return (
        <LoadingOverlay
            active={isLoading}
            spinner
        >
            <div className="auth-main">
                {children}
            </div>
        </LoadingOverlay>

    );
}

export default AuthenticationLayout;