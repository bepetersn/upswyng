import Resource, {
  resourceDocumentToResource,
  TResourceDocument,
} from "../../../models/Resource";
import { ObjectId } from "bson";
import { isAdmin } from "../../../utility/authHelpers";
import { TResource } from "@upswyng/upswyng-types";

export async function get(req, res, _next) {
  const { resourceId } = req.params;
  let resourceDocument: TResourceDocument;
  let resource: TResource;
  try {
    resourceDocument = await Resource.getByResourceId(
      ObjectId.createFromHexString(resourceId)
    );
    if (resourceDocument) {
      resource = resourceDocumentToResource(resourceDocument);
    }
  } catch (e) {
    res.writeHead(500, {
      "Content-Type": "application/json",
    });

    return res.end(
      JSON.stringify({
        message: e.message,
      })
    );
  }

  if (resource) {
    if (!isAdmin(req)) {
      // don't let non-admins see the resource creator
      delete resource.createdBy;
    }
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify({ resource }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Resource not found`,
      })
    );
  }
}
