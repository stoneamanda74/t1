外链999!wailian999！

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163qvsrppnt.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163uklwpnyt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ftpashsp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163wpkzgqpz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163eabxpjdm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163cbmtmecu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163mvbqtrom.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163mzmkxpdc.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163weshuufq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bhjtvbhx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wnencaow.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ftakwubc.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qakkjurz.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163pdqdramh.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163tqpnwbgi.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163qaovxfxk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zsftatdv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163itcdbsqt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163raflybnp.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ovnoynga.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163eoudezts.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163lynnhetd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163kcnhaxkm.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163twckaogz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qpabkopp.html

[Q22] 排序
来源：http://www.sxryk.cn/163eqvihchc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ecviyxoi.html

[Q23] 分页
来源：http://www.sxryk.cn/163zixkbgkx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163duudldoy.html

[Q24] 去重
来源：http://www.sxryk.cn/163pvcitzmw.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163dxgiopvb.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163elwazdcq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tjccvqdo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163retksfhw.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ilkaywqc.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163qhzuvdjg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ufzzkztl.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163zrobbmxa.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163zhvjbzob.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163fcbsbduj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163lkruceix.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qizhynvt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163okrplshr.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ufqreqvf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vforvaxi.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xmyvzpvq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163aijbvzie.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163gxqniskh.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163zkfhogqj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163npvswodt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163hchxggoj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163xjfnnkdo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qcsjeiof.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ayazlrcc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163selfktgh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wdtmtaei.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dxxeklgu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jumiqcpz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163vlxsygrv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163kljtpgnm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163sgewpkpb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ulnsalrb.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163yyoauevs.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163jflqejhj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163xyxedozs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163llwflhbj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wafkljfw.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163eunbzbbw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ybhorhhb.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163hnshlwtz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163bxnfjxzn.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163pkyylppl.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163szfxgxca.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163wscikzil.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163cctemmvc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zvnfecmq.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163sdcdyuvv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163aoscmbyt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163yiynpwyu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163mbbyqkpq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163usjhjity.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163njiujbvg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163uqvlrxtk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163hgjwning.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163okiltpuz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hfxysecv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mxdcvphl.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163osrwxtxg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rdlmolsr.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163btzvmugo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ehdifxcx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163oussngdf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jtettvte.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163lyhjemdq.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ovjudjte.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163eioqnqsp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163uwvhnszp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163jvzwgtti.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163maiiuxwh.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163jqhdlubm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163oycrbmau.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163sfmqescb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kvbosepc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163emekzlwr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163detdbric.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163tscztzii.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163sikmntup.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163cjnpsiia.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163oallrabc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163zunmvyrb.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163rhhoeqnk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163nekadgll.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163gbfbeefw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ufjqawsa.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163empijqme.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vwavzidz.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163kckiouvy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163awfppnxn.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163edelaict.html

COMMIT;
来源：http://www.xuanzx.com/163rwbsmknj.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163zpengcsc.html

ROLLBACK;
来源：http://www.sxryk.cn/163anqpnrwz.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163sicihiop.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tqobikpe.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tmtyxaij.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163usfydbma.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ktmpuhii.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163czonvcpt.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163morettoa.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163dhkhfjyb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163znwxdjvg.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ewuwslqm.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163wmgzycxf.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ejaiysle.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163gkjzwyeq.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mrhkjrzw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hilegufg.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163jucvrvgx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163qxcsigzm.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mqbgwewd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163gtzrwyso.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vtgwpirt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163evbuwzdh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163xadvgwct.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lgcwizzb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163tzmfxmaf.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163odyuwddk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163hjpuyhup.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163dvlfmqke.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163tnnxsgkc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163cetffbsx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163lxkivzcn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zuaqqaiq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163xxfyiogg.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163imswwcbc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wkupkycc.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163hlxdosah.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163qsvzxwvv.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163mkthdbxk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163dqqtptbj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163nmhfseow.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ljlwgboa.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163fgextqqa.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ckutpnls.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ogyudqhg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163azzphtwy.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163knqozmkg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163sehisjmd.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163yckopuci.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163zddporvl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163lyddidgv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163jglmgmki.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163rihygryw.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xwtudqed.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163dcnqdhom.html

================================================================================
来源：http://www.aibaodan.cn/163svvhvvne.html

R. Bash 专题
来源：http://www.xuanzx.com/163ujwhmpwr.html

================================================================================
来源：http://www.xuanzx.com/163ozxjtqgs.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163gsosyiaa.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163flcctdmx.html

set -euo pipefail
来源：http://www.xuanzx.com/163emwlczpk.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163dnpegfjk.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163gbouciqm.html

[R03] 只读变量
来源：http://www.xuanzx.com/163yzgwopea.html

readonly PI=3.14
来源：http://www.xuanzx.com/163qkdhlxsk.html

[R04] 位置参数
来源：http://www.xuanzx.com/163umtofzfd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163hjigghdj.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163rffhcmos.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wwtzrdhg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163asiibflu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163bhtvrjaw.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163cojzdaxe.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163gzvkzwfz.html

[R08] 数值比较
来源：http://www.sxryk.cn/163vssevjsw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ugljfbbi.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163axfbjqbg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xufswkih.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163qkqqsmuc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163aeelrpky.html

[R11] case 多分支
来源：http://www.xuanzx.com/163yfwsihtr.html

case "$1" in
来源：http://www.sxryk.cn/163tibrkkpi.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163pxbgkhgc.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wnkvwsvl.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163slkrckoy.html

esac
来源：http://www.aibaodan.cn/163pfshcxmj.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163zfkbwisr.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163bdnzcphd.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163sbxkvtza.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163orakqhuf.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ecxzjodt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163zddtswug.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nwmxgqsy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163dlpysjem.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hstnrieg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163flarnrjy.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163qnyfanrh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163znfymihf.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163nzlbmjbb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163jlfcuaoa.html

[R19] 数组长度
来源：http://www.sxryk.cn/163isxdvfrh.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kqcbpuzd.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163iwtnwxgj.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163iqngwjuw.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163kvicmjtx.html

echo "${#s}"
来源：http://www.sxryk.cn/163wgbpomaw.html

[R22] 截取子串
来源：http://www.sxryk.cn/163trbbbqgy.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163tnxcudmx.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163mkffuuky.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163wsuwpmdx.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163kfirtytn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163uufinscv.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163tkwnzjbw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163pbhyaypd.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163cmvgsfbt.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163syyelffw.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163dkzzpmbp.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163imfbrhjl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163rsjtzkoh.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163eibmwmtd.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163giwszowq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163wdcnntdn.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163qiyvibqk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163cmrcznbh.html

[R31] 局部变量
来源：http://www.sxryk.cn/163swucmtah.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163tefgwmsx.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dixnycvv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163swndkgnf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rdufdujy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163jrzwhrnq.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163pvixrvvi.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163latbdrzs.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163pkkauora.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163xcpmtfpn.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kbfvaklp.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163xthqhtdc.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lfmvjtvf.html

files=$(ls -1)
来源：http://www.sxryk.cn/163axqvbikd.html

[R38] 管道串联
来源：http://www.xuanzx.com/163obmdqnhg.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ayhteswx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ibarszdf.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jlulvwhp.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163gchywbbt.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163twgapwrb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163dahnptoo.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163lwktesgd.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mdzsrnnj.html

wc -l < a.txt
来源：http://www.sxryk.cn/163icfufeji.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163eiukzogh.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163dtvhchhv.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mshemucg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ynendkkj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163jzuddaqp.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163emvmsphe.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163cxghntxd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jajaxoiv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163bqortmgf.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163secabffm.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163yfjtomks.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163drnieiuu.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163vbgdaxhg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163nuwfslpi.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163lbwtlgqi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163rcfwxkwu.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163nascailu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hibldtlv.html

[R52] 统计行数
来源：http://www.xuanzx.com/163rqeplcfb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163kjywpzod.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163cfpclmve.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zrxhlwjo.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zsnacmnb.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hiohghrp.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163jwvwcccq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163odmwukxk.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163xqcgfrxs.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163aokdgrwv.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163imuhdqnv.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163kzsgqdvn.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163drxzklfa.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ghsbztfk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163crhjuxtl.html


<!-- 参考信息 -->