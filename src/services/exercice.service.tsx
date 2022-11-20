import axios from "axios";
import Exercice from "../models/exercice";

const exercice = axios.create({
  baseURL: "http://localhost:4000",
});

export const getExercices = async () => {
  try {
    const data = await exercice.get("/");
    await data.data.map((data: Exercice) =>{
        data._id = data._id.toString()
      } )
    return data.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getExerciceById = async (id: string) => {
  try {
    const data = await exercice.get(`/${id}`);
    return data.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const createExercice = async (formData: Exercice) => {
  try {
    await exercice.post("/", { formData });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const deleteExerciceById = async (id: string) => {
  try {
    await exercice.delete(`/${id}`);
  } catch (error: any) {
    console.log(error.message);
  }
};

export const UpdateExercice = async (id: string, formData: Exercice) => {
  try {
    await exercice.put(`/${id}`, { formData });
  } catch (error: any) {
    console.log(error.message);
  }
};