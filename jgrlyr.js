外链999!wailian999！

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ctwpujro.html

================================================================================
来源：http://www.xuanzx.com/163bgmbevmw.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163wmzdiuyi.html

================================================================================
来源：http://www.xuanzx.com/163izrvfotn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163gjeoffcf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gwpqltrj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163epbvtwoq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jmgkynbx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163npkccmpl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163oxvzykya.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163kriaqnhk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163yybgnjnb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163rppexjbm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ohkjasmc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sbrgvcrx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ekkobwbd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nvydnspr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wkplmkwc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163uthhaezk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163agfoxrof.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163npxeuwir.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163bskbmfvi.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163uojqeeqm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163udchimio.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163suhmorcy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163scoxgpoa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163znmnhzhr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163eawqieuq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163vckyilaw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qypvzgar.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163atsftmpe.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163slqihmfz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ipfsyjxn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163dqzjjydc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163encgagpy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cgpvjyhj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163wzvtjdxu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jlgxeklp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163notvtiir.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163jougdbuv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163lvkimoui.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163viaphnlm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163tnufprco.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kmdjffnv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wtqoqnoy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hlhaleev.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ipbrflnj.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163nujxaauw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hybxvmsp.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fgddygol.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163zcblqgdp.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163tpipndjg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163angpesxk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nwkvzvpf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163baydiedm.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163jxhivzzh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163fngirmsu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qmtkplsg.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163tapufyxd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163nxcewdcp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163naiemmeb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163aawblllj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163nfjudjtn.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wxbawkza.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gbvkpuun.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163pqloktoo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jmozarkj.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163jrjspbdd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163lbspgatc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163trjyxyec.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163djoawcrw.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lqanpppz.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163bvlpxywv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wzilgqhz.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ybraflzy.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ansciebb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163qybecvkg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163jqmpxlji.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fdporwja.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xcmhhaqj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ndymahay.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163iemogslh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163wegwwhsr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163isrhrfal.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163tvecgvhx.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163kfuzvong.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163utpotjhp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qhxegqmx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ggmsofgb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163dqeekpop.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163koyedjit.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mlddtdhx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163otypoprz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163sxsyyfwt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163otjaxvde.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163powdsaop.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163srbjlcsb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163badgbhzl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kuxydfiq.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163cpoxxffj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163igdxbxvy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163hjjscbbb.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tmtbmdkt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163gsqoigxb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163cdwgjzgb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163frrpfbib.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cjnwlimb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bhqnaxhq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ruvvsgqa.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cuxtjpap.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163rqqdihrp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163njadlurn.html

================================================================================
来源：http://www.aibaodan.cn/163orpdlhez.html

O. 并发与异步
来源：http://www.xuanzx.com/163hucdoimz.html

================================================================================
来源：http://www.sxryk.cn/163vyzjidka.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hskgnrot.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rrljaajz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jtwzxwzs.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163gymqrbgq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cwglijdt.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163qffpjqxn.html

Go:   go f()
来源：http://www.aibaodan.cn/163czodqvlr.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ueknxgfo.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ocgytays.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hixcafih.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xdefuuli.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ymmoksvg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mcullmpa.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ettfyvqs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163eophqzqr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qqjcjqmf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163klqvqxhp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163fjhybfhy.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wdonzjia.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zwvdioyg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163jzlexojg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163kptkwfcc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163amjcjwvm.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jvpqyiaq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163twikpikm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zdapwbux.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163lxrmauoy.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163lptlgvav.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163rvbjxgva.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wtsfyjpc.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163hdtmnbyf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ionvpnlk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163liuxiptv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163zysypsne.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zoqwnvey.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163vsuaegnz.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163vswaddah.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ogeoponz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163deviatxq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163udkrbqgf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163psriawiz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163keuaijkg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163hjtdlpen.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163jregrbmg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163mjmrvlwn.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gliotxsz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163sssrtfxc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vflhugqt.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rzaxqqwo.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oihymgwi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163efvtuwmq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163iwnvgkjo.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163uknusexd.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163aepztadx.html

================================================================================
来源：http://www.sxryk.cn/163dzbtdjog.html

P. 常用工具函数
来源：http://www.xuanzx.com/163xvjgltuk.html

================================================================================
来源：http://www.sxryk.cn/163jnpktxqg.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163retvphhn.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163avqkcjhb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163xxrjckxi.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ejlnzsvj.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xaidlwmd.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163mqtgsyub.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hqwiotgx.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ikzqfxmv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wncfqrzi.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vvkfpnih.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163snmavnsi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163shwliocd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jhhdisyu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163hvghrjfz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163htscfkwj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ltvrbwyx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qolgrlzv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163feidtyay.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163mxftwvaa.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163mafoogkx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163sniybcmw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qkkxuneg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nskvctoa.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163solqpxds.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163bnbvfkvj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163zzumrjtw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bpiwaimp.html

[P04] 求长度
来源：http://www.xuanzx.com/163ilkduejl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163phnlgzup.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sjdgcjts.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ipgumzqt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163oufisqmi.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163cpdngsml.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163cbuuadqp.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ygucoite.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ebiiatup.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163oqtnohub.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qfdkbmqc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nxweprtn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163refcofeq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163izxbpwsr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163aivyjfjl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163kvjdpgpu.html

Ruby: a == b
来源：http://www.xuanzx.com/163pvnmttfz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bnwyvucf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ugxtlzvv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163gykjyvia.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163gfgosdrz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pllgpend.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163yawyenji.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dqttfhrj.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163edghwsnv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xciguxlq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163nqvtnvpp.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163odhnihmt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jcvrjfaj.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163oxfhmwxh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hpakeyfn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jujpbklb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jahhwwzo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163jikkgcmp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163utjdnnjo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163rppuecem.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163jsiojsbr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163nmtleefy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163kediwjgl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163kfrnrltb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163vbqqncom.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163waxthmxc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pfitivjg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163xwgucrqo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163apkdwdni.html

================================================================================
来源：http://www.xuanzx.com/163pzzicprb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163fsqdkfmo.html

================================================================================
来源：http://www.aibaodan.cn/163kwlwjksr.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kokjjimb.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163majpqlxu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cqbenrkv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163hrsjvhzz.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163mjqzvktm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163gphcqpwx.html

);
来源：http://www.aibaodan.cn/163xuchayxg.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163zdzxyzxs.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163sutxxqtq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163advkefxw.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163rljjxjpj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163yjemgcrq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163cmafqwdc.html

);
来源：http://www.sxryk.cn/163iubfxblv.html

[Q03] 增加列
来源：http://www.xuanzx.com/163uvgvaktv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163bnnzwgtr.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163eskyfssz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ivdbhxeg.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163mclniugt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163cilnyyns.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163hmgdyaqb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163erldsedi.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163algeiwnm.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ksooojwz.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163lmgdxphq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163mfhszscd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163tmfifnpz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163gfxwdxcf.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163lbqztjgi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163npoebhqc.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163pypebytq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163naklqhzi.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163prqbtgpw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pnrizcxq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163bneblvha.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163aanfbxcm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163rygtmoeu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ngirivyj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163jarnkykb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163hdmqxptw.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163hucfnmba.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163dbpbrnwz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163uoaagprj.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163sqfuklod.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163lsetzgtv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163lfunhfoq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163psutdshq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zvrkbcyl.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wgjqsnsm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163rserffel.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163rsnixmhb.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yudbzxvt.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163byilpggd.html


<!-- 参考信息 -->