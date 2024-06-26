{
  "subject": "account",
  "action": "move",
  "object": "file_object",
  "status": "failure",
  "category.generic": "File System Object",
  "category.high": "System Management",
  "category.low": "Manipulation",
  "chain_id": "33933983",
  "datafield1": "mv",
  "event_src.category": "Operating system",
  "event_src.ip": "10.10.52.30",
  "event_src.rule": "pt_siem_www_modify",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_resource_rename",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "rename",
  "object.account.group": "root",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.new_value": "/var/www/mp3/msk/2019-Dec/2019-Dec-11/",
  "object.path": "/var/www/mp3/msk/",
  "object.property": "path",
  "reason": "No such file or directory",
  "subject.account.id": "0",
  "subject.account.name": "root",
  "subject.account.privileges": "0",
  "subject.account.session_id": "36734",
  "subject.process.cwd": "/var/www/mp3/msk",
  "subject.process.fullpath": "/bin/mv",
  "subject.process.id": "10076",
  "subject.process.meta": "mv foreign-1639197369.5096.wav 2019-Dec/2019-Dec-11/",
  "subject.process.name": "mv",
  "subject.process.parent.id": "74096",
  "subject.process.path": "/bin/",
  "time": "2022-05-03T21:02:25.000Z"
}