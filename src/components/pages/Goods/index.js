import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Card, Typography
} from "@mui/material";
import axios from "axios";

const Goods = () => {
  const [hui, setHui] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { goods, sectionName, cart } = useSelector((state => state.goods))


  useEffect(() => {
    setIsLoading(true)

    axios.get('/hiu')
      .then((response) => {
        setHui(response.data)
      })
      .catch((error) => {
        // TODO catch error
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])


  return (
    <Container>
      <Grid container xs={12} spacing={0}>
        {goods.map((item, index) => (
          <Grid item xs={4} key={index}>
            <Card variant='outlined'>
              <CardActionArea>
                <Grid container>
                  <Grid item xs={12}>
                    <CardMedia
                      style={{ objectFit: 'cover' }}
                      component="img"
                      height='400px'
                      image={item.poster}
                      title={item.name}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <CardContent>
                      <Typography variant="h5">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Goods;