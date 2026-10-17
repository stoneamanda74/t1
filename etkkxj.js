外链999!wailian999！

[O06] 使用进程池
来源：http://www.aibaodan.cn/163swdraarr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163fbdfslbp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ufyceeba.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vxqajzzc.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ckydcnep.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163rklqecsm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xqmxsocx.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163jxoadvcx.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163xtqoktef.html

================================================================================
来源：http://www.aibaodan.cn/163otddctmv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163opovzkkd.html

================================================================================
来源：http://www.xuanzx.com/163kmzjvuuf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ogcaiznk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163jomopzve.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163lehglgre.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mkrapjqj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rwtaxvtq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163eevepfqi.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163lsxlszeo.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xkxgiaor.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ncfrfrue.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163evnulwxl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hwunsntc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163gakkscxp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163cmzrqhyn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163uwmdouwf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163almfctdv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163rdqcoujr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ikxvaqgy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163hfkzchog.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hpxtvyuw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hmtdxftv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rmcxrxws.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yjtnkfcn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nvnwifkq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lzwyvbce.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163qsddvjri.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163enborycy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163tlsfscet.html

[P04] 求长度
来源：http://www.aibaodan.cn/163kalhstey.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163opkqqyis.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163esnywjtg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vjppvgfv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rkaaxcke.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qnvpecvs.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163nqhsgleq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163labexcle.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qdcfmfny.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jjfjqkic.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163fngbgyot.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163vkikoqqw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163vtothgfw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lgdjhppn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fofldivu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163juauydrk.html

Ruby: a == b
来源：http://www.xuanzx.com/163bpoaedti.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163cwnlhnsi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163satagykm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fbgmmxdc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163dvmxnlmo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163srlcqtlj.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kpwgvbxs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163fquslfzd.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163szqsitoh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kcewxjhl.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163tntlhvxx.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163fzseniuz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163kyxphhry.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163dmgyujiy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wosysmly.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fnvvdhxk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ltcgvbhc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ggasppfg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163tftdeatj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fcczlsvu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ymeghohe.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163bikciuzw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163lzlqigac.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163uapemzms.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ctryqewq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163duhgmkos.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163roppwzay.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163wpyrtsrm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163uyriqokq.html

================================================================================
来源：http://www.sxryk.cn/163aoztjtjf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163hgphtgpf.html

================================================================================
来源：http://www.sxryk.cn/163dasbjoit.html

[Q01] 创建表
来源：http://www.xuanzx.com/163sjryeojg.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hkksunal.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163redobres.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ffmqevoj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ktsjudup.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163difmpzys.html

);
来源：http://www.sxryk.cn/163iavhqvoz.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ooednqer.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163kavojlpx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qeueyocz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163cpzequds.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xdfpejgx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163bhvlqcgs.html

);
来源：http://www.aibaodan.cn/163qedobcdc.html

[Q03] 增加列
来源：http://www.xuanzx.com/163euywmoql.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ircxfxko.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163vhsxqkpv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163bauxlidp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rfttckzy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163apkozwat.html

[Q06] 删除列
来源：http://www.xuanzx.com/163igpgmqma.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163lpyvulqh.html

[Q07] 删除表
来源：http://www.xuanzx.com/163tqihlwmf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fmqoeika.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163zzqeyzqj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163vnntojax.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163dbonrrju.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163loygdmux.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163weucbghl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ekbqpdxi.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hlsmtmdn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ljfbenjv.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163gnuzvjuv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163kzllubdt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wazbodws.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163vigxuwlz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163lluwxujm.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163friudbyf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163jlnyomyr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ebqogkgl.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163iijrurhc.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163mnsuzdyc.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163inrmzamy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163bcvxayuo.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163qzqzzaqd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cnooyslc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163sumhwpph.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xaibqdqr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zmasjsza.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cxajzkwx.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ymidpwly.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tqtfwmql.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163bkbodfhn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qxfrodxj.html

[Q22] 排序
来源：http://www.xuanzx.com/163rpbsvkrr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163wqvokwtb.html

[Q23] 分页
来源：http://www.xuanzx.com/163byoiijps.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163utgzefnu.html

[Q24] 去重
来源：http://www.sxryk.cn/163yyrdjjks.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qrusspgc.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163zrmkiyjv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163nriqjgpd.html

[Q26] 计数
来源：http://www.aibaodan.cn/163hlhxcxyw.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vloygiby.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jtyxgyem.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163nxhmwwcy.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163zlondzvq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163arzokqsz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163cyyygsrl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ffmsrrxs.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163zkvnjygo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pexyrlgp.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163chchwvqj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bhpftadv.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163wpiwypjq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163opppugij.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163slwmzuxg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163xnyvntmj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163fifdlakz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lzrbtgtz.html

SELECT * FROM (
来源：http://www.xuanzx.com/163eclcxfux.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163uwmyefbq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cqgqqsgx.html

[Q35] 内连接
来源：http://www.sxryk.cn/163yjgirqta.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163dldeifji.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ljbosiro.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163pkvbhwpk.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163nfvgxglu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163gfzowgrv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163vnhyjrgb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xyqnxspk.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163agoxcauc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163vdjbfmqv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qgnwiuww.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163apbiiuzr.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163onqblvvr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163gnbmaigo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163enbceofn.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163yfvstlyf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163nhjwiwos.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ruklntly.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163pnwpovzs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163waxufoax.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163iiqwdmrl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163wtoanihf.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163dubwcact.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163kwjvzudw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ererznzx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hprtwecn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163umfqfgqp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163paadydil.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163jrrpzlde.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163kdjdgurb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163xmjcokmg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163imesgwhk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163pjxeagkj.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163dcxjsxqv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qjnlofmx.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ntkylkiz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163sasofmtg.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163wlvpooms.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163kmmmvxhx.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ncuzoxnu.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163irwuzgak.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163iwbrqtsk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163erjznkqf.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nycqejaz.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163bufgakwg.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163tyodxfsa.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163aorasfwk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163axrhbtbj.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163rlsimugy.html

[Q57] 行号
来源：http://www.aibaodan.cn/163vmqwlswv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163liakwebh.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163sntqablq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kbqotqfx.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163wxaodycu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163kvksktxn.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163axiraqcz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ynqbfqqv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ucfnvdug.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163kiienfsz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163bmotobvc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vstorxve.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cxmnvkvx.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xpkkxujh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163zovagsor.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zhjaqvsu.html

COMMIT;
来源：http://www.sxryk.cn/163sbozxgwf.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163xilcltah.html

ROLLBACK;
来源：http://www.aibaodan.cn/163fxrdyycq.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163djkmjjsu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163cddduqjp.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163zvpcjluh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jvmmganl.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163xyorawki.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163hzifkooo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163nijhwrew.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pwkdxinn.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163crkukrhu.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163itnbolxa.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163thcnnpyq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ocinitqt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163getubhig.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163sdowcqvj.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163npyjzzdi.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163fcdfxxsy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vdnrngur.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163fwzqibuv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163krbhacqd.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163tfwrpmpy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163cexujqvo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163mvzazprq.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ehkwzdwj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163uysedwbf.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ikxriewf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163uvrvumtb.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163texdcjvh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163dhvnntvr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163awvlvize.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163sulexsbu.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163gwkkwpde.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163amphazjg.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163fwdudvdm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dmfnetoa.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163gxokktkl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163btemapep.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163qvsjtdiz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lcuxgcse.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163tuebppru.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163cwwfkioe.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163bhiqpcrs.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163pjxxjayn.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163rmzycbxn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zbmqtwxa.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163mevvjpqr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163mbtridpd.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163slhsraej.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163xzesosew.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163wybnzows.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163clyhowog.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163hhuzuhgl.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rvbwdhrq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163feitydqw.html

================================================================================
来源：http://www.aibaodan.cn/163poaifovp.html

R. Bash 专题
来源：http://www.xuanzx.com/163acntgxie.html

================================================================================
来源：http://www.sxryk.cn/163kijmxavu.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163bzhmlrvb.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163lqsczabp.html

set -euo pipefail
来源：http://www.sxryk.cn/163ybhketbu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wwynqwhd.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163cheruuxq.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163yasjbxpf.html


<!-- 参考信息 -->