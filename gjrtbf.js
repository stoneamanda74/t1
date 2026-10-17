外链999!wailian999！

C#:   Parallel.For
来源：http://www.aibaodan.cn/163cuczjnov.html

================================================================================
来源：http://www.xuanzx.com/163kkovvskr.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163alctjnfe.html

================================================================================
来源：http://www.aibaodan.cn/163ebwprppt.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163glnldopy.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dmcuqtty.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163uiparjux.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163quhizubi.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zwbumkcd.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163mizczwwb.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163nbktsckq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163zdpscvnv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cirojtog.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163fpojmnqz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163zihedfqe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pnsotuoi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163volkzlxt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163rehbqbun.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163iedgnkqn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ialotjhz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163dttqdrnp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qhnbqmem.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163buphgspn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163dtuzjyvf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163wrkykvfx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163pvdfvebt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xsgyodqi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163gahzeioj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163tdekmnss.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qamylzkv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uolmmejl.html

[P04] 求长度
来源：http://www.sxryk.cn/163hbdvqkrf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163prybyppc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jxermtqq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163numfjevc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rqybcztr.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163xhjnriuj.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163xmfhyybm.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ytbnrlmx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ahvjhqwm.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163orjmoxgi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163otdxawgw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qrpcnzor.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163tfqzqwuk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fpwsledv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163xfgsppby.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qzibgsfe.html

Ruby: a == b
来源：http://www.sxryk.cn/163dvbfiuwh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ojehcwmz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163zcuuqxqs.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163iqqukjie.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163fwmcpxcv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kdbprltu.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163factdbpj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163bihkvqto.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ijjjjyns.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ewfnlcgj.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163iubebukz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jdrdxsts.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163fqouyuzy.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163rvdqmbde.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163iqbbupyp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163djwazjqb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163krjhcllc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163aexgkswi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xrfnwogb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163lzbkvtny.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163llceythk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163nxydeqzv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163dmwrpplj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163cnbqqpna.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163skihrrer.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163dijvrmjv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163oojkqctl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163krigrhjm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163fnzuldgm.html

================================================================================
来源：http://www.aibaodan.cn/163ofwzuqoe.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jkyrdbfe.html

================================================================================
来源：http://www.xuanzx.com/163ewqtzmlo.html

[Q01] 创建表
来源：http://www.xuanzx.com/163lxkubyob.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163nyqngmgc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bdwkhsek.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163qctynyfi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163unfoxgsu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163muxvzqxc.html

);
来源：http://www.sxryk.cn/163yqdjisxc.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163uypxgdye.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163evdltswb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dfqtzwuy.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zdjxztkt.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163uxhylzdp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163amqjkkwo.html

);
来源：http://www.aibaodan.cn/163oelzpyso.html

[Q03] 增加列
来源：http://www.sxryk.cn/163fvreijpe.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dbrjjkix.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pomfjptq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zskppjcw.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qfrklzge.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163fmlpjyzf.html

[Q06] 删除列
来源：http://www.xuanzx.com/163zptaptrj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ngmlkybk.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163idhhrdnh.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163mzbawduv.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fuokznsk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163zxdligpr.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163pxlmlgpx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mdelczow.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163hebscikx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163efgrtijz.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163gflnnerf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163prhvsyni.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163gcxuboyp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163qqdjzqxg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163zrpqvtfe.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ornlttte.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163jkojhnur.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163bziyphvb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163mrqvnapt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ynfrcuvz.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bhdpwvdy.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163tzypuvjj.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163trxpldpc.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163fhhuatuk.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mxzvdbsy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163aaqlsybt.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163cmkqoqhr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163glokobvk.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hfeneklx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163xqcsubfm.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163etfkfkef.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163qyfrifsc.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163amjceswy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gbmfvbwa.html

[Q22] 排序
来源：http://www.aibaodan.cn/163zqeiwxaz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163tjqtpsng.html

[Q23] 分页
来源：http://www.xuanzx.com/163hvxmcops.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163czwejyhf.html

[Q24] 去重
来源：http://www.xuanzx.com/163rgzbjaef.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163faazfhjk.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163jqsnmxov.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mzbgawmo.html

[Q26] 计数
来源：http://www.aibaodan.cn/163pgmdambm.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163tebgjahe.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163pvnuchcv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163excemhfh.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163xrketbya.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163doezqdpg.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163brgbbvwg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163wojgwcho.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163pdxwwhfa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yqmmxwyt.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163zbexttli.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163zqsxrhfz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xduochpp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163oyaedowz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163hdikhhmb.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163exsdpivq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163kunvgizs.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163vhprxdfi.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ffrrzlmi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163shpttjxt.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163dicinvih.html

[Q35] 内连接
来源：http://www.xuanzx.com/163zojrjbvc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163erzcnfuv.html

[Q36] 左连接
来源：http://www.sxryk.cn/163xnejcjcp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163joqzyroq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zsnlaaoy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163wfxoqtwk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cemropfu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163mfpnslim.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163dylvotdy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vlzbbdsu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163hjvknigq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163vfovuuaj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ishigtia.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163arrkfyqe.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163jegbzbwz.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163kzqezbch.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163yvitcfqg.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163lwfifitl.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ppsqnyfp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163sirhtmfo.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xuvymqwi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163peyvwigd.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163epnhyxbm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163llmwpxlz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163tjxqqgki.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sgqmanad.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163zggrpdpl.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163agsppbma.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ytyoaaxt.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163kqyljago.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ofxmzwic.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mvhqymrl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163dhpawvmn.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ekqwcobh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163zffcnwee.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163oxunteqy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163uietglcc.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163qhfydwdl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163sbqidqhs.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163hvpzkdjf.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163boktcefm.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wgrryyrp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163rdmfhsmi.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163uxlmdgsz.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qutwcjiu.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qygvzyzb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163emixyuwo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163zutnghyz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vsxcncsk.html

[Q57] 行号
来源：http://www.aibaodan.cn/163kfnndreq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163sydjtkdo.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163yhbowwxa.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163hppuaatc.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163gcwhjphx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163hrnnahcz.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163rqecyqsu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163fnobrqgv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163plrqktvt.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ywarhuoh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163affererr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163mmnxfklq.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bbvktdrz.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163bwfopnvk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ulxdstzc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163dqwedgpg.html

COMMIT;
来源：http://www.sxryk.cn/163kwjrfatr.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163yfjgeezw.html

ROLLBACK;
来源：http://www.sxryk.cn/163hokftzsg.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163cbplmlpj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bywbsvtl.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163dphhseyo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163gyuefugo.html

[Q68] 保存点
来源：http://www.xuanzx.com/163pjtoxiir.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163owymggwa.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163qxykamoi.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zwchjdfk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rnlccjnk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163jzcyquzo.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163cmgispdu.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163iywiupoo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163bkluosnh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163fsejaais.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163luujukeq.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163fkxebuzd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163jtzwwvqo.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163vobnvylj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163untbgors.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163mqtptjxb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163oqklyksw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163mdwajdtc.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163jhwomdng.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163cgsicmoe.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163pdzydynt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163sfndjpdg.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163awrxqpka.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163dusmsehq.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163fxlfqfns.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jadllorn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163cvzzffsd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163jvqnebnn.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mvupsfgz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163sfadrjru.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ixkafdoo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163awewromf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163bdycmcbb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163jzxnmqsx.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163wanlcbpx.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163jzaowvyy.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163gzlfurbn.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163femkbmal.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163tnqfkpfu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ooagrqnl.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163xhwctvjy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163krnbykoj.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163etllyqwq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163vmgynqqz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163otttpckw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163jlacilbb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163eclxadfl.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163pmemlyac.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163gagnafee.html

================================================================================
来源：http://www.sxryk.cn/163hodyjhpx.html

R. Bash 专题
来源：http://www.xuanzx.com/163qyxlvorw.html

================================================================================
来源：http://www.aibaodan.cn/163ouedjpem.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bnlwjvyi.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mncxsfnb.html

set -euo pipefail
来源：http://www.xuanzx.com/163vragrnva.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163oyevnaet.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163txarbakx.html

[R03] 只读变量
来源：http://www.xuanzx.com/163nlnfdhln.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ijxfhuyq.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163nddkhrrw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163dgahadkd.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163vjothgur.html

name="${1:-default}"
来源：http://www.sxryk.cn/163rchqvriv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ftofellx.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163nnmfqxdt.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kbusybrs.html


<!-- 参考信息 -->