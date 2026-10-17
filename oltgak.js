外链999!wailian999！

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163uofxfdhh.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163wvieqyxd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163rniggkuy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163dhnyzibc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163njizxgwh.html

[Q07] 删除表
来源：http://www.xuanzx.com/163tvltsmew.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163wvldrpcp.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163cgnwlanf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uswlxvrg.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bptywkbg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163abtltmuu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ciyylvcg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qpijaevd.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163qtehmwlx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163lrkbgfab.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163uivdsrla.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ezfzgyzw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163sdmwetcp.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ugzgosuc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163blkwkklk.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163bgfgjuou.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163wrjlyvjz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163bofwkivn.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nqmiquwg.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163nqwgcumx.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163nftpzwmd.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163wcqhuelr.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zvxautmi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163rbyiumrk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163lyxjneha.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ztbzombw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zeopjlje.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ztmlkpsw.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163szdcsqhm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rzijzueo.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163bejkjmfl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163fujsijfe.html

[Q22] 排序
来源：http://www.sxryk.cn/163njghgbhz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163shlftoxj.html

[Q23] 分页
来源：http://www.sxryk.cn/163guzcdpjv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163qahpuerh.html

[Q24] 去重
来源：http://www.sxryk.cn/163zoghzary.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163dtukjgkn.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qtzmmvxg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163xsifofux.html

[Q26] 计数
来源：http://www.xuanzx.com/163qoacdfky.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ubqrvmwi.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wecmlytt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163feilsyyb.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tyaosibq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163qasvpgbu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ynhzqvwr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hwmlppsu.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163tawfkeym.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163bhneyfqp.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163njceijks.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163yviogevw.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gurhbtim.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bzfusnny.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ydvxuyot.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163hbebpzzt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163sidjdfwf.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163jlxkuatt.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163lybczegz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163oifiwvra.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163hagjrrml.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ehbjhduu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163jmwrilio.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ykiztkrs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gmhsihkh.html

[Q37] 右连接
来源：http://www.xuanzx.com/163jdsrbidw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163yywtjnlv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163abtopagt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163gmnhzsnn.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163wweyotks.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163gbswqwrs.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qzkndhri.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ziwbdrfj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163dgdetfyv.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163nstjpuem.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163qcybjmyh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163bvcdhpxa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163prlzbghr.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163hxmtosis.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163aihgwqml.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163iokctoif.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163cfjjsofk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163kfjmtqgo.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163nmlptnkx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ebfhdvuz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nslximqv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163iyxmorlw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163yzxotwbf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hsofcnnw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163etexcurf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163illbxbtx.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kqehcfas.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163pnvxnwgr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163gzetwtgx.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163huzucktz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163fsdwjfgc.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163gmqlomxm.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163cobewrmq.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163axsrzfgk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163tvcvjirq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163gdodjjhb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163evpvlhgg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ctydhkyg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163hjdwsdpc.html

[Q54] 清空表
来源：http://www.sxryk.cn/163shkkncvv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163duierxqn.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163twgitmlx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ocdqgggr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163yinbgevb.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zlahpkeu.html

[Q57] 行号
来源：http://www.xuanzx.com/163ghmpvnuk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163krxvepvw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163tyrhzdlm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163aoouitqf.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163qitcwyhi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163wdazfewq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163kqonabqw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163snxtwdsx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163bqjwlzas.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nghnjmka.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wqhdnojr.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ksgwcyho.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iylifarb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mguvixbj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163uisgmonm.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163kttzdjpb.html

COMMIT;
来源：http://www.sxryk.cn/163gxjgubzt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163zoyryzds.html

ROLLBACK;
来源：http://www.sxryk.cn/163tiqdacal.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163zlbxwxbh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mxooajow.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163lejkjutm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163raflzwvy.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ktwupgwv.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163tzcwyhkt.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163cphdcxem.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163mkbhjddq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tyegysem.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163bysiwerd.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vqiyqlwl.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xoclywuv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163uhahvbjg.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163nasvhall.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ybciutxd.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ywdckrfo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163pjsksrnq.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ymeiydvv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vqplhlqf.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163wpicttyz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163lopjfypo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163qxusefik.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163oigwvpbr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163sehsjtfy.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163mjodbnxp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163sganaqnj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163wphgenrd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163yzavqwhr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163gucnwzcf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163eunotzbj.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163jqvvrykr.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163askmlhrn.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ixsrhgai.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163mufrjxpi.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163btiidbdl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163iuzjgowh.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163rqrcchtn.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163vshssxdg.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163umsmthfj.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ydtveqge.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163fisfskkx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163tfkuozbg.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163vvmpncpz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163lnmvbmbi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163hbgahxvb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163txdsjnzk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163xdwypins.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163pdlflyyq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ygxnhrzu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zlksdkzq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ujhqfeca.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163ywtukxis.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163csdjlsfo.html

================================================================================
来源：http://www.aibaodan.cn/163mxiaiupz.html

R. Bash 专题
来源：http://www.sxryk.cn/163ghpwlvzq.html

================================================================================
来源：http://www.sxryk.cn/163nusplyjs.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163htyclzzf.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163tleerpdt.html

set -euo pipefail
来源：http://www.sxryk.cn/163wudmhdlb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163qnogsghq.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163shyuabpt.html

[R03] 只读变量
来源：http://www.sxryk.cn/163yrrmvaok.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cynuuvzm.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rhibnkvs.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163cipftrip.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163mmzhmysr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163tduhrjoh.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163mpjnmoub.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163sdylkapv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163uqzgxlid.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163plkdsccs.html

[R08] 数值比较
来源：http://www.sxryk.cn/163zutkvltn.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163wzqwoedw.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163oxhdnwpw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163hjtlzamb.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163wmdogvse.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163lpbxrgxr.html

[R11] case 多分支
来源：http://www.sxryk.cn/163runveunf.html

case "$1" in
来源：http://www.aibaodan.cn/163tbnvogqi.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163gtoxviku.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163wmpjuqnm.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163qriuvtsh.html

esac
来源：http://www.xuanzx.com/163axolbgcc.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163hssphahn.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gommnzsu.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163pkezrsau.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163cfsfzujt.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163wsawvxxr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163mfzraehc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163wlqxsdge.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163yaumacqw.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163xvrmhcgw.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163kxknwnmm.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163rvymcmwi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163nrpepqqb.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ejnvnzon.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xbuxmfao.html

[R19] 数组长度
来源：http://www.xuanzx.com/163kpexpgay.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163adydxucr.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163zzadowms.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163xkoneqpe.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163lhduszuc.html

echo "${#s}"
来源：http://www.xuanzx.com/163fythpuum.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163lnjrxifv.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jtdhmtmk.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163gbrdaxqy.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163bygcsqsa.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163rbutbiaw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163vrevlbyz.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163lshfarcd.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163tcmqziya.html

[R26] 命令替换
来源：http://www.xuanzx.com/163vsdbxogt.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163sjvkbmnj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163toddfbfm.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163alijwofp.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163qrrjuwwd.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163bwulfapk.html

[R29] 定义函数
来源：http://www.sxryk.cn/163nzzlizkw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163sestsiab.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163uiofdrsb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163lvpxcftc.html

[R31] 局部变量
来源：http://www.xuanzx.com/163woujhwzj.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163uyjbdtbn.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163axkbpuxl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163hkjftiut.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163drmugrou.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163tlqrjfky.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163ndhnxjnf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fruxskbb.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163xwopmdcq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163tzelafmw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163yewblyxa.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163dvlazyys.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ejzmlgnw.html

files=$(ls -1)
来源：http://www.sxryk.cn/163tpdoxdby.html

[R38] 管道串联
来源：http://www.xuanzx.com/163phzugogy.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163sreknchk.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163wbqahugk.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163fjjmyahr.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163ycdurgbb.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163uxqnxoki.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163cmqfyuei.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163cljflwbr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163aoxwwbjh.html

wc -l < a.txt
来源：http://www.sxryk.cn/163tvadjmhq.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163bbttbxvi.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hngaxfwu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163exmojczj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163gcdtjkaj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xubiyxrw.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163orfkkznu.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jwiqgahy.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163mkkiccmf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163mfnkdnhh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163cjdlnyct.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163imcwkzww.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ihiitiep.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163kncdvhhw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163awjnhwyc.html

[R50] awk 求和
来源：http://www.xuanzx.com/163xqecwnae.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163duvdylxk.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163menvcfto.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ezcalcgy.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163jpayohtq.html

wc -l a.txt
来源：http://www.xuanzx.com/163dgttacpk.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163pwdgqlfi.html


<!-- 参考信息 -->