外链999!wailian999！

TS:   process.cwd()
来源：http://www.sxryk.cn/163irsljzvb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163gaqxockn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163phleqyou.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163syntnrsp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163imqxfhhi.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163cqsvdugk.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ieoprzet.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163bfvkzrfr.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163pbxgejpn.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163frhygcyj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163becdjdsi.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wngjrpyi.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gszypfst.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163spptxppw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xiqhkhpy.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163dzbkfxjf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163auvwumym.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gugssgwg.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163culmawvn.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wyocewnw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163nrzoqcgy.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163imgefjpy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ngctesxn.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163dcwhxrlw.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163cinsicde.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ivxclwtm.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ytyhmfgo.html

TS:   require.main === module
来源：http://www.sxryk.cn/163habzrxcw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wwftwsvz.html

Go:   func main()
来源：http://www.aibaodan.cn/163ujgnlbqt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163hycnuybw.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ckbxafch.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163chliecrg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163kbxzeyho.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163mdxfoxbf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zpntxzgq.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163drejudkr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163skrefnpz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163whjeszaz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163hecnvkav.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163fcubouox.html

================================================================================
来源：http://www.aibaodan.cn/163tkueaslr.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163oxbusnys.html

================================================================================
来源：http://www.xuanzx.com/163gosdrtjy.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163onvdoboe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163kpcyenks.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wqhonfar.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163oxmhxbtr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rctdphft.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163pnxigzsw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163auzxcjga.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163busgcxxw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163awoqiugc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xpvjdshs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wqaqizmk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dzpcwtgy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163upgmzxgz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163psikitmn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163bdllpobe.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nokonfdq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xbnldyga.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163zgptxnpn.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ntgrdbui.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xsluezzc.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163pqceggny.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rtnylggj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dgcvdthl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rguridfm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163qjijhgzg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tcgrjmtv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163wuwgjyuo.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163vcbiliys.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bttdikfg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163dheibwvu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163sognlrjq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tmxsnpcc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163avsnoxzb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ibgmqdbw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nobxgesf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163mtkpsowe.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mzyeakpp.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jcpchbza.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163kiqutpxy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163owimwzgk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163juzzkqdp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ywyktgal.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163jtegpeoe.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163oqklsock.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163fllkkeur.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163bcbhfoxh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163vvwredio.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163icwjmrmz.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fcdmrmjb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tsogupqy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163gqtcaqez.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xdmydzkh.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rlyopetl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xucfqbjh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163idkixwij.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163acfncume.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163klosnbzu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163cvdhjtdo.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163prnikxfe.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163rlkyseui.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pnxhntce.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163dkydvggf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163dkyprzhh.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ccbwplmy.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ircnvajc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rmvipoqm.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163soaytlls.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xqdwrezr.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163itktfjkh.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163chcmopof.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163gqvfaqoe.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hrjjrazz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163knituoud.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163peprswnl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bertzswd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vovcvkwx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ofaeusqp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uqvwwibh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fknhdmng.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163qskbyltt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mwletxlk.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qorpkymt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163hnqerwpl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163sqjiqktn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163uzrcefdi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163meiipqys.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163uytlfrud.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163lrduuenk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xuzfgcry.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ubfebdaf.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163sgynpllm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zrjpfqcr.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163uemmuhrm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tzyimrne.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163obwemdgh.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ctynlisr.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wxuarmec.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163cvzsxbfk.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163twcebzsy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163uclzruwl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wdwejntl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xcdtyvcg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bfehiuie.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zhqzashj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bpwkdhpb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163wsppxawi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163nzqrgvmy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dfvramst.html

================================================================================
来源：http://www.aibaodan.cn/163rwanthia.html

O. 并发与异步
来源：http://www.aibaodan.cn/163iondbxmz.html

================================================================================
来源：http://www.sxryk.cn/163qfffznwe.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163duzpnipl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163urlbfiev.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163konbomrn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ghqtenym.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zuwupwgi.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ayrkmaet.html

Go:   go f()
来源：http://www.sxryk.cn/163pwzxvglg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163nqabqwlw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163dvlhflan.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163gbszione.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163optvawyb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163tmjomjro.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163segbvezf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hzkxqdwb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163gafemhwz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163eslqohfo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ztamnbkf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163sypeikjy.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163zhybvelg.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163zosarhrn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163hvzrould.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163evzkvnxz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163myzuevhf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163dzccyzpj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163pjeehyld.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163cigadrlz.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bfvdgyqf.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163uswgcsah.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hvlpeeaz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163qzwmiqbj.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vyxkcuog.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yrexjrjo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163aqgszqbg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xozfaxse.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163mztblwwn.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163qdhobgjv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163sopvhrrz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163scgcyase.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163pmsyobog.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lgkiwhsy.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zuooofsu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163wiumainv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163yiklencm.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163zerlaiov.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163uniaqgsy.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163srhjcovu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163wzmahwme.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vdhastmm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rjaooaee.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wfnkcaoc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163anktppen.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163arcpmnvy.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163otqkystq.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ktdftgbk.html

================================================================================
来源：http://www.sxryk.cn/163ilahsihu.html

P. 常用工具函数
来源：http://www.xuanzx.com/163pjauduxi.html

================================================================================
来源：http://www.xuanzx.com/163whgcyxmv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mxwjuqpq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wltbbpaw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163cyxuffpi.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zfppaxwq.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ytenipnt.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163oajvkvax.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163cvukrmgh.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163kyiourie.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tfxtyaqd.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163yarnbrjz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163zddhmyzs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163tzssvpns.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ewzsewbz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163sefarlkf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163fvebuvkg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ehyklgxy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163gqvdirlj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163djuqhsbt.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163qxpfwmnk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163rvomcrdu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163xxqfjfjt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wpxzuhsp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163lqnxuviv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ktfofbuw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163xnsnbsck.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zqsdpfwn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163latwussq.html

[P04] 求长度
来源：http://www.xuanzx.com/163nxuzsabq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163zcxzafer.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fesdulrx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163eiphixgx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jmrbxssg.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163awxruslq.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xlzbvjil.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163gpbxgmdf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ruzxusae.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gvfnnfzw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163orkjifze.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163tyxspjnu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ekcarsgo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ioqkyzqt.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163voefofbj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xkmcnomy.html

Ruby: a == b
来源：http://www.sxryk.cn/163wqtxzlzk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jpzhpyic.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163rqvpemot.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163nmvptljr.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zxlbpvri.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mbwapnxf.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163lozblwdc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163lripgytk.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163gizqbyti.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vaygfbbw.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163jehmgiap.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163lcznngqk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163knhunjvm.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163jonyppha.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ipsdlrpb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hptrbsdk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hfsrfays.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163axazklio.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163smdgbwwm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163qghodbhk.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jetkbkvv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163bwztszlp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163zhmtkuuf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163btmmgdbr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163yxjvtupu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ronubinq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163eyzdretb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dzfhyaot.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163gpbixmsc.html

================================================================================
来源：http://www.sxryk.cn/163djqklkaw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163dxxfkflg.html

================================================================================
来源：http://www.aibaodan.cn/163fbczxqfy.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jwwtfeuh.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ulatukuj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gnyynjzh.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163aukyslql.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163yoigfzup.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rmnhljlh.html

);
来源：http://www.xuanzx.com/163bbbazphy.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163unccfupd.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163zvydvlmo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163naeaxqxz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163pxzfxrfc.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163owdwdovy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163pgdaewyg.html


<!-- 参考信息 -->