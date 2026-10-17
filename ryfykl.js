外链999!wailian999！

Ruby: ARGV
来源：http://www.xuanzx.com/163imtsmkep.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163sxnghfbg.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163ecpqdivg.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rmgjyusq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163rvepwyfa.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mwgjujlg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163nzatvbiv.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rivzfuku.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163hyutnphi.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163qxafhlyw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hzkacvor.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zmquqcjs.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lpmsrigq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ffuuahvp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163epminkdj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pidhticz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ogozsowa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sfqgncyc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kaffpmgm.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ormvoprz.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163vmuxtyod.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163sqqlhzkz.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163sqyfavrs.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dibpdeji.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163twvzlnkc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ffizribp.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zbjzpxyz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163rwgaxtab.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163scnapigr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163iishrsac.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qcffxexl.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163egtiqewk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163kbgawpek.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163szyehgew.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mnvnygfy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ybqwudcu.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nxoskcoh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163iqzdbsdb.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163mqsquwjl.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163avlqfpwp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163radizkwp.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vmgwhhaq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xpgtzuio.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zlhioprl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tiseloon.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rvwawrhn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163fytaigaj.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163mfosypeg.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163akgfuaot.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163lvttjbtk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qpkvgely.html

TS:   require.main === module
来源：http://www.xuanzx.com/163rvleuxkj.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163rvvcphzx.html

Go:   func main()
来源：http://www.sxryk.cn/163inobvfsi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wjkfbdik.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ismakogg.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163coinvmyc.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163muettuqs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163eqsafnyq.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163sxunwsud.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cgnxbouu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163tcfelwog.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163deebymca.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ebzjgomb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163hdedtcou.html

================================================================================
来源：http://www.xuanzx.com/163lxaukclt.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163qcyosdqs.html

================================================================================
来源：http://www.xuanzx.com/163xblxzdoq.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ycseqbad.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163shdgqfoh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vdlotmpu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dfyzvvau.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nvqmbhzl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163yudglroo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ranmiqyp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163jmtvlnsj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163yipnuhsf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163sleidzyr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dyymsawc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rxbxrkou.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dogenntv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163csspvgoc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163xlupfndz.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vvtrqwpk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163evvyksvi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163mnwbdibq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163emxyxakx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163uhyxnuxt.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163oyyzmkjp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163dnfnqpow.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oxszuuna.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163hqnvxcvd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163mgdkfqcw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163iqhndaqx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163tbpfagou.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163pikjbkfw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163zjvwgstq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163qtxlmkcy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rlfvprkp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zwuzxvoi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mfftslee.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ebmvyyrj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tydkvlns.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163orgggdjm.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163vbjwsyqk.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jsviqmie.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163drnmvfwy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163oxouwczl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rcxjjdeh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163absiydzc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163hacejlkc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163galkiztd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163glnycjci.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163omjqkdmn.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163pbxclaui.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fdjmkjxx.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rcpsnxgg.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rkvrwmxc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163gkpabtpy.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xlvbcckt.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gnongvyo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wjykcsfj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163xyluzwds.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tggbmzvt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vjbmgxii.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163iuepfteg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163prjkzpnf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ezbmakol.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ktfyngvl.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163eubmcbgl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jhyglrzg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163pvullozu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163oyttdotq.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163cpmodint.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iumrdfsp.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hmfjqknu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wegajiop.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wwbnyaii.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163aokikamx.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xgfequaz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ihrzmiuv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kezctqea.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163webqecql.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jekwxglm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163juomsbvn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zsrrjezg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163krtdnjry.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163llohvrol.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163zjdtzlfp.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163pncqyngm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163eukzefpy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163zvwmtazx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163eftgbrgk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163tyknfpng.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zfmjkeys.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163wyukslop.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fmalyudr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lqhgggmk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163wrtnbacu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163fgpyhnso.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ckpkqeoe.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zcrvmlxh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163susztatj.html

Java: // 手写递归
来源：http://www.xuanzx.com/163eewfrtoe.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jhysacqj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163opdviias.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163dmevojlh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163shvxfqjl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zyohbsjh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163uwatllkc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jbkxoped.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163irapuavz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163doxcqdmo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163opkfkpsx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163gyedyvui.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xqcsllej.html

================================================================================
来源：http://www.sxryk.cn/163jznbjdmn.html

O. 并发与异步
来源：http://www.xuanzx.com/163fxqogjpp.html

================================================================================
来源：http://www.aibaodan.cn/163aqyeehsw.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163swcuogoc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163zpppmzju.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163peimfkgc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163kxargjvt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mamrqbqj.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163vfncdkss.html

Go:   go f()
来源：http://www.xuanzx.com/163ncbnkkeq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163rbccqqra.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dfqblsfm.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163rxhtdwnc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zmkopoep.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163phmpebti.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qdiipgaf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gwccczqf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163umhimlue.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163xazaogjy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163uvddqgyw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163zshkctff.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163awpojact.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ozysugja.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163hegzpymc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jcdlcqoz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163lwerzqhw.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vpnxsiwp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163muckmsuk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xhasianp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163sucwzscg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163frlekoli.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163dxqxucky.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163dcasldog.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qozdbqwx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163kdxcyuvg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163cgrdibat.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163bbdwdyri.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163mwhuusoi.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163lawveozb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163unvxkvyj.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vofqwout.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163zrtkrvdd.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ibiylqtl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163sbtzjflw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163wvzfuxkj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gkpdqecp.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ztzlkzbw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163iiizhyyy.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163gfsllcci.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163vizgyoxb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163pnqjlycz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ogxhnwyj.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163nfkngnwt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163fncjdvbz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163uydwtrau.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163cksyyqhd.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163cgwaxwfm.html

================================================================================
来源：http://www.xuanzx.com/163uakgbzey.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163nushbvbh.html

================================================================================
来源：http://www.aibaodan.cn/163itsurmgi.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163yrhcqtzs.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wtuxeuco.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163fpzwftfn.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163swjfncxm.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163znmdjuhw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163eytabtgc.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jpqjfqda.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163trsfbxfq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163xmaiwskz.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bugshbkv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163qlsvhwmo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163dphfrsug.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163dzmfdoyd.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163abhzvgqj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163dqjkglcq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163kjchthgy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163uhgkermz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163gnylchhy.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163idkxiocv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163giekambj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163mfmgwwea.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qamjssoe.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163atdarqof.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xoawbbcc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163osntgxrz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163eqnqutdv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bhybniwx.html

[P04] 求长度
来源：http://www.xuanzx.com/163zgacmvov.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163lzgtaqzo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zlzrlpgf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cnirttbf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163whwgswfj.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163wxeeuntx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163hmxafmcj.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163hzyjfzew.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163onhiwdjb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zepesswf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163epeeamjk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163fzrkpgas.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qimlfenn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163udmxihhk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163aokmqzag.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163waawrgaj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163hefkvpva.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163xtgxeqdk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163idnrzqlz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fgvtqpki.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163esrgtyeq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163seyermsm.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zgtnfsmw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163sjpdfgsg.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163jhlrluxc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ezvuhnqo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zbluotbm.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163eqcquzbw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qcsclahe.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163kabtyoxl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163kcpozeqm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xsrpmbno.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163kfauszvl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163vwieksmp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163chtgqloq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163idsuwqst.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163kaygcdvk.html


<!-- 参考信息 -->