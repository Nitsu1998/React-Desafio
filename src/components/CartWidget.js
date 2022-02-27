import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function CartWidget() {
  return (
    <button>
      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
    </button>
  );
}
