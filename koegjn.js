外链999!wailian999！

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163angofjsp.html

);
来源：http://www.sxryk.cn/163zpogdbio.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vupooblc.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163gaqldgna.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163cfbulhmk.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kgosyvbw.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163pkczygpi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163umcrxizn.html

);
来源：http://www.sxryk.cn/163rtrkvmlc.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163oobahuxv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ciyycavl.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wfgymiwd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163thrkcwqj.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163uzwdmhrq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163jsmymzga.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ayogfbag.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ajpotqjw.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ulpktwcq.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163yrolhoqk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fsguidhc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163jdgkqplm.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163rbjnqwkm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163tuljhqqr.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163bxfwxote.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163oitskdci.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163eklymucf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163tjurkfiu.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163mehtwxjo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163pxsfwkmw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lqkkwydl.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ojnfytik.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ycpsglan.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zjyalscy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163modskcbq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163nehzdoyb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163jujdawmk.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ggwsxjkf.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163likihuwi.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163zoyqodxu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ahjqvpdx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163aohqrymv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163fhnrtdcn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mytxakbi.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zycmiweb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hpfzjgxa.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163zllrafvy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163dyzsgpjz.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163iyzpxhln.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163uctfxvkn.html

[Q22] 排序
来源：http://www.xuanzx.com/163zwknopov.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ipetutgs.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fxmhxzdd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163dvzvkzit.html

[Q24] 去重
来源：http://www.aibaodan.cn/163qvjgopct.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163hazxkjgo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163daehvzdy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163dvzljumz.html

[Q26] 计数
来源：http://www.sxryk.cn/163wqmpbpdd.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ojobtpoh.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163pzglxjgn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163fmwzkgtz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tdwlpdap.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jkvzyvgy.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163dfctlbra.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163kgndokji.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163oozzzusq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163exsbajzr.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163fkabnmqw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163uokvvbnd.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163aiyozhel.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zwjtyfov.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163lewlugsr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163aaxvvgwj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rfiknmei.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163nhhnrwmb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163asnyuybu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tlfltptv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163yglfumso.html

[Q35] 内连接
来源：http://www.sxryk.cn/163flmeoukk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zrtojmty.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ansuvqkh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kgmlacya.html

[Q37] 右连接
来源：http://www.sxryk.cn/163stcjqqjw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zwsclkga.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163wcpbguen.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ryowxxyl.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163qvmetyhn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vcadwxcs.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163bardmuch.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163aqushiui.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163jeabomvt.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163qexqcyyx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163hpgoptnr.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163skawfzft.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163samlrfnl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163eeclrdxv.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lyzmiqsi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163stawteqz.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163gcaivrrg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163luwiqokc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163zitynmgo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rgqmwgsd.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163pflsoysg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163euuvtkph.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163zirqvwiy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163szvdeafm.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163bfwprjsk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kohqqvge.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163cthpvtgf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ezzjrspt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163zajqfxan.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163rirkheml.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163olriyfrb.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163fnlrhuuw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163hknucipa.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163rkpnzhex.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vkowsjgt.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ywupwkls.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163calqzdwn.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ytpkbvov.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ymnnlusj.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jqqqdrft.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163iyzauioz.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ajizpgpx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163vdhhztou.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163mdyvlwjn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163riwxfiyc.html

[Q57] 行号
来源：http://www.xuanzx.com/163tdvpmkjr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163zwkmcmih.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163dfstszzd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163yudxuiyg.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163rgbtmaek.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163owwioqku.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ouwyglsa.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163yxjwiuac.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163fylghdnu.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163wzxoolcc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163pzpttypf.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163afppjqua.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pzrjhcce.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163jcgrxoed.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163vptsdstb.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zyivsbze.html

COMMIT;
来源：http://www.xuanzx.com/163zacdrall.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163jsabrigd.html

ROLLBACK;
来源：http://www.sxryk.cn/163ddpdmbbs.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163xlyihasj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163etyrfahr.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163nomkqtcw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163ozbnqjta.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163wucfmctv.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163piebyckj.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163lmiplmgh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fpytaijr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ffnnbhmt.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163plcrvsia.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fqvagemj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163doxeepag.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163eqvqsthu.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163tddjjvod.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xfnkacqt.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163aoggqoya.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163jsxtrxyl.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163joaudvml.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163skevrory.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163swpltdrw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rfmcebjf.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163olujeejg.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163xervubbr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163kvsxvnmb.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163egzrpiiw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vpviqvns.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163seswefml.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ooijpinq.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ewjmnfwm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rrmosokd.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163bemisrir.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163sdgpxdcr.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163qpdrgpyq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163yfkdkefo.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163oaqbrqba.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163mqejbpcz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163bjfdqowp.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163jtshjnyn.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163gfxshwfq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fhobjjup.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163apgtbmwx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vwljhyjb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163giiooqhy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ozgfotbm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163srfmrewt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163zelkxbfc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qyaintdq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163msbislfj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163iuoqhvsj.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163rgkcnlvw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163roxoqmtd.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163nlvixmbf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163dmajzzww.html

================================================================================
来源：http://www.xuanzx.com/163spxcylyg.html

R. Bash 专题
来源：http://www.sxryk.cn/163hretuvcz.html

================================================================================
来源：http://www.aibaodan.cn/163urmicxjc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lzfwsbph.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163uzchvohe.html

set -euo pipefail
来源：http://www.xuanzx.com/163qayyupnp.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163jutkqztj.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163azhexsfu.html

[R03] 只读变量
来源：http://www.xuanzx.com/163szrmhnpr.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163vdjupnay.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163kudnwihk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163mkhbxqzc.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163bvxndwqu.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163cuvpqzfz.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163egywellb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163kxhblupc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vponzddj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163ggurwihh.html

[R08] 数值比较
来源：http://www.sxryk.cn/163itxlwbqq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163azuxizwy.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163amvijwzw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163yymkdjpr.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163mhkalqco.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qzvhpikd.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lxjaloyx.html

case "$1" in
来源：http://www.sxryk.cn/163zoyiwhff.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163unpardon.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163gthtfvia.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163dzbwbcwy.html

esac
来源：http://www.sxryk.cn/163tufszlpa.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163hkkzvwql.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fivogtte.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163zshmgjwj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163yfrvxxby.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163pujmwoqt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163hqhalfje.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163bjqsqccr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163gdxnvyfc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163zmshpymy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163rkazaskr.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163vsomlvko.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163tootwmul.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163xsdvxvap.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gppxqamj.html

[R19] 数组长度
来源：http://www.sxryk.cn/163nmcsupzu.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163talnhwis.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jzqdlmqu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163jnxgekdb.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ndprhawf.html

echo "${#s}"
来源：http://www.aibaodan.cn/163ckowlmyh.html

[R22] 截取子串
来源：http://www.xuanzx.com/163jgyygvqd.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163hbxyxzyh.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vrwminhk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vjbixhma.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163kbgkinjs.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163mljpdkvs.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163mfamipsu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163tbnuqlhx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163rusupytu.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163mkpsjqpg.html

[R27] 算术展开
来源：http://www.sxryk.cn/163qtrhzvvq.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ugryrbje.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163sidopolz.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163vpehqvau.html

[R29] 定义函数
来源：http://www.sxryk.cn/163eklqwwyp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163asoahugb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163hhvhnxip.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163winkjlcv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163eczxyqrd.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163lkexbyum.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163vmkuhfpp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163lwlzfolh.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163fflgezwv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163zygehwws.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xcybmyro.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163efihrwge.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ufmqweps.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163rswapfqu.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163pootgvan.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163dxpiecob.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163tmncvvay.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163izkywmfg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163pooownpe.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163gtnaeqql.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163smtzsmpq.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163iheooble.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163znmaskzx.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163euhbaxlm.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163rktvvkfl.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ifrybisk.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163dkuukkwe.html

wc -l < a.txt
来源：http://www.xuanzx.com/163pkaanfkf.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zjlknqpb.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163phlkgsxd.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163uvostgkr.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ptisaxog.html

[R45] 批量删除
来源：http://www.xuanzx.com/163fhimbgoa.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163gpcqmiva.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163ikhfpxnv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ynzkwhya.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163cjtqozqc.html


<!-- 参考信息 -->