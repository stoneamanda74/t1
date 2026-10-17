外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163utrkihst.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163fpmowssj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163vzllzybg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163jbzjblzk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163szvgcreb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163mcmwyybl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pdjvsulc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163pvrfwnpx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cgdfybkz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fveecowz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hlyhafik.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ktlniqab.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ucfbvehy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163zpffpees.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ikeccsvl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163xqsdqtaz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163ibpflgxz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ncwdxhim.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163enfdachd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jlcraigz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163waozfkbs.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163clizgygp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163lumjbkmq.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nmeqgtdg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163oycxruie.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163lnuxzkpa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vxatjihy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163crsjmobu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ocbpnqqf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zjdoxiyo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163stbamnqc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163udtfnpmt.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ssxndpac.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163zypysewu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163fsxritjh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xxkcpvii.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qppxikrb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wkiwywyw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163mrtyuncf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ywpfmtsg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163fpybvind.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163smrsdzfr.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163djxbtzgj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163gtzqlech.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xinqphjk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163twggnyxc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163hswjocqb.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ruldkfcz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hslwvgzh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bhdmpmnb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163yqbrxhsc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163odtuntec.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163gzkbkvst.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jmuymjvy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163meebqsln.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163eqlgtrdc.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163gagjutbi.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vkhkfcsf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kscrgzvb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163jkymrmaz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ezxgitle.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163kqizqwmh.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lflnykqc.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yqertuef.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163euhkjgfv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ludjefma.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rdtzqbcd.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163amqwrzgx.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163mfpsdjng.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163mwfgcijj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ibnmmldo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163cpsjakbh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ffiofjjs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163fonmqxzq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ahhnpsgc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163wljvexcy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163stcxpetv.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163pwdcimny.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zbugyakd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ddekucbw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zxdajdeb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tkswpjti.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163rrmfrepl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163emjixelf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163kesbruek.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163bfhfdzkj.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163uvmnzgkj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ptclnagr.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163kphznfin.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dljjkxvf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163seseuhxy.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fjyrtqxr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hxfduzey.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163tgnxpgyk.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163khtjllap.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bacdofrz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163cixcywlr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163tjipopmb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qbneftem.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kkvncwnf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163asjljjug.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nbtsbsxi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163mtamlgzu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rmsxdhiu.html

================================================================================
来源：http://www.xuanzx.com/163lhhbulbb.html

O. 并发与异步
来源：http://www.aibaodan.cn/163balhytbf.html

================================================================================
来源：http://www.aibaodan.cn/163wtctwsft.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163mnuyhdwp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163kulcibmh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163hwelvpeu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163mrlouqvf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wpsledaz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163aqlfptmd.html

Go:   go f()
来源：http://www.xuanzx.com/163watmnpbg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163iuszxkia.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163lgsrpusd.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hyakmbac.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163srjwgzoj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163unjojbkd.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bpojwjmj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mibntiut.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163utfjodej.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ibbffeyh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jguiolbo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163pralphkr.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163cfzsnbpj.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ylgblhtq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jkbjpivh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163kmhytyth.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163oltsxyvf.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pznfeujj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ylmfjhwn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163vwhukgzu.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ivichspm.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rvhjkhun.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163tzrfzbrd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163mgmthffb.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163ywydswku.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ajeferle.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xveixfmk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163alsyiwin.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ldzgzdfg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163vlgliyvq.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163yjxhvase.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163nicpomxx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163nwsacqkz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163evwpspxt.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163aqqrjukn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rwoubxob.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ssxsslgx.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163dpnusrrd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hdjvoipv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163hpbbgtoj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qdseqddu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ydutedcy.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163omafmhsc.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xkzlyfoz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163mybrpizu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163mzmerooc.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bqwaixqv.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mkpebfte.html

================================================================================
来源：http://www.xuanzx.com/163vqgqhqhx.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zrkdrvym.html

================================================================================
来源：http://www.xuanzx.com/163yhdslmwz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163vqmqfnyx.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163qvclbnie.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163myujmcmp.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rwjjvvfg.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xcyuvbgl.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ccyuzpfm.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hzzpbrdv.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163qvyxolks.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wxlkzobx.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163atkdqtws.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163scfentdd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163xfdqmyls.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163niwvoprz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163chzwkxkx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pvyfwwdc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163yqczguie.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ixahoobk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163dkehwsum.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163kjpfudad.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163iwsggeig.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163lghgplpv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jsacsnjf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qxjnljxc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163uueandyc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163sbxzaxhw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163znyrbpvp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163sybbaglc.html

[P04] 求长度
来源：http://www.sxryk.cn/163qlbreabs.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163muwsfjer.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qlzaljlc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163amxjbjjx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163eovfenqf.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fqrhgqbb.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163vsceaznk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163mnfhxtyi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ojtmxmvr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gwgdmnrk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163noiiklml.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vaptplot.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163npbhtknk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163aikehagz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mojhqyrd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163rbsfwgjf.html

Ruby: a == b
来源：http://www.sxryk.cn/163afpcplgx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163crszzssp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wijamahm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ukqfnfpp.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163bkswmbqm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163viwhabyh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163adludjdp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163elqfvroh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163lekleewl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163yedikzjp.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163iyvenmbb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163gpdybzga.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163qininxxh.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163veifodme.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qbokvnno.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fsfpsguu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163nobfvgte.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163zebgantb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163almvejkj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163qbovevbm.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163pfullaxa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ywrwemdn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163faflunbx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ylyvixfe.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mndntwwt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163szklnkpp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163twmbvyya.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163vdevhzia.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163eincvole.html

================================================================================
来源：http://www.xuanzx.com/163hzmrgkdy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163alnwjdye.html

================================================================================
来源：http://www.xuanzx.com/163izbsarlc.html

[Q01] 创建表
来源：http://www.xuanzx.com/163eauptjsh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163naugetsg.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163decqcjzn.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163tlrscrag.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163bfmibeyu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163uizfhqkl.html

);
来源：http://www.aibaodan.cn/163nzuzlvkf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mgeosdlv.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ammklexe.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163pnzbpfyr.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163witlsipy.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163mnsycykp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163pzhafkjl.html

);
来源：http://www.xuanzx.com/163yvgcpyec.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jjixldwq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ldssluiz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163bxtcyxiw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163opcmwmwb.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xiojoura.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163tqshlmsv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163zsqqzgfn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163fiulbkbp.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xdnuvnae.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163alvkhtdq.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wryaxnhr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163fivmhqkp.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163aflzmjkf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163evhpsvtg.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163zhecuwdg.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ygpuxxey.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163caglnjsd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163iwobgcua.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163yatxuzrf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163skgafyjs.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163hehlnfvx.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163qrokoitg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163hfzyeecb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163dbtxhnni.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163tzjedank.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163zwrrwrzu.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163tqvvjmyn.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163xqdmdckc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yhadbfks.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163szjegjsh.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163irjstgbm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163wewzhbka.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163lblakgwi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163adqyapff.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xtsdqrkf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163pbktutor.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163xybscgjw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163heyjbisb.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163pxwybvth.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qaqrppjy.html

[Q22] 排序
来源：http://www.sxryk.cn/163xcwckgey.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163nqhzuixw.html

[Q23] 分页
来源：http://www.aibaodan.cn/163pmoetnuy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163goxmwajk.html

[Q24] 去重
来源：http://www.xuanzx.com/163maizfzae.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163inuhyylx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dvpqmnyr.html


<!-- 参考信息 -->