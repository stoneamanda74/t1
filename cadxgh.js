外链999!wailian999！

Ruby: ARGV
来源：http://www.aibaodan.cn/163rkvchwra.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163tpjkdorg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163atytnpyt.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xeliyxpf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163lsmafymg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163obpvtkrv.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ffntrovm.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mbatzcyz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163nfrxgrxx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163cyhpzwtj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163emxlafdv.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163plguxwbd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fqtfmmqj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163muybjoce.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vauxvvsm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163duybggws.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163lzywnwvt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163bdfdaqek.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163livqprpi.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163dypnyird.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163gmaxwvtz.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163psicdblv.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hggejrpd.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ddowyjfz.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163etflglrh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pqxeilbn.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163artraqfk.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163gzdescwb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163fcrtwukh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zpumqkkm.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163otzjvczr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163cwidpxrc.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ciajfqxx.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163wxlvsmbs.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163dzrbqikn.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163gawmbazn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qwnfoxvk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163pwsvssmt.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163doamekvk.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163wkbkooga.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ilcxkqlo.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163hqbktyzl.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qihautff.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163kuirgans.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163maaotcgs.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163vhzerols.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163nwfjbwdq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163phohrpya.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kstidogi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163shxsjslz.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jjqtbgmm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163anheenka.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163siywzway.html

Go:   func main()
来源：http://www.aibaodan.cn/163kiqcawxz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ikcfyxny.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cjkdrpov.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zddlzeft.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163yjcniimm.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163emhucbxb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163omxzrqsz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dmugyqyx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163hrbrclzl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163fwpfbpmz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mjvauozw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163eptozywc.html

================================================================================
来源：http://www.aibaodan.cn/163iivgugol.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163aukuajel.html

================================================================================
来源：http://www.sxryk.cn/163rumzqpqx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163nqoqwydk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ojbuldhi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163iwaqsgck.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163pnuwgfvg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yzlgsydb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ejtflkhs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163iebuhira.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vkdwuedv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163celllqvg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ixaimdsx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163csfujgkz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wgbgpfxw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ktkuzbwn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163igowywzq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163elthsmog.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163aoxlkepz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ggboupcn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163yeaklfys.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ysfrsekj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163oydmtqhh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163hvjqeyel.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gdcaxyrf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163osrulltt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hqgzfprp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bapxvtmh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163mgiecxdr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xiaanqtt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ckuzxdcb.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mfdupbao.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163esdzkvmi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bguvguwk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163athqwdfx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163aodcidcj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163rrtpduzy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163yagrkjku.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ykvyzhkq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163yipoyyuw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163mydifpan.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163dfkutihf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qwiwtnqs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yultarjg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163drdmvviv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vyvdvdlx.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163qlhvqtsd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ofrluotb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nqahmsxy.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gkyfhwfh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163rdiynnqs.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fxxxlhxo.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163txghtksx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163bdbewlfn.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163mzlqmkst.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jxsfjupi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ktpetuck.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gzehhali.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163rpldyzdk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tpereegq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ruayejgg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163fsjijyrs.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hzwxaopf.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163xzqpzbon.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163zlpjfyps.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163bpzykqho.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ngjlkryk.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163rxuwtiot.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163kxqqwogk.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gxjndnud.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gwhyqohm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163owatlnpq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wuheqxae.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163tyvpsstx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jglklpmb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163lxzzoocu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qsgmhpod.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hhqzsmmg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wrjyxjyd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mzabjuap.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163cxmtyfne.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163aideukyc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ctjlrbaa.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mzktnfxh.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163qnizlokh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fpmqxuvd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163kradfygb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tqondmyq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163omffwmfm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163xchtcqce.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163snntoznp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163kvdimwrp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163vvthcvof.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dpyfcrbm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vktbirkt.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163bblstion.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tgkpranz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mjgqynqj.html

Java: // 手写递归
来源：http://www.sxryk.cn/163oefgpqpt.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mbfnqogx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163xtnwfutr.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163bzqzrtmh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163xicmgmqw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163yuyijyxc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163octxfiep.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xienicey.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uzzkkbkk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pxvttahd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ubjwmkiq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163yoxpdysn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ebjtqsmy.html

================================================================================
来源：http://www.xuanzx.com/163eixhzxda.html

O. 并发与异步
来源：http://www.xuanzx.com/163wuuzlqff.html

================================================================================
来源：http://www.aibaodan.cn/163htculzrj.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xyrukjcv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qioxyiix.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163vblwlepu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163vfishziy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163exjmvbtb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ndxgtqln.html

Go:   go f()
来源：http://www.aibaodan.cn/163fhlrmumx.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gtbcakou.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163pyqcfkxx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qvekiygy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163tlijguum.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163nqjexurq.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163kexqnqmz.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uqultxmr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163orsjjgac.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163exalxvab.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163eumkmhxa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163sfcsxrla.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163lwvqpldo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163mqhdjvmj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163aixlgscu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ytsqgojw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bhyxhafm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163uhkrwivn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163pumqrrdu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163goxhdspm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163bezaaonu.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163buzvwjkd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163usdpheyi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163wcqmyucg.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163hcjbwsvi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163kxasxbcn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163qshlrgfh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qiajyxwh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ikrumyxp.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163acsaetxf.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163pyaemiqi.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163wtpbaeid.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vphjvfql.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xhbknzar.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bmpgaxkl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163aoirfluy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qizazdub.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163fdxdrgzw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163gxddfvse.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163bcjxsepc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163vmplyazo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163npnfjjsq.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163dxfpecin.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gxikmwuq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163usjbdbsi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163hpfilgqh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163seyhfcsv.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163nltyqstp.html

================================================================================
来源：http://www.sxryk.cn/163szwtfqiq.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163lzqamvsi.html

================================================================================
来源：http://www.xuanzx.com/163kgwmiyzz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163hdgrzeab.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163hkljkvld.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163myvakkwc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qzfcgkgv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ekeeeyxc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163vbigkmdh.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163lxlnvarr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163vrlkzwoo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ingwtuty.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163rerjsmfy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163qcddujev.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163zymgfafr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jizmhjfm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163doypneqr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163dfqzifes.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ioqvqbdc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lvalbceg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163gsuqcdvr.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163yncwosgp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cuaskhdz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163baghcmjj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ghlkwnsv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163eehueefe.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163fufdilrj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163vonbcfzw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163vyhxirhp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163rizfaaeg.html

[P04] 求长度
来源：http://www.aibaodan.cn/163duggwgtn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163lhaoalvj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xrcpwvvr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nhvcvhng.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kfszdrdl.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163vyfblvdc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163rjiaepqj.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ylygjbjm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163bhogtjqs.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ruenuupp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163weifozur.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163aiiicucl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163lvpmmnog.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ezlfwrin.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163cezueefj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163vbrleglq.html

Ruby: a == b
来源：http://www.sxryk.cn/163devzboga.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hvswvlhh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163xbzmardy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163tiqzwspv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163jegmvzip.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163zqywqtrf.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163gojiwzdt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163akxvqxgc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163wmyozzdu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nixculsk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163gyivocui.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tczckpgm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163tmazchsi.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163hxqzqujh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cgzjlwni.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163grehjwme.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163venrgijf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xxysxbrz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163bkthqybc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163onmxowav.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163jacjhnrl.html


<!-- 参考信息 -->