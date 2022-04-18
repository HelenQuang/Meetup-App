import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Luxury Resort",
    address: "12 Wall Street",
    description: "This is a beautiful place",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Hotel By The Beach",
    address: "15 Wall Street",
    description: "This is a beautiful place",
  },
  {
    id: "m3",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    title: "Relaxed Villa",
    address: "20 Wall Street",
    description: "This is a beautiful place",
  },
  {
    id: "m4",
    image:
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    title: "Into The Nature Retreat Resort",
    address: "22 Wall Street",
    description: "This is a beautiful place",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  //fetch data from API
  return {
    props: { meetups: DUMMY_DATA },
    revalidate: 1,
  };
}

export default HomePage;
