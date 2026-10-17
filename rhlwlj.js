外链999!wailian999！

[O06] 使用进程池
来源：http://www.aibaodan.cn/163yypwairj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hgnyoyis.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163hiklsutg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163otehcizy.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ipqfkhzq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tjvcfqis.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163rneqwfwo.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163xdqabpub.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163embvvcbe.html

================================================================================
来源：http://www.sxryk.cn/163dplkgmyb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163fkwjbhgo.html

================================================================================
来源：http://www.xuanzx.com/163ojjngbrw.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xstqcbgh.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163jvjfkhha.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163uljehtaa.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zxnydcvj.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163htsfhfkq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163hzqvtsup.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lajaglrm.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ukxauaqw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163pkavhnhi.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163avnglagn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163knmhuzpx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163sfbqbnvc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ojjqckdr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163egjahbre.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163jpkturss.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163nrqnuize.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qcdgbeza.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163sqiptkwa.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163vnqpxith.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163tpbhvfdn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163havfbqqh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fyjpkpwz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163irsnzeyk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163afjkhtar.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zqhkpueu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163kpwxipwe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163gqrpzdsa.html

[P04] 求长度
来源：http://www.aibaodan.cn/163dftoaeym.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163hffqawls.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yxhnxriy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163swyscond.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wmdttbjh.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fylhnhlm.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163oekiucyi.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163anhwbtuc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dflrlvuv.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ohyyafpf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163nkrhqmsf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jxabzdks.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163rnodbdtn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sjmvbqxd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163gkzvbpuk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163fwrxkloc.html

Ruby: a == b
来源：http://www.xuanzx.com/163jqunhwbr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163arzkimyn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163rawagipn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163zjfecwgn.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163gqiixfem.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163wfcxjzyp.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cktoqeon.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163dnrzacvk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163xqztgkhf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163idxijzpi.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163doqvssvm.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163uykfnrrh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163maxzhuqt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163nbthrclk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163imkzlinm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bhvuwmuf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163wgvivpsd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163feefpysu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rzzvfmhl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163nirnhcjg.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163udqrtwhd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163mkqidfyt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163tmafdfbp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ucvqhuyu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163yahxhnuw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fhcwzzhd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jpgauklf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163bgpvrbjq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163hagxcyvt.html

================================================================================
来源：http://www.aibaodan.cn/163ixfmngwd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qbaqeecm.html

================================================================================
来源：http://www.aibaodan.cn/163uzwwyrpv.html

[Q01] 创建表
来源：http://www.xuanzx.com/163dljrfqcr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vwwchhzh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wezmkpsl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163gqgyhpnp.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163zsfbncog.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163hurlznmf.html

);
来源：http://www.aibaodan.cn/163wqxhohgy.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zubznaaq.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ckvsnvkr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163oneqdtxa.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163pdhsjmcx.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xjlghwln.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wclphcip.html

);
来源：http://www.sxryk.cn/163kfohxmkw.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hxpatgsa.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163smpatxln.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163frgmjqst.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xejhpror.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163crxriigs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163saogdcgf.html

[Q06] 删除列
来源：http://www.xuanzx.com/163etonzvni.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163eihbxjet.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163owimrrzo.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xlnmsylm.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ascfgkky.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rjrltlvv.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163crfynksd.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163gxecnzit.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163oaarvgyn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163sgjziasq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163nzmmtvmi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163cogplzuc.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ghqkcwtc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163keoyozom.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163bsjnsjnj.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163iigvaujd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163loybvppf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163djkfawlm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163pepsityd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163pmbsakag.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163yvpmdrma.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163jucjaghx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163iltdwkew.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163trwakqnh.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163htkcvjjg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163xxoczirt.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ghslihnd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163wkkvfmom.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hrlttudx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163obvkuuor.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163wtziguet.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163zguaeglp.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163uptqbeqa.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163hyaqgzlf.html

[Q22] 排序
来源：http://www.sxryk.cn/163hwkbzyow.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163evmhrliu.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ermagwnr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163dmckbdva.html

[Q24] 去重
来源：http://www.sxryk.cn/163vqtnqnjp.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163dxqmzhqv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163bhvkzqhx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163yjllgcla.html

[Q26] 计数
来源：http://www.xuanzx.com/163mxljrijy.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163nifnthte.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gwlkdsex.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163gaxkqrpg.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dvxelnrs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163dwjfuiva.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ccfwzdlt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163kwlhkvaz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ayntnpgs.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ixsoochq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163evgbburl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163zevvvtzo.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163aslgqeti.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ltztjsgb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163paoyrfjr.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163prkihtyz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ufvmcumh.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163eoctautr.html

SELECT * FROM (
来源：http://www.sxryk.cn/163fdxheoll.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163eyhezblp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163txywdbvc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163tkdodqar.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qaqspxfq.html

[Q36] 左连接
来源：http://www.sxryk.cn/163rfxqqlme.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rflwmluu.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163dhguiavf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163myektodb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163eczdesri.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163avorytbs.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163krnlpogg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163iqtthtvq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163fjncpemx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163npepjitn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163jmzyvdbd.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163vzwmfbtl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163vmomezwa.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163dhxasrpz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ygrfwvwy.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163eazwmpym.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163jcnuhbbc.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163dwanmhnt.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wiscznfv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163vmoxnrmh.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163meyhjqfl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163kzzrdafr.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ksabqlby.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ujiiwwmi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ixknewho.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ewwnholw.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163lnetpmfr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163mtqmmzua.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163hiisrmgk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163xoezjuea.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xijaquhg.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163cnzemuxb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ljigajkw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163mxphfhsy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ntwdagis.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163moeydgpe.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163sgriwdxb.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163oaebludk.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163varytvde.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163onalqtoc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163dfplwbbn.html

[Q54] 清空表
来源：http://www.xuanzx.com/163zmpfrvld.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163rbnogytz.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163rtyvqnkk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163crpxfyem.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163loaquxxt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163kxihfnfk.html

[Q57] 行号
来源：http://www.xuanzx.com/163jvlkbjvb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163utjgluhu.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163yxknjowe.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xymwihsy.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163bniesasn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163gycalriw.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163oxxfeneu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rcyihacm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163uhzgjrvj.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ptqnctjp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ehjhvegt.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163moztoxau.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ddtgdlbu.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163zhzgozxk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ffsbgeot.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163wyzzjicw.html

COMMIT;
来源：http://www.xuanzx.com/163mvlsdemk.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163sfrpygkg.html

ROLLBACK;
来源：http://www.aibaodan.cn/163rqhiourl.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163isbvqxpd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163iyvejdwm.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163jttghdhe.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163lthweole.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163rysqjorv.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163twrtrgby.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163uungaoqx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163uugphcxu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163iyllqtwg.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bwygsnen.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163xvrsynpc.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163kderyswj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163nzouchxz.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lyauclty.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163dyahmkno.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wfxacqmz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163iqjpdfba.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163aoxhvzvr.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163sxqlwxqp.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163vujjibho.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163lbncidqn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163lcdsvzmc.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163dlcbqumx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163wlmtwotl.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163afkhqclf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163pypvvhvo.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163jevdaloz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163inimhulc.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163qdsrmuai.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zsbsmnir.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163flwpjxqc.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163uqlijkpa.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163gvjgzgxk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163mxgjjhkw.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163nlualflk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163sczzzoqh.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163vjobbhyx.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163bbaiijal.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ncjmnvrl.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163gfraapvu.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ukccxasm.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nbgpioqx.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163hgbjnxdg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163igvyturg.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ihjayvnt.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163bozbicdz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163giibmgui.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qqzldozd.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163lfejlkpd.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163vrtrszsn.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163dtvngcui.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163pxwxscjz.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163fxkfarpf.html

================================================================================
来源：http://www.xuanzx.com/163litpkcwa.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fhxfkkbi.html

================================================================================
来源：http://www.xuanzx.com/163lsvetmga.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163jwqkkkwt.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163mzkdvdxr.html

set -euo pipefail
来源：http://www.xuanzx.com/163veprmjuc.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163kpzbreym.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163aebnumnm.html

[R03] 只读变量
来源：http://www.xuanzx.com/163zohtinpy.html


<!-- 参考信息 -->