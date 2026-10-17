外链999!wailian999！

[P01] 生成 UUID
来源：http://www.sxryk.cn/163lhgzgidj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163kqwoexjf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163bomsdzdn.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163crrcidvr.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163awoyuinz.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163oevsoaui.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vxryxcfq.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rpbgoovc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163crhxspsp.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lbtarlfi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163qdjytvop.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163pqzoqnic.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gckclpyg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163txzpxxux.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wikncrty.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163iafxgtjn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lgbeldtw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163bjhcqewh.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163efkacugb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163rpbufmhw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ubunsybl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xiuwrtlb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163exprvknz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163adrwtcxx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163gbdcsbys.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163bkcebxsl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163givlnlgw.html

[P04] 求长度
来源：http://www.sxryk.cn/163kxhspxoc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163pchnymhj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pkwczyuh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163phimyxku.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gtwagypz.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kgonjhxw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163eewcflbq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163bducksnn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163xytxvrgi.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163zbxjebcz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gdjjxfpp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163oxbbeahu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163noozqppo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163mfgwbzhq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rxycfckp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163njjnqmvs.html

Ruby: a == b
来源：http://www.xuanzx.com/163ubewvqyh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163stchsgxa.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163hlucexge.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tctbhtmx.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rljnnzbp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163shnlfove.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ktzfself.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163vjctpsda.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ljyigtro.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163fkshyxxp.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ienflrxu.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163dhiwnhwq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163luiuxvvf.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lrqmwlkl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pggptynl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163htnbyrse.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163pigogdlj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163cvctvyef.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163uhfgjlfl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163uzdpgcjv.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163nhhmvgru.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163yfcpfoby.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163mlyqemna.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xaubvwxs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163twqkutqk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163tfqdcfuc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163rwvnmbdm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zmajfshf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163lfulvwrx.html

================================================================================
来源：http://www.sxryk.cn/163jhjsheor.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163kojnmukq.html

================================================================================
来源：http://www.aibaodan.cn/163ywqrfpzf.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kjacdqha.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163mbdlcyca.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nrajjcjd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163jzdkgnlx.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fbebqlwp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163bvzpzmkc.html

);
来源：http://www.sxryk.cn/163zbfjbzxz.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xhhgomll.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fmuncjti.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fxnwkxpo.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jtbvrcsq.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163sawsohre.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163rxvcxplh.html

);
来源：http://www.xuanzx.com/163dhysgwte.html

[Q03] 增加列
来源：http://www.xuanzx.com/163blzmnlqs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163koqbtndw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163hnjrknzg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163cjrbwfyf.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163pvfxeowl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ciuqvxxw.html

[Q06] 删除列
来源：http://www.sxryk.cn/163bvluyuri.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163zirywrfh.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163lbdfsild.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wyvnlpbe.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hwltfbeb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163neoeziuy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163llldcfgu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wsygunxg.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163pouuxoof.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lkqpcbsc.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163abaaoydz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163skhoitgk.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163otjvosrd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163iilqlysb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163itiiimvj.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163iudjtyid.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163jprpdvrf.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163eybxetny.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vpkklstd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163gsttvwbh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163dcgkmjvq.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vnvwmpzm.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163uedvcirs.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163lbsdudbm.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163hcytaqfb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163tevibkiz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163kpglspkv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qcamocsc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ihbawnko.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163qhmhsufm.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163bvpfcdgq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ziqzhazi.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163tvzmvlnj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163nfacsjiv.html

[Q22] 排序
来源：http://www.xuanzx.com/163wxluuegq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pyzxjxkg.html

[Q23] 分页
来源：http://www.xuanzx.com/163tkwxvtmm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163xdoellma.html

[Q24] 去重
来源：http://www.xuanzx.com/163mmnfnjfa.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163aefswskb.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163denkilvk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163tmfnehjl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163qjtxlgkr.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163axuucocs.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ccazgdol.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qlatyidg.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163hizgtafg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163ddlnakbr.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163surtfdeb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ypzxlexe.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wkserujc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mvdhzgnj.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163btyrdmie.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163zboftbhu.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qgptvqvw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163chtcvkwg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163byzlsjnk.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163earhuxug.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163zneibxvw.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ojtwardp.html

SELECT * FROM (
来源：http://www.sxryk.cn/163clneqemo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ciumgnph.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163wgjkqxxb.html

[Q35] 内连接
来源：http://www.sxryk.cn/163hslmpbdd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dgsqpkjg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lyjtyxtv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bnxfkmrc.html

[Q37] 右连接
来源：http://www.xuanzx.com/163dlmpizkt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nkrryobs.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163kiyoczjk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ocuwmgev.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163leafbkyh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163wqzdqlex.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163afamksob.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ojfbjznp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ilayfmwb.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163jclyugqz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163ddbixqlo.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mbavubdb.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163qujuccwa.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163tsajgert.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163eybohcxs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ghedweip.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163htfjqawf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163lhaexovd.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163vpsbagms.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163mdgnwsus.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oiipyauu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163rkpnodnq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163acclewdi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dclvpmdj.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163zxpkbekp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163cqtaoimv.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ropfucra.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163cbvyovuv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163obtrhotg.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163sonmirlq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163mbzyxhal.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163nbekyyqs.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163gfpmgnqh.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163qnzsupyn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163xjbztqmc.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163dmvpjoqe.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hjdasgqw.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163pawdjfqv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163xtolqwjz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163dosgmfom.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163yhvrppzs.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ptvikxcq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163oocohsuk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163nimwgixn.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ivluohbx.html

[Q57] 行号
来源：http://www.xuanzx.com/163mbtxbhpx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163etppzfrj.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163xykyukvx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163kueeeeoe.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163zkgtgaja.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163pwssbvwh.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163guvkmpbp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163flddynlt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163eezictrq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ziznkhfy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163mvdnipkf.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163bdaqusxu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zijfpfhq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163wlzwnsck.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163chudpzue.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bkdwjfkf.html

COMMIT;
来源：http://www.sxryk.cn/163fxadosaa.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163tcgmcqqq.html

ROLLBACK;
来源：http://www.sxryk.cn/163lfkqiisy.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ysdkmwfc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163hilbwilv.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163vjxibctb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zoltorhc.html

[Q68] 保存点
来源：http://www.sxryk.cn/163znabetbw.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ciuuhcok.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163qewtcncg.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163kslvvnsj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163iikrozqh.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163nhdoajfs.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163cbregcnz.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cmfkeqjd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163hkvigcui.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lgkaxhqp.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163hxfyrzgc.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163osalgilb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163eulcbpsz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163annplolb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163hjzixanj.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163lbjgxkhl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163mkumhsds.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163chsbvcrx.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163uhjndtsi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ceclmkzz.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163uxkeeuyb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163gjsvphpt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163regijoew.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163lnpjcbcu.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163cozafgdk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163uwjvonvs.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zmedazyz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163bscdvxqa.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163udocztej.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163nxbfvzro.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kbpvpeht.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163bqgzwepv.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163stdhloao.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163leabnpcx.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163hxonqzon.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163nbaqspgb.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163iinaengs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xbshrqzl.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163pwxhrrqv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163aljcvqrx.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163fvxlnhwx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ignlsbeq.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163nruilphy.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163fqqcchsm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cnxaosdy.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163mpkxvtiy.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163yiivlhox.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163bixmislj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163avtufuji.html

================================================================================
来源：http://www.xuanzx.com/163cdlwzobe.html

R. Bash 专题
来源：http://www.aibaodan.cn/163mcjgliwh.html

================================================================================
来源：http://www.sxryk.cn/163rvwkmjks.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163wjzzbjri.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jbsswpnp.html

set -euo pipefail
来源：http://www.xuanzx.com/163zeoqngto.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163gixguxpb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163nzdnhdvi.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ohhqdfdb.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163jeyzbcxk.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163iunifswd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163eekjgwge.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163cgosifhe.html

name="${1:-default}"
来源：http://www.xuanzx.com/163vsssgqsn.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163mteyrelc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163hdewjkci.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163hzxccwjt.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ujyhlssw.html

[R08] 数值比较
来源：http://www.sxryk.cn/163faxcswoz.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ntkmfxyj.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wfzvehli.html


<!-- 参考信息 -->