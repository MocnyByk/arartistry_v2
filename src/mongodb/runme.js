conn = new Mongo();
db = conn.getDB('arartistry');
printjson(db.adminCommand('listDatabases'));

// Configuration piece
load("schema/ddl_websiteconfig.js");
load("schema/ddl_visitdata.js");
load("schema/ddl_members.js");

// Website piece
load("schema/ddl_documents.js");
load("schema/ddl_posts.js");
load("schema/ddl_inquiries.js");
load("schema/ddl_contents.js");