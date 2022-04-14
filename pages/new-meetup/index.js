import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  return (
    <NewMeetupForm
      onAddMeetup={(enteredMeetupData) => {
        console.log(enteredMeetupData);
      }}
    />
  );
};

export default NewMeetupPage;
