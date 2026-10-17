外链999!wailian999！

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ufwuvlvk.html

================================================================================
来源：http://www.xuanzx.com/163kgpsqkex.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vnadcenm.html

================================================================================
来源：http://www.xuanzx.com/163axbobpro.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163leznxolo.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163pzrczeew.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jbpyiqvw.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163slshvray.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wrqvkhah.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163eqzlhtgr.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163tvfqdosp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163efeaikom.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vitupuzc.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163mkdnfozk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ekyfglqr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163hngbyllb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ahjflzuy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kzlowgrq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163njersgsw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163rtkxyenf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163krlwhotp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163vviljhtv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163fpkuijhx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163csdfrewl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rcrryfpv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xkafmlic.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jjwpmhly.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bjvdskna.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163khtcgmfg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163viyyusqo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163okixuyyd.html

[P04] 求长度
来源：http://www.xuanzx.com/163rqxcpixj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163haaeqgjk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lknmbaex.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gipadiod.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nwmmekoj.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ubinukcp.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163sazuyemi.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163rbgcqied.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163alzhnubr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163uqeoxqoh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163jigveyki.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163wnnnxrpm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163kyuyxgxk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dteyoden.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163swzpzitu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qwggveuf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163cwrdeoep.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163oygbgsex.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jkwkfyav.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163qcxdgtrv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rbajwwaa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xumyxhqs.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163svppjpbd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wifdrklq.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163akkmtqbe.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163msfacigu.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163dxxrysye.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163dcahivcm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rdyfnhip.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163yrwpxldt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xzzqwgmh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163roucoeuu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163oxfexpxg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163rhpvbntd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fzegkzfm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163limdfqbo.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163pgsykmff.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163blraykwv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163azmmlkhe.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163nhgoyxby.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163uaudwewy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163etyjpswe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163kccjxoex.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163uthgaosy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163vbvpmiwb.html

================================================================================
来源：http://www.sxryk.cn/163fwkqnlvy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163yisfbeqe.html

================================================================================
来源：http://www.xuanzx.com/163scgqdsmn.html

[Q01] 创建表
来源：http://www.sxryk.cn/163xisqaltq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163qmbewiek.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163usznwnna.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ccotfkth.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wzffvjzs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wezrqwat.html

);
来源：http://www.aibaodan.cn/163goaqprsl.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163kkkjmywl.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163scvklaql.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zdewvuqg.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163vcnpjbgg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wfdehrpq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qbmhcgub.html

);
来源：http://www.aibaodan.cn/163kxhtoygo.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163puejzrlt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163rlzmefls.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163quorlaqd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163lninlayp.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163hbmhtalr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163uqrbgxew.html

[Q06] 删除列
来源：http://www.sxryk.cn/163pqmpbuib.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rehnpnoq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163rizbcwfi.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wujketow.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163gxgpdxcy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wzsqnewc.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163enigauin.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163sepgxdos.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163aexassls.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163pvrmtufv.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163wpyxlwlr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zvmkipqa.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ovgbtxzu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163djuikwur.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163wdmddbmm.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163cipamyia.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163xnmnptoc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163jsigjmqv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163oidkknfa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xvckimae.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163kxnlnali.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ccrdleou.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163trrxhuzn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163slijvnbq.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163hijojvso.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163eezudcfg.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163bdrecolc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163brksfagy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163txcrcfxh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ylitpkcn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163itbrxygp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163poywmdes.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xzdpdodw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163sqmrxfrt.html

[Q22] 排序
来源：http://www.aibaodan.cn/163dvtmfxji.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163xgynceaf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ytjbfdrc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163wfaxhvxx.html

[Q24] 去重
来源：http://www.aibaodan.cn/163axrkglyb.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163rsnjnlbh.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163djovntxi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163iyfonvet.html

[Q26] 计数
来源：http://www.sxryk.cn/163zdtnetpn.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rebbgnbi.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163thyuwcpu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wciscsjw.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163xnouinhj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163fzrzhrvk.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163oetsrydk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163bxqtnmqs.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qeogbinv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gzvoicli.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fkpnyryk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163skbmpqia.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163kcpjhgul.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kghwlwig.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163dxuwwrhx.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vqchkgzq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163xpqclslz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163pqkxboxs.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wsmqjbgy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163qtignepv.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163newowrnd.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kfyrvgsw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163moffpulx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mnexiysl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163sgmpqngu.html

[Q37] 右连接
来源：http://www.sxryk.cn/163opnxscue.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163yemvumfj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163datenlze.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163nfpfzafn.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163ycdaysho.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163icemiski.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163zmkelsjo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163yxobsiro.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163cypyjthi.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163kmqvlhzj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ysqxjocv.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163czwcemxy.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163pklqxhnb.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163gycoqevs.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163dheodvab.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163framfepw.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163kuzpbywr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163llefnibq.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163jzrqtmhj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163gmbjhofo.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ybxtdrtv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hhodcrtl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163uuqykxgm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tlvrmyhk.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163jedbglie.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163snthkohu.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163keohlmph.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163peoiypau.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163petguxfi.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163odyvipdf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163iwjchocu.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163riomjgim.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163fbdsfluo.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163upwubhwx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kqppqaqn.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ocarnfha.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163vmdcpupk.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163gplhstwj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163hpfsthzw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163mvlzzatx.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ulljvizn.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xdmnfsgz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ijpldttd.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ifgmfoej.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ysyieiro.html

[Q57] 行号
来源：http://www.aibaodan.cn/163ksujpfdw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163vivpmchw.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163uwezzwvj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163jrtgcoob.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163dszaolhm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163dnvsuklu.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163pimilbjk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163hzomfyhk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163pccflgvy.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163zyhsdomp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163javevamz.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jysosmtp.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163fviecpmw.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163dbejxdar.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163nmqsqlct.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163dmwngunf.html

COMMIT;
来源：http://www.sxryk.cn/163gvwtzinu.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bkcpfxsr.html

ROLLBACK;
来源：http://www.xuanzx.com/163xjcxevvi.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163gudzqmum.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163baidbqds.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163jkldvizd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163sryctktf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163oqnvelaw.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lzpmbhys.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163zesfcfsc.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163achikecw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ufatmkel.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163codbfpgf.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163alnvzdop.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163kyfcocoq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163wijiucuk.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163uckxnynt.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163lxfegxku.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163vlixtoqk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rznjqikg.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163vukleexa.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ykaxpxok.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163txsdzfdt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163jdtblpoc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163gvxbyvuv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163lknxihrk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ibhslyqf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163uvkmxwwm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163iubjwbid.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163jyvshykt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163ghlpauzc.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163tfqhiikn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zlkuhpgs.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163vovxlmmm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jwapyjic.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xiuchane.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wgydkvyc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163wdbacpgf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163qutpdsdu.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163hhcjrqjc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ahtkoell.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163agyercem.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163lrzwfotl.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163kambijia.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ucimugxr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163btcayflj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xmirfnqd.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163gbphhhez.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ghgalmfe.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163xrlnxhqg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163avwevxqa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163qntirzim.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163verdlqcf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163uifatdnw.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163hzbzuswl.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ssjcbens.html

================================================================================
来源：http://www.xuanzx.com/163nznezyzt.html

R. Bash 专题
来源：http://www.aibaodan.cn/163qhhhjykg.html

================================================================================
来源：http://www.sxryk.cn/163dbgfnzmq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163udmbbhzc.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163quumgvss.html

set -euo pipefail
来源：http://www.xuanzx.com/163gojcfwcm.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163jhtpeeyv.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163aopsczvp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163gqualjar.html

readonly PI=3.14
来源：http://www.xuanzx.com/163cfyprlik.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163irrwifgu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163bwwqnoli.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163rciwrclv.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163mcjeyhaa.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163yvdbwynf.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163suahqwti.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163rilkozxr.html


<!-- 参考信息 -->