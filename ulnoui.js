外链999!wailian999！

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cnmtxmie.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163vwhoozkk.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ulmkrhru.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163lnlscltt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xqlxcykf.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163thqthyad.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mfignwif.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163klaxbyip.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163kkrlznvi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ruoetkrn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163rbsgkqnq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163hrnhwimw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163suxybyue.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163juatcpdr.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163zimjhuzm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163yoezmbeb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163qtvworei.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163srqbngjb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rehnonhz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163sqkzofsx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cevsfvbv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163eblbqhuv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163njzrciqj.html

[P04] 求长度
来源：http://www.sxryk.cn/163wzvljrtq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xchqyfli.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iptqbekk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163eueufqcx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yyxcpyhz.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163mmmbicdn.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zmfmxjqk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ylgxqcmy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163hsjgkwnj.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163znxmufpm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163cvvfcrhl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163asjnzgpu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163faofoipx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fffxjitx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xaqqtoup.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163apwazorn.html

Ruby: a == b
来源：http://www.sxryk.cn/163zligrgnf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163eggdotot.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163acarcilo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163pccxbwyu.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163uweikdwz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163gtvxupgu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ejvdtnky.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163tbctyzcv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fmeguekk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163zezcyfps.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163yekvnxgu.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163kcfkeqhc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163hqpjcrhg.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ftjjceaf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mjgoxqju.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xgxyxccw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ldwzkyei.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163wqvsasbb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ezdabzyd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163npxzqhtd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163xrwiijgc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pxxysokf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163pfycgwmq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163lsfgrysu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163fejyuhmq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163lgimqdpv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163jdxpmmlb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lmwamvzr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163xjkjultg.html

================================================================================
来源：http://www.aibaodan.cn/163wggkczmk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163qdzdmqwr.html

================================================================================
来源：http://www.sxryk.cn/163exockyjg.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lqbczkfo.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163vkgtstdr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vlsdvise.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163gmaahlsq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163wrxsfdam.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ufghcvvc.html

);
来源：http://www.xuanzx.com/163zyelatgw.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163sazrfztv.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zlgjnbcg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hswhvxpv.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163uygcjqsw.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163hndjermw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fgyretgt.html

);
来源：http://www.xuanzx.com/163mgvxffmp.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ydzqnpwo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163vcwsygxc.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163vhuwehhj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163haelejhv.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jjnyprrr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163cwcuulef.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qbsgfnif.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163sgeardsa.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163kbdjzerq.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163iqeotxsn.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163rvewkzcz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kzedtzoa.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163yumpdzvl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ecqvntbg.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qbcrscjr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163gviwystk.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163tnmbltpg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qabicqpy.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163wqqhwvmj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163vxotmedy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dmoeilmf.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lfjtkraf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163luzwveld.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ktvgjiry.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vpvakbtg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163yymmosps.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163orbtcbgu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163cvqughcm.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ehliyjje.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163jvtyjfcq.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ndmobfbd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163itdwbuav.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qcguyzjs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163ioousuwz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zrgiodhj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163bkorcpkg.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163fgmvppia.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163evyqgjsw.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163jjbsfmbp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ewbxvjkz.html

[Q22] 排序
来源：http://www.xuanzx.com/163kbofnilt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ebnwktds.html

[Q23] 分页
来源：http://www.aibaodan.cn/163obmxuddg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cxqsgldg.html

[Q24] 去重
来源：http://www.aibaodan.cn/163kyxkdgwx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163kkeunnjo.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163yuyhvwfa.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kusbsehw.html

[Q26] 计数
来源：http://www.aibaodan.cn/163kfkvvghd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163eypydhfx.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163dgtztjkq.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163lpiwjpcp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163fyixkwyv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163wfmobzah.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163lczmtpbn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dxmrfpte.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163lbvmmdpe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ixqqqlft.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163zdsoneel.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wqujcqdv.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163hmgpsaef.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163cagpscak.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ytptxxde.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163whtumkie.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163vfswnncg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163wfkczula.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163tugbcnsl.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ittfdkmc.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163wlpoikqf.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163brjoxyif.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wffnubgz.html

[Q36] 左连接
来源：http://www.sxryk.cn/163anfthmik.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jkkespkp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fpzncjpg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163zvkchypt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163inucvdff.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ahfjrcql.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163iiovoscz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163lpowqrfk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163moqjubfb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ygopcpxh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163hpmflpnp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163vggtoryq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163xykdmtsx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qqccranf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163nkojgocv.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ksgghzjf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163exvlpigw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163yxpvqzrb.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163kkwkkksh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163suvpvvkq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ofkvmuev.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163evvqmhnf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163pfiszczy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163vdhddarm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163awuabtpz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163iafbiuoo.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163eqihlamt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jrsuygus.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163atctgkjj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163fnhsjesy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ozwcbgbo.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ixsanyog.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rhebfbtd.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163bsxktsey.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163pmdfmmqe.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163udisaakm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ogwzacwx.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ivzejjol.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163lidpqpvn.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163igcasrvm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163lqihwfuj.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bfontgpl.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163cieuxziu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163gdkqiwbi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163fbwvrita.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163uairfyou.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163bdhhxkfl.html

[Q57] 行号
来源：http://www.aibaodan.cn/163igmsowcv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163isktyhzo.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vlazxiuj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163uwjjivzd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163dujiruru.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bjyvjois.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163bjbffmzv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163avhklwbz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dilbduom.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163hdxrkwot.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163qdabhivy.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gdqdiqle.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eyieqblw.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163xrrydhuq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xkznmwgk.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jrpkvjkd.html

COMMIT;
来源：http://www.xuanzx.com/163lbmoxwsy.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163hbphltup.html

ROLLBACK;
来源：http://www.xuanzx.com/163wxuiavhb.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163zxuwrnqs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163urpqzaob.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163crzlebni.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163wlypuupj.html

[Q68] 保存点
来源：http://www.sxryk.cn/163sfrxscit.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163qzdsjlnq.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163kvbcvcln.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163oeizevne.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163xhhqifav.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163gzlcanov.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163xbxbjcld.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163zhhiqbry.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163vhzzhwbf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163tyvpklch.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163hzpibrhj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163nxgtfwxf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163oyhwedky.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qtkzeyrq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163kfkewfej.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163wbpqginc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163qcwughdm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163xpdgtxoo.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163bbhvnlct.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163gchxfoky.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ulqmaoci.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163uqjaplcx.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163svzvtbzw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163quvkwkhh.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163wzolvgsx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163rajrdish.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163csaozpqy.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163kijahrsr.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163jjcmlhtd.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bzubihka.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163xlgggibu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163lfdbxbsw.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163mkyctfik.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163flpgphna.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163qjyeetey.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ljmexpcc.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163byzniiif.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163zpdpuznp.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ewwepnen.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163mcvvhoag.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163satrocgd.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163tlkmvofx.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163pnbwttkt.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163njeyxaqr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163fmjjtkby.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163bewtkabb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163carpfuhr.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163irdqzvev.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163gdfiyqlj.html

================================================================================
来源：http://www.sxryk.cn/163izbhdmba.html

R. Bash 专题
来源：http://www.aibaodan.cn/163rwbhcnpj.html

================================================================================
来源：http://www.sxryk.cn/163lbuihfrq.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163fecfzgbp.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ihffmyzt.html

set -euo pipefail
来源：http://www.aibaodan.cn/163tcvdzpzl.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163gayuhewf.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163dupjjflg.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163taqcihaj.html

readonly PI=3.14
来源：http://www.sxryk.cn/163qvdvnbvw.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jndczjud.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163hmtnurpc.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163lbdhtaaf.html

name="${1:-default}"
来源：http://www.sxryk.cn/163voooqrme.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163lxprxkhp.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163rnmvtcvo.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163liwnhafk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163lsadjloh.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qiwoqzwr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163txfjkyxw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163uxehxxpn.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163fyihlsoo.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163pialhxpi.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163orlciyhc.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bpgwmjvb.html


<!-- 参考信息 -->