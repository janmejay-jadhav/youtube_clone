import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


const Sidebar = ({selectedCategory,setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { xs: "auto", md: "92%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        key={category.name}
        onClick={()=>setSelectedCategory(category.name)}
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#FC1503",
          color: "#fff",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#fff" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
