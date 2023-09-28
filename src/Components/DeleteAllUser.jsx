import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { clearUsers } from "../store/slices/UserSlice";
import { clearAllUsers } from "../store/actions/actions";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    // dispatch(clearUsers())
    dispatch(clearAllUsers());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deleteUsers}>
        clear users
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
export default DeleteAllUser;
