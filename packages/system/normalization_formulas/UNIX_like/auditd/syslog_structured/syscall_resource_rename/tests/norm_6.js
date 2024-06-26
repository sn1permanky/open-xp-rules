{
  "subject": "account",
  "action": "rename",
  "object": "file_object",
  "status": "success",
  "category.generic": "File System Object",
  "category.high": "System Management",
  "category.low": "Manipulation",
  "chain_id": "668463497",
  "datafield1": "useradd",
  "datafield2": "root",
  "datafield3": "0644",
  "event_src.category": "Operating system",
  "event_src.ip": "10.10.10.40",
  "event_src.rule": "pt_siem_etc_modify",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_resource_rename",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "logon_service": "pts/35",
  "msgid": "rename",
  "numfield2": 0,
  "object.account.group": "root",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.fullpath": "/etc/group+",
  "object.id": "399942",
  "object.name": "group+",
  "object.new_value": "/etc/group",
  "object.path": "/etc/",
  "object.property": "fullpath",
  "object.type": "regular_file",
  "subject.account.id": "1000",
  "subject.account.name": "ansible",
  "subject.account.privileges": "0",
  "subject.account.session_id": "8504",
  "subject.process.cwd": "/home/ansible",
  "subject.process.fullpath": "/usr/sbin/useradd",
  "subject.process.id": "1099",
  "subject.process.meta": "/usr/sbin/useradd -u 1032 -G sudo -s /bin/bash -p ! -m atymush",
  "subject.process.name": "useradd",
  "subject.process.parent.id": "1096",
  "subject.process.path": "/usr/sbin/",
  "time": "2022-05-11T09:32:46.000Z"
}