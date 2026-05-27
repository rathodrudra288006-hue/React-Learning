// Day 1 of react

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World",
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Day 2
/**
 * <div  id="parent">
  <div id="chid">
    <h1>This is H1 tag</h1> 
  </div>
</div>

ReactElement(Object) => HTML (browser understand)

 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "chid" },
    React.createElement("h1", {}, "This is H1 tag"),
  ),
);
const p1 = ReactDOM.createRoot(document.getElementById("p1"));
p1.render(parent);
