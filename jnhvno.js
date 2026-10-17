外链999!wailian999！

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163obqyyogx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hgxspmyw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xesvgbcy.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163igjreaqr.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163qyaujucr.html

================================================================================
来源：http://www.aibaodan.cn/163fbloqyiv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ckopnrnx.html

================================================================================
来源：http://www.aibaodan.cn/163hbcoadzn.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163pnlxegpa.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163eisbizoz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163oaqrvexb.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kszappds.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nqulesib.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163igvqtwhv.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163txmvijoy.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163jpinsjho.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163nxnbmwsg.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bnuwtxjd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163eqfpkmvv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163mgbldphp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xtzokhcr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pagkxsgt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163thrbnowr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163eegacbkn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163onshjxbz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163pggiiluj.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163nzncvhuw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163clpotjvt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163tjqxhkov.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163glhlgbho.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163moebtkpw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163bkshmnpd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163cncixoxk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ybukgnhg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ratztumk.html

[P04] 求长度
来源：http://www.aibaodan.cn/163asnurrij.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163pibwtktx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163aepdrrkr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jvwsonxu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163sgyzdwbe.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fzztqqyi.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163oacpimxy.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xfcohkyz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ltfzhnap.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163kizyasop.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163nhhzqgmi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163cjhzvomg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163jcpillsy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rnmjascz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163cracdqpi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ddskqitc.html

Ruby: a == b
来源：http://www.sxryk.cn/163tcqojsiu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163matdtevm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163qmmbfkya.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163qvjdvkzj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163twxvdled.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163dvpckorm.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163cemjicjk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163fjhtshxl.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163qeutmbqb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jlvmuftx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163effbvxcb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163llxhspyl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163khjzhnqv.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rwwgzqzs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dqwxjvyy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mxnpetfb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163yqolzkaq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163lepvnsne.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dsfmjqao.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ksbwwugh.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163vephakfq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163axddxbay.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163hizhdkll.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mlqpgroc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163xqiabwek.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163plizodpb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163woupield.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163agcmguob.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qqmclfal.html

================================================================================
来源：http://www.aibaodan.cn/163qukgzwoe.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163waaarktq.html

================================================================================
来源：http://www.aibaodan.cn/163zacthhht.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qawulgqv.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163xkzkdaux.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163buxkeszi.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163rzdfjres.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qxtnezrf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xfvnzocp.html

);
来源：http://www.xuanzx.com/163sgdbcbbo.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163cjivfuzh.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qxmzqlxe.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zaikranc.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163talkkpoz.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163cyhncclm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163mzdpbiod.html

);
来源：http://www.xuanzx.com/163krdcgsto.html

[Q03] 增加列
来源：http://www.sxryk.cn/163imzfmgcl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163bvkjhcvp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tjtyaocr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163okreqhny.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163dpouyusi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ynwfxmzy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163hsfwbtni.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ishhvurm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163rccjfden.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163dgdkxglo.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163huzpqarl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163parwyqgm.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fourmedc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163xdtsqzgv.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xqbnhbex.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xbgetiqf.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163pvceaull.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163nzvbgxht.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163wrzokrey.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zrijdfrh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163mqnfuxnu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163bacwerqf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rxipkmaq.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163fgovndbe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ipuhjjcw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wjasbegu.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163rvczgeof.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163tszfgmmr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163awlvywvj.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163gzdmnawy.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163jmefnmrq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163zzmmzmod.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163tcnjbslj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163lhhjzbfu.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163pfqkozna.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163mbmkbgkm.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cfeevjoo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163mxkohfge.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vkczkfiv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163kczkseej.html

[Q22] 排序
来源：http://www.xuanzx.com/163xvvzngcn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rcncamid.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ninbbxsm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ccsasxcv.html

[Q24] 去重
来源：http://www.sxryk.cn/163rzsvjkgy.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163tpdlagqc.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163jqynrcrc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ihfqxbtr.html

[Q26] 计数
来源：http://www.aibaodan.cn/163vhjcufnr.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163lwjzykgg.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163pjjwxluk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163ukzopoxg.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163fymrxfzo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fboyhfmq.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163kconjskx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163qzjcjpfx.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163tswpdzao.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163sqrpyavd.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163iwvtzqzl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163pbhiohxs.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ekdzksfx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nplqabiy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163dmutxhrk.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163jmijzvpn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163gqexnpty.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163czsmlskg.html

SELECT * FROM (
来源：http://www.xuanzx.com/163gbysehbv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163jyefrbad.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163fthvkeli.html

[Q35] 内连接
来源：http://www.sxryk.cn/163jvtqatce.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pfpqeoul.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fhxjpdkr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mbeyhtue.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163drgvadmo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163mgmzsoqz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163sakdanih.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163wgriadbd.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163rujggpzm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ytcjfntd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163qbmcawhq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vbcxgjeq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163wfwbijkw.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163qwaagugz.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163yhjcbqtx.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163asrttrjc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163uetxbmxx.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163brtkzpxc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163llugdexj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cumavyru.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163ldkfqvhi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163beqxpiup.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163vbcbqodb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163luiqrzau.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ebnriarc.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kfkofxvm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163rblehqlm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163cfaxrvne.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163htltzwdj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163rgwjakqh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163xyxdjveu.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163zgykiiuk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fyoijehn.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163nesdxrtv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163xryaskwe.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ffatbqed.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163grftwjjv.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163inagwowj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163dmzdtwma.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ijfqojnn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163jcvfwory.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ikkjmbmv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ykwparyr.html

[Q54] 清空表
来源：http://www.xuanzx.com/163fyeosxar.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163pipbxmmx.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163imotbldz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163jdyybdpz.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163mxxtooba.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163qsflwizs.html

[Q57] 行号
来源：http://www.xuanzx.com/163smkixrjq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163pezrfbak.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163fgofqwsg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163jqksivvd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ynsglbvo.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163sfdvgmqp.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ptbnropd.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163qrdukfxb.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163twbhuqqk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163itolpeta.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163uccrdvoc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pedgprrz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kfbbdrsw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fcgwdrum.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163lewleiey.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163tqojlxua.html

COMMIT;
来源：http://www.sxryk.cn/163dectlgkm.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163mjuxhspf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163yvwqxpdl.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ttgaints.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163bkjgnatp.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ijahxncc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zndugijv.html

[Q68] 保存点
来源：http://www.xuanzx.com/163nskkstde.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163tfdjtzsz.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163dzawmbju.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163uvqayqyz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163qjvobnhb.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163cwblnenv.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163nhacxpul.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163pyqvnpeu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163vpaohhnw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163eimiaqmv.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163sjuoicvc.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163uhlinxte.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163epxivcmi.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163zkvhnwyq.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163hrmahzgb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163duoqevxo.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163hgotnhkd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163bizcitcc.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163becqytaf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163fmrbdogo.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ahejkdvg.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163egacxjvh.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163uzwlzzvp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163cntnsvnb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163uozuotxe.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163riowjrrc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zninheaf.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vharchry.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163olkoydyh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163nmhhrdsw.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163yjpvetdv.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163elfaleqw.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xxhjpsdq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ghsyoned.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163aqcgkdla.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163qpkvlkae.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ehvshize.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163agvwpsyb.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163zkdmenid.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163opzpqlel.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163puyitftr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163nakpxdbj.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163hfeinhuo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163nzijpyag.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163uxoujlmy.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163zdncufto.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163imydlrkb.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163knoxpdcq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163zqbeowgs.html

================================================================================
来源：http://www.sxryk.cn/163icvxnahh.html

R. Bash 专题
来源：http://www.sxryk.cn/163fbrwvxbj.html

================================================================================
来源：http://www.aibaodan.cn/163mtecjbvp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163vbjxohmq.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163jiwkqkbl.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zvamjgls.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163lqqaqkxq.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163drlyufzg.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163tqiedsox.html

readonly PI=3.14
来源：http://www.sxryk.cn/163cnfumozr.html

[R04] 位置参数
来源：http://www.sxryk.cn/163zhjhwgmg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163sjdjbgvp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163agqtorga.html


<!-- 参考信息 -->