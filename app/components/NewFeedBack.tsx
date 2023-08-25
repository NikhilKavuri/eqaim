"use client";
import {
  Card,
  CardHeader,
  Image,
  StackDivider,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";
import feedBackStyle from "../styles/newfeedback.module.css";
import { useState } from "react";
const NewFeedBack = () => {
  const [optionsState, setOptionsState] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const options = [
    { label: "Feature" },
    { label: "UI" },
    { label: "UX" },
    { label: "Enhancement" },
    { label: "Bug" },
  ];

  const handleOptionsChange = (event: any) => {
    setOptionsState(event.target.value);
    setShowDropDown(!showDropDown);
  };

  const handleCardClick = () => {
    setShowDropDown(false);
  };

  return (
    <div>
      <div className={feedBackStyle.addicon}>
        <AddIcon className={feedBackStyle.addiconbtn} />
      </div>

      <Card className={feedBackStyle.card}>
        <CardHeader className={feedBackStyle.header}>
          <Heading className={feedBackStyle.feedbackHeading}>
            Create New Feedback
          </Heading>
          <div className={feedBackStyle.content}>
            <Heading className={feedBackStyle.feedbackTitle}>
              Feedback Title
            </Heading>
            <Text className={feedBackStyle.descriptiveHeadline}>
              Add a short, descriptive headline
            </Text>
            <input type="text" className={feedBackStyle.descriptionInput} />
            <Heading className={feedBackStyle.feedbackTitle}>Category</Heading>
            <Text className={feedBackStyle.descriptiveHeadline}>
              Choose a Category for your feedback
            </Text>
            <input
              className={feedBackStyle.descriptionInput}
              type="text"
              value={optionsState}
              onClick={() => setShowDropDown(!showDropDown)}
            />
            <Heading className={feedBackStyle.feedbackTitle}>
              Feedback Detail
            </Heading>
            <Text className={feedBackStyle.descriptiveHeadline}>
              Include any specific comments on what should be
              improved,added,etc.
            </Text>
            <input type="text" className={feedBackStyle.detailInput} />
          </div>
        </CardHeader>
        <CardFooter className={feedBackStyle.feedbackfooter}>
          <ButtonGroup spacing="4">
            <Button
              className={feedBackStyle.cancelbtn}
              variant="solid"
              colorScheme="blue"
            >
              Cancel
            </Button>
            <Button
              className={feedBackStyle.addfeedback}
              variant="solid"
              color="white"
              backgroundColor="#AD1FEA"
            >
              Add Feedback
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      {
        showDropDown && (
          <Card
            className={feedBackStyle.selectOptions}
            onClick={handleCardClick}
          >
            <CardBody>
              <Stack divider={<StackDivider />} spacing="2">
                {options.map((option) => (
                  <Text pt="1" key={option.label} fontSize="sm">
                    {option.label}
                  </Text>
                ))}
              </Stack>
            </CardBody>
          </Card>
        )
        // {options.map((option) => (
        //   <option id={feedBackStyle.options} key={option.label}>
        //     {option.label}
        //   </option>
        // ))}
      }
    </div>
  );
};

export default NewFeedBack;
