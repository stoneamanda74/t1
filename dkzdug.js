外链999!wailian999！

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163djbhdkep.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163pmynlugy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163psujvspr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163pwcznxih.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vxnzxkpe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163xbhudivx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163kmvrsrvz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163zuciqylr.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hhieukma.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vdfqqssi.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163jfqoqfja.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ewbqkuqe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ltcqvnpi.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163faaesvba.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163uarvwxkm.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ylptkkgx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163rztmbuag.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163owxugzjf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163uwsvkgeo.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qyvvfqhw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ffxvwjpl.html

[Q22] 排序
来源：http://www.sxryk.cn/163odqtxevw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ohiquzre.html

[Q23] 分页
来源：http://www.aibaodan.cn/163epzqecvp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163sevjutar.html

[Q24] 去重
来源：http://www.aibaodan.cn/163crpvpjzv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mmhhnafh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163eqmplqjo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mtofjbsm.html

[Q26] 计数
来源：http://www.sxryk.cn/163exhfjyra.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163dwgrdamc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163edqrgrne.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163xvflcigb.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163pdmzfygt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ucqjnpdo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163nqzciskr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ldihkygq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163mlyfjyqx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pxoqonof.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163sscvzaph.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163naeknuqw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163mwqxdrns.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ujjurhet.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163xlankqkz.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163brfdhvzs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ptxwfezb.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163sebdfrwl.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163atfqpakp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163wkjunyrf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163axyautkb.html

[Q35] 内连接
来源：http://www.xuanzx.com/163xtyzablm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163urvryjhu.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163uughipyv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gonwzgsd.html

[Q37] 右连接
来源：http://www.xuanzx.com/163bqbwmzfc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163idvjarbe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fvuveuca.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xymbfvim.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163zderdsds.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wcaxparj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kuniwvvs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hpugegod.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nvzoeyaz.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163npmxghrk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ptzjkasz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163oxdjdbmx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tycqheou.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gghevuhq.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163fcmpgggc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zruorbtk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163etlsesip.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163lzzzduac.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163urjvbxlj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lvbdsloa.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lmmwsybr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163tllevjcc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163yaqmkfbc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wwsezfjb.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163xczltjbj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163bhagikmc.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xifruonv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163yaypdjrr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fndyzvpg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163osqkzyuh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163vzspfukh.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ykjfpuvi.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ikabtcjo.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163sgcpjyea.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ajljizyk.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ievceznh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163fhhohkxz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163vgopglsv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163bgqfxsmw.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ryomgfsy.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163woihluzu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163phryhgzz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163lfmqqpli.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163nxsuutsg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163zcgtpvfm.html

[Q57] 行号
来源：http://www.xuanzx.com/163bdlkznqv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163azthddmq.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163zavysegx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163fwwkqahc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lyqfhukj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163smsmdtpk.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163yrfxryqo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163xkchnwqp.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163fcarlqle.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mxfueayr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163whwycheh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ybgkmqea.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nkurfgwb.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163joghdkkx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fovksjfy.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163iuowpfqq.html

COMMIT;
来源：http://www.aibaodan.cn/163ylbrtbdn.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163epmfvaqh.html

ROLLBACK;
来源：http://www.aibaodan.cn/163negmoklu.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ajagywct.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163bhhiwcbz.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163cdahstjc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rlgfsfnm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163garoaxrl.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zxyobqjx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163dydmbugp.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163cnaoueew.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163vjjfolrw.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163lposions.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zzslcnji.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ilminbnq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163asgfzllv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163aqsczyku.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163eejqsceh.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163dbsqvypf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163cwjdjjbr.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163zpbmhzwj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163nwbogavg.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163oldishjs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ebpxdeml.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163ivkulvqm.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163tsmkovcn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163vlvicvhb.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163cxzixqob.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163fhwlquul.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ykbuldba.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163nlhxmkvi.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163bwvcppnb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163vuljamzq.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163mhzzdlnw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163conpxtwq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163akyhsopy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163somhtixg.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163hnxcuvbv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163jlhrhzzh.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163nbzgdalp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163epyjsmbr.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163zapaqyym.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163pzhmxjso.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163tryxjprh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163uymaagdy.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163pygkusxt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163hgqdpdti.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nnloxxri.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163yakjjmug.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ecvnjaiz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163dupfvrat.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163tbopelhx.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hzwagktk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163nkgwjshv.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163obdbagld.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163kupvtkng.html

================================================================================
来源：http://www.xuanzx.com/163vlfskekc.html

R. Bash 专题
来源：http://www.xuanzx.com/163qsiopslb.html

================================================================================
来源：http://www.aibaodan.cn/163htitmrzu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ttklwhxn.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163begbditv.html

set -euo pipefail
来源：http://www.xuanzx.com/163bhjrmmsg.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163qmldmdlj.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163tzphqrje.html

[R03] 只读变量
来源：http://www.sxryk.cn/163pyrjhmrn.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vzlmraid.html

[R04] 位置参数
来源：http://www.sxryk.cn/163mkhyzxjj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163exbkztqp.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163gcilljqb.html

name="${1:-default}"
来源：http://www.sxryk.cn/163fclgresp.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163wwewcdds.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163lyzdvxqg.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163etyiwtrw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fccqoeqs.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163srnaywwz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163faudvsnt.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bqdihnuc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163foymfuot.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163xpnazgck.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ywpbfzmv.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163vvuscvrb.html

case "$1" in
来源：http://www.sxryk.cn/163vswnhplu.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163vstqwgba.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163xqizwtdr.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163bljphsgp.html

esac
来源：http://www.sxryk.cn/163jlhujgfh.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163nnhualin.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163dxheskbt.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163rmyhrxul.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ngqhdqpa.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163zuhtjlgb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163wcuuicjc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163gvhqhedl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163qclxcvhd.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163wrlnvlyy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163zsswycde.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163lajdpqcp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163bsmcsuou.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163urnjxxbk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163yvptxibq.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163yfevojia.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163wiojakuz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mctjpxek.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163oxskewbg.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163lznvqmvj.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gwwdzllk.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163kyboxsiq.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cfoutotd.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163udsrehkv.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xqnfggff.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163klgomkls.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163rinuqutd.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163ifautcwa.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163iruyjhdy.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163alldstof.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163uaqupwdp.html

[R27] 算术展开
来源：http://www.sxryk.cn/163opwfrnez.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163mhoisqwu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163pcispdts.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ceratccj.html

[R29] 定义函数
来源：http://www.xuanzx.com/163chjmdpux.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163rmvyusom.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cceiseyf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ragftssz.html

[R31] 局部变量
来源：http://www.sxryk.cn/163lybfhhsk.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163dilhjunw.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163iqusfwha.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163fluruoaj.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ygghacyo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163sucxybxr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163vmelmevv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qzsozpdi.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163naghclti.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163kmiuimiy.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163cfpcjjie.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jlnxtpay.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ecsnrvod.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163mbkzhcca.html

[R38] 管道串联
来源：http://www.sxryk.cn/163zigamnhz.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vjnbnbmi.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163valicigb.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hmezpjrb.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ibfybqtl.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163bpddfpyo.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163ekkdabtz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163htqtabwd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163nspfycow.html

wc -l < a.txt
来源：http://www.sxryk.cn/163syyoslkv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163hibnpxrl.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ovysmicc.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163acjtizqm.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163gnrwzoum.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ajokwhmh.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163plvczkvz.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163eyaaiviu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163zosgubxi.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163moeiaerl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163niiokzur.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163kvtemvpo.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163jxhgtljr.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ffxuhehh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ttzwfwio.html

[R50] awk 求和
来源：http://www.sxryk.cn/163efmahrwj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ndzmreog.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163iibyrjpf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163bgvelqbz.html

[R52] 统计行数
来源：http://www.sxryk.cn/163apbifkkj.html

wc -l a.txt
来源：http://www.xuanzx.com/163veqyjcda.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163lxotgsrp.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163scdvykui.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hebhxmoi.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163dvffijch.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163thfttfoc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163gdrrksjh.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rxyhicxu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163xlhqxtyn.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163pfgliftq.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163bndeoifz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163lvfgwwoa.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163lyriufnb.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163kojxurmk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163sncmwrsa.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163myzebvvc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163sevacocz.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163nwfmjjke.html


<!-- 参考信息 -->