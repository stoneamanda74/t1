外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163zvhscgem.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163rauaaoxb.html

================================================================================
来源：http://www.xuanzx.com/163vxvnwxqz.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ilaxrkkb.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163tcjhhjyc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uajlzydl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163impxnyur.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163yubjbdzp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163aaerxvsv.html

);
来源：http://www.sxryk.cn/163vmntccqb.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163etxjllkg.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vvsknwix.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wjebbvyw.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163unwurkrd.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jxpmhysl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163yjgdatrw.html

);
来源：http://www.aibaodan.cn/163whchmswc.html

[Q03] 增加列
来源：http://www.xuanzx.com/163opqjapbd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ygqesvqr.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163yzcbbflo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163gdrfyrgw.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163fasrmbcx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163yhyfykds.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ghntecun.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ctpohiaz.html

[Q07] 删除表
来源：http://www.xuanzx.com/163jmlpsbbv.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163xmegddnq.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ajdiqogb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163jhzesuuf.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163uriywqyv.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163zlhjpkow.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mictvyqe.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lwevksti.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163dexdsahs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zlzzakii.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163uncysiwo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163iunejfmf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dawlyyzd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163lqkzodhk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163muqiipav.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ekiaxfsh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163wsquwwqx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163qokzkoph.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163kqvjhjbe.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kcfizwyh.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163twnfolnd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163qsmbtgxb.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163aisxnben.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ujhaqrlk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bkqwpoac.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163umtrxsom.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163amoojmyd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tolrhiqv.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gopytugp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jkcwlqpf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163jchcerbc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163jyxsrovk.html

[Q22] 排序
来源：http://www.aibaodan.cn/163yxurnjfu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163lfmbgrmj.html

[Q23] 分页
来源：http://www.aibaodan.cn/163biqrdpak.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163mjdobcdk.html

[Q24] 去重
来源：http://www.xuanzx.com/163xlvqyidc.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163wddlsatq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163sgymcsrm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163hhwyqlka.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pdkfzxod.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dtpgkmpj.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163yyoobwyz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163vdjvaiqw.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163pkixwqvr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vpgslsmj.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163oxfzyien.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163aqhvjcmg.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ajfobbfj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tqsoosiv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163xbcralsm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ldzkyqmd.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ydqglahv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163vbwpwknk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ugcmuzsw.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ybgpggkl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163zesiizth.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163altzywza.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163tzqpjndp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163rmedtfkt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rwyzeuqf.html

[Q35] 内连接
来源：http://www.xuanzx.com/163niavtxga.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gshbdopz.html

[Q36] 左连接
来源：http://www.xuanzx.com/163vgrsjdjt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163cielicgg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163soafutlo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zkychocc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163gattukef.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163bjnaccex.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163rgajrhfu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ljcbmzny.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163dybromst.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163bsssgyvq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163sgrsaqkp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kpzvkbcs.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163zgmuzzrp.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163owisapva.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163srlgxfpe.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163snpxoglm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163spssvgut.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163sdpdqyyq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ysxtyoof.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163csgccclj.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163rnbfyoqm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163btpsmnao.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163emwpxxwo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xgfehcka.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wxminybn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uzmgfowm.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vwiticpb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163okcpires.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163qfailahj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163mkffhskv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wltvppmq.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163orxhtsdj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ldeobwgg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mmfpkoif.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163iecosuky.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163vtjawiki.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163lbujnwmg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ynpgaasw.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163aajqrrqn.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163uapljtgz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163txobkgaa.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163iwcnxofi.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163bmbeljwf.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163qgtqgnvp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163sxsxgyti.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163xlkeuter.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163bjipajne.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zxjitngl.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dbxkmdcv.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163kxqdtohp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163hxdmxexc.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163xyegzbfn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xgvyryyl.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163iihztahg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163mrsjsaub.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163slumunvy.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163axjzvoah.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ckonlhck.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163fssvzvym.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163znwtdsfo.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163kmzwgsnd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163nbxfqbuy.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163dtcntbjy.html

COMMIT;
来源：http://www.sxryk.cn/163pnxljbml.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ozguzspq.html

ROLLBACK;
来源：http://www.aibaodan.cn/163wgvoapnb.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163cnspjrdf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163nzphbier.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163sssjqrxc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163bvsdicyc.html

[Q68] 保存点
来源：http://www.sxryk.cn/163wqrtumlj.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163zaonmvmr.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163gvtzbtqe.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163iprhlowj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ztmuebse.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ncyluikk.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163exxwqsft.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163jmhtwdqh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163qwhbxwki.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163uifibvdn.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163rpcggqrp.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163jryjduyl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163btwyxwsv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163sokwcwoz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nlrxwjhe.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163gkcocipq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163whkryrje.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163nwapjsin.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163rkvadwmb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163lzreissk.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163wjbfhlba.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163xlhugpsg.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163orixwutu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163zornkxgr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163usilmqvt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kzcxcawt.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163dsmtgplb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kapkaffb.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163cxanctfl.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163cmsshhut.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zszgkfow.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tgbpymoe.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163gugfohvu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ivcdqksf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ignlxnxx.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163uqcfavdh.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163xijgvxwh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ysrciivu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qhkjjbdh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163cwpbjpio.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xovarlgp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163gfbgvpgn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ucugdois.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163kszagptp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163focxuimg.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zuzbkrjx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163eebxhxno.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ruqdqlbc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163xtjlttnx.html

================================================================================
来源：http://www.xuanzx.com/163funxvldj.html

R. Bash 专题
来源：http://www.xuanzx.com/163mfwuzskb.html

================================================================================
来源：http://www.sxryk.cn/163uclulyyw.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xrgukwwg.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163gqkdxpkj.html

set -euo pipefail
来源：http://www.xuanzx.com/163pzaybhng.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163dwmzssdu.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163chbxhvcp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163djejqhto.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163isbilzcw.html

[R04] 位置参数
来源：http://www.xuanzx.com/163eyljmayr.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mwedivhz.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163fkviyodw.html

name="${1:-default}"
来源：http://www.sxryk.cn/163cccmhncm.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wlvyavxf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xvetdljx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ifnqldjq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163dskqcnpb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163pxkqhber.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163gbyyomsa.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ecbenmdy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qghjtekp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163tmnwfkaj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163wcnkyung.html

[R11] case 多分支
来源：http://www.xuanzx.com/163vyrtkddj.html

case "$1" in
来源：http://www.xuanzx.com/163gvzjlbyz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163uoykjoip.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163iqxavilu.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163sksvyjtz.html

esac
来源：http://www.aibaodan.cn/163slcyvygt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163lnqtvcfe.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163wassoawo.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163zlzmjhyr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163rvhpstkg.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163glphtjox.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163xzymyzmw.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163wcxccjjj.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163pysfhsca.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163drcwjufz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163mmgqqtph.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163eoiskhnv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163etjyhdsy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163qjijczyt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163thnmksev.html

[R19] 数组长度
来源：http://www.sxryk.cn/163qslddbvf.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xdjhnpmx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163phjtfdzx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163fxeaaslb.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163pqgerogz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163jnsmencr.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163tnbgdepj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163oiciuusp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163zjzterer.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163krwpmaso.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163kuyqzizw.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163bygnkesi.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163tfvxyovt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163pculcxou.html

[R26] 命令替换
来源：http://www.sxryk.cn/163feihsmru.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163mkrxmdsc.html

[R27] 算术展开
来源：http://www.xuanzx.com/163xcyiovie.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ttjqalvo.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mkywrqwm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163qjquxrvx.html

[R29] 定义函数
来源：http://www.xuanzx.com/163cscygzba.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163jdnxmshb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163igqtopuk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163dcsnisii.html

[R31] 局部变量
来源：http://www.sxryk.cn/163vcmbvjxh.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163dgwbhnza.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163hseqtsrq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163nklpylah.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163tpuixwgp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163cjjhpsdm.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163phxyiyrz.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bhgusbrj.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163txyuoemq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lxfpfsml.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163hhsyzkpd.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zththdwp.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163pnslqxto.html

files=$(ls -1)
来源：http://www.xuanzx.com/163omswodhd.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163vompvpxz.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163udckrqai.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163qnatpvpc.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163yylrojfz.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163edguxaan.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163rzyaszmf.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gfzsqdue.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163logxwhwk.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ruiltimr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jpqvvuev.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163dksytosh.html


<!-- 参考信息 -->