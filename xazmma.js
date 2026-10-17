外链999!wailian999！

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163kppriwof.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163zhefilnf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dkcjnvbg.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163nfuyadow.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163yjvqfsaf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163umajjowj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mnrhxiax.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lyiguxpy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ryytgtub.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ztlswnwo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163tqhgbcmn.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163kckqthgd.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163gytcwckh.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163cqixubog.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163qroumbts.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163xuzyflgn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zuubxobv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pmymuxso.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mrfyquqd.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bucpoqfv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ibebuout.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gvszmbbl.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163aatidawq.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163lqzdzzte.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163bsokqtxw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163tenjgmky.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hqhglgch.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163jmnygikt.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gbonmuwz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jeuqsvlx.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hvuvvtfe.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163eovqmbvd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163eqdrpiwc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163iyffoxks.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163koxhdqbg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163cfiyluwk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163nxfovlnp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163fphvijvq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jgeulsdj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163dhaxqphq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163yewdztyn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163rxlvcixm.html

JS:   require.main === module
来源：http://www.xuanzx.com/163xqegutgj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163stbhciyz.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uednvmeq.html

Go:   func main()
来源：http://www.sxryk.cn/163plihzreo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hqkymdxd.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163oxppchmh.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163nycwktzg.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ocnwvpxt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163atdjftbd.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kjbymsgf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jshklhqb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163klebcrgy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ivwpybno.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mpxcuedi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163xnpriwan.html

================================================================================
来源：http://www.aibaodan.cn/163khnzyxam.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kyjhgocx.html

================================================================================
来源：http://www.sxryk.cn/163oupuzuem.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zrhwrgcw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qrrwlnmo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wrlizdch.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ktgfgwir.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163eozrbowm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163seybijxj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163mfjuazno.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163cuadajwk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163wygmibvl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163uecxehmb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zlxdtpce.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ndeamisy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mmqskvds.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wdlnovef.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pjerdwpu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dbqpvjyz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ccnnkwsa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163acobiapt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163bmmyyshg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163gzvfuwqz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163pyigauft.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163untixdyg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163iidkkpga.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163oxjefgzx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163lcanmnju.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ielgooeg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163dkjwmwdc.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ahigaxfl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nrmgglnp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zycyrisp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163idewcagr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163nadguqcc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xgnrriwy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zliubcgq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163oqgimimn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163fbcmbvry.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xmpfbrig.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jpapvakv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163svwranmp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163liozfinq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zgcxavfw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wzootnee.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163stuxdhsp.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nhioobml.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kllxwgkz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163rrxwrfoy.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163nwezjjce.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qtvtgxgy.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tlzzahtw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163oheiestt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163gwokhhpc.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ziaqomrg.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163wopxbbjo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163snzdpect.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163fkwiemgd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ktahnlnw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163dluefhpy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hymqcaka.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xjyodglk.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163naduequy.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163leekrkqf.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lazukila.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163acxinvng.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163uolmrzwf.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163otiemqpo.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163fsionyhf.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fqvuvdkj.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bmpynyex.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163kblkxayd.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rcuxwlav.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163pkyqskqq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163qdrceopp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ratqrspw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163hfzyntjp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163xftfegrd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163gdhwqxeu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163nuoxaizg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qnqgdbuz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163vdwrdbcs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163doeelnlj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163dunuthtf.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163nanyyumb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163rwnjtwzu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163srjelrjg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163lxgprcpe.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ejfzwpsq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163qkcmlzey.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xoymbwoe.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163kkhehuce.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163bwvjlwbe.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163ushgximb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163oxbguolz.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163mywgzwse.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163knrpfqpo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163frzubpsv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163hjceathe.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xouqghor.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163fbggispt.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uxhlbtsk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163hkfavmxr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ucgkquss.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163wzloooug.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163osisdfnh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jjavbtzy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163knorrypf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163asojdves.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hypiohul.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ojclsbqg.html

================================================================================
来源：http://www.sxryk.cn/163dbflhhsb.html

O. 并发与异步
来源：http://www.xuanzx.com/163fbjbfoaf.html

================================================================================
来源：http://www.sxryk.cn/163rjfalffz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163otoqzeqz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163kmqizfcg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163mdqrgdkf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ilfwevdy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qgvigbrs.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vqkiuyfl.html

Go:   go f()
来源：http://www.sxryk.cn/163edbjhhmi.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163fnoftfhv.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163txjtvzas.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163kzvpstfl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nlpjijuk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ytzqtkti.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ptknqrnp.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163asowzvzi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163frfgsbql.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ttmwvpit.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163yxkomuew.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163mppdyfql.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163drcflzmw.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163aeaoytve.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163zqwywtio.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163yepuirmw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163moonftrv.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hxkjgtci.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163abbhirvl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163xngvfvdg.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ajdexmnx.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nucrddee.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163owltkjis.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zzucvrri.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163cnmauvgi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163exsscgvy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163wwznoypi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163azzvbklx.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163yvppxgwx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163licaxxly.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163btkxvlfz.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dvbscjqd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163wzcvoemv.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wvmtzbev.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xiprmdwy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163pgvbvkym.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163seowarsc.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qmkxnfkw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ggbtthen.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rvtvchnl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163oboqpvio.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163zemljrhw.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fkfubzss.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163sbchvtzy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rjixetti.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163nppjmqtw.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163cvfpjzmp.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163raxwdwov.html

================================================================================
来源：http://www.aibaodan.cn/163gfjqwnxz.html

P. 常用工具函数
来源：http://www.sxryk.cn/163szkwmhhi.html

================================================================================
来源：http://www.aibaodan.cn/163zkofyfzb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163psmfndqs.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163klpctopl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rqgsvxzi.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gbtadsmm.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nwiwqtlr.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jzimbuoo.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163redjirqm.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163btmoxjkl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wiqsdydv.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fxobuorh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163envfmine.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ahihhhgr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mmbekjjv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163npejbhuv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163fmrajqdr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163pikqhnqr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163skyddlji.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163arwomomu.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163nhbntyta.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zhikzcwm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163qcwgexgf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vxwnxytm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163aprmlrmi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ceivgvsz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163otgdmfcc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163gfptpzdr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wprcpiek.html

[P04] 求长度
来源：http://www.sxryk.cn/163vbjyzpra.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xlxsekzd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fyodaekz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tchxxhwe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163voyvqpjo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163dlpemgzm.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163itmzbgwy.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jolwofhy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cikppmhn.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mreftpms.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163mparxyjt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zmtgdbkt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163uvpvnoqo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163iysrrzgv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163fabftmmz.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163bnwobisq.html

Ruby: a == b
来源：http://www.sxryk.cn/163fjkxesci.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kxqutqsh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mziknsls.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163krtggyaa.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163afttmzuo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163qzvirvut.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163jcrtglho.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mlxpommd.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163uoacxugt.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163zqeugkju.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163eyyeiwqi.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163qjgxpcor.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163zngjqvnd.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163aksbdgsr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mvgyvcjh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wvwbmpgl.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163zkpntnof.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163zrufnuqe.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ifoltjfk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163zzhabdxu.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163wbmyjfor.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163dxbzmfkb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163niyhmtdr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163qafasono.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163tgsodhvy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qfyzmmhh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163bhieyybk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163spscqknz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163azxsekyq.html


<!-- 参考信息 -->