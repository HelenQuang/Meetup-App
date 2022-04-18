import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();

  const onAddMeetupHandler = async (enteredMeetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "Content-type": "application/json" },
    });

    const data = await res.json();

    router.replace("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add A New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
    </Fragment>
  );
};

export default NewMeetupPage;
