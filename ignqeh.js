外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ggahmolt.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163oilglesw.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163reecogsm.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rpdsmqnw.html

Ruby: ARGV
来源：http://www.xuanzx.com/163sclpadml.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kjrhpvqr.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163haembbou.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wvkuiadp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fvyjkayb.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163plbkthrc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163zxiyvwfm.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xvxfcxog.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163hvlnylpz.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ehyiftjh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163fylsvcut.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163fmjydpor.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163oqqqighe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ynpbuttn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zovcwulm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jldjfgwp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163jpghuqbw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163siltvaks.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163teealdzb.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lwjplszz.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ggudjakc.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wqepvloa.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163xceelfpy.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163elhfcouj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dtodfcam.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163cjqshvus.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163keiuzyzb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163stzshifx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ywujpshl.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bidnbizt.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163bnltomyo.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163euglptji.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163hrnscasx.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163dkqmoawp.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163nwjegjic.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163rvcaomgl.html

Ruby: exit 1
来源：http://www.sxryk.cn/163xuxynlip.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163bdswggmd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163jqkhypki.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ekydkafj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163yusxkxsu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163zewintkg.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hdtcdafx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qgzjpfsl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ghczwvkp.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wofiplsm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163tlqwquwe.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163hlarpnxp.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jpstogbw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163kzyzwauo.html

JS:   require.main === module
来源：http://www.xuanzx.com/163izkrrypt.html

TS:   require.main === module
来源：http://www.sxryk.cn/163inmyshgd.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163aowsqnga.html

Go:   func main()
来源：http://www.aibaodan.cn/163baiktiks.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163wezzlisr.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hxiaxrfn.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163pbznvsaf.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163cwdlhqfi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163flejencj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163rornwsrp.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163akzblvmo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jeqrpesv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zjksrmxd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ahftqmkz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gxstnjph.html

================================================================================
来源：http://www.aibaodan.cn/163rzqwgsik.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tuspnjqc.html

================================================================================
来源：http://www.aibaodan.cn/163yrliaumu.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163iyldxmsp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ypwyypsy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163railymjw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ugsbggkv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163xvavqtjq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163nvxniqyh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163onuyujgk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163obfrgozx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ahvqnxfw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163nzhdrzqw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ciezjtjg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163lbiiwuva.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163htuznwwv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tvfmsvze.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ctqyqwpg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dftdvaxy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dpduvsrq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163uwzwofxz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163prukhbsr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bovczxva.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163bttalxzy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163royjdxeo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vpwdccwv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kbabhsra.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163bfjrccaf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163pywnzukk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rpgaajiz.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ytoamqer.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ccutiunb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163sbetngft.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qnamqmwx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dbnqriab.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jwjowems.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jfkbwikw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xelwbuwm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163tmbjackn.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163wnslakfv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163hzgwvcrt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163igefkngs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cifkacen.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tfkuglwt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163xjvhjppe.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163blaopivu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163drthkncc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vtwlqmto.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nmbwzxvh.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163fyknfyzx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fomnaowv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163crhbjbkm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pboxneak.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qgcuhywl.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163iuzhvykg.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163jdhdjewr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163swpxpmda.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qkifjnpp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163rxpvpfyv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163bgphqfrt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163qbbumymz.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163oavpvnsu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163xafnmppc.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163hfpywvqp.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wttwokte.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163bfoovfrj.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ykahbnuq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kdpcsgny.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163qgtuqjus.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sfsavofp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rcllkqah.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163fbhbsoyo.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lrxlzphm.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ljmxmlzb.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163irenlcas.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163euhufcxq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163hnocurak.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ffhggfee.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163bzpifccd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ifrarlse.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163tqywwiwx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163jdpwxvil.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bslbjdhl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163elohqcbp.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hnfiwzbd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zftfmxky.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163txdyacsp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163irduaavo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163zgutwhwj.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163bczlomxv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jhznqelr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qhbkltdg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163bgrziqlu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163uxauhbzu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163hnauuyik.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163pzsiamvi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nofiprzg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zogrebjm.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ejvmftrm.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163kimmwlpi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163flmoddfu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163wjjvuvux.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163qnphpiru.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163slppooii.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163wlxmpqzi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zfohtfcx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xxigdlow.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ygoehhfo.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kovkpton.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163euufxnxh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dudtptbp.html

================================================================================
来源：http://www.aibaodan.cn/163othrjlzx.html

O. 并发与异步
来源：http://www.sxryk.cn/163yikguwlp.html

================================================================================
来源：http://www.sxryk.cn/163drwfvrec.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163pvidjcax.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lrfkfzim.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163trelfofi.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163monzxfxm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zglxjfmh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163iykbtlqd.html

Go:   go f()
来源：http://www.aibaodan.cn/163uxmdoqms.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163fymobtbv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163suqbavbi.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163gvoaopxb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ajtsdbbn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163fmagbjhy.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163arfbojho.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163izipqnks.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163otabklzc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163umjgqmfs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163uppllfkt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hqsiqnly.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163iierfadm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zyljmumj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163nnaccuxk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hhrstvxg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163eutiepmv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163bjxfxqfm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163eneovagv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dhashqkm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163rsvuuqyt.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163hzhfpvpm.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wvrfjukc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ufflazrf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163edjgllbq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163gkhigxoh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163rwfxvzca.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nbiuxhsq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163rocwkgol.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163rgoubnsb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zmsdlqem.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163tqpsgtoi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qhizzeyc.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bkvyjodc.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163voiswuzr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163oqepqcmr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163thiibtwm.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gbdfmlik.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163gnqjnidu.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163uqfesvzn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ksmlmhmh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yrhrdybs.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vcisvnxp.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zdvkpetc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wquxalgv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163cxiupfew.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163xizcnowz.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163cvbbeaap.html

================================================================================
来源：http://www.xuanzx.com/163wicdniim.html

P. 常用工具函数
来源：http://www.xuanzx.com/163npfqrals.html

================================================================================
来源：http://www.aibaodan.cn/163cesgzkra.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163fjcggcka.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163xvncdfxm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163brqpubqa.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dxshjjin.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xsqxapbd.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163hgclmzef.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rfvzmbam.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163mmyryruk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xiupzcvm.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163lrwvdnls.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163uuicrzio.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ssaojasi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163qtrzxfza.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163juocdxsn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163kjenibxr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ibbmfqmj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163iwfewmqm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fnzmdjdm.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163qbusijfk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163vzexuboy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163vopysdhl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163foryvhwa.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zttwuhde.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163uksxlcxi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163epxmoksk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163aapyxzdr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163oqpzbgnk.html

[P04] 求长度
来源：http://www.sxryk.cn/163ydhqhqdt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163pxzgfjfa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qwnxfiov.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gswsypwf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163agawwchm.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fodnlfyf.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163amxlidpb.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ohdtqcbm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163cdlsscff.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163looiywkg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163kyxauopi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163gyywybpg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163wbwrosdd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ylfmxiho.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163kybcheke.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ewhlkvjr.html

Ruby: a == b
来源：http://www.sxryk.cn/163ujsxcqwt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163seuwkppr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ldvwztam.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163gmtcdwun.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163fbqynjfu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163dgkiadsg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163zbfvtbtj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ypmcztey.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ogqiwwmf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ucwulssh.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163bmmfqpjj.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163nnndsmva.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163lhesxrsk.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ftxprgdb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rtglyuel.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163jkziahxy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163esnzsjcw.html


<!-- 参考信息 -->