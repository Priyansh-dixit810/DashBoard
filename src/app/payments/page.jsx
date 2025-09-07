import DataTable from "./data-table";
import {columns} from "./column";
const getData = async ()=> {
  return [
    {
      id: "ind001",
      amount: 520,
      status: "success",
      username: "Aarav Sharma",
      email: "aarav.sharma@gmail.com",
    },
    {
      id: "ind002",
      amount: 340,
      status: "pending",
      username: "Priya Verma",
      email: "priya.verma@gmail.com",
    },
    {
      id: "ind003",
      amount: 760,
      status: "failed",
      username: "Rohan Gupta",
      email: "rohan.gupta@gmail.com",
    },
    {
      id: "ind004",
      amount: 420,
      status: "success",
      username: "Sneha Iyer",
      email: "sneha.iyer@gmail.com",
    },
    {
      id: "ind005",
      amount: 295,
      status: "pending",
      username: "Karan Singh",
      email: "karan.singh@gmail.com",
    },
    {
      id: "ind006",
      amount: 610,
      status: "success",
      username: "Ananya Reddy",
      email: "ananya.reddy@gmail.com",
    },
    {
      id: "ind007",
      amount: 185,
      status: "failed",
      username: "Vikram Mehta",
      email: "vikram.mehta@gmail.com",
    },
    {
      id: "ind008",
      amount: 830,
      status: "success",
      username: "Meera Nair",
      email: "meera.nair@gmail.com",
    },
    {
      id: "ind009",
      amount: 470,
      status: "pending",
      username: "Aditya Joshi",
      email: "aditya.joshi@gmail.com",
    },
    {
      id: "ind010",
      amount: 390,
      status: "success",
      username: "Neha Kulkarni",
      email: "neha.kulkarni@gmail.com",
    },
    {
      id: "ind011",
      amount: 650,
      status: "failed",
      username: "Siddharth Das",
      email: "siddharth.das@gmail.com",
    },
    {
      id: "ind012",
      amount: 720,
      status: "success",
      username: "Ishita Banerjee",
      email: "ishita.banerjee@gmail.com",
    },
    {
      id: "ind013",
      amount: 250,
      status: "pending",
      username: "Rajesh Kumar",
      email: "rajesh.kumar@gmail.com",
    },
    {
      id: "ind014",
      amount: 560,
      status: "success",
      username: "Divya Patel",
      email: "divya.patel@gmail.com",
    },
    {
      id: "ind015",
      amount: 310,
      status: "failed",
      username: "Arjun Yadav",
      email: "arjun.yadav@gmail.com",
    },
  ];
};

const PaymentPage = async ()=> {
    const data = await getData();
    return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
    );
}

export default PaymentPage;