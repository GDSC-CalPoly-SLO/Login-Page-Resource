import "./home.css";

export default function HomePage({ setPage, setModalState }) {
  return (
    <div>
      <button
        type="button"
        className="newTask"
        onClick={() => setModalState(true)}
      >
        New Task
      </button>
    </div>
  );
}
