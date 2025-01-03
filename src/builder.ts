import SchemaBuilder from "@pothos/core";
import ErrorsPlugin from "@pothos/plugin-errors";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import RelayPlugin from "@pothos/plugin-relay";
import SmartSubscriptionsPlugin, {
  subscribeOptionsFromIterator,
} from "@pothos/plugin-smart-subscriptions";
import { DateTimeResolver } from "graphql-scalars";
import { Avatar } from "~/constants";

import { context } from "~/context";
import { prisma } from "~/utils/db/prisma";

export const builder = new SchemaBuilder<{
  DefaultFieldNullability: false;
  Scalars: {
    DateTime: {
      Input: Date;
      Output: Date;
    };
  };
  Objects: {
    Avatar: Avatar;
  };
  PrismaTypes: PrismaTypes;
  Context: ReturnType<typeof context>;
}>({
  defaultFieldNullability: false,
  plugins: [ErrorsPlugin, PrismaPlugin, RelayPlugin, SmartSubscriptionsPlugin],
  errors: {
    defaultTypes: [],
  },
  prisma: {
    client: prisma,
  },
  relay: {
    clientMutationId: "omit",
    cursorType: "String",
  },
  smartSubscriptions: {
    ...subscribeOptionsFromIterator((name, ctx) => {
      return ctx.pubsub.asyncIterableIterator(name);
    }),
  },
});

builder.addScalarType("DateTime", DateTimeResolver);
builder.objectType("Avatar", {
  fields: (t) => ({
    id: t.exposeString("id"),
    name: t.exposeString("name"),
    url: t.exposeString("url"),
  }),
});
builder.queryType({});
builder.mutationType({});
builder.subscriptionType({});

builder.objectType(Error, {
  name: "Error",
  fields: (t) => ({
    message: t.string({
      resolve: (root) =>
        root.name === "Error" ? root.message : "Something went wrong",
    }),
  }),
});
