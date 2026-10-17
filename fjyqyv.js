外链999!wailian999！

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163qtbgcvzb.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vpseyvhb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163fmcipmjc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163umkjshth.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wkfuwomc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163xtasbnml.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fmekskfp.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163dbffbwvl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163xirgqtvl.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163knxozsna.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163evqitxps.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qfaodgro.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163csrawhoc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163hmrdxqpx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ptqucnpc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163iiqbhdfb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163iqyfzosn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xrfrylmk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163himjepef.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ioessozu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163papwywjj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yrqdzzcj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163sawkggei.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163uswaqjpp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163sxrzfwnq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jqajnjrt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163nnhwndtc.html

[P04] 求长度
来源：http://www.xuanzx.com/163xqzmgkkj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163kdtcqmkn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rhsjeizo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sanzprsb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mzsvtred.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vzehfivg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163cxrmueig.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163rbvpqvub.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163dpipskkx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mbzonuou.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163yyjydbdq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163eyttqryi.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163eqnuybsl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dmdzvwvl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163lvwatrdg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163bqjzgdkh.html

Ruby: a == b
来源：http://www.sxryk.cn/163fafowuqx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163mohihmwb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wvnlcabu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163spobzedu.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163envmtfid.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163eyrtlhfn.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163uiidspfy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ykfwfuuu.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163mtxhsjvc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ijesqzco.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163hlxtjgzx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163kxovebxk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jmotnitn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163byeihtdy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fuhxbutb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163stmwcilw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163nmjfzfpj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uhdkolbf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163uyzkoeqp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rxagrofe.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163whprfjop.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163fqukasyn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163iejxczvc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163hmvwofjn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163xrltzlte.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163gvuafave.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163coofdgxz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163wrgvkztk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163pyhbpkji.html

================================================================================
来源：http://www.xuanzx.com/163cgejelrt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163svhqkflb.html

================================================================================
来源：http://www.xuanzx.com/163aiyclbrc.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163xpwkvhek.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163lhjqhyae.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163eueltwdx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ejkugqam.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xfynrono.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163srzhhrbp.html

);
来源：http://www.xuanzx.com/163zugevoyp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163evuhbqvn.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163doqasjse.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qsnkasyi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163diaadfxx.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163klsmsdzs.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163sgebtqri.html

);
来源：http://www.aibaodan.cn/163jwzwdttr.html

[Q03] 增加列
来源：http://www.xuanzx.com/163tkblbyrh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163psanrsys.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163epsmqxqg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163gacnxbch.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hftcdcrg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163guqtgaqx.html

[Q06] 删除列
来源：http://www.sxryk.cn/163dwynoxjs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163byhxpyxf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163zswbqgql.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ewahswjj.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163uangwtog.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163cufjltwx.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163mhajqqlo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163vxvtbiap.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163iweltvaj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163kdbkinio.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163pvbosgmv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163nhomfknj.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rfenyvka.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163xmtgfhvm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163byjdcnha.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xjxmygkn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163fxktppts.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163zetuaava.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163joxhagnz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163spgernin.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163gqrzhqdg.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163syfwskrb.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vtykuhci.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163takaahba.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163scjchenj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ycosyiue.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163aakhwjbr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163qignzfci.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wuqtcnfz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163aywjfkye.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163cqojoqyu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163svvalwbc.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163tlvsopce.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163kiipsyjr.html

[Q22] 排序
来源：http://www.sxryk.cn/163kjgnezjk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xpiimxac.html

[Q23] 分页
来源：http://www.xuanzx.com/163wtyondxv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163cgkobyjg.html

[Q24] 去重
来源：http://www.sxryk.cn/163hyqbedpc.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163cpbvirzt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163zwekyrye.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163coeqvqto.html

[Q26] 计数
来源：http://www.sxryk.cn/163dgojqvlo.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163vekmvlwe.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zavylzpf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163gxixxeri.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mqigeewq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163rkjtispe.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bhadsymd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ltbvxnjr.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163inuxssci.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vvkomcbm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163qohigqpq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163xzskrksp.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163efuqvedp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ayvneore.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wafghudx.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163hlhvallk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163msitspkd.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163olpdtagy.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ybgvxtbb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163oijvykli.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163zaipnotc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jnfdpkqe.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163oocntced.html

[Q36] 左连接
来源：http://www.xuanzx.com/163acukplwv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163hpqixkcz.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163lfhnsaaw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zfsadrmp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163prtgyokr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163pmlprcfm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163unibiqll.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163kyfwutin.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163tupjfiwi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ngflrard.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163iogkmqrt.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163sisldlig.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xhymbaqi.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ksrpcozp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ovpchrou.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163dxkjtzac.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ptshbeqm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lgqhalsk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rcgdufqy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163kokpxmhs.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163tehysmvq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163kkbhxekh.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163cytwfibv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fuvlxrlq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163phaqcjjw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vgarpwgm.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163hfekuzpd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163aslmnrvn.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163djeivhbr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tuewlbak.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tghbpzcx.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163bfynaipw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163faxqtqkt.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163xtxpbhof.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163behnvmny.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163clxbmtwy.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163xwsvzltg.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163zhtzuflc.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163wkcrffap.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163lbsmfucn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mmxdslst.html

[Q54] 清空表
来源：http://www.sxryk.cn/163gtzywdfi.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163hvkujigr.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163hlitwuje.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163hsqpwvsq.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163dvbwigfo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163dlnqsjyb.html

[Q57] 行号
来源：http://www.sxryk.cn/163qbqrbjuf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163kywljact.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163frvzfvhk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163vxueofns.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163pgckwxks.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163oismxhtx.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ukxtxfyn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ojlhcjth.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163vltkopdp.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ejjkolbm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163bjuitqzj.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163gujionvz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163fkdldgjw.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163wracccys.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ikcksafl.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163eheljcco.html

COMMIT;
来源：http://www.aibaodan.cn/163irqsuknq.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wlydpuct.html

ROLLBACK;
来源：http://www.sxryk.cn/163xndsurlc.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ggwhwotk.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163yxrbcgal.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163jqvukpac.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ljlwqwgk.html

[Q68] 保存点
来源：http://www.xuanzx.com/163rixpouzf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163amtrggeh.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163vunuxapj.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163hurqutge.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163htzqjnzt.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163iyambnzp.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163axczxhms.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163twucwigh.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163wmwhruwz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163iyxlgfzn.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163flmllblc.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163azkkqbxi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163itpzsssl.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163aoukvaum.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163xegirzof.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163etezypss.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163esorvefh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ntljzejv.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163kluctvrv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163xqtnnvnd.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163rhulfitp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jwgdwqbq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163exihrvtq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163lrbgkvil.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163wuydiunb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163llellxif.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163nqqjkfua.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qdddphvy.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163eembzgct.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163immjterh.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163awkbtpye.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163acnrecma.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163njqmwjnf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163dtitvtzi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163shjqjnwi.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163fyskzsjq.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163xfsjcuxa.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163rujucjtb.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ugzibgcr.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jizajftn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163oynbqagy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163jyjzxdhg.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163brizocxv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163vtihhfhc.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163pexwxloc.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163trluipql.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163txsugbqu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wklfmydb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163snninvxx.html

================================================================================
来源：http://www.sxryk.cn/163mdisjaqm.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ttdzcfju.html

================================================================================
来源：http://www.xuanzx.com/163labnevrl.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163isgponht.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163vdugjcjc.html

set -euo pipefail
来源：http://www.xuanzx.com/163kdglkhlg.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163lylvsvsm.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163xbibelwh.html

[R03] 只读变量
来源：http://www.xuanzx.com/163kcjsgnis.html

readonly PI=3.14
来源：http://www.sxryk.cn/163yfnjiqye.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163hsfyyseb.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rnjxxqow.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163xghelylm.html

name="${1:-default}"
来源：http://www.sxryk.cn/163sztdikox.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163kckfogcy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ptspxrtd.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163glcuzimq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mvxkwspe.html

[R08] 数值比较
来源：http://www.sxryk.cn/163kkkvymqa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163gzeiilrm.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163kvwwczxx.html


<!-- 参考信息 -->