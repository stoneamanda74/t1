外链999!wailian999！

C#:   Parallel.For
来源：http://www.aibaodan.cn/163zdsyddte.html

================================================================================
来源：http://www.sxryk.cn/163vbkgpmax.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163pmcbfgmf.html

================================================================================
来源：http://www.aibaodan.cn/163hteijrrh.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163plntkhfv.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163hidzdckz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163atmkaoob.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nxkdcudq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mllyrvte.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qzpfetod.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hvganrml.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163scyqvhms.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163updektfy.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vrvebciq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163goolakbj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163lwzcbsxm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163uklgttjt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163tzurzhqx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163sknlxtsq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163nmjdadls.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163imoyjoti.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163uegczrgy.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163odznomxw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163nhctudhz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163yvcrjqtb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qtxeymce.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163modqluph.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163baxlpiuf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163lllzjipd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163eloepknm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ejicktmm.html

[P04] 求长度
来源：http://www.sxryk.cn/163wwcwqndw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163pnfugibr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nsdkgkxv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dxvczxgi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vcqsvyjh.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163jgpvsvhd.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lppctufb.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xgafggrq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163meutgsou.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jjtvyiaa.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163dhangyoj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163zqlkxutv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163azljtbri.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163aisjbkdd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163wtqeevyy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163fvcqande.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ztfydyng.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ldgkfhwf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163qrmshsmq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163vsevykdz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163rgfcbmns.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163arwpuihj.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163yvviwggw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163drknuslq.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163jhgquwgc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163mejazsvx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163pjodokra.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zylqzukl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163kwufcrht.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163flhmrdxq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163kqcskubl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kfdjxyqq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163typzfmci.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163kwvcbsum.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fjmuaait.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163tbmrhxjz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163cdyaswbe.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163huiemvrh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163zibemozm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163myftfvan.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dawtnpkm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163rsoshvyh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163icaeecty.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163wdyrxyik.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nraaggsa.html

================================================================================
来源：http://www.sxryk.cn/163vyjtlcti.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jocpuful.html

================================================================================
来源：http://www.sxryk.cn/163qwqssruk.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163njllqytf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163kjeomcdd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wuxhpzvf.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163uoxmcxfb.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gbbllaol.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163hazpijsb.html

);
来源：http://www.sxryk.cn/163tnjowfeq.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wghdaojt.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163aeekqrld.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xyygrpud.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163pddfkgqm.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ahfjsfkx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ntuizbws.html

);
来源：http://www.xuanzx.com/163gemvzkmk.html

[Q03] 增加列
来源：http://www.xuanzx.com/163tzvhwsgx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zjbmiauy.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ugwmifsb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163pwjrtvcp.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qbilnfvw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ufknsixj.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163guhomuab.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163mxtjrbmd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163pqigjsli.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163uvdlyuwg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163kkfurajy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fqvmoxcb.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163llbmhxwb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163wfxxkthw.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163yeiwuadn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163rvxebklu.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jozpjyrz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163vkqnaryf.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163pjybnywl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163rmhxhrlc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ayzcqgol.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163bsqxuonz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163bmapesbi.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163zlpzevdj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163rmzqlcyd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163uojdxmmk.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163cftdegiw.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163ozzbwwnc.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bgtyumoz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163vpuqjtmu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163cylvixis.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163fpwdgpmu.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hicpcefl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163yvdswznd.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ivpznlup.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ufcknrou.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163lcnfrksx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163jmlyyvyn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163npmzdxml.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163emygodfg.html

[Q22] 排序
来源：http://www.aibaodan.cn/163efbbhabr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163czmpjmog.html

[Q23] 分页
来源：http://www.xuanzx.com/163tcwlsarh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163djeymams.html

[Q24] 去重
来源：http://www.aibaodan.cn/163zlscfzlc.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rtllmqec.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163uodkqewg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163oueninzx.html

[Q26] 计数
来源：http://www.xuanzx.com/163uqqbokrb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163ouolnvlc.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kmtbkgez.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163voywrhfz.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163jnmyexly.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163fzfikbtg.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qknjhoox.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163yqposmeu.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163dhtofxmz.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ecyotlzr.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163tebzysuk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163bhwzuvue.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163nqdicqjm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wgvjaknm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163nfzhugdf.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163thywtbrm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163mbwlsfcv.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163zizggehr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163tspyaovx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163tzrwyhar.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xtetefhv.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nkpaqrkm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qfkiypkm.html

[Q36] 左连接
来源：http://www.xuanzx.com/163mehlhdyu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gropyceb.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163vuiarghi.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163cwhbncoc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163fqcurels.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163einsxglg.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rmukdnxn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163spzmkbqo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163smybinhw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163gxezilwi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ltjisyyn.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163wttyjtih.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163wgcfznjh.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163bkzpqcbp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163kdxmfjmz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qkgeheez.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163uwttbhev.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163dkgpwlyz.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xjpdutmb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163yuwsbnoe.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163exznmrms.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qqpnepjd.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163nfpowqts.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163mvqqbzfm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163pcdeoeoa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163xgmoqqrq.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163wfwauqcx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nbvrwoke.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163znqanopu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163yifgswqx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163xtfinatv.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ypwnfcjd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163noiskwji.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163drsmfsho.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lqyftnyj.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163buzadtic.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163vqqtaxcf.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163fjxqvonb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163dnqrqtnf.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163kbhkrodj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163moobtsgh.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nfjxpowc.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163rmnkvdvy.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163ibgwvdmj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163livloujn.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163eqqgaajw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163miqmszkw.html

[Q57] 行号
来源：http://www.xuanzx.com/163zpylfkwg.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163wucaospc.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ckbfkose.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163uilukbpm.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163cyrfbnix.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163thcmjche.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163foycnbxy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vhiatlwf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163pcabcxov.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ookqnbbx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163oleatvrp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163lrqkwlhh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nkvcclqr.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fcxjnzht.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163niriouyk.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163rwtsnvbu.html

COMMIT;
来源：http://www.aibaodan.cn/163pczdjezb.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163yfhpqbws.html

ROLLBACK;
来源：http://www.xuanzx.com/163llnjiyzv.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163pznafkci.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163elugsbsh.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163spegconn.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163oeldybbd.html

[Q68] 保存点
来源：http://www.sxryk.cn/163hjckzffa.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163kqtyilci.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163aemhofej.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163sstugcer.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163vmrktihp.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163egspapya.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163fshnomie.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kdyuejxs.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163dngnzoig.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163agzcucgs.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163bneqskns.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ntzfgudg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ivaklyqp.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163pgugypsg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163sbkabzyv.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ksjscdyz.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ajnnticj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ycmeqqzn.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163asqlxykk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163oxmekejk.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ghlgylst.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163zwjbmwuj.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163bxfvgfrk.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163mosdgumq.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163qugwcscw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163gvjrkxhy.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ncbbifsu.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163tjfjgnow.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163eerzkozr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163bdqqwpyk.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163srhcucyv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163uccdcpqa.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163dppzwshl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ogvbjkgb.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ugiixycn.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163cdcgphje.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gxakjftq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163arkvupor.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163qgiiuscz.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163evcokllr.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163sksjwvlp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163wrpfeyuz.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163zloexnjg.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163hgnlabcq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163sjoslaru.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163uxybmatk.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163yebqczgc.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163duhqfzgx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ogdjxplq.html

================================================================================
来源：http://www.sxryk.cn/163dkqqftwy.html

R. Bash 专题
来源：http://www.aibaodan.cn/163rztyarue.html

================================================================================
来源：http://www.sxryk.cn/163ouvqsdii.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163oughbwff.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163wpfzeexz.html

set -euo pipefail
来源：http://www.sxryk.cn/163mebnyjec.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163asejcmtt.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163nssgibqp.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163sdcxukux.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163kpylbgji.html

[R04] 位置参数
来源：http://www.sxryk.cn/163tlueglpg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163woxdpbsa.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163mrygtsoh.html

name="${1:-default}"
来源：http://www.sxryk.cn/163tqlhtmsn.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163hlfrmqpc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163wwiududz.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163kzhjqkbn.html


<!-- 参考信息 -->