import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
import teamMembers from "./assets/data";

// TeamMember component
export default function TeamMember() {
  const navigate = useNavigate();
  const params = useParams();
  const [profile, setProfile] = useState({});

  const goBack = () => {
    navigate("/team");
  };

  useEffect(() => {
    let found = false;
    teamMembers.forEach((member) => {
      if (Number(params.id) === member.id) {
        setProfile(member);
        found = true;
        return;
      }
    });
    if (Boolean(!found)) {
      navigate("/team");
    }
  }, [profile]);

  return (
    <>
      <Button startIcon={<ArrowBackIcon />} onClick={goBack}>
        Back
      </Button>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} key={profile.id}>
          <Card sx={{ px: 3, pb: 3 }}>
            <Grid container>
              <Grid item sx={{ width: 200, pt: 3 }}>
                <CardMedia component="img" height="200" image={profile.img} />
              </Grid>
              <Grid item xs>
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {profile.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {profile.prof}
                  </Typography>

                  <Typography variant="body2">{profile.bio}</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
