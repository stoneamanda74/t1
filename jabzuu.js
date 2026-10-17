外链999!wailian999！

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163kwrnnhry.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gqwktgjn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163wonhtuna.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163irokbwrb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163harcymef.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163bxuerduj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163lryifthv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163isfbmhti.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cfypxrlg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163mplzwpay.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hjucmrmq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163yfxstlwe.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163farjocqq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oycgyxrj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ljlknkya.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163bswngkrf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163brubvpvd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163auowpbnq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163iatmtlle.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ftrzlpoh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163hrxvkjon.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163acpetntm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163zzghcojv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163fxmfwrrd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qtbklzlt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163qbkswbic.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mqytyrve.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163bralkieh.html

================================================================================
来源：http://www.xuanzx.com/163toteiywm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ahksdsjl.html

================================================================================
来源：http://www.xuanzx.com/163bwwmbxxd.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163zdbfnsip.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jwmymvvq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tbcwrpth.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163reaebrkp.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163nyjegpkc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jeafawia.html

);
来源：http://www.xuanzx.com/163dskyraoy.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163rwjabvle.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163imshysfs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xzwbwdna.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163baftgtrn.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dnkslpdd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163wluzfrpu.html

);
来源：http://www.aibaodan.cn/163russzwpn.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163asudyfwe.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163loekpliq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163dubuagzo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163tsxncvmy.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rdwqefmz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lmxnecbg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163lhywldut.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163dwfrwdyv.html

[Q07] 删除表
来源：http://www.xuanzx.com/163idirhdcr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ejvjoshl.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163yjleicim.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163mpmocxzr.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163fagdlpsw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163fbqytjby.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163elomtnfd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163pjqkshad.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163pmhetprx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163yuzxsfvu.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163zzlfgibr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163odkruray.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163oscbwppz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163nokjugni.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163behlrkwn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163pmusrjut.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163eyeaddmo.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ujnoojfg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163mbwrknyr.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dzpioere.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163dyuocxtt.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163wuqfaqqm.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ktaqhqjx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ostarzmi.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163rndvshjg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zxlirxsf.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ignhstrr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ydaxoysr.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163muswvyze.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163rzeflyam.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163thmisoti.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163sjxwqfzm.html

[Q22] 排序
来源：http://www.sxryk.cn/163vrqthebq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163vtuwfnjb.html

[Q23] 分页
来源：http://www.xuanzx.com/163duqvoitf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jhizazky.html

[Q24] 去重
来源：http://www.aibaodan.cn/163lqlwxldi.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vbbvpnga.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163beprdyyb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163aibeywle.html

[Q26] 计数
来源：http://www.aibaodan.cn/163sbfzayhn.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163bqfjztlq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163bbennhii.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163lzahgqyk.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163jgpxbzsr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163lpibbpyg.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163lmjtevap.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163eddyhruk.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163yneadmss.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dudquamw.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163sdumknee.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163jzuykzty.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163tzzoukoz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qwlsvkeg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163djkzqhlr.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163armesumb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163uxoqgxxl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163fdfkrjcx.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163wckahmsg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163fqqlrvdj.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163crtnigmx.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163enuussqi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163arjbnxxb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163vbctqbue.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ceszxdub.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ifvrpekj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163oenlzhjy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163fanefftp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163njtelvjz.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163dfuzxsgc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vgnhcehb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163dxfhnynd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163tkpedvzp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ocaimnmn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163afmyrwvu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163bfmqlqwp.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163qrntajep.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163hbigttfg.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xzqigxai.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163xhxtkoer.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xcxxyzio.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ozqxobdr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163thlykuou.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163gdarbdcc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wrginxsz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163kapueeho.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zzjvhtlh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163uizmpqwa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163moaoedpa.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163qcwahjah.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163bportotj.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163gdzownxo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163uyyymyda.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fqfwubvt.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163eeerlcoi.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163clrdyngh.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ujkvvtqd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kcakhcti.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zlbfqigw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163rwjoqumn.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163uubytvtu.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163crqbxxko.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163abkxauvc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163temgqyfp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163xfnkixsw.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163lezdzjfs.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163gdatdisk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163bodjzksm.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ghlrshvo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163cbfbmilx.html

[Q57] 行号
来源：http://www.xuanzx.com/163yznahmqy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163mggihtiw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163phjafcwx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163objtdanm.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163rlsnyktz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wtfbnwxz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xcyyihno.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163wgdkeugn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163unnpumld.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163qsxuvecl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163frrppakz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163edwrrvaq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163critdwlo.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163dlcmcsot.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163wyfxiwtj.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163bulcyrvm.html

COMMIT;
来源：http://www.aibaodan.cn/163hunosple.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163wbvxoovb.html

ROLLBACK;
来源：http://www.xuanzx.com/163svesqrna.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163mkmcjpoy.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163mkkhlpss.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163xuywmtmp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zpjwginu.html

[Q68] 保存点
来源：http://www.sxryk.cn/163skcjfera.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mznkauiz.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163yyaqpwop.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ghfqxtpi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163eadtyyep.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163metpsudq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163gaqxbgfn.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ritauuls.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163kmorjswb.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163vuwavnrq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ndjuenbb.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163pwuowwjb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163mtfmctdm.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163kdunycif.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163dmqkhdfn.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xlrxmndu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ycrinqzb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jxphyqwh.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163cheztgcm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163bjwyphls.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ibsjhymn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163bmwntfkx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163okummxzg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163wepsklxv.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163pjsceogv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163wgmaumkp.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163lnvqgglu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xbxvirsk.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163czouafgn.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gedhtuqd.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163enxvwqix.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163bgufalhm.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lvawslaw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163vrsflhmf.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163dzjvssdm.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ivqvxgcb.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163wzpwmwys.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163irhgagbw.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ckywoooq.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163lwmsigch.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163rloluvve.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163bpijvsqt.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ytuhhfvb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163azcrjxef.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ohgwxwqh.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163xaxhwiyi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163enovbtrx.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163hkvrlawx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vhqycfxv.html

================================================================================
来源：http://www.xuanzx.com/163ciqqrcmk.html

R. Bash 专题
来源：http://www.sxryk.cn/163nopgfbuh.html

================================================================================
来源：http://www.xuanzx.com/163adlxejzp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163peahhhnl.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163wbnaojnm.html

set -euo pipefail
来源：http://www.xuanzx.com/163lyqkmala.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jlwoieyi.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163jhwokzoa.html

[R03] 只读变量
来源：http://www.sxryk.cn/163mtwefznf.html

readonly PI=3.14
来源：http://www.sxryk.cn/163gxqfqbaa.html

[R04] 位置参数
来源：http://www.xuanzx.com/163pnahjrja.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163mtuwvkkk.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163iupssehp.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163cjxoames.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163nhawfqeh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163mhpnwkyi.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163pbtyosno.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163xfoqeoze.html

[R08] 数值比较
来源：http://www.sxryk.cn/163myyfbajg.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163nnciutvm.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163tyazmseh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163pcwlywye.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163tmbkyetr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163qqepleof.html

[R11] case 多分支
来源：http://www.sxryk.cn/163mhywqdpl.html

case "$1" in
来源：http://www.sxryk.cn/163rvgnkpnc.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fcysqwlr.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zmmvuyxt.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163woatrdtp.html

esac
来源：http://www.sxryk.cn/163cadugrkv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mwpdeitk.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163riqecjmp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163cldtbgou.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163kpkmfnhu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163zojzolfq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163anlfoghk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163cidjkqwr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qpmkcxpd.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163dqbjtzfa.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163wquhjtry.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163osonvphw.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163gtugrrgq.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163urwzeina.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163nhaqvxye.html

[R19] 数组长度
来源：http://www.xuanzx.com/163wvfjksnv.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163tktcdhur.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163utcebpdx.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163otilcwig.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ummfrqde.html

echo "${#s}"
来源：http://www.sxryk.cn/163axloocmv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ngyaribh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163eowopugq.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163jcxnoloz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163cqlbjsrc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163cbyffwuy.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163rfsajouu.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163zalixgll.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163rjkmjpus.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163kgbldhgp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163gofdxaoy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163kvxvsnpr.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ihjtdvlr.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163syqvqsgk.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163fvpkxtpe.html

[R29] 定义函数
来源：http://www.xuanzx.com/163mofutyuf.html


<!-- 参考信息 -->