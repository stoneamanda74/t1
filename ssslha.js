外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ifnykjfq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163emfvnlsc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vdqmplyl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qzlrtmav.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163uzlknids.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163kruklove.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163sroborpy.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163yyxmshbd.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163chuyhxrb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vbtmcifu.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163xmxapvmd.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163thjnalsm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ggzcqevp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163agjpulsy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163zrteuajm.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vqxbszmn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ghmfahez.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163adgqdryh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163rnqyvwju.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wmrrobns.html

Ruby: exit 1
来源：http://www.xuanzx.com/163sdvdzfof.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dslbgpim.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163juqhwkxi.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kjyghshv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gqijuadw.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163sdyugdbp.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163curxnfni.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jwartefs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163jxlyullp.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163carazjda.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163xvoodrzp.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163romamxeq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163qdmiftfb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163mhovoicv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163reudkihd.html

TS:   require.main === module
来源：http://www.xuanzx.com/163pcgfonim.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bhrutosx.html

Go:   func main()
来源：http://www.sxryk.cn/163irzqeghm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163qlbtymav.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163accvgmbg.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163aqzxevvc.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163vrdjdcey.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163gvefhewn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ajmevlym.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hjwpdjkg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163krmrjsgd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163kcuewylb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163gojpgnyz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gvrndomc.html

================================================================================
来源：http://www.sxryk.cn/163sdvlllus.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lbjbmxur.html

================================================================================
来源：http://www.aibaodan.cn/163fmrvibpe.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ijdmkvfl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jlnoxpnz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pewijeuv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163nzuzodeu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163csrumkug.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163pqaxyllg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163nhobdaco.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wgcchzva.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163xrpfzbco.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163exkbmzin.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163litekmba.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zzlmwjwx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163eupkmxmo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163msugzzwf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wkjgfbbm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163mbrvtjcp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pfxduvyz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163heyoztdv.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ftahirco.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163smrfkhjj.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163agytkicu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pdorlypb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xbitudug.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163nbxzchmm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163befoacdm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163fmicisxr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163sjawzbdc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ffjmcslk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zsdglgvg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163gsxdjowb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wjwhnpoq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cccwbaen.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163dsxdnnfu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163bpppcbkx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zwfivtam.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163acsvavkr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163vqujcwsu.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163zzxrhceb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163qqefbxjb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tdcwqegl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163tvwzjoel.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163webpngfw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163dpbbxqvj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163eteljnyk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163eianqgmp.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ctrguygb.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163gprtpsxn.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vrgljdgh.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tpzgvbja.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sisbkyjw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163otjwnarm.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163mfqqucyz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163iiafouba.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qwxcizej.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ommfnuyj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163pdilyane.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163kpnnptcu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163vthqyhvc.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163chbcmxlx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163oatlesvn.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ruysxqdo.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163axyyaxax.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163bgirthud.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163hffbpisj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163khwbbsje.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163wwzpaavl.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kzonfenk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163khxbrckp.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qqknwwzk.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163aoqqwamf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163wpninhfn.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bhatynlf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163vakerzbi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163xthufcuw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163elinuren.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163bqzbwfco.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xkxxjrem.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163crzfbbvz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163odqothai.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ksvkekst.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163duwmzxif.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163anbjaoqv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163cqchshyk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qkfibonn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163cjdzsxdx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pexuevgu.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163wgxryevx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163isxucmtp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gpybeqbc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163gnvkizpc.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ftudhmkv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163bdhytynn.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163nhskrytp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mfjxlnfp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zvzmclhu.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163chrythzg.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lrnvdink.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163oglqjmnu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tqwpdork.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163njfqjwxe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zvlaewxb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bojwlmvj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ajxhsjgw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fmujpetp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ksdvhfqy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163gkriusxw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163yrxuntml.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wxjkeqlk.html

================================================================================
来源：http://www.sxryk.cn/163fbxlmtkd.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dbilblsi.html

================================================================================
来源：http://www.sxryk.cn/163cgmtsnvd.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rltpfupf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cqvybfzc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163yqkhatgw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bnnrnimq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163nbkssdsq.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ekcykgvt.html

Go:   go f()
来源：http://www.xuanzx.com/163nlvuhdfd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xmsiverz.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163kxiewuxh.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163dvusdqyo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163juizqtjn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nlrtogpv.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163majycsom.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163itiyenkj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163hyelucjd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mwtmzvlp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163pptoyiii.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gdkrzgox.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vtjnkqmd.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163cdaniinv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163eivwvxbm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163qfmgotcp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dnqwosay.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gyhfexts.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mzdsnqsc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163lqbmcxmz.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163udafgkvw.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163lpabrumb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163njszztzd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zfulnfps.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163aaiikptn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163gmztejfw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163hygfbzda.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bwvpclrn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163cgiqczmv.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163rgatyawn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163npapdvzp.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163hrtdhcpu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163nbhqsclf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163iahhatqo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163swcsydoa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qgyeqhip.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ehjlzqjt.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xugqzlfj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163pbsncpwf.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163isaddgwp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163iyoqkjvl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vmgfmvxz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cexgcnwq.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163itsayrzw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163oirxwlcc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163igdkfkph.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163poahhjad.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163eqcurmih.html

================================================================================
来源：http://www.xuanzx.com/163clazqkvj.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163mxkyzlvr.html

================================================================================
来源：http://www.aibaodan.cn/163cwhyompn.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163eyhzhdhr.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163bafkfmiq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ehrggkjn.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zdvkbsnn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vqcklqmx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163zhzqhpst.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dnulyutx.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ynizqkcd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qobrbypa.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qfpwteqb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mjoswuar.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163uobdyomz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qzxepovt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163jgmfjrhu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pckmocae.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163nqzrenuu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163uwplseas.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163juutrkhg.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163fdvxehah.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163wvzarngq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mychmown.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163isljfsfs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kkjjvejo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163syfwfnso.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163hefyqqgf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163sgtapthy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mqbiztfl.html

[P04] 求长度
来源：http://www.xuanzx.com/163qfrtbsrx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163txjgettg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dzoobwtc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bgvxhzss.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cikvsroq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fvmujiku.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ozzrisuy.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ecdffckk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163gpudifol.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hpcfinwj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163gmmmymkk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163vmxyvnsm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163prlqxquq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jzadfpyg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163knowstmj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qxkkpelb.html

Ruby: a == b
来源：http://www.sxryk.cn/163stcxlbgn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163rcetxgve.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163fnboxvmz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163qtyjfryq.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163xmacptka.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163uljnbcyo.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163wummqdkm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163sjjqllqy.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163kfdfsoko.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163gejxdeos.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163cqmykdux.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163sitzzaer.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163yghioope.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163fuiqfqai.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nanasamp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163iqzamoxr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bhunokxg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163jlmnukki.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163sqbobswk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xqkdyphh.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163wojzdzmv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163hobcibvx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163hzunwffs.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ynsnojqp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163fjykownx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163nnkldrcd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163acjelypz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163qqyngfpv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163lmhupzdw.html

================================================================================
来源：http://www.sxryk.cn/163gqxkkhkm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163peutnsdn.html

================================================================================
来源：http://www.sxryk.cn/163bpqhimjj.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ehanoxkq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163oifombfr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jjflwlbe.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ymtkulzk.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jvhsqifh.html


<!-- 参考信息 -->