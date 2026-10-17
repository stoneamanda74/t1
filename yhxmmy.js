外链999!wailian999！

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ireiuakp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qsrmbihv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163sedatlmi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163njxxtaht.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163gjlbvsms.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ltsvzzbl.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163apcniozp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163tllmgxte.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163xghkyawf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xqxistdi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163senstcop.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163nlsauxor.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163tlbofwop.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163mydujdyl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ejebagcc.html

[P04] 求长度
来源：http://www.aibaodan.cn/163uyqgewen.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163qimzkjzz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163culgsuok.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vqvxlymh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bdchzvfo.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163jyxlbudk.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163pvxngkdn.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163nmxgvubn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163unnkiurz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rhfxqysd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ccjvfroy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jwasxens.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163jjjnomas.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lzoqpjxb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163eapimgcz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163bufsynab.html

Ruby: a == b
来源：http://www.xuanzx.com/163egkrufay.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163engjcwqr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wfnjemul.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163npdwhefx.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163mwmrdqwf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163caizbiji.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163dsgsttdg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bwodpjsw.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163closjjsc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163uvhpanrz.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163npcqzzme.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ljdxqwhi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163tpxrupfe.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163joxmilqp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163owaeaxup.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wdonjufw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163suhwplty.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gwqiyojm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163bytbvmlq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mvhccjec.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163gmlvsjdu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xekecchh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163fuxekilj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163orlymcei.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163iimpiiaw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163eoqjqnvx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163dcwhnant.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163daxhyyzk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163liahpssj.html

================================================================================
来源：http://www.sxryk.cn/163wfkfehgi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163vbhxcktp.html

================================================================================
来源：http://www.sxryk.cn/163rwlgfxix.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kkpdampa.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163iqecayny.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zjfwrshe.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ghlqcgoc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163inxhrxtn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163qknsbivu.html

);
来源：http://www.sxryk.cn/163kymghiiz.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163qckogbjh.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163imbxalro.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163oxhnxnre.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163smodddnf.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163btgvcmwm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163pbtghjbi.html

);
来源：http://www.xuanzx.com/163xdfuaxbc.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163lwqgoldx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163pzqdxjur.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163yrzgnzzk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163jojexayv.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163tdcilhhg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ynsfvxou.html

[Q06] 删除列
来源：http://www.xuanzx.com/163tbkhewdy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163nudvizmp.html

[Q07] 删除表
来源：http://www.xuanzx.com/163xmnerbpq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163bsirsbfh.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ystfgkka.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163buerpwej.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ecpacysl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163aqomzxxb.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163kamaohgo.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ibohhmpt.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ufesotqk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163efhnjmhn.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163vhxmtuta.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163gbwrpmtn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163rgwrbfxu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ljbhrlpr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xykfhqkp.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163kfsdansv.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163vdrlfnjz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163eigfbydm.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dncoghlh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163exespdey.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163kdtjunba.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163sbwgbpdg.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jygaseut.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163xfbpttfm.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ytnuvkny.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163lhtaokla.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wpvrfiqs.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xtyrgbmz.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163gkvajvui.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jjxznycp.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163pitoqoml.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163iulppmli.html

[Q22] 排序
来源：http://www.xuanzx.com/163jgqmdytx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163rgrgassq.html

[Q23] 分页
来源：http://www.sxryk.cn/163qziuzdaa.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163szfivdia.html

[Q24] 去重
来源：http://www.xuanzx.com/163fpuyygax.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qjltgrra.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163aaezsndn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163xdozqisp.html

[Q26] 计数
来源：http://www.xuanzx.com/163gqdyvszd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163nhtdtvtz.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163swvgqlam.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163mtnkefol.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163gidfmxbu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jvmcxsff.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163njeuvkxz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163upsonrwo.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163emcyyeug.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zfgzehrn.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163uxxmhqhx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ntikaziu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163eckbmkdx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dhsesbaa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163orrysuwa.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163draivkdn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163dqxlmqeq.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163kluggsew.html

SELECT * FROM (
来源：http://www.xuanzx.com/163acipohcp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ktifhfln.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163myrbylio.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dwvghecp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163etefheoj.html

[Q36] 左连接
来源：http://www.sxryk.cn/163kshrhaqo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wfhelonz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163iqwteiml.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qsmzgduk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163tyjvsven.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163hjucejqm.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163mkzmsjmf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163zcmklglt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163lqvmylib.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163lewaglfw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ftgicyjv.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163cvudscdl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163szynajgj.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qsvxhrtw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163empeaepa.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163swtgbysq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163dlwcuemh.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163kyjcwexn.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163dhjshpwk.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163wbcmyeqh.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163rzmchbyb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163tsrbmbki.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163vfawlmkr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dzoosfig.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163vozituaz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163elsfjnjh.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163zguuvkcc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163wkrvfipc.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163rlqajaoj.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163bzlvubxo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pfnfuedm.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163tlkshrqe.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163aukqlbfb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qvsgjvwn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163otzaxmvt.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163iwlsndop.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ocearoev.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163wnytqgzz.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163uhbxasoh.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ocqamtgu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163bifgdvje.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163gcithvqu.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163crfyqnjx.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163tnosnqvq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wbqnirex.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163awwqwvwi.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163oiohlsyc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163yqmfmfma.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163lgvjbzxx.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wcqlhris.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tbfqrmxy.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163injrjswu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163xkcfguog.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163mrphjpei.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163azwfalta.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163kjqruzzn.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163laldgorc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163mdslahsp.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163mscqhypu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163gjqwgxvn.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gonljedw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163augugevx.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163tctajwfo.html

COMMIT;
来源：http://www.xuanzx.com/163scumqxye.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163uwoasyli.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fcwlomxy.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163umrfvaqc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163hhvinxnx.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163eyrrafuz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163qwcjqpjn.html

[Q68] 保存点
来源：http://www.xuanzx.com/163rkaszetv.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mdriucip.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163rziaptiz.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163qlovzyiu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163kqvzvple.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163lvucclfc.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ohoxlvou.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163zrsapcmq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163diifzdbp.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163czzyescn.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163pgrdoqlb.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163pxjyuxil.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163auhhlyhn.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163txvcafue.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ljiadmdl.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163fcckkngd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163kehgyijn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163nawwqafi.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163nxfikyyu.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jrgifwef.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163tvrquidm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163owtxqqqf.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163nnuywdkn.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163zpinuoso.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ythewpcj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163tidubsny.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xlnefqcz.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ktsbobex.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163irmqvqis.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163lraoiskm.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163zyeqxtvf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163pzhaxojg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163psbcksiy.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163hajgrqhy.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163uaxyrdrv.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163dscydaxu.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163rczfpjif.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163upigbnbv.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qmbgvpca.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163evilmjmn.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163oyzspkfc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rdnjgxlk.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163oorocled.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163huodqjps.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163rqszxmoh.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163gnqizgla.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163eylxiuir.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163vnabdwfr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163aoahabic.html

================================================================================
来源：http://www.xuanzx.com/163ysfsjnwj.html

R. Bash 专题
来源：http://www.sxryk.cn/163oawstiki.html

================================================================================
来源：http://www.xuanzx.com/163fpicpgwa.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163wtmcnjzo.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163tigornvx.html

set -euo pipefail
来源：http://www.xuanzx.com/163zjdfseyb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163yitjbdhb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163beoytgyb.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163sxndmopk.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163nwuoprtw.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ojneeydm.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163fvpebyma.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163vnkvjcmd.html

name="${1:-default}"
来源：http://www.xuanzx.com/163sycviutt.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163eraddjld.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163novfomhu.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163vggtysgx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163amuxhouw.html

[R08] 数值比较
来源：http://www.sxryk.cn/163khvntucu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163isipspal.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163morokthl.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163xubwsxdk.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163hvlvwazg.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163mjwfcrsn.html

[R11] case 多分支
来源：http://www.xuanzx.com/163opukyeaz.html

case "$1" in
来源：http://www.sxryk.cn/163ezlnnlbf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163zvizgvmh.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163gmlviyvn.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ioceoihw.html

esac
来源：http://www.xuanzx.com/163ucdgqkqn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163juuessjp.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163ycnxufmv.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163qkqmiccb.html


<!-- 参考信息 -->