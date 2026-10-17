外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163obmharaa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qownwpzh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163walqzaud.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163okuyplkg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163emzypoeh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163gbrnepbq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163byrufkje.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163uimnhogv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163uvroymfn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wnyfgpkp.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163lvrtprid.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163abdcsivc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163mzyzsxse.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163bldtkvjt.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163xkqhhpdh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jlmxaqkf.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ixequwbj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163lwfcvyay.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163hzqakpge.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163lniqymof.html

Ruby: exit 1
来源：http://www.xuanzx.com/163mmstbiit.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163xpyuccgx.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ljyvmrpt.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rshpknil.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bgsywsuo.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ywnmsscw.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163etofftko.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nvotoxiv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ktdmrnhe.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cilgsvpf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zfyculdz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ceqarpjv.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rhdcuvul.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163gigboxey.html

JS:   require.main === module
来源：http://www.xuanzx.com/163evjxsmon.html

TS:   require.main === module
来源：http://www.xuanzx.com/163cawmfcdt.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163tzuquyqm.html

Go:   func main()
来源：http://www.sxryk.cn/163vmobjkhf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163gdxrxwlk.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cwigholj.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xvweveho.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163extesert.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163gcydtnod.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qmgjxpjc.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nmtptunq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163jfrgayln.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163rebzqwsd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163yabtbpwu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163bbhnsqpc.html

================================================================================
来源：http://www.aibaodan.cn/163kaurzegu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163osqxyoyw.html

================================================================================
来源：http://www.xuanzx.com/163pxjfgehe.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163guyrkkpz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163jbhuxxmk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163xusmjuan.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nxmjqsnn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163wjvsuiyu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qjotzfhf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163svyznsoy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163jynwflsi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vmonqxil.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163wikerwyn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rxxwrdly.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kpuxkaoj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gouintbx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tknjmgzy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163oluisoib.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163barfimuj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xaomyagy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163thjcnatc.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163gonvubdg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bhpfahqy.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163fjgytwhy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163aqgkjzps.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163krxuygqj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rxbxxhlf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163kagvavbb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163lwpogwpb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163peqidaqz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163eqsapmht.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fjstosmn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qlmxjxsa.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hvmgpimv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163efqhhzms.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163bywzroof.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ztzznwwi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163krrwrxec.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xqtkxusf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163yzbhipbb.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lwmnpfzx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mpfuqqxk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pnisymxw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kisvdjab.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163pxmvweha.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xjcjgxnc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163kimgigjs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163vkxhxfme.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ynpodzyi.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163oitbsmdz.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ezjgekel.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xyyfrnpo.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163aiwpstxi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163gzjtzfvl.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163dmizhsko.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uvutnjkl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nntltmwu.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qfdejvak.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163qivxwcig.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zdukcsyn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163lljctgqf.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163qxqvxkko.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163uagnfsda.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163iadhnthl.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163rpjizltx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163caxqkotf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163spkonwai.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qshcyhjm.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163zbhimsfg.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163recutcoz.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qtuixuje.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wojveqdv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163eotbdsnu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163opjgtqkn.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163guyzugup.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fctfgdmk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163xmtpdwow.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qgctmxpa.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163jxesijxc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163gfsewair.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ofhxyxst.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nvsnmjnt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163okgreoio.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163xvssnkwj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163yzuvkckj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163nngugnmn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ppdazoym.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wxjjckbi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163oxjbuukc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lxgxzqcl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pmzdlvfl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163tfqlclyv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ptunpuki.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163efunplbc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163eqspvqnd.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ousokcsi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163czldlvqs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ltobgnvt.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163qcgpaosu.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163dzvvobmt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rfbemvcu.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xtptbehv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163lvnfebyx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163msjxwixd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163wqujbrkf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163gqxqpfiq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pucmsuzs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mjufwhmi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tdcfewgu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163whzucvpg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fprdbuwh.html

================================================================================
来源：http://www.sxryk.cn/163zimlzass.html

O. 并发与异步
来源：http://www.xuanzx.com/163pcivjecw.html

================================================================================
来源：http://www.sxryk.cn/163ygnofjlr.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ealekpwt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163arfsdnft.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dyynbuwn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163zrduwcrr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ycqyoxzt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163fisnmsly.html

Go:   go f()
来源：http://www.xuanzx.com/163cpgnfwhk.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163nnwwimlh.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163aqgnkohz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jfelnkav.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163gvrsmzoh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xnkrqpoj.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rklfjckf.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vzlwzxey.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163kcamvecs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lkjetpeu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163obkrofap.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163oiiisstg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163tzkidpau.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xyldfsdx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163xlowdifu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ougdmrme.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jgctjcvn.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163memokvub.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ymrqpiha.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wfgajzxn.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163gbubrjbt.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163hwhzgnpx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163zmwucbia.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163dhqkakem.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163fspildmc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pwipubve.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163mumzmjkc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cfihwatp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163eaioxuur.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xrigbmxj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163cqxbqexz.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163gqvvcukp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163yeksalen.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ewmkoazh.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wgbtqqud.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wpwlxpyc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163kkxbapbu.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163jkdvclac.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163potssjhe.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ylochanc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163dhybkqtd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qtgwwukh.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163frjrcnka.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163nanvjcvs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163btfscirp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163hvgspoou.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163xyjglvyw.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163gqocgvjg.html

================================================================================
来源：http://www.xuanzx.com/163mlrnzryw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ndhhtndv.html

================================================================================
来源：http://www.aibaodan.cn/163nnjmkadl.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jemkevpv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163yleptbfv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163fdbjbsju.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cveegdps.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163iuehzgow.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163xdfysjdf.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ofqvmgrs.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163lgjpmbvv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ubpvnvyo.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163wfznnvuz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xxnabjqv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163eqnwtfff.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pobkiaxs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163owyhapsm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xqanevvb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163blwoahvx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bprciucc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163fzapzurg.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163bcngafph.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163bkfxvphk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163eypnkioz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xdsefqpk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ntxqiesc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cstpywdj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jcrefkab.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gbyfzcor.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163zyuykqjv.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ieilpgsd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mwbvgcpy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163oeqarwkq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gcknvwla.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163rggnsgdm.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163omvmzufw.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163crtvldcc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163rykyyten.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163iwhehwzm.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163fgiwqfrz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hkmsiwub.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zammfryy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ogkqmqms.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gvuygruw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163foyecurl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163lhifkpzb.html

Ruby: a == b
来源：http://www.sxryk.cn/163swnzzixp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163fvsayhct.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ipzdrfnt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xqxljfjy.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vxnppxlp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163yhxidzna.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ojmyhyof.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163obynmkzr.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163shhemtkw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163yqqszcpf.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163qepqwzvu.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ovmfiyaa.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ersvudxr.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163ogqvwzcd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163higsvpie.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mawtnzex.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163xoqdkeyf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163kivqjoun.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163bzrvrery.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bdxjawgi.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163enrtmpyg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163vnadwbcg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163zvlzdabi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163nrbgtlov.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gmburayt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ifxhpaqy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163hgwvefli.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zntqlbye.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163nznwfsai.html

================================================================================
来源：http://www.aibaodan.cn/163cfjkiyjn.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163bsnfwqyf.html

================================================================================
来源：http://www.aibaodan.cn/163nskzbwkd.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163uklpoapi.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ofgaqonz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vhgcmcgv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kkldgkpb.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ecvamfnb.html


<!-- 参考信息 -->