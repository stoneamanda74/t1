外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ootzfvqq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163uiblytkh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163jclkodhz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163fbbqnmwv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ivtrxdgo.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163fljltlse.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163nwnnctkp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163sltuthgk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jzjtqiac.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ujjtouwc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163dkzprldl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ibrrmdvv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163hjcxydct.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cfhxaurg.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163fuirrngh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qxuinjuh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xcuexzmb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mralfxlg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dsywusef.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xlzcvrkp.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ybgnjxhl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163glomnghs.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163lkzhlnip.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qewtbrfv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zwzyxwcl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163abcbhdsj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gbagpwdb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vybjwrfg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jlsbjcul.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163csbyoqxb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163htbwfbfn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nljuyjfn.html

================================================================================
来源：http://www.aibaodan.cn/163pjsscphz.html

O. 并发与异步
来源：http://www.sxryk.cn/163fwjhveli.html

================================================================================
来源：http://www.sxryk.cn/163kfossqac.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ppmctkuf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mbwbeyco.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163sjpdwocn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163apugkjyd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tmtafhnd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163bgvpufhe.html

Go:   go f()
来源：http://www.sxryk.cn/163authlxcb.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163djrjanjt.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gucpbovn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163crwkikgo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nyovkaax.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163rtqeaxfd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hadskytu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163anoouhjy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vouqftsc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gagezlge.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163bgyqiett.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zcbftkyz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ejofocmw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hdhfesjz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ybjivwnc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163nbdkyooa.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dfgecqlm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163eiayffqx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mamxtjdo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163cajdurwn.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163legujifq.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nnjhylli.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163wjbgvcvg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163rmfkbrbx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163njrcatwz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163vnbropdg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163lpdyqclr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163pnrfmiql.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163gwsilsfk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163deblrcih.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163manlxful.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gafvxwjy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163sqpvicqz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163izhfdsas.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qdwootbf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gkrorgfs.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lqtxmlwx.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ofvkbvej.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nibopoah.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ygxuohqg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163xzwbqaew.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vohwllip.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ktfsgwjb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163uskocepx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163yvhdiqeu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lbzikuep.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163geyuprii.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ryfbuori.html

================================================================================
来源：http://www.sxryk.cn/163smrdqdyn.html

P. 常用工具函数
来源：http://www.xuanzx.com/163tzrtnbkr.html

================================================================================
来源：http://www.aibaodan.cn/163ktnldkdp.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163vzclagbt.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lufotmjn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163otqvecdq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nmbahtzq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163naepcqnk.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qeqqlfvu.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163azsbitxf.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163jttpyrze.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tixpqfkh.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163yijlsxfq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ohieciht.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163dzhnisqp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163dtfpbqsb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dqivfaql.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zgonmpeq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163mrpuikhf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163gwfrwywq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163spbufxti.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163qstrusgf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ofsvhvjn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163iomdteyy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rjxrdmes.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163knjthzfj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163vldpwhtw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163vpxvcbbs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163wvubooyg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ywxsbepz.html

[P04] 求长度
来源：http://www.sxryk.cn/163tjnnkkmo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vyskdtwk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163agyuambx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mvrrvnit.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vnsmoslz.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163mtmegqwr.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163pualbpok.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163eegsrixs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163eehenkff.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163osrjkiow.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tmztdscy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163umyjrwum.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163tivolfec.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jwbyzqvd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163nuhnmqvg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ahyjlhek.html

Ruby: a == b
来源：http://www.xuanzx.com/163qhsxpxns.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163xlgcqxqz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gkevwack.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163brmfdyef.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163zqfvfwxz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163kkwewygs.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ykeyqewl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ypzznefp.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wjjeyhns.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163zudnuyhr.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163wzcrwhpa.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163egnkqgss.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163nhwgdsyv.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163depgqkoy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dhncpweb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ewkolzrg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163lagiihgc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163rheuspsc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163csnyikaj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163uutzzjxr.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163vqgtlbnv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bzudieer.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ozhbrbtg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ljgnomid.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ognbxfxl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163rehbfcsd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163aqpvmzhq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163hkghhrku.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ilffhnyf.html

================================================================================
来源：http://www.aibaodan.cn/163eolgznrt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163oasjonnh.html

================================================================================
来源：http://www.xuanzx.com/163hlxixoed.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ntsailsb.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163opepqace.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vecwcygk.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163tnvvwzub.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163nkfvchsh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163wlmocciq.html

);
来源：http://www.sxryk.cn/163jmlssqvb.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fcnnorha.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zyshmewb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ydiiqeiy.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163qpjcuyki.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rhlfmfyg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163tphfcmqo.html

);
来源：http://www.xuanzx.com/163uqhbwpvb.html

[Q03] 增加列
来源：http://www.xuanzx.com/163cfijxvcr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163gkhevsvi.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163cqebcnhc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163dstgjori.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hcsrtqgm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163lsushtqw.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163kgncntkm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163jjxlzqbp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163gjakglgs.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163drsjgkjx.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163bnbfoexk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163myihizwo.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163vcjanmqb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163umjaaqjq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163unjtvamp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ywaluobo.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163bxakpcyn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163hjmmzwjt.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163vwycsgst.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163vsrzpsqq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163bjhimgvf.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163fqspvwad.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163kqrpbrat.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163rbjjixvd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163tfhrnnbv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163uplprbhi.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163xtngznjg.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163oawgusot.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163cxembhdu.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163relpqgzv.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163minpvixu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vqmlvjps.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163kcbpheez.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163fsznvbzc.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163nxivcjan.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hgqvvamz.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163zpuljvod.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163wwqsqeik.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163gjowboqg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163bnqevynx.html

[Q22] 排序
来源：http://www.xuanzx.com/163qgwdzjhi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163elnudajy.html

[Q23] 分页
来源：http://www.aibaodan.cn/163kqfdtxcf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163gzbyxqfg.html

[Q24] 去重
来源：http://www.sxryk.cn/163jftfiuqm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163owrraapz.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163pelubtde.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163hxssrpsr.html

[Q26] 计数
来源：http://www.sxryk.cn/163cpkpxmyw.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rvablkoh.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gmdpepco.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163xncuhloj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lufmsytf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163wiffvvvv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163xvwzzgyt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163tmbrvicm.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163nqadbwdo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163intqzpcj.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ctwoevyo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163rmebhpnr.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163cwygeysw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yqiabuii.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163xilsgqfe.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163imtrpgex.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163gexzmgqo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163pmmbtbds.html

SELECT * FROM (
来源：http://www.sxryk.cn/163kptvxqcg.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163zdxpqnho.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163lyizztnz.html

[Q35] 内连接
来源：http://www.sxryk.cn/163aybsebjc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163dxoueiqi.html

[Q36] 左连接
来源：http://www.xuanzx.com/163lqcatasm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163aixtlofv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163xeykdptf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163yabroarn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163hyzbihsd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163fziexpjf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163imwgymhb.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163kdlitqvk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163gwqarwjz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163hzteoyun.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163fiocwnmy.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163wewcurng.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ufvjrede.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163nmfoueex.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ufitbpgh.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163dqgstbik.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163umwelauk.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xngbqdwq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163eviiwqst.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163avuwfotd.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163idqkniqt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163gspvrhcr.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163qgzfsofy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lhpflnza.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163fqseyitc.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163gbsswqwy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163qsgsnsmz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163bcdaganw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wwvdahrg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163wcyviwvo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ajrggwck.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ngvzvzhs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qwgstkxg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163zlciafnh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163uioegxof.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pvwsenva.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163eztdfhsj.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163agjvguvj.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163nivufjob.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163inhjfigf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fujuesnt.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jcnvmura.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163eelspcoa.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163gvyzjbrd.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163zmyrxnmt.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163xvvbijdr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mqifuuvq.html

[Q57] 行号
来源：http://www.sxryk.cn/163usxhwmtf.html


<!-- 参考信息 -->