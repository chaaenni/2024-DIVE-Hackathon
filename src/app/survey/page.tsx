"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface UserData {
  name: string
  email: string
  company: string
  role: string
  experience: string
  interests: string[]
  notifications: boolean
  username: string
  password: string
}

const initialUserData: UserData = {
  name: "",
  email: "",
  company: "",
  role: "",
  experience: "",
  interests: [],
  notifications: false,
  username: "",
  password: "",
}

interface StepProps {
  userData: UserData
  updateUserData: (field: keyof UserData, value: any) => void
}

const OnboardingWizard: React.FC = () => {
  const [step, setStep] = useState<number>(1)
  const [userData, setUserData] = useState<UserData>(initialUserData)

  const updateUserData = (field: keyof UserData, value: any) => {
    setUserData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeStep userData={userData} updateUserData={updateUserData} />
      case 2:
        return <ProfessionalStep userData={userData} updateUserData={updateUserData} />
      case 3:
        return <PreferencesStep userData={userData} updateUserData={updateUserData} />
      case 4:
        return <AccountStep userData={userData} updateUserData={updateUserData} />
      case 5:
        return <ConfirmationStep userData={userData} />
      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>SaaS Onboarding - Step {step} of 5</CardTitle>
      </CardHeader>
      <CardContent>{renderStep()}</CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button onClick={prevStep} variant="outline">
            Previous
          </Button>
        )}
        {step < 5 && <Button onClick={nextStep}>Next</Button>}
      </CardFooter>
    </Card>
  )
}

const WelcomeStep: React.FC<StepProps> = ({ userData, updateUserData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Welcome! Let's get started.</h2>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={userData.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateUserData("name", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={userData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateUserData("email", e.target.value)}
        />
      </div>
    </div>
  )
}

const ProfessionalStep: React.FC<StepProps> = ({ userData, updateUserData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Tell us about your professional background</h2>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          value={userData.company}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateUserData("company", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select value={userData.role} onValueChange={(value: string) => updateUserData("role", value)}>
          <SelectTrigger id="role">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="designer">Designer</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Experience Level</Label>
        <RadioGroup value={userData.experience} onValueChange={(value: string) => updateUserData("experience", value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="junior" id="junior" />
            <Label htmlFor="junior">Junior</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mid" id="mid" />
            <Label htmlFor="mid">Mid-level</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="senior" id="senior" />
            <Label htmlFor="senior">Senior</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

const PreferencesStep: React.FC<StepProps> = ({ userData, updateUserData }) => {
  const toggleInterest = (interest: string) => {
    const updatedInterests = userData.interests.includes(interest)
      ? userData.interests.filter((i) => i !== interest)
      : [...userData.interests, interest]
    updateUserData("interests", updatedInterests)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Set your preferences</h2>
      <div className="space-y-2">
        <Label>Areas of Interest</Label>
        <div className="space-y-2">
          {["Frontend", "Backend", "DevOps", "Design", "Project Management"].map((interest) => (
            <div key={interest} className="flex items-center space-x-2">
              <Checkbox
                id={interest}
                checked={userData.interests.includes(interest)}
                onCheckedChange={() => toggleInterest(interest)}
              />
              <Label htmlFor={interest}>{interest}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="notifications"
          checked={userData.notifications}
          onCheckedChange={(checked: boolean) => updateUserData("notifications", checked)}
        />
        <Label htmlFor="notifications">Receive email notifications</Label>
      </div>
    </div>
  )
}

const AccountStep: React.FC<StepProps> = ({ userData, updateUserData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Set up your account</h2>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          value={userData.username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateUserData("username", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={userData.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateUserData("password", e.target.value)}
        />
      </div>
    </div>
  )
}

const ConfirmationStep: React.FC<{ userData: UserData }> = ({ userData }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Confirm your details</h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Company:</strong> {userData.company}
        </p>
        <p>
          <strong>Role:</strong> {userData.role}
        </p>
        <p>
          <strong>Experience:</strong> {userData.experience}
        </p>
        <p>
          <strong>Interests:</strong> {userData.interests.join(", ")}
        </p>
        <p>
          <strong>Notifications:</strong> {userData.notifications ? "Enabled" : "Disabled"}
        </p>
        <p>
          <strong>Username:</strong> {userData.username}
        </p>
      </div>
      <Button className="w-full">Complete Onboarding</Button>
    </div>
  )
}

export default OnboardingWizard