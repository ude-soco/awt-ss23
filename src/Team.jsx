import React from "react";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import teamMembers from "./assets/data";

// Team component
export default function Team() {
  const navigate = useNavigate();

  const viewMember = (id) => {
    navigate(`/team/${id}`);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Typography variant="h4" sx={{ py: 3 }}>
            Meet Our Team
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {teamMembers.map((member) => {
          return (
            <Grid item key={member.id}>
              <Card
                sx={{
                  width: 230,
                  cursor: "pointer",
                  "&:hover": { boxShadow: 5 }
                }}
                onClick={() => viewMember(member.id)}
              >
                <CardMedia component="img" height="200" image={member.img} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.prof}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
