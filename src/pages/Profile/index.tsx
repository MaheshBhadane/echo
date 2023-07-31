import React from "react";
import { Container, Paper, Grid, Col, Divider } from "@mantine/core";
import usePic from "@/assets/user.jpg";
import Cookies from "js-cookie";
import { getInitials } from "@/utils";
import Text from "@/components/ui/Text";
import Image from "@/components/ui/Image";

const Profile: React.FC = () => {
  const activeUser = Cookies.get("authUser");
  const user = {
    name: "Mahesh Bhadane",
    email: activeUser || "mahesh.bhadane@torinit.ca",
    bio: "I love coding and building awesome things!",
    avatar: "https://example.com/avatar.png",
    location: "Pune,India",
    website: `https://${getInitials(activeUser!)}.com`
  };

  return (
    <Container size="sm">
      <Paper
        shadow="lg"
        radius="xl"
        style={{
          marginTop: "2rem",
          backgroundColor: "rgba(229, 229, 230,0.3)"
        }}
      >
        <Grid gutter="lg">
          <Col span={12} sm={12} md={4}>
            <Image
              src={usePic}
              alt="User avatar"
              radius="xl"
              height={200}
              style={{ padding: "20px" }}
            />
          </Col>
          <Col span={12} sm={12} md={8} style={{ padding: "20px" }}>
            <Text size="xl" weight={700} style={{ marginBottom: "0.5rem" }}>
              {user.name}
            </Text>
            <Text style={{ marginBottom: "1rem" }}>{user.email}</Text>
            <Divider />
            <Text size="md" style={{ marginTop: "1rem" }}>
              {user.bio}
            </Text>
            <Text style={{ marginTop: "1rem" }}>
              <strong>Location:</strong> {user.location}
            </Text>
            <Text>
              <strong>Website:</strong>{" "}
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
