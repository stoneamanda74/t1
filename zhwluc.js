外链999!wailian999！

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163zrixekmf.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ceittgue.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163iwiaqgcr.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tekeuomr.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kidzowof.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163lhogxrfq.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qlzzldpd.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163lcvwfwuy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ddhkhzvo.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163mkkdqrfq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lcrrqzhc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gjriqqac.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163cwoeqrkm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163zsplpzsk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ztpgvwtq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163itdkapui.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lljkxivx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163giuospko.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ykrthxfg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ecxbljof.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163atfxlgro.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163aqxzycze.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ifrginwc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qcwpioua.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163shiqxjci.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163fdimkumj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163quhavvss.html

[P04] 求长度
来源：http://www.aibaodan.cn/163dbxfvyjs.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163iowavkwn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yvgbljgx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163meufjtgy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ixbijqis.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163cefulpas.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163faktjuxd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ybmlnlle.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163nhfwjrbf.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163enhoaxto.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xnuvride.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ovizojeq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163kykpscwc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qtrcqsdg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163bhhtaqda.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jfknchww.html

Ruby: a == b
来源：http://www.sxryk.cn/163sgiqezzt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163npgshnny.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163vlhrtdsq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163npffmzda.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163bjkechqc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163xcagkyio.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gvsxcehc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ecbeacvw.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163mhjurutq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jqxejjha.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163daqphuod.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163izuplopv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ahozdkib.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163brzcntrl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pgtkgriq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oftrccif.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163npjhfgvc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163leqmrxaf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rlwqjnsb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163tayuvrcf.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163yoipvzbo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163gzbehoje.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163dhjkuyka.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163nlapslaw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163znytqeqy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pyithxmt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pzanfjtw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163hbfaewto.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hnzngzmq.html

================================================================================
来源：http://www.sxryk.cn/163hvsgkqvt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163xteqqjhr.html

================================================================================
来源：http://www.sxryk.cn/163oydmbick.html

[Q01] 创建表
来源：http://www.sxryk.cn/163uewvfxbf.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kfoercaf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jkyqqgrq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zxqcjtak.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163kxhdcvug.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163rnostjww.html

);
来源：http://www.xuanzx.com/163otmymegd.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163mbdgkhuo.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163kqjiwwpo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fombvafb.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163tfcyqsur.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ewyyomow.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163pagthneq.html

);
来源：http://www.xuanzx.com/163esmworri.html

[Q03] 增加列
来源：http://www.xuanzx.com/163gshpaveq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163curyluxg.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163csyykxgc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163xbjyvbiu.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163fqxgukqm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163rpvaqvka.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jkqlnivo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qkcusoiy.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pmjkhnnt.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kgadltlo.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163pugvpfhj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ewuajypl.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163usrpnfgd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163sgkvxhkh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bontmnfc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qrzgyush.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163hrpiqsfj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163cjqqqorf.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jixlnofw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pantbids.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rlibakwi.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163tmtulidi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163bfyhzugn.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163zghmfhnb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163naybvssj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163rydrwpch.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163pnjmcrxo.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163iztrgnsw.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jvuqkgwk.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163rkarvpza.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nmmdhnrh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163nmypdgqy.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163lwzrcgbf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163qkgdfdie.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fgtpvttd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163pohnczzu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163egjjcpaa.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163seojmmep.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qfrhzwsd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qmhphaff.html

[Q22] 排序
来源：http://www.sxryk.cn/163khokfslj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163whcsevzz.html

[Q23] 分页
来源：http://www.sxryk.cn/163sxcmyiyk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xmywwbod.html

[Q24] 去重
来源：http://www.aibaodan.cn/163vwvzlxxd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163acqwsput.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163enyongtb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163yluszvqz.html

[Q26] 计数
来源：http://www.sxryk.cn/163elfqpgos.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163wysldxqq.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163eyxalrmd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163pzczkuxo.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163icjbmfbs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163pfspcnzp.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qmezgwma.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163nahtpcar.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163tuttqugj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163griohkax.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163jjscbyup.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163zuvjojnz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163bslzapzd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163oqlcibff.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ognieuox.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ebsejfbg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163uefvegfr.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163uimjfypr.html

SELECT * FROM (
来源：http://www.sxryk.cn/163zkyxbhxf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163vbwmdbes.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vvwudkpf.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ulpsapnw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lxjuepgf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mcmviicb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rtzwwrvp.html

[Q37] 右连接
来源：http://www.sxryk.cn/163dqbakqwf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ewvejdds.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ppwyprab.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163etzbliua.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ykbrrjsb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163zfctkwvw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ljwhgnye.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ipaptfbw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163laqpzfjq.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bpklbier.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163mdrsgdyy.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163riwvwrty.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163wggczgej.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163yowbxwpj.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ystrpfvr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tfyikxys.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163thtankux.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163sifclkiy.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163iztrpyyp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163dgrwzbpq.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163zdaehzhc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jkbcioww.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163buxeqpnz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163csisgqxw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163fuagfzwa.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ncrelzmr.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xdfavnum.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jabkergm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163dvqjnbgv.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163iqdvxbqg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163uqeficee.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163uvvagnsq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163dhmtwfvu.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163iaiiowwc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163mceqsqtv.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163dwhfjxuf.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163zednztau.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163tgkedyqj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gndjbdpg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wcirhhfx.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163lsdhtvao.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163fhspofhj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163qrnsgyur.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163jqrkehhd.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163gykxetus.html

[Q57] 行号
来源：http://www.xuanzx.com/163zvergriz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163svgphvmg.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163jtntgvdd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163rghmgusy.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163lwhpcfcm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wenrlohp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ixxbeqpl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rwhzrwwm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163iptntsxw.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163mmicfozi.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163muvhiajo.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163szhisqon.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tpozzron.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163tnaxylel.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xnjjghnk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163nkxijppr.html

COMMIT;
来源：http://www.xuanzx.com/163lkeurios.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rhbkzuca.html

ROLLBACK;
来源：http://www.xuanzx.com/163jbkucqgg.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163dfjjroso.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ejhlkbai.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dmezopwx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163bxguhhoi.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163oxxejfnv.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163apfztyzw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163uiqozqgn.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163tgkevafy.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163zlajfjjp.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mfxcryww.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163oacbxkcv.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163bulktzyc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163qtgbxfjy.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163qxtmqtef.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163diaufxhz.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tjlkdfhp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163pklkppjl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163yngbxfbj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163bsayhpgs.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163geizxvvs.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163bbtbrsdi.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163yrxcepph.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163qcodouqm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ikjakcvn.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163slkalosu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163fvxnszdh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ncuemnse.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163nmqwcyok.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163erfagvpx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163rnzrswdd.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163gcekuxiz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163llyvpcmx.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163naxfmwnw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163ajfdfuve.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163lcssnzym.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163unlwoesm.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163agonuewx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163rhaushdf.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ohikwfsr.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163fdalkhos.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163tbhvoesz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163mvndvtrc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163svckutlp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163qravqkip.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ruumpqvt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163vwdnthtb.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163bdjwuuhe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163kyjmmuxn.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163puyifyxq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163nfdgbtvr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163ehrprjge.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163pkkgjmhw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163oejhtmzl.html

================================================================================
来源：http://www.sxryk.cn/163wnopytye.html

R. Bash 专题
来源：http://www.aibaodan.cn/163stqxqrkf.html

================================================================================
来源：http://www.aibaodan.cn/163jqdjlbkx.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163chxkganv.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163duhvzuhg.html

set -euo pipefail
来源：http://www.sxryk.cn/163roffsnbp.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163pazruvzr.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163vcyvqyih.html

[R03] 只读变量
来源：http://www.xuanzx.com/163swcpxqkk.html

readonly PI=3.14
来源：http://www.sxryk.cn/163vgapcdyl.html

[R04] 位置参数
来源：http://www.xuanzx.com/163rvpakxnk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vgvqrlxz.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163bazppidq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qxiqdnns.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163hyxmgsze.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163fqirxpbe.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163pyupqxpg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163acsskqoy.html

[R08] 数值比较
来源：http://www.sxryk.cn/163onbxlxjw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ioozbpwt.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163uuvmibrh.html


<!-- 参考信息 -->