import React from 'react';
import { Box, Typography } from '@mui/material';

const CancellationPolicy = () => {
    return (
        <Box sx={{ padding: '10rem', color: '#263c91' }}>
            <Typography variant="h1" fontWeight="600" gutterBottom>
                Cancellation Policy
            </Typography>
            <Typography
                marginLeft="15%"
                textAlign={'left'}
                fontSize="5rem"
                fontWeight="400"
                width="70%"
                mt="0.8rem"
                p="0 1.2rem"
                color="inherit">
                <ol>
                    <li>
                        Membership Cancellation: The Member may cancel their membership at any time by
                        providing written notice to the Gym. Cancellation requests must be submitted at least 14 days
                        prior to the next billing cycle to avoid additional charges.
                    </li>
                    <li>
                        Refunds: Membership fees are non-refundable, except as required by applicable law.
                    </li>
                    <li>
                        Termination by Gym: The Gym reserves the right to terminate a membership for reasons
                        including but not limited to violation of Gym rules, disruptive behavior, or failure to pay
                        membership fees.
                    </li>
                </ol>
            </Typography>
        </Box>
    );
}

export default CancellationPolicy;
