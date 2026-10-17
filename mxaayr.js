外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xhugtubd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kahbczxq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163etkzzccn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163lgsccsha.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163nrdxsper.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163kfzdsakf.html

================================================================================
来源：http://www.xuanzx.com/163aljybith.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163gtdamryr.html

================================================================================
来源：http://www.aibaodan.cn/163cfpzxwfw.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163dgojargg.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163crhujiif.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lkgshylr.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mkptdupn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kssdfkwx.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163rzvfkynu.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wswdtrdg.html

Ruby: ARGV
来源：http://www.sxryk.cn/163uigwazyu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163banoczfw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163nwazwkjt.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163oydnvjyq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163ebywhnlc.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ofzuarid.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163avtrzokt.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163khbqxvql.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gwkfudgu.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163cbqgzvcy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163vdxdzmda.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163lmphsptc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163bffzykxl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ilfubdsg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163weptgqrm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zkniszuv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163yapkfvtk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163gmghoeqh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163mrpikzxp.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163utdoibuu.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163xuehnlwe.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ynjydovn.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ruwviukc.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163trgaefwr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163riulkepo.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ehqyfefw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163pufdsjda.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ljavadhw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163pylzzube.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163rjmwhcls.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163lsbvoccz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163psundqwe.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163tbsutvkk.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ufruvotg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hisefscz.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163kpswarvh.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163kscwpfok.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163xfoywcui.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xfqvquta.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qyxuqdqs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163rfxcuroc.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dfftbspb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163qzikokmj.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163esomsfai.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ynzxdvry.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ejyitvtl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163szecsdfp.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163styhmxxu.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163yapnmspm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163taiquoyk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zktrmdhm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163lzamzzjn.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tidybhpb.html

Go:   func main()
来源：http://www.xuanzx.com/163kruhhjja.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163xbinxdkd.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zofywtsg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163jfygqgir.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163bryyiwzg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dwwnychl.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fouuwonm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qogqpobr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163qpxtogri.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vciyghmd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ysbtmriy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163pnfroiom.html

================================================================================
来源：http://www.xuanzx.com/163ecnhbdnn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163oivzvecj.html

================================================================================
来源：http://www.sxryk.cn/163pvratvka.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163znuepdql.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163mdnpzlms.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ntjmajvl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ejeghjyb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dxwcbkgy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ywznjnri.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163fqjlclxm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163rtswukni.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qauvavpd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163hguvcrpj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163uavgbrky.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163srgtaool.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nksbugjf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qcublvwy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ccavplkg.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jekxrmsn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163twzmhngz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163vzmrahsk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163dxnjvfll.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163cyjivuii.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163oxmehlzq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163blcxqwqo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fkuhuqww.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163uacooqyc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163alrbpxou.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163hdrhnmvq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163zkschqlp.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fnzsziur.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wxjyfxcp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163vlwxtwkz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tinjpleb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jnugkbdu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163svzgvkqi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163eihitlll.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gpwntgwa.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wzazzhca.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tdpmzxyq.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ocbqthqo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dobllwvk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cbakvnhe.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xlttwach.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163abgtijyc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163nhwzukzr.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zrddcvul.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163pfoemuur.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ocaxympv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163pskfegwg.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fznlfxrd.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qdabplyi.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lbmiilbf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vvhrmrtn.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163knswqgwi.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gbvvxqjp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163rqadnawo.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163dsvnhkbc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163sgkxcptn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kcmmzvpz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163yfacilgc.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163sgzxdawf.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163suejsomh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163iicjwdpi.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163bptbzrdq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163utabmbni.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rwdraegv.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163yxxhhevw.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163uquubafq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tzogfodg.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xakotbck.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xraykkyf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163qavmnbsr.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163dytlunvm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163udlpynjd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163tydxyaqj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163kqkifwyw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tntqjjgx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fhemavig.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163jujieggi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ozglnzab.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163mpwpsqcy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nrlefpni.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jbwnwugt.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hlpextdc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wwvbrdns.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mfbvuuix.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ubtbezdr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163rqidlkhm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163qrimkddl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163yufrflpk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163izqbsmjj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163atpsedcq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qnvvdqjk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163goqcktai.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163zfajzjwq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xjqvssej.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ftpehtoc.html

Java: // 手写递归
来源：http://www.sxryk.cn/163rbnmnyxa.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hxzzqqyc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ujirscyb.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163lpqkqmpl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163klxvbuhj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163niywdhtx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163hlsrxoxd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163logkmcrp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wvviypbx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163traackhx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qtyanwch.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163pqttrqgk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hrgkdfae.html

================================================================================
来源：http://www.sxryk.cn/163nletdvmq.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ulstbxmq.html

================================================================================
来源：http://www.xuanzx.com/163bvhmljvs.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163okpmggyc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163wtgjjefd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163hpoltxxa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tvohogon.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uvrwqmlg.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163zlvgbyfx.html

Go:   go f()
来源：http://www.aibaodan.cn/163zqgrryeo.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pwaurasu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163xderdfpi.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163rixsbavn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zjdqngfn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163nveddxaa.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hanxzhaf.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jpmycrxe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163kfkyeqel.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163khgewpkm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163kjsqpnsp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163szhkefup.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rungzxir.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163tazbuhru.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rvsjzphh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163sfuwgshz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dnxjtmuw.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163nncxaigv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163yegwuken.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163zhcdkgli.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163rozvxaxo.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qqqwqbns.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163xbvgtqtj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ushadmgi.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vslsuptl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ckcmonnq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163uisnsdzx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lcejunwv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163yxfnmwvm.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163numqhgad.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163dlcxgfba.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163eyjpnxop.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163jfydcsma.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dixearuy.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qrhchsus.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163lalfbwaz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163prvzwlef.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163pxiyoeme.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163rfddjmqk.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163xmzxpfzl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163llfwpkad.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163tthguhmq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163esrnipwk.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163nyzssyxz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163dymxjihn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163hlqjsvme.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163tlocxmro.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bovmqrow.html

================================================================================
来源：http://www.xuanzx.com/163zwwelbjm.html

P. 常用工具函数
来源：http://www.sxryk.cn/163kdujisrq.html

================================================================================
来源：http://www.xuanzx.com/163xcbvnqew.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163eznkvdfk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dzarkuqn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163phttttxs.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jqetowcb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kwnwaxuu.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163hqakdbet.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163cngzqejm.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ffzanhzw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163oxngorwd.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xvithjvy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163dftddudg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ggihpezj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163yuqjcuqy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hdlwbmck.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163rdmkbwoj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gunciphj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163etgoyhza.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163lwqongbz.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163qethfzbm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163jhxxxlxs.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163kcoifzul.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dtygilip.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ssjapltp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ipowtzjo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163liwspreg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163fqybexgm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gdlfcvhn.html

[P04] 求长度
来源：http://www.xuanzx.com/163cmhmccdl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163eqpernpa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163znyktbuw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hlcctxzt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vdelppzy.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163rtwtbwvc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163aftasyem.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163qzfmyyzj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163tznvuzvr.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qjukwlmh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163irbtnswk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163yvvxssfq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163toiqpvdz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163cmhfxjlc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ybqraiul.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163hzuavunt.html

Ruby: a == b
来源：http://www.xuanzx.com/163sbithslq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163autgwekv.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163nrxopmew.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163pfyuwobt.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163mymnjxqr.html


<!-- 参考信息 -->