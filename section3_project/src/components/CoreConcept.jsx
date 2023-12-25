// renders the items in core concepts section by receiving props(html/jsx attributes) set below like title, description, image
// you can use one function to render the same component but with different data by setting the data with key value pairs with different
// data like in the core concepts section in jsx
export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}