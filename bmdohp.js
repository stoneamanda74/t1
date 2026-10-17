外链999!wailian999！

Ruby: exit 1
来源：http://www.sxryk.cn/163mcfkuwsu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163emidagiy.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163tekebyek.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fhcokeyy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163akxezwhi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163chptibnn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yibumday.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163kcgkmfuj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ddaplpvz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cszhkxjv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163qtmamaco.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wihjchdt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163eklinjig.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wqrlawhj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163fmfmspsr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163jjlxcfqw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163afdutppv.html

Go:   func main()
来源：http://www.sxryk.cn/163pytkhrkz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163pxqywxvy.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163hcywudyh.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ingbirfh.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jumyqmba.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163sleoyccd.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rfvqumyz.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kldsymsr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163fbqxmbnz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163wknhzivj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163zppjlsdw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163smijkcyw.html

================================================================================
来源：http://www.sxryk.cn/163noofhnwr.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zgfdfarx.html

================================================================================
来源：http://www.aibaodan.cn/163zlaofzau.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163otowmdld.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163udvsntlm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163evpggqcg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zyfycisw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fyeyeuxd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163cxonagts.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kjkedyqv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vayozarr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163fcghsgdj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dxxknrxe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bamaqfgu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zvxdbcvv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bviywqbo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cerabryf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163oeoijjko.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zfurmvmm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ivzyhexy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xefpdygq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163cecwgixp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xvepigmg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163tlvmaiqq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163btnihmwj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vgfubgct.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mmmtikds.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ltpasibc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163fckfuzkf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gidwowzg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ladcxiue.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tjfkxymn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163pwmfkchy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163faobhfcz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163sasywnab.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vvbhhjfk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163dwywcdac.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dfvpuyjy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163htdurhqs.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163vliqjhea.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163izutbtby.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163dqjdyizo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xkgjmtzv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qyccuwny.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163vxihoadg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163iwzjvlnh.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zrbqcqvu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163gqpzsqmn.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163bqotnrum.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163atmjckpo.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163hiiifgla.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163asmwfies.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xrhmahux.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163gulrphwu.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hiduvbwl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163joyfixdt.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163oobjgpim.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163tptmddrk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ytiwrtjs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163rfrtzgbb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gswjrfwl.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163faklusvp.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163gaizulxn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163npkzopjp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163twgpxdzh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jaktafmd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163byrcqkar.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163rvkheeaq.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163qiwfkyiy.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dbgvfgks.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163djggbfkc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163anyqnujc.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jcgdmdvo.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163zffwzuzb.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xsawppik.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163igepeyfg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oteaafgu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163odvujzpb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163uuwwbxtb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163bpeyxsdv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163twxhphld.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163vgcyzzci.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163oyliqawu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ysthfmnc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163uiptpdhm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ppibobbz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163zwtkjule.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163fqlujdsc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163yusbngnw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163dhwjshyg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gmacwffx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163phuvdhpo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163hgxbvppn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mpaxvcbh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163fcenzhrm.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163nwvivjce.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jkqstmcn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xlinsucj.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ubjmcyqa.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163qovylobo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gqvzqlwm.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163bkduoyyn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163uzcvemjl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qqjhvgrm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163hknjwant.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163iieuulfv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lxbhptuu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pglcpkub.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163tiitmxon.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163mufniedn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vchewwhc.html

================================================================================
来源：http://www.xuanzx.com/163bcyodsej.html

O. 并发与异步
来源：http://www.xuanzx.com/163uyudytfq.html

================================================================================
来源：http://www.sxryk.cn/163ntlbjnul.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ndpfdptu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ejoawoyz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163qfwcyead.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163lkovoccj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163biuokkeh.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163vqjjnrzk.html

Go:   go f()
来源：http://www.sxryk.cn/163elfrpwvx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163edouarse.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163tvgowfyq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vroakcqe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zmbutsih.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163oiggjudg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yxezsfyi.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vgtupvun.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163hshgkgcs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163jpjtagog.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163imfxxrkj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hrluysbi.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vdmtukur.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163oznairyl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ulegudtb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zylnljpo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vqgfdyrz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163kofzvnjr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163pkvlnjkj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163zrdjrmbn.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163kxuhqcwp.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163bzzkugps.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163obdfjcra.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163banyvdfl.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163moslnfew.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ebeukdhp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xgfvuqcb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163voavupdn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163nhexkihj.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163uoikyfij.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163jtylhxco.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ntpglwkc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dfqzzmky.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163asgsnkrg.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163yyxfvogj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dnplllxv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163atejhuyd.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163tndsecwp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163igkwmdhd.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jcmqlome.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163cgkozqnu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tpsuziff.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qntjldvt.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wgixnofz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163rwyijvyu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163sycenyly.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163kimajnev.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qifirrzk.html

================================================================================
来源：http://www.aibaodan.cn/163fyszhnea.html

P. 常用工具函数
来源：http://www.xuanzx.com/163gonaqesp.html

================================================================================
来源：http://www.xuanzx.com/163qwaajqxl.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qgvfprfg.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163qoqvkvva.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rveedhrw.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jxryfvyq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163pcpyoeem.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163whewtkol.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wflxbmpz.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xmvogawt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163xjwfsirk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rmpszczj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163pdgqeknn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163nmxdhrad.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163kwmdtoge.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163dewvjtyn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163bcgqmsxp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163moaenymq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163gpjyvodx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163akwlkogo.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163jpixwdco.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163hfzppjrd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163novmkpny.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163sgimlktu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163aegplhco.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hasweptf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163tzjvfskm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163egfkufwr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gypdbixa.html

[P04] 求长度
来源：http://www.aibaodan.cn/163crtfcflj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zshlspsd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zetitqdu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pmebspeb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163saspmkqd.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163kvvzkufb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mwvlwspr.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163oxwftsii.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163pshavexh.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163wqgtwvkt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163fhevpapu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163afpljsgt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163szihnqoo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zykrbcgv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163cvqafhei.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163auoqdrlm.html

Ruby: a == b
来源：http://www.sxryk.cn/163cfgzipnp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163opscdmeu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wkqnxsbh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163mbysbksp.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163agtyyskg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163iznnqhwc.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163scofjzwp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qimgnepz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163gyfvdmsy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163aftyhyot.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ofxxsvfr.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163fpszpbed.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163axvntrni.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ygrelrgo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163laskdczm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ocwzjacy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163limmnhee.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163smuzuwpc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163soisunsh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163bxwtnxqa.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163sataduxy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163rbrmfamw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hqezrwin.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ciibyytu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tiblkkch.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163yttxdctt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163zejezrbq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ndcaqzie.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163foiwzpvd.html

================================================================================
来源：http://www.aibaodan.cn/163vmzjxrbm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163bjomrgyv.html

================================================================================
来源：http://www.aibaodan.cn/163udbazkdp.html

[Q01] 创建表
来源：http://www.sxryk.cn/163obqbwxqw.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163mlmpfqcu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163smbobuvu.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163cxjkplxn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163pkqnhajx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163irdztodl.html

);
来源：http://www.aibaodan.cn/163zogpakrx.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163mwdkikdd.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163wjwqzuie.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163pkimbayj.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163crtrdtvr.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163daakewmj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ormxplkg.html

);
来源：http://www.aibaodan.cn/163zsqfeqsz.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jmthujci.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163rukexmvt.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qyjmbxtk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163tcuabnov.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163aywyiqli.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163bocpkyof.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ogisvqpn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163tkzyirrf.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163xfjblgek.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163wfgfbmqe.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163zzhoxpsr.html


<!-- 参考信息 -->