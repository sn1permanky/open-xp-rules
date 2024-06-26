{
  "action": "start",
  "object": "process",
  "status": "failure",
  "category.generic": "Process",
  "category.high": "Availability Management",
  "category.low": "Control",
  "chain_id": "473605",
  "datafield1": "sh",
  "datafield2": "root",
  "datafield3": "0755",
  "datafield4": "/bin/busybox",
  "datafield5": "/lib64/ld-linux-x86-64.so.2",
  "event_src.category": "Operating system",
  "event_src.ip": "10.156.26.71",
  "event_src.rule": "pt_siem_execve",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_process_start",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "execve",
  "numfield2": 0,
  "object.account.group": "root",
  "object.account.id": "0",
  "object.account.name": "root",
  "object.process.cwd": "/",
  "object.process.fullpath": "/tmp/client",
  "object.process.id": "115333",
  "object.process.meta": "149:152",
  "object.process.name": "client",
  "object.process.parent.id": "109580",
  "object.process.path": "/tmp/",
  "reason": "No such file or directory",
  "subject.account.id": "0",
  "subject.account.name": "root",
  "subject.account.privileges": "0",
  "subject.account.session_id": "4294967295",
  "time": "2022-05-19T11:32:00.000Z"
}