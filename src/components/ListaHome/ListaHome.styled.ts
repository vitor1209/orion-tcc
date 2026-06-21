import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";


// export const FeatureList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 64px;
//   width: 100%;
//   max-width: 1080px;
// `;

export const FeatureList = styled(Stack)({
  width: "100%",
  maxWidth: 1080,
  gap: 64,
});


// export const FeatureItem = styled.div<{ $reverse: boolean }>`
//   display: flex;
//   flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
//   align-items: center;
//   gap: 64px;
//   padding: 10px 0;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     gap: 24px;
//   }
// `;

export const FeatureItem = styled(Stack, {
    shouldForwardProp: (prop) => prop !== "reverse",
})<{
    reverse?: boolean;
}>(({ reverse }) => ({
    flexDirection: reverse ? "row-reverse" : "row",
    alignItems: "center",
    gap: 64,
    padding: "10px 0",

    "@media (max-width:600px)": {
        flexDirection: "column",
        gap: 24,
    },
}));

// export const TextBlock = styled.div`
//   flex: 1.15;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

export const TextBlock = styled(Stack)({
    flex: 1.15,
    gap: 16,
});

// export const FeatureTitle = styled.h3`
//   font-family: "Ubuntu", Arial, Helvetica, sans-serif;
//   font-size: 1.6rem;
//   font-weight: 700;
//   color: #111;
// `;

export const FeatureTitle = styled(Typography)({
    fontFamily: "Ubuntu",
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "#111",
});

// export const FeatureDescription = styled.p`
//   font-family: "Ubuntu", Arial, Helvetica, sans-serif;
//   font-size: 1rem;
//   color: #555;
//   line-height: 1.75;
// `;

export const FeatureDescription = styled(Typography)({
    fontFamily: "Ubuntu",
    fontSize: "1rem",
    color: "#555",
    lineHeight: 1.75,
});


// export const LearnMoreButton = styled.button`
//   align-self: flex-start;
//   background-color: #111;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   font-family: "Ubuntu", Arial, Helvetica, sans-serif;
//   font-size: 0.95rem;
//   font-weight: 500;
//   border-radius: 6px;
//   cursor: pointer;
//   margin-top: 4px;
//   transition: background-color 0.2s ease;

//   &:hover {
//     background-color: #333;
//   }
// `;

// export const LearnMoreButton = styled(Button)({
//   alignSelf: "flex-start",

//   backgroundColor: "#111",
//   color: "#fff",

//   padding: "10px 20px",

//   fontFamily: "Ubuntu",
//   fontSize: "0.95rem",
//   fontWeight: 500,

//   borderRadius: 6,

//   textTransform: "none",

//   "&:hover": {
//     backgroundColor: "#333",
//   },
// });

// export const ImageBlock = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const ImageBlock = styled(Box)({
    flex: 1,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});


// export const FeatureImage = styled.img`
//   width: 100%;
//   max-width: 320px;
//   object-fit: contain;
//   transition: transform 0.25s ease, filter 0.25s ease;

//   &:hover {
//     transform: scale(1.10);
//     filter: brightness(1.02);
//   }
// `;

export const FeatureImage = styled("img")({
    width: "100%",
    maxWidth: 320,

    objectFit: "contain",

    transition: "transform .25s ease, filter .25s ease",

    "&:hover": {
        transform: "scale(1.10)",
        filter: "brightness(1.02)",
    },
});