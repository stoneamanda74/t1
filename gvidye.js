外链999!wailian999！

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ljwmeyvz.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163bfqstfed.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vgqgrvpy.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dlqkssbi.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163xzerquya.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163hwqvycme.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ecpqjbhf.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cshwjlcl.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163yzeumbmt.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ywnvlqhk.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163mkztmnez.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163haasgxtd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ygoshbnv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163tkpkkxpv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163vjjycuyl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163jliocinv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mzmwprwr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163mmilrzht.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163pjfolzyy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163pehyfxso.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163pbkhzdkj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vjldaqwm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wkaidafg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163hnwrmifh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163rcytmobj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163trpzlbrn.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vqrwmcdn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jtkobtxz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163bybabhid.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163vmybuaxq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jswsqgif.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163irmhleke.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wuunuiro.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xhpvaulp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163iccraczm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163elvpsxmz.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163khbupqqu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163abmnaijd.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uyshrvnp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163cyjmftgp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163rnhwxcqp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163btzfylov.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vvlztpfv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163omlijllf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pwsnjhyd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163vswmmccy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tptkygfb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163egurdjxe.html

================================================================================
来源：http://www.aibaodan.cn/163qhleysxd.html

O. 并发与异步
来源：http://www.sxryk.cn/163qblmablm.html

================================================================================
来源：http://www.aibaodan.cn/163qfkdhajn.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163atkboyrb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163mzszwour.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vnynficr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163sulghjbd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zezjnzkq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pvhpjlhf.html

Go:   go f()
来源：http://www.sxryk.cn/163aatasvqq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163nwfozvtf.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ogeawwya.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163jnmdtogz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ckrxorlh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163fqbtpkke.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163srvxmsqp.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163agwwunhm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qtklppeo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163shnrxeno.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163xyuoszgq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163bhiyajai.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163bkoimhsm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163brwmehzi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163foqacpri.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163nwragktd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mutatepe.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jmbgmujv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163qyxabzqx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163placqztw.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163xafzhmhm.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163nufdimrs.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ovevfhqx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vspbwzar.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163kpocefml.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163vtffxhxo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qisqzomr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xnugocrg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163lxrmgqlk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mgxyolcl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gmultcgj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hxrpqztd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dgkhboqx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163firfeaod.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163splovdee.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zrkumlnx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sznfgqsq.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163iahlkfbu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163pnkvywct.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163codsiwwc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163glbbefkx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163uaemyips.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ryhzshjg.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vnmstexm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vhvszokq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yjermske.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163iejbkpaa.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163shbggaos.html

================================================================================
来源：http://www.sxryk.cn/163jmbafkdf.html

P. 常用工具函数
来源：http://www.sxryk.cn/163apeynjbl.html

================================================================================
来源：http://www.aibaodan.cn/163otillziq.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tpauntxp.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163fsozluir.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163vdomtkia.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wcirzhvc.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dnfxrsnx.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163lenpeowy.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lagsiult.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163eputbkbg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163fthoavip.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163waymzjiw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hepwoorb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163dbqiedet.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163flddtmfq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163cpkuuhuh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163dqsncxxd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163hmxcwoyp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ixpbwiow.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163htqmiifq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163tcpmbfft.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163tgczbtop.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ewcgpnku.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163onxvpprd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ebnkryxw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163estyhbab.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163hkidehzu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163oavaljok.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163gporpryj.html

[P04] 求长度
来源：http://www.sxryk.cn/163jduzmhoa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163hjatbflb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163flymtemn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ixuxjlif.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kppjpysw.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163tuayexff.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163cdtwrvdg.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163mchsgsif.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163yoqfjeof.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hhduuvzh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163utzrlyhl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ygjxyqmm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jgqlljvf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163zisptxab.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ynobzsvy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163vjnlrmkt.html

Ruby: a == b
来源：http://www.aibaodan.cn/163vcbhcpmd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163cjxqjrze.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163phprvuid.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163rgrzzayy.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qzgkpyrl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xqnoxjgg.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163cygbbekt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163hyclfpla.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ggrhnwdf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163lfghtkxn.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bwsytfkl.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163szjxwuct.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ahlyzzzr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163esdrplqx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163snkswitr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163adryzdwl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xigsikax.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vgprwhvx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jizrumxl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xtdmloxx.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163abjzovje.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163sdkzxsic.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163jovzrwrd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163hlerfvdq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163oilihewm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ynvewjji.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nsssjvbk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ybvdfkbz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163cyefsaey.html

================================================================================
来源：http://www.aibaodan.cn/163cwesouux.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jwwtphdr.html

================================================================================
来源：http://www.aibaodan.cn/163denepgpm.html

[Q01] 创建表
来源：http://www.xuanzx.com/163gxapituv.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163qwvrgxls.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fjwbapmp.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163bqnufmze.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163duojlhin.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163gbyswlrf.html

);
来源：http://www.sxryk.cn/163ebjbxstw.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163irxknvwh.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fgtadnns.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gsoobwqs.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163rzuvlpkd.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hjhgwomw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163dbswydla.html

);
来源：http://www.aibaodan.cn/163gufveuxu.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qqpcxhcm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wbsacaho.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163sykxozit.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163rijlkqpu.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163josppwih.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hrpzunkr.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ntbvejho.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163zxpffikz.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163oachsipx.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163rvosgfum.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163vqefejuc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163nomeuxar.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gdehuccp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163erhdfjxi.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ifrvocqa.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163yabhuspd.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163qwhxuxgr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163bcudecoj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163vbxbbsrm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163wuavxdpi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163bjxjroqa.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163uwfjdabs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163fltetllg.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163blaucfdo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163pxcqpvbv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163eqqecfkp.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163sacysrlg.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163lcszzzvr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163oswjtodw.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163vpobvwdx.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163kwpbkfag.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163andtcxne.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ynupkvqj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163hjurlupi.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ldfesemr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163osnyyyal.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163tgyubeny.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163mhabiuai.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163pumnxdla.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163qfgqbtza.html

[Q22] 排序
来源：http://www.sxryk.cn/163pintiwjd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163qucttyks.html

[Q23] 分页
来源：http://www.sxryk.cn/163mksmoxiq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163kjzqjgbq.html

[Q24] 去重
来源：http://www.aibaodan.cn/163jquapodg.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163eriftnps.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163vggquumy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163coxkqxdc.html

[Q26] 计数
来源：http://www.xuanzx.com/163fldeompp.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163huvpnquu.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163tabawwui.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163lwxnzgze.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163vrgttodj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ysxqqhzv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ezxchqmo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163pequyhwv.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163omczetvy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lvbpginu.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163epmfstvn.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163nmymxbxs.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163cpnpisyq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zaaeggqp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163xewbklml.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163rxnwxzsn.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163yjpmtajw.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163mkzicxll.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163jjbaveyd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ngrtqbys.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163aytkumsq.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pifoyrjw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163lpkzvaby.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fpfwqwbn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cvevipwd.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163amntwcmt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163bztmubjo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163wpferjok.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163iscivkhh.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163loasctwa.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163pultpgng.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163gfjhsgye.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tulyhasq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163hozdtkgl.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kzuknpbe.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163hdkvjvbe.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163kcskrryu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163vurfqjmr.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163mtylmkuz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163uxajrklw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nsussnpr.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163loizobhg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163uegnlznt.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163bdrnafpp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163zriokyvb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163birgcwtf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ivtnunjv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ajsbuhdw.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163drhnxfql.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163difwhmyw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zwrncrcz.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163xivwuwkr.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163gfzyrqzr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163qnsjyyzh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163mkkrjidu.html


<!-- 参考信息 -->