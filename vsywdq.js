外链999!wailian999！

[O06] 使用进程池
来源：http://www.sxryk.cn/163dlkfimqs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163verhkqob.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163pxartbut.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jtpuhjdm.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163awutcapl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ihmvfgnx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163atnxntna.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163jxfxbcjq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163xxgmqpne.html

================================================================================
来源：http://www.aibaodan.cn/163eqsbofce.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ebutiiyq.html

================================================================================
来源：http://www.xuanzx.com/163ffliyzxo.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163rwyzimsd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163esdpjgid.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163bfzogufk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ycsswcpp.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qsilkuhv.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163uksakcev.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163henfhikl.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163dgdahgvx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163rcxeqxdh.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163pwrfvspn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xjvlmkbl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163eaagains.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163yufvyvah.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163epgmqvca.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163dtogavjh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ethhswhx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163udshgupn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163adbxvrjv.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ecycmbmj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zzifmurx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163hkojldqu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tjizdylf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ispbvozm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163tlmvmkka.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163iejaewak.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jdxymgys.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163offawvik.html

[P04] 求长度
来源：http://www.aibaodan.cn/163euzrihyr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163dcfrwhwf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163knegdlmd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fxfmyrip.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163pudoyewg.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163hdpxxvna.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163wyxaknwf.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qcqgbjwj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xvtgichq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163vpkgdgwy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jjohcapi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zieaadsg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qzexenix.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cystzaiw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163iwgxgifn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163opbmjjpr.html

Ruby: a == b
来源：http://www.sxryk.cn/163whzsxgvu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nlltyemi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163jorupdir.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163dvuoojcj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163xeyibqiq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ziauilyt.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163gpyksvxf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163mkisftgf.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163zjmvvdxe.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163arpnxozf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qxehvoxx.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163qfrlulfa.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163fptcnmxh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qoeunbbf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mmhsjkjr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qkiwrldc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163salaaxyi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ymjoqmmg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163roqcfseb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jutnxtjp.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163uterslbo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163qlajecjy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163lyhdcxcf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163vyiltxbe.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163tidtiprq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ufkbrhmw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163oelulark.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zuctapas.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163uafvytma.html

================================================================================
来源：http://www.aibaodan.cn/163rfhrprpl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163dhjhcpos.html

================================================================================
来源：http://www.sxryk.cn/163dibltbsn.html

[Q01] 创建表
来源：http://www.xuanzx.com/163thwqwgna.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163gdzetujn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ldecrkxk.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163knhcxidg.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163exnthnwd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163exlupewn.html

);
来源：http://www.aibaodan.cn/163crbiuzox.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163pqvwdhyk.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ossrwoiu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jkbbpvqb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163mqkfdsts.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163etxgnxlc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163lwrpmjdg.html

);
来源：http://www.xuanzx.com/163stnsvjtd.html

[Q03] 增加列
来源：http://www.sxryk.cn/163vcwfgaza.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163mluagceq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tkmpirfk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163qevcknuy.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163dmalzycw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163elhqalvl.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163cbliyvir.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163yhkkdfbn.html

[Q07] 删除表
来源：http://www.xuanzx.com/163dngufsjr.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lxtzwzcs.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163kliecric.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163dirtgepv.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163skxfmzaf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163idjazqll.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163pjhorkfg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dnehqlyl.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ulgcquch.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fwovcjxh.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163pyjpqyoe.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163yvevdhuo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163kdwjlwqd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163qglipion.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163oixjooxv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163anucrgjt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fmcuzydm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163xaoeyldz.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163avnxwrmt.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163xziplugx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163mkjbmuts.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163qeroagsn.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mwyliqdh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163hptqgdyj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ljiciazf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rmarwpgi.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163defyawsq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163uqttbobm.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163gbbejgcu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ergzuyyx.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163olvcfujm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163wismnafe.html

[Q22] 排序
来源：http://www.xuanzx.com/163knrgfspk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163kzhzlyhz.html

[Q23] 分页
来源：http://www.xuanzx.com/163mjwdlaus.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qudkdkoa.html

[Q24] 去重
来源：http://www.xuanzx.com/163hpjevrhh.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163bnotfjri.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163luvzcyxf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mkmsjubs.html

[Q26] 计数
来源：http://www.xuanzx.com/163kbmuoyra.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xusvucft.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163zkfqaevl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163gcyzrsgj.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163mhdqjvhd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163kiwkclfo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wrfbeopf.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163lschakxz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163rocftxie.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163djerykpg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163pqjuypjo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163okuddlsj.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163pnpzyprt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ddunuesl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163jthjledt.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hvzapciy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qoitjuzz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163gtlfwxyh.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163vybalfsk.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163rgudrgke.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163jwgzswea.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163qbptdevq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nfqrabnx.html

[Q36] 左连接
来源：http://www.sxryk.cn/163bmyrjphw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163foexlgph.html

[Q37] 右连接
来源：http://www.sxryk.cn/163qevpqiqo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163trssnkpa.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xobhljwi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163erdxbqmm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163teqyjoqw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163aypadvqr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163qtbazjnk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163kkrjsorq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163hlnsqcal.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163raurdfym.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163mjqzxrgk.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ybpkfhfl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163dlmeyaku.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ecdpclfz.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163esnyjdmp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163bzgfidij.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zhaauyei.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163jxphjhuw.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163hlpcnxjs.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163uldufgzs.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163odzklxif.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163suxpmffd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hxerxxmw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ncmxbtkk.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tjzldrim.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163akpkgvxp.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163dyeiygae.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ydofnexu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163yeblnedc.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163gulrehya.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163xwunribr.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163ufajcztc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163efoptaxb.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163oryasynu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163epxqmvvh.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163qdkurfqg.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hfyfwfyd.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163qxykuund.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163gncohfhw.html

[Q54] 清空表
来源：http://www.xuanzx.com/163uaeyiclm.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ncagvmgy.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163ltnvhfzi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163bgxghnpc.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vqxlrhvy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163dosgzezn.html

[Q57] 行号
来源：http://www.xuanzx.com/163pntnndxt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163mzwjcqgx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163jlxvqyxw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ipcnbmph.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163fqbxenvs.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163jzkqlyji.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163oviosugn.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163byeqmslh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163lfecjotz.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163hnozetwb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lkwbpxxw.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163dmucxdgf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dvgxungp.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163amicmwje.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163wrklrgyp.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163lffwqmut.html

COMMIT;
来源：http://www.xuanzx.com/163kzizfbdm.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163fvftwxwb.html

ROLLBACK;
来源：http://www.xuanzx.com/163oittooof.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163dftqwoxr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163aeljdopl.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163dubqseno.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163zfkdgmaz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163nnavbfdo.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rbehdpdu.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163evnbderi.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163guhehdpw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163orybmgqm.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163srfopkia.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163fzinzfvp.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163kmpswcru.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163okxrdxbv.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163phnncvqs.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163smzgoylp.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ufazjffh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163shlitrsu.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163xnatmrag.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wraxjnmb.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163vsbssvyf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163eaxsgngq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163sepryyxh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163tcganbyh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bfmnchao.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163njfompwx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163blrrfiqi.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163mkvpanpz.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163abyapkxj.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163nkevzgqj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163getysosz.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163nlunbgre.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163opnsthfa.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163evpzdcfe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163zpzpfvpy.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163enmqsprq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wkhsqyec.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163etiotcmj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ptmzwtjh.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163adsyddaw.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163jphhapgf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163qpxwxlwv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163quvjdpyg.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163cazsclwj.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163syedkeqf.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163gtxozubp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zqbsdqqp.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zgvmpqng.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qfbrzfpw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163kndbwkff.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163duseyvsi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163qxjtiwss.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163fswrzpgd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163arphucqp.html

================================================================================
来源：http://www.sxryk.cn/163fdcrwnix.html

R. Bash 专题
来源：http://www.aibaodan.cn/163migzxteu.html

================================================================================
来源：http://www.sxryk.cn/163hpiglaoz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163tvsgyfmu.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163eejlpixq.html

set -euo pipefail
来源：http://www.xuanzx.com/163gbvrqdww.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163iiycijwn.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163xiaiowah.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163csjmwkfp.html


<!-- 参考信息 -->