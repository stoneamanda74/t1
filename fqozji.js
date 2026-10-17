外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163njrqktyx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hngfkbqw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lrfetmze.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163aetdtphm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163afkcygme.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163csuitjto.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163vxqnuyst.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163zkrnlrks.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163awomekaz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hdywqgog.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ynzhglvt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163isqevvpo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rtfazjcy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fyklysmh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163xznfcxjg.html

[P04] 求长度
来源：http://www.xuanzx.com/163jcgjbzxg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163oxwtvzlj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mcgzfulu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bggvdgsj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qeexkuuo.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163qmnntcsa.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163jtvhcxxw.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vrkuramr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ugjyqnnp.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rnitruzb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ewayqivc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163alzyvdbb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163vsdholku.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163zfgbvukl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qwplfbfo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163lwmlqucc.html

Ruby: a == b
来源：http://www.aibaodan.cn/163plbpmqvl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dqzusqdi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163iysjvmfc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yrkflmzh.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163utdzsllm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xzbineqe.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163pcdefgeh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pqvbgixy.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163yebwtrjm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163pzlxpxxu.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163icvryrdd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163scmhbosj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fypmvkep.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163unqhykqq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bjszqqkv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lzmltngo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163euylthbc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pfuparny.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ktcbyesf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163qjsxvdem.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163roiaflcj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163obnuloem.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ofiqkngv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163zcfleszj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zrykvgmj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ldmojttl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163fudwrfol.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163rftyeypv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bypjayaa.html

================================================================================
来源：http://www.aibaodan.cn/163prgfmnle.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163noosewpt.html

================================================================================
来源：http://www.aibaodan.cn/163ytyljflp.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cnaqjvoz.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wdhclcma.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qmkwxsrh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ybrmcdrw.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163txtanmzb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xernwaoj.html

);
来源：http://www.aibaodan.cn/163udqqbsks.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ylpzywhf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163oxrhduza.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ceixxjrq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163negtwwzd.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163epyfscjv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163xoabwchj.html

);
来源：http://www.aibaodan.cn/163fbpwbyyj.html

[Q03] 增加列
来源：http://www.sxryk.cn/163bysjfivj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163fwrxarbv.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jvfqyavq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163kxregaoe.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163dxvjvzjd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163awgaohcg.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rxjogolh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163gcyesxbj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163trmrhchk.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163fcoqszpg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tczfcajn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kmrohqsu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163uwjaunry.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ivyqxsmv.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ndvkbget.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163nhpkiyro.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ltpajczk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163gwnabrji.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163brhfwmrp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xmgxgpzs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ffhkbijt.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163shnuuvff.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163yaqeagup.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163kzjxzkww.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ywxusfiw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163jbykajot.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163czxtlnbl.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163syzlvbii.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163rwaqfhjc.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163btrabgyo.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ffwnoqyc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163akuzbbuc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163qiesoqbv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163qkskigpw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ptvroznm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163uaosyrlm.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163wanaaabt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rhfljbmt.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163hbrztmon.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163tvzwqykt.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xnxhqkvi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163eloqdwkk.html

[Q23] 分页
来源：http://www.aibaodan.cn/163emshuiao.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163oerfmcbr.html

[Q24] 去重
来源：http://www.sxryk.cn/163wpvgqzgp.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163kdoctcov.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163pvfmiayc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163dufqpgkg.html

[Q26] 计数
来源：http://www.sxryk.cn/163effakkne.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xkwnxrcd.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163equnyloi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wfbffjte.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rfwjhscw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163yeiwtbzf.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163mowvkyay.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kpzjkotq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ecxrxoqy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163eozcnurz.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gzgfvlzc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163yfnkhfvn.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163tempdmtq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xenifbio.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163spsiguvs.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ukssgluu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163meucwaph.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163spvbxuca.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ryfekahm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tayrogwh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ptgthchp.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ggeitqlq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dyyuqcnp.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ajprvjqk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cgcgbfxi.html

[Q37] 右连接
来源：http://www.xuanzx.com/163xwpsmikh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163acbwyndm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163svzetxwb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163etekhqrx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163qzbmnxdp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ijbvyphd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163seosndxf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rcoerpmc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163kluhnwqc.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163dthpkkdg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ehvwhsvf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ghlwduly.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163veoipmmp.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163niedeigk.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163bizywrek.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163unduimkc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ujfzfhxf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163iiubanxa.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qdjpwyah.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163yygtatlw.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163uerbtnsp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ljafdopo.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163sljjdpfd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dwxqlpdk.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163wcifiozg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163dkcdsqke.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kogphtxd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163uxgqlzdv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163oembtprt.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163vnwofaql.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163kxskhyvp.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163gzckylfx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163gbrqjela.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163zwzzmuzt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163flkjiebo.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163powutjeh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163xygttfkg.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163cpfkkoka.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ujhyjynz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163gxpsynsz.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163yxhzmzla.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163qnntbxul.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163twozokfy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163idypavse.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ndiarows.html

[Q57] 行号
来源：http://www.sxryk.cn/163tkrjrclb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163dcwhdbxk.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163auvqmald.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163gahaenlp.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gncjmetz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163mpzsoaxs.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163rqmvsetz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163bkbpzcyo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163igmoqmbt.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zqmxyopx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ocmtwyws.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163czywdiuo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oqensxot.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163biimfmri.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ldvazjqm.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163hxjzksuq.html

COMMIT;
来源：http://www.aibaodan.cn/163ocxogtjd.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163iclmxrva.html

ROLLBACK;
来源：http://www.sxryk.cn/163jlxbkwvt.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163garhtmft.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163vdffgmhp.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163fitzqwme.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163nvkeakos.html

[Q68] 保存点
来源：http://www.xuanzx.com/163mxawbhyp.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bidybcil.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vyflegce.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ljyxzird.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163sehhepjk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163nxbdzntc.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fsjscfao.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163yvqqahik.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163fvbjedvw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163zlpyowci.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ziyamulv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163bpndsrqn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163iwftufkh.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163rblazmnc.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163oanvogin.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163utypvmqe.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163fmtstdxa.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163jqxvhxtq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163sovgmgtp.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163mzezafpt.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163rgqkctqp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163wwefdpgh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163xpeddefb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163hssbjivj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163sklocldo.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ceuhnoxi.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163bknrjukc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163bjmtmlje.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163regunffy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ecqezhvc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163uajumiiw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163bjxcxhhs.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163mdzbcogq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163nwjwfvpi.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163izsxzens.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163asawkekb.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163rvzqdmdk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163fkxtuzob.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163sbtkresu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163dmmuleew.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163umablovg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163lgkweqqo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163tzbprnfj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163cwaetmdr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163iwifeodh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163yojgawtu.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163qhcycegu.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ezpboacu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163sgaezlep.html

================================================================================
来源：http://www.sxryk.cn/163lzsxbhta.html

R. Bash 专题
来源：http://www.aibaodan.cn/163lednirug.html

================================================================================
来源：http://www.sxryk.cn/163qafelqoo.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163daeiyjyg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163nricozwd.html

set -euo pipefail
来源：http://www.xuanzx.com/163vhdqgrzb.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163qtiwqkgg.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ktgiafeh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163vsexsbcj.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jungejqm.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ihrovuwo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163xvrjfmnq.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163bmiyrfgy.html

name="${1:-default}"
来源：http://www.xuanzx.com/163bxkhhasu.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163secuiozd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163hycasexv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hapfcrvr.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163dbmpdudx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163tsetgbff.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163olvigfel.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163jqjsqsmx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163gzvuqvst.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ydptkdza.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ypkqzugw.html

[R11] case 多分支
来源：http://www.sxryk.cn/163dsdfjxah.html

case "$1" in
来源：http://www.aibaodan.cn/163plkwdhha.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163aoqoqhbu.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ttcyfdzv.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163jvvikdjh.html

esac
来源：http://www.aibaodan.cn/163tplgmdcb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163vhffgius.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163rfutzscq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163hrqpgixa.html


<!-- 参考信息 -->