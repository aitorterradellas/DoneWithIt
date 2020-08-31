import React, { useState } from "react";
import { Form, ErrorMessage, FormField, SubmitButton } from "./forms";
import { Notifications } from "expo";
import messages from "../api/messages";

function ContactSellerForm({ listing }) {
  const [messageFailed, setMessageFailed] = useState("");

  const showNotification = (message) => {
    Notifications.presentLocalNotificationAsync({
      title: "You have a new message!",
      body: message,
    });
  };

  const handleSubmit = async (messageInfo, resetForm) => {
    const result = await messages.send(messageInfo);
    if (!result.ok) {
      if (result.data) {
        setMessageFailed(result.data.error);
      } else setMessageFailed("An error ocurred");
      return;
    }

    setMessageFailed("");
    showNotification(messageInfo.message);
    resetForm();
  };

  return (
    <Form
      initialValues={{
        message: "",
        listingId: listing.id,
      }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values, resetForm);
      }}
    >
      <ErrorMessage error={messageFailed} visible={messageFailed} />
      <FormField maxLength={100} name="message" placeholder="Message..." />
      <SubmitButton title="Contact Seller" />
    </Form>
  );
}

export default ContactSellerForm;
