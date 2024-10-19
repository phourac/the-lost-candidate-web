"use client";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import SubmitForm from "../SubmitForm";
// import { businessForm } from "@/utils/contactUs-util";

interface IForm {
  contact_number: string;
  full_name: string;
  description?: string;
}

interface IBusinessForm {
  businessForm: {
    img: string;
    title: string;
    des: string;
  };
}
function BusinessForm({ businessForm }: IBusinessForm) {
  const { control, handleSubmit } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);
  return (
    <SubmitForm
      des={businessForm.des}
      img={businessForm.img}
      title={businessForm.title}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:gap-10 gap-4">
          <Controller
            name="contact_number"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <div className="flex flex-col gap-4">
                <label className="text-secondary">
                  Contact Number<span className="text-red-500 pl-2">*</span>
                </label>
                <input
                  type="text"
                  className={`border ${
                    error
                      ? "border-red-500 focus:border-red-500"
                      : "border-secondary-dark focus:border-primary"
                  }  text-gray-900 text-sm rounded-lg block w-full p-3 focus:outline-none`}
                  {...field}
                />
              </div>
            )}
          />

          <Controller
            name="full_name"
            defaultValue=""
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <div className="flex flex-col gap-4">
                <label className="text-secondary">
                  Full Name<span className="text-red-500 pl-2">*</span>
                </label>
                <input
                  type="text"
                  className={`border ${
                    error
                      ? "border-red-500 focus:border-red-500"
                      : "border-secondary-dark focus:border-primary"
                  }  text-gray-900 text-sm rounded-lg block w-full p-3 focus:outline-none`}
                  {...field}
                />
              </div>
            )}
          />

          <Controller
            name="description"
            defaultValue=""
            control={control}
            rules={{ required: false }}
            render={({ field }) => (
              <div className="flex flex-col gap-4">
                <label className="text-secondary">Business Type</label>
                <textarea
                  rows={3}
                  className=" border border-secondary-dark text-gray-900 text-sm rounded-lg block w-full p-3 focus:border-primary focus:outline-none"
                  {...field}
                />
              </div>
            )}
          />

          <button
            type="submit"
            className="rounded-[99px] bg-primary text-primary-content p-3  transition duration-300 hover:bg-primary-dark"
          >
            Submit
          </button>
        </div>
      </form>
    </SubmitForm>
  );
}

export default BusinessForm;
