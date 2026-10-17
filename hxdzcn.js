外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163abjolofr.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nvtbenbs.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163oyeffaii.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hgejvkwy.html

Ruby: ARGV
来源：http://www.xuanzx.com/163gfydihao.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163peqqdlyn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163piqvkoqj.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163oghoahmd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163yjdpmzhi.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163hqnzavra.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163xfnitzde.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dosirogd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hvdphnag.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ijhvvswl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163fygmbzsk.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163paqvesjg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163hjnypktz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163arfzftss.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zmlmumgv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ynfkwfqi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163gtmqztru.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hquvbcou.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ijqeqmth.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vkucxsam.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163cklwwixk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xpidymdp.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163pspxncag.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163suxnojxh.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kwcbinvi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163hfttimol.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yfsraqyx.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163qauilvve.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wwoxrjdp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163nbxfndkb.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163acbwfpcl.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tubwibzv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163jqxqfbmh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fdmgegvl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163hnvxoopj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163pqydbasd.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bqrtzjwy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vvjqqvzt.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163yoetaszr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163wlfyoyqf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163avtktgkq.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ibesvnoi.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163erdqukku.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163gpbhjrap.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163wyfzpwvh.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163aoivrgbf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ievixkgw.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163omseldfl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163aljfvvjz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163mshhmwhh.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jddbbayh.html

TS:   require.main === module
来源：http://www.sxryk.cn/163auhoccuc.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163epkwvldr.html

Go:   func main()
来源：http://www.sxryk.cn/163qsancrhv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ctcysgov.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163xvlbqvdd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ynpnfinr.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yqrwryjp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ydwrnage.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163cxtwtufi.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jnrpsoxw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163zknonhsi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163mrxukyvl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ddapcnll.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163beklyams.html

================================================================================
来源：http://www.aibaodan.cn/163ezfliuja.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163kvubkrxv.html

================================================================================
来源：http://www.aibaodan.cn/163mhjjjzyw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163agfdrttu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ubwagoac.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163tzwozvvp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mxogoaxh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163upqniikw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hoiahxtp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163xotwbuaa.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dnaavsbq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163qluthcnq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163docgfrbb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163itcagdzh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163aywhjllb.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dgliiwjw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jropwafn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163mprnqdri.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163muqqtcxh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rvownaxp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wuvcwafs.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ntxtugjf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163vhfcxtjy.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kxjtslrk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mzmpykhc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kcreqkbp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163azllsdum.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163xrkqnvtp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163bfrnhrfw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ibeyelpr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nnxufqby.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163crlkgbwp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163zqfxhqzv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163iaplsuiv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dzmafdzj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163uhldeaqx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163yvgbjgzm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xdweuokn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163stwqeydd.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ksnhaxrx.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163lhhmfrqr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163bargucmk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163odxowvum.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163elqhmipd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163gnfcoqoi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fdzcyjxn.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163rykgdezs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vcmunrnx.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163uyjrqsyt.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ijxovpfc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163lgfrzapn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nhldmavr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163kqyihmli.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ulaoyvhp.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163gvvxjrsd.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163eqckdvus.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163asophnkq.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163dcilpzkd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163omhouysu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163yjbnqaho.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mqkzhmim.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163lgnzfqxs.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163yrnnjear.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163slkzevmo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kjaelkik.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163qpjhajmp.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163bxqjutbj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xjajcmwu.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ypielvfa.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bwswchde.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163acublyxx.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163psasjgpz.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163suvyumtp.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163udbscdxj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163enoobqwq.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ntjqlqxa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163biflqplx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163nbfkbdas.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163goqetwdu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tsdrctxu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163bmegsaui.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163cjlhqcoq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163impkkoxf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163awpbiyyn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163mxeovgek.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163mvyzqbpp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163utbzwptc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163abwzweiq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zariqmkg.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163eyzzjdrk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163xuumdsis.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zmvlmicr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163sjuhybat.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163goiegdoz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163xjfqqcmv.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163abwsrwxr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163fetmtlxi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xkjmpyio.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fhsakldm.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163drxwcnti.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fqpovlkh.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uysyibuu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163biamnwkz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163hjpzepsj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163azaduvsg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vsfvnmhl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jkfbvdsb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bapmznof.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ubolwyza.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pruzwgqk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mpsfrzot.html

================================================================================
来源：http://www.sxryk.cn/163bucnijip.html

O. 并发与异步
来源：http://www.sxryk.cn/163pfddpsyu.html

================================================================================
来源：http://www.aibaodan.cn/163egosoale.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163szoypxdz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ieodlgsa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cwzlkbnl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163fhtlkecb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bkdwdxrl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163oabwmbmx.html

Go:   go f()
来源：http://www.xuanzx.com/163alyqialz.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163hmixwyzl.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163rgsddzlb.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163oripxnsj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163bcsyhten.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163miirsyxv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vqujahul.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163iinvphjn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rvbscpap.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163khvnpwcz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163eierdfjz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163hzwmeatw.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163aprkxhzh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nbhmstmn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163dsruswie.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163pednyqml.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163emtbtdjo.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163sslcqych.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163kagskuze.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wljmptbf.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163xvhqlhxg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163opquegmv.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163khcinxhj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163uuinzqus.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ljkxgepi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hxhgfbdy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163dgnppfpd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163edrdoruc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ruepmzoh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163dyqccwwm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163twfmpdkn.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ynqcboov.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ifhiluit.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lglfpmbv.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vyraqobu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163llfgyzst.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163vidxhqfi.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163jegfxowh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163mxpuwilj.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163kxgtwxei.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jidxrizb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163swtwhkuy.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mwwuebee.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163azmnogzn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zcnaovwa.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163pgnrainh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163gtorkqct.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163itbuhwti.html

================================================================================
来源：http://www.xuanzx.com/163dibrtgnv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163mulipasi.html

================================================================================
来源：http://www.aibaodan.cn/163bxmfxsun.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163jekrkgep.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163tklbkflg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ekuyzpot.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163yuxqndxf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163aesrinui.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163yzaeojlj.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163gljdxbye.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163kqiczsif.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wzcvkrqi.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163phnauijm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163lxyyuxqr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163tniwjdox.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163xjoffsvz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163qiodwwaz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163xkrxadiv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fdygfbuj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163sqhgxaeb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ykkbyzxr.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163trzqmdcf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163edcujjjj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163gpbvnwcw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lgoonfss.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163zislkukv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hwmzlxoe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163jeilgxvr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163oqusedqe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ffhqyrex.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pjpxxqwl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163nxzotskz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nukzdpjx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tqyvjfuy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vkipsfth.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163froqwfmo.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mutxwtds.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wzchrnkh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163yeypsizf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jokstujh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163tgzqhrrs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163uzhapgjy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163wahutjlv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163komwsqee.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163rrdnrjik.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163gvzpnbwo.html

Ruby: a == b
来源：http://www.sxryk.cn/163svgzeuqu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vganujrw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163dxuareel.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163wellnkkj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163bggsexap.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163jacgsrmo.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163rotdajvp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163knetuubg.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163krlinbdn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163abouvmwy.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vgmtqdlv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163efpzcptl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jvhitzoq.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163evsdcmvl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pjglakhq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163obcqjwwk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163hmavwkei.html


<!-- 参考信息 -->