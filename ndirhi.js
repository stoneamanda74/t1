外链999!wailian999！

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163nxmflfoj.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163tnxhsslh.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ndudtzsu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163luzkiuhz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163euatmfwl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uauzfovh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163gbbqkjsq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rrcdmawk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163cdtosmqm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163wseamwkt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dohuxhiq.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163jziuopti.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163etcowiua.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163irbviovc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163fmytagoy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xjsqfsrh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163sqjxzxyh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163rsedoqko.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163vkbjvjsf.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163lcztcxae.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163cgjfptlv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rjdfrxpq.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lcdyycbk.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163crtduhsu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qjgmiico.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163uapokybt.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ofbehvoz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163txfhecjd.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fpptudpq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163pvueuvmm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163yfmgckrl.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ogdxnoyh.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163iimzjgfm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163xlxokukv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163mwanhdvb.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163dfhrkojm.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ofjzqhdc.html

================================================================================
来源：http://www.sxryk.cn/163qbbilqfg.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163bscimgzv.html

================================================================================
来源：http://www.aibaodan.cn/163dtztbjll.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163nmckyrtq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163xqikjhlf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163uwlhqsla.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mgqbwrhb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kmrlogun.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163svquakgc.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lizlomyf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163qpxarcbb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163nirzsbgy.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163uqbgcwlf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163rukmvalm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ikechgqx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gwsqrijl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163wmlvowwu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163nfxpksqj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163dpnvmngy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qtvnjqcp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163swklzyvp.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163btwznvye.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163pbskrjnr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163dmlmitxi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pafuvasf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163diccaxbt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163mxsdzxac.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163twnejlqx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163oholvqjk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163qrhhdwxb.html

[P04] 求长度
来源：http://www.aibaodan.cn/163qeqdidnt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163pshpaymq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pnnxaaul.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ialhhrsa.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ysakxbhk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ovigvmxs.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lykxjuar.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163rcvgcbex.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qpsvfhbb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mtgiusxl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163nziuysjq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163jmhixgmb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163hqwdofru.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163emvufzqr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163wjmjdzme.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163dmakbtll.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zwvjgytg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163arqwbugf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ttymqzmd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163uofuvehz.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163nuewcchj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bmjktazj.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163jhuxczgs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163iyoyimji.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tygjjynn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ybyztooq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163eokhxlej.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ueyfsxvx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ubtjeqrh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ncvpuocn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ofgmxplr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163srtugaiu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ocilhgsm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163elkkmgmd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163kgzixvuk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163glxktlre.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163kbuzezje.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xvkmktqp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gvobavvl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163konfaswz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163bbdstsek.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163lcolzwhd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163hlugzmap.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ohrerugg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163lggzgjvj.html

================================================================================
来源：http://www.sxryk.cn/163dwxtrcgj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163rxizjgnf.html

================================================================================
来源：http://www.sxryk.cn/163evgrecxi.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163twnqhsux.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163tijasdjj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163vnxngniq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fjzeojrn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163hkoahodr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163pshtxysi.html

);
来源：http://www.sxryk.cn/163cybflfqm.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163axyzcidy.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fwygjqhr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bmrqtfrb.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wutmsmcx.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163nuucxdpk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163eqxfwapt.html

);
来源：http://www.xuanzx.com/163zejkmrfc.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163qmjxvejs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163gqzsdagw.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163nbhkuqob.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163miwxgewd.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wevqsqyq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163uvtmrath.html

[Q06] 删除列
来源：http://www.xuanzx.com/163vgcwtsgc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ndlrwneo.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vzibxqko.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qfbkwtsd.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163grzcniwn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163azfuufru.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ygrwhjoc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163nbpnzpss.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ridatdsa.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163tddawfeq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ytcipdwe.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163podstjbj.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163kkbsmelw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163igtvkvxr.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163gwbftukp.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163wmqegabf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ksnywnca.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vnbscpac.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ystjugbw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163efjyaixn.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163uhxcdayw.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kmrtixyk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163nsoqwpbc.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163kljnytyv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163oggqdkfy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163fqzmhnlz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163nclaqbsr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163yfqavssl.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163olvehnrb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163otnbmxxp.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163thiuyhmu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163zgzqmjgn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163erwyqijl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163izgnxkku.html

[Q22] 排序
来源：http://www.xuanzx.com/163hbvvnvcs.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ghrbzcvr.html

[Q23] 分页
来源：http://www.xuanzx.com/163isjveolj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163hdgifibl.html

[Q24] 去重
来源：http://www.sxryk.cn/163mvfgbazd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vvfcimim.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ehctxyji.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163eqgurnxq.html

[Q26] 计数
来源：http://www.sxryk.cn/163bemggpvt.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wylkrkfh.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163igxnfclu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163dehzsxwi.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163pjmwjgeb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163qbraqryk.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163fwiffxjc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163wtrgnlld.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ibwqfhag.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rvsyqlai.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163rluaxgqr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163madqtsii.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163piwetmuc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163jtmjehlo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163oazbpzoc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163jgujbsej.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163hnqbequb.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163jtcqoknt.html

SELECT * FROM (
来源：http://www.sxryk.cn/163vrndiuvc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163bcmlyiav.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nkualdau.html

[Q35] 内连接
来源：http://www.sxryk.cn/163zdiamrbk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qhfgzjce.html

[Q36] 左连接
来源：http://www.xuanzx.com/163evfjbbzk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163knqougoa.html

[Q37] 右连接
来源：http://www.sxryk.cn/163kedgcnvz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163dfhfquhf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163upeghtob.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163qeoalzku.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163joydcioi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163fxowoueg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163wgecduwl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163bybpyopv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163syttqdem.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163efywfhfx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gquwvcft.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ikvzvofd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163cdmdiyid.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163wnudbcwq.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163jwsyimvk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163vcewyqnb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163bqbcsoko.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163wspvpcai.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163zbxeszpt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163sllnwccn.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163fapvoipl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pepgcsna.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ycdgsoiy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kltvlztx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163uoejfkry.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jjllyudq.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163ocatdquz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ejirtqnu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163zmvnxlhw.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163qdivwupb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ugcbwxga.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163dzivwdju.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163hgifkmqs.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163yffzjexs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163vkxvvrug.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ompjgndf.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163yzrlipjo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163eadpbmbc.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163iesncseg.html

[Q54] 清空表
来源：http://www.sxryk.cn/163iefyjnqv.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ekxlxiit.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163gndgiepf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163frpszzvd.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163vqbfmrkk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163xyxeuyqa.html

[Q57] 行号
来源：http://www.aibaodan.cn/163blgbsdpt.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163bdzagoxb.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163qcghjnpf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163xwngotsj.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ibyjnchi.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bxvwetty.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xbabwkqi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163upcelnee.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163aralacjk.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163yijgbuql.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163yocjqinf.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163nlpsykwe.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tlaohywf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ibopnhgv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163pqeexdqu.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ttwslqbl.html

COMMIT;
来源：http://www.aibaodan.cn/163llwvuiwn.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hdfdnstl.html

ROLLBACK;
来源：http://www.aibaodan.cn/163afoozrfl.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fjzrdnjq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163xczwojuw.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163xajudzjw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163weweqxgk.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163fazqsusz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163lzcnynpc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163osqpkihb.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163zkircizg.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163nynnstzk.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163cbxzazab.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163xoczuxam.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163lhhjwhru.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163tvejmiil.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163asxlfnyb.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163eriqoxxb.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163yanethqj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rynkuimv.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hpjtpuyt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163mbgwtwtx.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163grersgnb.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163iwrvlzxs.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hngdafik.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163wiahtqsh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163afgoehjm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163vtxqhgab.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163zvrmrqyu.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163nxxpqmmg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163yqnwzvnd.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ogltixkl.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jpdnrkbq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163hoqnbpio.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163ljykxjho.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163udiqymde.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hgfcwldm.html


<!-- 参考信息 -->