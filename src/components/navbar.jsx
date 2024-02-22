import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            
            <Link to="/">Home</Link>
            <Link to="apropos">A Propos</Link>
            <Link to="contact">Contact</Link>

        </div>
    );
};
