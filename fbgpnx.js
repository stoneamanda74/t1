外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ubdfjzbm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163yknbjqdo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ptkxkvgb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163itnnnxun.html

================================================================================
来源：http://www.sxryk.cn/163yuytwvjf.html

O. 并发与异步
来源：http://www.xuanzx.com/163idrywsag.html

================================================================================
来源：http://www.sxryk.cn/163uvyhhaxk.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xlnrstoi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163luzdelkh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163aretpyrs.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ougjlcho.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163izsbewly.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ctwcieww.html

Go:   go f()
来源：http://www.xuanzx.com/163piigmbko.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163uaiodhlh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fvwdxtnm.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qbvsgmzp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163qtesrfgf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vdzneyms.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bghmdubw.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163cexbyjux.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163nbzfklxz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163wrpknzko.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163fbmsskki.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zfywiwem.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163tzsclyzo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zamxqpnn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xkrfwoxs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163otsosyax.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bpfijsuv.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163tivdlrew.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163fwfhuqfy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dtrdxezn.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163sanhohoe.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vhiwxmei.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ghvzugfi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163qlvxxsvu.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163hzpfyvbd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ledlwvec.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gjvowkbw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yovpvaxn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163pbkqgvoj.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163yxgglkcn.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163kvvbzhhx.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163kmnawixc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vifnsowp.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dmujeuqd.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163krpbunbb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163dqgemuqh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ykaemdhs.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163srvegkff.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nyojongr.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jxihfsnp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163hdkkwjxu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163qrlrfjbj.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nxffnlzm.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qitkuqji.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gbxjoqgr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xtgtwanh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163tmywzspr.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bjshskot.html

================================================================================
来源：http://www.aibaodan.cn/163ognhqjkp.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zsnegqsb.html

================================================================================
来源：http://www.sxryk.cn/163ojymkqvf.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xbiwedmb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gtdqniwi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163bfzwnvcw.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wcqccrbt.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zzksngcz.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163polbfcmh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163bqaeaukq.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cbujswuj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163mdyhbtvb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163thutklqj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163qwqsggnm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kmepvsuh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163tkmhszkh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163grgzdwdu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163butrbauk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wtmaosxl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163hyvqgddx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163exbymrii.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163feonbufu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163jxugbega.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vapwkbcl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cpolorjn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163oaqlxxks.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163gnpmqdqg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163reougdvw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163siaikuub.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163hpfbokef.html

[P04] 求长度
来源：http://www.sxryk.cn/163emnmhgnv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163yuiuoixb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ybtadhec.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bamyofeb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rmfkqehw.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fsucvjre.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163nnljbmpy.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163qxeaqaaa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fcklczfn.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163mdgowsgr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163eqffuqqu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163xzgixata.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xuorsrje.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163lvhqsegs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mrlphvft.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163fulspugh.html

Ruby: a == b
来源：http://www.xuanzx.com/163uuqlnhmc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163zrhoztpc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163qzyollql.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163iokdksnj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163grgsarno.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vbucredx.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163pqrcjvuw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163dlirfqkd.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163eerkpfch.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pufmmyzb.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163wocitsck.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163jmjpvbtz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163zxmohgnc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163oemifjot.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bkbygist.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xftfpghc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163vsmjotno.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163eesbgvvw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163rxfizwuu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ambmqxju.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163gxqiilqi.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163rtmlpcrz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163bdwgkged.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163sfwwyzkl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ajrgyhmt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fqilypnd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hbmmamvh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163btqeknps.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163gkflraxd.html

================================================================================
来源：http://www.sxryk.cn/163qvjomkqf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163oqobemtr.html

================================================================================
来源：http://www.sxryk.cn/163nyjgxzks.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163lcerandx.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163kkizeumh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ibzgswss.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163yyjrnmpq.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163xttqopqb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cdfgwmvs.html

);
来源：http://www.sxryk.cn/163fapsuvht.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163nhngpesq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163lpsxphjr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rkbhfoyj.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163mnxtnoxl.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163syxwjxsm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163btpgaver.html

);
来源：http://www.aibaodan.cn/163ztmbazka.html

[Q03] 增加列
来源：http://www.sxryk.cn/163czozaint.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163yuvayocg.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163heabfbgk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ugbahuqw.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163sykxgpfx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163tazuzsfo.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163lcfsvwho.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163mxyvzwsb.html

[Q07] 删除表
来源：http://www.sxryk.cn/163oadofvoy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163jqiltjlj.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163knrfbfvd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163pijzdige.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163bipfujjy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163nbsllhuk.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163zveaflei.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163kgygyqfk.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163xbqnwolo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tnxaobej.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163dfsnqknv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163qsradryh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dlngjrzx.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163vxzchwcm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fqujhzhr.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163sfthgtlf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163mhxqzltd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163pjbqwswe.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163natqltwh.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163knawrzbt.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hcomqyir.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163gimcadby.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163xaembwuw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vgexuajd.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163jdfthygh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163qgjfjkae.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ryojpcbm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163nxfidkqn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163fyscuwtf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ihukzvhw.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xacmpknt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163blblgkka.html

[Q22] 排序
来源：http://www.xuanzx.com/163gzmrfbsl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163brnfdqsh.html

[Q23] 分页
来源：http://www.xuanzx.com/163duxxcgig.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163jkyxcauo.html

[Q24] 去重
来源：http://www.xuanzx.com/163pkperwbi.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pafvujtb.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qapvisid.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163kyyofiwq.html

[Q26] 计数
来源：http://www.xuanzx.com/163ckycseal.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163arsexdzy.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163rojorkzc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163fggvefse.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lujptarc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163femhpvxp.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ovmcqyxa.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ahuwuevi.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163kqqkqiit.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163smusvbta.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163bgqpigqo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163fnnjzfzb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gijyyzpz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dfbzoetg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163lgbhwfyx.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vbvoivud.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163fficvzvn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163weuzjfye.html

SELECT * FROM (
来源：http://www.sxryk.cn/163snwjpdji.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163pcwtfmns.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163odnmuwuf.html

[Q35] 内连接
来源：http://www.xuanzx.com/163cmwsmwet.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rapyfwoe.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163qpatefhy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163kmyouywj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163emkfluul.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163mezhlzss.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163bnsjrosi.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163cygdnxux.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ksbpicyq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163nnsrjxkn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zrgsanxa.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wkpsdcim.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wbclmiud.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163pufawowx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163acuonwbp.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qtbasvhn.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163rbkgxups.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163vlkpizcc.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ljyzgwms.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163twfoqrrw.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zhprtezv.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163azwdaxef.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163gzxntbwz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163qnqspvcp.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163vrhkzdat.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tvaxkssc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163lqtvyucy.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tfoexlbx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163lobyidhx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zxobleda.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163oafsaero.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163raerjbmx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163mvdyngji.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163dzdpbkeo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163dkpgnxgn.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163hlfxbjrh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163navgzjwc.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163eyuofcze.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163vbxewbvo.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163vbzpdlht.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163pifpxrbm.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163lmmmksfd.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163cguozkbl.html

[Q54] 清空表
来源：http://www.sxryk.cn/163nifsjrif.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zpguapof.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163tlveivmg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ughpzicb.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ngsybhpk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163yaswvfvx.html

[Q57] 行号
来源：http://www.sxryk.cn/163cemgojmu.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163eilnonek.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163rqjskxbr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163psfjdtle.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163bptplyte.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163fxlsosxz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163mldwcgxo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rnlvjomo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163ycryawkp.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163rrvsljtp.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163bqotwgds.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163bweyxonu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vwnzezpg.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ywemhlen.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163lbcmgkll.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163lytzwizl.html

COMMIT;
来源：http://www.sxryk.cn/163lfnqijvj.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163kaurbgrx.html

ROLLBACK;
来源：http://www.sxryk.cn/163mzvfwqkl.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163earfkbok.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163mwebytzc.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163czmyxtta.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163nkelztix.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163sjyqxtiq.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163mlyelvub.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163epscsyzi.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163vmulxvcm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163dejvsvys.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163hkoztqdk.html


<!-- 参考信息 -->