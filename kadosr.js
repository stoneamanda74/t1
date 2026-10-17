外链999!wailian999！

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163irtxypap.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ybbiycdy.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163snukvwpe.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zqpgobdk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163bxbrkkfl.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163cjqaokag.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ylgwserp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xqrxjbxr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163hgmcpqft.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mfqfmujk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163rybxavar.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163zwzgdgqn.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163idncrwkc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mxgrqlsc.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dqtmndzy.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163uemdakap.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163dohcpfrc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163igmytams.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163pvqkgpsq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163nzblrdza.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163iqgrqzwv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mnuvlooq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wcbddrkt.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hlqxwtfm.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yngrqymb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163diboupjm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tsdukhxn.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rgozclyl.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163xkummgez.html

================================================================================
来源：http://www.xuanzx.com/163pqxozkli.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ftgrxmsf.html

================================================================================
来源：http://www.xuanzx.com/163illtuaql.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163rtcykajo.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jutnvqdc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163uvqcbnro.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ywemjyyf.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pfdgnpmn.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163xbgpcebk.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qzukkuyn.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gzjpnoar.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163xoetscwl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163lekjygfk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163dwmzqocs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pzkfvsmp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163sfhalaya.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163xslokxmh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pbotfiru.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163cpomuylk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163yhdryhkh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163swdbpcao.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rgsdcpbz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ogzrcoyp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ttkyvvxp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fffumbyg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gvkpbsyy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163wraoffbi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163kehwtuby.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163rhpcwewm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163sjqcrgxt.html

[P04] 求长度
来源：http://www.sxryk.cn/163fqheojrx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fuqrcowu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163iunvsfsm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vjponnws.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jtfvmxaa.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163jcvoapqe.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163culmadwm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jrxlmfqt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163gslnusag.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163uykbivir.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163mzkgqmgh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163oqmsgkic.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163khqjkvtv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163odpmzber.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163aettxdes.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163pvooofwr.html

Ruby: a == b
来源：http://www.aibaodan.cn/163btvdmpbw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163tlfkawai.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163sqqkqoho.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163qgjkzhyj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163drbydblv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163meiaazce.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163cmroorpj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163medvnhfk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163hywicmgi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163tcxyfopt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163pxpvufsf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ozubcodj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163lrmnzmxt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163nuozklmn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qyrnurwt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pkaancpq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163pfolwesr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163zsukqcsa.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163uhphdlvq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ngkyxdcn.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163tqlprtwi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cdjcjedr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qqbfwebc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wmbmxxog.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163zzxxdpby.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163nmtibdhj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ecoohlvf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dvjnsfhg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163osompdfz.html

================================================================================
来源：http://www.sxryk.cn/163azcfgnpp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163axcumzhp.html

================================================================================
来源：http://www.sxryk.cn/163xrwzozbw.html

[Q01] 创建表
来源：http://www.xuanzx.com/163etyfobcm.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163mpxgisqb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163uxcmvsmo.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ewlzdcia.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ncbhohkk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163hxcjjuhv.html

);
来源：http://www.sxryk.cn/163lluzycpy.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163atgwldtb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ulhtwgvz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qxcdwpvh.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163wsnixxak.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ouwlvymx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zlsfkjlt.html

);
来源：http://www.aibaodan.cn/163yzesbuev.html

[Q03] 增加列
来源：http://www.xuanzx.com/163uefjnbqf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163aycgrgdc.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ophtjrws.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163miulxeov.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163owhcgabs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163voeqbczd.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bsdkyozj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hpdmimuv.html

[Q07] 删除表
来源：http://www.sxryk.cn/163hikszykh.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163aaaavnlo.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163bfcsowoz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tsekwsky.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163mrjfpjml.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163vjrhvrlz.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163awmohjpz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163gempsfno.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ipfkzfzb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ndorvzan.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163pfhvarsu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163angshxfm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163lrrtpiww.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163jhgxopzi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163aelgngpb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163iogkolkg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163uejmvzje.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zxhqpdir.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ufjdtejb.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163soritwhe.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163sgoqcqii.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163tehdarms.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163arlxwmgx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hrjqzaio.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163bezocyrs.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mhmvhsvo.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vwhvnrfo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qslahemf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163dlhcbmjc.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163gjyzgbhn.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163pmyiiond.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ecjcyxyv.html

[Q22] 排序
来源：http://www.xuanzx.com/163ioizqsrm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163wzfsnnzn.html

[Q23] 分页
来源：http://www.xuanzx.com/163fgnlgqpi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163nhufczyl.html

[Q24] 去重
来源：http://www.aibaodan.cn/163zzjulhsx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ualbwroq.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163svbxtbha.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163wgihrqvj.html

[Q26] 计数
来源：http://www.xuanzx.com/163velhgsku.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163krsamlxm.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163iulmgafb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163hcraijev.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ppsoikqz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163hobgnapv.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rxtbcqed.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163janwmewx.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163odsqeeyy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vuivklhj.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163knecthgp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163tuobdibc.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163mmxrnkeq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xvkhdsiz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qtoykzwq.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jbongvxt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163eaaxpsdg.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lxpxohop.html

SELECT * FROM (
来源：http://www.sxryk.cn/163cdzwyyub.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ozlahhui.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163yvcafaud.html

[Q35] 内连接
来源：http://www.xuanzx.com/163kvdlckrd.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163szjrsrpf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163vrasjzyq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wptvkmlm.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ygiwgkzs.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163crthvyoh.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163qmcpuywj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163poptsicw.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163emqxnajt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qnhagcny.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163prpejwcc.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fjptumso.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163wsjbebha.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tpkbetpw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163tchouxda.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163vnzdxaly.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fulynuzo.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163qszucgpf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163gmgwtcmm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163yfficjvc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ohvveubb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fgaqjnbn.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163qxfpsfaa.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163rkyryxmh.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163edofmrkt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nlcxktab.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mzzmzpfk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gjpjniyz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163mxkblxdq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163rflthsuy.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wsfjnteg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163myogihvf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fcfxeqsj.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163jyrjtnkh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jybjacjv.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163xrvekuvp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ccwlrtsw.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163bbrqjnpf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163spuleqlr.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pusnseme.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hzjauuzc.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163svayamaf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163mlruaksd.html

[Q54] 清空表
来源：http://www.xuanzx.com/163pkiobtmy.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dtycsppe.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ddyegizz.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163jiawmzog.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pqcbqmqo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ojairizf.html

[Q57] 行号
来源：http://www.sxryk.cn/163xqersqix.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163eqqwqixr.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mchalqvg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163cwurvzls.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163hrklizdb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ymfwqggi.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163pqywuvba.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163vhdbwigr.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163qpdhbkjl.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163sucmaoyo.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163xwufvpgp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163cibbzngu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gxkrwcqe.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163xaumgyxe.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163hzooujso.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163hnylhzfe.html

COMMIT;
来源：http://www.sxryk.cn/163nomoicnw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rqsjwwno.html

ROLLBACK;
来源：http://www.sxryk.cn/163zsiduhtu.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163knbuzrlt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163acztmeck.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xsubqvjf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163cxzayboz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163tumcabhs.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ighwfttk.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163eixsiryi.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163lusxvdts.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163jwcupxwa.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163zmgofpkr.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ugkzsniy.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163xpaojtme.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163sebnfhhg.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163hakhejrk.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163sfkcclxr.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163cebkxjmc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163iekoitit.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ehthysoe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163pmtbhuza.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ysvxxbeh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163uehzhixc.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163lzhkczig.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163kykpgdpb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163lexvntcw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163hubfvfqt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163hyjpzvye.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163kqonuhkl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jzibepcc.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wwdonpcz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163amumivwn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163lfmgpdaq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ljukeapt.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163iosfbghu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vayglapl.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163weykaqam.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163tltgbcik.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163zsjpertg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163dzyzedcx.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163dvhshzmt.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163iwrpmpar.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163eeioadbl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163mszkpirq.html


<!-- 参考信息 -->