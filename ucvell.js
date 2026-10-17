外链999!wailian999！

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163odftjzfw.html

);
来源：http://www.aibaodan.cn/163usnzwwcj.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qcofdosg.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jcyzsklp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ghcljunt.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kbywtozl.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163bgganofj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163immcbzvp.html

);
来源：http://www.xuanzx.com/163iqzdbcsh.html

[Q03] 增加列
来源：http://www.xuanzx.com/163svzrhlpr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ocmaiaak.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163bfxjetsd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163vwhmgwzv.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163imepeznt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163vemzvzsk.html

[Q06] 删除列
来源：http://www.xuanzx.com/163hvubplgm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163uokbltvo.html

[Q07] 删除表
来源：http://www.xuanzx.com/163wtpvguzi.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qrgmtmnn.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163idlxapex.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163zjfjugun.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163etamfpwh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fdjuvgdy.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163yqkzshwr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163tuyiaqkv.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163pbgljfhs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163gqirphht.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163epoglwbb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163rtpywags.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163igjjfilm.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163kgzodmei.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163jnueexlg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163lovezedj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163hqpytrhl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163qfcyfoig.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163dbexbbdu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163nncfhabe.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163grckqkhn.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ginjdyib.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mjalqxyy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163buvqhejy.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163cwpadjia.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163crymdhkx.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163uaqvidqo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163teqwjcjp.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163msudgcdn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163fubzxhhp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163tsqmgppz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163weffzszs.html

[Q22] 排序
来源：http://www.xuanzx.com/163fkyqujws.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163mgeystrs.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ihlbhtwn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163hsyfveox.html

[Q24] 去重
来源：http://www.xuanzx.com/163zwbwprjj.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163edxdtwqp.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qllmlxrq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163eqirrquk.html

[Q26] 计数
来源：http://www.xuanzx.com/163pmowlnat.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163yhmpmtbr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gblpzldt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163sryaybxj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vajxjcrm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jslnnkkx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163wlkfogyv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ezqpwizo.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163mixfbyym.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163trztqkze.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163vyffkmkz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hlvedyep.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qdhvbydf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jwsaavla.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163hyzqjkvb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zlwaitsi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ojvyzjqo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163jewozvvf.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qfroxdxa.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163nxpjtmke.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163lvmwexxt.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jsjwnkrd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163eoofabjd.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163rfwywwst.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qtlbbcen.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163oxegfgda.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163vkablnvy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163gewgyzyd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163zjggwhjg.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163dmfghlkj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163hmhhiqdo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163pbpghhls.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163wxwdkyyw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ibxzjkjo.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vmxnwilx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163honbdlln.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163prtinopn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fputkpcw.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163zbbvogqv.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163bxjytanw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163kkmlwzfh.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163laqbijob.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163pwvwxllz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163lhmaxrlj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163iljqzzhc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163szfyzkjo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rixicfpb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163iaheklul.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sfmrlrjt.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163iykpxyfc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163lilcmwhg.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163mclpngfb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163lucufzgs.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163stwqdwrt.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163txiegsud.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qyckcffe.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163lzxsikcz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163qreqqlqy.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ldwahurp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vvxsgqod.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163nfydubnb.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163taltpyxw.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vljyurep.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163zrashdwt.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ekwzjpsl.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163jjpbzxmm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163liybowqo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163zrghbiyp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163jirryipu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163hxluczyz.html

[Q57] 行号
来源：http://www.xuanzx.com/163pfnvunog.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nicacyks.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163fowxnnew.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163tcxczrvg.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163cwsvhkjh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163koprmbws.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jdjgcjrh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163uvhbyicn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163pndvibzr.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163mbellzdl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163wcxqeapr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163bofnolsq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163irrosqtw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163kvtpwqko.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ruuxptfe.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163abefijkd.html

COMMIT;
来源：http://www.xuanzx.com/163wrvifbvy.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163vrfvqslz.html

ROLLBACK;
来源：http://www.sxryk.cn/163rhtklqer.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163xumljjeq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ixhehwai.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163wawsyybm.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163elyimpnm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163hjpdrflz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vvnpgbhj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ialuwfyd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163fpmwdomu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hsjrwjoy.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ugudtakm.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zoqxidxo.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163alffjpdo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kjfziijz.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163dtdffykf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ubckhdfj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tsmmyypl.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163cklqkkuh.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wubktwjv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163rdbilnlg.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163dxfvakkq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bofhjclb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163tswdfhpe.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163drxzbdqx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163qekxhuyb.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163bqdiqupf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163gtiwunqp.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163dmpeigyq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163tmgbkklm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163yyafteqv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163eiwnwoka.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163fvsrtocv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163auqhycwf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163kgamztyd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hfsabddz.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163ewsgrvnh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163quclvkhb.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163nvliikhf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ojrlowio.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163nbhqlhxp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163bjpubdco.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163wnbzwarm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163uynckzzo.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163gxyfztks.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163wageitwn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163dkuenrfq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163pyyrnbrt.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163diqvyvfs.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163cqzmwhev.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bampwuzz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163cfshghmd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163hlidxvzu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tzhhluxc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163rbbohayp.html

================================================================================
来源：http://www.xuanzx.com/163xsnftjgy.html

R. Bash 专题
来源：http://www.sxryk.cn/163vfuoixnn.html

================================================================================
来源：http://www.sxryk.cn/163qsoqbnyf.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163pqmoavdv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163yizimudm.html

set -euo pipefail
来源：http://www.aibaodan.cn/163yzedrnrn.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163ztogimie.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163oencqcmp.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163llbiqftj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163umfeeyfm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163oqfggnbc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ihfwhkwe.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163wenzzdav.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163qpesrgfj.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163skgacwgm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ywvmjlqi.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163yvezccsf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xcdukcbo.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163cqrgbiai.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163obwhyazt.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163nxslesiz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163vojorcfk.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163htapptwl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163byandcyp.html

[R11] case 多分支
来源：http://www.xuanzx.com/163ajilpcfs.html

case "$1" in
来源：http://www.aibaodan.cn/163lppizaoz.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hcgmpezs.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163rbaatxgd.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163mxkwzhyy.html

esac
来源：http://www.xuanzx.com/163nehziyer.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163fxtbxwei.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163bislvywk.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163iwbtbwrl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ulfhloaq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163sowvilyk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163abbakssv.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163xbufbagh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163thswzlpf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nfbhtdwk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163pejmumhz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163mgcafrds.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163mjvjxrtg.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163aqqjotsg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163omxskcbm.html

[R19] 数组长度
来源：http://www.xuanzx.com/163qcmzsmui.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163rxgoqrst.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tbimfstv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qsiryilb.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163iwaltrli.html

echo "${#s}"
来源：http://www.aibaodan.cn/163xowycixc.html

[R22] 截取子串
来源：http://www.sxryk.cn/163temucqeb.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163gcwfeuaf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163szksfqrk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163vwsqrgtj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163rttqzffn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163dmhtypxw.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163mjghsneq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gzoprvqg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163vwekdhsz.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163jeaemppr.html

[R27] 算术展开
来源：http://www.sxryk.cn/163yojblpzf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163vbrioidp.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ahkaamiy.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163cuccdsyg.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163qdycbaap.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gadxwkam.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163yauklvzo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163ohnzdsdo.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163sdnaldjp.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163pxznrokr.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mnigoobp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163qzplrqlp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163kwrguveq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163akfosumh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163legfxbcd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zibbjxog.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163byndwvbb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163srgippzl.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163mhepswqq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163vuyjeqiq.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163lhmpnfuw.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163qcmxhbkp.html

[R38] 管道串联
来源：http://www.sxryk.cn/163afycvylw.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163tprurulw.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163xezugymx.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pqzusxfc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163rbtnpkrk.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163bktddrvu.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163mwrimbzp.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ubvlvcgy.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163obdelefl.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163gzdqxqdd.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163raqnmfrx.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163vustmmjg.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163tglmermx.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163lwvgblzo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163rtxnttkb.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163boiklroz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163mfpipxjk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ujfngbxy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163hbsqswjz.html


<!-- 参考信息 -->