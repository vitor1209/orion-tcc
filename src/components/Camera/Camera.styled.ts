export const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        flexDirection: {
            xs: "column",
            md: "row",
        },
        alignItems: "center",
        width: "100%",
        height: "65vh",
        gap: 3,
    },

    video: {
        width: {
            xs: "300px",
            sm: "470px",
            md: "520px",
        },
        height: {
            xs: "210px",
            sm: "340px",
            md: "380px",
        },
        borderRadius: "16px",
        backgroundColor: "black",
    },
    placeholder: {
        width: {
            xs: "300px",
            sm: "470px",
            md: "520px",
        },
        height: {
            xs: "210px",
            sm: "340px",
            md: "380px",
        },
        borderRadius: "16px",
        border: "2px dashed",
        borderColor: "divider",
        backgroundColor: "rgba(212, 210, 210, 0.85)",
        color: "text.secondary",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        gap: 1,
    },
    placeholderTitle: {
        fontWeight: 700,
        color: "text.primary",
    },
    placeholderText: {
        maxWidth: 280,
    },
    buttons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        gap: 2,
    },
};