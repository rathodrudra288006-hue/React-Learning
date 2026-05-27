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
  <div id="chid1">
    <h1>This is H1 tag</h1> 
    <h2>This is h2 tag</h2>
  </div>
  <div id="chid2">
    <h1>This is H1 tag</h1> 
    <h2>This is h2 tag</h2>
  </div>
</div>

ReactElement(Object) => HTML (browser understand)

 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "chid1" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
  React.createElement("div", { id: "chid2" }, [
    React.createElement("h1", {}, "This is H1 tag"),
    React.createElement("h2", {}, "This is H2 tag"),
  ]),
]);
const p1 = ReactDOM.createRoot(document.getElementById("p1"));
p1.render(parent);
