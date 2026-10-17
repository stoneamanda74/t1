外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ndaciblp.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163mtnjexbz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163otmcgcpf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ssbuwxyf.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zavqadre.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163cyzdklqh.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163njmijtzb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163dggmtaqu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qxihsepx.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163uqzoqsmi.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gvlfobhe.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163dhrrzuso.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163jgiwmatk.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163ebtxjktj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163wnwiptby.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163pqzgucaa.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rpfxpnap.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163cnqxdlwh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163vntirzyv.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163azimnvqd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ifxgluuc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qpyyurry.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ymtdazfx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163cdsksjem.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163okmongsw.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163hzwqvysn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163nuhqxxaw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qghyrpsu.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zifctias.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163amwarodu.html

JS:   require.main === module
来源：http://www.xuanzx.com/163tjfkhtfy.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bgtbbdus.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163zoyksztz.html

Go:   func main()
来源：http://www.xuanzx.com/163kdnrcquc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gbwxlgud.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163gmuyepwf.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163pcpgipri.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ostzziki.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163cvjuaeyp.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sisknbwb.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zmvrbhif.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ytufuhok.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ypnlfeur.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163lnwyblkc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163obziluhc.html

================================================================================
来源：http://www.sxryk.cn/163acfffurs.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163fgmqkmkx.html

================================================================================
来源：http://www.xuanzx.com/163dqzukxhu.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163atwbqopd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163lbbqkqwx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163gshikuag.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163wqussopz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ndjirftd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163aqehrfru.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163dvofvmco.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163dzuwobfd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163sdjchmjm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163gvrcifcb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kcqsrhvk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ewxqtmhw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cnlvsnrj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wvqfksmu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ppmifjwf.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ydswhzuh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163boaqzodb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bzfefdrr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163crdjteag.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ioplmkac.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hylroftx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163shsmimqc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ewmfewuy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163umdmjbmo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163iybfmimq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jphlrktg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163lefzhitz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163gmkyqalf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163czmwtlzs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163scurpecw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ddpbwxpq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qzsptxgp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163nmauxbqr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xdltucah.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lcuznlbd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ficsxihu.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163imeptjke.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jgskvzcy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163qgkakwit.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163uyewbpwl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xipmijjt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vcnybvfs.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163qkezxfbj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163lxyuaivu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163judpkdbw.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163aezrxyxo.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163llkljzeu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wbbbnozr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qtvtghjt.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163eqpgpoee.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xvmivtly.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xhsfjayp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mflxpvwj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bucjxbko.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163htpuwkjr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ogqpfijg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163aitqlctf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163pthokvso.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163zwrjybup.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163gjyumljo.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163feluythq.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tgstrgfp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cvthkqnb.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163prexxhhg.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ntnydfpx.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163glvwzmvv.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ahnudwng.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163eldzysbj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163mvrfnakl.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zqpfvnxv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163tuolnglg.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ikoaqtlm.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wswlpoxa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163biphwstx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163cbnvttdj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163maqvzepe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163pozzqwgi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163itmmntnl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xbwxfgqk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lscgqwwn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163glmiuxnm.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163zgkhztnf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163thkubtuu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163groykeom.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163unsorguh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163rzfkrgua.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163gkupgkog.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gydbivaf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zquiotar.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163pdywfdzj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163dhzderwc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163nolzyhgd.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163hqjyawuh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ymbmklqy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163seesgznw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163hvbbohnr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lbforumr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163cdoxbzqk.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163coxvuuki.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163xsedcalu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163augesfze.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163cfndodjb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fmglnkid.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ljlmjkvm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rzdxhzgl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qxhwnofb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163xoaovnuu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gqvnywlh.html

================================================================================
来源：http://www.sxryk.cn/163fiacwhen.html

O. 并发与异步
来源：http://www.sxryk.cn/163mkcmnxzj.html

================================================================================
来源：http://www.xuanzx.com/163seugftkl.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163aywebffc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163tuhrjnrr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163pjfvzcfr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163otmqlhpf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163aymhjpjy.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nktvzwnw.html

Go:   go f()
来源：http://www.xuanzx.com/163orzswogf.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163cixmfokv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ugblmnsb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163dgrehfec.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163pouxrcze.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vchrjrcf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rwyfjlsa.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ylziyqmv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rutfuegt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163icughpxd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163gflllsxa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163czpxgsib.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cuooioyr.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163yuqlqagm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qzxmdutg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163wtkmgany.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cuhgwebx.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163orpmhiwh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163dmuwwdvn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ywvnjyfb.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163blegpusq.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163jldybwrs.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ubgoxcfh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163bzsspuqj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mywallry.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163qdeffmjq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qqrurqqq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163wbgnlwcq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163idnjojek.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gwnhqhwm.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hgrdboon.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163haxdwnbq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qqhmzrmc.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fvchjsdd.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xsuselgq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ovwewpji.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163kbiadfyz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163pzzezacm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163zcfcvivq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163tqvmzkon.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mlxnqesb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ynfhrtmr.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ytwgktss.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nzdhgwcf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ycrvemhp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163inpyvdps.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163cqpleisi.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163mmspbnmj.html

================================================================================
来源：http://www.xuanzx.com/163wldahwrg.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wyelibho.html

================================================================================
来源：http://www.sxryk.cn/163lbktsgfv.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jcdndaae.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163fqlupeee.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163wubxsugs.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qxfvtjqv.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163qhpuawlf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163vdlcfanj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dvhmdvcd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ehxpamru.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163irpyjbbu.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163zfizmlid.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163jwvidutr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163mgwbyloa.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wzvcjtyn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163zffbdjpn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163zfhwqmin.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163juosivkh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ciaxejus.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163dswbqens.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163llrxbiir.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ckdrqgaf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163wbqebrzy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gjmaonzp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163pgptfcvx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163cxodjqnw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163aeruxwbv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163knuemnep.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vrmqjcdh.html

[P04] 求长度
来源：http://www.aibaodan.cn/163twotlfor.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163dgrditki.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vhnibrdw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163pydjcuhc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wazwabue.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163uoshznqu.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163qokvqllj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163quafgvkx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ipnlmjkr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163aydyucgw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163iztgnjkj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qgflpduw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163xdbvihey.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sqhflquh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qazescwg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163xxsufkbr.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zxprkxwl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163dehwgycv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163cccspggu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163wwkwqtfs.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163xliybrjh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163olltkhne.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jmphlyoq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ulagngse.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163nojijgqj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163wgetvuhf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kgxkwwij.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nqkflexr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163grzfjpxk.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163aqsjkplj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rexwzhdf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ereupxir.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163dbyometp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kytxqgrq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163krbnsnnf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ppmzbddt.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163jpupnhyr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xhxepwge.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163yvmxaqvt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163iracynqn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163fnpgnybs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163wblermmk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163hqtlzrib.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ypwqixtr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163uvylbuwi.html

================================================================================
来源：http://www.aibaodan.cn/163vswdocyr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163oxjkzwzy.html

================================================================================
来源：http://www.sxryk.cn/163oycvqnhk.html

[Q01] 创建表
来源：http://www.sxryk.cn/163yxwnoaqw.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163udjnngrq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163iogphikb.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163bvufhlce.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163luehodee.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ouszmxgw.html

);
来源：http://www.sxryk.cn/163ccbtpryz.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163utlxocov.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163sjxubhex.html


<!-- 参考信息 -->