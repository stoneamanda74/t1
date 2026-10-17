外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163guebqoqd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gjwehlzr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dlrpxiep.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163vhascxub.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kqszbngo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163zwnpkuio.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163bjrohfkh.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xbfebyzl.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163joxkjcev.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163qfpqelqk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163zyonoksz.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qvuilide.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xzdibdlj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ilitqfdz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163udalevvf.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cfiakldv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163tquqibbj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wthrmsuj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163wtjzzyka.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qdgztkfc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163tpvvlmfa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163sdsrdeqo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163cwtcifur.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163siwthveg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xdehgkfi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163xoykvtae.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163fxiycdkm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lfgjxmhl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163pabfakju.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163uexhfgrq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163rdbedrju.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163gwzqqnee.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163vaohuphp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bwunkxny.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163cwkasghp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mofbnbja.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rqavtekt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cijttdnz.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163dlsuqhpn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163gvkuqpca.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163djxotyhx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kyitywst.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eynignzf.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mtaigjpi.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rdomjzqv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163aemtppco.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163kggfsmrc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163xpvyomjc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163rwvywrer.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jasjokiy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163sggheomf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xwlqvzsn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mygqvpbn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163piabjfay.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163spmankya.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163aaxatkkk.html

================================================================================
来源：http://www.aibaodan.cn/163emhjsvxr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163vezlysjk.html

================================================================================
来源：http://www.aibaodan.cn/163ywbuvwkz.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163gzcillqn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163dozoongp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jgtuepes.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163xyklhpih.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hoemzbww.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wrorjmhj.html

Go:   go f()
来源：http://www.xuanzx.com/163kaweahur.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163izqtacms.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163edpokxnu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163dqspzhdx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vkjmqnwv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dlyxgfsv.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zsxedvqm.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163knmehmqa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cvsuwzqx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163siggktqg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163uvbyxpfd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163rguewlop.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cyhadpra.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ujdmoxmw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rloqdwgs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xjnlmkgv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163oesmsnpl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hnogovzo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hrbcgskj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163hqfatacm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163nwfclwqq.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tzyyqzdf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163dgnbnleg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163xxpjtgme.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163khcmbozo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163qexechgi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ddydwrfq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sojtccqc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163htpchkdk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163twmvmvam.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163esjplzsd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163jmictmdn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ssvbchvc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163oivhryfc.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cngyhfzl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163pmsexrmc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163krqqugfv.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163uyjnqjth.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ovpljcsp.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163trsocwnl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ljmndqeg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xchmdqyr.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qlrvgapc.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163izyyqxim.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163qvnuctem.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xmcyawdl.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163rmqbfcun.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bsgicjyj.html

================================================================================
来源：http://www.sxryk.cn/163eiqavkal.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163mtumtapc.html

================================================================================
来源：http://www.sxryk.cn/163eadxifrk.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qtycgwxz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163cznlcolr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ryulssbb.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fhnhkiyc.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163subggcml.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163yivptrhx.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rvgsgvwi.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bgghjumc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163resivfsh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163btqjqcbg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163gmvrnnah.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zfjrrgae.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163dlgcuxzc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163rtmtphdr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163eiqkalhy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163uuelvihd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163kwbemrfo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163dzqzohye.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163cfzbddeu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163heskyxbt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163sptaxizf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163uzxjidai.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163iftmludx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ixasohbm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163hpugpwhk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163axqucrsm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163fssqenhq.html

[P04] 求长度
来源：http://www.sxryk.cn/163slwjtfky.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jcsmziaj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163hsaeglza.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ogbgenwe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zyzozbie.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ujvsgsqw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163eqnqqfol.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163qoqxrrzs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rlclpzpj.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163nnijaulo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163htpuzwww.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vvekpfpi.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163cytzhucd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163qobpuupd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163horunejg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qaiujxxm.html

Ruby: a == b
来源：http://www.sxryk.cn/163vtzsvgtt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163sekpocmr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tohqniqd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ygnufacv.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hiolqwnj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163kwqipuyu.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163nkszjxxd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163rmeozrwo.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163locovbxw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ofqhogei.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ktwvlohu.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163bysavdeq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163pincbbxy.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163onrxnoms.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163eayffnxw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vsdgbafb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ahcdlxsj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fvxbcons.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xbffqopk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163qovwximl.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163mneeuvzm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163fcbjwyts.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qpfmnsct.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hgbzcaej.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163skcsupzq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jixhptou.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163euhofdzn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jlqsccpr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ntdozanm.html

================================================================================
来源：http://www.xuanzx.com/163wedabidl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163uujcyjlv.html

================================================================================
来源：http://www.aibaodan.cn/163hgdirfou.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wxjnqlpl.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163gtpsruye.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kdolbvwr.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163aohyyjmc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163mqcjylug.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163amhntjmg.html

);
来源：http://www.aibaodan.cn/163kslwoere.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163lpslhxqc.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163rqajwtrl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163edwrpjaq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163dqqzwyik.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163yfbvlkym.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163zmszjqsu.html

);
来源：http://www.sxryk.cn/163zwgfsitr.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qusmejtu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163axmupyng.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163smgrdmbm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zxjmbkre.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ajkufzsx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163qdzlnhyu.html

[Q06] 删除列
来源：http://www.xuanzx.com/163dbeiuwbf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ljtttohj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163henaekgp.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ypcjcsxv.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jhilipld.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163oydjrylc.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163nkhhwkmq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ojcflhzi.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163uqyvtsnu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163oxwksfpi.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ndfqyjxr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163vyhbpkpo.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163innxstkx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163zhedkmwd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qyrxxond.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163etlrsszl.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fwqzakgc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163pixpfdog.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ufqjqyvq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rdhivulc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163uoismphb.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qwdfnrlu.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163scgjqdnw.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tuuaenxq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ddsvcllt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163oxxfjepj.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163amrnktbv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163pzatzbmw.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163meipnbzo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163fiuwtolj.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163aexuixsp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163zwzvpuel.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163pfuozetf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163iadhfise.html

[Q22] 排序
来源：http://www.aibaodan.cn/163nkboqing.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163abvedwux.html

[Q23] 分页
来源：http://www.sxryk.cn/163ddgqzbgb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163teiepjop.html

[Q24] 去重
来源：http://www.xuanzx.com/163bvbljfut.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163rhqcdzjh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dcwykrmo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163gkkizozh.html

[Q26] 计数
来源：http://www.sxryk.cn/163obkpqyqt.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163spfjqybr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163cudzncbo.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163wgrlnhrr.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ksomkztp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163fbcefscd.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163lobottpe.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163nckpftdm.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ooipepxl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163aczqsjof.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163phdvljmo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163fcjsdhjo.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163wbtilqjn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163iatucalp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163iplbleyb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zvgqjjnr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xhjhrirt.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163kdilxrrn.html

SELECT * FROM (
来源：http://www.xuanzx.com/163uydykqiu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163uyuhgxpt.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163zpcmmqtv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163lmbnykhc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163awouiarf.html

[Q36] 左连接
来源：http://www.sxryk.cn/163qcsovskz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163evezbzfp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wesuadkq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163sovprtmp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xvxihkon.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wrvloiej.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wtmixbdy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163cjcqrwmi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163cauophmj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ulvgytti.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163doxkuoph.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163dphkdurm.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ztinggxr.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163fiesedja.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163idvmcwue.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ekmibajm.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163fwmuijqm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163agnzhuvu.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163uxsetjcy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163cyszbfmy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163lzzcprsj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bxzbjhef.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lrqgpeax.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ayqkvvnp.html


<!-- 参考信息 -->