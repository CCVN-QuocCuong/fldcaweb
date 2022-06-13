import React from 'react';
import { Spinner } from "react-bootstrap";
import { SuspenseContainer } from './SuspenseFallback.style'

export function SuspenseFallback(props) {
    return (
        <SuspenseContainer>
            <Spinner animation="border" />
        </SuspenseContainer>
    );
}