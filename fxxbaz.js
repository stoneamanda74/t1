外链999!wailian999！

Go:   // 手写递归
来源：http://www.aibaodan.cn/163gxgcioex.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163muwbqhhg.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163zxtwbrbq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163fvfswurp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qfqunmro.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163daacxyap.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fxtvsgiq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rhojgpld.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163heprrsqp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cbtxivrp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lkkjdpxy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mvefload.html

================================================================================
来源：http://www.aibaodan.cn/163nsabqhxh.html

O. 并发与异步
来源：http://www.sxryk.cn/163djokkxro.html

================================================================================
来源：http://www.aibaodan.cn/163sspbgaqk.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163pclgfcfa.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163crsnnvzv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ifftwqrl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163rdaecpxy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uumzgbhr.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kwjgcjda.html

Go:   go f()
来源：http://www.sxryk.cn/163vqptcdzy.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163hufrzwsh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ewnzcnfz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163zwkditct.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163mlvmfdch.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163uwsgrzhp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gyftzrfh.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tihumeru.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xfxcaren.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ffvoadez.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163lnuwcvcs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hkocwdos.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163hduzcawn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nxdqtfjc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163xozfcdtd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163bpigurqn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qabxodbk.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163dytbfeph.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xglsharu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163iioohfbg.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163jbiagaul.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jmiwgpyg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163yqrhfezk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tlupsjjp.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163uvkzvxvz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163zgbmools.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163tlgnuwkj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xdxzuxhz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163zwashvue.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163qzfjwrik.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vvbmzfhu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zjijjnhk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163lwibbvvr.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163uoxnidfk.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163owrycrqf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163xlujhjqt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wzcvutth.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gxvhapzg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163xyxpdnqs.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zlicaajf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163khjsqicw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vmyteepw.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lussznnr.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vsbnrqio.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wsgrsltt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163cjgrxuoi.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163swybiqon.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163dhbnfiyq.html

================================================================================
来源：http://www.sxryk.cn/163kzujfann.html

P. 常用工具函数
来源：http://www.sxryk.cn/163gllwysom.html

================================================================================
来源：http://www.aibaodan.cn/163rfffjkao.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163tnnzvqgf.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163cuutowlw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163rlbadelz.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163caawaqal.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163apofprfa.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163syplavqp.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hywbwfrx.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163nawpbpla.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wzbjesst.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wmjgrqqa.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163gdcabuwa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vhyygmli.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163hkicpkvx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163tewbmgdd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ubfchmqx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163jyidjyaj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bidovjvu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xzdrrrnf.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163hegkmpcq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163nryeocky.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163xrsamrjl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163fgwobxkd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gzdpoold.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163qmohfsrw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ovkwbjip.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163etaovcmk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163asjezqvf.html

[P04] 求长度
来源：http://www.sxryk.cn/163jgiczolv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163dyscexzc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163krkptdfl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vljwuocj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xkytpvmv.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163segnduix.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mypahodg.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lckgxono.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163hluiivku.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163iqveqczr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163yhukhhgl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163hooptbsf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163zdxstsku.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163luaosqug.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163kioguhmz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163adighdef.html

Ruby: a == b
来源：http://www.sxryk.cn/163gdropbko.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163tcfxfams.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163exfptzcl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163zralaagx.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163cgphlgau.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jxjkjkhx.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163yhyppnna.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163cnsxcfhu.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163hkakntmi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163paldlafe.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163fdbmxlip.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zkusfiqj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163sgyupkvh.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163iyqcfwuw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163joadnjiv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rpftubus.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ommbcdam.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163uwqqengt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ajpueizi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163suyefuhi.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163gbntewje.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163tsvemxdo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163xthfiyqk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163jfapvgim.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gffynegg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163imosmrbs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vimumkts.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163pbvzeemo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rlpvqdcv.html

================================================================================
来源：http://www.xuanzx.com/163tibqjxlk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163knxiikgn.html

================================================================================
来源：http://www.sxryk.cn/163vmiobqtf.html

[Q01] 创建表
来源：http://www.sxryk.cn/163oxtzdzaj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dkbbvvkx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163smcgyfhj.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ttwdvfwi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163meathoyn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mbjphwqc.html

);
来源：http://www.xuanzx.com/163hcpvceii.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ixoyojqa.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163lzuyknxv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163lywvivtw.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163zdldqesw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163imblxbjg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163szidwxav.html

);
来源：http://www.xuanzx.com/163temvfjnm.html

[Q03] 增加列
来源：http://www.sxryk.cn/163scmokjxh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ldeuofys.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163okujfbox.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ewvfqeft.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163dpnrcgeb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ihlkhlsv.html

[Q06] 删除列
来源：http://www.xuanzx.com/163psahzkyf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hwupeevs.html

[Q07] 删除表
来源：http://www.sxryk.cn/163dukshbpr.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163uzlzcxgo.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tmiztujo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ksnuzhad.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163xaazjeuw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vdtssbfg.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ckgamhls.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163wdoqviyb.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163khxjrohx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163yzmbrnwv.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163eydfsmti.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163tjjaucmw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163jyupfwmn.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163oiingisb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163pvwinces.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163bkbhzfcr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bbionbwa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163chfenroi.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163zfnlyqot.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163odmuftui.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xtybcbkb.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163kapsdypi.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163yhdqajwh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163nimqwkaz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vuwuvxrl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yfmpewlp.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zocppedc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wcvkswlw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163adqhmntq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163xtytfsip.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163bqrfdqzg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163rhuxvhwp.html

[Q22] 排序
来源：http://www.sxryk.cn/163bqvqqnee.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163zrxlqaap.html

[Q23] 分页
来源：http://www.sxryk.cn/163tporakln.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163aylwzxhq.html

[Q24] 去重
来源：http://www.xuanzx.com/163fektejqm.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163emivegik.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163bloxpgzo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163euknhftw.html

[Q26] 计数
来源：http://www.sxryk.cn/163owrnpyfj.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fkjaqbaw.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ogyrolav.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163gafpzofk.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163bfzblinc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163apeaybhc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163nbnodbqj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jqeupqzw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163njewioks.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bhwahawl.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163tbbsaolk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163jivnjmnd.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xoqwzlxc.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sapsujsx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163daniuzzx.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163sxrzrxil.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xsuatqyl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163emettxqk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cggemrkw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163yzkagecq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163drukytyv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163euevpbdu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tdrtxipl.html

[Q36] 左连接
来源：http://www.sxryk.cn/163nxbxiito.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gethlyrp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hsjlputx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163crwsrnmc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163usyiiilk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163awjjzqsi.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163jbfccwvh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163mtitjzoh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163cjccczti.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fsvztgzh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163ntdudybt.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163pstiygul.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163enqcbzdf.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163icdkwqfe.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163opmmsjdt.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163sbddmcfc.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163ejlfpntg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163hmbejkvm.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163zxvcnmjx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163blsgnikq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163gwhzuolh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163xgtnonlx.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ydojnpdn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jscthgxz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ufhpgtrv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163odxcuqje.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163kufjoojx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zchudnvm.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ihhzinxy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163oefbwclm.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wadanrgx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tompnmib.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163opjjndpq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pajyybox.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163biauvuyu.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163nmekhtnm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163pwrxsbdp.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163oxausaqj.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163xunfjjfl.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163hbmfwavp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ejpwhqrp.html

[Q54] 清空表
来源：http://www.sxryk.cn/163rwfrllqc.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163wazipalu.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163keiigrtm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163unwbtrlx.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163pfasaixq.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wcuiercm.html

[Q57] 行号
来源：http://www.aibaodan.cn/163tvwrwuuo.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163smcqvuyr.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163oxbetiss.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163thylsjuw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163noplsmcu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163ttkyjrjb.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163efqzrebl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163mfmrsoyo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163dsligwtx.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nzmmdqwu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163gmgdfdua.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163dncysvrf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bnzgbwwx.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163gwvdhlga.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fwvarovw.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163weewerro.html

COMMIT;
来源：http://www.sxryk.cn/163qenyhauc.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163jacwgjnv.html

ROLLBACK;
来源：http://www.xuanzx.com/163tqmnlthp.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163cqkmgaed.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163hsujigen.html


<!-- 参考信息 -->