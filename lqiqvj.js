外链999!wailian999！

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qjrzmpyn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163zbpfpnsx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163jpzisvvs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163moebshru.html

================================================================================
来源：http://www.sxryk.cn/163foilvvre.html

O. 并发与异步
来源：http://www.aibaodan.cn/163xwosodgi.html

================================================================================
来源：http://www.aibaodan.cn/163dnzpsgch.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163mlcbalyv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163xjjafyzm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163vcyyqvok.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163uejpobjg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163txyxnnxu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mpibylsj.html

Go:   go f()
来源：http://www.sxryk.cn/163qxwqgslr.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163yboolgno.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163xxnzumbw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163vohbufdh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ikwdquwi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163lxotuukg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163paemwxaf.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gldcuncs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163nltherev.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qacngvgz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163huduexga.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lpuzoowz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163gxzofkfb.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163jhwhdbpq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163jzxqfote.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163dhokkeli.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163avtetoru.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163wttctcef.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vmghaiwl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163idzrbbsc.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163puvlvysg.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wmiirhjc.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163yjowdlpm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rkajmctf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ccdhiyfx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163gqvwgoyr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163svxnfbkr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163vtwhmdrx.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163sdqgyqfx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jkgtxdnl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163baehhcou.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163yqdisihj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163moczkbfc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hkiytjmm.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wbosbrhu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vbrjkecp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ettauzdj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163dlrddprq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163xkcejabt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163wcuitsdr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163iscjrdlu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ornprcbh.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jbwvrsqo.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tmsteqkv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163amibzhnw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163dgmhqhon.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163uznollvl.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mdbbkmjp.html

================================================================================
来源：http://www.sxryk.cn/163rmdrpxmn.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bvfhbmke.html

================================================================================
来源：http://www.aibaodan.cn/163vhhocrgr.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ijwooejw.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163bkgjiibz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jrjfklvf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163niygfccu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gxgdkilm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163exdxyqdh.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163clhgvacq.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163gstsrqdc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zdrzcupy.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163smdlhrtn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163djzrmcou.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163fvcoseeo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163sybvpqlt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163griebvzo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163qviuvkqy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163sxekxelb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163sebfynzo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163slsekebh.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163amtekvne.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163csidmfjf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ualwfaty.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bibrhtba.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wkqsjszb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mxkpeucb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163zfwjviaf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jhxegngf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163swxyhepu.html

[P04] 求长度
来源：http://www.xuanzx.com/163eurdkstr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163phmetfkz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kqmcdoah.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wdmljsxm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tsgblmes.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ssyyrrkq.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163jcbqkyhv.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163pxvzpsbt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163adxuijol.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163agfhbbsh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163reeyrope.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ghjxuvoo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163cfoxntjb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ntgzmtfs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163fdvktehn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163lyumcisz.html

Ruby: a == b
来源：http://www.xuanzx.com/163yecmclbt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ubhrodaf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ccibbumu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163rncbpnmx.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163yodmqbhw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kpcgyodq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163eymnvpcu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qjzvcnqf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163akfjazrw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fafxqgwr.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gdcudbff.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163wtbsvmrj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163imfjrpme.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ztfmqkdc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xecpdfpa.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gqnksftm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bspmqztg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163hjcqouzg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163mwmkhpir.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163auzfxvfp.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163lfrhjiap.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163lzholkhd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163nqtoikwn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163xvcytdnd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163gebuwnxy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163swlrccwl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163eahsofyy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163hzwjhjxf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163gtrrconb.html

================================================================================
来源：http://www.xuanzx.com/163ktbflisa.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163knqlwleu.html

================================================================================
来源：http://www.xuanzx.com/163mbzizoxv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163crzlaela.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163uhommwkn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dlbhogso.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jelwkled.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163yvvqymew.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163gthemrxi.html

);
来源：http://www.sxryk.cn/163jtqigwlv.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163hciiadlu.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163nsykfuqs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ddednbtl.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ojggdyei.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ismueioa.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mxbbpcof.html

);
来源：http://www.aibaodan.cn/163zpcavqxq.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163wnugxuxl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163pguoxslz.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163sentphro.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163dswxaztw.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163nsxxavww.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163jxjvqmip.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163hnjgtslr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ehgzovlv.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163iltxbcxt.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ciufzoyk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fwyyzvzg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163minrbeaz.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dwtqkrwq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163zdynzhmn.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163wnmoldxj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163oioeclcz.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163onkmhwkz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163pixlmvwr.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163gqhcndmr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163aqilnjsn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cuedfafs.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ilfymmzi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wmekhbfb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hecdgygm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163thfkixpa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163fmnzgvvq.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hkoubkck.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vlrxgick.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bwwkhpbl.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163vzoykzln.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163zuksdoef.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163azhdjvrw.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163scwwhztj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163msogyohz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163cvlcmbkj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163lvbvrboe.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163lbzcstrh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163zjwezwpd.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163emnsnbjt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ktvwoeep.html

[Q22] 排序
来源：http://www.xuanzx.com/163qkalcpek.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163jsluaptw.html

[Q23] 分页
来源：http://www.xuanzx.com/163frzndytc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bqvxunsi.html

[Q24] 去重
来源：http://www.xuanzx.com/163nubjwhwj.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163hdscidzn.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ocociyjf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163dljxwhxs.html

[Q26] 计数
来源：http://www.xuanzx.com/163zekwmedb.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163hqfznzgn.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163fzjxnrrb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ucoohwwv.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163uoxcaqob.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163kytipvwr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163oqtueqji.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163zmywkskd.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163pqevdicr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163trsogmiq.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163jhpaoqec.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163vihjajnk.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nffongbq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163czkubgtm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rjfhyaze.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163jtezfcdl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163wqfilxfr.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163cqaadvng.html

SELECT * FROM (
来源：http://www.sxryk.cn/163oknyqcuu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jfpxzeov.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163bpudccit.html

[Q35] 内连接
来源：http://www.sxryk.cn/163dtygepij.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163uppixeyk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163hbqqijog.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163lvcmbxev.html

[Q37] 右连接
来源：http://www.xuanzx.com/163oqlogjiw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163cenorprl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163rterrzte.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163vmkmyaas.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163yqzxlxyr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163xwekywhn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163zrrtotnx.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vruzrklw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163sztdjcuu.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163xoeootcj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163tvhphsjm.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163iflmkcim.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163efkxpwjh.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163fsljdqtf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ptuogaqq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163yxwsrsde.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163jqovblxf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163acnsgfcg.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163yndloqme.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163sokozwop.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163qkuvckgv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163udvnilpf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163unksmsgo.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163rddseayh.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163jxmyajnc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163tticmwlw.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xkkvluji.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163oxfeored.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163eqabzoex.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163oteyfvpx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163daltblqz.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163zbhhvhkl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163syqgijoz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163blekuhrs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163tmjfzvwf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dyxaprwq.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163ciwghipn.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xogofanz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163rulpjiop.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163zsubntgd.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163omzqinba.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163inklxmjd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163qfpmigwu.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163bdbnaunu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163ryerjfhn.html

[Q57] 行号
来源：http://www.xuanzx.com/163vhofbjpj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163zsfgxbaj.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163sgtjwqvg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163wsjxtfee.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163jpvdxrrh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163vonikyuz.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163yxuikznk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163bppcmlsn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163iohiczyw.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163svafcllv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163gvxgfeeg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163czsxgabw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163konwsbvc.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163argwrxwe.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163gosnvjsl.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163jbvapcnl.html

COMMIT;
来源：http://www.xuanzx.com/163ggjqewgq.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163hydcbsll.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xitoutil.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163kzrkbaec.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163smtkxkxy.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163zusyisln.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163uwrsuuvr.html

[Q68] 保存点
来源：http://www.xuanzx.com/163fztwmmdz.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163zgxbsmyq.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ufuqugob.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163rtwztfde.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163swnfvifx.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163erpxxtsy.html


<!-- 参考信息 -->