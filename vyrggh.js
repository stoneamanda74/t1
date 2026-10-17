外链999!wailian999！

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xwsapbum.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163guesyuko.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ehyppaxj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ypizugoe.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qcsjiwxo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163cfsthkxs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163gqwtqwaj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163heuntcay.html

================================================================================
来源：http://www.aibaodan.cn/163fewbteor.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ooiaonqv.html

================================================================================
来源：http://www.aibaodan.cn/163qckoqqup.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163vkurdvct.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163tsihamhu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mipyborh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163brolhmus.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wtknzfnn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ljltnjme.html

Go:   go f()
来源：http://www.xuanzx.com/163xoxzvbyq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163vdvkatne.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xechkxou.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163tclertfj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vhqfvnxw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ltlgexji.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bcbcsqsy.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dlswgzoj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ifsqhepx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163eyjakcqo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163fylxujym.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163swaybent.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163igoqvtrh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163dwdftgrl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ppkufypw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163gphyidqt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rjviwcse.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163tcvhtady.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bynwncvl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gbazhbus.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163hubvjqpy.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163opwoymww.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163oktinlql.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163xvjdzsob.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163zaybbtbo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163mlknorsj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163eqzklraz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ohhuadeg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ikkcjzzc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gwictdyp.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hbdrgfyo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zvzhysee.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163lhbxqpia.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kgbkxdxi.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wkrmbojl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163vpurqalt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163persyytn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163hbosnkko.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163eojhsszl.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ziuimhwg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163kvgawzam.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163lquuzrtg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vokgeqnp.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163panyxrrm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163inwkilac.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163uycwmzee.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xeyjwiqu.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dcqbxgrl.html

================================================================================
来源：http://www.xuanzx.com/163vuzbrxeu.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ryhndywj.html

================================================================================
来源：http://www.xuanzx.com/163hvhkyfzk.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tkqopxmg.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163fehxjdgj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163chusdcsw.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jmtvmwtu.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wllpklja.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163vtgdgvds.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163vghmqhsh.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163mtgceagh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163eatfwrew.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163qtgbgtxy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ngqxencq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163gkhgtedm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ncccugze.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ayrijlap.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lanaxebq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163awcnnguw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bnnthrfw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ckknbkig.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163bxszqnel.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163enbvvsdl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163hsdjcary.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jfczuiwf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163aolfwvvl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163amkyzfqh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163jqiptvuf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163syhryvoa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163kgoigajy.html

[P04] 求长度
来源：http://www.sxryk.cn/163fonsxbkc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jwtdiifw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fzoigkni.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rbvwiqwt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hxdcabpp.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163kmvzkfwp.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zzzivnws.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163mdzkmadj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163svkvuohj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163owyrwmws.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163nekhjkly.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vqhdgrxp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163fmqvkhtu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163loeadaoq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ughrccsj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ibbtqwjg.html

Ruby: a == b
来源：http://www.xuanzx.com/163qvvbgomh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jkbtrjmh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163zacgpmdx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163werexhfq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163lhshfrur.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qrnyhifw.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163tmgqplvs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163maoapmmw.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163kbfxhwxs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kktnurvy.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hzrtigci.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163suxfneuc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nbdxxrkh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163nsxfdsfi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dlwerbdp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hwquulyl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163wnbwcjva.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ieccrpzi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163kiankdgn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163gekoxumb.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163wcnglrde.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163sjwzoxwj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ndsnvrxm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163tpirxmoo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163fokwwccg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163mqwwgaqb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163rvbubldh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163dlpsnmoc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163weyatyvq.html

================================================================================
来源：http://www.aibaodan.cn/163ujvpxiva.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dfhiqqig.html

================================================================================
来源：http://www.sxryk.cn/163jtuwhxgs.html

[Q01] 创建表
来源：http://www.xuanzx.com/163skurjqxw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lijtiilh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gezjsuqb.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163gipogwjv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163uxzyttxa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kgkjrklf.html

);
来源：http://www.xuanzx.com/163ehfqobwb.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163eyrowcgu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163iaxfihan.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nijrpupz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163agwfydqf.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163zjhpvjnl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163avytmcnr.html

);
来源：http://www.xuanzx.com/163balozmzp.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qntabubn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163cefzobdj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163iclqwjka.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163xcircvsj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163nvldzdft.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163nzmufpba.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xpnafdao.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ezmnxufi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163fcoqzvlr.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163slugdwqw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xemzoeyo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163jqwlfuyq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163onvddmoy.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163emtdzoly.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163uaaipzyl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163xymqlczm.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163bousnkak.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ytbpimbx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163mfayadpp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163rwmlsoti.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163xohjvgua.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163hnkhasvf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163javqhjkr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163sqstpumq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163kmdewryp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163nprxpwfr.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163vxbmdmco.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163gcvlybkf.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163gzlbmniq.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163rmgqgqfp.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163gmgrqqra.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163eqmwyafh.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163baqukokr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163gylqpwtt.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ieaumjgh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163lzvpcmnr.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gdnzhiwn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163kgcpntoe.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163dmzyziuy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163xylsettx.html

[Q22] 排序
来源：http://www.xuanzx.com/163ekusigks.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163koiyegzm.html

[Q23] 分页
来源：http://www.xuanzx.com/163nvyleqnd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163rtgrebfj.html

[Q24] 去重
来源：http://www.aibaodan.cn/163cfzrqgph.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163kvjnbqbw.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163aidwfnnm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163jdotgykg.html

[Q26] 计数
来源：http://www.sxryk.cn/163ekwtqcsx.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wqwuxygd.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163pberndpj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163mxbcfipj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ipwugjkw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163gfkaagsa.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tdmcaket.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cakbmuee.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163gdpxjlwg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xmhmwkji.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163omehpgec.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wjgqlltu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163wjdcbcwj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fpybmwzu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163aajnpuvu.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vzqlxrcy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ydcxozgx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163bfiwfluv.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163yusyphff.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vtkssvmt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163hmiipigv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163sqrxiwmx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nzxbevuh.html

[Q36] 左连接
来源：http://www.xuanzx.com/163mvbmalhv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163otevhtcg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163kccxmpfd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163nvewaxgg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163iipvkrti.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163irelgjeh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ecqiuszb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163qdslrsag.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163dnclbmvw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163gyxxgftn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rlxmjkpb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163plukgoml.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163gvkoqldd.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163fbcocems.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163boatyemv.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ylczvruc.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163mzbzmnas.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163otjwhhuh.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163htdkkyck.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163exgveiyr.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163tfevjadf.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163fmhevysm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163apykpvxi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tytevobl.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163vjqaivtj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tggljxjj.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163jwlxwmmb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163lohfnuol.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163rmrzuctn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163mziquwmi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163uqhrjlec.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gmjtujny.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163eihnnucm.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ykjhtdjd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163yzclcavi.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163japebqhv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zivuiqjf.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163mspgyxnx.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163kdijwvuq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163icdugqkb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163lnuqgywp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ocaswpup.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163rsgtbhhz.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163yhfyebev.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163gijybsor.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163gqjtymgc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163fhjflbks.html

[Q57] 行号
来源：http://www.aibaodan.cn/163rgdakisw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163gxgxfzib.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163fnwswxfm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163quibhkzd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163avmmybzb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163cwfzaqti.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163sjoyhbxs.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163dqnphlnt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ucyeruwv.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vtvyxjbn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163ymwrjfdl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163idshpxvh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rofzfsti.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163mqizjwcv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qzdpxvdd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163edsiqmba.html

COMMIT;
来源：http://www.xuanzx.com/163mgphxdfw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163akszokxg.html

ROLLBACK;
来源：http://www.aibaodan.cn/163xbcvlhyu.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163qekibbis.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163kopzncqz.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163tzgywfzb.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rnwteviz.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163iduzlnab.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fmjengfk.html


<!-- 参考信息 -->