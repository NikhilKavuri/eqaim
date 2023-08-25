"use client";
import { Button, Card, CardBody, CardFooter,Heading,Text } from "@chakra-ui/react";
import coursecss from "../styles/courses.module.css"
import Link from "next/link";
const Courses = () => {
  return (
    <div className={coursecss.coursecontainer}>
      <div>
        <Card className={coursecss.Eqaimcard}>
            <CardFooter className={coursecss.EqaimContent}>
                <Heading className={coursecss.heading}>Eqaim</Heading>
                <Text className={coursecss.subhead}>Feedback Board</Text>
            </CardFooter>
        </Card>
      </div>
      <div>
        <Card className={coursecss.feedbackCard}>
            <CardBody className={coursecss.feed}>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>All</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>UI</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>UX</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>Enhancement</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>Bug</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>Feature</Button>
            </CardBody>
        </Card>
      </div>
      <div>
        <Card className={coursecss.roadmapCard}>
            <div className={coursecss.roadmapheader}>
                <Heading className={coursecss.roadmaphead}>Roadmap</Heading>
                <Link className={coursecss.roadmaplink} href="/roadmap">View</Link>
            </div>
            <div className={coursecss.ullist}>
                <ul className={coursecss.ul}>
                    <li>
                        <div className={coursecss.courselist}>
                            <Text className={coursecss.planned}>Planned</Text>
                            <Text className={coursecss.coursenumber}>2</Text>
                        </div>
                    </li>
                    <li>
                        <div className={coursecss.courselist}>
                            <Text className={coursecss.inprogress}>In-Progress</Text>
                            <Text className={coursecss.coursenumber}>2</Text>
                        </div>
                    </li>
                    <li>
                        <div className={coursecss.courselist}>
                            <Text className={coursecss.live}>Live</Text>
                            <Text className={coursecss.coursenumber}>2</Text>
                        </div>
                    </li>
                </ul>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
