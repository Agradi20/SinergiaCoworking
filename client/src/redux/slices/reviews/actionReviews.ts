/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { setReview } from ".";
import { Dispatch } from "../../store/store";

export const getReviews = async (dispatch: Dispatch) => {
    try {
        const endpoint = import.meta.env.VITE_BASENDPOINT_BACK + `/score`;
        const { data } = await axios.get(endpoint);

        dispatch(setReview(data));

    } catch (error) {
        if (typeof error === "string") {
      console.log(error);
    } else if (error instanceof Error) {
      const message = error.message;
      console.log(message);
    } else {
      console.log(error);
    }
    }
}; // Asegúrate de importar la acción adecuada para actualizar el estado de la reseña

interface ReviewFormData {
    stars: number;
    comment: string;
    user: string;
    office: string;
  }

export const postReviews = async (dispatch: Dispatch, formData: ReviewFormData) => {
  try {
    const endpoint = import.meta.env.VITE_BASENDPOINT_BACK + `/score`;
    const { data } = await axios.post(endpoint, formData); // Envía los datos del formulario al backend

    dispatch(setReview(data)); // Actualiza el estado de la reseña en Redux
  } catch (error) {
    if (typeof error === "string") {
        console.log(error);
      } else if (error instanceof Error) {
        const message = error.message;
        console.log(message);
      } else {
        console.log(error);
      }
  }
};