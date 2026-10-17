外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163zjkclynr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gglmbbnl.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163yszrayhp.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163pwwsiens.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vtfmnuje.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163degvqrae.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163yhiuwzci.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mxcyobcd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163adscgxwp.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rlffydnw.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nrdzundr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163moczvwlm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163xvasueyn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163xtbuxwae.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dyxusdox.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163wxguppry.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ibsohxag.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ibdejivu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hdwkoetj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163yysnuqse.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163mazxqxlq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163cvnwuqrh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nkeolyxk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xtlfgvzh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zvndtbcj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163khvhetzx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163gucmxyfh.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ptxhgwsh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163aassqcbi.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163sqhmsnkl.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163mgskbxno.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163guwknmyx.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zzxbkzdg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163rrrmpdua.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ttuqmfln.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yrzxlpad.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163buclfoua.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ujxlrist.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pkbodwzn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163pyblcefy.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163mnrzrnds.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163teeyxvha.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163whjuugom.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ctpgrqkk.html

Ruby: exit 1
来源：http://www.sxryk.cn/163qnyyeyns.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jlfkdcrt.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163itgtdqdd.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163lsgdvezq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163pbtmxkuc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ecuhkrkd.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163kkgoblnc.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163brfenqzg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163kodluteg.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ktbokaha.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163pvgynchp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163isfgepwl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rosljtrw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163vlzbokmz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hcqazlrf.html

TS:   require.main === module
来源：http://www.xuanzx.com/163nudenelv.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ufzoldpl.html

Go:   func main()
来源：http://www.aibaodan.cn/163yitmketa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kxvbkpdc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163nptvcqmg.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163vlkoemeb.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163yqdmiowi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163einxjqjv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163iduvchtt.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tternzfa.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163kulqtoju.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ninlzsdn.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163bvltkgsv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163qdfajlkm.html

================================================================================
来源：http://www.xuanzx.com/163iypddenk.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163iyeuitlm.html

================================================================================
来源：http://www.aibaodan.cn/163snimclzb.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163nlnxotfe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163rtaoyuvm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vilfsjol.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qtyislmj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ebwshmpv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163pnqeulzr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wjymwisy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vujhehjj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163biqqdnyt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163epxazlpz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163erzpeghe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qgzguyjs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dbtgbdhs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qhywjkme.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hpcovkkn.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163brcihhru.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iwxwkhda.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ufnrblut.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xyjgghyq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qhseoxir.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163fcgpdtyr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rpfaemvf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163sythymjr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ymjppffj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163myrmxulc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ridqcclw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163eqltezae.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mqaiopjt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cklicsyr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lzypincg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kemfulgz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cqutpley.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163tehauzim.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163eqflqoei.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xwgviits.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163zuoljjlr.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163tgbclsdx.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163sqpnyoqq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mombiphx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ldlwmvst.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gvombjhs.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163bficrons.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163lxatiblx.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163uqxjjqse.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163agqqpuho.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nwgadpgd.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163flnhlnzk.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fehqobgj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vwgrbgtn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163frgblnwp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ykzyogcw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163gsbwvnrl.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163pmoradiw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163doscsuwz.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cevrxyui.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ztaefcto.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163cmotlfak.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163nuvqrtad.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xtyooxhd.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163myuxktwc.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163wwlcokcs.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wiubyatn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ovkwuwgf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kgvfbxqs.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163pbsklxfo.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163doyqmphp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wrgmphpv.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zmmlxayz.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163clrjplzi.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ztgpdlbn.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mchqycse.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163axysrqrs.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163wtvgvqyn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cyljfuqh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163dhosbeqr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163xhfjgmbn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pgcaebqz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163skktrxre.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hdjrodzr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163pzruktto.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sgxwqixb.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163htdyfesj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ofdaxxsq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163jzevlmyw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163vzegmwch.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pgiyiibj.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zxvzvtru.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163zqlsqmck.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ilyxbysn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163smuxbnzq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163eyojbqdz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163qoquexmo.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163jkzdxktw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dzxiziog.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gxknrckj.html

Java: // 手写递归
来源：http://www.xuanzx.com/163mjbormtq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163zmxgkume.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163lclqepih.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163bftjglkb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163rgysofww.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163gptywemo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163zvekarpp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pscxgcsa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vtebeysj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qtljquxk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163fhumeaoq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ouhpnfmo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kslqsuox.html

================================================================================
来源：http://www.aibaodan.cn/163jdlzshmy.html

O. 并发与异步
来源：http://www.xuanzx.com/163lbldhshe.html

================================================================================
来源：http://www.sxryk.cn/163ythkvwrf.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163istqvocm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qpuzturi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vjxundui.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163laypcttk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ysqpkfww.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jbbiqrou.html

Go:   go f()
来源：http://www.aibaodan.cn/163eplqsvrx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163dkixkfuy.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hfeohfjn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163hqydyfxb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ptbxiisg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163vkucsnte.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vtjhnixn.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163yszvoonr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163knrrnpmj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qsttmrck.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163goaxnxne.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zgphicyt.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yjxcwpey.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mqobbjji.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fmqqtbor.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163zfwalgng.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wsmcyqfr.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163niibcgpj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rflyakrs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163jfkmvzzw.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qdrimqjq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163mwmtqtcb.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163zrlgafqz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163qlvghmgx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163enomfxuz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163cfxqhyxh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163gyshkqac.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163drojapud.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163anajhouc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163aiuewizp.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163kycxihys.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ionmipwi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163zmwsvdzh.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lfrvevbr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ncjvmqzu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bmiuktyq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163gytqwxgj.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163rnfxinil.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163havzupkj.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163aiejewjg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163uerlavjk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163irntnhaq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xbtscodp.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163grieqhmi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163udnkmvnt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dozsgizl.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163eovuzzkm.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wwcoobdu.html

================================================================================
来源：http://www.aibaodan.cn/163rtegreli.html

P. 常用工具函数
来源：http://www.sxryk.cn/163bmyykpqf.html

================================================================================
来源：http://www.xuanzx.com/163sjyfohsf.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bteoivom.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lmdaspzt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163xnaamolu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xdyvxnfk.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tiswmswk.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163hsvsgdqd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ffxruwbg.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163brrdbxyi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163dvxtsgyv.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mcaserbt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163gwpprgxz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qwmqvnye.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163yrixulxi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163eukhtyjt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163evxyqcjh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163hnwazqhx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163pezkmcvf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163egjlmocs.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163rejofyvj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ghsguhii.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ynavsnqo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uogmhjtk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vrcjaerw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163xllltetl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163achxxnsw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163tjiloseg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uzoqsyxe.html

[P04] 求长度
来源：http://www.sxryk.cn/163jkcxvyev.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163nmftqfsp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163soizfrip.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bmycdrnh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163okdeqqhy.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163pwnlppko.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163wngaswhu.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163esekbtqa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163uaylkisf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163dzzkerxs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163umujlfhk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jqogahlh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163zcahsltm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163frkqalse.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zuekbayr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163fdqryqrj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163rwflhvww.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ekctvivo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mqwyrkzg.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163pqzovpyh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ltjkykcf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163hxqrssph.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kcssjptr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163aeshclco.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163xpludzzk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163mqbsxzap.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qrzlfwrp.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mxhkqjab.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163hdelznsq.html


<!-- 参考信息 -->