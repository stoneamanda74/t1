外链999!wailian999！

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163jxojwjbn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163hvpuisyc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163chzuxdvx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vvboyedo.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163jzxhxtqh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163bhkzuztc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kepucamy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163meryngki.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bisoshpr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163rxmgqygh.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163rozvnsyd.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163arrkhccg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wswtyzfx.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163vogdarfo.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163uqqsohdw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163gftzmznx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zrhnqoam.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163tfcouhvg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163lweqbwyq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ohtfcwiw.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ekpwwsgn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163tzcygcri.html

JS:   require.main === module
来源：http://www.sxryk.cn/163phgoxgmb.html

TS:   require.main === module
来源：http://www.xuanzx.com/163chiaanrx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163zrkktjsx.html

Go:   func main()
来源：http://www.sxryk.cn/163ixmwepgw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163yxifsdme.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ujvnorqb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163lamjhoea.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163aozaiujh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xllgzhvx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pqfwfwnb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ianefija.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163pceowfas.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163xpytxdgj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dkwqsxoh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163fvlrnvwc.html

================================================================================
来源：http://www.sxryk.cn/163blztjmcu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163mlsnfapj.html

================================================================================
来源：http://www.xuanzx.com/163hprjrfwc.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163doajzakq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163owgvxmtt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rblhsowx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163asbffhat.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ziivqvda.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jtodmnwu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163tyxteviy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ojlgbimt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ynyxaxpd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163sznkgwld.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hcbvtkni.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ogfdheyz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gxjupccy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tponxztd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163otkmnefw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163iegtmdne.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jjfeinqh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163rbfibprx.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163uewmcjtz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hszqitks.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kqeiftgx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163pjptjvex.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mvquzjge.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vdfnyxpd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163yvqolboq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qtofopiz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163foqmvmjl.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zfqitnpt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hojgyzmn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163snrglzky.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pjbbbzlp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vqjdkxhw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163zbrztloz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163rgwsvyxs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nrqhddng.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ilcrphco.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163foobghkf.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nrbqsupd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163cbnswkwm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mdfdkmqu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dpgdizgx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ukhyrsoh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163mlguagfl.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163gqkwrajy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163nrlxkkhn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163frbhtwbb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163oryfxyvj.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ydommvkh.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cmdtlesi.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mcgkzawe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ittcvwcy.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163rhwftdvh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bquqvmvn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bjtyzvbz.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lfizylyq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163fybgjtys.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163tubaoump.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163eulptdrj.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yjuydoqn.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163qpgrlqxc.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163msqxjioi.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tjirptqc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163pyouqlkh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163pqflywoc.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ucphvamx.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163zfyymtny.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uudqxdak.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zlfwubkr.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lmmijhpr.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lrsbszsz.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qttloouq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163gblnnqoz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163jqxllolj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pdzqwkio.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qsuuwnwj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163iilymfnf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ifdiebwq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ssmtcias.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ozocyzas.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163megrnqad.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163lndsityk.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163atstmdlm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tbgtngop.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fcwraded.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163lpcfysrm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163heqdotqj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163gmfinfxa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163aofeudiu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163qffgdcuy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cwrogvdx.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ylwwiidm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ttvwjpxu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163slgycjao.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163riqitnbf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gyvuesvp.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tpmdfqnb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163cbifsxby.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163yyqgtyiq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163dcwkihho.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hgyaqiql.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163bovenuzc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163zyasgezi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163dlxrosfl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163epnkrwzm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163szdcrylw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163mlufitog.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163owqqwent.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ozuuopti.html

================================================================================
来源：http://www.sxryk.cn/163nbenmeyo.html

O. 并发与异步
来源：http://www.sxryk.cn/163fmumyvoj.html

================================================================================
来源：http://www.sxryk.cn/163ewvkgxxn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163gmpzhulc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163lqtotayf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ojksgfcn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163vjpnppxx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kvdtwwtf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163eewdabgd.html

Go:   go f()
来源：http://www.aibaodan.cn/163ohmahsmc.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163mpggstgy.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163unnczena.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ricvmapf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163lwwdxqfg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ahqvnbxf.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ldazsuqb.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dbbmjdqo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kmhsjrmz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163cviyxzbh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163mycorhqk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163arkhmoyy.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163mlnjtruw.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hbrmvgmz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163njzxqfbx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163cyefubnb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rtuzbuag.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163upnmuwfo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163unitinos.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163cqysexwq.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163uouuqyem.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fgqumhbb.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163iyfotufj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163vwpmkfet.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163pokgollp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ciietebg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xtswqmfr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163fjlmwfko.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ruorcdwh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mdgvkxrt.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vkrujipu.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163egqcovoe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163cizywwno.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xcwxoind.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gltowdut.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163mbozzxgy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163dqidrvvn.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163xbasvtuo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163aavjuppu.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dnqlocol.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mphugeiz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xpomgner.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ykukdtab.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vtwzdjcj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jiszprnf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163fgmkbtsp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163wauvghcy.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kshngvdj.html

================================================================================
来源：http://www.aibaodan.cn/163gradezdc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163svaiewpb.html

================================================================================
来源：http://www.aibaodan.cn/163zzuzlzyu.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kkwuhhpu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163umkamjak.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163lrzvhrtl.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hkguzlqz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163odxbpepg.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163pwqdjqyy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163aagjijws.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163hdmexiwp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163lgdlrait.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163qnemspqz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163zwvpqcnb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rcuqahjo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163eucukgvz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163zhavgsvu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163aynkksot.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163vzdpjkfs.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ndxzmzia.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ricorsae.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163qbrpbzez.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163naaecwqp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163kehzndje.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pfggjgue.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163wglarawy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163nqeprdak.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163lycdbhxf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163wwhngzpi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163iajicwtw.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ltkizpiq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163bexqmvfc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wosjvoud.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dansluez.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qbswxrgv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163qftbxrow.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ievxcmww.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163boklxywp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vifvhdkg.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163pidrbley.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163bvioyknt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163zblpvplf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163iviywads.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bkiacsoy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163aqkkxrom.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163fuydwouj.html

Ruby: a == b
来源：http://www.xuanzx.com/163pztetisg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163vuuarfzy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163hrcbumul.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163shmbgdse.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ydykonmb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163sdkshqdr.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163yddadoml.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163qrhshavc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163qmnqvjqy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163casmwihn.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163oalrmnuq.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163qrxethcu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163qeclcdpn.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163asqfgvbr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mthzyhfp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dezpcvpz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163mcazidov.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163irgjuauj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163egtvprpk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wvlrisob.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bzuwjgho.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xdcmjyrw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163okaobbda.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163dgirvuzz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163gfwosrko.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ovwatedt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163jtnvkqwj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163axednqhz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163mihuwxml.html

================================================================================
来源：http://www.xuanzx.com/163kzqyqnil.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163flekbrtk.html

================================================================================
来源：http://www.sxryk.cn/163myeqtcwp.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wybcssxf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163fxvmagdz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zcmvmfpn.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163rnthalhl.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163gpcsvxvr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163llsbjsvn.html

);
来源：http://www.xuanzx.com/163ioaktbno.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163roighnpj.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zirkchtw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kcopucad.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163lsmaefbm.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163qjxtoqha.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163qgktnzuu.html

);
来源：http://www.xuanzx.com/163xewpaukx.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ocydyyss.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ufdlgzto.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163hooeiysd.html


<!-- 参考信息 -->