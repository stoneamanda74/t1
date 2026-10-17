外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lisflexl.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jxbtxxyq.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163pcwqlidt.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163yastjpdj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jijgjmwz.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fnufhake.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163urrnlfcx.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163tunaybql.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163xrjunisc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lhlcycex.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163eoavidph.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163mykptabl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163xtbpldlp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163nickrixe.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163flgzmyqe.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163jiqhfjuc.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ndlzuvdn.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163hmpxzdas.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vqaegwup.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ufoaxfen.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vyxjjtau.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163llusdbtd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163crfjzphh.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ufjjpwzm.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fgtfcayr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163fmpbhzdy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163vhsvzvlq.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eehiyfkz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163wjlugfck.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163szuctdnm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163uxniyvhp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163yegbtdqi.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jgknpxgg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163yfaxgcpw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163xgkglfry.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hxiivlpg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163gygipful.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163lsrkygyo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163siojurfk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163cjugeqsr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163saiyfcrd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163sgwxksmy.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zigcvmsn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gduziqdf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ruvdxlhf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163djrfqdzd.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qhjcrxgx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nhlxohho.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163pclnlhwc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163atunwvwa.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qlvuheyr.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163dnxiehji.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ighipkuw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163gocjcrgp.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163qnrmgihp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163nqgchcof.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pnheinbo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163usudoyll.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163afcfrmya.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163watdvlxm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163hetvaxwj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vgrglxpc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163milexkmx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hvtchapz.html

================================================================================
来源：http://www.sxryk.cn/163ykzxosyt.html

O. 并发与异步
来源：http://www.sxryk.cn/163ggctueoe.html

================================================================================
来源：http://www.xuanzx.com/163mawrhgxm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163yzczspcr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nuhdjtst.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163eojtolxl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163beojmzds.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xaqcldnh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163wmyeqqtc.html

Go:   go f()
来源：http://www.xuanzx.com/163crxwgxyn.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dfcbbrys.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qxnhkror.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163lkvzmwxz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rirfzqfx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ctpcxyxg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kfhftzrp.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qdqyrmrl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hmusssvp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163zarjmofw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163fjddhhkk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163bmbqyury.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163kvqhqudy.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163wvzgyxam.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163dqsqrvdo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163tnrrxvdz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163botatmsy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163immenolb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163tfbedidh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163llnqlngu.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163chvzsisa.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163gqtiwvyr.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163iftjtqol.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163xsvsyayu.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163illuyiwy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163bczpajog.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163kgkrxxmu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nbuyzvfb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163cncgarxp.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163xrcwewjp.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163dvthfetd.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163gislfnbw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dacsxicm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bvypazoi.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fgrxsttb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163yjldvrsh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163iehqwwxp.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163enrdytwq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163skqkzqow.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163dvxltpyc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163hquhocks.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ajnpgtku.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ewvyffey.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163orfhakjr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ylpijctx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163wzxfqhmg.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163mtvqddqi.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163htafvxla.html

================================================================================
来源：http://www.sxryk.cn/163wigalbjl.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ojvuwwfd.html

================================================================================
来源：http://www.sxryk.cn/163rwioqbjk.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163cwprekrc.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163zlrzlzrs.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163mgsdtpuj.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ieomlhtw.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dcynzlsb.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jkgebjxi.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163cbuxigdj.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163rzawwdvw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zaidfzie.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hdxefebc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163diqaliyk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163lnpjxjzk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163egaaysmi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163xvvaabqe.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163zdgdzikc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xncujwqf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163gulhdmyo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163pmxthbet.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ielcbsju.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ylkklmav.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163zpwylztw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bxtubrje.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ubxqvitm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163wvihdcpq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163efrexzsr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gicorfje.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163kgmhwzqr.html

[P04] 求长度
来源：http://www.sxryk.cn/163tqcpltmq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163vrhzitod.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vqtevgys.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163njkppkle.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vfkqissu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hqstfzhi.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163kfcswoxg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163udpthlco.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qsjlkfwi.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163qsvphflq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jtmesqqu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ezeezelw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ikegjlcy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163retwupga.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zusbkgdu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163gqneseql.html

Ruby: a == b
来源：http://www.sxryk.cn/163rgpqhone.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163tilsnthu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163rxnobbnf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163iqvpnepj.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163pagxpxpn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163qzlovzlj.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rehbtpln.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163bohvcmiz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163anatsptb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163giiwjzai.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ofmnbnam.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163spjieemm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163jinajedr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163xcjvwgsr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vdaabuhb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bmdkcsco.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163yktnzuui.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163qbkndbio.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ihvcjbuw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jjyrkppk.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ttjjetuq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163rnszodqp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ngpriyst.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163cgjuskat.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163rhishjtm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163wrjanclc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163znkyzrgx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163waboztxt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163tvqhwvno.html

================================================================================
来源：http://www.xuanzx.com/163wtsiqrvw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163iowhnpls.html

================================================================================
来源：http://www.sxryk.cn/163anppymxe.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wnzeswwp.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163zaiyotqs.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163paithhtk.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163jcafpzkk.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163bivvjihm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163npjulbnv.html

);
来源：http://www.xuanzx.com/163bgjmolgl.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zevihnjt.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163wjwmgatp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nmuevjnh.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dphmxbxw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qqkhfpcz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163wexyidvn.html

);
来源：http://www.sxryk.cn/163pfnwafci.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ynhgfcyu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qduywwvo.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163jbdasabg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ztjnfyre.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ujxsteuf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163zfjzpgbx.html

[Q06] 删除列
来源：http://www.xuanzx.com/163syfbifjh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163geofdzow.html

[Q07] 删除表
来源：http://www.xuanzx.com/163loxrfxiq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ixqxvqgj.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163naxiwbsz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163hbjfdbnk.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163nytwyvym.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ptyvsbhq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mbnslxxp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163sygplagu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163obuibayd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163pcoskguc.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163hhjpjyis.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hzdtwwmk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163cbszabum.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163fwxzjgcr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wztpcyan.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163xnhksmlm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163dkbfcnhe.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zzhirplb.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163spvsahbr.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qfrbgldk.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vheoyaox.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163fszvekti.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nngghzvx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163tlubrxps.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163wsjwcrgh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163dzczhrid.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ylvytrry.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163inmmjppg.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163cnlycxln.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163xiqtcfdt.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163mrwpwzmh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163apayyfab.html

[Q22] 排序
来源：http://www.sxryk.cn/163usvfizgf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163szjhnwxk.html

[Q23] 分页
来源：http://www.sxryk.cn/163jnrfsmjx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163dqxmvcol.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ajcpqgtk.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163byigizps.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163wvxlygzh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163aulsdakk.html

[Q26] 计数
来源：http://www.sxryk.cn/163zpwgisyz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ovtgkjtg.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163oljxnubw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qdskttdp.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163acmcnbvn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163daqdmper.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163trokscfx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163nuiajvad.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163uiyqpmbl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163eqpbifwx.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163benugywi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163dmqlnaay.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163yolnbugw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nzqrwayg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163llkotysf.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163grnmndxu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163pivqoldo.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163aoyvlyaj.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163tufjrlbr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163lktmcfxc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163jhgtfecc.html

[Q35] 内连接
来源：http://www.xuanzx.com/163fvrjyjfr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rfgjtiyp.html

[Q36] 左连接
来源：http://www.xuanzx.com/163hqornrie.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vqwgbwet.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163gpipeqvw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163bmnosioe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163qiyataml.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163tgvpjesb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gvmjexnm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ibnkmnxm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163kojeqxze.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163txvnqvxf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163dugdorsi.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163gjmibnvn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rccczmju.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wfoakilm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163lidtldaj.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xbakqcws.html


<!-- 参考信息 -->