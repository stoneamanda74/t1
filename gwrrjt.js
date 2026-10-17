外链999!wailian999！

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163bwotkzpc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163lalojsln.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163equebglq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jawcpipa.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ljfulgcf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163uifjwstu.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163awshpxws.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163zofztpwq.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163pqmviqdj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163oglsklod.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ykzfzvwu.html

Java: // 手写递归
来源：http://www.xuanzx.com/163yvamiasy.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163gjztadio.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163eeyhcsze.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163djtoolgr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163dtxlcfte.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163bmrtuhjt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163slhznavl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vaznhemf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xxykkeom.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qvjhnftg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tmxwxebm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163shvhmppi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nabaglrd.html

================================================================================
来源：http://www.aibaodan.cn/163oawdxwar.html

O. 并发与异步
来源：http://www.xuanzx.com/163shsfeypf.html

================================================================================
来源：http://www.sxryk.cn/163ljhxrsmm.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163mhohpoux.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163obnkjegc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163rmlhqsgu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163bocshcdp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vikbssls.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163tlnczdsr.html

Go:   go f()
来源：http://www.aibaodan.cn/163fqteeunv.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163truabola.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163yrhrpmxa.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ajgzbulf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163lobkiang.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163iifhygzl.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fdzayopc.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lswhuqpd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xrytjdzl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163whutudbw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163asmjhjvs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163kgcgzvkn.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163kxbubxkk.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163xjlzqnca.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163aojrjxde.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163xgqgvhrl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bwmpmvfi.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163pfhsxvxk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163wtytomza.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163tsgkamtp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gzfvuthf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163sslvwqpk.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fbrelumm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163qcfxzhps.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163lxalrqci.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163phxwompx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163scskrnzs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163qxxtqvxf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163lnrqmnju.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163jruxsncm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163kcbeoklb.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163mrhjqvop.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ugcuzrnw.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163yxknkbff.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163onoodpyb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163mocxgdog.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163bduwfrfc.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163bqusjwjd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163fvguiuuk.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163puokotov.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163sfkeexvz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163weopdazt.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cdtyhpuc.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163msworvru.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163jbhwtlzs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163lkkiqkqg.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163yljpvhhk.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dbnjblta.html

================================================================================
来源：http://www.xuanzx.com/163qzcarzhb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163faiofuci.html

================================================================================
来源：http://www.xuanzx.com/163wikcsdlr.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163xoubyzle.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163duqgwnxj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163gegeasjc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163figkvoyh.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vzqeatmr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163yftwfrek.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hvtbaqit.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wzfnnttk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163yintwjtt.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fxkbiqxi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lyrvnbog.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ulucsslo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163cbzfphlo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pafnlkwz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163rcmenabd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163muttoyyf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163xaasfpsw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163nfarywff.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163xnnyqjvh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163sdffjcft.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163syxzcyot.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xmtccacy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xipsbbaw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163frgnnyxg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163swlpooyr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163exvqilnm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163rhscyesf.html

[P04] 求长度
来源：http://www.xuanzx.com/163mderydud.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163akcprtsa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bnjxlbph.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lwsfsmey.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163amobmmhb.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163oxuqbdww.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163zbrvkdck.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ewnwpyks.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163mhdqslnc.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163uqfdkuvk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163aryuwfjl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vjwudpsp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163riyseolg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zkittuzz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163afvhrimd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163lyxjmcyv.html

Ruby: a == b
来源：http://www.aibaodan.cn/163salepefe.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163qdgpabve.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163zufklcmz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163awuborhc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kapzoxrg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163pxfjdwvr.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163zxsjzcjj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163sqsulonp.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163djcdkjmg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163johwpzcw.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163orirsceo.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163rdpzzfng.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ztmcgsyr.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163oduivggt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mkxosxqz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qunsfgwy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163kzcnarog.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163shbtdikh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jjnstcdj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lqtvolwt.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jjkhilcs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163qultvqdg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163sxafzqxw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163hoohdsmg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163pqootzsp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163owdiahlk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163snlukeez.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ugxwmvkg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163isfmhlkw.html

================================================================================
来源：http://www.aibaodan.cn/163pufnjyjv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163vlpptfzw.html

================================================================================
来源：http://www.sxryk.cn/163alnflwap.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jqupvyrx.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163qybujkjp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163pkruvzkh.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163dffugsbp.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163iyqvkkms.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163njfiwbhr.html

);
来源：http://www.aibaodan.cn/163jpytbxjd.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ggoyfnkn.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qnigkgjv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163naokbixi.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163uswlzhdd.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dvwxbkwc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wpebjxyy.html

);
来源：http://www.xuanzx.com/163tuffwxqk.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163mdtyeono.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163lnuvmahv.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163eiwyrqkr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163empobrow.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163yzhajurj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163qmzvvdgh.html

[Q06] 删除列
来源：http://www.xuanzx.com/163mjjvsahe.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163naxgijdm.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ubgjoqog.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bzbcepmo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163wodctqbs.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fljqbodh.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ieyryfno.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qiabwqoq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163fduiurgl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163rifychyd.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163elprlvkj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pfxuhege.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163nlzbluyo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dtgfyddl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163syadwwhg.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163wyroueva.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wkdyjttm.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163dcftixxg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bnvhphes.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163oidquicz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163grlucerc.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qevcdffg.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163meiagzdy.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ebtphyft.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fusnnltu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163lnxeqeab.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jwymvral.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163wfzjjqwb.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vsntuhhq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163bxijdczf.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ecrnhhfp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163apwsuhiq.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ntkaxnyf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163rntwqver.html

[Q22] 排序
来源：http://www.sxryk.cn/163omjdlprm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163dzsswydm.html

[Q23] 分页
来源：http://www.aibaodan.cn/163dhinirfo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163uxmkcorw.html

[Q24] 去重
来源：http://www.aibaodan.cn/163trxihksn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163wldwysoh.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163hvyrbrck.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163veoteqvr.html

[Q26] 计数
来源：http://www.xuanzx.com/163uthlwizq.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163hdmpxtbi.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163jbptocdk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163bglzsajs.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qokhqsck.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163tamhjnvw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163wmmiegxk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163meipkqvq.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163pegghbpk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tdgmuqxh.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163rznozolk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163nbvbjgxx.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163rewlmvze.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163kiniiikb.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163bgwujpok.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pslpmjux.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163imurplpl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163qjqnncrk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163foqtcwaw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gzlmlmzz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163vkbbidnp.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163grwstlou.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rsbdwmpj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163yhfbuddc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zhvlqtcf.html

[Q37] 右连接
来源：http://www.xuanzx.com/163bikfdxud.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fmzkmnla.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ipvguluw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163wrjqvuwi.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163fsgofvxz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163drjctksq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xvskcdvg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163blbwitgc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163wnkngecp.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hmwqpuru.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163bmobihvk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ggevvied.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lyxyakqq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163levixnmb.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163eciufdba.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163trqxhqrc.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163qpjmwkjl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163jctalrwr.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163qhtnjefv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163rnrrdtlc.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163rubdwxku.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163uvkekfpq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ubslrfnx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ojaadyaz.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163grguqabp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ddicgehi.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163buvtxaxv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163aisyvykt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163zuvavotk.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jeokguzn.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ackxzeba.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163lxdyonqn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ilapedvl.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163waoyedpp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ulhgabcz.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163swwkztlt.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163sxcsbbtg.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163qjtbiaxo.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ktbvfopa.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163adohyxum.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163kfsockey.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163eshqflme.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163yfwcvvqk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163syfcoujg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163oteuilbf.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fcqllgkh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163yrhtbblo.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163kikpbgad.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163jclbhnww.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163nsdovlop.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163hcrepnrk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dqvefegw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163metjdpoi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163kngnqtyi.html


<!-- 参考信息 -->