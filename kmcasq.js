外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163kcmthlyn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163gmcumecm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pwdsnahg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163qcrcsgvf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xdhyzfld.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ninjnmzf.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xkiwcvju.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163wqlxraim.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163hjicyztw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fxqwvxkp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bxzjecbx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hjszwhbr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ztqjkouh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163qoponiws.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163vvbitvwk.html

[P04] 求长度
来源：http://www.sxryk.cn/163giwnaoyx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163wkapmgvo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sqayykgb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ppyenoyc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xqxrrjwj.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163uqtwtnwi.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163pcyzlqei.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lmztzlba.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163vdqnolao.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ziggbclq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163dwolajpv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163eavwwfsk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163eyeqwocx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fewtxngi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163npungidi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163aytqeqlt.html

Ruby: a == b
来源：http://www.sxryk.cn/163pkqqhqvg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163rslsarjg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ymtolulf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163hddccqay.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163aiuaydsl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163hxnkbutd.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163svcqptih.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163oosbgbjh.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ekecuhvt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wgfeitrn.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pcwzyuyz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163idrhvjoe.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163xrwrugrz.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163npkgscpl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163evojpnxz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kretlyuy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mfzjjnel.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163pynuiakx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ukgbjrtm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163irlnyscq.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163cgrffbpk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163tjearzhp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163pmyauiwg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163iglgbdqd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ndlmrxdb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163wlubztaf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163inhctsym.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163fquaumhj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hqyyjyrk.html

================================================================================
来源：http://www.xuanzx.com/163nzqaovmz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qmcvgmtz.html

================================================================================
来源：http://www.xuanzx.com/163jlyyjubx.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kswuyzkr.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ghbixgeh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163iugosvbw.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ldbwuvch.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163oqbtkxwq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163tqjmwusa.html

);
来源：http://www.aibaodan.cn/163ihycfybo.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163taqkufyn.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163sjlxgjbu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163fhgerbyh.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zmtrriqs.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163plmqchnb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163sqhhmawb.html

);
来源：http://www.aibaodan.cn/163sqydzlnz.html

[Q03] 增加列
来源：http://www.xuanzx.com/163akjldqmk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163tnkbvqzf.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163nfwftqvv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163hwrnlidj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163jnaxljgk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163xhycdqop.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163aektdhvb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ooithzuo.html

[Q07] 删除表
来源：http://www.xuanzx.com/163idikquat.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163elgypcfv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163vpkgttvg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mrlosrve.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163cbjvornl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ylgdnlxm.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mnqvanxw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163cvcitgib.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zloohshi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163xvlprwkv.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163xpqyvmee.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jxyrwvve.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163htnwclbq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163cdmltfpk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gsrldhzc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ktdloxju.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163yadrgzyw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zncrtbzq.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163xbakhywi.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163uudpihbi.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163qqqhkzoz.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163cazhhets.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163fmkwwmau.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ntgklkos.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163btqyjqfw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163pqmtswup.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163rtfncwef.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163jwmrdqdj.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163mppaaypr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163uydsftub.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163fvrmivfk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163giblfbib.html

[Q22] 排序
来源：http://www.xuanzx.com/163peuprltu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163oafzipdc.html

[Q23] 分页
来源：http://www.xuanzx.com/163hhaxbgyf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qvjivxxw.html

[Q24] 去重
来源：http://www.aibaodan.cn/163khkrzjax.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163rzywjhxo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163vyvwkdrx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163doihlmaf.html

[Q26] 计数
来源：http://www.aibaodan.cn/163veeevcej.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163lqbgkndt.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163fruountg.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163tvpldpde.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163zfwquooy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163khzjlole.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163dulolwvg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163smaafgfh.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163oaejcdjb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ewbzfbur.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163npooqgmx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163vgrzftlj.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ckldrlwf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163svnqykwu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163kozarbii.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163emmgzwle.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qjxuxsdn.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163pbtjtnte.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bgotyvjc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163mnytvgum.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163lgykbssc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rmxdilgk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ehkzwtfy.html

[Q36] 左连接
来源：http://www.xuanzx.com/163uxjltcag.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163triserlw.html

[Q37] 右连接
来源：http://www.xuanzx.com/163mtsckdwr.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163muhodssw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163bjcznqes.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163miofgmfl.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163eqaqmhyu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tacxiyqj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xqzkxpxn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163lztvvofx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163jzlmkngk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ybolrqyj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ulbbvdza.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163itqdwjnm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163cwncitfm.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ynqzuaov.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163nulogbem.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163yignwqze.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ciyeghbx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gpdbcqmr.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163huvqnqkj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ucnfqckv.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163esddneru.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163whlccbpu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163xxxwzdip.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163umwmphvg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163rogzwios.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vkmcywjs.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ueimmzyc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163xikgzlxh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163auuwyejz.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hxaukvsy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163wzcxnoav.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163okbxxmpw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163euzrukqq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163utyqsbak.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163durewgsz.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163fgdoubjj.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ahhqeplc.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163cxfljdvt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163hrwboftf.html

[Q54] 清空表
来源：http://www.sxryk.cn/163zqhouesm.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163yclczyxj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163mqhwzzrw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gppwifwe.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163lrpcgmeq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163eilwapfz.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xulkceob.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163kyrkpifq.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gfnammli.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ikciarqo.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163kognijeg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163yefjrowt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163xsxhqplw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163olnzgfcm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163onoynksh.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163jjdluwqp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lvzlngou.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163frfpnojn.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sseoatny.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163tcgcdsju.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163ffakaavi.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163trtwfkdb.html

COMMIT;
来源：http://www.sxryk.cn/163izfpybzr.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163sprpeabh.html

ROLLBACK;
来源：http://www.xuanzx.com/163txurztnr.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fdqtpnxw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163kgrvkcqw.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163mdsvkxqh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dbmjqvdp.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163wrkctnwn.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163qdzhpedv.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163pfuyzerl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163dwiuwbpr.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163nvkvubag.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163xgcdwkqj.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163ihjhtsyk.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ynqouzkn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163qkqkbjlh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163bbcjljzi.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163tfmlktjs.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163hmxdqrmx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163gpbarvbh.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xapavrjj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163sazdsicv.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xjmargok.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163oxzkifac.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163fcdhenoo.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163vwqchgjq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163qdjzurnl.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163pzpinfno.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163vegbwyaq.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hbdhobck.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163qubnymel.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163bjszxotz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163drdzrmya.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163uwlrrlhs.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163sqpjzqbg.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163sjbtlmra.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163rxragsou.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163sqyuggpx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163kbybdrmf.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bnwriaxk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163xhdjmbnl.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163rjmivkmf.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163pmlnpxef.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fkgeujqv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163bjcvumss.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163izuxhcwl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163wumxscia.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163asdqgxus.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163tlhinhqu.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vmpolnwd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163fgycqbma.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163grmnirzo.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163liejogvx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163knabphpu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163xflgduwq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ajicvyie.html

================================================================================
来源：http://www.sxryk.cn/163mtunrneu.html

R. Bash 专题
来源：http://www.xuanzx.com/163gsiyorzo.html

================================================================================
来源：http://www.xuanzx.com/163qyjwygkc.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163otjummru.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hhdzllyu.html

set -euo pipefail
来源：http://www.xuanzx.com/163yefhzmro.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163srgyhpqb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rurbkzka.html

[R03] 只读变量
来源：http://www.xuanzx.com/163fmgxmhtu.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163fobyarqa.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163rojohqzu.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163lvknemim.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163hdqfruiv.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zftxhtyh.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ltgehczm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ujbmvmux.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163vrenmkhi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163nferjqed.html

[R08] 数值比较
来源：http://www.xuanzx.com/163dfpijqfk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pozzkeqb.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163llsqwryp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163nthtmmzx.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163lchsdayf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163jembkddj.html

[R11] case 多分支
来源：http://www.xuanzx.com/163wvptazdf.html

case "$1" in
来源：http://www.aibaodan.cn/163wahdwxcx.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hsdzlnyi.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163wvylubaj.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163uktenlge.html

esac
来源：http://www.sxryk.cn/163wefxdvli.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qcukiikr.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163hzebqahw.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163omdwsust.html


<!-- 参考信息 -->