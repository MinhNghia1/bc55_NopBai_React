import { useEffect, useState, useRef } from "react";
import axios from "axios";
import FormStudent from "./FormStudent";
import ListStudent from "./ListStudent";
import toast, { Toaster } from "react-hot-toast";
const Base_Data = "https://65584af0e93ca47020a94026.mockapi.io/StudentManagerment";
export default function StudentManagement() {
  const [users, setUsers] = useState([]);
  const [isShowMess, setIsShowMess] = useState(true);
  const [selectUser, setSelectUser] = useState(null);
  const [searchTerm, setsearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);
  const timer = useRef();
  const fectData = async () => {
    try {
      const respone = await axios.get(Base_Data, {
        params: {
          name: searchTerm,
        },
      });
      setUsers(respone.data);
      isShowMess && toast.success("Lấy Danh Sách Thành Công");
    } catch (error) {}
  };
  useEffect(() => {
    fectData?.();
  }, [debounceSearchTerm]);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${Base_Data}/${id}`);
      fectData();
      setIsShowMess(false);
      toast.success("Xóa Người Dùng Thành Công");
    } catch (error) {}
  };
  const handleSubmit = async (user) => {
    try {
      await axios.post(Base_Data, user);
      toast.success("Thêm User Thành Công");
      fectData();
    } catch (error) {}
  };
  const handleSelectUser = async (id) => {
    try {
      const { data } = await axios.get(`${Base_Data}/${id}`);
      setSelectUser(data);
    } catch (error) {}
  };
  const handleUpdateUser = async (id, user) => {
    try {
      await axios.put(`${Base_Data}/${id}`, user);
      fectData();
      toast.success("Update User Thành Công");
    } catch (error) {}
  };
  const handleSearch = (evt) => {
    setsearchTerm(evt.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDebounceSearchTerm(evt.target.value);
    }, [500]);
  };
  return (
    <div className="container">
      <h1 className="text-center">Managerment</h1>
      <Toaster />
      <FormStudent onUpdate={handleUpdateUser} selectUser={selectUser} onSubmit={handleSubmit} />
      <div className="my-3 ">
        <input value={searchTerm} onChange={handleSearch} className="form-control " type="text" placeholder="Search By Name" />
      </div>

      <ListStudent onRepair={handleSelectUser} onDelete={handleDelete} infoUsers={users} />
    </div>
  );
}
