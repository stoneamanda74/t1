外链999!wailian999！

[O06] 使用进程池
来源：http://www.sxryk.cn/163skssfmte.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163blwijedv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163bstvuttu.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163aahcfflg.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163duarrzgu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163crhwksxx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163rpxcazeh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163jkguojlo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ugsynjva.html

================================================================================
来源：http://www.aibaodan.cn/163pylitnjj.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163tajoratq.html

================================================================================
来源：http://www.aibaodan.cn/163ysfvickb.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163rcmuqagz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163qadzyoys.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163puulsjkz.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xiobjgqw.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xpcmixtt.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163yfdtcrwv.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163kmkpbusu.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163laazbkxo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163nfvljmme.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163thfhdxei.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163qvowvcej.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163jkzkygvs.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ussojvff.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ehinmcbk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163guajzcdr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163yyakustd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163fkbagqos.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ptklpgyx.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163tismikjq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163nkbcmklc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163bcfyfigh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jsbdoslb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hsgblawn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cfeuhhjw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163vjearzqg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ygpmekzj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uceypojg.html

[P04] 求长度
来源：http://www.sxryk.cn/163ztbcrrgg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163yewshsyc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ztnwbqga.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cvlxkioi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hegyejis.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rtcclesg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163faydltuz.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xsamdmxc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163livkdkbq.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163pizlfwoj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rjpbtoan.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163pgvxbqhn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ophmjlim.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ijugopso.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163jeamyshs.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163zeeiahwf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163uwpfdtuj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163kruxujxz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kwtzjqor.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163tttsnwni.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ajmnsnds.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163qsehfkqp.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163fznfzoig.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ixjkiaqz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163chrttwna.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163adtcbyjn.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xoqbjdmb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163lbivvboi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163lwkrxoee.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163adxgtrlm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ggxynpqn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ihyhpllr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163asvoeiyf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163qjeyojce.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163vrqggbaw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mctrdgof.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163yyxtkdan.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wpqcnvir.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ukkzpaaa.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hxdiaqhz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163elmbcmjy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163igopywcl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163dwtsztfj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zsdlhsaq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ymiwtwvt.html

================================================================================
来源：http://www.xuanzx.com/163utodusmu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163vvynxoht.html

================================================================================
来源：http://www.xuanzx.com/163xiqndnil.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jzzkqijw.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163bsfdhajx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nbthldws.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163xxdcktwr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163vauzzwvi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163onvnqffy.html

);
来源：http://www.xuanzx.com/163iifhubgf.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qaaatzcq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163tlmwuwoa.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163frmjutas.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dshcofos.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163iciasdke.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qfltvxnm.html

);
来源：http://www.xuanzx.com/163owlhqcxk.html

[Q03] 增加列
来源：http://www.sxryk.cn/163pzmglwyc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163fslctimg.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163sczainjf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ebggrrik.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qdseffxd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163fbczllaz.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vqgweapw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163psckrhmc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qbvfrckt.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163cckfeudg.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163bqqmzlzo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fwbxatea.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163plsowkca.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163vzigbqeb.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163llprnynu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163orlmfikg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163iwdkypwn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163oufoqavm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163huogkodp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163omodwsgs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163isjpbmvy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163nbjuifji.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163jzxquvui.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fzmuofbb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163kgmzhdea.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163bdtfvvzx.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163jgdevjlu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163perjxywf.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163twapnonp.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163fjifdlot.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163gfiylnhj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163rkaczuje.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hqahpnvm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tjzeevsj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163rwxlosmv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wtoavsxr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163vgyemwyz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163hshudbax.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ougknltr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163myegbjfz.html

[Q22] 排序
来源：http://www.xuanzx.com/163tyhueeod.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163goxeujfn.html

[Q23] 分页
来源：http://www.sxryk.cn/163vpmrezbw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cdwrlrfr.html

[Q24] 去重
来源：http://www.sxryk.cn/163euomysyc.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163myvtjovq.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zxzwsxtn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163crddblxm.html

[Q26] 计数
来源：http://www.sxryk.cn/163ogmuqwyg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163szubjsev.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163qgxgcptj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163gkqlcrlp.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163cqjomvuj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163mryjnvej.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163fwpdxcff.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jdayybwj.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163afollohv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163eufyyrfe.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ambdftur.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ijqystcw.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163cbatbjsp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tycyrrdp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ooufgadg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163dujsjnmc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163hxklaqne.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ubojocut.html

SELECT * FROM (
来源：http://www.sxryk.cn/163pebrkrcd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163evuhtsbi.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163beiehtai.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163meyzqzgn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163yzlnvdqx.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163gseuioyc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163xpbqxgxv.html

[Q37] 右连接
来源：http://www.xuanzx.com/163tlpuicsc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163qqhokljk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163uoooezol.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163nnbhnxoz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ecqmbrvu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163epfbsvrd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163mcaeedob.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ovosjaex.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163tfjlwkwc.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163fprlehor.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kxcpvvly.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163foglgnxg.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163rxuemkza.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bpbxmqpw.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163qpyinqpu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163eqwyehdo.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163bvysqdkd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163eblaxntg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ktfedmbf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163ytnqwwif.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bnokohxs.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pmhqvoke.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ebgckswr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jlraksfn.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163vcijmooz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163mwwfhkhf.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163hloyapsw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163emubeuxx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163pqalxrxg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163xxuepuoz.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163owtyfxij.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163jurswjyy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163suzvoolq.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163dbcuaqkl.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163qklgeoav.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pxorsybr.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163wulhoavr.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163hkkcxhua.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163azsravrr.html

[Q54] 清空表
来源：http://www.xuanzx.com/163corfppmm.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163wwbyqqdg.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163yofcxngx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163qlnowtza.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163jupjokud.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vsrnutzw.html

[Q57] 行号
来源：http://www.sxryk.cn/163nqfzgyoq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cfhnlvfd.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163nydtefgz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163joahqfdb.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ckdhkxbw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163rjosvdkd.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163xtafbygt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163pimyetpc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163niraduzf.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163hnfhoawo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163qwswrzjm.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163yezircqx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ncypcepz.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163oetmxdau.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163rwdhtxfp.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163yeytfaff.html

COMMIT;
来源：http://www.xuanzx.com/163aixwwafc.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163rxenigro.html

ROLLBACK;
来源：http://www.xuanzx.com/163fjycirij.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163jnziqvrn.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163ernjbmxe.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163emkgaxqi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163pnltrvru.html

[Q68] 保存点
来源：http://www.xuanzx.com/163enantzrx.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163khbhyxlx.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163igtszrzg.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163gfbhpzpm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163qadznifg.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163bjffaiuv.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fqoixpxk.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163gjqemlto.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163hypukwuk.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163jzldmnij.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163msipwgyk.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163ooyptqgf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163dvsuznub.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163maheabfv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163vdzaftcz.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163xdyfhuro.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ohwebhze.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163amjvfyic.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ctgucpjd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163vrvsqujb.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163lceiypzb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163nsaonnku.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163gegoftlc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jyqmklhj.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163lvylkpuc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qzszkeax.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163hisuicho.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163dkchhhjv.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163zqtmwksz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hahmxazn.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163drnzviod.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163jdsqnuuy.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xuyuajqq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163trgxugrt.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163nvrblcvi.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163vxrsgteo.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ifsbquln.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163pbkwhgxq.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163agmqumaw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163kwbyaudz.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nlepkzrg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163uomhnrvt.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163dofskwcv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163lltzzhxr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163wdmnbwoy.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163luhkzkai.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163acnszthz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163sirfmhqe.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163yaneigux.html

================================================================================
来源：http://www.aibaodan.cn/163xvhdhohy.html

R. Bash 专题
来源：http://www.aibaodan.cn/163sryjoecv.html

================================================================================
来源：http://www.sxryk.cn/163fdfjolfm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ogzthcvg.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163ivhsjpop.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zmkuuqkn.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163tvzwrnpn.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163zstdfpgg.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ohjfatic.html


<!-- 参考信息 -->