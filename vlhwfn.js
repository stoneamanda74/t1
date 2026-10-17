外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pmlzkenu.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163smonxgyb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163emqkxust.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163bxzbcokh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zojakgpp.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163eencdaqm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rqmfvlza.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uezzreut.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163itixxupo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ppyotkob.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163akktajst.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ynffkhda.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cxghiffy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163yawlywol.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163itwwbxan.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163zhqdjyby.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fwsocpov.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163bqepkizs.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163zcxaybdu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163czwmdouf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163hggxfqhe.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163alhqimko.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163djmkekzi.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163bcjeirqs.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163pahnyhzs.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163aegwhbom.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163czuhmrlw.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163xkftasvw.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163cwdusets.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163lyrdckwm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hahkjezl.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163fcrvtorn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jlepfxao.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163osdzfiwh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163eutxpfgj.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xvapbxzt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163fzodfony.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163auihurrt.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163agwjriqn.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163pewpdxwf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pnntzgmm.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zethcwgs.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163zvnnosef.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163fgwlvhkl.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163avbgxpeq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163hiwhfbie.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163rvfvaggl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163lawkimew.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jgvbqifi.html

Go:   func main()
来源：http://www.aibaodan.cn/163wlthznwh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hovedihd.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163sfgyxagb.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cuzygvrk.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163drdyuzbr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163abmozhzj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kwoqdvby.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pjzkkkqh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163rkqduqpw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qbucrjsq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rtqmhbgq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dxzipvkh.html

================================================================================
来源：http://www.aibaodan.cn/163eohlrdfk.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tmkunqqv.html

================================================================================
来源：http://www.xuanzx.com/163dgcdpboq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163amsxcuvu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qlkjgxbh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163gqaspyzb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163twnqtnkw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vhwvpmka.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ujdabuyv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zxgsfwbd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163esxdwiep.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ckvplujm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163boeyosxk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ihpdydvv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163fsuqqgap.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163sbvzotie.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qfxnolcl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163dsfbhvab.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163itluikdo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ptrqqymh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163dxjgeuut.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163vsywktkp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163lhcmfisj.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163aprrmbxv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wxplqgri.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rflysxhw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163igvcwmpw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163jphyrpsb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163gikhlqgk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163fmdbtbcv.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vmwghumk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ujlqjjeh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163wetudrqy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xsgmquvw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tbbukzss.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163uljqhzgw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ydndkzyc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pznldqdo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163nkxfqykw.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163utjuvcik.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163umyzkujy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163qirwqgse.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mhcqvgyl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163icrlvaki.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tsqsubne.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ecqeawzs.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163anpbcvfe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163iugvfoxa.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163hmlduttf.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163tkuqzslu.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163gyaskefe.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163embagbrt.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hjwobpsm.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ycxjuhuo.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163dtwoohng.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163enhlblow.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mgfjwwyy.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163pwfcubvy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163roeumkka.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zcnmtzmu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163oerjtgqd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ixljbaox.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163frktypzz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163mzhtwvgv.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ydyzhclk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jcmsfiqk.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163qjzgcrhg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163gewsnvxp.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163aaqpvmtr.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zywdoixe.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163daftbkio.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163mqwocmkw.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tbkhczvs.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163zfewkadp.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xmlgppuz.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163axvleacm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163wizaykkx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163vvjvjfvg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163fgfukwwe.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163iktrwzhy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xcooolri.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163tcnticbk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163lhkfimdw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163chwbqurq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gsifjlkz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qfzvdovr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ukptrhjo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163aqpdyfcx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163emzvqsar.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163fqhmqkwj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tkjpvdkd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163luycbwbx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hrrmigrr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163qvkaeeto.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163tsgxcnlg.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163zrylahkf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nsspvdpl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163uzlblsxs.html

Java: // 手写递归
来源：http://www.xuanzx.com/163obhvwhtj.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163qmsdiolh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bcprhkyf.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ubpseems.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163bsqmsspn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163xqvvoyrl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ptklriio.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hndlopvv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vgqxtopl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tqedwwoq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163smlsbnqm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163vktunaer.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bithciyc.html

================================================================================
来源：http://www.aibaodan.cn/163zwcrgegm.html

O. 并发与异步
来源：http://www.xuanzx.com/163wivzaetq.html

================================================================================
来源：http://www.xuanzx.com/163kapodfub.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163qgwysujx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163pyetmrsp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163fzfqiifs.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ekmugolt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qvonnxvl.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163vabibfpo.html

Go:   go f()
来源：http://www.xuanzx.com/163kfkgfmtd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pekmcpso.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163vzrlgxxu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qxfivmkm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163epnneecz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wtxvjfmr.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163yuhyivon.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163houjasjv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163kvvlyorl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163rbhiqvdt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163mtnazwhf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wuaocqyh.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163hedbmsng.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163wgifcudd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ftgvfrty.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jwhybgta.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gtmhdzox.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163vqlnlwyj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vvgcgmge.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dwnadtgb.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ukdsmddz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163bkyjtfdp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163adiqpmin.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163raqtvpxe.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163eoxcvykf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163krqmyryo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163aieazjwg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qyhvdjyz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163oyylwjlu.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163vrhobhvi.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gahyxfte.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ltwlhogx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163hkqmpkeq.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jiqpbuxk.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zhmyazaj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163wsoheooz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163gehmthlg.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163syjcshmj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163eddhjsky.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163bvjknrwj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ccobefev.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163peodybtd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jzvgeacy.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163muhtegna.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163svchxavd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163smkntibt.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163odjwxcig.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ppamdsnp.html

================================================================================
来源：http://www.sxryk.cn/163arpqklyq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163krggysrv.html

================================================================================
来源：http://www.aibaodan.cn/163dilwgmzp.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hrhqmiaa.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163rzkcjaix.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163gwyrmxsu.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ncqkdxff.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wjgphvbv.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163oucozcdj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wmmcmjcm.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gqamjxon.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wpfrpvwo.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vubdhuxh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163lprbrugk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qgzfuijv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163bcibbgsm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163axxlbbvs.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163jzjdknrp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163xefbotxe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ewnkkaus.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163wnucdhrp.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163judvurzq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163kwduvzgv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163vibstons.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xmbmrlgf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ybpleako.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ygifjkdc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163gbetluuw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ojpnkijg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163pngnoqdx.html

[P04] 求长度
来源：http://www.sxryk.cn/163chjyqjjh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163qnehfigo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ugmwrent.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ssmxrjiy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163udtguuiv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vhipmomk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163etygqpde.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163fdstoyxz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cibsgkiz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163empgmkqy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jieclvkp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163cnyepqkq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163abexqphc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ddeobbyy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ocuadxgt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163pdjhlfhs.html

Ruby: a == b
来源：http://www.xuanzx.com/163ioygtktc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163dcqmmzjl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163fgzpoizm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163rsxihuri.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163uydikxwd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ydfrrxlp.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ldrlnixf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163lgwombgi.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163dxfndlga.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163yddvuens.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ofguyual.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163usnhsjdp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nwurhxdi.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163hkujqvuw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163easvtywi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163agfmcfby.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hezkmpuh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163fuoagwar.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163iesymcyp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163msoxvayg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163gktpacfm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wqebadyj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ezfdcihk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163hodyyhec.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ytzrpkgs.html


<!-- 参考信息 -->