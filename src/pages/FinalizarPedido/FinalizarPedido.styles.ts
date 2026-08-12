import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Page = styled(Box)({
  minHeight: "100vh",
  backgroundColor: "#ffffff",
  color: "#080a14",
  overflowX: "hidden",
});

export const Main = styled(Box)({
  minHeight: "100vh",
  boxSizing: "border-box",
  padding: "clamp(92px, 12vh, 112px) clamp(20px, 7vw, 92px) 72px",
});

export const Form = styled("form")({
  width: "100%",
});

export const Content = styled(Box)({
  width: "100%",
  maxWidth: 1240,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 340px",
  alignItems: "start",
  gap: "clamp(42px, 7vw, 86px)",

  "@media (max-width: 980px)": {
    gridTemplateColumns: "1fr",
  },
});

export const CheckoutColumn = styled(Box)({
  width: "100%",
});

export const Breadcrumb = styled(Typography)({
  marginBottom: 24,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.95rem",
  color: "#111827",
});

export const FormCard = styled(Box)({
  width: "100%",
  boxSizing: "border-box",
  padding: "24px 26px",
  border: "1px solid #8eaaff",
  borderRadius: 22,
  backgroundColor: "#ffffff",
  marginBottom: 28,
  transition: "transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease",

  "&:hover": {
    transform: "translateY(-2px)",
    borderColor: "#9d8cff",
    boxShadow: "0 14px 30px rgba(76, 94, 150, 0.12)",
  },
});

export const SectionHeader = styled(Box)({
  paddingBottom: 10,
  marginBottom: 18,
  borderBottom: "1px solid #9b9b9b",
});

export const SectionTitle = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.45rem",
  lineHeight: 1.15,
  fontWeight: 800,
});

export const FieldsGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== "columns",
})<{ columns: number }>(({ columns }) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
  gap: 22,

  "@media (max-width: 620px)": {
    gridTemplateColumns: "1fr",
  },
}));

export const AddressGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1.1fr 1.25fr 0.42fr",
  gap: "18px 22px",

  "@media (max-width: 760px)": {
    gridTemplateColumns: "1fr 1fr",
  },

  "@media (max-width: 520px)": {
    gridTemplateColumns: "1fr",
  },
});

export const InputGroup = styled(Box)({});

export const Label = styled(Typography)({
  marginBottom: 7,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.82rem",
  fontWeight: 600,
});

export const InputField = styled(TextField)({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    height: 34,
    borderRadius: 999,
    fontFamily: '"Ubuntu", "Inter", sans-serif',
    backgroundColor: "#ffffff",
    transition: "box-shadow 0.2s ease, transform 0.2s ease",

    "& fieldset": {
      borderColor: "#8eaaff",
    },

    "&:hover fieldset, &.Mui-focused fieldset": {
      borderColor: "#8b6cff",
      borderWidth: 1,
    },

    "&.Mui-focused": {
      boxShadow: "0 8px 18px rgba(142, 170, 255, 0.18)",
      transform: "translateY(-1px)",
    },
  },

  "& .MuiFormHelperText-root": {
    marginLeft: 12,
    fontFamily: '"Ubuntu", "Inter", sans-serif',
    fontSize: "0.72rem",
  },

  "& input::placeholder": {
    color: "#9aa3b6",
    opacity: 1,
  },
});

export const PaymentOption = styled(Box)({
  minHeight: 48,
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "8px 14px",
  border: "1px solid #747474",
  borderRadius: 14,
  cursor: "pointer",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    borderColor: "#8eaaff",
    boxShadow: "0 8px 18px rgba(76, 94, 150, 0.12)",
    transform: "translateY(-1px)",
  },
});

export const PixIcon = styled("img")({
  width: 28,
  height: 28,
  objectFit: "contain",
});

export const PaymentName = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.88rem",
  fontWeight: 800,
});

export const PaymentDescription = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.72rem",
  color: "#5d6472",
});

export const ErrorMessage = styled(Typography)({
  marginTop: 8,
  marginLeft: 12,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.76rem",
  color: "#d32f2f",
});

export const SummaryCard = styled(Box)({
  position: "sticky",
  top: 96,
  alignSelf: "start",
  padding: "24px 22px",
  border: "2px solid #9db3ff",
  borderRadius: 22,
  backgroundColor: "#ffffff",
  boxShadow: "0 12px 26px rgba(76, 94, 150, 0.22)",
  overflow: "hidden",
  transition: "transform 0.24s ease, box-shadow 0.24s ease",

  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 18px 38px rgba(76, 94, 150, 0.25)",
  },

  "@media (max-width: 980px)": {
    position: "relative",
    top: 0,
    maxWidth: 420,
  },
});

export const SummaryTitle = styled(Typography)({
  paddingBottom: 12,
  borderBottom: "1px solid #b8b8b8",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1.55rem",
  fontWeight: 800,
});

export const ProductRow = styled(Box)({
  display: "grid",
  gridTemplateColumns: "86px 1fr auto",
  alignItems: "center",
  gap: 14,
  padding: "26px 0",
});

export const ProductImageBox = styled(Box)({
  width: 86,
  height: 72,
  display: "grid",
  placeItems: "center",
  borderRadius: 12,
  backgroundColor: "#e9e9e9",
  overflow: "hidden",
});

export const ProductImage = styled("img")({
  width: "82%",
  height: "82%",
  objectFit: "contain",
  transition: "transform 0.24s ease",

  [`${ProductImageBox}:hover &`]: {
    transform: "scale(1.08) rotate(-2deg)",
  },
});

export const ProductInfo = styled(Box)({});

export const ProductName = styled(Typography)({
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.95rem",
  fontWeight: 800,
});

export const RemoveProduct = styled(Typography)({
  marginTop: 4,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.76rem",
  color: "#4d5566",
});

export const ProductPrice = styled(Box)({
  display: "grid",
  justifyItems: "end",
  gap: 8,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.9rem",
  fontWeight: 800,
});

export const QuantityStepper = styled(Box)({
  minWidth: 82,
  height: 30,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  border: "1px solid #8eaaff",
  borderRadius: 999,
  backgroundColor: "#f6f8ff",
  color: "#080a14",

  "& button": {
    width: 22,
    height: 22,
    border: 0,
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    backgroundColor: "transparent",
    color: "#080a14",
    cursor: "pointer",
    transition: "background-color 0.2s ease, color 0.2s ease, transform 0.2s ease",
  },

  "& button:hover:not(:disabled)": {
    backgroundColor: "#8eaaff",
    color: "#ffffff",
    transform: "scale(1.08)",
  },

  "& button:disabled": {
    opacity: 0.35,
    cursor: "not-allowed",
  },

  "& strong": {
    minWidth: 14,
    textAlign: "center",
  },
});

export const Divider = styled(Box)({
  height: 1,
  backgroundColor: "#c9c9c9",
});

export const ValuesList = styled(Box)({
  display: "grid",
  gap: 16,
  padding: "28px 0",
});

export const ValueRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.92rem",
  color: "#353b48",

  "& strong": {
    color: "#080a14",
  },
});

export const TotalRow = styled(ValueRow)({
  padding: "22px 0 28px",
  fontSize: "1rem",
});

export const FinishButton = styled("button", {
  shouldForwardProp: (prop) => prop !== "$active",
})<{ $active: boolean }>(({ $active }) => ({
  width: "100%",
  height: 42,
  border: 0,
  borderRadius: 999,
  backgroundColor: $active ? "#4f6fdc" : "#a8bcff",
  color: "#ffffff",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "1rem",
  fontWeight: 800,
  cursor: "pointer",
  opacity: $active ? 1 : 0.72,
  transition:
    "transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease, background 0.2s ease",
  position: "relative",
  overflow: "hidden",

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.38), transparent)",
    transform: "translateX(-120%)",
    transition: "transform 0.55s ease",
  },

  "&:hover": {
    transform: $active ? "translateY(-2px)" : "none",
    filter: $active ? "brightness(1.03)" : "none",
    boxShadow: $active ? "0 10px 18px rgba(79, 111, 220, 0.28)" : "none",
  },

  "&:hover::after": {
    transform: $active ? "translateX(120%)" : "translateX(-120%)",
  },

  "&:disabled": {
    opacity: 0.65,
    cursor: "not-allowed",
    transform: "none",
    boxShadow: "none",
  },
}));

export const SuccessOverlay = styled(Box)({
  position: "fixed",
  inset: 0,
  zIndex: 1400,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 24,
  backgroundColor: "rgba(0, 0, 0, 0.42)",
  backdropFilter: "blur(2px)",
});

export const SuccessModal = styled(Box)({
  width: "min(100%, 540px)",
  minHeight: 280,
  boxSizing: "border-box",
  padding: "56px clamp(28px, 6vw, 72px) 46px",
  borderRadius: 34,
  backgroundColor: "#ffffff",
  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.22)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  transformOrigin: "center",
});

export const SuccessTitle = styled(Typography)({
  marginBottom: 22,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "clamp(1.45rem, 4vw, 1.75rem)",
  fontWeight: 800,
});

export const SuccessText = styled(Typography)({
  maxWidth: 380,
  marginBottom: 14,
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.95rem",
  lineHeight: 1.35,
  color: "#080a14",
});

export const SuccessButton = styled("button")({
  width: "min(100%, 260px)",
  height: 42,
  marginTop: 22,
  border: 0,
  borderRadius: 999,
  background: "linear-gradient(90deg, #b64cff 0%, #9d4cff 100%)",
  color: "#ffffff",
  fontFamily: '"Ubuntu", "Inter", sans-serif',
  fontSize: "0.95rem",
  fontWeight: 800,
  cursor: "pointer",
  transition: "transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    transform: "translateY(-2px)",
    filter: "brightness(1.04)",
    boxShadow: "0 10px 18px rgba(157, 76, 255, 0.26)",
  },
});
