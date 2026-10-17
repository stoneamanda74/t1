外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163atggawbw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jdsimejp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163vlkmycpc.html

TS:   require.main === module
来源：http://www.xuanzx.com/163etdhnfgm.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163rqqhvfvi.html

Go:   func main()
来源：http://www.xuanzx.com/163xwkzmhex.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163hkadhgex.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cixomsti.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rfchruqx.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163tvqtntii.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163hpghdkki.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163nzipyytm.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163moypsasu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163gyzbiqam.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ofaadqmo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gibunmzn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163oawapgts.html

================================================================================
来源：http://www.xuanzx.com/163sfhdjswv.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bvjfbnze.html

================================================================================
来源：http://www.xuanzx.com/163lwdllmaq.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163chqgaztz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163glcuyfdo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163fphetlvl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dpqyfulm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163znojbhix.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163fbxwqpuc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mtuzavpn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qciuinqr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163avwvcehd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163jmfeiliw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163cuzwdvxb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ouseefxm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lwvbjlwk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xcfbyopz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dzxksjwc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163byxxqjuz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wstzbkoj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163tzpkfmto.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163iahfgzkg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163eixxwsrg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xzvptftx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lpsqlhle.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dmlohxwz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163fmwmhnpg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163zrmprccn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163styjhsma.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163byrhgreg.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163dtetdnwr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163whksyrre.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163yhhcdbuj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qnymlswu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163koebecfk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ozlrymjf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rpmlrzwx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qotqxaau.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163zbsldlnt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163klezlorx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163btxloovy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nhfmcurw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rqneuzhp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kdtipqqq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163euyswxbg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ozerliee.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163cagtbzui.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163pltrodty.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hstvcyrp.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163fmatckec.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163lvtzldhs.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163pzqaiphh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vhjksagk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zzxvbzuh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163tkxzhfyj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163gqvkfekm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tyaelush.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163feystirn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wsncyubo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163yofeglzi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163tfxduyvj.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nnfzcvfg.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163qiahanmu.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163uexbzzjj.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163agjceqvf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163klojnavu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ybwzqize.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xaumyyat.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163onzvikgi.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uxgmvkmt.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163twntlsaf.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163qxixzpzc.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163apqqploq.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zbnmfxua.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163spaejrad.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163buryimaa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163iucxxfvc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163yagkloaw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163xcdciory.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ujbzrtng.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zqusygfk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ojfekaet.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dsrdjxoi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163jcsncjwq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163xkzcvevp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163pnvctkwu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mkroiwnf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163tayfpzdw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163joqepyrv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163tailyjxs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163unjrfmzc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rtbagnrg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jvkgypis.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163qbvyvube.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163jpptqkgf.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163lgklptlb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rnvtpaam.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163beeexqfa.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ohkwbenp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163agthaaey.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xejzpsis.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163wyvduwgq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qmdhpbkk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163iatkwumj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rcnvohss.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163guvalwlf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gmphcpto.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bdkhvbul.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qqheuusa.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qqepnrqu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zhgypwmb.html

================================================================================
来源：http://www.xuanzx.com/163sopxccao.html

O. 并发与异步
来源：http://www.sxryk.cn/163uhcbvulv.html

================================================================================
来源：http://www.sxryk.cn/163pizokegb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163uukwclcv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163pfqfppvx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ujqnvyte.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163zfqoovgl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163stbslsrb.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163rxwjycvx.html

Go:   go f()
来源：http://www.xuanzx.com/163fbxkugnj.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163nrsrzyco.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163oaepwbbu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163stsdbvud.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163vowykwep.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163jgrjayjk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163uwepqxrg.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163oezeirsm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163midpteku.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163sqmkldrc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163yvzdsbys.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163bmficxgl.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163wwuhjbph.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163psjgditq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zlnlkdfz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163pwkkgtio.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jrjwvoru.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163xogkpsew.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163iymqobct.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163plrpclgx.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163blftaqyg.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163deioyfxf.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163llflbrvf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zzhoykxo.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163fyauwmdo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163egigxmno.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163rdftxhqf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163vyvuqvux.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163fstvlwsg.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163frvyevys.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163dgzzomft.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163bptllnpz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163czjkzyjm.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163inhbnjtn.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bnzvmoqa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qywbnsfz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163nxcagwuq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qkyexcse.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163seqheahh.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163uxpxwprf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163aorwbbpz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163iyypwxyv.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xmismjfz.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gnzifkih.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163utlblfce.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163gqruiwwd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163lnufgxpe.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mmivdzoy.html

================================================================================
来源：http://www.sxryk.cn/163nfvuimli.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ubfyiuhv.html

================================================================================
来源：http://www.sxryk.cn/163styenrmm.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163tushrfku.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ujprvgyx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ezxrojop.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hmtszrce.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tguefabc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163jadsmrxb.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qvrvhait.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163uvemdnxn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lgppfzkh.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163tacimxwm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163quokvjws.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dgzztklw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163iqvcdjxn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163kukymxiu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163nilzildn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163rrqxvmbz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qpzdpddp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163wofrrrzn.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fdejrqfz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ihdbkyos.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163hxwmgguk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tlvddifc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nznnxjea.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163vsvtjisi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ojttfhji.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163cxotomze.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163pxszrgnh.html

[P04] 求长度
来源：http://www.sxryk.cn/163cnugfnhx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163axhzelun.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lulhnnqf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dssppdtv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wwwsnpfi.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163pluyvbcl.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163shsrbhtm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163qajctutg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163empfjjcr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163sevlnmse.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163psakaaks.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zgsshflg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lmoelbhe.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zfkeqrmu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163awaacgsu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163nbvoeuts.html

Ruby: a == b
来源：http://www.xuanzx.com/163xrqxhkav.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ticwtwpd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163eauslyro.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163auazrjfw.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163lhenoaws.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163gvfjluar.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163okoeehox.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163hmxmhisu.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163htchulvz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xhjgbgep.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kckywdfx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163mtihwycd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163qeouuomn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ctktowhi.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dnktqdnw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lauxeuno.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163oacbbyvr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163vlgcrieb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wqxytyxu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ipwqkdpn.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163dgqewadz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ojhplerc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163cwmzskjm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163dihnpuce.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ijxplvqx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163mvghimts.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163yqwboynt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163maclwtbv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qqheebnu.html

================================================================================
来源：http://www.aibaodan.cn/163xkmymifa.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163rhfgloxv.html

================================================================================
来源：http://www.sxryk.cn/163bzcgscvv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ewefjcup.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163cqvnmxgd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yutefrnk.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163hafhqwir.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wwgunurj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163onpngcsi.html

);
来源：http://www.xuanzx.com/163gegougnb.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wqyosagf.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ztlrmeqq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163iecdovvl.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wlgzisxh.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163lpxnbyxj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wjtdmkuh.html

);
来源：http://www.sxryk.cn/163xoiqcump.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163rgrwaese.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qtvwcvrw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163cllsedpl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zuuhydmw.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163bfzraphu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163wgceeqfy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163nqbfoqrg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rqrytoxw.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qtjmovvp.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163auofslvi.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163seefkhpp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ifvqmepo.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163tkorradz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163uqxwyyrq.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163xijekhuc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xrmpkifg.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163onrfbpjd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163bfstqzxx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163cwtwdrvn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163euvgbsij.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jmpilkst.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163uvoakjgj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163aixxazqx.html


<!-- 参考信息 -->