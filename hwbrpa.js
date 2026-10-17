外链999!wailian999！

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163qijovasi.html

================================================================================
来源：http://www.xuanzx.com/163lljoqaqf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163fpzfmxpx.html

================================================================================
来源：http://www.sxryk.cn/163hpcsccwo.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163bizfrjvh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vifuwkqn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163cnnehbhf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163reaayibf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vxbvvlxp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163lmumomdn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163lcmshaca.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wiiukaww.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163zrkayuzw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ujeioaou.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163bjpjdclk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163lftvxort.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163vxtifizh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163skuklqrt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cfjgwrrr.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163fduiyogb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ndjkxepk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163lrlfzmyy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163dvxtklmy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zuymiyyd.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hklakocz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ncnmikcb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pgvmhcth.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163cselvfse.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163qisjqior.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tiwactib.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163hsvfwkch.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163tijbxchr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163eybhhxja.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163daqnxmch.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163owfhncxb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ookhzkaf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163fnekgzjv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163cmwpvbpu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nmeubzdo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163hihwyoim.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ctfcctbd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163wssltvbu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163cwecmjts.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163juiuhtuk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163valqimxl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163yymvwffe.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163qfvwlaiv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nvaqdbnu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qnnfuwcy.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163brhtbgis.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163vqchbavs.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163moddutwl.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mfcllbzh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yzkyuarf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163altgibbw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ctnhcxgv.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ymbpisyi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163phmtynvz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163fhwcixml.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gbfkkrrr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qrufkhju.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ipurkgnh.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vxtnqqjw.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163nsciaxhu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zrttjego.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163cdxhbdzk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163sbrwymep.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163fgarmgcg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163oafauzsj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163tnaodhyh.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163znblyild.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163eabyqnwm.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163dskmzsli.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qsklzhjc.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ledmkgeo.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163omtjlfpj.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163vhxdjboi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oicztags.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163yfgtagiq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163czcyqwwy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163mjrjvjfn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jjtjiiil.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ubduxiym.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163yklqcwll.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163cbbqxbvo.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163hldtavic.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zfuwvvgm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163rxdkcdbo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163skrmlccr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mrhgtdxs.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ixsslewl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163aaxftgww.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163yjhhfrsz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163oywvjdso.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163cezywgct.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163rvhlznip.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163bfqiitkj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mogjqbue.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pgmantso.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163dpchaqrx.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dymggvtu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qpbaegky.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jmpdixhb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163nvvqnqhj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163uattpesv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163zqrpxhbd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nluodylo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pypqlzyq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gfkcjdhn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vufqzrtl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163imvwtdui.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rmzhufde.html

================================================================================
来源：http://www.sxryk.cn/163fdfvbfgz.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ptdcsnuu.html

================================================================================
来源：http://www.aibaodan.cn/163ctxsfrhm.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163owrtxlnq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163afllpsga.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163udfkxozh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163scyavewg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163axazfelz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163bstwykhg.html

Go:   go f()
来源：http://www.sxryk.cn/163eztmliuz.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163gunhavwz.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163okmjoxxn.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mpsrnqmw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163qmegkfqm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163lecwrgaq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wjeibhcb.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zjnxitki.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163mbonnvri.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163wxnazjqz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rpaksryn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163wsdomovs.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163gxdgtrjt.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ftinvydq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163yifzdqzv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163nelvnjra.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ayeajtyy.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wamaiyft.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163wfhzhfsj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ypeoimaj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163kshwvazg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mfzsoapn.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ystnycon.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163sqrqpqsb.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qdqzninm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163hxwzgxih.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163lhusjdup.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qenuknll.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bmhzfbkj.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163oyjnssyy.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163cycuaxge.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163xsmjsuyv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163nucdbzgy.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qxhnnpou.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163nlajjhuu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163augjzeco.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163bsvlrtai.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rkciqzfu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163qdhdxrqt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rtukiglc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hejysdcq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163qmdpqxzm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mwpwvptc.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163gvglzcvs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163kuuykgls.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gouykrpq.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163lxhmkjeu.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163zynbbevh.html

================================================================================
来源：http://www.aibaodan.cn/163tnxugmyv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163eunqhhwk.html

================================================================================
来源：http://www.xuanzx.com/163shvevbta.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mcgeaprg.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163aseirtlm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tswbslep.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kbpzpjaf.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jwbaqfhc.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ufdfvvyg.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163kvaueiwe.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ivzqcbwm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163uucuwvyw.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163erdrgckq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kidxgzrp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163dgamaysa.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163zbshiyod.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163fqvonlug.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163tugofjml.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163qmntennd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163tvskbmna.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ednmojcv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163akwpyrtb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163qgocfnlc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163hlpvcibq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qotwkskm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rkriiaka.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163fakqatdf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163uxwrpzyi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163kvymbazw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163rceudfjg.html

[P04] 求长度
来源：http://www.sxryk.cn/163vonllyfo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163aarqyjlm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kqfkjrau.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163psdifiet.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xviiergs.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163qgbypxqg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163earndvuj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163fcenuupq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cxxzodbr.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163eqorjfah.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163zlnospyp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163mewrvalu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163yjvwrzlj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bstmqetg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qcrmwucw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163pkvfqbrc.html

Ruby: a == b
来源：http://www.xuanzx.com/163tvitrakm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163cjvviiqx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163lykkjahk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163rjcndtze.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163lpwkqwta.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163thpeqgcf.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163clizkmdo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163topwczwm.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163znvaughp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163skhaioic.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fmatmwmk.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zejxrjen.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163gbsgxpcs.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163zlomgzvb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ejaoydab.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dvaohslq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163dunyfhto.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163mvdqkerf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ypmvlfqx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cfnlcoia.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zrqqjqns.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163cqrgdukr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163jxjnqsvp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163rbmbphbu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lgrikqhb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163cagggsog.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163hdynntgh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lftedkis.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ptqwoaeu.html

================================================================================
来源：http://www.sxryk.cn/163oapzgiti.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ipuozmag.html

================================================================================
来源：http://www.sxryk.cn/163ywisgznz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163agtbwpnb.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163mlmbmlsx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yqfzoyth.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163wnovsffl.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163kmdwlcdy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dxgfxrxp.html

);
来源：http://www.xuanzx.com/163ylkahzpb.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mjkmycpy.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163wjulydnm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nicedmqf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vmayjufd.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163qgdtztnp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163iukgmvaz.html

);
来源：http://www.xuanzx.com/163wyfrgctb.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ncpbvaxu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qxhrfgxb.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ixiqwuye.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163enmxwhdt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ckgbmlyd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163kmbnttfn.html

[Q06] 删除列
来源：http://www.sxryk.cn/163nusizpkk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163bdqwxkyq.html

[Q07] 删除表
来源：http://www.xuanzx.com/163zuslfxhd.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163knlwztrh.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ylxzafko.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wfdjhcfk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163kyobzexh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qmukqugb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163kuxlcxih.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lhnrmvai.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163tjoninmy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163srqcelew.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163bogzfyei.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163elsizxqw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zwkifhdn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wjywetum.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ntugsexz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163paflticl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163szzlsvdx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163tosrlxve.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163qoblczsx.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163sfauahjj.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163rlciylrr.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163lmwhtyuh.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163vumkywkv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ydrsafgz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qqrpxjiw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163cgwfvktw.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wdirjzak.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163wrjxzeqo.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163cbwlpduj.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163vvfyoqpq.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163qbkfyapq.html


<!-- 参考信息 -->