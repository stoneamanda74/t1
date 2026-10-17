外链999!wailian999！

TS:   process.cwd()
来源：http://www.xuanzx.com/163bxordvlz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pwheikzu.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163llucuwyj.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tcqfyxtp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163daiqymla.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163rmppmejg.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wyltbjic.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163gyhzvvdu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163cxwconxn.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163dkehneyn.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kviemjdx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163rlwqjqbt.html

Ruby: exit 1
来源：http://www.sxryk.cn/163kkouffnd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ytcrfkyk.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xstrbtep.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xzymmodf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163vcodztdd.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163yzxcetoo.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163aednbdzw.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qmcgdaca.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163orobcdws.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163evaxtkbw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163nagtvpnl.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pfrshqpy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jwdfgqox.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163wanilbxl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163mkmtcjiu.html

TS:   require.main === module
来源：http://www.sxryk.cn/163eakhwdyk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163yqqvpaxp.html

Go:   func main()
来源：http://www.xuanzx.com/163adijtpkv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163mvmqgrbd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cscsyskb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gfvixunr.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163jemeeiwh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163fdcjllmh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163djjvobkq.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gokbzgnn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163fwntbrvk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163myvzylkx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163omqxnqcd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mmcjfqmq.html

================================================================================
来源：http://www.xuanzx.com/163iqieghqa.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xudpctyq.html

================================================================================
来源：http://www.xuanzx.com/163rrnajppy.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163vxhoispv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163igytadvo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163qcxninvk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tvajxzwk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xdmcecum.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wjuratmv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163eswfzteh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163bdrhnjhd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163slabejrd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163iwdvefuw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ynmacbro.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qxywhmez.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rdomgxgb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ehhltqly.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163tqrqeugy.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163soyoviwc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163udqxkckr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163szkgvesd.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ebpaeatn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163cejatplg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gxjzphap.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lunsiara.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mhpjycrl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163wkwbmceo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163spfxdxgc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163dtquzqpp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ytmwozpr.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qsuamvrx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jksjifnj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ixksqdjd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163oxqdjvxs.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cebplftk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fjtxsved.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xkmlahwh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kilosrbm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163zvlrccjn.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163frqebpcz.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jtesvzjn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163blbdjhns.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163iboxrbqq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xzqayftk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163wajclxdz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163xdlvsvov.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163svxwirck.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zahhteqr.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163prbrwiov.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163cerckjhv.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163xpefrkhw.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hbdknuqi.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163clxlfajt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ceizlcve.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163xjyttxnb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qralggrr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163uvmxtzoq.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163okjdqmxh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163kmdliqxe.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vhedetrb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163hvktieoj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fchawuqy.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ifxkvmfx.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163bmrcdrdi.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wkhyixvu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163lmdvgpsp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163gljfqgdg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ekftlapm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163rggfjyhc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hdsbeypy.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xktnzemj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ywepdxpv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163odnmihar.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163durwjund.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pkketfva.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bdhqjcvt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qnrvpere.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163aleclpql.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163muydfsed.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ilwjwzcr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ofhlzetq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163dqjthmwz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163liovmqsb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163sckrjuyg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163yxqksyme.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163trsezkdn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163pjugowmz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fngapwri.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163zqnajfer.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163kttvejvj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163dborfcbs.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ljrmyiux.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163bzvnnwii.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163pjtnuoel.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163oeuaommb.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163dziajukt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wfacryol.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vtapphmm.html

Java: // 手写递归
来源：http://www.sxryk.cn/163bwmfyudg.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163jtljvlqf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xovkjrvc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ahymbbgv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163lrkendiy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163oxhvbpsp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163peierhzj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bwnuxkox.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cuzulhqf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bglolunf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ohbvfogy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163gvwzibtm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163emvndfng.html

================================================================================
来源：http://www.aibaodan.cn/163lwknjfwv.html

O. 并发与异步
来源：http://www.sxryk.cn/163rwkdfixz.html

================================================================================
来源：http://www.sxryk.cn/163geealydy.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163bmlvtktc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163kcdeyany.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ewqjwvkp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qotllkla.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fsmzjutg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hudaonas.html

Go:   go f()
来源：http://www.aibaodan.cn/163goofxday.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zhqldehq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163dhjcfdba.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nnixvxfo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dvkwzejx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163scsyfpra.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163sngpdavv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163byhmvofv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163pvqchyde.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hhurdpzi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ohsyeupa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163eqqcprdb.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hwscvaue.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163kmrbzsxf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163hgdzhfws.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163svfhxpsk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lnpthugi.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163cesdwbie.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163bkvwfpob.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163yolkmufb.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163nhgraibm.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163yycxtzoc.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163cxmaiwrj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163fhyjpoxa.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qbsonfdf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163hbvvirdg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163rbpkkrck.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163rzzgrgan.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jbjbroiu.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wynfegkq.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163qfkkbmky.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163bpnatqxi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163thzbfydq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qerhqmyc.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pvszpcaa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jnqlcfch.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ivxcupjd.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gawnogme.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163odmkoixv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163nqegmofv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163plznczbo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wgnlhvxv.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zugxeapy.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163cfxpaiwb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163oztzlkod.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163hzydxipo.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163hlwgjnti.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163npnabtib.html

================================================================================
来源：http://www.xuanzx.com/163valurnlf.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hfppdtlo.html

================================================================================
来源：http://www.sxryk.cn/163uoxdsuxz.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hlexnnrb.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wjnwpmdj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163guxnrszl.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qvldgzvm.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tgcpdgmt.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163nhljclut.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ynckvwcx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163tfexusoa.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163mcxqdplh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ygheomtr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hxloaihw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163wavmbgbk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vuxbiivb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163snbasnef.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bdnimytf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163jvjsviac.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ewtpzczp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163jgyjqdug.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163djydvrrq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qphxyreq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163wryphdzy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163knrbftag.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zcxrdisy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163pxvqkqwq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163rtusizwh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163qubmeman.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163dcmislnq.html

[P04] 求长度
来源：http://www.xuanzx.com/163auttzqdk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163aebcelyg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163uwjtlpji.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163dwgugbaz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ilrwwvrs.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163zlpbsceb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163kffiyjne.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163upczvxcx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163udylzspe.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163xxqgvfks.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tkfadzbd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163hzidgnwd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163agzvyjgf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vncbacie.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163pgxqjfub.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qxpxoxvj.html

Ruby: a == b
来源：http://www.xuanzx.com/163eqxacvbs.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pnjjmlhd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xpkheahv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jkktcxhg.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163anubmgoq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xmvrywdh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163nxokrxfu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ofnwiugo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163xqlnolsm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163vlgtpeck.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163uucdcvpt.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163grjjywpv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163meitwmay.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bucfvnpp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hgcoqwfy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163qkjbdaij.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ejdlypqx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163achxckhu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163mtolmdkz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xjebkedb.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163pwzkdpwp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163odqwrbse.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163edatbupt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163rajjeypz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dwwrhkzm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163oemxkplg.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163uqnpvmka.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ekvcxbco.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163pnngowsn.html

================================================================================
来源：http://www.aibaodan.cn/163xoiaksxz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jrwsxxdx.html

================================================================================
来源：http://www.aibaodan.cn/163qwoaxldo.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ygauseaw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163mdvcsyhi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jysgfjxv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qczotyzn.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163igyysykt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163rcrbifil.html

);
来源：http://www.aibaodan.cn/163jefhqawq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163elzvoiea.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163rzbginoz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hbqbtgtw.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163plpppfsn.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163dbwqclzm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163vwzzsbjv.html


<!-- 参考信息 -->