import SiteRoutes from "../routes";

export default function Main() {
    const mainStyle={
        "flex-grow": "1",
      }
    return (
        <div style={mainStyle}>
            <SiteRoutes />
        </div>
    );
};