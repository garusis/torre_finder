import useCreateRemitAddressStore from "../index";
import { FORM_IDS, initialState } from "../constants";

describe("useCreateRemitAddressStore", () => {
  it("sets the title modal", () => {
    const param = ["Title", "SubTitle"];

    expect(useCreateRemitAddressStore.getState().titleModal).toBe(
      initialState.titleModal
    );
    useCreateRemitAddressStore.getState().actions.setTitleModal(param);
    expect(useCreateRemitAddressStore.getState().titleModal).toBe(param);
  });

  it("sets the vendor", () => {
    const param = { id: 5 };

    expect(useCreateRemitAddressStore.getState().vendor).toBe(
      initialState.vendor
    );
    useCreateRemitAddressStore.getState().actions.setVendor(param);
    expect(useCreateRemitAddressStore.getState().vendor).toBe(param);
  });

  it("sets the currentForm", () => {
    const param = { id: 5 };

    expect(useCreateRemitAddressStore.getState().currentForm).toBe(
      initialState.currentForm
    );
    useCreateRemitAddressStore.getState().actions.setCurrentForm(param);
    expect(useCreateRemitAddressStore.getState().currentForm).toBe(param);
  });

  it("sets the formId", () => {
    expect(useCreateRemitAddressStore.getState().formId).toBe(
      initialState.formId
    );

    useCreateRemitAddressStore.getState().actions.openRemitAddressForm();
    expect(useCreateRemitAddressStore.getState().formId).toBe(
      FORM_IDS.REMIT_ADDRESS
    );
    expect(useCreateRemitAddressStore.getState().hasTransitioned).toBe(
      initialState.hasTransitioned
    );

    useCreateRemitAddressStore.getState().actions.openRemitAddressForm(true);
    expect(useCreateRemitAddressStore.getState().formId).toBe(
      FORM_IDS.REMIT_ADDRESS
    );
    expect(useCreateRemitAddressStore.getState().hasTransitioned).toBe(true);

    useCreateRemitAddressStore.getState().actions.openAddressBookForm();
    expect(useCreateRemitAddressStore.getState().formId).toBe(
      FORM_IDS.SELECT_CONTACT
    );

    useCreateRemitAddressStore.getState().actions.openCreateContactForm();
    expect(useCreateRemitAddressStore.getState().formId).toBe(
      FORM_IDS.CREATE_CONTACT
    );
  });

  it("resets the store", () => {
    useCreateRemitAddressStore.getState().actions.resetStore();
    expect(useCreateRemitAddressStore.getState()).toEqual({
      ...initialState,
      actions: expect.anything(),
    });
  });
});
