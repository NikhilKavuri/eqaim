"use client";
import React from "react";
import feedbackstyle from "../styles/feedback.module.css";
import { Card, CardBody, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ChatIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Illustration from "../../public/illustration-empty.svg";
import Image from "next/image";
import navbarStyle from "../styles/navbar.module.css";
import { useRouter } from "next/navigation";
interface FeedbackItem {
  cardHead: string;
  cardDescription: string;
  type: string;
  vote: number;
  noOfComments: number;
}
const Feedbacks = () => {
  const [feedbackData, setFeedbackData] = useState<FeedbackItem[]>([
    {
      cardHead: "Bug related",
      cardDescription: "You have bug in your code",
      type: "Bug",
      vote: 25,
      noOfComments: 23,
    },
    {
      cardHead: "Bug related",
      cardDescription: "You have bug in your code",
      type: "Bug",
      vote: 25,
      noOfComments: 23,
    },
  ]);
  const router = useRouter();
  const handleRoute = () => {
    router.push("/newfeedback");
  };
  return (
    <div>
      {feedbackData.length > 0 ? (
        <div className={feedbackstyle.feedbackcontainer}>
          {feedbackData.map((feedbackData) => (
            <Card id={feedbackstyle.cardcontainer}>
              <div className={feedbackstyle.votecontainer}>
                <Button className={feedbackstyle.votebtn}>
                  <ChevronUpIcon />
                  {feedbackData.vote}
                </Button>
              </div>
              <CardBody className={feedbackstyle.feedbackbody}>
                <Heading className={feedbackstyle.feedbackHeading}>
                  {feedbackData.cardHead}
                </Heading>
                <Text
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: "jost,sans-serif",
                    color: "#647196",
                  }}
                  className={feedbackstyle.feedbackdes}
                >
                  {feedbackData.cardDescription}
                </Text>
                <Text className={feedbackstyle.feedbacktype}>
                  {feedbackData.type}
                </Text>
              </CardBody>
              <div className={feedbackstyle.comment}>
                <ChatIcon
                  style={{ color: "grey" }}
                  className={feedbackstyle.ChatIcon}
                />
                <p className={feedbackstyle.noOfComments}>
                  {feedbackData.noOfComments}
                </p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className={feedbackstyle.feedbackcontainer}>
          <Card className={feedbackstyle.emptyCard}>
            <CardBody className={feedbackstyle.emptycardbody}>
              <Image priority src={Illustration} alt="Finding feedback svg" />
              <Heading className={feedbackstyle.reporthead}>
                There is no Feedback yet
              </Heading>
              <Text className={feedbackstyle.reporttext}>
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app{" "}
              </Text>
              <Button
                className={navbarStyle.feedbackbtn}
                id={feedbackstyle.feedbackbtn}
                variant="solid"
                color="white"
                backgroundColor="#AD1FEA"
                onClick={handleRoute}
              >
                + Add Feedback
              </Button>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Feedbacks;
