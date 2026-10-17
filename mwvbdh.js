外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wnziyefe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163wlzsiujy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bogcaykx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tcmntart.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163gtpjpopl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vlgfamjl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ejwzgsvr.html

Java: // 手写递归
来源：http://www.xuanzx.com/163uqwdyqhn.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163zfklsgqp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rwofnovd.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jraybvxy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163nioiylhf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163lfpslptr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163uyubrfpn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bjnynrss.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xbilrtor.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163igmkfzgj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pjnoukrn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163dewacnsh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hnozidie.html

================================================================================
来源：http://www.xuanzx.com/163ziysbwjr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163xmuslixx.html

================================================================================
来源：http://www.xuanzx.com/163ksmdvakz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163kigdokzi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163xrzitqbu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163orefszeo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163nmkzivnx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iuijhzgv.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tmdhipvt.html

Go:   go f()
来源：http://www.aibaodan.cn/163syhzgwag.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163tvqpbagk.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163fwibfaqn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cnlwesmx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163epzvxnxg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163gzpijpfy.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xbhikthz.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rfludkdx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ctbguxlp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xgjdfttx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qjjpuqxm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qyllhqxk.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163msqlhoyy.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163koxarzlg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163cylqvsfg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163xtawxheu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163uthwoikr.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jaaaxyph.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163vlghjaal.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163tasfwhel.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163itprhfpp.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163cbzjxpkg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163utbqecvh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163cmkfiust.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163oqyqeqpn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163bxeyijiy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163lihlwsau.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163nkdaikmr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163pcreapaj.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163qzticqsw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qoiojipt.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xortunww.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163giyrclof.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wemjkefh.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wpunaawc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163zexgumdc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ptnlvrgz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163zgjrdrab.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163bqfmyfpk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163xlfyctnt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qctzzmdi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rplmgsap.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cwldtthj.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163acbghrow.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163dnzcbums.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163sjhokrlq.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163cmfpzqmv.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163dbfdivag.html

================================================================================
来源：http://www.aibaodan.cn/163invhjgwl.html

P. 常用工具函数
来源：http://www.sxryk.cn/163knjiydch.html

================================================================================
来源：http://www.xuanzx.com/163suougkdj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163owvhopzh.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163rypzqagi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163malukxaf.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mdkmkows.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163psvehrpu.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ksvwojnr.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163fbvdvjqr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163kvqwswbe.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wsbxaopr.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163itpdpqag.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gastqfgt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163haouaqyo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163kvvrygiu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ymsvmnut.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hruwzcmb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zahduntz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163kcgujxfd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163hteazjso.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163wxdtbbpp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qepzjsrx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163kcqknrkm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yppucmce.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qmotywco.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163axdighwl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163plnpgcql.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cxnobiep.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163eyxxgeuh.html

[P04] 求长度
来源：http://www.xuanzx.com/163swhrnwab.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163aovokecv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lgxcqfnk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163npvhmzbm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163clbnbpat.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kahfyqcr.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163eoeflooa.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163tmobdvye.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fbgbalps.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163maokoazz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163gihbizel.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163bevyxlwx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dhajjikd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bgvcuknv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163wurqamfc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jwxcuqjj.html

Ruby: a == b
来源：http://www.sxryk.cn/163bwtndfts.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xuymjmqt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mfaapmow.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ovnwkyjs.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mwzugoao.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163znrhvtcm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163koqgddhb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163eqsvegcb.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163iczcwrnv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163jarhzoqf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163agpnakal.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163zdvsefyr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163oycauege.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163zzgdqpkd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jthsgvsi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wbwoojmp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163kretexye.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163svxqhrbh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163mmfuqbrg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163yfwxwrpc.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163gdhzmkix.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xhnfsbbi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ynwvrqcp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mdtplqdu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163krrsfoyp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163byxqtzli.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163yqohmzij.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kwyknjsw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163avfkmlfd.html

================================================================================
来源：http://www.aibaodan.cn/163pgfajryb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163vzhjutgl.html

================================================================================
来源：http://www.xuanzx.com/163lhilfzpf.html

[Q01] 创建表
来源：http://www.sxryk.cn/163fxvlmlyd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163obcjjfrh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ohjsflac.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163lviwefuf.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ukorqlhs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jhbtbjcx.html

);
来源：http://www.xuanzx.com/163xiuohkty.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qvxnknfe.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163nckcnnwh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163gjcjzojo.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163oqcrkaih.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163eplgieva.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163tsycxpba.html

);
来源：http://www.sxryk.cn/163zlicxnkj.html

[Q03] 增加列
来源：http://www.xuanzx.com/163rrznjxel.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163lrcbjlia.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163njhibwhw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163snuxkvme.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163cmqpbxeg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ihfzimza.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ildhmjut.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xmqekeea.html

[Q07] 删除表
来源：http://www.sxryk.cn/163fstgogmy.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163vxbmiqpa.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163sggubufj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163oyontlir.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163yqskyqmr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163yjduxnxx.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wlypdzsn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jksqbwnq.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163uhgylodg.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qeiadjdh.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163tddrtzby.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zqfkrnyo.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rkbepvlp.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163vxvjqrye.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163afisvcvh.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163kkyqigqr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163effyekrd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ovdqdags.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163uwedmwcs.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163xdljmpje.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163carqnmoz.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163cgizjvqm.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163srodyrnx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163sonnvvle.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163pqjmsbfe.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mykugjfl.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163gakcenfr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163adeqrfwd.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163jzpomooe.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ltnomasp.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163emnxexmh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ndvbwgno.html

[Q22] 排序
来源：http://www.xuanzx.com/163dghgvpbn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163bqkrbvwj.html

[Q23] 分页
来源：http://www.aibaodan.cn/163toettnjb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jskwyzso.html

[Q24] 去重
来源：http://www.aibaodan.cn/163uxeychyv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163tzjoauvi.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ugjwxxcz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163xtdhlpoh.html

[Q26] 计数
来源：http://www.aibaodan.cn/163wtuuzsda.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163rtuwrnpz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163idnszzle.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163nwmuhrnj.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dbmefyug.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163iiqvcntz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tmubclna.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dtnkjkrj.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mxgraggr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uqswzxdy.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163dxmzoipg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163gbaqyfsq.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163tettduxf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rdndibnh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163yeolcyvi.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163etwrprir.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xhrnnocl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163ldzyjaqb.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ssautlsy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ekcxyatw.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163xintaxtv.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163lraxduio.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bywaijpf.html

[Q36] 左连接
来源：http://www.sxryk.cn/163rxniflfk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vmhmgeen.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ovfogyfk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163scctqslm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163uugkbtuz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163drpmdbij.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wgfhelct.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163yozqqxkq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163mckeqlmo.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ceunteho.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nxthbsau.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163sxhvgcig.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163wcrxsspf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163jzqtjoma.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163cjvvvolp.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163emphltld.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163cokqjvje.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163kubfrlyz.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ghrxneyy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163kdsrxnuq.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163mcchlzda.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163rhorshrv.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163riseyooz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163shoydnfu.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163pabvalfj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163abxyaxsg.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163gerdisru.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163inimiauk.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163yblaukqg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163duglbcvu.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163bxvurdko.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163temhlncy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163hgznniio.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163gkpldorh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163zpmcvjzo.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163enketofq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hffeufkj.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163vymlgmtg.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163bkljqaha.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163pefmiwbx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ywybnbmh.html

[Q54] 清空表
来源：http://www.sxryk.cn/163lzogrdky.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163mjsvdwvt.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163oystkfms.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163lpobnagh.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163bzzxxtzu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163icxksakl.html

[Q57] 行号
来源：http://www.aibaodan.cn/163zhpsbeuz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163rruitccb.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163husuulse.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163mkpguaul.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163ijdwolxw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163mhrngeqj.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163mtppoeme.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zicneukx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163svynqwnh.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163fqinstcq.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163fvveacow.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163ymuxicsi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163esbbbikv.html


<!-- 参考信息 -->