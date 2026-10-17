外链999!wailian999！

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163frojrozu.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163uzhewmuj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163uunyzdbh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ysnwgczb.html

);
来源：http://www.xuanzx.com/163udqjmbgy.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163mmwsnlad.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163pcjjfftu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163wmnduxec.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jtbxhiiw.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163whffresu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163burvgnua.html

[Q06] 删除列
来源：http://www.sxryk.cn/163tdruoehl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163etuxrpvu.html

[Q07] 删除表
来源：http://www.sxryk.cn/163yhwoqtec.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jzuzmagi.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ysfxnmij.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163uyrilscn.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163arvokxbf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163gtgkrskg.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163oknknusq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163pitwrjku.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ciehlkur.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ghzkswbi.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163kyhdwpgf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ndrqnber.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163pyxgqvth.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ktpspydh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163vtvpqvik.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163lronmtis.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163srapgbgb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ofokaivw.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163sfezgjen.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qsnvwrle.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163tpjfjgcs.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163wqgtougp.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163iaaiyxbq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163iwvmqvmx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163balokugh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163kkqtzpcx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163dndytext.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163buhhmfut.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163cthosvxx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jzbbsmtj.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163znwidwyz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163spqlnejk.html

[Q22] 排序
来源：http://www.sxryk.cn/163eiqexhaf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163tnluyfvy.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xaxlaklp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163fgfsopve.html

[Q24] 去重
来源：http://www.aibaodan.cn/163quuizluj.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ercvttdw.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163tfovwvba.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163fddzxevx.html

[Q26] 计数
来源：http://www.aibaodan.cn/163spmkkxrv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163zvrhogfq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163hylylhrf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163zgtuezen.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qznqgbjf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ffkwspze.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jytkiaws.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kblaihmx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vpkmmklw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xwdwzkzy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163vczetajp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rqdvbsqr.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163zaijogfx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pwslhdlk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zgubpymj.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163yiusnfel.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163umikgoqg.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163hhcjgchk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163gdmtmtcu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163rjnnkjwq.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163txwhubob.html

[Q35] 内连接
来源：http://www.xuanzx.com/163qejimidw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163curpunqj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163obsreitz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163topqodxd.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163gspibtjs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163zwxaaxlo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163akgvzrie.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163dpycrhxe.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163johugywd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163icobmrat.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163khfhsqyx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163hzdqcqvj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163dgboensq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163dwlhtytw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163pfszyprz.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163seexrgpz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zhqxwyww.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gvogrlxm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lkkzypvp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fvoovkxh.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163vwuilepa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163kwshunxx.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163sqszdvrl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163tbyinusl.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163qsuhlwee.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163mjmywnif.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163jnkbszgu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163brtgmtbh.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ulnkbznf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jqpxztsw.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163kfbmsihy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163sbftgszk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163kytgbuso.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163cvcmxqsc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163focgfuox.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163gnbobflw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jicbukbx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jrubzvhs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163qsnhlxtw.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163irinjsvy.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163rbuiswqk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163jseattwr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fizkjlak.html

[Q54] 清空表
来源：http://www.xuanzx.com/163bxeilzdq.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163oqdszqbg.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163dtbpldte.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163zaisyrgi.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163cnfecucu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163kvsmcsgi.html

[Q57] 行号
来源：http://www.sxryk.cn/163bvhswfev.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163zxavtcue.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163pyngoqyl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163mjfndanx.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163kliqkbto.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163revdbrnq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163wfvmthcn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163dptxefux.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ofoiwrlo.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163hyctgawh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163zcrdbcqb.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163btqttigo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ccomkynt.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vrepyvqa.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ucjumgzg.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163sggswwup.html

COMMIT;
来源：http://www.xuanzx.com/163szmqscdd.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163sbkmibem.html

ROLLBACK;
来源：http://www.xuanzx.com/163whmkfcxi.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ebxyrszj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163enddnxcf.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163wevpxlqf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163btulhros.html

[Q68] 保存点
来源：http://www.xuanzx.com/163zkqldkxz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163aniowhvi.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163hhzwdzdx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fmgubjfj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163boacukty.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163rrqlxgin.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163momrkyck.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163hqdzpbwp.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163yeipfsdy.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163bywrfggy.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163svzyjegj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tbjkkygu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163bgzaufnp.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qzvnrxdb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163jehcixsj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qakfeevt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163nbzlzeoj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163clajhaur.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ccqlrfgz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163icmvywcc.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163cywenudr.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163wueucwou.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163cqnmypzj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fgggonqg.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163rsipjlzj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163jafnkawd.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163vporhaif.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163asjeuhwa.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163oetsxibn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163kjpsfbln.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163rddbggei.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163pronhxru.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163zoqyigsa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163mwjzbqno.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lotiwhio.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163tqkmmzup.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163zkujlbtn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ajrppeuz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163xshwhdyo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ulbmwdtv.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ptxdswef.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163uizjknpu.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163jxnjftmw.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ytuqvnjt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163qxasiggo.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163wpgoplym.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163pfajxpsz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fzyillpp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163isabbbie.html

================================================================================
来源：http://www.sxryk.cn/163locruevd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wflitjhl.html

================================================================================
来源：http://www.sxryk.cn/163xfxjvncx.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163aknoywdn.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163abvyurob.html

set -euo pipefail
来源：http://www.xuanzx.com/163krkupjue.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163fikaiqrs.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163xefghmer.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qzaqeuty.html

readonly PI=3.14
来源：http://www.sxryk.cn/163etssygup.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ubpptkzm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163hnfxcbgi.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163dsmxtyoq.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163hymyfkpg.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ieoxtkfw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163gchbtrmc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kvhuxnnf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163rfeiyvqj.html

[R08] 数值比较
来源：http://www.xuanzx.com/163bivgcjxo.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163gpxgwtpf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163thyrumap.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ioarvsbd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163kkxfncau.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163cubzcses.html

[R11] case 多分支
来源：http://www.xuanzx.com/163uxyefuqd.html

case "$1" in
来源：http://www.aibaodan.cn/163ailyscgh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163cfvfubgp.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163pvbbkbyp.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163dafvpemp.html

esac
来源：http://www.aibaodan.cn/163wpabjsol.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163qagrmvrj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163jffqzwfp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163mdnfcgkv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163zneqegot.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163jbjpcivh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163plwpteqf.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163tnrpjstu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163huzlqjzt.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163xtiqqdrr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163vrllvcrk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163iriaiwhg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163hbaisape.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163rjuwbzxb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163fucndzjx.html

[R19] 数组长度
来源：http://www.sxryk.cn/163aklqcbgl.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163thnyzbnz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ldcdfbif.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163ihkyeawo.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163jachdjzv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163cgnvagjt.html

[R22] 截取子串
来源：http://www.sxryk.cn/163asugnmph.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163cdvxqmri.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vphouljp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rmaedaxh.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163vedowebz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163bakokpct.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163pqlguzbi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163avkonokc.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ygoxswne.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163frtqmpni.html

[R27] 算术展开
来源：http://www.sxryk.cn/163eoxscebk.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163jgzgevhu.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163aytrysws.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ojgxmgql.html

[R29] 定义函数
来源：http://www.sxryk.cn/163evpuizmj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163aozubesp.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163srlpdepg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163tppksrsc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163uuwvziag.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163iqbmvtfh.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163pclmkwdt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163houqgfkx.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wflaezpm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163kuwucaoy.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163rjgxnjny.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163bevvvsej.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163wyxmsnoz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yqpxgeai.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163eepgvceu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163fdgxhsyg.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ckjndkwr.html

files=$(ls -1)
来源：http://www.sxryk.cn/163uyuyokvq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hydxwxum.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163rpsezrzf.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163swpltynz.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163hdewwuzg.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163bhqbhhlo.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163gujgzmez.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163hnmrmgbx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163rzbplpon.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163lkivrpzw.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163umkgblwv.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ebkgvzys.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163thyovepk.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163mgclilwp.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163xcabkeis.html

[R45] 批量删除
来源：http://www.sxryk.cn/163mrrnhxwp.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163uqpmvrtv.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163wcpgydlv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163bhytjoxs.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163zngnuucg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jxdotgfn.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163mxtwymsp.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qchhjetu.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163sfejrjdb.html


<!-- 参考信息 -->