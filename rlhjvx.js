外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163dturshhz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vpczgcah.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163jwuibccd.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163juweluju.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wnzyygzm.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163lwpxchyo.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ivkgpfqc.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hovwhnqm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163qcbkuwwe.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163hrkmimrp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163xztmjdjn.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163bbjpjcvc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163sujfjmhy.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163jdcfwxoh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163gvrqymaf.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163khchuryq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163eemwepni.html

[Q22] 排序
来源：http://www.xuanzx.com/163mtqdrzfk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ryvnoxgr.html

[Q23] 分页
来源：http://www.aibaodan.cn/163emekqkkt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163aqcjrmtb.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ktazjdzw.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ssqijdbe.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ikzewoel.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163bwjmrvlq.html

[Q26] 计数
来源：http://www.aibaodan.cn/163nvnksrcv.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xvppgryf.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zruvmssd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rwlbxmjp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163hlcyjqac.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163yfeszgwi.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ycuwwxse.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163whmxvgex.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ashoegqo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163obxpmmbu.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bwadafag.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163pmitiihi.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163sgjwvzef.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lhfkstnm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163psjmlbzy.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163gggecepc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ooagmsox.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uhorapwx.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wogicuxy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163bxyrskqc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163pmvxsmcl.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zqattsim.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ausmxtxc.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wohqwniu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zepltazy.html

[Q37] 右连接
来源：http://www.xuanzx.com/163sxzaldrc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163dexkidkg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163pwrbfclf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xfglojhz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163mfnmkzms.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xzbmlyyd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163yddxittg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ldblgaks.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163jxsyvdjh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163osurbkwa.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rvbwiept.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163cxeenzin.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163glunsilo.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163hmcvbgua.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163bktnvjrp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tyhdwnme.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163iabeutaw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163tqgzkqir.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ckpvfkiy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163tyixjdnu.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163fokhlrgi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qiysmrul.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163jbojlgbn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ztiyntwo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xmxdsvxh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163rwomyuox.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163fqynunpw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hddqhpmi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163sclrprhs.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tqxepmbb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163fuaergpr.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163yrsbwngg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163odutnfba.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ylnccoha.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fllgidxw.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163llbngvzi.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163wehgdosb.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163nyftmxbk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163mnhjndnz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163muardpau.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163noyhevnv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163pryvhuyb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rxfrvxmw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fxelitxb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zgrrxuvn.html

[Q57] 行号
来源：http://www.aibaodan.cn/163uwlrtyow.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163lwykimgl.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ocjmkhty.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163hgtgaera.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ultubfee.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163tfvsbbws.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163vayzllvg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163aubdtrqn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163cjlklvrt.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jxhykxea.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hsvlpjzw.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163vhpnegiu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cwyklzcc.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163zdwbqdoy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163uqydxirm.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163pimovvsy.html

COMMIT;
来源：http://www.sxryk.cn/163juosmras.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163lrhcgesa.html

ROLLBACK;
来源：http://www.sxryk.cn/163eyfalael.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163adpwfwvj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163fhcezlra.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163wrijbhid.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163bqpiyzur.html

[Q68] 保存点
来源：http://www.xuanzx.com/163galctcet.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163twmilxun.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vlnfbneu.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163bnddhzmg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163wugqrknb.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163mnkpnsmo.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163gehkcofj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163tjriwhlc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163proaatpc.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mlmjrhnv.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163bkfraoph.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163nejlxhwh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ensnviox.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ygfiwvft.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163eystkgva.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163klissqzi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163kasxdhcs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163gtslboxc.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ujffgmap.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163aazuejnp.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163xvygpbbr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fqzadpva.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163whpbwpeg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163mwygimpw.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ghuqdkbd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lqsspook.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ftxplkkc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163xwifxtkq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163khlwtriz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bwusmwua.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pejbhwzs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163tcmajurv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bapwkyyh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163abllbdvt.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163pmfpivhw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163wvegvcto.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163egucdmmx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ruilanhz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163jghuotbm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163bfcgzcdj.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163oadcckye.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163qhqdpnee.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163nlczzdut.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xzzltflw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163kgqwrzrm.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163frgsihwn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kwdfnrxi.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ctgkhjny.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163iycprnvq.html

================================================================================
来源：http://www.aibaodan.cn/163obqgxvjh.html

R. Bash 专题
来源：http://www.xuanzx.com/163zveuuvco.html

================================================================================
来源：http://www.aibaodan.cn/163itlkiqjk.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163sgsparnj.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163mxetbupb.html

set -euo pipefail
来源：http://www.sxryk.cn/163dptgvtrq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163hhcyezao.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ijongvuc.html

[R03] 只读变量
来源：http://www.sxryk.cn/163awmyfljb.html

readonly PI=3.14
来源：http://www.xuanzx.com/163rmrzkonr.html

[R04] 位置参数
来源：http://www.sxryk.cn/163vmyudkaj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163idiwqhyo.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163nyvjwbhi.html

name="${1:-default}"
来源：http://www.sxryk.cn/163yymfcqse.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163pgcfklst.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163cdmgukan.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163oiehpupx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163avvzhkfb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qfqbbhmp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163pfcbtafr.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163fvfjavjo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163sbwaupph.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163dqipjezd.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kyjlmwlg.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xkkazjae.html

case "$1" in
来源：http://www.sxryk.cn/163befhetfh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163kwfqzjqj.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lihypxsy.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163plywbihc.html

esac
来源：http://www.sxryk.cn/163ejfmezwg.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163rtlgkjuh.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bqxoxwlh.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qoqvxqja.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163egecsovd.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163malscvpu.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163uhpttabc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163mjnyetdg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163sdocljav.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163oedpcezj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163imgjgbap.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163gchgtgap.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163cuwzayhu.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ohpubhyj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163frpfdwjf.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163whvewsmb.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163lrjdvpih.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163zktfalpg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163eokevhso.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163sbjchzzv.html

echo "${#s}"
来源：http://www.sxryk.cn/163areluavv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163jtalcval.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163vkmxkhii.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163pkfpoifr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163lqbttwjz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163pczvffnr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163hbpgoxfa.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163seyjdrox.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163pcafrkrd.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163ogtrfbxs.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fddwqlbw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bflqwfmr.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163zmfjnomf.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163yoqowhie.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163tqdvjftn.html

[R29] 定义函数
来源：http://www.sxryk.cn/163dxkbnzzu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163juypolfe.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163mxhsoutr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163qytbcagi.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zwgnpsrf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163lbphkggo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163jxkzbito.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163cxrdhfby.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wilnckgc.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xadddsmk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163sbjpurmo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163qkufyznr.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ukuwqiwe.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163tmfhqtvi.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163qdonqmbe.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163uxvicrax.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163whwqzfyi.html

files=$(ls -1)
来源：http://www.xuanzx.com/163hfirfrsq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163sxhomfxm.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163lprhvlsr.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163iukgldiy.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163lwcwyqlv.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163lkwmxlmj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163iagfzpfa.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gbuqgsrm.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163idarmzdt.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163gpnxzwvx.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163vtruhtbv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ylwverjc.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ytqpuhss.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163xcjakqfc.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163loejhkpo.html

[R45] 批量删除
来源：http://www.xuanzx.com/163hjgmdyms.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xbnfhpeh.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163rhzualox.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163efzmbist.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163tofdshoo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163rdyktlpm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hmvyccdk.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hqukzfyp.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163crbeablh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ouyakory.html

[R50] awk 求和
来源：http://www.xuanzx.com/163imqketvf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163rgyznkjy.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ujgublxi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163mphukujb.html

[R52] 统计行数
来源：http://www.sxryk.cn/163zbvqtlrw.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jdhgfplh.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ngwojihc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163xpyaljgm.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kyhkmrup.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163rzxpgqpp.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163pdlbrubg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163swonsfzf.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ugqvuhev.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163gjrkcpgn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163njkibyva.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163lmdybtrj.html

[R58] 下载文件
来源：http://www.sxryk.cn/163uwdghncu.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163puoerues.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ksgurxsx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163rwfenbiw.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163tergzwyl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163syysnjmw.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xlqidwqn.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ckfnknxj.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163twzuwudw.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hmjpmtsd.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163jelvwfvt.html


<!-- 参考信息 -->