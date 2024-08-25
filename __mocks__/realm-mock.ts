const realmInstanceMock = {
  create: function () {},
  delete: function () {},
  close: function () {},
  write: function () {},
  objectForPrimaryKey: function () {
    return {};
  },
  objects: function () {
    const wallets = {
      filtered: function () {
        return [];
      },
    };
    return wallets;
  },
};

export default {
  UpdateMode: { Modified: 1 },
  open: () => realmInstanceMock,
};
