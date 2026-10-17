外链999!wailian999！

C#:   Parallel.For
来源：http://www.aibaodan.cn/163elimtszu.html

================================================================================
来源：http://www.aibaodan.cn/163smhcswzn.html

P. 常用工具函数
来源：http://www.sxryk.cn/163azcwrfwf.html

================================================================================
来源：http://www.sxryk.cn/163ofjnkbzz.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163eorrmuaj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163hdwdobzm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163vkxydabt.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163yguddkmf.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xbkpmqpb.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lkjoapma.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163oskrawwt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163vbiopihe.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163rtfkjmgp.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163qdoqaxmp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163bpcsdqzi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163wlwvutwp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163jwrzwxdi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163pdkgdysx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163mgksgpya.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ranpoxmb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163qlsclckw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fgftfayh.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163mhlwvujk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163pgpqcaxg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163psdhxlfl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ttejrvip.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bldhljuz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zbjqdbqq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163uyqqswph.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ujyqqgxe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163iwidksja.html

[P04] 求长度
来源：http://www.aibaodan.cn/163yvrjcfcz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163xwwuuvpm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lehykfzw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qoijfbgo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ysumxgyu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163wfaknuxr.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qkwaaeiu.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163gxokkcub.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163mmiwmhet.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163fpclulvc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qtpvobmj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163lkhpungz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163lnlqxkud.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ofqyijdf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lixhucrd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163eriynwvp.html

Ruby: a == b
来源：http://www.xuanzx.com/163yosybtom.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163usopmjra.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163uuizoxnv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163prwmhvgm.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163sxsgrnrc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163jsqwoibx.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163dawnrpkx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bibggugk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163oqxsydol.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wtbmcuhk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163nstwndri.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163neepatdf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163yuvkqajd.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ozlaxahh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yxnerfxd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fyxxzivo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163polheinl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gokkahkv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163vewbmjed.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163vskeebvc.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xtykvvks.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tglpgile.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163bgbxpawa.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mrxxehnh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163joqjuujx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163vgsidsyc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163hfcadnog.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163wqskvsxy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cburwepv.html

================================================================================
来源：http://www.aibaodan.cn/163poieieyl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tsqtlxmp.html

================================================================================
来源：http://www.aibaodan.cn/163gztsycuh.html

[Q01] 创建表
来源：http://www.sxryk.cn/163mjouetjl.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163gmtaewtj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163cifvbfgq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163dyqgwoiu.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163dehpodcq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163ieivupvs.html

);
来源：http://www.aibaodan.cn/163vygutjqj.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163lhstvqhn.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163rkzzkapp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mxcfbjxg.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jqyzkhfg.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163yrcwwmyd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163vfamfiov.html

);
来源：http://www.aibaodan.cn/163taptkhyz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ggfcvkjo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163sqmhmstu.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zrslggbq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163tbblwdke.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163uzmlxzez.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163pvtfivon.html

[Q06] 删除列
来源：http://www.xuanzx.com/163nlerlnpv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ykzcmfar.html

[Q07] 删除表
来源：http://www.xuanzx.com/163mffqflje.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163cghkqiku.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163smnwaqrb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ibcjqrkk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163btvbvddn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ovougedk.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163riluykoe.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163hvsaodhe.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163uguzxzff.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hncmdvld.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163yjjaqgjv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zmfpndta.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kcsujkzv.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ranhpsbs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163yfbthalj.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163revkqezy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163tvsmzmjb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163gmvgkdiy.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163gbijxmap.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163yrbiugxo.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jxriyinb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163atzxnqgl.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jigihapc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163sdrovrjx.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vsdxfsln.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163afxvjqva.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hatmynyn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163neqolqvr.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163nfxhltqm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163nrdgbywu.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qsqczjke.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163iyogefld.html

[Q22] 排序
来源：http://www.sxryk.cn/163atkrpcef.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163etnprdgn.html

[Q23] 分页
来源：http://www.aibaodan.cn/163wldzbbir.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163rdacxiov.html

[Q24] 去重
来源：http://www.aibaodan.cn/163zwjeabzu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ljlwbqaj.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vhyibzzy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163osvoixve.html

[Q26] 计数
来源：http://www.xuanzx.com/163tpoihfle.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163uvxhanvl.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163icgkuate.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163hkhbyaoe.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163qqrhoxfb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163oqwsksxw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163bjwbtijh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163cymzgath.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jlhrxhss.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ktbfdksd.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163gmpjvwto.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163pwszckaf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163rpqqjznv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163klbsbyka.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163fubeumjn.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163vtqhlrcj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163hibdxfxy.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163prtrhigb.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bdnrgejh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163szyorijy.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163pnghqgrt.html

[Q35] 内连接
来源：http://www.sxryk.cn/163nsaxudbi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ysmdaduw.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163rofrnsbn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163fpfmguje.html

[Q37] 右连接
来源：http://www.xuanzx.com/163sbsnlhxc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163fgqpsisi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qreivqti.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163pkvjdgvk.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163mxtvyepg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163bkowvohz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163jipfcheh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163hlcxoaul.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zjqwmpdv.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163plgiaaed.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163gkioziei.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163bcvmjfjx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163oesdbddc.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163shlidpne.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ujdzyhoz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163vpstdzby.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163yrfbtjoh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163mfszdiuf.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163olgphcfc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lvwqblkh.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163khpcmwbb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qbunzonx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163axkvfwva.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163igwglkpv.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163nsfxldtf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163hyibwkia.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163pywgxqna.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163aiirqibo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163hjprzgtt.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163cyclnhgb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163shvxsyte.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163siqfqfvv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163jotlxnwa.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163vmowezpo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nchnepug.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xmhwgnjw.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163foazsvzm.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hvztuewx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ozerhasg.html

[Q54] 清空表
来源：http://www.xuanzx.com/163xjsvwxmv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163lsrskdwr.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ysikjwke.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rgdkmajg.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163eosxispc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vnxfsoqv.html

[Q57] 行号
来源：http://www.aibaodan.cn/163qdgbfiuu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ngjdvahh.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pzpjfodd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163byfzbejd.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163axjbptsw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163rbmnpule.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163nsfjcxra.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163lxicmorw.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xqsskrar.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163uuxhalsa.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jihupznk.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jxhqjrkj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nymfmpoq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163cwvjxjvj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wahwxoda.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163vryduhtf.html

COMMIT;
来源：http://www.aibaodan.cn/163jqgeemrl.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163lhngscfn.html

ROLLBACK;
来源：http://www.sxryk.cn/163meguetum.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gsaibptq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163pacxahfe.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163anscyzax.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163sxjdmagc.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vteloacz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163uvnfbaqv.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163jvznhzjz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163tqdtfylq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163kdxmegmz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xmffmony.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163agejhddm.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ukxboudo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163eeslxqdr.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ihpbpovx.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163gvxbwaht.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163eeexqokf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rbbiqqgy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ytvwchob.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163yeogmcrk.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ujgodajk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163tacgwpji.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163aysxeizd.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163hpxbgyig.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163hkoqqpfc.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163evalankv.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163npgduyyh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hjbhofmt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163iufmbuua.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vssgalkt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163pfbsolus.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163kvoxtnif.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163itkcetyw.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163pqxlbael.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163luqekscv.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163sfntcusm.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163ujjnqqor.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163cqvfwiht.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163opbkmfvd.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163eflgesge.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163thabcajs.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163dgmhbkap.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163wcawqcbv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163gyltuaji.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163spxmgnbb.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163pydthazq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163rdnigvcw.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163irzexwwv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163shjephkz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rgktbglh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jlsgcqdf.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jzdqsdih.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wkwquiad.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tjkvprtr.html

================================================================================
来源：http://www.aibaodan.cn/163gqxwxsim.html

R. Bash 专题
来源：http://www.sxryk.cn/163wunnrjqw.html

================================================================================
来源：http://www.sxryk.cn/163eildufwo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163euluzdob.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hgzujjdh.html

set -euo pipefail
来源：http://www.sxryk.cn/163vedrwljy.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163kvlzlafw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163gtncnuxk.html

[R03] 只读变量
来源：http://www.sxryk.cn/163nxnggfbw.html

readonly PI=3.14
来源：http://www.sxryk.cn/163pldbbche.html

[R04] 位置参数
来源：http://www.sxryk.cn/163oydhpmer.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163hnxmczem.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163xzxkmfpe.html

name="${1:-default}"
来源：http://www.xuanzx.com/163wwvjhaph.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163panghnvx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163qklslqsj.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163sqrjqzue.html


<!-- 参考信息 -->