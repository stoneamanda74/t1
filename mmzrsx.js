外链999!wailian999！

CREATE TABLE users (
来源：http://www.sxryk.cn/163xvkcjulu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yaaerqda.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163lglanvuh.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163cbihfhnj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163gviehnul.html

);
来源：http://www.aibaodan.cn/163zoxidgel.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fvxiqfic.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jxpkjlwx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ngvkgskp.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163xmxzhwmr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163jkpafkhp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163torhjjqq.html

);
来源：http://www.aibaodan.cn/163qlybfsof.html

[Q03] 增加列
来源：http://www.xuanzx.com/163tnhhsbyw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163agdzersc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mshvawdw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163fmchonao.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163lvszqyaz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163hhlcsixi.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ryqfrptj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163wwacpsll.html

[Q07] 删除表
来源：http://www.xuanzx.com/163eoghotpc.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163oxrtvwyk.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163nkkuuqws.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163cjytpbhg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163hpijnovx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163mjldrhzs.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163uistvmes.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163deaengrf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163kmgfglya.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163iznzrilk.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163yiwpyslc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163fxesvosj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rltuvhie.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163fvnblcko.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163odcvoyzo.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163rhrhxwpp.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ftisorpk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163fskbhayq.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163azlcqtnn.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ontscuwe.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163cignurwe.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163cqnoucoa.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163hccjtlko.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163giwvxxju.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163wvksczjw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163dejhlttt.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163sdhjrufn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163drxuvnhm.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163vcxiatqd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jnqxsdkd.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163icdqbgue.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163queobeoj.html

[Q22] 排序
来源：http://www.sxryk.cn/163bwrabvsj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163uifkmdkw.html

[Q23] 分页
来源：http://www.sxryk.cn/163pluzwhqz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163uxglqicb.html

[Q24] 去重
来源：http://www.xuanzx.com/163aqlplbvb.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163erymeqwu.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ijgnwkgm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163uowoizxv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163igfvbpqs.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163axucbgbp.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ytydevyy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163aspeamfj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163zdszplwh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163oxjaskum.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163bdnabttm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ncwxrvqk.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163heetouqr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163aqyxmmfc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163geuwejkq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163pamoovwg.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163qthmfjtx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163grlgjfne.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163okofvuln.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163unudlxwl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163bscpbgzl.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163nqxxqivy.html

SELECT * FROM (
来源：http://www.sxryk.cn/163owenqemt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163alpyxpza.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163tcqurria.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163aggrwjvj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vgcehhfs.html

[Q36] 左连接
来源：http://www.xuanzx.com/163mbmliyic.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dpklrduz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tfmhaaph.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163uthtwtqr.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163utdnknhs.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163vqzpobyj.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kyfktciq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163whsdeopk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kvtaqgzo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163qlrhsvco.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ebhbyngq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163szkmxkch.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163mzndygrs.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163hmkgutaz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163grogswwq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163klkuyvtw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163zcujoeod.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163amltkgwu.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163gqqdwlmz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163ssqhtavx.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163guruijbp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163rtapbdqw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163intvpyeb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ekwtylil.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163juaexhxl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163fbzxnzhy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163oudchfax.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ssuaunqp.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163rvptkmnw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vfpqdiby.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163oypeupwx.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163tnutyjyx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gtqzjgae.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ybqsxnnb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lsheqxza.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163wuaaconu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163znjsqufl.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rxviafqd.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ycpttqxr.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ocmmxyon.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163nfciwoku.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wmxdtsks.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163tldwwtgd.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163cuwnmtfu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163xyvoupcc.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163kwqijope.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163nzmjpyjv.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zdoqxytd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163apszbrcy.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163alzhwnln.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163vgdshmxq.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163gmjxnxlu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163noylfbgn.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163uhuomxvi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163iqlwfkku.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163iivhabym.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163rwqelvkb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163sxozaegx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163oczygday.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163lztmxnab.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163fzbmxoec.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163czxvkorv.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163mwosjjhx.html

COMMIT;
来源：http://www.sxryk.cn/163insxpsqt.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163oiujyazr.html

ROLLBACK;
来源：http://www.sxryk.cn/163husnhmil.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ndlsswht.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163beaswcet.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163tymixcci.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163rnhaavpj.html

[Q68] 保存点
来源：http://www.sxryk.cn/163lndxvxni.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vrmmhvpo.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163afyhnvej.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163bmewvzus.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163mprpwamv.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163pwvgemoa.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163acpkowgk.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163gilytxvk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163iurnjqys.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163pcmysvvi.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163pstmevcg.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163sobkcnmg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163mkojzhtb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xzrxjinp.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dhvggkcy.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163yagyitrk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ihrfdhlc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163dwgzajbp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163mvuysptx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163qnaxzuaw.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163nmxjxyoe.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163rpjmhuwl.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163houqwvwi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fapqsyjs.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163yaoaueku.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163aurcurbs.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163fkzesvpy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163fnjpfrtj.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163puipfoyz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wzlordpx.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163xscelnzl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163cxyqrxbz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163vnvwqaaj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163vhadvlun.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163sojrdduj.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163pfkipell.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163vfctetyi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xndleqda.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163jpnipffq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ihpwltuo.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ddkpcoyx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163aiotfckz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163zcbfavdo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163nvvqihya.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163toqztbgc.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163dutcrhwb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163efvcmxit.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163lrqngpsj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163rehibgbp.html

================================================================================
来源：http://www.xuanzx.com/163omvjcagd.html

R. Bash 专题
来源：http://www.sxryk.cn/163cuylpxak.html

================================================================================
来源：http://www.aibaodan.cn/163uilzasvz.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163bfgubqti.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163cfftlxhv.html

set -euo pipefail
来源：http://www.aibaodan.cn/163qyucylmk.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163rsyrncjb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163zckscxig.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ygbkhjgm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ohzatqtu.html

[R04] 位置参数
来源：http://www.sxryk.cn/163upclzsqm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163kigihlrn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163ixdxlobt.html

name="${1:-default}"
来源：http://www.sxryk.cn/163higrtpju.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163azjzlvpx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163tuxdwvba.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hgauhubm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163edhswrya.html

[R08] 数值比较
来源：http://www.sxryk.cn/163apcvbjwq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163fzogndzo.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ryublcfb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163mwmdtdbl.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163uhheqzkq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163bxrdjnct.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163daieqikf.html

case "$1" in
来源：http://www.xuanzx.com/163ftioldcz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163kthsqzyw.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163vbbaordy.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163gzbkgmbg.html

esac
来源：http://www.xuanzx.com/163ckyiwsnt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163atqgzkyd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163yikmkwdm.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163wxifwppr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163ovvmgtpo.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163ufkwizoq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163pkjykjgl.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163tnqwcroq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163rvhfaivb.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163xfyhlfmi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163yfugbyaw.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163tltsilbd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163qxzhlsrj.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163djpkvpvy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163whdcuosh.html

[R19] 数组长度
来源：http://www.xuanzx.com/163lbkpfykc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163cophzjjv.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163qgqlruzd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163alycfiop.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163rkfreolh.html

echo "${#s}"
来源：http://www.sxryk.cn/163tqomfrkn.html

[R22] 截取子串
来源：http://www.xuanzx.com/163masywahb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163dtbqwwnc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163csqfpmlg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163yjbuvdww.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163skljzwcb.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163mwdwptog.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163edeqmrhf.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163hefeaypo.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163avtwfmrq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163bltclrrr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163ndvqtgwu.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163qalyobsp.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163uilwnqvs.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163zerfmtoh.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ldbbhmnb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163gpqkrhda.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hpbjkuvr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ceeetytc.html

[R31] 局部变量
来源：http://www.sxryk.cn/163cgxdlghk.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163pfszujyf.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163lkjgfuao.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163fbzfcfhy.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wlnoszpm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163xqujhzvs.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bsezbrta.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163cjnfjiuo.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gwsbujlk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163pazokiye.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163trmdjmne.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163phgsredn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163acqfkmnw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163maiobbtx.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163kazhbakh.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163iykdxgaz.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163hkhhbeha.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163tiadlriu.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163kupdwyqq.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163cdpxxpkz.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163swntgzkt.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163xccgmtkk.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163wxocpxqn.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163dnekiprt.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163ogklsdgm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163fevfqijh.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163cwzrgdjt.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ckudhsbw.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163rbwjmeme.html


<!-- 参考信息 -->