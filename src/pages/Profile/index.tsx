import React from 'react';
import { Container, Paper, Grid, Col, Image, Text, Divider } from '@mantine/core';
import usePic from "../../assets/user.jpg";

const Profile: React.FC = () => {
    const user = {
        name: 'Mahesh Bhadane',
        email: 'mahesh.bhadane@torinit.ca',
        bio: 'I love coding and building awesome things!',
        avatar: 'https://example.com/avatar.png',
        location: 'Pune,India',
        website: 'https://mahesh.com',
    };

    return (
        <Container size="sm">
            <Paper shadow='lg' radius='xl' style={{ marginTop: '2rem', backgroundColor: "#DAE1EC" }}>
                <Grid gutter="lg">
                    <Col span={12} sm={12} md={4}>
                        <Image src={usePic} alt="User avatar" radius='xl' height={200} style={{ padding: '20px' }} />
                    </Col>
                    <Col span={12} sm={12} md={8} style={{ padding: '20px' }} >
                        <Text size="xl" weight={700} style={{ marginBottom: '0.5rem' }}>
                            {user.name}
                        </Text>
                        <Text size="md" color="gray" style={{ marginBottom: '1rem' }}>
                            {user.email}
                        </Text>
                        <Divider />
                        <Text size="md" style={{ marginTop: '1rem' }}>
                            {user.bio}
                        </Text>
                        <Text size="md" color="gray" style={{ marginTop: '1rem' }}>
                            <strong>Location:</strong> {user.location}
                        </Text>
                        <Text size="md" color="gray">
                            <strong>Website:</strong>{' '}
                            <a href={user.website} target="_blank" rel="noopener noreferrer">
                                {user.website}
                            </a>
                        </Text>
                    </Col>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Profile;
