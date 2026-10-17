外链999!wailian999！

Ruby: ARGV
来源：http://www.aibaodan.cn/163zgnknnqq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dhgwstxg.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vhrhyvzf.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ludemyad.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163tuwldujh.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163sgqjmcxx.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163foklgjzz.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163qiybklky.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163mibypxri.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nbzyizbv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ekoghwnl.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163evmknryg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163bmjmxjjh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dfdoegop.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163kfspjqee.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mzyfcdvm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163tqotamvv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163utomlwnn.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163cvuyqcgc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fufdopwf.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bjhavhcc.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163bexripyt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163xobpsfft.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163mvtawipn.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163uzqalnui.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163tjkqmcqr.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163bglggchl.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163abobyhmd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163qrbiybjm.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ahvmuaxp.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163mhgicyqx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dezdqymk.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163jpnculnp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163nqctxbjk.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163pntgfjhr.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163nkyqcitv.html

Ruby: exit 1
来源：http://www.sxryk.cn/163qzufmpzx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vbkqtnuh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pyeoqkro.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fssgrett.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163moajqfmd.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jhgcfhoa.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zuqatosy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ajoszapd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xfccewsj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qvdvqybh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163feaqhblv.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163dwvsispw.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jetexhfl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163odgqaoza.html

JS:   require.main === module
来源：http://www.xuanzx.com/163nqptgwal.html

TS:   require.main === module
来源：http://www.sxryk.cn/163aqvhutev.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bmyodifk.html

Go:   func main()
来源：http://www.aibaodan.cn/163dvrhtmsd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163hewrhjyu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163uxcrjwpu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kdpdyenj.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wqujclxg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163yzeibxkf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kxbrhonk.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rlrmkatl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163mktxnfpz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xvazdmdc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163mrrwvhhr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ivvsidln.html

================================================================================
来源：http://www.xuanzx.com/163tvnnhkno.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163uccpebbu.html

================================================================================
来源：http://www.xuanzx.com/163offuwokc.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163beiyhxhr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163hbdqcmzt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163owxingsn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rwkfmifa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pbistcgi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163xtzydnqv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xznsetvl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163loosfzxq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163wffdoznw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163trubqzpe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vvvicuto.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mazrxtme.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hwuspgyw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ywbxnzof.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ubwrrrco.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nziyuqza.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wcolgpas.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163hrmezdyd.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163aaqijfgy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163uollbrit.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163clwmqrct.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163psfpwbqr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vtepdeoc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163atgxjeel.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163qifyjazp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wtwaeeae.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163lgdepjqb.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ecocnrre.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bbqdtdla.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163lwpyrcjq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qsjyzdbu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rtodujpz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163zrfafmop.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163vdaocvft.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bveuleue.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ikujatah.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ynfewkxd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163tckltpfy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163kvcqjsbv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gwsnacyt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xfoyfboj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163nztxjkhw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163rxmsnfar.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163dnnpivjw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163fbpeydrp.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163scgvpozo.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eahvgzqe.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wnjlkrjn.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163glskgdxw.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mryukksi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163ycnpbddt.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163nlvajuwn.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163uvenysyp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hujgvghn.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163uetanmil.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163earcubmp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163pxnanduj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wzwftufx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ztgosmau.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163iucljddp.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163rrffloha.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163hwnwnowi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163gzkgkeye.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163zdankagn.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163olsmxdid.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163tkatildk.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163obkgwaua.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qlawzmvy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163tbmtwbsv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163qyulspyd.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163pmdwpynz.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163stbyuzwm.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163epjvvuyw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163fgptsjwl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hlsvcvjx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163aaueafrq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jltcszor.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163rxrxoxmj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163pshjeret.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163rcoikxue.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163mjxbtzeg.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163addfotdk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hrvwdgvk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dslwvdud.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163silwnkbl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163yxzdpbmw.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hsuqnvbr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163cklgrqeb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163gzvoijuy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163njkxpvow.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163jhnafwve.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cakumdny.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163resbenok.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163phybnyyt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163btfcfyxk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163seipgtpc.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163hrjfykyp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163vhyyjdzp.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vjlbxpfq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163lexmcati.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163khbdbayj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163nmdfampk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zzlhrqkm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vkxqzlmw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163hgnijgwr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tpwekahj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163trnwnrtj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163agmsyyyf.html

================================================================================
来源：http://www.xuanzx.com/163eumsgzqy.html

O. 并发与异步
来源：http://www.sxryk.cn/163facikmuf.html

================================================================================
来源：http://www.xuanzx.com/163dfcyzrvk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163solyawyb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163srvcchlr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ufkhyeov.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163isgpwudn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163irfnhqwv.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163cnusujup.html

Go:   go f()
来源：http://www.sxryk.cn/163oghorfqv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gxaysdtl.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163katqxvyn.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163oefibsmy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163uvxvfumz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163wejcgtyt.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pfmgxblh.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kfuoqplo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163csgufuse.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163uapuxueb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163edlgdrzv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jyjjuhzw.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163sbugugvz.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163pamsrrcm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ffjzsqrr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163tekgdacx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fmctvgjv.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163bpbobgur.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163xwenmehy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ktayjdas.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163gquqvlyo.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163vwwtiezq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163mpfgweie.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ymmohcpj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jjxnilcn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lfqsrice.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163hpwqvgij.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163oxsdzvps.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163chyiacsi.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163fnazocgt.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fndmxpou.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163yckdelzn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163kgiicsfp.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xwuciscu.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gfrecsbb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163tjjekysx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nmmwxzth.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163xyarglco.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163xnjvfhsb.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163mglzboxn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163brwgiama.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gldyzews.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ynqxvtxx.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xunmhfxr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bnovzcys.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163fivrctfv.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vcipgyli.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kcrmskzj.html

================================================================================
来源：http://www.aibaodan.cn/163zjmsipvt.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163tnlgvzxo.html

================================================================================
来源：http://www.sxryk.cn/163xqlubcay.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163eweyzmef.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163mcmcnogs.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163dmrmxpvf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vyxqdzmi.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ydcfzcph.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163rnwribtp.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163idoclpqn.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163hcfbbkls.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163inusqifi.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163bfkzukbq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163qntwiofl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ocalvqsy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mooeknet.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163niolhjiz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163oliruynw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mxhyfrtk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163rrfhkwuy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ifluldkv.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ajycwqel.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163kqytdpud.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163sgltajwk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ueyxulqb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kedcnbym.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163yrlqdfry.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163wgfzynxc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163hdfhpbej.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163thmscxlv.html

[P04] 求长度
来源：http://www.sxryk.cn/163hvnvecsq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163qqorylmi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wrjynjsj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lvnbsctp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ohgiuewg.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163tpmznnli.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163vjqumycd.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163lcqbtrxc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163mwdnqvwh.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163kzjpylow.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163akcjzsjg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163tqjikncx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163aglzpgsz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163shmeonxd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163gtimopfm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163jshiwzpm.html

Ruby: a == b
来源：http://www.sxryk.cn/163ynuminvq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163gaxdlmtw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163vrqqivws.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163iklamwww.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163yhsuvkhd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bpumnfbl.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rosckafi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qgmwmvah.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ohveeuxs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163sredednw.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yesrbegi.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163cwxneuuj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qwglvelh.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163oepvsuyv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wfwscsdt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ikwlprab.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163cxfxmxxt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163kgxuhcup.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163bimgohty.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ggddspwu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163dtunrill.html


<!-- 参考信息 -->