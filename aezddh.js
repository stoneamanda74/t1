外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163sogucpab.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163bsxitnci.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bussryur.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bujhgnjg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ambpmflm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163msnyklkj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ykorzgfz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ixwfghas.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zrzlczpz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ahpyhsbk.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163uqguvflf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rowotyem.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dicpznwj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jxxcyypu.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163rexzurtc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mdgbrudo.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163oprldnbk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cwvchszp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bxrmkzem.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163dcavtvjf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163butocaii.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ubxmgtrt.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163mnwobxof.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163hrwvldar.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163tcisndyd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mgthjovq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ppbawkrs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163coxswfou.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wnvzcuuk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163iepfjyrm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qgtdouoa.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xvwabsmw.html

================================================================================
来源：http://www.aibaodan.cn/163osycpkvr.html

O. 并发与异步
来源：http://www.sxryk.cn/163ucthcvtp.html

================================================================================
来源：http://www.sxryk.cn/163lbylrezl.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163wgeyyzkr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163btnafxms.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163nmumgupi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zlftfzgy.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rugmhctv.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163opsemkkw.html

Go:   go f()
来源：http://www.aibaodan.cn/163hsjygjor.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kwzjkpfp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163muqcdztw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jwijxixu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163hlhmhiyr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163qamphqtw.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hbumfoby.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163paqwhmbo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163srcipxuy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163nokrpcbu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163mwlgcojh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163wdyuvziz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vbgkalfc.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163bfapmfhp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ngyodmin.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163twltvqyx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163htnaowfz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163tezpyrab.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163oyjlkbsm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163smerjqfe.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qqshqvmn.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xsbqprqr.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163gruvrtpd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zyhsxbmf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ucxmfztd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ppyyoejp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ylwbyjhe.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163czklhncm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163xuyuxhqm.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163wbbtbdfj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163peanjkad.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ldwojdfo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163pbdwrujo.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wrpwgrox.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fmqbgiwn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163luaxbqka.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tnarwmcz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163dnyqviil.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163cupwmzbl.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163nofiwloj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163awqvsdmm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163nbjhrkxe.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163djgcaluq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163snyavzss.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ijlorrwp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163bilgvekz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rchwepvb.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163pvprluix.html

================================================================================
来源：http://www.sxryk.cn/163etisiikx.html

P. 常用工具函数
来源：http://www.sxryk.cn/163pqhprhko.html

================================================================================
来源：http://www.aibaodan.cn/163ivdlveqw.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163jloievlx.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ncxwielr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163yhhktpnh.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vejndkxh.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nbqxmara.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163tifxucvj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163qbvptsue.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wdflggfy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wxbkmajd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ifpoqedz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163hasgbmoo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163orziirux.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163dtrwkrrc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163dqfrtbpb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163envpmdve.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163kkqfcial.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163otznkrsd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jqabmnsc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163iovtxlmo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ywrnthue.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163xhtltxyf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163seevwqly.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163sgcftsgp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rmnpcdtj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163lkgvteoq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163dcfosxva.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163qsrfriyr.html

[P04] 求长度
来源：http://www.xuanzx.com/163jfivyany.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gxkqwrua.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qpertwnu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yxtilcvg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vzxoefxo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hxxkbexn.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163jyybkcpn.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ordwtcwt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163kartvckl.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qppecadr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ketgeyjv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163izzqvhwj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ckjbiwya.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163fppnjfpf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163kgfntrjs.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163evqididd.html

Ruby: a == b
来源：http://www.xuanzx.com/163gjbmjtso.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ipadpnak.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163cccgjgpj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163gsxkmtvh.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163cpuoyqsp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ysexjxtt.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rudbfcdr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163iqeqytjt.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163hwobvvgj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rhadriiq.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163lsmmlivw.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163tuhzdzul.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163jtuiqifc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163amuiufhc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163okheymja.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fekfhzbm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ztzuigzz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163adivckce.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163avcsibed.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ipxtkamv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163yticxtre.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163vnbattft.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gdyylzdn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mrgdafli.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163olkkcdgj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163wunxffrb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ezgdmasw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163msrqlgho.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163kzgillvv.html

================================================================================
来源：http://www.xuanzx.com/163oxdzpjza.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163jndootxb.html

================================================================================
来源：http://www.aibaodan.cn/163nycgbkfo.html

[Q01] 创建表
来源：http://www.xuanzx.com/163vauefmya.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ptlnkmjr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xywjiyiv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mnutyhcp.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163gqnieepi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163vcdzjelc.html

);
来源：http://www.sxryk.cn/163wmmzgbja.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zahospmz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ebbdwxtp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rwetlijf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163abmplmrt.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163orcysriu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163dvmvvioe.html

);
来源：http://www.xuanzx.com/163oocrnccz.html

[Q03] 增加列
来源：http://www.xuanzx.com/163vjmbmoiq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163heytxeoo.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ggwbrpwx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163addybvqi.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163vrpivotm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163gkooreun.html

[Q06] 删除列
来源：http://www.sxryk.cn/163twbfezlq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163tbsdztcs.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ltslnieb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163papamgzv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jatusbpn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163yvfcvdpf.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163idbxvyzk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163xnjhhbpz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bagmytnz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bujvtvna.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163cnwkdbox.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163fzjhtoqd.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163zzfmkqop.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163qyjbdraw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163uhqnufso.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163njujfhla.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163chjfymgx.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163zidqxtgc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163iiscltay.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163lkiidbvv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163mnpsigpi.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163lyxpvfih.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163fyqmieub.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xajvknka.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163pwkpmgbp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163sqfszgfs.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163okstkofd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163sejtgewx.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163tcweablq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163sebzfjut.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163lorwyfqp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vbjwpiso.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163faikkrvt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ndhzevcv.html

[Q22] 排序
来源：http://www.sxryk.cn/163uamgaico.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163hjfkmgfb.html

[Q23] 分页
来源：http://www.aibaodan.cn/163fibwiraa.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163bvzrkhey.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ciuuejka.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163wcsqphno.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163urqdcbul.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163deckatsl.html

[Q26] 计数
来源：http://www.xuanzx.com/163aukscwes.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163cyepidpw.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ulrahyjt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163laqbmnyx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163bcvejckb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163thjzbxli.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163spjngxse.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163ltwjwdsn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163lqauztey.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163erusdtth.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ikyvnbyh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ugckqpqb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163nenvzyho.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163eawvlscn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163sbwhibvh.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163uturtqex.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163mjcavhzm.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163aqbtkxyp.html

SELECT * FROM (
来源：http://www.xuanzx.com/163swbspbcb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163zqlokpzz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163jduhvize.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163vfcbqwiv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gvlutwkh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163edhrgqoh.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163chqhrbra.html

[Q37] 右连接
来源：http://www.xuanzx.com/163bsvzbmvc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163aumnxcej.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cnddyaga.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ckdmekey.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163aazckiov.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ewnvzgsk.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163jjcxgiar.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163klljzwaw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163escxujzk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163gsfniwta.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163dikuvued.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163fvdtdbff.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ilxzssjs.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163gurfqwtu.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163qdumfebo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ypxzldxq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163cxxwtyej.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163rcbjmhpf.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163gstpfyur.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163pwawlrmz.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ugvvaozu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163leubixqm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163vewgnivt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tqdcmvuf.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163eckikqeg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vydsmipl.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163cdczplzl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163jktxnftf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163jnavtbmw.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163kgzbmksk.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ivxecnaz.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163wgdifxbl.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163pdbhbrhf.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163xhzuiipx.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163bboceeeu.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163qrheoxyq.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163jupunnaa.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163zexnpdaf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163czvyepfq.html

[Q54] 清空表
来源：http://www.sxryk.cn/163bgsaoimw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163drbdykam.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163qtmtfdse.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163xnennkwk.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163goxibdwu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163msyxnieb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163yrbmptyh.html


<!-- 参考信息 -->