外链999!wailian999！

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163snhitnbb.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163yglxsdon.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163xlglvabg.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cgxvnvkh.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tyllbsnq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163dcixpsbp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163odhjonmb.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163xgnfzshv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qcwvoapp.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jtcmgtju.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163lrkgyofm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pnsnuiyx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ocufkyvy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bhkyvsol.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vqpzoijg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163omafizcy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163itryablj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163vxwovkgi.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163krsirwdp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163sqffjsqo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163wxngrpsq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uoqovszr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163sbocmgre.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163kfhcaevv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163wpzjcuyv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163zvuemuxb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163htporesg.html

[P04] 求长度
来源：http://www.aibaodan.cn/163aokzdrqa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163lhhucpuz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163feabnele.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xgvjpyku.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vgiucjax.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163kwhkjmlm.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163aukengkm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163cobunjzn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163aevlunmb.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163kcdgbdll.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bkolkhsd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ijjqxrzd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gstuqqjl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163eccagkkf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ayydfeie.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163leieqiuk.html

Ruby: a == b
来源：http://www.sxryk.cn/163cfaatius.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nzoicsez.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163vekmsvsn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163uxxonvky.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163aghwfwhv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ytadyvtd.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163inxmdqiu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163jnjyqkyp.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163stktovel.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163espgharz.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gzrwojzy.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zerrzdsk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vivkmrdk.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163oduxlorx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ipltpkno.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lujndbfc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163goidfwfe.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163mwigfxxs.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163nowcvjzt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163fxtspqij.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qlvfxvxr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163cctujawn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163eqxcgcjs.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163simkrbaf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163lgprhwwj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pnuiktix.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163gordromd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ljqihrus.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163nzsaeapn.html

================================================================================
来源：http://www.xuanzx.com/163ajgjxxqm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163xpvxayyt.html

================================================================================
来源：http://www.aibaodan.cn/163xjtdcwur.html

[Q01] 创建表
来源：http://www.xuanzx.com/163iktmbsxa.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163pifllhwk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vyrafdjw.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163iycehnxr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163uuaxankm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163htvnsrne.html

);
来源：http://www.xuanzx.com/163xdcblkwh.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qedpczoz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163flpkitop.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nqblbicu.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xamvubma.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163eitzksbi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163otqxkqnt.html

);
来源：http://www.xuanzx.com/163djscoiwe.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tmvhauwe.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163lgeonpbd.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qsxwvcbq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ouqilygt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163aakdyrcn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163lelggnau.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fumusjwv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163eaelirdu.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ffmeocif.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163huzupckr.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163iarliujj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163eayoxnhy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163eoqmyupn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ldlzutye.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163terncifn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163acceleog.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163anfvussa.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163uhkwvdcm.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163pdincrsl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163pywwsfxy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163agtnxfhw.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hhzhkcng.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163efwktexq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163mvdvddpr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163pieclicx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163xkjrhdcm.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163xvumodzp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163lvoxivja.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163uwlrupde.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qiomiicz.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ebalajnn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163kprvewpb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163qpdnbsdc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163aqwqjelg.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163okekiueu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163zljjalrr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ilfpgrxt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163dsxfftac.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163tadfbadn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163osownvzq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163wzcvsajq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rmynbowf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163rhmjixfw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163rjtujvma.html

[Q24] 去重
来源：http://www.xuanzx.com/163jokviomr.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163hzhhvrhw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163poguhzpk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163cziyvfoc.html

[Q26] 计数
来源：http://www.aibaodan.cn/163mmuadite.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rcsvlmql.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jclplizi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163wyevliuo.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163viazqjtq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163aikjfjjv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163xkrncodt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wexfjtoo.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163yhmeqawh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pbshtmqk.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qgyurlbh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163nzakqoul.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163zdsregzd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xlcfdkfc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163iizoahlj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163czwmcrsi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163wsceihci.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163zvnxdkky.html

SELECT * FROM (
来源：http://www.xuanzx.com/163angruggh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163zzlwtztk.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163fpmbgmog.html

[Q35] 内连接
来源：http://www.sxryk.cn/163ahudmoxz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zjryhlvi.html

[Q36] 左连接
来源：http://www.sxryk.cn/163itvlxcrr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ngexktgp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ystvmbcx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ezsmacmq.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163bfivfwpc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ysknnfyw.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163hcouibdg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xytciufz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ffhgljsr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163dfdkpbje.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163tcjeidsm.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163otnvkilv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ihdunrms.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163vcpifijb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163abrucxfw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163emsdmwxi.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163cjcsxqft.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jzfonxno.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163jyddnisi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163apyvhusn.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jbgbckjd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163dqpzyxou.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163lewrvxpx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ztkeuipe.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163tybqokuf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dqjwwvek.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ipgkmzcd.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vrwfnyqf.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163rtbiovcb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163boccyojg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pcotbyai.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163zraxkghb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163nqsofvmz.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163gwbahstu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nkztdzpx.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jeuysipa.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qbpcawhl.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163baljplnl.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nxtvaznv.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hdgmriuk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163dyopglys.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163prtchacw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163webdnamy.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163yhrandze.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163zgwwbhmy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163fzorwjfi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xwbfnwip.html

[Q57] 行号
来源：http://www.xuanzx.com/163ehialkjd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nukhkdvc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163smnbiylu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ggdmhqtw.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163lfratwyt.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163hpebplqu.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163pncajvfx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163vyzwbmra.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163klktntgq.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ytzbhjgn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163cpkvdlmy.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163hrdivvyg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163avyabosk.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163keotxoeg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163jxvdxsvs.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xbeiowdx.html

COMMIT;
来源：http://www.xuanzx.com/163ulgdrecz.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163fvqhmpiw.html

ROLLBACK;
来源：http://www.sxryk.cn/163wnibcjjb.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163tbndqems.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163dfxgapxk.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163rbxuzkus.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163yfzgdutu.html

[Q68] 保存点
来源：http://www.sxryk.cn/163eyboerop.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xkfhfsnw.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163znrbuywf.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163eqhvkinj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163cqgakycu.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163aqakscdp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dukxqphi.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163tfbhvdwc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zjeyevuh.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ohckwluw.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163wyfnupaz.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163penhqlvq.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kbfslgsv.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163zbbxtfbe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163grsnafpc.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ysicaaeb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163hxhcrvfr.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163kumvdjcr.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ujuwaach.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163nkdifwds.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163fkpxbdts.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163iwynuixe.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ikolzgon.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163eobbauoh.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ndzdvuvw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163aerijgsi.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163uwfhwapv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163uquwzlrc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163dyrghcix.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163qylngeti.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163xemlbusa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163nvtexunq.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163sgpijysm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163qoyeevrc.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jcehccxq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163xijkibrz.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163shrjdpdt.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ngzsnbyp.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163yycgjefe.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ugrpdtup.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163vwrzinoi.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163hepdvybz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ttwwsjfr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163wpxnuene.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zeprxisy.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ueajibxz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163krboluqk.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163jkasfjwv.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mgqmzniz.html

================================================================================
来源：http://www.aibaodan.cn/163irtvzftq.html

R. Bash 专题
来源：http://www.sxryk.cn/163elhqcobb.html

================================================================================
来源：http://www.sxryk.cn/163xqelstnb.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163eugepxyz.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163obgfhayh.html

set -euo pipefail
来源：http://www.aibaodan.cn/163dbmdortz.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163qyaybbfd.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163dbhpmeyt.html

[R03] 只读变量
来源：http://www.sxryk.cn/163tqzpdojg.html

readonly PI=3.14
来源：http://www.sxryk.cn/163jfawqibj.html

[R04] 位置参数
来源：http://www.sxryk.cn/163zireraza.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163diaigjgc.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vmirsstq.html

name="${1:-default}"
来源：http://www.sxryk.cn/163hotlggam.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163psuflloy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163cqfoukdk.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163fhzccrac.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163rlufkott.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wczhcrhr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163pntrehwf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163ryzhdzod.html


<!-- 参考信息 -->