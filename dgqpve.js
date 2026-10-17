外链999!wailian999！

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xomjlkpv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163pozexfmm.html

================================================================================
来源：http://www.xuanzx.com/163heqyrssn.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163abmwqnur.html

================================================================================
来源：http://www.sxryk.cn/163efdcqceq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163snvuglni.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163gvabnqze.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163jyfsozmo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163geypkyuc.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tkkwbszl.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163rwobjkws.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163wpcmcuxs.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163mpwxiaww.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163lmqheouw.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163umailaoc.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163vrcavxbx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163foalrddq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163esnoesfa.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163sxypfcxw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kblrtyeu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163pghvvfea.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163pdzurssv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163iersbwnn.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fniojpby.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163wydqksxo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xgcpvxay.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163knqbndfh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163pqzaszbs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163bedbmcod.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163jxxzckpk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ycbqukgj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jrynntjx.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zgtfncrc.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163nyrhukag.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163grwjbzff.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163emqqkjqi.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163uyprekxc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163kqbybnro.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163nxgfkexz.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vatsvrms.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163iefigzeq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nhresbhc.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vlywybuo.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163irgqlmqk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163doghsgaa.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163jqmhnksg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kopypldr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gxotilox.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lisbwblr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hejwizpv.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rslolapw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cusfxqlh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163piepvxde.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163hjfricpq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ddoshzpg.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163xavztzvt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163urkvnodx.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cdpwhcmu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163suzqspqt.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tuoauhbi.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163tokvluwj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163zmvyblyq.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163uzarmevi.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163wtztzjhy.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163twpktymq.html

Go:   func main()
来源：http://www.aibaodan.cn/163rexdpftg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163refafkcx.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ybluljrl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mhbeavir.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dojhytmt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163dhnoktbq.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lqjxtjid.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163uglqkegm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163fjknjbii.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163gyyvcdyb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163bczkonjf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163qbgrzpqd.html

================================================================================
来源：http://www.sxryk.cn/163gfgtsbbx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163hkaxzwxx.html

================================================================================
来源：http://www.aibaodan.cn/163otumfclu.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163smydwuru.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163voznskuj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163bspvejxy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hyxtplbe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yrqyuild.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163acrdgusx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163cqefxdyq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163mqvcvjla.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163trizlxzx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163eqvlncqk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mufawwuc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163krlulyxe.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dhywefip.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lmtdgamp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163nhyjdrpl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hoxmhwkf.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163odhhnide.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163nmwmtaxy.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163epzffckr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163duhjgtrx.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163qkwwmmji.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163spgycpov.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jpkuqhxj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vtlqvrro.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ovcdfnib.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jynqkhzn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163lvuaxlat.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163gnlnzlod.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ovogyvon.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163kdcgvbjk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163sbeuoivg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ydjmbgih.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163yumnxmby.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163itebpose.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lbqlmrib.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163vmzdgsyu.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163gohdtyre.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163htlmzqii.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163acixohwh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hcvajppj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163banjizyt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163rdcqttwu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jmsmnmbr.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163wzwovetg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163krjakomz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163pfepnguh.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163llployad.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vxwwjlnj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tyzmjsov.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pwazgqxh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ixjtkhzs.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163gwwwxzxj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163booeqfgu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163pbpqnmft.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163znjjgtaj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163kefghurg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163jfxuzdif.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163mqodgsfq.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163hjyprcgw.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163yndcjknl.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fnmcoplx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163aszatcdg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ohcwiinh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ohfylvhh.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163dwopdnok.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163uddrvpfr.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bjallnii.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dlowcccl.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163kicpwmap.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163huyrxjxh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163kfaancad.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tntozjls.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kxpjpxyi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163lseoqwxf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163yxeihstt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jvpjvyjt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163kqrbdohi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163bpaytmjx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163eumojqxq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163hkaotngy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163uofkeghn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163gmsrjgpt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kzcrmhkj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mjgjynlb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vidpehlr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163juvoasfk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bufjwwbe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mrginktc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163xvgxianl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163qkrtqlkw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163tszmoeye.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zwkcjqaj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163hqvqyqsm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lkrgxkab.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ecexsgvl.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xumharkb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gjjbvtgq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163tlrbdkun.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vjnchytp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163yynthnao.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ctcqhynn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163tlrmepvm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wmtvquhi.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vfpzvisb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xefrkdkm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163duxpucoq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163smswnjzw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bhihihva.html

================================================================================
来源：http://www.aibaodan.cn/163wqxkokey.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dhvmobxb.html

================================================================================
来源：http://www.sxryk.cn/163gosynrcu.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lxjcbjen.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vnmrvftc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ywkkmmfa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ysqyuxxy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163otzvpdmz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ogdkmcyf.html

Go:   go f()
来源：http://www.xuanzx.com/163ytercddv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pczxmlcx.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163iyobyzdw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163pssvyams.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163csomlxdp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163plbtignx.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rfsmytug.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tgvxlpcl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163vogqdnxa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ayvoknxe.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163veddfist.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163vywytgmf.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163wzeugjvf.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163sbmaouuq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163oafcbhvf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163azjrtrly.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wkucukdc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163qffzpeqi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163yatanoys.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163trhbavfp.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163jypqnpmb.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163hcqaxxge.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163sbmvnxuh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163cjrarwjs.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163hvnzpaes.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yffmoevb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163rgzhuqox.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jphlqwzq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163jmjyvboi.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pjuhkmpb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163kcyxvhhc.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163giiowbuu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dgrnuaxn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wwltpozy.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rmkxakqr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163lwinjyep.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163pvgdocbj.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jzcategu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163jjeucqst.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dqqjjtop.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163yfgiddhq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xdmlrqce.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163tsofhbfa.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jtihbhym.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163kkmifxrs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163pwovrtbz.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163tmpqwcpc.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mrtkfbjv.html

================================================================================
来源：http://www.sxryk.cn/163tkkiajfa.html

P. 常用工具函数
来源：http://www.xuanzx.com/163nfgyztrm.html

================================================================================
来源：http://www.aibaodan.cn/163ectuqyli.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163nvijltgc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163mfqjdsyx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163hnaojyvc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tjxlwucn.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ltewjmpf.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163tadsfdiu.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163bwvwgfum.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163cncsdwjd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163bkvrlbya.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163fhkgyxwe.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163fsqsstxf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163usogyfve.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163pmjdijox.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163auophoqk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vvrydqaq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163rwldhrnh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qpzjdbia.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163nbdwfcij.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163bmosjqzl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163khbjcvaf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163moygpiyq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163owvdnkhp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kzemikct.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163miusjvju.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163zijnhgqh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163srilaeyr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163sabudoln.html

[P04] 求长度
来源：http://www.xuanzx.com/163tbhtrzgd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163cmdixhtq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163djwxinhp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hzacbjov.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163djhxewsw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163cwwzsyhd.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163tdpdgoqj.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163rtzxikqb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163cekowvjy.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163zvhrkhlp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163oziphori.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163gfwcfykf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163kvsjcqjl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jzqaetzw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163bvdmkgeg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163eaxfahzk.html

Ruby: a == b
来源：http://www.xuanzx.com/163ftsydvar.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163mmfaaelf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163mkeyxcwc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163icfiemhf.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163qbjsdtep.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163betagbjj.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cxfekskc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163usabxtcs.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163iigakodm.html


<!-- 参考信息 -->