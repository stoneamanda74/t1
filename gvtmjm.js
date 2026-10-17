外链999!wailian999！

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163hhgjsppp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163gxogyqbw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163pitjrhwa.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jadwream.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163zhvmzwid.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163sjzsozqf.html

JS:   require.main === module
来源：http://www.sxryk.cn/163bmjolcuf.html

TS:   require.main === module
来源：http://www.xuanzx.com/163lkremhla.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163sycupljk.html

Go:   func main()
来源：http://www.sxryk.cn/163ziyltsqw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ylyxltkl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163wbctywih.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cdlpkgth.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wznkodxw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xundtjtp.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vccowptb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pkgwtqto.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163zjvekusj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163jxefycur.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163umkbphdq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163cqywqhvc.html

================================================================================
来源：http://www.xuanzx.com/163algurmga.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163rnjzflaf.html

================================================================================
来源：http://www.sxryk.cn/163msqwqtbn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163huimorqg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163nllpnxnd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163skzzsvor.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jzsoybgg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wmsipwim.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163jxiudmpn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163pivyribk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163jwyirxha.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163hfcjnyxc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163dxdiskjg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qmtbluzc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163rczacbdn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163msnallcq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mixdakoe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163msxutcgn.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163amhswdiy.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rhoxyuss.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ldryxymk.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163kvukfclx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163zonsbuer.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163djnoyqqe.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mnojwqjs.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ljflqkmi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163fxiubpam.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ebsffvqv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xjynnqci.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ubafsmcz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ltxdamkk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pbkhgoff.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ucsienrw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jwwvgknt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gjevajbu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vwlefsjv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tilibhqe.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gsorutnb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xqrpwuov.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163bjlmmjqw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163dcdxafro.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163zullumej.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xaeeoxdw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ajrkqyjr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163fdaynvjk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ufaijhrg.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163snzmebdk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dqhtpaeh.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vkiqvxln.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163knhhcpji.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163schbulai.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163liujmnqz.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kldlcpfc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163bbreyawd.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163regkcdnq.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jrxvchat.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wplnovtm.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qxusttqy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163qkkulbjh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163rbijryob.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hclxhbmw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163yjofhlhv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163gmgmquap.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ueokbjbk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xvhgsiec.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163kuaydesk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163nvguhzcf.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ztroqxwd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163yjzdcnne.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ogqzhhcf.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yckdzgvs.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163kaarrlpy.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163oambnzzb.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163bhwlygqu.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jctnyzry.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163cywylhan.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ovzcgpls.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163scovtqzs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163etbeukaa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163sxlufcmu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uokxutaw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163pwibilkx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163qtuzyzze.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163yjgvmzsr.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163iuwghzfp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zxmyvixl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163eypfgdhe.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163cxkozlpn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mcaowbvh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163erzcwvtd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163rjbvipmg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ezhiamdn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163wouhsmbn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163otflcgwm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vztbvjaw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tevicfrq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bfrntrqm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163twozfcay.html

Java: // 手写递归
来源：http://www.xuanzx.com/163cjknggig.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163uxqzymsv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163azcenmgt.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163auxitaya.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163iiusrmcm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nsaesfwf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xczpwmxw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wvaqkicb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rmjonqtx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kbizzrhf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qdswrtnt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hdajsemh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rfdswukn.html

================================================================================
来源：http://www.aibaodan.cn/163flsdugok.html

O. 并发与异步
来源：http://www.sxryk.cn/163lqgajihq.html

================================================================================
来源：http://www.sxryk.cn/163snmrjldv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163uhjkihqn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ujsqybec.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163doobdszy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163kpxgzzyq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tgdjwdxr.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163aqycnxii.html

Go:   go f()
来源：http://www.xuanzx.com/163iproaodr.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163rdoisvmr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163satjkkfj.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163itdfrbqh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163gwffjyxj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163cilwldbu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qfqqzvyu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qseqthbc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163zbmfzjif.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gjpjohna.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163pzqujzpm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163xdxviwib.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163upawifvy.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163envhbzxx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163pedxszpo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163bpupaagj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fnbtqgdp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ffuumhsl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163omuablxk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fufgsppy.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163tubvubgs.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163iysbvomy.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163qmrnknhk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163hgutfgav.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163vwnsqwcq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yrpiehkt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163yqfsqhzl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163dljhqnst.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hfooukld.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163opdczwpr.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163uqkrrtnn.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163wunpzkek.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ltalcuvu.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bpxkgfww.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kgiurovy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ttcekgmi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163lmcnunoa.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163khxkvhdv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163kayoxwmv.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163wwoyhhfi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163mxthpeoy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163fgmidczc.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ygdhhwic.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jpipucdz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163gllwfcno.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ylosklze.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163rjqfuivc.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163alrzengy.html

================================================================================
来源：http://www.sxryk.cn/163sywlutmn.html

P. 常用工具函数
来源：http://www.xuanzx.com/163znigcing.html

================================================================================
来源：http://www.aibaodan.cn/163ntuhtavb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163xvblpdcd.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wqmyukti.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163mlixaeem.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rgxittnp.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gikdxwbt.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163syryhjzu.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hdluhera.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163srobfdhm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163djjncqfc.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vdrmcvyy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vhcijimd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163swwldpbj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vuzrlnry.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163aobmdmii.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163holnctxb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163kztitnhq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163oogupict.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rencgqfd.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163cojexged.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163fvuxiaic.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163kyjlidcj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qipikily.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qsnqcbhi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163nyijgkcu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163gkapgzfz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zmqjanty.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uiafgzih.html

[P04] 求长度
来源：http://www.xuanzx.com/163ontwyrvf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163yyoaikcs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163sqmbjeee.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163czfpvpij.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yvhfzejo.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163egarwixj.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163jmfqabuq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163chioomwa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163sphgcvln.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rtxttiuu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163mycrjscy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163fboizdqv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163sdphrzmr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163siehphog.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lciepyep.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163kahbylxw.html

Ruby: a == b
来源：http://www.xuanzx.com/163zwowvyeg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ibiwjhqy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163dmededxr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ngpimoau.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163prryaorm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163igukcpdu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163hyqhasbe.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163gbnpvoav.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163thqnsqyr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163tfsnxzcu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163yzmzuxig.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163kjbfomrh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163zgcoedqs.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163imaeihdc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tsgdhzbb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rwlrmyuf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163frjwamjo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163wjyhlejj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163fmzuxqiw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163smdposge.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163vnxtgysa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163cqubyrel.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163yzlljlqz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163iixeycxj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163qwfmitrz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163huttjorx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163tfniteen.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163oftfxuhe.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zowqfovk.html

================================================================================
来源：http://www.aibaodan.cn/163rbdegawe.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ayefqldi.html

================================================================================
来源：http://www.xuanzx.com/163hrnheiqe.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wunomyzz.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163gzedypzr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wejsrvro.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163mcpucvey.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163eigzxdpd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163gaocbain.html

);
来源：http://www.xuanzx.com/163qawbtyjs.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163mwzzmnuz.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jktkckkw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dpeoyozx.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163wlhgqiya.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163lyhyixhr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163kxjwyxdq.html

);
来源：http://www.xuanzx.com/163rflrpncb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163runvunzg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163napnnncj.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163vhapbwpj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xwjrtofy.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163zvjwlmuq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163tagfwdfy.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fpkrrfuv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163phmitbji.html

[Q07] 删除表
来源：http://www.xuanzx.com/163tlqexnop.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vxkanrab.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ibjtjqwi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ybjqkkgw.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vhhnozul.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163mmgpqsdq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163mxiuvnmx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163wbiynvad.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jyfdifti.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163lzkohjnm.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163dycubjjk.html


<!-- 参考信息 -->