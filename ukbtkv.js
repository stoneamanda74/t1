外链999!wailian999！

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jtpqcqrt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163usqjonle.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163dgpwqvoa.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163lxpqufwi.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163agpujsge.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rpexsrnz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163urklwbrz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163edufqhbk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ejyvzwby.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hxbnqsvz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163cdgsduey.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163sonntdsj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163gkxzqkmt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hjgmuzrc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ykjtoebx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163praurrzm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163oybrikcu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163uamyqehh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nmtfpxlg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163bwipixlt.html

================================================================================
来源：http://www.aibaodan.cn/163sfitdkhx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163yyodltzk.html

================================================================================
来源：http://www.xuanzx.com/163ugxvibgu.html

[Q01] 创建表
来源：http://www.sxryk.cn/163yfvnkfhs.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dtolcahy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163axjfziut.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163fsrjfyid.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163oogfafbh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dscocyoi.html

);
来源：http://www.sxryk.cn/163xpfimgmb.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163gfhxqxtn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ofxwlbmc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dhwgmxxw.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ckkxahoy.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163dttnqhne.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fkmxbsni.html

);
来源：http://www.aibaodan.cn/163pvzdwayj.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163frefanls.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163eyxxgwje.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ynxmfcop.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163dfivvvre.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mezjvmsv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rdjufnjj.html

[Q06] 删除列
来源：http://www.xuanzx.com/163gdyjhidb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163waekjsad.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vfmgaaer.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dvyvfagr.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163zkuepuuh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163nvukrhoj.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163rtefrkvj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163olitudmu.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163sbuovaig.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163czbbwcgp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ymfbcjjs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163egpzmoqb.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163uzuigftv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163sqgcwsoh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163snqnsvhf.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163insjdnoz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163whiyvtgs.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jdfdodcb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bpqlfrzw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pjxtbtcr.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lqqvgtkr.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ggfiishp.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163domxlare.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ryohyfgz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163otzcczys.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163adeztrhq.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163wpusebgy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ngnkfvii.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qvxqlrka.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qleaaljj.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163dhsrohid.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kykmnlbv.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hzjlqifu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163fldlydpb.html

[Q22] 排序
来源：http://www.sxryk.cn/163uekwbmpu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jsvsgmpt.html

[Q23] 分页
来源：http://www.sxryk.cn/163jldgoulq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163zpfyzily.html

[Q24] 去重
来源：http://www.aibaodan.cn/163nuyuzrak.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163wljyepws.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163nlxytrzk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163lwpgwcgq.html

[Q26] 计数
来源：http://www.sxryk.cn/163myrmbjbj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rehyrmur.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163pnifvihi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kevmtxzg.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163vqeqdilz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163dbqruhtt.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163imcupcii.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163sjltzwck.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jmliatic.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ohyrtjsq.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bqcxevwb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163uvhsdspu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rmmjxnsa.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tbtvvykv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163yklornfu.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163nwmqeckb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ijfcqdxb.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xtdxvlsj.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163edylwije.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ncpclrow.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163aaklenrs.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nkqfbcnt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163biidrgkh.html

[Q36] 左连接
来源：http://www.xuanzx.com/163hhctskeu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163puerxqew.html

[Q37] 右连接
来源：http://www.xuanzx.com/163pvfzqilo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ihmvsdtz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163mxqllirn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163nadiywpr.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mlqosxnc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yglyjuyj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163awrguqog.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rjfgktln.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163fzlyscun.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163kqtccwxm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ptfdoxou.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163tvgjdwfo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hwepbkfo.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ksyqsghu.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163tcoxcgco.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163oaficidl.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ifytahjb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163niufuyvp.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163aegztcei.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163jsnrhtvv.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ldyocdtn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163limmiroz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163oqrnuegp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pcgsdgwb.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163arodycpf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ghpnphmm.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163czpwmcqw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mpbrkjgt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qbxalgvy.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163osupaxju.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163nrenspgz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163xbqccdxb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163isxywaby.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163eemsczbt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163diwdkxfq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jxdzcpos.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ctpblgpd.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kdjfrtus.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ejjrsjtg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rclnwfwd.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163xnqltjbp.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163uijlupkk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163fibbjesm.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163erakmatk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163nnpkqbhh.html

[Q57] 行号
来源：http://www.sxryk.cn/163ocjzsnqt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163kmovkvuw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163gssawtzc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ziolrczm.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163zsakyhym.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vmaquetc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163oucetfln.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163suwouxgo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163omawdglv.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163skecaczb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163ysnhgegl.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pchuhkny.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dmvegvlk.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163wbmvrvfb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163lgdxhazf.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163jixtpqcn.html

COMMIT;
来源：http://www.aibaodan.cn/163ffbflton.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163vqvqlnfl.html

ROLLBACK;
来源：http://www.aibaodan.cn/163npqcmdzp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ixobtkbm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163zsbdjjus.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cvcoyjko.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163majnvigf.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163asrhfqpx.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163cqlowwcv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xxcivfhj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163cdmgvvhc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163gpcavqec.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163cqultrgq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ejnwnmmz.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xzzsjywm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rquosqbn.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163nbsimfqg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163sszkizax.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qwmmkiyx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163vzhosgox.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xyptwfdr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ouqqqijw.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163wabxhiet.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163bmkunvwt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163bigqhbwr.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163uomoknax.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163pvvrajin.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163sqffvsvh.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163hrzqlxoi.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163oglrfoso.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163eaohcxbm.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163tosbwrrn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163lxzqnwtu.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ixgbocqv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163czgmbxlz.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163cdvyvsso.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163smlipobk.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163lrtuupjw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163nvawjfdr.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163rlmkmanr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163mqffhqdl.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163huqcrang.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163uyzijfjy.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163japabdhi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163mwevyezx.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163kigbalni.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163vrnbnscm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163frvmocvo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mnfadnrw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163buzuhukm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163fqqgpvgc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163mjqgsoyz.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163nswrwzql.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ottkarrr.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163kpenqjhq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163clgjngtf.html

================================================================================
来源：http://www.sxryk.cn/163gvsqvybi.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fofrmlli.html

================================================================================
来源：http://www.xuanzx.com/163mqsrlryc.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163mjryqckm.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163rfpmmyol.html

set -euo pipefail
来源：http://www.aibaodan.cn/163tvsehfhu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163xyluskdj.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vtoseflp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163elcpajzm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163mxrcnybf.html

[R04] 位置参数
来源：http://www.sxryk.cn/163isdvartj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163bcdmixux.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163ihsucpmv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163fmzdouse.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163yjayasym.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163gyczcedp.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wpeifrgt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163hwtukkhe.html

[R08] 数值比较
来源：http://www.xuanzx.com/163kvgxpgdi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163abrqcmwk.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163mkrkufph.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163bhzgxyii.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163sauaxjfv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vydctuss.html

[R11] case 多分支
来源：http://www.xuanzx.com/163epmrqwup.html

case "$1" in
来源：http://www.xuanzx.com/163ahdblvfs.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163sxslfbjg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163sggcrquf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163omzrldsw.html

esac
来源：http://www.sxryk.cn/163iwppzrrw.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163kuqxzbey.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163czbnawgi.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163qhdylmfg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ogroiggp.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xtnwqmfh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163anrdgxza.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163nlslxyvq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163lkefppvz.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163gzvhlvcz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163rvekgrev.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jdgaqwjy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163iiijbyfh.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163colpvqky.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163tndhldzi.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hhcpgpqi.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qrddyutw.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163gosobwan.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163txbvmvov.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163moawstpf.html

echo "${#s}"
来源：http://www.sxryk.cn/163tptnxeux.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ewgwizfh.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ocsfupfm.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163rrqopltl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163xhcmvryi.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163foukbmng.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ajxdqaiw.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ovmdhowe.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163mliwdvos.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jvhjpory.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163vwrinxmv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163sjyyiars.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ggnmjvdk.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163biuosupi.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163sqmzhzrv.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163nklmamie.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hponxqwn.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163cjorwhwz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163dloobooo.html

[R31] 局部变量
来源：http://www.xuanzx.com/163zropdoda.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163wqmlrfyn.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163fkdzkrrc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ypmbzcuv.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163rpvyayvi.html


<!-- 参考信息 -->