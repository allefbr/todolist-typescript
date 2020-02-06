import React, { useEffect, useState } from 'react';
import { FaRegStickyNote } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

import { useDispatch, useSelector } from 'react-redux';
import fetchProjects, { selectedProject } from 'store/projects/thunk';
import TodosPage from 'containers/Todos';

import fetchTodosByProject, { checkedTodoRequest, createTodo } from 'store/todos/thunk';
import todosSelectors from 'store/todos/selectors';
import projectsSelectors from 'store/projects/selectors';
import { IProjects } from 'store/projects/types';
import { ITodos } from 'store/todos/types';

import { HeaderLogged, Projects } from 'components';
import Modal from 'components/Modal';
import Form, { FormData } from 'containers/Form';

import { Wrapper, ColumnLeft, ColumnRight, ContentSide, ContentColumnRight, EmptyProject, ButtonAdd } from './styles';

const HomePage = () => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const projects = useSelector(projectsSelectors.getProjects);
  const countProjects = useSelector(projectsSelectors.getTotalProjects);

  const todos = useSelector(todosSelectors.getTodos);
  const countTodos = useSelector(todosSelectors.getTotalTodos);

  const projectId = useSelector(projectsSelectors.getProjectsSelected);
  const projectSelected = projects.filter((project: IProjects) => project.id === projectId)[0];

  const handleSelectProjects = (id: number) => {
    return dispatch(selectedProject(id));
  };

  const handleCheckedTodo = (todo: ITodos) => {
    return dispatch(checkedTodoRequest(todo));
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = (todo: FormData) => {
    dispatch(createTodo(todo));
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodosByProject(projectId));
  }, [dispatch, projectId]);

  return (
    <>
      <Wrapper>
        <ColumnLeft>
          <ContentSide>
            <HeaderLogged title="Hi Samantha" description="Welcome back to the workspace, we missed you!" />
            <Projects title="Projects" projects={projects} count={countProjects} handleClick={handleSelectProjects} />
          </ContentSide>
        </ColumnLeft>

        <ColumnRight>
          <ContentColumnRight>
            {countTodos <= 0 ? (
              <EmptyProject>
                <FaRegStickyNote />
                Nenhum projeto escolhido
              </EmptyProject>
            ) : (
              <TodosPage todos={todos} projectSelected={projectSelected} handleChecked={handleCheckedTodo} />
            )}
          </ContentColumnRight>
        </ColumnRight>
      </Wrapper>

      {openModal && (
        <Modal onClose={handleCloseModal}>
          <Form title="Add todo" projects={projects} handleSubmitExternal={handleSubmit} />
        </Modal>
      )}

      <ButtonAdd onClick={handleOpenModal}>
        <AiOutlinePlus />
      </ButtonAdd>
    </>
  );
};

export default HomePage;
