// ./src/api/[api-name]/content-types/restaurant/lifecycles.js

module.exports = {
  async beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    const senderBankaccountID = data.fromBankaccount.id;
    const reciverBankaccountID = data.toBankaccount.id;
    const amountSent = data.amount;
    const { type: currencyOfTransaction } = data.currency;

    // get the balance before create.
    const balances = await strapi.db
      .query("api::bankaccount.bankaccount")
      .findOne({
        select: ["balanceDollar", "balanceTRY"],
        where: { id: senderBankaccountID },
      });

    const { balanceTRY, balanceDollar } = balances;

    // get the fee before create.
    const feeObj = await strapi.db.query("api::fee.fee").findOne({
      select: ["fee"],
      where: { id: "1" },
    });

    const { fee } = feeObj;
    console.log(fee);

    // check the
    switch (currencyOfTransaction) {
      case "$":
        if (balanceDollar < amountSent) throw new Error("not enough in dollar");
        break;

      case "TRY":
        if (balanceTRY < amountSent) throw new Error("not enough in try");
        break;
    }
  },
};
