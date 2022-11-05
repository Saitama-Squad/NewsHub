import ibm_db
dsn_hostname = "0c77d6f2-5da9-48a9-81f8-86b520b87518.bs2io90l08kqb1od8lcg.databases.appdomain.cloud"
dsn_uid = "bsj69971"        # e.g. "abc12345"
dsn_pwd = "J0ww1ELveoQeDVWK"      # e.g. "7dBZ3wWt9XN6$o0J"

dsn_driver = "{IBM DB2 ODBC DRIVER}"
dsn_database = "BLUDB"            # e.g. "BLUDB"
dsn_port = "31198"                # e.g. "32733" 
dsn_protocol = "TCPIP"            # i.e. "TCPIP"
dsn_security = "SSL"              #i.e. "SSL"

dsn = (
    "DRIVER={0};"
    "DATABASE={1};"
    "HOSTNAME={2};"
    "PORT={3};"
    "PROTOCOL={4};"
    "UID={5};"
    "PWD={6};"
    "SECURITY={7};").format(dsn_driver, dsn_database, dsn_hostname, dsn_port, dsn_protocol, dsn_uid, dsn_pwd,dsn_security)


conn = ibm_db.pconnect(dsn, "", "")
print ("Connected to database: ", dsn_database, "as user: ", dsn_uid, "on host: ", dsn_hostname)


def authenticate(username, password):
    stmt = ibm_db.exec_immediate(conn, "SELECT * FROM USERS")
    row = True
    while row!= False:
        row = ibm_db.fetch_assoc(stmt)
        if not row: return False
        if(row['USERNAME'] == username and row['PASSWORD'] == password):
            return True
    return False

def get_likes(user):
    stmt = ibm_db.exec_immediate(conn, "SELECT * FROM NEWS where user='{0}' and news_type='S'".format(user))
    likes = []
    row = True
    while row!= False:
        row = ibm_db.fetch_assoc(stmt)
        if not row: break
        likes.append(dict(row))
    return likes

def get_bookmarks(user):
    stmt = ibm_db.exec_immediate(conn, "SELECT * FROM NEWS where user='{0}' and news_type='B'".format(user))
    bookmarks = []
    row = True
    while row!= False:
        row = ibm_db.fetch_assoc(stmt)
        if not row: break
        bookmarks.append(dict(row))
    return bookmarks

def get_topics(user):
    stmt = ibm_db.exec_immediate(conn, "SELECT * FROM USERS where username='{0}'".format(user))
    row = True
    while row!= False:
        row = ibm_db.fetch_assoc(stmt)
        if not row: break
        return row['TOPICS'].split(',')
    return []

def update_topics(user, topics):
    sql = "UPDATE USERS SET topics=? where username=?"
    stmt = ibm_db.prepare(conn, sql)
    ibm_db.bind_param(stmt, 1, ','.join(topics))
    ibm_db.bind_param(stmt, 2, user)
    ibm_db.execute(stmt)







