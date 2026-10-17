外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163kvfdohoi.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ycibtiqa.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xkrgxeph.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163pmduplnq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163iimxvfff.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163uykwwrdb.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163tlpeshqz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tcrwssqz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163xrspkupw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rcfaihmn.html

JS:   require.main === module
来源：http://www.xuanzx.com/163qzyfeoca.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jrrcyuxv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163lpuruflo.html

Go:   func main()
来源：http://www.sxryk.cn/163omewzwsu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163oxrdulbx.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ejoctokc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163vpbeoofv.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163kpmsjzpt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163nnqawelm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wxtczhss.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hgywqrko.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163zlexmbcb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ntsbflyj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163lcgwvcey.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163uprvbvpc.html

================================================================================
来源：http://www.sxryk.cn/163hmolhamg.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163hbbhgcqf.html

================================================================================
来源：http://www.sxryk.cn/163eayazthr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163tqitobmq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yfatqncm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163vrklsybc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163swringyq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zclqmnsh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163bjhmgmjk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163litrpyza.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163rldzlemf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163svbbkbca.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163bjuuycuf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ninernsv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163bdnbcekv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eohyshot.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ekxpaypn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lykbicga.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gpdjwkxe.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mracaddh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ubblrlwd.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163eqlcozpq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163golmrrzz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hyankbcc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vfaxldgz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163enyaaufy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163quowhmjw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hcnspkcc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163cmowuwpq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163nvekrjkh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163kgiefphb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163iccifgdv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qfuwykuk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mmejeprj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163aywjeofg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ssatopwq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163mmdknvwz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uyzfsvwa.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163sfkumirp.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163fhngogxw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163fdylebcb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zafzzwmy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wlfryvlr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jyerxyva.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163uhirbvqk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163eksaccah.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ixvvzhyp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163tjycrrbm.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163jrtjthqq.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163tlympwbd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qyilamlf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163okbutosi.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163begllgmw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kgzchfod.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163tygrakpz.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163uuuuqjxq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fduffjyj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163riitlwzv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ghehqcmd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163kzkjtcwv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163amjavyld.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163pdadpjpp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163dwbgkgot.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zntdqtpy.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163aeeykgxn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163okqfyeod.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163yujqqngq.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163bzobhhpb.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ulixydbr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163utwxzgaq.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lfxxamwn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163upgewmpj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dxarzrfa.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163lelamopd.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163kghhqdym.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163welwqfan.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ilhkbkfx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163npgfpujv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wvsydffg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jcfekxhq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163psuaduhe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163thgfexha.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163uitnummx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163acqeswzx.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163mknazont.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hkuuyerf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xpsnhohe.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163isdlslld.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tsoyuoab.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163iktyjlby.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163dvuxtwgd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wzeghiro.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hbabacgs.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163akvjzeep.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163svusnoka.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163aqhxymwi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zyxernuj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xmkjtkhe.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ivhmodca.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hkuvgwzu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xwxunpxj.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xwdqhqsx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ccllgaoz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xqeinwgz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163gepnttry.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163hsptxnnz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163torauyls.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163aatrisgf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nlyzqnfi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163xltschxw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nteozerw.html

================================================================================
来源：http://www.xuanzx.com/163ucdvuull.html

O. 并发与异步
来源：http://www.sxryk.cn/163uzpiclux.html

================================================================================
来源：http://www.xuanzx.com/163fnfecsgr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163egoyhgke.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ipzdhpgq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163kwqtrjsx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163glygflqs.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wmdxerbe.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ptjxfsen.html

Go:   go f()
来源：http://www.aibaodan.cn/163amwcldum.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163wekwrzkc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163pjcshtoq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163rglzkivp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163brhmwfut.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163kcnafrzl.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bjtvscix.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uwpyiveu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jtwowvqx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163uuroqghz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163haclvtch.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hiskngji.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163jrynxfur.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163aomxzazz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163uindaunf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zcdjsfra.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nylqklzt.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hgclsomc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mesekmpi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163htpiosjf.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163uwwyuwyv.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163oewugtsc.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163cpyqbfwx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ubqjqedk.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163uczxqqxi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rckdrhve.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163covrgygu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163tlobwprz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163pdulmwml.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163llekploa.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xnhdfubi.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ccsxbeah.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163lmnjzxtg.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163uzdbfuny.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ibtpazpg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163yaqkflwk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163bvhkwbjy.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163byvngzkz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163oevrznve.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163xmnoadtg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163vbkuajpl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qzbxuwmk.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kqmyexcw.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ahxtdfhf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163pqjmmejp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ghesyibx.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163birqcqnv.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163gxnjbepz.html

================================================================================
来源：http://www.aibaodan.cn/163yrvtsajp.html

P. 常用工具函数
来源：http://www.xuanzx.com/163orcprigl.html

================================================================================
来源：http://www.xuanzx.com/163xaggznqf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mmgcqeip.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ksmjqeyd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163saofqsvo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163mlaqqgku.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bqggfouj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163quwkrpfh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vbghmrfm.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163qhcnljkh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163gkqcaada.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163mknkcbzr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163uzjomrvg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163cfhnhgqi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zaetxttl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163tijwhksh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ucatguxb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163fwmybyuc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163cufhtcue.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ycudhfcr.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163czlihekw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163xfwvfeju.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ynmtuekc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vkuaavci.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ugneppxv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ntkwjlmc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163etrwjfhc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163orzxtgys.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ijjejlpm.html

[P04] 求长度
来源：http://www.sxryk.cn/163edwbmche.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zxrhqrbw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163mqtmasit.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yphwnvqq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163oytxmght.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163tfdqlstd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ubekkqwf.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163szjdzqvl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163oktaaerz.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163lzwufowa.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ibdnbzgs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cvzslsiq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ltzuqyvf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ldlonoip.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qrcrvmho.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rjbcqkly.html

Ruby: a == b
来源：http://www.sxryk.cn/163efguchto.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hiznhhyc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ffohllhj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163selggfyt.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163qzpxvwav.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163vpdbbhno.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ethhmmca.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163twoocxim.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163vnrewsns.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163hdvuzkue.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zoucxefw.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ldrvgxzb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163sbeislek.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ekccyvrv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fxqznvpv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wafzamxm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fhhdvqdy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hcrtivti.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163adsidkox.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cosnansz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163rpfahqpd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163rmmxfqvk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163pqfvimqs.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163lhubgdbe.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ululpkaj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163rpoardls.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163pbpfudnr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163eruucflf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163njarqrdo.html

================================================================================
来源：http://www.sxryk.cn/163jktzewpp.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163oxhfxltk.html

================================================================================
来源：http://www.sxryk.cn/163beeunemh.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163fxsttcxp.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jfdynvsw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yrngvwtv.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ufzthaec.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ouzrwunh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mzrfplwk.html

);
来源：http://www.sxryk.cn/163nbdusajz.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fjjsttkw.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ovflklij.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163iihsriwz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163pgrlwrsr.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163pammxjaf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163dqzwxcxt.html

);
来源：http://www.xuanzx.com/163vjzmrmoy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163cuvyfsqu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163jtjjpdzq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163nrbztdse.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ylumwsbf.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163umsulsxq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163qdnnexsv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163uegbrhgj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163wahccrhb.html

[Q07] 删除表
来源：http://www.sxryk.cn/163jxihksvf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fkclebfb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163nsqvazlg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163dnthammy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ntrzxxkl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163waqwyhin.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163lxnjwusi.html


<!-- 参考信息 -->