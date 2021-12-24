import React from 'react';
import {useSelector} from "react-redux";
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

const Goods = () => {
    const {goods, sectionName, cart} = useSelector((state => state.goods))

    return (
        <Container>
            <Grid container xs={12} spacing={0}>
                {goods.map((item) => (
                        <Grid item xs={4}>
                            <Card variant='outlined'>
                                <CardActionArea style={{display: 'flex', flexDirection: 'column'}}>
                                    <CardMedia
                                        style={{objectFit: 'cover'}}
                                        component="img"
                                        height='400px'
                                        image={item.poster}
                                        title={item.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h5">
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                )}
            </Grid>
        </Container>
    );
};

export default Goods;