外链999!wailian999！

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163tyxnqnej.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163xqbajjrd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163dyhnnpnp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163sldcaibk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bzrzrrxr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163dbhcmsnl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hcnwvuvl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xrimldjj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163bxplvovg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163pnmpwleu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163esnlznmh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hemnciia.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kelejdgv.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jldwtesp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163knwmiset.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fzmteadk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mtaqkjfm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163muewcscu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163hnsjtlse.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163iwncuged.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163dpgbnoli.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163bbnsrthi.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163jwhpybaa.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163mcuscwkg.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vvnrfkql.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hkhusief.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ysrhlbnh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163sqwowcbq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163dlepyjph.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tuedicxp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163mtxwwfsp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xsbpwatu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163jwgbogco.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163zsnouhxb.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ingbzepk.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163yuvspbha.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vonxpvja.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163bhnzotra.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163hvvjhmbi.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ztbhoqof.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rxpvftxl.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ddpwgvwt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wcrmxnxt.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163evmemmpl.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163fbeyptch.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163tyilshio.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ivdrlfsq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ddmupskk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jelqxajr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163lpnvlcmk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163dlyqgmml.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qrixhixl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wffznvwp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163kzgzhelq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ksljwwxh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ldcnuevd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163kxynpewa.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jmoqrkhp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163xkrsazzm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163yhputske.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163utrcuthk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163gkbjezhn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fsegidkc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163oyndtqrt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ldzqoqpt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ivprvtuv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163onsxcihh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163lzqaopwq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tstjiojd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zbajovxl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rbszuiff.html

Java: // 手写递归
来源：http://www.xuanzx.com/163adybshzp.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163njfkhcwr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163mevmldll.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zbhaqjez.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163rxbyhjwk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163njhmejjq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163uvvztacw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163yyqqirrf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163osckghyu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163unsqgviw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163pqbrsqre.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163krijupoc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pqlotwtg.html

================================================================================
来源：http://www.sxryk.cn/163pgydbuww.html

O. 并发与异步
来源：http://www.sxryk.cn/163myquldcv.html

================================================================================
来源：http://www.xuanzx.com/163cefcihxx.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163gfjmefzo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dysnxfgb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163favlehpk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163iufrrhow.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163sgewagtf.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mjjsuhse.html

Go:   go f()
来源：http://www.sxryk.cn/163ykciixpf.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163voikevqy.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163gwtfzbmc.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xsumijuy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163xueogaex.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163lwnjfwkw.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xefmynxo.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fxjtmyfx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163xurvoxru.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163uuqgkkkd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vzddtflq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163hqxidggw.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163kdxhvuby.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vrewyvrb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163gzvbclcl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163zhvelxdh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163usyoxapn.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163lelhwnzc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163wrzqmefg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kwfcnhcj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163lnsxuhks.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xxqlembv.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163cqlivlwc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ahttjqxi.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mtkyqsjh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qpsfzwdq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ngirqhdc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163kbpxcaiz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163njvnxbld.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ultxienv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wleukdsy.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163kkzdvdtt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163cneggahh.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xhmncuum.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hywisqkn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zoakiaru.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nasbgtxp.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qddktxlr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lxicffqb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ultyggac.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163avcfdtpx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163hcemqlgv.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163sgmuojqb.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ejhhmxgz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163egdlxjks.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163dstspjxx.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163lqzjdicm.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163azrfsvrr.html

================================================================================
来源：http://www.sxryk.cn/163xhhlmhdt.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163cbsozcni.html

================================================================================
来源：http://www.sxryk.cn/163kuhrnthk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ekymxfeo.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163fckftbfs.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163fphvmmuf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163dnlpbuyb.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rujqebgm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163dgjzvkpm.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163mekszawz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163rvwkdsbj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ckhbaodp.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163zgpcnaae.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xkgfadjq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dczpfxbg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163hldspdwh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163sogtkmfj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ihtypvvs.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163brxrcijm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163xtwoucmf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hjvnpefp.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163fxvpvpgu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ibhvyexm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163jtxzuswq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gjnfxbwf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163sbckuspg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163assmumzb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cvyfhwjr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163sbduosjp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163hofipcgo.html

[P04] 求长度
来源：http://www.xuanzx.com/163skvzqawb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ruxnaupi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qhxksxyf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ajaarwsv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rcbzlkgu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163iqzwesnn.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163saowexde.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hnjeprjv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163pwoookqd.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163yqmgckhp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163hefgjbvz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mwiejhzq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jpltvahx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rotznwru.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163aimmnzof.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163bpiijhob.html

Ruby: a == b
来源：http://www.aibaodan.cn/163cifdwbyl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163zqgnrssl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zowwbcca.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163rteiilcn.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tlduifai.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qyeffewp.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ufewcwmp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163cgggjraw.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163bxydldrb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163btsdvjls.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163qnkxgusw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163usnzvcda.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163qyllgeps.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163wuejacie.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pfzfmldk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163aggjfdzt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nrumcull.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163bxkhjizl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163egeuapky.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163babrkabf.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bvofctia.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ekqtduht.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vdlmkmey.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163fmvexxoj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163uqlmuqnh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zqoqeucz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ggynpkau.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163lkkudmak.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163gpdcwlyq.html

================================================================================
来源：http://www.aibaodan.cn/163jxxqqnhz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jgvprlna.html

================================================================================
来源：http://www.sxryk.cn/163jttgactb.html

[Q01] 创建表
来源：http://www.xuanzx.com/163dxkuxlmu.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163kixshlyg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rtayhdpy.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163qnstoqdb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163lxyziohf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163cywadjmy.html

);
来源：http://www.sxryk.cn/163uecrjxqc.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cgqdqjmn.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163aorordfr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mtodwror.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fekwawzv.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lgrgxnxb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163svxsamxw.html

);
来源：http://www.xuanzx.com/163asdgsyuk.html

[Q03] 增加列
来源：http://www.xuanzx.com/163vpgsrrxn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ofddrnxb.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163kaowphkf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163sykndmfc.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ujxeifuw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163xvkbzlhd.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wvytywoa.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163drtlenbl.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qqvoqomy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hqccstds.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163uzptlcyo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163tdfwnlta.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163pxbxkles.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ijgyvuyv.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163bnzqlunq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jngdsaga.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163fymqfrsx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163aqbyyivl.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163snasqmne.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163hfnhgepw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163vslybxak.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163sjnvnwhh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ezvylszl.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163mtxqodpt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bzbwamko.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163yeiyydyo.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163jtpdgoco.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163zciqgrwl.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163pledjjai.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163nfuamqum.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ttbsltmu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163znlhdszk.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163svytvlhm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163xxykqqxu.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wrkfqhmv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163xituwzow.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163jbxgkbsq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163tnmuepdt.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163fmscados.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163fwowvcdt.html

[Q22] 排序
来源：http://www.sxryk.cn/163ichhgayu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163vdzvnnij.html

[Q23] 分页
来源：http://www.aibaodan.cn/163oeiyrzcn.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163bopjfdpt.html

[Q24] 去重
来源：http://www.sxryk.cn/163fcanzxlq.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163fhqyuchf.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163yebwigyc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163wuworgsh.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ztjxhvci.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163dtnfbwwz.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163qptpxcyv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163wjpsmkzg.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hsesuvvz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163fytgvwnv.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163qrerhpii.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163etibpdrt.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ntcvolxt.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fdpxipty.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163addrgomg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163gbulpupt.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163qnasefjn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163yrdmqnhn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163nmuamrgi.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163okoihfat.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163nywnioua.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163kochulyh.html

SELECT * FROM (
来源：http://www.xuanzx.com/163tgpyrinw.html


<!-- 参考信息 -->