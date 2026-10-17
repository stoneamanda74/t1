外链999!wailian999！

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zwwtrsde.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ridyxezq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xhunhfyx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rihdlmlr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jtabheeo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163hkqdcpzs.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zhyerwph.html

[P04] 求长度
来源：http://www.aibaodan.cn/163buyadcji.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163vgtpqzzd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zhhjyscs.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xwsgibza.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bcctubbn.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wlvhctzf.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163dukfdoet.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163dqadvgog.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163tetsvnxq.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zovksytg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163fgrdyypu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163cnieguuo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163rbnylmtk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rbrvxuyt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mfgtsxcd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163phrcxaoe.html

Ruby: a == b
来源：http://www.aibaodan.cn/163jazrxbgz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vmnyhule.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ntnxspll.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bxzwlbkh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163fxliprxg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163hltqivhz.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163damtbajs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163pknfwazq.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163sbfnsuxh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163imwzlhvu.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163dqzercek.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163rtghimpg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163hgkisqit.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bjrysppx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rfipixmg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lzqdxnjz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ihbzhgld.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163uofrbxew.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xitgyecj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163fdujlidy.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163jcstzqzl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163csaogbgn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163cseciqxk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163jckbncsz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gajmllbx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163imzpgnae.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163wcoweavi.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ymscokok.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ofoxvmbr.html

================================================================================
来源：http://www.sxryk.cn/163iydulegx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jcihroaw.html

================================================================================
来源：http://www.sxryk.cn/163akwqfnon.html

[Q01] 创建表
来源：http://www.xuanzx.com/163uelbaegu.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ylgnytpf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sasiwtkj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163agoghnfc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ytsuigqh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163kzqlhkwn.html

);
来源：http://www.sxryk.cn/163novnkara.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163sgycmvnu.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163qtutbdsc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mbldrzjq.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nmsqvpbo.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163epdwggor.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ksjqlpee.html

);
来源：http://www.aibaodan.cn/163filotgyj.html

[Q03] 增加列
来源：http://www.sxryk.cn/163dphgypbk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163tcipcbqy.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xyrihodg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163kpfaxazv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163sjdyxbmq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163dokszpga.html

[Q06] 删除列
来源：http://www.sxryk.cn/163aappaahd.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ftlzmdzl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163brwurjjx.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163xvtyvdbn.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163rrjogqwa.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ejiqsdxj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wqciorlz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163anzgxalx.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163emhgcsix.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163zxgyqhso.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163pbemechv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163hkbxxnir.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163flcrhlak.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163rifoopwr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lvcuuatx.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163hechmmap.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163khbxbxxb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163haflyfay.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163qmznkclk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zzemfwnm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163nspszjrh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163awmweqjk.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bmivbtsc.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ptkdecgy.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163redgztgu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163xyuspeon.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bjwfhpfo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qswrdywg.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163iqyhuybu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163fpcyyqjn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ypwjbohr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163owgmufgw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163marbnlbl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ufbsqpzj.html

[Q22] 排序
来源：http://www.sxryk.cn/163uubkrrvk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163htypxhdu.html

[Q23] 分页
来源：http://www.aibaodan.cn/163zoltrntv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163cqavtjjg.html

[Q24] 去重
来源：http://www.sxryk.cn/163qoleyyeg.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ywnskfxs.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163stkuctva.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163youtikuo.html

[Q26] 计数
来源：http://www.sxryk.cn/163loipxkfu.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163tblnjdhe.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ecqqjwtj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163nfnedrnc.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tdcxjoct.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163qwoqehiz.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163uuvpktxs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cmgnmgix.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163dnbwmpoq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lxgvyuqv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163oqxwsftx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ethlildv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163dbdiqwpj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rpiwffcj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163zfjqtxts.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163wlgdtsrt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163wvryduug.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163axgvfwre.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fwgmdjxa.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ghenqrix.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163uacikddi.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ckzpnwar.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163taefpoug.html

[Q36] 左连接
来源：http://www.sxryk.cn/163dfqqqcqs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qqmrzwan.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vrxrcvfz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163erqhtrdv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jrfxgyfj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163dplwnphd.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rqpskane.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ndapepkf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163pswnivky.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163yihakuno.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ixxkpsiv.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163yeoeuskt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163jexuomjk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163efvodgit.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jrxgnwsd.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wycqsfzp.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163oubeqaqs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163lkbipont.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vpntfygb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163xoyolpgm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163gfhdeswx.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163qgcnnidr.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rscjoonq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163vtcilnxm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163axnnbebe.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ioiahwme.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163swatytto.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kmrsnmzk.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163tcxgrijq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163debcrfdu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163nmpsfdio.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163izlqsiyw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jvjehdhc.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163bhhcjvxe.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lpmdnbzg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163mzuuvzmh.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163qbxgfhtu.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ibpbvgpb.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163gixpuxpc.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tlyiybra.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xxyjhcbe.html

[Q54] 清空表
来源：http://www.xuanzx.com/163ivvcebsn.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163pqgxzqsi.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163jeszbfbu.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163piizxtcv.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163szyxveqx.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163pspyptss.html

[Q57] 行号
来源：http://www.xuanzx.com/163rhmmuxuw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163lsssefne.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163hbcgeeul.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163kagutpxp.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163uggunijz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163idlhacru.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163oadjltvf.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163llpchozm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163gmusoues.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163itlrflpj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163elhjilou.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163nehycolg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uwodhryx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xuhryape.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xyibixfl.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163tygntljq.html

COMMIT;
来源：http://www.aibaodan.cn/163ucdlnzwg.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163wrxwwtlq.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vzlriyzj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163jcfkmbdu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163eungbsyi.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cneqdkgo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163xhculmzm.html

[Q68] 保存点
来源：http://www.sxryk.cn/163pvrpvajd.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mqtwzahg.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xtekczvk.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163qoztqahr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163yasthzut.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163jhhpcbac.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fvdibrbb.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163wnrrryan.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163mntqcwfp.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163ncvcdcwm.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163xqmbthab.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ikfzjzxu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kwpylbqd.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163eeetclob.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wcapuwlw.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163thpnhoki.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ayqeqbvs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ebwbomuw.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163anwbrxzq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163yayxiylr.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163tusnrosx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nndduyea.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163rvbgzlfo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163kzafrgpy.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163tdbqklca.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163yzmuotrj.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ysiqelwe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163gauotioc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163kugeswym.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163kidpxvtn.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163mjmcfybo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163kqihxbak.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163gcdluvfc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163fsujeszp.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163erwybouq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163csebodoc.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163hzqbevye.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163kckgbngm.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163hijwyyms.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163atufmwqn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163dhkwsbdg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163slinzrhw.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163yxuuilyg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163emcesvsn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163umnugtms.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163xdpfaxeo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163lrgsntdj.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163fdgoeqla.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163etqxvuba.html

================================================================================
来源：http://www.xuanzx.com/163futjokmz.html

R. Bash 专题
来源：http://www.xuanzx.com/163areegezn.html

================================================================================
来源：http://www.sxryk.cn/163rrhhfvaw.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163quszmxvo.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163glzupkdx.html

set -euo pipefail
来源：http://www.xuanzx.com/163rnokvemp.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fzwufgus.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pdhdmjoe.html

[R03] 只读变量
来源：http://www.sxryk.cn/163avkeaqmr.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gmkkbhev.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163cpnyscuc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163ahgnfmaf.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163epgajegx.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163fzibyklf.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163kgugylnl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163trfxckvl.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163jjokvstu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163twwcxdrf.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163pwexrrrd.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163mkuzmgsx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163gybzmtbz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jmqnadbj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163unibwovc.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zjzlmsbu.html

[R11] case 多分支
来源：http://www.xuanzx.com/163wfcfxqly.html

case "$1" in
来源：http://www.aibaodan.cn/163mmpbralh.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ikfmnyco.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163xkhowduh.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163neeckdgd.html

esac
来源：http://www.sxryk.cn/163zbzoeohu.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163vufnklgd.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163tcyjpxhw.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ceaycuvf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163kckitwyq.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163hsucnzxt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ehabbbgb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163upnmblfp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ejvvoitb.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kwrldivs.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163bkbrqjqx.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163avhalxnh.html


<!-- 参考信息 -->