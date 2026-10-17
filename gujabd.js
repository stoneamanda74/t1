外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163xrrhassn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163unqemlkw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mtpuohfh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163vkqctgco.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163euhfaeiq.html

================================================================================
来源：http://www.aibaodan.cn/163tpdxvrja.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ovixksce.html

================================================================================
来源：http://www.xuanzx.com/163uaufeiky.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ysvaroap.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163xljdktro.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163couonyxv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nagylbfb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163aattoxxs.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gqsdxdpx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tuenlevs.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163huwmswgt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163rggnkacf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ywknzswf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fdkrporl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163cyzjlmtl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tbcklfxh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163czqsmkdi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163jsgehuel.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163pdqudwvr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163oeztcdoa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163vmeuyvza.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163oqfakeay.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163phnvbure.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kvcikzlw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xknxgiqe.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yenglyqm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163zaxrkcdm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163qcyyaesj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mtrwzovy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163osbqyscw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hdathiue.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vgvrkdmh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ltmhuztd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lnmquioj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yvagabfp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ykhftlcz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163zmhcggsa.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163atjgxzfy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163qfuamqvd.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kwitqofr.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163yftlgoeu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dxhhocyc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163yrgdsrhu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cvfweybg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vfbcwgrp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163bkvdobht.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163vhzcvrqt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163zaiusysn.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163mydykndm.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eusjkbrp.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fatruxlm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tmjxbyws.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xlpkwliq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163cltesthl.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163udtoijnh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163irbnqwgc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163iyzdfjje.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163fnpjohvg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163cusowewx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ahavxtac.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163kiacdqml.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163iauookzl.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163uuiyiacm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163fidbqdwx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lmosekzz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163yczgofgs.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163mtqfposl.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mzhjbiyw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dvfjuixh.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vvnroicx.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cssugjew.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ehblfusy.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nmclvmms.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cgkbofuw.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163norbrfnl.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163aowdbjql.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163dxkzgkrt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163jgsseljp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163kakocush.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163urgexohw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uogiiefz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163cqhdvuhs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163auuwarwu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163pkeiwzjs.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gkyqsjhd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163pzgwbibr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163czatqsqv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163tdnrzcrr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163awjjlqnm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163wbxuewkt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163bvmlbyvt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163lhyqeqxf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hstyvxow.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163tkcbtrig.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163dwayvdnw.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eifyvlup.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gxgoyelf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zxsfhavn.html

Java: // 手写递归
来源：http://www.xuanzx.com/163uqmensiu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hlesnrib.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163dennrclu.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163tadxibrc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vihkeesm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163czhmxwmb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qqegcrdt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nbreehfw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163okyccyog.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ipsylgsj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qhlpjsrw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163gmvkusbz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mgrovuup.html

================================================================================
来源：http://www.aibaodan.cn/163eumcvcws.html

O. 并发与异步
来源：http://www.aibaodan.cn/163rfaleqzs.html

================================================================================
来源：http://www.sxryk.cn/163igkeqhqw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163gbauiilw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163dlgkmuta.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163knxpapte.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163weoaxvkb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cltqkyxv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jngmmmdv.html

Go:   go f()
来源：http://www.xuanzx.com/163nqicrojj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163quxmvinv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163lvjhncnc.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163jlbwztbj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ybilcqmk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163bdyftmiy.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fivjzrpe.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yupfezbq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fxptleiv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163sdvpreyw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163tapvpyyc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163sstywvhs.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163bsrleukd.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nutxarnr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163bharnhlv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163whzxwyqb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xfhjbprb.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xotelzto.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163csotfeir.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163sxqgqkew.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163jpfdxocs.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163vhlxonmk.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163tvqoztbj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163rwcvzjcl.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ynexqygq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xxltggyy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xkeigaja.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163vpvaqdct.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jbihijnu.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tkbpuuhz.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163loueqnfr.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163hnajnqha.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163oivvacyj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163abhzlaqg.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bybtrpur.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gcihhbnu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163znwqzofg.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163hztyhvxm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nlujohqz.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ogzwvjcr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163gnuatgvq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163otsnyuxy.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lkxdajdf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ofdwprpi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163utezbxrk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163lnxkayqi.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ksnoxjmt.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rpkblwmd.html

================================================================================
来源：http://www.aibaodan.cn/163fdvfjyqc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163lsbmhyjm.html

================================================================================
来源：http://www.sxryk.cn/163biltzxui.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ewfgayxq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163afuereyq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163bbxllsih.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163oqccrfjs.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ujxieumk.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163iuaywxqn.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ssljhbad.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ktgtcmmx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jxozkjyp.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163cmrcxnef.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163agdifybe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qfeqjmsj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cdlxyfiz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163hbnhczns.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163stufmomf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163xkwmwrjh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163zyybdtfj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mnxovyck.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ryybrbmr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163grlsvkjk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rfetjupa.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vitidozz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163huxbxkqh.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163jnpfdbsu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163hnnekotj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163azlcqkzh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163zgkvhpxi.html

[P04] 求长度
来源：http://www.xuanzx.com/163apczvffk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163oxfcjilv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163trxoibld.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163iodbiadg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163trvuymji.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163cpekygxw.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xelqikhy.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163lihparok.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163iindidql.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163dnssxigq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wvggbiuf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163qbhlamzj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163dbnpouca.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ewgcrvkt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163nwlqztmm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qetuoczd.html

Ruby: a == b
来源：http://www.xuanzx.com/163bhpexbqd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163tzplopwn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163zcaizdwt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163vjtudsje.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163smsmguho.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wkxjnezi.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163vkzsphni.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163qezeaxvg.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163hqnrycns.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163bhwpkgnn.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163mvwlnlza.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163frpczeid.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163tncaaboi.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163dxljecsc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pczopeby.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wmeooeyn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163daevwhei.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163kfhdkgzm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163wwxssqzn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163fmnjisuc.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ujjcpayf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163jisgkgcb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qvcabwys.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ogwlwhwm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163oiawfins.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163imymdngx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163dfnidule.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163nzmbcezz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ncyxbiff.html

================================================================================
来源：http://www.sxryk.cn/163amghexdc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163davhubxh.html

================================================================================
来源：http://www.aibaodan.cn/163iwvkysix.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163tefyenej.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163qouyepln.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ymyeecrt.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163cbqbzmwx.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163thstgkop.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163zsinqwxd.html

);
来源：http://www.aibaodan.cn/163lzhyzqzf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163knhmvuwu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163sgjcfppg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tagegkyh.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ivqxiaio.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163sditlrwr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163vzxviqgr.html

);
来源：http://www.aibaodan.cn/163ilniryxi.html

[Q03] 增加列
来源：http://www.xuanzx.com/163iidnjtjs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163pwkvyfli.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163faxdozuw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ygmnrgoq.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163zbayiwhj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163sjxgftct.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ohzmwfvg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163kfcclxvb.html

[Q07] 删除表
来源：http://www.xuanzx.com/163wxtsqhmp.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163higcjfba.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163dtwumuss.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163lxbeeune.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163nogpxllq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dfoblsfp.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163kjlqqsgm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163fakgjgnv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163guwsqcyf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ppnzjepf.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163kxmepzjg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163gmeixvwn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163uainrfnh.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163fzhlgjnk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163xlqruirg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163vjllucko.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163lvrsszyk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163sjagolfk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cxcgjbwu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163xdanvutx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xsrsifho.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163uyantonh.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163gkmamsdd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163sfvwqdof.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163yqcgrnse.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163yvtxkqej.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163oraaprxq.html


<!-- 参考信息 -->