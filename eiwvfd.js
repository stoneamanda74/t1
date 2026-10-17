外链999!wailian999！

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163tidnngro.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rftpnvyq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yjsshzpb.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163uqiwecdh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163kbnnlcys.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jeaisivx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163xqufgrzm.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vrhytwld.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ojceojkk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163mciyafha.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jfnbnksx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163oylpvaun.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xmqjtria.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hqawwcqy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163leauizbz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hcgmjcja.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xeaeiycj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163gyqxrhzd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163atszifqp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fktlhsbc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cuxhqenr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ejovrkwc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163fyywxifr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163fglltkai.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163rcqybfxi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163gejzadlv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163acglukbi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163kvuktbsi.html

================================================================================
来源：http://www.sxryk.cn/163ehvymsmy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163vjjmnbkg.html

================================================================================
来源：http://www.aibaodan.cn/163ksxnurvb.html

[Q01] 创建表
来源：http://www.xuanzx.com/163jfmbxnmj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163zjfreehy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mszvmlim.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xwhzstkz.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163mmkzuxlw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163trfmkdxv.html

);
来源：http://www.aibaodan.cn/163jdwfeoez.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163nevimpyi.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163yxauyjfc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hduonbja.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163iqylsbae.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ogkmahxl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163xctvytpb.html

);
来源：http://www.xuanzx.com/163aokhkuhe.html

[Q03] 增加列
来源：http://www.sxryk.cn/163hseujcpw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163yzoylzcd.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163dsnslihi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zczorwzc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ucwdgnoj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tvckykmk.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163hovenlsc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ddczuhmh.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ezegvrgf.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wiwaijso.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163fcfgzbil.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163bagmroek.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163crvfrcgo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jmyjlrqe.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ysvkxrlc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163sglkcimx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163zxquccjd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163tywwvkzm.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163wjomrlvj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163oissbecf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163glgefyzw.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wffplegv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163bnqdeaze.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163pgrbdbfu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pvxwwqoi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zigjolrw.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163fbllpzyq.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163zvscqvip.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163mflxlcyp.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ggmsbhhg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163fgbrasxf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163levillhk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hbwijtad.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163qrqagsay.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wikqdrdr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163szfluwmf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163pjzdnxsy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163etdwvbwv.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vbqreqgg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163jnmrlcui.html

[Q22] 排序
来源：http://www.aibaodan.cn/163gfayzpwb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163pifwcqbv.html

[Q23] 分页
来源：http://www.xuanzx.com/163rgzpamfm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pgcjnlyk.html

[Q24] 去重
来源：http://www.sxryk.cn/163vutqerpi.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163comobfye.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ijptckgu.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163wjwzxmgb.html

[Q26] 计数
来源：http://www.xuanzx.com/163anfsxqup.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163mjyucxrf.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ovcouvee.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ubwselff.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ltipnbtl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163cdxkyrpw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163towxpgai.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ifqwxuhb.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ikaozgsb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fyjtikub.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163uzpprcxu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163lbyvpjet.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rovsphbh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qaohtgue.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163aqrfnrhz.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163yokjmomk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163dlusmssr.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163fpytjlnr.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163pxhlpkgb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163gizkgjtj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163eumcqgre.html

[Q35] 内连接
来源：http://www.sxryk.cn/163xigdlojp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zbkegxzt.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ncjzwudg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163iyfslwom.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ckjtbnvn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xiexibol.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163fviyfvam.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gxwxtciw.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163dzulztjt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163wfuowtua.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ufblkgka.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163gxmianwp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163bnoxfgca.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163wxqywevz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163illrypif.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ubbiyfua.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nyeuwwis.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163upzmvycd.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163xelbakjk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163gymyijhs.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163sbmygelu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163rvlcybny.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163tkmmlkre.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163phpaehaj.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163btihjmkc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dtijydsk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163irwidwms.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cdlvbtvd.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163gpbqkhjm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163tbyhkcly.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163mpmibghx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163yfidphry.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kveiqcqa.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ppteeizl.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fetaxrxl.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nkcedvql.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163rukcpyjq.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ouyxnlyk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163jthsquxd.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dmswfuea.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163pjbheclt.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163djpatqty.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qqqdqzpw.html

[Q54] 清空表
来源：http://www.sxryk.cn/163gqybjsgk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163cdkcwxvh.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163afiembet.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cvdyhxye.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163algscxqv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vfizxbzr.html

[Q57] 行号
来源：http://www.sxryk.cn/163xxhofrrn.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163wcbsffwa.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fvnndvmf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163syxwoasw.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163pbyzddkn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163mpnpbyas.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163dpmtuxll.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163fgjmpluv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163fxlimewa.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163rdedkxrq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163vhecyjen.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163evemzyes.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eauresbt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gjvwqxsh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163qmeezcmj.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163wpzbrhud.html

COMMIT;
来源：http://www.aibaodan.cn/163tcpafkqf.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163daixtfpb.html

ROLLBACK;
来源：http://www.sxryk.cn/163uenwmbdc.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163htbqudit.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kbvzjfoq.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163onpzrrtq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163exsomwjg.html

[Q68] 保存点
来源：http://www.sxryk.cn/163efczdyje.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mhgqjlqu.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163kcbpmtqx.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163cfysgxlb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rtfadhxe.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163pwgvwrzx.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163mvoqlned.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163pygvighe.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xtnsqodv.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163xvhtgerk.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163oxhgonco.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163cffahygr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163dcfktxlf.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163tbtkssux.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163xyedczrp.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qiodzshf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zzfhwxcw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zozraktu.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bomduwlb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163zvprbgiv.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163lcxupkjy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163kmhsbvdk.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163inmtqmxn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163sywsoiuq.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163mlztnpkz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163vtbwdrqt.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tmumzzjg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ojyewjvl.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163fquarbnf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vuqwyrpz.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163sgkthbwj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163kdulwrkm.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163amvxwejb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163deisuspo.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xetaqpnz.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163abmcizsy.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163aypsnepm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163fxqufsmb.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163hpfvogrw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163cavbahdq.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163oujowlin.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163teybilsw.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163cpgopoir.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wqozfvhj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ucucjgbb.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ahmjruvq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163hvkuhyqq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163udnlzzur.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ubypoehv.html

================================================================================
来源：http://www.aibaodan.cn/163plbfxtwe.html

R. Bash 专题
来源：http://www.sxryk.cn/163suowrpub.html

================================================================================
来源：http://www.sxryk.cn/163wmhnadcs.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163cydgaipg.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163sfvzzdfl.html

set -euo pipefail
来源：http://www.aibaodan.cn/163cvpiehws.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163cbtwdcdp.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163lwarjcwe.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163yzftwxgb.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163yvnxtkmi.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ekvejymn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163akcqyqpk.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163swznurhu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163kwdixucw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ebfyyrjb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163qmsfunbo.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163bdjjziwe.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ecrpgyyc.html

[R08] 数值比较
来源：http://www.sxryk.cn/163illownhv.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163xaxarzvd.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163iqfiwalh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163iouqvtfd.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ckesnjkv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163vusadqxh.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bqscxxgb.html

case "$1" in
来源：http://www.sxryk.cn/163bznqaemz.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163brklbqei.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mebxvfno.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163qunbvfud.html

esac
来源：http://www.aibaodan.cn/163lphpjcge.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163qmnylvjf.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163wiascwbx.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163pcizpgqo.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163fqasdmgg.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163lcpuvzrj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163lvbsnuui.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163flmdodom.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163brcukstc.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163bhduadhr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163fxhxzsgw.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163nuowkqkq.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lthucbzi.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163cbaohiyx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163qfhjagce.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163accnnvgc.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dofgnemm.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rrgrwpdr.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163fwjcbvpv.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163kihvfrfo.html

echo "${#s}"
来源：http://www.sxryk.cn/163hzdpvstb.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xdvcoctf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163phrnohuj.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ycpbavda.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163tadhsuaf.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163fpjpvzjt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163bnjpgkml.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ojdhdspz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ilncnuko.html

[R26] 命令替换
来源：http://www.sxryk.cn/163czpzujdq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163qgvgtjfg.html

[R27] 算术展开
来源：http://www.sxryk.cn/163zwgjoyuo.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gjosceeo.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163iyzsqfno.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163gvjzaitk.html

[R29] 定义函数
来源：http://www.sxryk.cn/163mhthqaha.html


<!-- 参考信息 -->