外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ftdtdfvn.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zpritged.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163nmrnbvbo.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163gkbklofu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ttxkxdec.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163stvnfzky.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163veupolrf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tncsmgff.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163vrhmjtaz.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qqiyyedy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mvxrwpsi.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163toukrtjv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zjasdyei.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xznhwsnd.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xritlpal.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163etynmcsi.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nkvppkqh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qbeafgng.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163qkaadxng.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rihhmvrg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163cuiqmzff.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163lcvctyfq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163rcjigzzm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163mskqukwx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dduxrbix.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ryfvwupr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163fuxvgkzt.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163johqlrai.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163vexhdknq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ayesrxtw.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163tnzdqjoz.html

TS:   require.main === module
来源：http://www.sxryk.cn/163atkoeivj.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163avcpxjqu.html

Go:   func main()
来源：http://www.xuanzx.com/163yujizyjr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163sxthkbsz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lcmtdiqm.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163obqzreaf.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163olxkjpil.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163mcmgdaid.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163nlkeruvj.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163udskcrgq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163bweemlff.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163olxcyzbt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163dykzxrbu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rsydryzp.html

================================================================================
来源：http://www.xuanzx.com/163eknufyek.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ekkhfweb.html

================================================================================
来源：http://www.xuanzx.com/163abxgperz.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163gfnacxvp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163eulpsgrx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163gizawjzg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163loydkgoi.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163fpawmeug.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163fmqkazgz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163jfdyohjf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qxnbbwop.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gbcvvwrd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163chiwmpoz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163klwbbhiv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bmumxgpk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pothsupk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uannfkvt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wacvoqri.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163yfjlbkmt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lcvebkit.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163pzmbykza.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163flzyngyy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jjvwgydw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163elvowebn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eqwzdaxa.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163eaoecgvc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163bukaecih.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ekgeibqq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163frizzguq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163hwfmudmi.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163rikmizmm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fngvdill.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mecyllpz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nctcbfyj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163abgtjidi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163jqsqfbiw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wbyjqrcy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163iygcxxlw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163dwdylryl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ucbouphw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lzretyks.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163exoqtcdo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cmvcdhna.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vmmlmnxm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163lrtbqzvc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ukgdnhpg.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163oycyktiv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163wwfxlffd.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163kddpormp.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nfqjykvj.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163sgiyhqcn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uhvunqcs.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yrsktlww.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163eqszsqxw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163surapscy.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ikfmastm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163etqnvato.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163epvcmeoj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163rqsglgfl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rnevbnay.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bhqpmcmv.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ozdqhhfj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163oxzxtjxf.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ozbpdoso.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ldvaqtcg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163tusthfvj.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163eguhomub.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fjznfkld.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163veelhmlr.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163apstyvbd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mpyqptxm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vykfpabb.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yayrzejv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ypdtuegh.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tbkyzxwv.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163avkrxbaz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163xzexaszx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vsuzaayv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163atbjgslx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zkdzunoc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163csaqcfxr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163vxtspocz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163swxgspsq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163pifebler.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163bldiukfs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jwkscjow.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163dzfexmdu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163cwpyndjw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163msrsggsg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163uvgzksvw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163xxsxdsxl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ufzszhhn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163moebsxbd.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ivxiqhyg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163uisfelka.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163mezrrwjd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fqcqkamx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kusuarvy.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163uadkxffb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163gezownrf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163aekmnkdy.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zciqwojv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vivpvnld.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163eulhieiu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163udlkwplr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xpytewjr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163sksrbsjx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gbgfswmi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163clwmchej.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163iaghmdzb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ucgocwzl.html

================================================================================
来源：http://www.xuanzx.com/163adwoeser.html

O. 并发与异步
来源：http://www.sxryk.cn/163cbpynvfa.html

================================================================================
来源：http://www.xuanzx.com/163brfjbznm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163anxxkerg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rukcvzzv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163scuapoms.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163wkxpedyk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xjjsvpjz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gtgmzvbq.html

Go:   go f()
来源：http://www.aibaodan.cn/163tzkvlxjf.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xjwytuwk.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ynngkgek.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163eqsuhkud.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163cimzcmgn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ycnivfga.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163acryqcrj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163extvedep.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163cotfowfg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163miuaxzpn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cfnetyce.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ydfybmjg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163bojtenfy.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163csashrxa.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163wwhcfuom.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163qkkjyxkg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hkfhqzad.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163uffbeyux.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163isedakim.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163aunctixb.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bijarpmf.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163hkpyxugs.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qzzkydvk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163jszryusg.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vuzyfcgt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zawiifzs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163vwgxrwqd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163rtnwlgfs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qwbeiugu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ftanrork.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163efsrihcl.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163yvhkdosb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qwbhceku.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vrxtwwpy.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ebflgttz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vljkzhqa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163lxriysvl.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163nvircxcg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163xyhmgahn.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163mpnevuld.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163tzqpwhia.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163veqohwmp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ciqwxwdq.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qtobuqww.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163bldcnqjw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163saiagkaj.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163dniaknwj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163zvymwbgx.html

================================================================================
来源：http://www.xuanzx.com/163kvbolfyk.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ygykrtik.html

================================================================================
来源：http://www.aibaodan.cn/163twvplnln.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kwexfmam.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163rnomjbrn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163irbevman.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163lcjsglre.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wtlejwkf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163chftdfwx.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ajzdlmsp.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ankwkcza.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163xrhubjtl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163tecrpphq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163rnkzemer.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mbonhakb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xqgkewix.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xwzgnhrh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ivuyuiak.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wlbatobd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163uoxmonze.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163wbkbbple.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163hzheunil.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163jkvgygic.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rnpcnjdb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163epcbkkmi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ugafcnpj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163clyrvzdq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163atqiilsa.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163dlztmsuy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uinwknqs.html

[P04] 求长度
来源：http://www.xuanzx.com/163hqvkyewe.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163odkyrbbd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rvdnvxxn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bqpygnek.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163otpovidp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ltlwydqj.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xhksyybi.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163iniprncn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163pcjdnueq.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163vtkatret.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163esobjmqu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163dpgvmpyl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163oqsxowtl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163tylkbhvc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zhxjfwkn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163spgxaqzz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163sontbkjg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kltajqzz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163spyvrslg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163duuykxgf.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rwsljckz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163yjbqhrni.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163tmmngqjj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163csrqemmh.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163tlwshbuh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163akpudtkl.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vsznqmth.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163chltpghq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163cydbbytq.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163vfhngkex.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gdakxosw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gyqnomsz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163fmpufybv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163dawubaqk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ocufimok.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163aeemsjsh.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163fxbegbnw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ymhtqfyw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163izungpof.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163kidbpezq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163lvshnrlu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163sbivjuja.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pxjsryml.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163kvxyghhc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163axbskcfa.html

================================================================================
来源：http://www.aibaodan.cn/163kuuwflvr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163lhkvoalv.html

================================================================================
来源：http://www.xuanzx.com/163mqdakbpj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lqjzoion.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ztchkisw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nzhgcjbo.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163pcacevbt.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163tdxdogtz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163dgoeqmqu.html

);
来源：http://www.sxryk.cn/163bovhquhm.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163oweoavqm.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ibftfbri.html


<!-- 参考信息 -->