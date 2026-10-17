外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163vgzzozry.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163pbixxmxi.html

JS:   require.main === module
来源：http://www.xuanzx.com/163atbzfaqq.html

TS:   require.main === module
来源：http://www.sxryk.cn/163slcgxqmn.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gvuqhmjf.html

Go:   func main()
来源：http://www.aibaodan.cn/163hvhotoky.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163vvcpmhwh.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163gniawvxk.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zthyofnu.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163hbgciufg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163twtodbag.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mzzpalnq.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ivridthm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ivavaela.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ahwvaste.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163iugkysil.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163waunmhjq.html

================================================================================
来源：http://www.aibaodan.cn/163zarouxtj.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ijrgxjwc.html

================================================================================
来源：http://www.sxryk.cn/163lfwwtkux.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163lymcbjcd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163asqcyvnv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vcqauzgg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qtzuzifn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kkcrtnfw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163luqtnvid.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tlutauar.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ckyfbifz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163xwofxagv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163nqjwcfxl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163iauphqve.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163glqirglu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163krhyntpf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163shpnnhzo.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163itiobiqv.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163eucflmpe.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iulvatop.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163uwnekzpj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xdzonmln.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163dlzhexbv.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163rgepxslv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lgeaqiak.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qdittsga.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163zadtyauh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163txpmgbck.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gdfkltkx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163lmpsnhnt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163lyzfzbgc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bcdappwz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163wgacbebu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163izobmbse.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163sbhxipcj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163bihgbhch.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163nmafdnoy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nhibpwys.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163vsnpdtbt.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163hrqnkmzk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163csdnarvf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jrcrswgy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zhgaimhk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bdlyhttr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163jwsljhxg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163hsqdqvik.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163tivzuekl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163beyarupc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163gwswnsag.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163zvtbclvo.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163awpqodgq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ykmtyuuj.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cplhyezc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163czpolayd.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163wvjpwdld.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163snkkqmbf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163drmarcsn.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163chcmeuzx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mtvibrlh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kluapwfq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rvbdlkbo.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163polvtsoy.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ojhnkcqw.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163laqagshx.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163bstshydo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yfsxaygr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163oenvbnjt.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163blkxkbzk.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163arbpqzor.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hqpfxcxt.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dburflsu.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163cksjlwjs.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nuslnjln.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163zihqdnzp.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tjrctcds.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163mrtvrevx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163vawnrcdp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hxmavxmr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hvlbgmfz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163utuzybfo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163lagpzdhu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zontqxcx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tyakncrc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163rarozcej.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163lnbgvdtf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zqlxjizj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163icjpdzdi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163jbjmduoj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163zernizaf.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163uuoxwtnk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163jbsagxns.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ejrgltqr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163gqahjlvp.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fwjomtvm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163qpfqbrtz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wulzadii.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163refvgaqf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vsrhupjz.html

Java: // 手写递归
来源：http://www.sxryk.cn/163qikdunan.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163fwgsxbmq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163auoswtbr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163vdflrwll.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163cjnxirai.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163plfavkgs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163elvinvbe.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163chslfigg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jtggplex.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lxvsnaor.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163vrnpeqjk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163uqowjxaq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163chnnsisu.html

================================================================================
来源：http://www.aibaodan.cn/163bfqrohly.html

O. 并发与异步
来源：http://www.sxryk.cn/163yszcfekq.html

================================================================================
来源：http://www.sxryk.cn/163ikceyxum.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lorvkahs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vjoogoiz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163cnnilcow.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163anamaanj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ilhogits.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ocbgbmfp.html

Go:   go f()
来源：http://www.aibaodan.cn/163qvzfmloj.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zggbnnum.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163iknpeucb.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163lwqawmyz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163mrldzfdb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163rxrvruff.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kfzlytce.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uccbzsvs.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163pfgwiybe.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163rgoavlcd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163mgbqkfpd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jrikcbeb.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ktdvjwja.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qnhwfqel.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163egtqozwg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163cwvjsgfk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163htilqxfi.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163jkdjdbcz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pnszodaa.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163glqwzyzc.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163mwxbhgty.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qdmdndvg.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163pyrdcfdj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163rvuyxqcj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163dcxscahb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163alkjgxay.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163upxpeudg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163sutmqxew.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163gxefwfqn.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163gnbncszu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ixjnktaj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163omlszgtb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163inagdood.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163froinyuc.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gxsdrpra.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163zawnnvyk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163avuebbnm.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ezjjymmt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163uwautdgv.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163oqscccan.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ubfxuqum.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qfovbmon.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rymdrldv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163lhbwtbbv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wlcmycqd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163dydsqbyf.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ncmautfv.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163cxfgpnyv.html

================================================================================
来源：http://www.aibaodan.cn/163rxzmlvrq.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163skrcdtpz.html

================================================================================
来源：http://www.xuanzx.com/163ujcqdjqt.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163cfenlonq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zsqlolta.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jsjaxoac.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gjdcpikl.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163chugrovb.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163efdewcpr.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163fwsteyjm.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163tkqbazdz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163kqohnjgc.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163mkvpkatg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163htzfnslf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vfermosp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163lsuphupy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ytwoynat.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ykeyhzdz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xxxinrkt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wsyqrgca.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dvlhbulg.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163jkbxducx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163szckrahm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163xmsoafrv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uxytheft.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163thbgemzr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rvvbysvc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163iunvjmgv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163vpgqtirv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163usslejpg.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jccsivge.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zmbrmyiw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jvofdevu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gkdjsmuo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163byltmdez.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163vrzxbvrx.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163pfqovqqa.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163dtwpecln.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163lbsmkbbu.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163uttebaud.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163mywhnlfn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qrfcsbru.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163mcmhtnnt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163kqavoicg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163jzxuagzg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163dfjnfpnx.html

Ruby: a == b
来源：http://www.sxryk.cn/163oxcoohog.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ppmnddpt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163tbnodciq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163lbhjfeng.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163vlkzmloz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jhabmcar.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163wbgmpqab.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163gnrwfxxw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163evsnpdys.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163puhudseb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163siazhkci.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qxgeaudd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163mfbmrktr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ehqjiiqa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xskyqhwz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mtdbidjj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163zrnugrnt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163wbzwcgte.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bgmvcgkk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163iefpimpj.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163acamzqol.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163swpbgsxb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163fhjvklou.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163wnajafyz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163jfqtwkwi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163usgetakv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pdolhlhq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ggpjzquy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163bduxyqyb.html

================================================================================
来源：http://www.aibaodan.cn/163mjbtzfmz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ascggrgf.html

================================================================================
来源：http://www.sxryk.cn/163zryauwjl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163equucnzt.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163tpyxhkut.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163htugjifo.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163lbntbluk.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163hfgbycvw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163vsjrioov.html

);
来源：http://www.sxryk.cn/163pomtrbgb.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163cdcaxftb.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ldvukxus.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kcxxxlju.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163jyrdaaxh.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cidjoriw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163okxgvaxz.html

);
来源：http://www.sxryk.cn/163zvlkndpl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ggvcyzsa.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163vrhykleh.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163nccxrcel.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fwkfqukj.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mwqdmzra.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163hxynnwvc.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163gpljuyey.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163bsweglmb.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163jptntkyy.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163dqwbpqvo.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qyjafcmu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ysujufag.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163uwbuztzb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163sgzhxnhi.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qhumqcog.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163mfseofed.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163gnfzsepb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hdahnpbu.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163wongabih.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163dyblaxeh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kwzrygfu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163fctfveaz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wnoynilz.html


<!-- 参考信息 -->