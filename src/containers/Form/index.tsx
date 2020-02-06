import React from 'react';
import { useForm } from 'react-hook-form';
import { IProjects } from 'store/projects/types';

import getInitials from 'utils/getInitials';

import {
  FormRow,
  Label,
  FormTitle,
  Input,
  ButtonSend,
  ErrorMsg,
  RadioMaker,
  Radio,
  RadioGroup,
  RadioStatus,
  RadioStatusMaker,
} from './styles';

export type FormData = {
  project: string;
  status: string;
  title: string;
  date: string;
};

type Props = {
  title: string;
  projects: IProjects[];
  handleSubmitExternal: (data: FormData) => void;
};

type StatusProps = {
  name: string;
};

const statusArr = [
  {
    name: 'approved',
  },
  {
    name: 'waiting',
  },
  {
    name: 'progress',
  },
  {
    name: 'review',
  },
];

// {
//   defaultValues: {
//     project: '1',
//     status: 'approved',
//     title: 'asdfa',
//     date: '2020-01-05',
//   },
// }

const Form: React.FC<Props> = ({ title, projects, handleSubmitExternal }) => {
  const { register, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit((data: FormData) => {
    handleSubmitExternal(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <FormTitle>{title}</FormTitle>

      <FormRow>
        <Label>Projects</Label>

        <RadioGroup>
          {projects.map((project: IProjects) => (
            <Radio>
              {getInitials(project.title)}
              <Input
                key={`project-${project.id}`}
                value={project.id}
                type="radio"
                aria-invalid={errors.project ? 'true' : 'false'}
                name="project"
                ref={register({ required: true })}
              />
              <RadioMaker />
            </Radio>
          ))}
        </RadioGroup>

        {errors.project && <ErrorMsg id="projectError">This field is required</ErrorMsg>}
      </FormRow>

      <FormRow>
        <Label>Status</Label>

        <RadioGroup>
          {statusArr.map((status: StatusProps) => (
            <RadioStatus>
              {status.name}
              <Input
                key={`status-${status.name}`}
                type="radio"
                aria-invalid={errors.status ? 'true' : 'false'}
                name="status"
                value={status.name}
                ref={register({ required: true })}
              />
              <RadioStatusMaker />
            </RadioStatus>
          ))}
        </RadioGroup>

        {errors.status && <ErrorMsg id="statusError">This field is required</ErrorMsg>}
      </FormRow>

      <FormRow>
        <Label>Title</Label>
        <Input
          type="text"
          aria-invalid={errors.title ? 'true' : 'false'}
          name="title"
          ref={register({ required: true })}
        />
        {errors.title && <ErrorMsg id="titleError">This field is required</ErrorMsg>}
      </FormRow>

      <FormRow>
        <Label>Date</Label>
        <Input
          type="date"
          aria-invalid={errors.date ? 'true' : 'false'}
          name="date"
          ref={register({ required: true })}
        />
        {errors.date && <ErrorMsg id="dateError">This field is required</ErrorMsg>}
      </FormRow>

      <ButtonSend type="submit">Send</ButtonSend>
    </form>
  );
};

export default Form;
