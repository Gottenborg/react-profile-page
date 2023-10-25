import HoButton from "../atoms/HoButton";
import IconUser from "../icons/IconUser";
import TagList from "../molecules/TagList";
import PageSection from "../molecules/PageSection";
import ImageModal from "../molecules/ImageModal";
import TextInput from "../atoms/TextInput";

import { ChangeEvent, useRef, useState } from "react";
import { useUserContext } from "../contexts/UserContext"

const ProfilePage = () => {

  const {user, updateUser, saveFile, invalidInput} = useUserContext()

  const [disabled, setDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const fileUploadInput = useRef<HTMLInputElement>(null);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      saveFile(selectedFile)
    }
  }
  
  return (
    <div className="max-w-4xl w-full flex flex-col justify-center">
    <PageSection>
      <div className="w-full flex flex-row items-center gap-4 justify-between">
        <div className="flex flex-row items-center gap-4">
          <div className="w-28 h-28 bg-neutral-50 rounded-full border-2 border-gray-200 flex justify-center items-center">
            <IconUser />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
            <span>Update your photo and personal information.</span>
          </div>
        </div>
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          className="hidden"
          ref={fileUploadInput}
          onChange={handleFileChange}
        />
        <label htmlFor="icon-button-file">
          <HoButton label="Upload new picture" onClick={() => fileUploadInput.current!.click()} primary/>
        </label>
      </div>
    </PageSection>
    <PageSection>
      <div className="grid grid-flow-row gap-6">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Personal info</h1>
          {disabled ? 
            <HoButton label="Edit info" onClick={toggleDisabled}/>
          :
            <HoButton primary label="Lock info" onClick={toggleDisabled}/>
          }
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            id="firstname"
            label="First Name"
            placeholder="First Name"
            value={user.firstName}
            disabled={disabled}
            onInput={(value:string) => updateUser("firstName", value)}
            type="text"
          />
          <TextInput
            id="lastname"
            label="Last Name"
            placeholder="Last Name"
            value={user.lastName}
            disabled={disabled}
            onInput={(value:string) => updateUser("lastName", value)}
            type="text"
          />
          <TextInput
            id="phoneNumber"
            label="Phone"
            placeholder="Phone"
            value={user.phoneNumber}
            disabled={disabled}
            onInput={(value:string) => updateUser("phoneNumber", value)}
            type="tel"
          />
          <TextInput
            id="email"
            label="Email"
            placeholder="Email"
            value={user.email}
            disabled={disabled}
            onInput={(value:string) => updateUser("email", value)}
            type="email"
          />
          <TextInput
            id="birthday"
            label="Birthday"
            placeholder="Birthday"
            value={user.birthday}
            disabled={disabled}
            onInput={(value:string) => updateUser("birthday", value)}
            type="date"
          />
        </div>
        {invalidInput && (
          <div className="flex justify-center items-center border-2 border-red-700 bg-red-500 py-3 rounded-lg">
            <p className="mt-1 text-white text-md">Please enter a valid {invalidInput}.</p>
          </div>
      )}
      </div>
    </PageSection>
    <PageSection>
      <div>
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Other settings</h1>
        </div>
        <div className="">
          <h2 className="font-bold">interest</h2>
          <TagList tags={user.interests} />
        </div>
      </div>
    </PageSection>
    <ImageModal
      title="Delete profile photo?"
      message="You are about to delete your profile photo, would you like to proceed?"
      showModal={showModal}
      closeModal={() => setShowModal(false)}
    />
  </div>
  )
}

export default ProfilePage