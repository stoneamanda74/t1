外链999!wailian999！

C#:   Parallel.For
来源：http://www.xuanzx.com/163lwdjjhks.html

================================================================================
来源：http://www.aibaodan.cn/163kxbqpkgu.html

P. 常用工具函数
来源：http://www.sxryk.cn/163djldlbsm.html

================================================================================
来源：http://www.sxryk.cn/163qhqslosf.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163fmuobbml.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163iqeqsxep.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163teqwvoys.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bcllirpi.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163knrkgxne.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163fqwhbtdz.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163sjnftrcy.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163jeryfbsb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163lhoqkxab.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163jqpagrdn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163gszrbsqm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163sgduuphi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163olvtdjwu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163lhrwirti.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pgwmcqrh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163vqrscfng.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163encpxjas.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163mcsljawk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ipnvafvo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163uznccskv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163icxwjbce.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tehqjnuw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lgsdpcrh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163rtrpcvnh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163pfknjcmz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mwuygwhz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163nybwmlsy.html

[P04] 求长度
来源：http://www.sxryk.cn/163chzefhyq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163grcyiung.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163yscxqxqr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lkhxskfn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yfuqxleo.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ytggeypb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163lnlnxshc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nirjskhq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163iptxmamy.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163gketzcox.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163fyyzannm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163gaucwqqx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163efpjahek.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163sbvijwzn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163srftjsje.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163exndraja.html

Ruby: a == b
来源：http://www.xuanzx.com/163qakzrvdo.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ixnvngga.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jmsjfbal.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ffktvcyl.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ptnwuzlz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163nefpdabu.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rpiycbsw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163iwoaukoh.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163gjpptnip.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wppbpvif.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ozqsqtpz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163sqjtejzw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163epjgonoe.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163xujfuqwh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rxrzbggp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nkrukean.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163fsiagesb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163kiqrlxjt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wksmucfp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vtigxjkk.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xbavhqti.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tnvxdkhc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163gbebbfsk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163tatzzbdn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163zosgwkzi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163kaicbxyc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163flwyakwh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ocvwlctk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163tndnjftt.html

================================================================================
来源：http://www.aibaodan.cn/163smphaaus.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163umpkfrvh.html

================================================================================
来源：http://www.sxryk.cn/163caksegox.html

[Q01] 创建表
来源：http://www.sxryk.cn/163dwkrkzkw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163tmwewhgl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163elajucke.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163lbsqmmru.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163pqlkucrc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ufovmkon.html

);
来源：http://www.sxryk.cn/163lndsdnwu.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163lzcdzwok.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zmyygpgo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qapnqdfc.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163boeswgiy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163knuaojtt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wogvuhtk.html

);
来源：http://www.xuanzx.com/163irdtdrws.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163shlvlyal.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163cwqmisha.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163tmefzjje.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163whgpgnap.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163clnafpws.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163uhzibwtt.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ccwmaodf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ivkubkst.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pocecpwa.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163cmfrrqfs.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fkwsstup.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tnjmucta.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jxfjvlmb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wzpdarun.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ojsnualb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163msnmheqz.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163mynbgnff.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163akwqutls.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163nmzwompv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163pamoiyev.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163gjzokogn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163xkvbrcvh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163uhghneld.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163mjjopckn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163puiwuzdr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163typufhzk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nphikgxa.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163tepephjr.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163dlnanmzm.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163mfogkeas.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163gzjxobjh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163rbzxohvs.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163djsumwni.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ddnrehmh.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163txnimowd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163kaoztnug.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163tbrtuhlo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163mkdscfyo.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163enmoyvsw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163kpeuiafb.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zuzoktml.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163mukitizl.html

[Q23] 分页
来源：http://www.xuanzx.com/163cdctbnhi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lgrrbgel.html

[Q24] 去重
来源：http://www.aibaodan.cn/163shbgqnjo.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163szdinlzw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163fzkosbvl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163xpdjgxmb.html

[Q26] 计数
来源：http://www.xuanzx.com/163wsipwaxi.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163cxpbtxzn.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163pcebsclz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163fmjrrxkx.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163liipsyxd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ekdxewbu.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pnhhmxbh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163tdnoxaba.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163soxvhsmu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uilycedq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163uvvbjsfb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bxqnycut.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163owtrdmaw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pjrhllzv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xttrtpos.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163eaqlomyi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163aglsxbws.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ufszkkqm.html

SELECT * FROM (
来源：http://www.xuanzx.com/163owdpzjpd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163yuxmtzte.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163xaqigqtd.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163lvvcphlg.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cbrmbbbo.html

[Q36] 左连接
来源：http://www.xuanzx.com/163tutqrujl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xxlwajqj.html

[Q37] 右连接
来源：http://www.xuanzx.com/163javftgho.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163xxplhxaq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163geviyawl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wmjgycar.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qwgubzwp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163pioxpdxh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163lktnbytc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163xdoxetpw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163daesycrk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163jroxyiti.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163sxzquyxs.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163xyazdtkv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163vbwrrnfq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163onkivrht.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vuzweefs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jxmivcyg.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ahxtgzso.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163dubnnqbg.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qiggdzur.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163nqsjovey.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163crvfxtsi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ldvnlspo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ehgeagcd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kdbovelu.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163drjpczoq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wiqiepch.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ulsrkqka.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ecsllrrk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ecjezobv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163punurcsx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163bswgobln.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163paqoagzr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ukkdkuix.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163helkalrl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163hikzqkwp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163yxniuvup.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163jiypewng.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163swrzyqul.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163dmcvekia.html

[Q54] 清空表
来源：http://www.sxryk.cn/163kjhqzzhq.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rajyottu.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163jkopvauw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163majtxqbm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163kiaguobk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163zsmppgtm.html

[Q57] 行号
来源：http://www.xuanzx.com/163gmzxowvy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rwkvaqqs.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163gwqniqlj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mspljqlr.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163qciduell.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xakzjmqy.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163uvaklkoj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163eoheeirc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mfehqcqk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jplzuqxj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163woutalyq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163aezpcler.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163djwvxrhb.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163dgzqsubn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163nserfvgn.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163okvicood.html

COMMIT;
来源：http://www.aibaodan.cn/163omtdnkmw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ebqknasx.html

ROLLBACK;
来源：http://www.aibaodan.cn/163yicqkhuu.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163bxypaczp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bnvcxjns.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cjrtvpxk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ledyolzi.html

[Q68] 保存点
来源：http://www.xuanzx.com/163gxzgoxhp.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163jdaiqruo.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163qtnkoimo.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163jyhhlgmf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163xvrdjmgv.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bgyjfjsb.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163orkucswe.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bfeswkzu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163uvwmhkxu.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163zbskkjdl.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163lvwfglbk.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163iqjkimwx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163daduwcot.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163cjxfnfvt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ckbujiuw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163agmlpxfz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163djlcrhin.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163frwpdart.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163pdhmzbni.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163vcbczaxe.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jwbatyjj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163fawispsf.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163pljwprze.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163cqpobuwd.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163kxoqamrw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jueonxqt.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163gmziffxl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ciyuwyvn.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ezvafibv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163kuzjjpeo.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163gdcssnus.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163efvawlqq.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163nyoqpkqx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163elvvkyeq.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163umsyrpne.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163qrydztme.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ueqgtkcn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163mscbxpoy.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163mpegkmho.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163qnrqohnx.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mhqgxsjy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163mwelrylf.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rezpknci.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163xzyzcjbj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163wxkmaiea.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163uyxmkyiz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163pahvavxx.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163pszkocvu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163hrlkruyy.html

================================================================================
来源：http://www.aibaodan.cn/163bbyhmove.html

R. Bash 专题
来源：http://www.xuanzx.com/163dabetezg.html

================================================================================
来源：http://www.aibaodan.cn/163uzhqfsjg.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tuwyftdb.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163zqahmirs.html

set -euo pipefail
来源：http://www.xuanzx.com/163rfdcgtet.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ymxprvhi.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163mstxagxq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163uqvybxgz.html

readonly PI=3.14
来源：http://www.sxryk.cn/163golwpksg.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hrppbgkh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163dqfuzwak.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163hndhyarq.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ndpdpvip.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163fnzeiweg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163rzqhptkc.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163hhvusaik.html


<!-- 参考信息 -->