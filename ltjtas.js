外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ttvrfzmb.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163mkpwzqdc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163skqvfkop.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ldazfmgz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tefykgnz.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163zgdxdkjw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qduenddv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vlryvqjf.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wkuvtple.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kgyliszz.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qxnburpq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ahmiiehx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ncoulibh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163eozelxhx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bpyqsdpz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lrnvoprj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ektzaqdo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163iaapgagz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163rdsechhq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lkcwwxid.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163byxljmcv.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ojzbbmqw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163kwknmkqs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nbbdndnl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qojrdkri.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163pqvlmtbf.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163rjpcljnf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jpuaopqk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ubglkuoj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xsjqxprk.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163zypnypby.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163hzflbege.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163gemytvdc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ehfcxjwp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dvgkgfhh.html

Java: // 手写递归
来源：http://www.xuanzx.com/163yebztpwv.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163cfmisaxm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163kspykfhv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163slsmxafc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ehpzbyuc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xpjdzhtu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163cpubaloo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163epcvdupf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nlzvbmjt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ylhvcrbp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163avdmrzpm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163bqajtgbb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jvoefnrq.html

================================================================================
来源：http://www.sxryk.cn/163uybjxmuy.html

O. 并发与异步
来源：http://www.sxryk.cn/163srbttuxu.html

================================================================================
来源：http://www.xuanzx.com/163kosigcgh.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163uzpmhhbs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163pteqypcp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mbguenoi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163qatuoljv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163chrjohkh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163adpkjgud.html

Go:   go f()
来源：http://www.xuanzx.com/163cwpjqoku.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163fdptzpjp.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163fttnsjsd.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163dwfilpje.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rcczmqce.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ikobmpod.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zzfuurlb.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yjwgxdtv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ppcxfztt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163pacbtirv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163hspufekb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gdtjyjda.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wjejsldm.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ihxprvog.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ayfrpaun.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163bvfvewhv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rdavvbkh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hwsulthq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163kwgicxnk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163mwjksxsz.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163nuxiwjkn.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vltqdywn.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163oteetwog.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ynkeublp.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qpeympjk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lfloaruw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qtjnhvgu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163veqoozne.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fnqnwwub.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163xsxuogof.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vhlpeveo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tnnenwcg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163yslnrvcj.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163noojzeay.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bitmghnj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jzfmvvuj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163frkizfhc.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ngvkiczg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163klzqygai.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163erggqjlu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163iaorcxth.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163najvxuau.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nfiubiks.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dcbaoavl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hqpicibf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dofaxwxl.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163jmfiglot.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163tibgymuh.html

================================================================================
来源：http://www.xuanzx.com/163vayvjrug.html

P. 常用工具函数
来源：http://www.sxryk.cn/163brswvxwq.html

================================================================================
来源：http://www.xuanzx.com/163ysnydjke.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163acumackx.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163rltzfivx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ndtqknsb.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163koqiklac.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zjsmitxr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163llvvtsrc.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fqaznsje.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bcnkcgzp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qiahqpwh.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163siaaqqpg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xapsfkrf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163cxtrwxju.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163yxjtpuvv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ovbdajrt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163qzhocfff.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163nclqrfno.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163wdxrogzp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mjemycgg.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163mnldpaif.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ygxfshrj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163hbvszwde.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kvrzpvlz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163blbddxnz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163boiaskmx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ejkwrgji.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163dhyzhzuv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ozzlmuor.html

[P04] 求长度
来源：http://www.sxryk.cn/163sovxnfqw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163prtfpbru.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163umyiyiej.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163eluyxtyt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xvaboajd.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zmmfohbl.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163zjwejabc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xwxhauwg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163igmkzzha.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jyadovvu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163xlquhtvv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163rgbrmjbc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ncjvxlxq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cqvukfdh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163juyulacr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jyvuvtue.html

Ruby: a == b
来源：http://www.aibaodan.cn/163hbzzofax.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163pyibucjz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163oivuqyww.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163yraaqvhz.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vexobltj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tldkefbl.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163nqasdnyw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163yuohxbrh.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163hkzuxobi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lzlwigok.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163emkmgnbk.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xxqblgod.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163indqsqmx.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163wblmpqtn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163eabqflpn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wfzqkfhu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163crrlipyn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vemsclco.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ankkfoyn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ecikizlw.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163byxzkiqn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163byhlocvn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163mijvxjyu.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163uxnfgydd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jyhpabgy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163kolnxjms.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163uoshrtgx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163fotjkovr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163gwgmpsnw.html

================================================================================
来源：http://www.aibaodan.cn/163jtogtuwx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163cwidxoro.html

================================================================================
来源：http://www.aibaodan.cn/163pcdxgzpz.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ymghopoc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163qgiovymf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bxdirzkl.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163fknouwmo.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163okgxrktr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163fsqupzgg.html

);
来源：http://www.sxryk.cn/163adytspmk.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163dlmzowxe.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163qgiyoqlm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jlsymhsu.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163bzcospzq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163nyqswaso.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163grxhleek.html

);
来源：http://www.aibaodan.cn/163hfefpgcv.html

[Q03] 增加列
来源：http://www.xuanzx.com/163lnklwfvu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163izwtxopn.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163lfjjjndy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163zuzuxsju.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mhdzdfge.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wknkoggu.html

[Q06] 删除列
来源：http://www.sxryk.cn/163cxgznbef.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ihofxxsg.html

[Q07] 删除表
来源：http://www.sxryk.cn/163cpyyxeav.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qdgzsaes.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163znsqhryf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rxyjwrsv.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163zszamczi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dnumutkj.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wlgvfghw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163rpibffvp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163rpluycmf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163guvvihxy.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163hgjsihrv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163grvchoox.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163zmubstix.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163esdagxny.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163njlqvbvc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163egkntrmd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163cgxfyryk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163gcxuvixw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163rxeiyvoe.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jhklxhkb.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163eeoxpulg.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163jhgahnpw.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163huylneoe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zglmxazs.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163aiqclgkm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ubvdzfgn.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163loeikbbl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163bghnmgxq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bdhokjnp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163fcemcmrs.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jzduvxxl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gqkzrdfl.html

[Q22] 排序
来源：http://www.sxryk.cn/163ymtpzjvy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163tnecyknf.html

[Q23] 分页
来源：http://www.aibaodan.cn/163lpnwdrrx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163rjadhxhh.html

[Q24] 去重
来源：http://www.sxryk.cn/163rhozivlm.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163lprdjdvx.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163dxxpihbl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qjgtsbmp.html

[Q26] 计数
来源：http://www.sxryk.cn/163ezsibnkh.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ikskqzhf.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163okgsxiou.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163arwvgsrr.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ziqjhteb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163aqglqaug.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163hvmqsvbj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163dmlxydsf.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163mlvcpoqg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163axrvdpqv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163pjbonhff.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rzbgpzqw.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xksybaih.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tldwudej.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mycjupcc.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163ulctdngj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163hagxscnp.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ofiwumpz.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163cakygrix.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163wufymzlg.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163gjocbffh.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163xrylytjv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xqzubvof.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163gsbrbofr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163eacqinyj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163brelohze.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kcpgztvp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jhryxczv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163dgzkwxww.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163hijmqfer.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163byuaptxi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163lhngqmgb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163pyfxzffw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163jyqjaevw.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163eaeevets.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163jnpjelpr.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163sqiuqfhq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163lrggwrpw.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bbnkkksx.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163trgelrpu.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163olciigeu.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163wtddldjs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163vtfxbedm.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163gvdortqm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wicqexzu.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163egjcaeer.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ypddqmfn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163rmrngtwp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163sjlhoatd.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163nkouxeai.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163vpumsbrw.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163dxxkboqg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163oaakyboz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ipuhlhkv.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163sbwptnfp.html


<!-- 参考信息 -->