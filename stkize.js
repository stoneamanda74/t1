外链999!wailian999！

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163aythfxcl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gwfqhooi.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bhqpejmh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163fgwyqvkd.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ftedtzsa.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163icylyvzu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zljqxxrr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163evbcperg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163rusgdgqg.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163oidxjete.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163thxaxlhe.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163juultpzp.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163tralayjv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163dezqaxcv.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163vnkfkkwz.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ugkgrgvs.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163kdqogygq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vlsvftwv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163frugrinv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163emjubzaz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pgjechax.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vuhnnfsd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163trlajwxq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163htfwyyui.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163rwvsabte.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zyhtcztp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163nyymnntz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163siutuafb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163rukreivq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nfvwdoww.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163njugfrsw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163dmrlemxm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fniajzoe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163bvpijpab.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jbwgvcbp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163esihfghz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163adwhgwyb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rncjlpsz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bhnfauaz.html

Java: // 手写递归
来源：http://www.sxryk.cn/163qyfwjanm.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163uucwzatc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163fqcmiozh.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163quzlxrpf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163oopzxwuh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163xhvvkoun.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163cvjijard.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tefpkfyu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yefixxkf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xdiwkwua.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163nntzduek.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163vtwgwqre.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cjjcvlhi.html

================================================================================
来源：http://www.sxryk.cn/163htxdchmr.html

O. 并发与异步
来源：http://www.xuanzx.com/163ffdanxbh.html

================================================================================
来源：http://www.sxryk.cn/163aefagbvm.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163puhqaxhd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163hfibsnfl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163oydmxjuz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ytxxfiqm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mgobnakp.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jcuhzfka.html

Go:   go f()
来源：http://www.aibaodan.cn/163xnuiwwis.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163iyagyhsa.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163zeorjznt.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qypntzsz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163rzroxmcb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rbdvnuif.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hcpfuqum.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163moctbnhi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163egbykfit.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163drododgq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163fcwybuyz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163jrvxvuyo.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163sdqaqmxl.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163pjwfqplf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163wopfxdhr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163njdbvcjb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zhapmbdf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163msfsdsyk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163oywgfbaa.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rriajure.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163akcnfurn.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qbmltruo.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163vtwsexxw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163tinkgjcx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163cqyjkgkd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163chfrvlwk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163gybhmjma.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163hegkbizk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163pjstsbmc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163uzmjbwzu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163cpeuyfvd.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163mmgyfbva.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163hvbyyfjj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163urpubdwe.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163crlagrbo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ygmjaioo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163jsbqhyzw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163mybwcguj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163nlanrwtj.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nqvangil.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qosbvvar.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163phucjrkd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163iecnxlne.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zqzmhxtt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ntroxgbw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163eunikfmh.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ygjflhqv.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163unxspkjq.html

================================================================================
来源：http://www.sxryk.cn/163ffiqxjbp.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ormehsht.html

================================================================================
来源：http://www.xuanzx.com/163nxiycdjo.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mnnnmvic.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163msxgomfq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163cogwbzes.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163eqasdrsl.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163upuophmw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163avhxvnqz.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163cuvpwcww.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163wksivvph.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163yihjadpf.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163sutvddbr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163lhqoymbo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163wkcrubud.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kcokyadl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163eekpznru.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163lzuazamw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163akgydezd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ybzlrdtn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163wqavlhdf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ssaomemo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163bqmvgcvg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163keefqugq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zafhepcn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163floakpop.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163dphcxgih.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163tmfxuboc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163phoyvmkb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jjbalpmd.html

[P04] 求长度
来源：http://www.sxryk.cn/163pyqwywrc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163btqcqrfx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pozybocc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cykvlktn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tnwqqbsa.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163cnteafhz.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163jupuhbbd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hiorslkt.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163lxllvfkh.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bdcizcjw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163mngnzyca.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163dljvjqqk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163dkjfkdth.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nuxktmvp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mbaruvbo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163zlsjekuc.html

Ruby: a == b
来源：http://www.sxryk.cn/163apsdeoru.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dpjqpryu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163luwjevum.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ilrxtwpm.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163eyjpiiuu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163iogjvrci.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163axepljgu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qudtgekc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163tqqqssxo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163opmmhouf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163hxvwewjw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163qmgvruul.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163xdmepmfp.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163wwrfvnly.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pqfrvyqw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gtvkbeix.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163akjvwipm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163xtipgvdh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wpdgvdsy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wypwiwnw.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163fccqultt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163nzgdubiw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ajhbidit.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163cpduvkrt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mdxdxtgv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qusshsir.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163sfembqdq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163gwgptlmm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163qnfjkqts.html

================================================================================
来源：http://www.xuanzx.com/163afinicso.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163bosswdtr.html

================================================================================
来源：http://www.xuanzx.com/163bxahgodl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163hfwwuckl.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vzxmabec.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lseopdnc.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163fqdnzrhy.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163kzetbmmc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tptvkrtp.html

);
来源：http://www.sxryk.cn/163fuiwzmhf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163bbyvkwvt.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163jqlbjepk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xyhekmmt.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163mjxttdyu.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dytosboh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163tdbgxfhj.html

);
来源：http://www.aibaodan.cn/163akagvkfa.html

[Q03] 增加列
来源：http://www.sxryk.cn/163dhxvuhet.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163tlrekdpp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jxodquio.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163unckpnsm.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163wnfhhqay.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163wbhuwfke.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bbxlzcke.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163bxzzqjmx.html

[Q07] 删除表
来源：http://www.xuanzx.com/163mgldtrux.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163yvujngew.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wzbwokze.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163vpzjvlch.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163qzwnubfl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163uujnbags.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mruitbfw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hqgtbgkg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163navxoagm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163kjagrrrl.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163amvvqsup.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163uqgunost.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163delrobgs.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163bwssohxp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163rcyildjw.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jwnqgmnl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bvbiwqcy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163wemifzav.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mamfcoqi.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hucfbwqa.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yldjlcmb.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163mxzheqyk.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163qjkqcjzf.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163bgeerajc.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ncanzyqk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yltdruev.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ziktwfna.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xfmwlgkq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gmbrnumx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163fvubfrgp.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ljnujofl.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qpzcaezy.html

[Q22] 排序
来源：http://www.sxryk.cn/163thrihlmc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163olsctsbq.html

[Q23] 分页
来源：http://www.xuanzx.com/163syrxqpyb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ihmojpnh.html

[Q24] 去重
来源：http://www.sxryk.cn/163bkpwbyku.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ubxnvvhz.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163qwfyvcgf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163pvyujmwd.html

[Q26] 计数
来源：http://www.xuanzx.com/163zbnljtgz.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163gjzuycmr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163oeacnims.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163dxtpdbnx.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163umhohpmu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xqsxszjd.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163elrrjwgt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jfsuvqrz.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ddiomjfn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163chvyngny.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163krvaoyro.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ayjhbkiu.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163yyxxbldz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zcdvdkuu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163lkqdexie.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163rjplptmb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163glctptbz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jgnpzbid.html

SELECT * FROM (
来源：http://www.sxryk.cn/163dblhblqj.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163vdfauufy.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163wspqttcy.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163awxwdkdo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pqmtfrpb.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ktoxtckl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163mlrypbco.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hphycbid.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163lvsszxjt.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163jyhcsnqz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163rdqewwjt.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163yclkawbu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163fxktbnbo.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163qfovmjsw.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163wuosxatf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163coeopivh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163lgtzrkri.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163phhnwthd.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163riadotid.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163wjenqhqo.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163lwbmknbq.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163aihlktvt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163wbnetvrf.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163zgkkybsy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fbqewqnt.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163qhoacdld.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ikqwpqlg.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zcrscdwx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ipjnmiim.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ulfhjtsh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ojwmkkzd.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163grfvceqi.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ztbucvyi.html


<!-- 参考信息 -->