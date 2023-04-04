import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const AppBreadcrumb = () => {
  const location = useLocation();

  const items = [
    { title: "Home" },
    { title: "E-Commerce" },
    {
      title:
        location.pathname === "/"
          ? "Products"
          : location.pathname
              .replace(/\//g, "")
              .replace(
                /^(\w)(.+)/,
                (_match, p1, p2) => p1.toUpperCase() + p2.toLowerCase()
              ),
    },
  ];

  return (
    <Breadcrumb
      style={{
        margin: "16px 0",
      }}
      items={items}
    ></Breadcrumb>
  );
};

export default AppBreadcrumb;
