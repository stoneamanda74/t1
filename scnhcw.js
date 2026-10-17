外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zoilbunl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hurfqtbq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163pfvvfich.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ruxxoozq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kscvnjqs.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163vlgaaver.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163fznnnsfy.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163opmeuwlc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163glrwjqgv.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163dtqvkter.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163efonizsj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163rhgqtmnz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163jxmgxjkw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163dzjsmyli.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163hlihdrjd.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ylsegtjc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163yvbbvcul.html

[Q22] 排序
来源：http://www.aibaodan.cn/163queaqcfa.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163shlpwqth.html

[Q23] 分页
来源：http://www.sxryk.cn/163ntzdykdr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163mmohjfyf.html

[Q24] 去重
来源：http://www.sxryk.cn/163tbucaqbe.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163gxcfpvdb.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163grlggqzq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qipyhedt.html

[Q26] 计数
来源：http://www.aibaodan.cn/163xlkrihdb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163owcannwn.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163yfejevem.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163yfbaiuwy.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163lksnpwmg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ajwmcexr.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163kfuhinlu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163zylwecsx.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ootulugb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cyvtjkqt.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163xgbbuefu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ngeduomg.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163gvbvyjzz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mmybvoqx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163mwhovvtu.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163cqopbbir.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hbubkwdl.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163hpglwarc.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vinyotnd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163emzcxsvr.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163jzwbphqr.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163fpnkdpuo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uykiyfft.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163kzkbdffv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xrggypqj.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lrbqpylq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163qdnxexde.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163eqqvfxfy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163udvlvvrp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163gwtfqhsd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163mxfjrqsd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qqvlhiqy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163nietwfaj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163xigpnsue.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163dscnlnmr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163wfrdputu.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163hrkfarya.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163mejfkdzp.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wrcazxyr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163sunscabf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jgktjcva.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ejhkjupk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163casnkyqm.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163zcltqfeg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ioaeemai.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fmidfbly.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hkpixgko.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163pxkpregc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gozzdhyf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163moilglix.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163qohqscah.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xfkryeas.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163juinunph.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vmgjlzee.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tnuhyfur.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163htgorubo.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xpayfrcv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163alwbooio.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ximkqsvn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163llhrecdf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ngjxzijn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163rcymvgrp.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163uxovxilw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163rknqvgnd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163wxesbkvt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mwzyttxc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163voylxavg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163iqbxusxy.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163rpnwqvhf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163sefqxhqs.html

[Q57] 行号
来源：http://www.sxryk.cn/163qkznoxna.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163bbgbkryp.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163tqfdspze.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163irrwsnqy.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163qjqtlcpf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163sqbbbokr.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163hmqqcnrc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163kuypxssp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163bdsewmke.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163rsoqycoo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163juyigsaz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163virqvwab.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163svualikt.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163rbidumjv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163eqzcrvzw.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163bqsfhxvr.html

COMMIT;
来源：http://www.sxryk.cn/163guvnauna.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163sjpimeqg.html

ROLLBACK;
来源：http://www.xuanzx.com/163uhltjrvd.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163eqfwkqfm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163qqqhujon.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ltlzduhn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163gjyvvssc.html

[Q68] 保存点
来源：http://www.xuanzx.com/163oixxukry.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ablgyvjy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163yxfjdchs.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163njutddlb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163zugdvqrs.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163zxghofhf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qgokqpph.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163sexiufpa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163nkyrkpft.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xvtxpsru.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163gpsouzhj.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ozjidsea.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163eqzsninp.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163gqcqcfhc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163tbdnpqgg.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ghxwyzmx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163daioyhmp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163fgtihjwd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jtiwcvsm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gnrdkavf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rstthyfm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163abgqwrey.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163pynfnxzg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163kvprrxzy.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163almdmmks.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ekkrviin.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163nthrzmtl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163rsiwesms.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163szyunuqx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163eiaqffbx.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163devbchah.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163whkylgnn.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163gaojtson.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163tnmgzgvb.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163hyinbzap.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yohuxskh.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163piaozfou.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lbxuntfh.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163nowvxvsk.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163dkhklild.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163tpydzmzz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163rwodkhel.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163jzmeuvhq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xkkrxxve.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zwffppaw.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163rlhxoazu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163fjqyztjv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163molythfp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163chfootpt.html

================================================================================
来源：http://www.aibaodan.cn/163xbxgxzar.html

R. Bash 专题
来源：http://www.aibaodan.cn/163xcqyokiy.html

================================================================================
来源：http://www.aibaodan.cn/163nfzkryhb.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163hccjlvex.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163kybbmcvs.html

set -euo pipefail
来源：http://www.xuanzx.com/163ytunakoo.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163prhuflpm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rtwbumdq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163phbtaisi.html

readonly PI=3.14
来源：http://www.sxryk.cn/163crkrdjwa.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jldbjyej.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163swazoikg.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163allglwwd.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163uswgcdse.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163dpdbkywy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163jwxquoyx.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kketijte.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163hviywgpp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163noiljpsu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163hcxdxdqs.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163evvtgetf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163jrbjovvz.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163qpwipxgi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163guubxwvq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wgdnmqqe.html

case "$1" in
来源：http://www.aibaodan.cn/163qukchqwm.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163lxfaonkq.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qylvvskg.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163cmaymfwn.html

esac
来源：http://www.sxryk.cn/163niciqiec.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163nukjgmpp.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163sumgpxse.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wtqduhvg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rfahxwhi.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163yphemoug.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163manabzwf.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163jjigvccx.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163xhwmqekj.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163nxlemxcu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xbjkerjn.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163swnklpex.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163blricnmw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163mozlagbe.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163jmgjpqux.html

[R19] 数组长度
来源：http://www.xuanzx.com/163vdelssnu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163cocnfjrk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163ypgwjoql.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163qtledwux.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hgngcesb.html

echo "${#s}"
来源：http://www.xuanzx.com/163ecejlslx.html

[R22] 截取子串
来源：http://www.sxryk.cn/163hvtyunue.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163mjldtkjj.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163cskjbvng.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163vqbhtgnn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163fruoertc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163dboizdnj.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163yxilybyk.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163iewfusmq.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163umojkhwh.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163bxwahgms.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ozfyjhrp.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163gnynnaab.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163dtepkfnb.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163aqwjmasq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163wcnlwqye.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163qxsfogbu.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163arijppsh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163tuksupdg.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ocxsbkhe.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163crfftylo.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163luuanuop.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163exyucgfg.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163vncceglo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163zgnwvukj.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163efnxxfrw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hjlcbsck.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kguoyjcg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163vydmouma.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gfmxqdcv.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163dkkluruq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163emrogolq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163uaasirjv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163llvxnpsc.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163uoobywfl.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163kxxxlgzq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163aitnlvik.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163zqueyhqj.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163yvpevrlr.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ldccgczr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163dmxyznrh.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xsjctvml.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163rissjofy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cnhclioc.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163qxnnxruu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163capkhrxi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163vpnfjrnl.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mcluzwut.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163gxhbsmpc.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163zcnyqipg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163pqnrwazt.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163cedrbard.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163xdnosbbv.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ooaigxgl.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vstdgsgo.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163fjaloiuy.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163llurjwap.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vbxvowxx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163kiivyhil.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163goutolhi.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zrniktaq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163fwsqvirq.html

wc -l a.txt
来源：http://www.aibaodan.cn/163wpmksmik.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163geaegvbs.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ltbhcjht.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ssfbawdf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163emttjtak.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163iwtlcbly.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163ugvcdrnd.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ldfaoyyb.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qvijgcte.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163xtwzgzxx.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163gmqamluv.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163albjrkmc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163gycpoqct.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163iqwrrode.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163vaqyspyo.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lglfypve.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163cslqnyfj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163rymxnqiv.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163wrgbqosp.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ehodjbvm.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rajdmqzg.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163kajgmsdq.html


<!-- 参考信息 -->