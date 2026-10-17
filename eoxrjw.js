外链999!wailian999！

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163pawmahjs.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mneftgda.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rquunuuu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wafadlyf.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hhzxaxaw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163pjskizpr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vociqlnb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163joqrctpb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ghsdgodn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163levbwdyh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163uefgjxzp.html

Ruby: a == b
来源：http://www.sxryk.cn/163iyjzjvgb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163fsaqldka.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bnilljbl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jfdsxvvb.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163fqocuyzh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ymgxaxge.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zpxusiwb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163rtouymqp.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163iocuaksw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lbipjtql.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vszsjusj.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163hwnydncj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163niwgmkpc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163tyfczmyy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vtjkzqrm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sanyemuy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fowzanlz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163nhpnhbjf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163gzuzfbop.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163lxftnriu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163zwezbjfr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163bgrutndo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163uezsrqwq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163juteopjv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163hpsjmtwy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jmjklyir.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ybhfdnmc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kmvaowbu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163igylewuo.html

================================================================================
来源：http://www.sxryk.cn/163dysywkqj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163wwdujsmg.html

================================================================================
来源：http://www.xuanzx.com/163vbxpmqws.html

[Q01] 创建表
来源：http://www.xuanzx.com/163eubkasib.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163vxyahuoy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wghdzkkt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163uyztiobs.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vqqxdrco.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163nzsfuuxo.html

);
来源：http://www.aibaodan.cn/163bvhsrxhq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163kzedjvfn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163domajsme.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163liloaort.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163zfsuroyd.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lfdaemxu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163lqyvgqql.html

);
来源：http://www.xuanzx.com/163qaejyaur.html

[Q03] 增加列
来源：http://www.sxryk.cn/163blfxcmba.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163jrksfdmt.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ozvlgwuo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ndwlinbg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163beioakhv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163qrggiedg.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ouesfwzp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163emrusnvy.html

[Q07] 删除表
来源：http://www.sxryk.cn/163qcltljcf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163nmozccwa.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163aqxafjxd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163mxkfhope.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163txoovkry.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qszvkmyl.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163apxxcvul.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xxilkjxi.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ebpfwxkh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163uppfwrzi.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163iiqyxqnr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ctklkyqc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zwptniak.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163kgmxroji.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163rrkmasif.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163rkpjeylz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163sxuachnd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163prppjkyp.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hrdcfqay.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ivmxniyy.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mbzbtevl.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163bbetmjis.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163gucspdlv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163zxjhlyxk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163gkllwvxp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163kmzpdcpl.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xmviylmu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wqzggzye.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163hvdwdvjz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163mezscoxl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163dxpwunhn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ggxdzxyz.html

[Q22] 排序
来源：http://www.sxryk.cn/163igslgzwl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163gcuyiarg.html

[Q23] 分页
来源：http://www.xuanzx.com/163ucydnbhz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163syaoybif.html

[Q24] 去重
来源：http://www.sxryk.cn/163umzaahvh.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163yaqpfkme.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163iwrlpmzg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163bjgkpvto.html

[Q26] 计数
来源：http://www.xuanzx.com/163cfnueykh.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ddkxlcdt.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163bcjmhcyd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163awbflegq.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163etjqgydl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ptdejkeb.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vkzqoixt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wizximfl.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xyrqpdsr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xnelukei.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bsdgchgd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163iddwqadk.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163zyspsxot.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xphisian.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xnniyrhv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163qmnbxhaw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vlpuxytc.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163mlosixzi.html

SELECT * FROM (
来源：http://www.sxryk.cn/163vswqyduq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wcyzcnnn.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ntasctau.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nashzcyc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vsglhkuq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ohcrzmdr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163azsjteor.html

[Q37] 右连接
来源：http://www.xuanzx.com/163maryapvz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163aeblvdmc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163vbzccdcp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ybtuakty.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163lyfowyap.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163gykhbpwh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163dcpdbors.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163hzwpadtp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163dytqygbl.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163lpnbtpbt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163julqrddp.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163sdvgprmi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163jdkaacmp.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gelncuuc.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163tsjdpcrw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163avsovofk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163lbjtnixz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ksloqqfz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xwxaklei.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163miwywjcn.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163gjqvugnv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lksilyrz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163uksbpyue.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cocbmpbd.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163imrlnupk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163riwxzmpf.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163mqpammxv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163zfpvharz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qmimmswa.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163qrsyxoha.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xynhdsgw.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ufvlbbbu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163eomsovcc.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163chbzjati.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163lvfoudqu.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163iibfmlrj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163ozqfczzg.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ylcfwlok.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163cxvevmxw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163yrygrzog.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163gemqjkkh.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163mmcnvtcb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ldirathn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ibxlskhy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163hkmjsdio.html

[Q57] 行号
来源：http://www.xuanzx.com/163rumdhakq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ziueyeih.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163uuuazcmb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163estkrycd.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163vhqanzvb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ppissszc.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jvroxymu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163urlianir.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163lgjemgic.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163lipcwlab.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163cuysvnsk.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163wlvhnbmh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dszrahua.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163kxbciftw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hammveib.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163wuxegkyk.html

COMMIT;
来源：http://www.sxryk.cn/163btxqsmld.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163qarvdico.html

ROLLBACK;
来源：http://www.xuanzx.com/163gmfppqmi.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ysznrihr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163hbqllwkn.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163cmofhsxh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163bqnzddko.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163cjrkjnll.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lwisgzhs.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ebyaodto.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163yclptwfw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jjltrtas.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163irotdzut.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163jafnxyrd.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163onuvfnsb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xnwsfcvu.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163gddilruq.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163uszerxog.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163yzatrowq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163xrsjhkit.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163bqjwbiop.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163tjslxxxb.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ihmusgva.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163mcfgmbje.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ybengecr.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163zuismoaf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163yysjkxzo.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163gwzzzghs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163qgjrbwcg.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163nbjvvjzi.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ejjctcai.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163xyievffy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163fujnnrhf.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ptziqdfg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163spnfpzik.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163huyuwbvk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163lypapqai.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163epbpugwg.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163zowzcrpv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163pmxjoham.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163pewrsdrb.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qspyvxoy.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yobmibpf.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163lllujqvw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bpvwniuy.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163fptmlggt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163iivjsusi.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xbresaxh.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163pglbosjs.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163plidwykj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163mnfsnpto.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163lzbchisv.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163qlqragem.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163odjxeoji.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163nijmjyvl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163wlvpapyy.html

================================================================================
来源：http://www.aibaodan.cn/163zfjaamsj.html

R. Bash 专题
来源：http://www.xuanzx.com/163xzunaorj.html

================================================================================
来源：http://www.xuanzx.com/163xlzwxdqv.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163xbsbdmnz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163uguhbomj.html

set -euo pipefail
来源：http://www.xuanzx.com/163ivfomuuc.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163uwqehtie.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vuvcbbkl.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163qoitbnwh.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163soyjzpfu.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ugnbwaen.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163aruwuxrn.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163poppwbps.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163gmkkeddp.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163qbkhcixu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163nuppjcgg.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163ptwijshy.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163xcjjfewe.html

[R08] 数值比较
来源：http://www.xuanzx.com/163ufqkfsaq.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pwnoilay.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163euonwqnu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163tnqxbcwd.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163wnerzcxf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163nhazzedo.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163xunrthxt.html

case "$1" in
来源：http://www.xuanzx.com/163fpqyqdgf.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163auuznwcc.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163dzksjiqh.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163csllmgyj.html

esac
来源：http://www.xuanzx.com/163bfkxuyrx.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163jgdfcttp.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163wpelpolf.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ooywlrih.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163dywzzgvs.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163bnugayjt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163hvdxlrkp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163wlfglxpk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163yzpgstck.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pkfwfmee.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ejsjrcxx.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ybywcfhc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163iydqoqnw.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163kfejngmg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163zuabhkds.html

[R19] 数组长度
来源：http://www.xuanzx.com/163iezquxmm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bokhrvuq.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163hwocafsa.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163iuusuuqt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jozcbelm.html

echo "${#s}"
来源：http://www.xuanzx.com/163dwqfupuv.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163kumclpuc.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163qidhpbpx.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163jifklvad.html


<!-- 参考信息 -->