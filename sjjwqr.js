外链999!wailian999！

Ruby: ARGV
来源：http://www.xuanzx.com/163ajqdnrpe.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gxgbqjuz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ewkshvjz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163nuuyaant.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163oihvicmz.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163lurgbyhn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jnkwugtr.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163onyuogwt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163tqygpeoq.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163anefmjlt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rpanonla.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163mbtnftqn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vdnezfoe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rchlinde.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vqvufzki.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uwolcmhp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163tebfkpid.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ksqbcqra.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163tsbyfvjv.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tdjbwpgh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163aznagczh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163miraxrgf.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163tzaotutu.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163suidmvur.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kaslfcrg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163uewytdhc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qoqsgokh.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163scrmgsrp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163acjanbuk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163omngyref.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ehqblgup.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163bodajahs.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163wrhaswvu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163dcxhgcew.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163pjwvmlxc.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wegsyvsr.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163oavwevmr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gjlwdvrz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163cbtejfod.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163phjhuabz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163pioejgre.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kqsbvsij.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qbtabfbg.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163enrbfzym.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xiuoktsq.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163vmwkdojc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163aabbzxri.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163djrzbvlo.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163lsiubozj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163qcjwqwkf.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zjdnaqbk.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163oaxhqtxm.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tikcqqsb.html

Go:   func main()
来源：http://www.xuanzx.com/163ldlcbppt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ybkeiagw.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163xqfpaxin.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163oebfxwtu.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163hhdzmmzn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163yyhzhhbb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dzsfrnjv.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163syorxuqn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163fjawbzfc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163adfozwxk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163wcgfwtsu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163dkclzcfs.html

================================================================================
来源：http://www.xuanzx.com/163ltkjrbvn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163mnhfrdki.html

================================================================================
来源：http://www.sxryk.cn/163isrkdaou.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fawwxkzf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163gubkfnue.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163aamjqtpc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163yahygdpt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jqwifcnf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163allpbxmk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zvmyrrjh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qkxlgflb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ybtjbubk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zrwxofbu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zquxzejl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163lnhcnchi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gogedzee.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fbgsiygu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zleqqkrs.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ukiwrnpa.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jzgnizme.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163zhcbsyjy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163xlhanbpg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163epkykqtv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163oyczzxkd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163urvptgjy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rltpkmqh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vkjzdwby.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163dxhnlwry.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xvlkfdwz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163kgbvvffp.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mmjtyaxj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cpjmpjpx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163noofpxaf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vdkwcttf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hnjdebhe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163hvfmkkad.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gzrtrdzh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qwnezycj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ssmnlsvv.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163culclwlb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mlysbooo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mcxmeevj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cheuermq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xepkwndo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tloldbkm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ziykgdpd.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xqjxstat.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vryxxzxx.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qtrfcrya.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ttubtuwb.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nimztmpm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qksnhgrf.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nuintffe.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163maumtckp.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pckwuaxj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zqtnvazn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fhglmhce.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163utzxacmz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wcpziaus.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163mpxqmnjq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gnurcokp.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jawylsut.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163iidacueq.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163hlndtkan.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163hlrdiind.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163fysrjdln.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ujwatbja.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163utmgnwzn.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ifkgseym.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yduznunn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uzzlyfdm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gnowkmrk.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163oxxlljop.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163lfwzvwub.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163fxsvfrwp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163lhjplpyn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163uevgtivd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163irxrumub.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163uefndpgl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163larpsuus.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163pceufyyz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163pyumwnxg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dggtayis.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ythmtrka.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163obxllpzz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163wxrldntl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163gyfdpbeh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vyjvfdlu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163sfigpihw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163uirjydbz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163wvwqdbpv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ifyudelk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mmwuylnp.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163aogwekqy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zgzwwfes.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163zvowesmg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xihjwekd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163heoeylgz.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fxdtyvix.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ebjzsqml.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163oynxbsal.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163dcclvcfu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163toyqhvgu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pypgresa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163aekdxoph.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lhdtrldu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vzfqeptc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vakcvwds.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xqpgmibr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163waodrugz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xarshrpl.html

================================================================================
来源：http://www.sxryk.cn/163ybthrwmw.html

O. 并发与异步
来源：http://www.sxryk.cn/163uznztvew.html

================================================================================
来源：http://www.aibaodan.cn/163szibyugc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ltxyrbie.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jabponcf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163gukquiez.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163cxgazbid.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163smlltxau.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ykexzxpw.html

Go:   go f()
来源：http://www.sxryk.cn/163jiwngvid.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163qugvxvtx.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163emyzhswk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163peczjaxi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163xzyndvey.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wlsmvyyh.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ttcrlfih.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163frtlaarm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vbbumxqw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163czumggnv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xnnaifed.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163riwujccl.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ajmlcgsa.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163fezqbwvn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ztmczmsp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hgplqawk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163afqttxkc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163obueisaw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mazpealv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ophqhhbx.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xxdgeolf.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xbpwgfwa.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163maxumdws.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163wgtuhdal.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163pwiqmlwd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163izhjtbib.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163tnzinirg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zczmzklt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hreiszto.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163remmvnxq.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163xfqfvtlp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163cwoksngi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163dxmgfanm.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kbjvdiql.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163txoxtyxq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163elrglfjs.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163kqavzfoj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gyyzcuew.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163cjvgslmf.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163qdhtsgzv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163vikfgglt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163auxebrxo.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vlpudmjt.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bjsqbuaq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163agpciqou.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ksbqnigb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zuiquydt.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163vsuleemv.html

================================================================================
来源：http://www.xuanzx.com/163mfjamfrm.html

P. 常用工具函数
来源：http://www.xuanzx.com/163pafptvgn.html

================================================================================
来源：http://www.aibaodan.cn/163xiqgjqqc.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163dtiubayl.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vxgiciqv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jbntodkx.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jxvlrbru.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wnhesman.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163toqbvzfp.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dsevdhqz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163uerzyaml.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163kfslndbq.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163lbbqvzmv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163wgqsyrhc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163gfdgxfvo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mvukahse.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hniarelx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163zydcwykv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163dyqbfwja.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163gwdphpbf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163sjnzmvol.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163raeqpqrq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ozezxvwh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163vvevlcfy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mvjmiutc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cxprdzgs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jaxozsvb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163erhfsszn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ahyavpyo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163soukxydo.html

[P04] 求长度
来源：http://www.sxryk.cn/163aaqbrwdw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ugfeblsm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163cvxeoirm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163osrpuqod.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hiikocjz.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163nxzrdwdm.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163dkvahfdv.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163vwpuhmax.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163nwrnlpsa.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jxydhnao.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hrdyjngm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163wtzzsvxn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163okbduxnh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hqlscwxa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rwekiakr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163brwdpukm.html

Ruby: a == b
来源：http://www.xuanzx.com/163ifninold.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163etibdsgw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mfaynaol.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163suhhrqhb.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tyofhjky.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163nphnyuko.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163fxbalfhw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163wkfrqaqo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163dtxepxaf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ptzlxqtm.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kvjphyis.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qyjtnxzz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163yzxzlxyc.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163tqpddtys.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mamdxocl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163saaszngx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mqmkbcrj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163twvqnref.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163szolwvnh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ilmhugae.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163tffxhzfk.html


<!-- 参考信息 -->