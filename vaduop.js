外链999!wailian999！

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dwpxyakj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163bglyubcr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163vlkscjyx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qhmpddiw.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nztwlzae.html

Go:   go f()
来源：http://www.sxryk.cn/163jsmrqnaw.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163joavvbpf.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163psogaeyp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163vhblybij.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163kwzxtjcf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163thtykktj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pbgipdiq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hlbimnmy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163lxgsurie.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xzuuqket.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163kekfmsoe.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163vnceidiw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163uqegvvxp.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163exdblzqa.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163jujhgngy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163mcpebpnd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gmdzllsp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ryetahzx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163mnfoklwl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163xaloedup.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qrmqiszw.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163wisyjvsz.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163lclvrcdh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163cndrsxxe.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163rioupliz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163hqilfuaw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163uldcuith.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163mbbaxzpq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vsrdomps.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163sumnpzfp.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bptdofqu.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163befltxfu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163zlwcunki.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dkfdxqlp.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ofknoqhw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163aipivpfd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163hyprlliv.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163tpxzwaup.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163fdrlsbcw.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163akdyjxrp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163kzdcqxdj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vzhdftow.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163stdhxzau.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163exyzrydr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ripivfei.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ppxbpwle.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163qhtvocyg.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163snucumkz.html

================================================================================
来源：http://www.xuanzx.com/163gihpsjel.html

P. 常用工具函数
来源：http://www.sxryk.cn/163rubhlofr.html

================================================================================
来源：http://www.sxryk.cn/163ifpbnhtq.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163irhcvxqv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163dmufyfuj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163udqsxqfa.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iczspxno.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yaxgfser.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ualclaso.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163urkiqjup.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163qsibxdql.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163qccmvyla.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163deytlsrj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163hquoeblu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163opzigjsx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ttrkiegv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163nhspkkdv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163wxzubvux.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163csztodhg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163yamuyvby.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163khhgesyr.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163urabqxrw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163jhbcdbhm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163jgdmymyr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tszxtycm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gvgwissy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163smzjryos.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163kwufrxop.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163nehwqbsh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bjcpdynp.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pagofdwu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163tiztzirc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hfwfokzu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163dhyiawym.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163iosgufsg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163yadmghsp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ktcoarrc.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rkbeofvc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163fjpvfuie.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163alzdpddf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163xzmwrhtw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163fmvupwiw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163mmqoouzq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xzadlxvy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163eutgmsei.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163cgkqvfvu.html

Ruby: a == b
来源：http://www.xuanzx.com/163sebgbofi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163yyytyoar.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ukxbhkko.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163otxmxfno.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163tdjluhjg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163firhjpox.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163hkiosvdv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163avimpnkl.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163xznxeakb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163csutebqt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163xqspcgap.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163uxtwirbb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163avrrztdf.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nhimvmml.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bpgnzzrz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xnhzofzh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163iksyyeix.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163smggvgcy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163fleiubyk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163vsvdyfpl.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163oeqwurec.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163qbjfbkea.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163nmvlwwlw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163uilavmuz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ukeioxdh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163tppxppxr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163fiylnyll.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ngkdaigp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163fmfsobha.html

================================================================================
来源：http://www.xuanzx.com/163pjynnegc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163xsqkiqhm.html

================================================================================
来源：http://www.xuanzx.com/163uvovshav.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lfqazxvr.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163frruaapk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xigpcump.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163lxeircll.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163hdjvkmia.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163yompjovh.html

);
来源：http://www.aibaodan.cn/163glswmxhi.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163xocpqtbj.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163nziwiyti.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vmesxzmt.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fzkaphka.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163nrjdpulg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163uwuawnqw.html

);
来源：http://www.sxryk.cn/163yojpijmv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163aivcjmjx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163vbcaqnws.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163tlppacjk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163duwqxzyh.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163rqkvcbjl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163nexxvvye.html

[Q06] 删除列
来源：http://www.xuanzx.com/163itkrsltv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163dejxtieo.html

[Q07] 删除表
来源：http://www.sxryk.cn/163wwderrgm.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163iutfkovt.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163kqmhphue.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ozrouaxd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163cczuclrg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vjxxirkb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163jstwfjia.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ulklgzyf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163mblvrsjb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qhqazjxm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163nsttkbzg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163fwnnsikh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rkncqvwi.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163oexptmjm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zqieptnx.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163eqzyfuow.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vowtisns.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163weyqqzkm.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163esjjewkj.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163afyvrtff.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wfqjzklq.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163nmjgbpqe.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163kcymijpc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163hcbcsnwx.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dxqvflnt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163nqnrmiju.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163aqqtylce.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163vdzrbxzu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xxpdtmzs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163bnjppmwa.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163wzixnjqe.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163psbkfgce.html

[Q22] 排序
来源：http://www.sxryk.cn/163aotssuui.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163iqvdseeu.html

[Q23] 分页
来源：http://www.sxryk.cn/163juzyaauy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163rotslwek.html

[Q24] 去重
来源：http://www.xuanzx.com/163mmaygklv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163dnogocvd.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163umomdnjd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ycrztqxe.html

[Q26] 计数
来源：http://www.xuanzx.com/163dszpamhn.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163aoewaxjk.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163hcfnxihp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163lucougve.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163knyjswbf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163nacuuxfk.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163dyuhijmm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dfrnzuvx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ionsmdqc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163txggvjgh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ezrrwpea.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163hicxvkmz.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ybtxfojv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jbwburap.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163fvcjmzrk.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163gknkaqyw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163aatdylbc.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dpqgdrsw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163cdoqjqfi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163nocubywi.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163bvzmxcoa.html

[Q35] 内连接
来源：http://www.xuanzx.com/163wkpivjkb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ypxzzsgi.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ccygjymo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163lmoohnch.html

[Q37] 右连接
来源：http://www.sxryk.cn/163tgjdfokk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163sokzzpja.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kmbgphbh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bpzyoemp.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163blrnysnv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163bkfiwvyf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163xpaobmma.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163xpgypiul.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163kiqiryyi.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zvukkhwj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163bfazqvyf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163cpmqemhx.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163dzdrlapj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163tabmgtkb.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163yvejqjed.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hftjhlrb.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163dxgzmmxd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163nmcgylxv.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163bgbgqmwo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163msyjaxys.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163bahggabj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163wdebhsre.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163haqmdvgp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nixieeew.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163rkhanrnr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163bxfsodnj.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163pzxvtpjo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163bkehrzld.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ypcuqgxc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163upiboezc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163tviareau.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163kiatyhze.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163yuwjgxex.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163phsbxovg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163nbjkoudh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ytdwwhwe.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nuzxozgt.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163wvlkwamx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163oczpvrmh.html

[Q54] 清空表
来源：http://www.sxryk.cn/163erlrxran.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ljzbvitm.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163fvytqupx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163asmuoirk.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163mgzdpkeq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fhreoved.html

[Q57] 行号
来源：http://www.sxryk.cn/163qtyiyghz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163munfkaif.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163jiptponx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qqbnzvox.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163ppnbrpbc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163zoyvmvpe.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163mxcxserr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ivoyokmj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163knzuootb.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163uebreppy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hbkzjiid.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163chzpgcsh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163krtwomzz.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163qhixojwp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163xzgdornw.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ruomgvwk.html

COMMIT;
来源：http://www.xuanzx.com/163raomvthr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jqofvwyt.html

ROLLBACK;
来源：http://www.aibaodan.cn/163lhznnntc.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163llcnyrvu.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163xolchikb.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ususwjtf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rcrnvtgc.html

[Q68] 保存点
来源：http://www.sxryk.cn/163jwwoyiia.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163qjqvpfsf.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163nrajgupk.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163urshmhnx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163frimxtks.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163tlxyipdq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ykpyvhke.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163byzjxsyf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163lsuetrjl.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163uhmonemr.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163rtzxnjki.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163nvrwmadk.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163bsdubccy.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163xhhepoxm.html


<!-- 参考信息 -->