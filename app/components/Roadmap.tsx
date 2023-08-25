"use client";
import roadmapstyle from "../styles/roadmapstyle.module.css";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronUpIcon, ChatIcon } from "@chakra-ui/icons";
interface RoadmapItem {
  heading: String;
  description: String;
  type: string;
  vote: number;
  noOfComments: number;
  workStatus: String;
}
const Roadmap = () => {
  const [plannedroadmapData, setPlannedRoadMapData] = useState<RoadmapItem[]>([
    {
      heading: "More Comprehensive resorts",
      description:
        " It would great to see a more detailed breakdown of solutions",
      type: "Feature",
      vote: 113,
      noOfComments: 2,
      workStatus: "planning",
    },
    {
      heading: "More Comprehensive resorts",
      description:
        " It would great to see a more detailed breakdown of solutions",
      type: "Feature",
      vote: 113,
      noOfComments: 2,
      workStatus: "planning",
    },
  ]);
  const [progressroadmapData, setProgressRoadMapData] = useState<RoadmapItem[]>(
    [
      {
        heading: "More Comprehensive resorts",
        description:
          " It would great to see a more detailed breakdown of solutions",
        type: "Feature",
        vote: 113,
        noOfComments: 2,
        workStatus: "inprogress",
      },
      {
        heading: "More Comprehensive resorts",
        description:
          " It would great to see a more detailed breakdown of solutions",
        type: "Feature",
        vote: 13,
        noOfComments: 5,
        workStatus: "inprogress",
      },
      {
        heading: "More Comprehensive resorts",
        description:
          " It would great to see a more detailed breakdown of solutions",
        type: "Feature",
        vote: 113,
        noOfComments: 2,
        workStatus: "inprogress",
      },
    ]
  );
  const [liveroadmapData, setLiveRoadMapData] = useState<RoadmapItem[]>([
    {
      heading: "More Comprehensive resorts",
      description:
        " It would great to see a more detailed breakdown of solutions",
      type: "Feature",
      vote: 113,
      noOfComments: 2,
      workStatus: "inprogress",
    },
  ]);
  return (
    <div className={roadmapstyle.roadmapCont}>
      <div className={roadmapstyle.leftcont}>
        <div>
          <Heading className={roadmapstyle.mainhead}>Planned ({plannedroadmapData.length})</Heading>
          <Text className={roadmapstyle.maintext}>Ideas priortized for research</Text>
        </div>
        <div>
          {plannedroadmapData.map((item) => (
            <Card className={roadmapstyle.plannedCard}>
              <CardHeader>
                <ul className={roadmapstyle.ul}>
                  <li>
                    <Text className={roadmapstyle.planned}>
                      Planned ({plannedroadmapData.length})
                    </Text>
                  </li>
                </ul>
              </CardHeader>
              <CardBody>
                <Heading className={roadmapstyle.plannedHead}>
                  {item.heading}
                </Heading>
                <Text className={roadmapstyle.planneddes}>
                  {item.description}
                </Text>
                <Text className={roadmapstyle.type}>{item.type}</Text>
              </CardBody>
              <CardFooter className={roadmapstyle.cardfooter}>
                <div className={roadmapstyle.votecontainer}>
                  <Button className={roadmapstyle.votebtn}>
                    <ChevronUpIcon color={"#4661E6"} />
                    <Text className={roadmapstyle.vote}>{item.vote}</Text>
                  </Button>
                </div>
                <div className={roadmapstyle.comment}>
                  <ChatIcon
                    style={{ color: "grey" }}
                    className={roadmapstyle.ChatIcon}
                  />
                  <p className={roadmapstyle.noOfComments}>
                    <Text id={roadmapstyle.commentNum}>
                      {item.noOfComments}
                    </Text>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className={roadmapstyle.middlecont}>
        <div>
          <Heading className={roadmapstyle.mainhead}>In-progress ({progressroadmapData.length})</Heading>
          <Text  className={roadmapstyle.maintext}>Currently being developed</Text>
        </div>
        <div>
          {progressroadmapData.map((item) => (
            <Card className={roadmapstyle.inprogresscard}>
              <CardHeader>
                <ul className={roadmapstyle.ul}>
                  <li>
                    <Text className={roadmapstyle.inprogress}>
                      In-progress ({progressroadmapData.length})
                    </Text>
                  </li>
                </ul>
              </CardHeader>
              <CardBody>
                <Heading className={roadmapstyle.plannedHead}>
                  {item.heading}
                </Heading>
                <Text className={roadmapstyle.planneddes}>
                  {item.description}
                </Text>
                <Text className={roadmapstyle.type}>{item.type}</Text>
              </CardBody>
              <CardFooter className={roadmapstyle.cardfooter}>
                <div className={roadmapstyle.votecontainer}>
                  <Button className={roadmapstyle.votebtn}>
                    <ChevronUpIcon color={"#4661E6"} />
                    <Text className={roadmapstyle.vote}>{item.vote}</Text>
                  </Button>
                </div>
                <div className={roadmapstyle.comment}>
                  <ChatIcon
                    style={{ color: "grey" }}
                    className={roadmapstyle.ChatIcon}
                  />
                  <p className={roadmapstyle.noOfComments}>
                    <Text id={roadmapstyle.commentNum}>
                      {item.noOfComments}
                    </Text>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className={roadmapstyle.rightcont}>
        <div>
          <Heading className={roadmapstyle.mainhead}>Live ({liveroadmapData.length})</Heading>
          <Text  className={roadmapstyle.maintext}>Released features</Text>
        </div>
        <div>
          {liveroadmapData.map((item) => (
            <Card className={roadmapstyle.livecard}>
              <CardHeader>
                <ul className={roadmapstyle.ul}>
                  <li>
                    <Text className={roadmapstyle.live}>
                      Live ({liveroadmapData.length})
                    </Text>
                  </li>
                </ul>
              </CardHeader>
              <CardBody>
                <Heading className={roadmapstyle.plannedHead}>
                  {item.heading}
                </Heading>
                <Text className={roadmapstyle.planneddes}>
                  {item.description}
                </Text>
                <Text className={roadmapstyle.type}>{item.type}</Text>
              </CardBody>
              <CardFooter className={roadmapstyle.cardfooter}>
                <div className={roadmapstyle.votecontainer}>
                  <Button className={roadmapstyle.votebtn}>
                    <ChevronUpIcon color={"#4661E6"} />
                    <Text className={roadmapstyle.vote}>{item.vote}</Text>
                  </Button>
                </div>
                <div className={roadmapstyle.comment}>
                  <ChatIcon
                    style={{ color: "grey" }}
                    className={roadmapstyle.ChatIcon}
                  />
                  <p className={roadmapstyle.noOfComments}>
                    <Text id={roadmapstyle.commentNum}>
                      {item.noOfComments}
                    </Text>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
