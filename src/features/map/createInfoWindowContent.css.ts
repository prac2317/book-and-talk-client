import { style } from '@vanilla-extract/css';

export const container = style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
});

export const infoWindowBox = style({
    backgroundColor: 'white',
    border: '1px black solid',
    padding: '16px',
    minWidth: '200px',
    maxWidth: '300px',
})

export const title = style({
    margin: 0,
    fontSize: '14px',
});

export const tail = style({
    width: "20px",
    height: "20px",
    border: "1px solid #088",
    borderRadius: "10px",
    backgroundColor: "#0FF",
    opacity: "0.5",
});
