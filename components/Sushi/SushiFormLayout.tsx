"use client";
import { useProfileContext } from "@/context/ProfileContext";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type FormValues = {
  twitterProfile: string;
  instagramProfile: string;
  linkedinProfile: string;
  githubProfile: string;
};

type SushiFormLayoutProps = {
  setProfileSet: React.Dispatch<React.SetStateAction<boolean>>;
};

const SushiFormLayout = ({ setProfileSet }: SushiFormLayoutProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const { addProfile } = useProfileContext();

  const onSubmitHandler = (data: FormValues) => {
    console.log("inside submit handler");
    console.log(data);

    if (
      data.twitterProfile != undefined &&
      data.twitterProfile != "" &&
      data.instagramProfile != undefined &&
      data.instagramProfile != ""
    ) {
      addProfile({
        twitterProfile: data.twitterProfile,
        instagramProfile: data.instagramProfile,
        linkedinProfile: data.linkedinProfile,
        githubProfile: data.githubProfile,
      });
    }

    setProfileSet(true);
  };

  return (
    <Box maxW="sm" mx="auto">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormControl isInvalid={!!errors.twitterProfile}>
          <FormLabel htmlFor="twitterProfile">Twitter Profile</FormLabel>
          <Input
            type="text"
            id="twitterProfile"
            {...register("twitterProfile", { required: true })}
          />
          <FormErrorMessage>
            {errors.twitterProfile && "Twitter profile is required"}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.instagramProfile} mt={4}>
          <FormLabel htmlFor="instagramProfile">Instagram Profile</FormLabel>
          <Input
            type="text"
            id="instagramProfile"
            {...register("instagramProfile", { required: true })}
          />
          <FormErrorMessage>
            {errors.instagramProfile && "Instagram profile is required"}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.linkedinProfile} mt={4}>
          <FormLabel htmlFor="linkedinProfile">LinkedIn Profile </FormLabel>
          <Input
            type="text"
            id="linkedinProfile"
            {...register("linkedinProfile", { required: true })}
          />
          <FormErrorMessage>
            {errors.linkedinProfile && "Linkedin profile is required"}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.githubProfile} mt={4}>
          <FormLabel htmlFor="githubProfile">Github Profile </FormLabel>
          <Input
            type="text"
            id="githubProfile"
            {...register("githubProfile", { required: true })}
          />
          <FormErrorMessage>
            {errors.githubProfile && "Linkedin profile is required"}
          </FormErrorMessage>
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SushiFormLayout;
