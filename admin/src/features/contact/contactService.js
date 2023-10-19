import { axiosInstance, config } from "../../utils/axiosConfig";

const getContacts = async () => {
  const response = await axiosInstance.get("contact", config());
  if (response.data) {
    return response.data;
  }
};

const getContact = async (contactId) => {
  const response = await axiosInstance.get(`contact/${contactId}`, config());
  if (response.data) {
    return response.data;
  }
};

const contactService = {
  getContacts,
  getContact,
};

export default contactService;
