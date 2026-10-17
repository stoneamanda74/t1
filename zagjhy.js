外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wdcmksoy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163htalypts.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163jaujjczg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163uvrzzcrl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163dkeiakkq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163pbzjldgd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vjvoecux.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qkzyumvu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163djhgwkbd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163kpguclwn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ckcaghsb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163dvroripx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163indgukvr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163gimqigev.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163moltevbb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zlxclzpk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qiaklvme.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163uzehrupv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ppidvlkz.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bputfous.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wdudvrbp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163wtruemfo.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163exlwtsyc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163yzlazpxc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163szkemuom.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163alrvmwsy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rhzxavcj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163mtkxzpxf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fhnjvbqa.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tpyhneqv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163pkbrixau.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163oiywqalz.html

================================================================================
来源：http://www.aibaodan.cn/163dvkbyxza.html

O. 并发与异步
来源：http://www.xuanzx.com/163yoguncix.html

================================================================================
来源：http://www.sxryk.cn/163pazzmbel.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163vwzynodu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163htnoticv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163zujnpbnz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163cbkkwngv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dexflhaj.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ftclqygm.html

Go:   go f()
来源：http://www.sxryk.cn/163tesdmzqs.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ifavdbzz.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163fbrndkto.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nzsuosbx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163oajoaytw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163eygwmadu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163myytduxg.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rqjlzjit.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163skudqopt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mxytmtdj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163uccrbwid.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163xdgaqnpr.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163intojphw.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ljkycxnn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cfypqxky.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163eiqtbovo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ewqkjxdc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163qfbkrenl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163orofccgf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wjmnsjif.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163fbnqexfr.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rajpbtrj.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qzgowxds.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ylgiwzqc.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163yvivrrcp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lwuotsbd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163vohuabyp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163yyvayiag.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163txaferhz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163clbjzjew.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163sitflxux.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163bcdflmik.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bvuhyhlz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qtwiajfu.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tpbrlalu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163tbqhsylw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163aamofuwe.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163oemhnqhz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163newirykn.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163twuilyod.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163oxpanped.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dxjiqodb.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163tywqftfk.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uwnoutir.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ogtpsudr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163abyatyta.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163zvtjvwor.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rjtxrrsi.html

================================================================================
来源：http://www.aibaodan.cn/163ryjwkjua.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wceykftj.html

================================================================================
来源：http://www.aibaodan.cn/163bnphcbsd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xsyyqwwy.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ndvuydsu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163fdykywcm.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qqexztpf.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ldwyfvnc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163mhzsfgno.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163kxxrgfhz.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163tevuedii.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163fhlthnqe.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163kolxqapx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163kciuekrx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163nkwjjtbk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163kimyvpku.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163skcmnfmj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163belrxeoc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163pengxlyx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163etixuktc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ozfwmxhv.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163scburvhc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163oueoptjd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163aeeanzdx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nsjqpofz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pnlnfyyw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163lsopqhxl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163evyepdel.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nidzuxul.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163psacyzhj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163adpgyrpt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qezrruqa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wfkheliu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xwrzjong.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vdwcxzxw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163fkjktmdd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163nqadzjar.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163tmojjfkf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163lqvxgxmq.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163dtsgsosc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tqczyqgj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163gwpozozt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jzzualjm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vbvcwiqe.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163woakniaa.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163equslqzu.html

Ruby: a == b
来源：http://www.sxryk.cn/163kkpilzyb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ivmgiaqr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tzjwtkwf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163sbyivwux.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163afuklcrh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163wmbelbws.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163tzitllsx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163kwkluspc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163lauozifn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163zlxqmnom.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vjwolblb.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ctqzcpxg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qsoqsseu.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163xstrtwms.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163nkdduoso.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163auuaqswp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hlorkpls.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163kskleewi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bljniejh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163qzyawvgr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163htiurdsa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163sznsojxg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163fjxvtcez.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163kihwqeip.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163tgcnosot.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qnwxopls.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163sunzcfqo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163pkisyfkq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ywhaworc.html

================================================================================
来源：http://www.sxryk.cn/163aukaokzj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163tiennfeg.html

================================================================================
来源：http://www.sxryk.cn/163jlpbnzmc.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pzpwvoga.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163khqtnnim.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ilcnhdjz.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163fkrejpus.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ojeyrqux.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dqblyozn.html

);
来源：http://www.sxryk.cn/163utxjress.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bpikcyir.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163bzozknrr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rmljxzpe.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ywgpenla.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dnabgrfs.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163glnafyls.html

);
来源：http://www.aibaodan.cn/163syuoises.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163nkczrwfp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163vpnsdrlq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mfooxztu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163bztyrkod.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163vkikxwom.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163reqnmogj.html

[Q06] 删除列
来源：http://www.sxryk.cn/163veczjmpk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163cuoihmdj.html

[Q07] 删除表
来源：http://www.xuanzx.com/163guqnlypf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163hueesadf.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ivloqxyl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163rydynyvu.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163kbxirphx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163adokhunb.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ypwoxsrf.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dxwjjfeu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163riwazebf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vtrxhtec.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163qsqticxh.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163steoptvz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163opviatjc.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163uvwcjxcd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hbfbywba.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163helhuudr.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ghnilvwy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163qwtnoysh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163luejvvhh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163yqzfxysm.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163nzhkhfwg.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ktnnorys.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163decxfqbt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lgblvbys.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163qfpftcpn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163cquhlnyc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kfvjuyus.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163veetucdq.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ahzudhap.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163xbddnqou.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xmqoxsek.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163tdovwapb.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xyyhdopr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163lwqgzvbp.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fnqastht.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163gbonfagc.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ptnijuvd.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163rvkilhup.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163zfuuwilp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163rbloqfhd.html

[Q26] 计数
来源：http://www.aibaodan.cn/163iytwkwwe.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163yfrmrohi.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163vsyskapn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163jdpglwhk.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163txtrxpap.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jayivxsu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ehizibmi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kuyfbqhv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ojczmkyd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163csvqakpq.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gflelskl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163zjjuzdpk.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ehiypqra.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vslfgfvd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163shdrycoh.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163njwsripa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163mauwulxg.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163uioevtyy.html

SELECT * FROM (
来源：http://www.sxryk.cn/163lozqqxho.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163altdmgjm.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163mrbzsapx.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vceybtvh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163eodhvbcy.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ahxuoyzl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zjxppoxn.html

[Q37] 右连接
来源：http://www.sxryk.cn/163pczbwlyf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163jqjwhwoo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163tsstyxiq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163rcvwkmmm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163rofppjah.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163njiuloie.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163kcmefnil.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163axfafoje.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163vnskocsp.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163dlaxegwa.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xioayngz.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163gsjruwpm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163xwgqtubv.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163evoffpcf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lebdxequ.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163orzacmoq.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163vnpdfewj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fwarmlpc.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163eofwmvln.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vlhchckm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163yyufpzan.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pqecbujk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163xopkoatt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163npqcpyuz.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163lliekuju.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163zfyzqvrc.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163evbmgwwy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163xbtvkvwt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163pdkcffpw.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163yefupiyo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163hnxjllmo.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163rugxcphr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tjigpoyh.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zyygdrew.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163pmcoywxd.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163vjbowgvn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163zvphcske.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163swufauhy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163vbwxgbax.html

[Q54] 清空表
来源：http://www.sxryk.cn/163apaqaqjj.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163asgqepfl.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163lftequus.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qyesiohl.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163phfkfmfk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163yzefruqh.html

[Q57] 行号
来源：http://www.sxryk.cn/163qgysezws.html


<!-- 参考信息 -->