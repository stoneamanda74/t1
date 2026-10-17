外链999!wailian999！

Ruby: ARGV
来源：http://www.xuanzx.com/163jnhududr.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163aqxhmkwz.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163tjkqvkzm.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163dkfsevci.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163kkfnuggq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163nlkrsjyf.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163cldrteba.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163muvksddi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xftwfzyk.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163spkzfwdf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163kntfkcaj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163wtbcyhfo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163meqfofsi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lwlgaoku.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pygyhitd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zsbwcaos.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163mmkqgfno.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ofeemlkv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163nfvzlhka.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qnxdzfab.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163rvxlhefz.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ennhmgxg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163dnqaguyx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dlezrjlz.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kroccyiu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dmkrpgnx.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163pwtwgtnx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163yylhbqgx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163pqzfrlfe.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163hyqowubu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163qolysycv.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zxkpqimd.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163tvxwqcav.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163wyogitfj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163gshyzdks.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163plygmnpj.html

Ruby: exit 1
来源：http://www.xuanzx.com/163pyxhbdhe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qvgzdnpv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163buppcslz.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ekukeoja.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163txurkcmw.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kbeqpiyj.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163edvkolhl.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xuadprkb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163qgcxnkno.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163khrmwoqy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rjpfvvmn.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zkajeuww.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dijcputi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163bkvppylw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rlnahxbf.html

TS:   require.main === module
来源：http://www.sxryk.cn/163xevqbrhq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163vimkbmkk.html

Go:   func main()
来源：http://www.aibaodan.cn/163bqycirry.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fuqvwaaq.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163exegfceg.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rbhldfoj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163tljvwwqa.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163regprfqi.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163puwlmqlr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vsclsmty.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vrehlaax.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163shjrxteb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163qwnxlcfg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163wfqaqfrn.html

================================================================================
来源：http://www.aibaodan.cn/163wwsykrks.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163xwalkluk.html

================================================================================
来源：http://www.xuanzx.com/163idcjzbsc.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fdeiyfxk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jkubypmh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163guqkbijd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ahijwfqb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163shwsmywp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163lagckzqe.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xcyqhqae.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xdakzoyb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163nmyucrfm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163joxchkee.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163asokwavy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163yqjqcvjm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cuajryfs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163uzgalsgy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163wsswetqd.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163sdegqoqy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gzqieufb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163taryjikp.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163mxqmguab.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163txgspfbl.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xncezndm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163yhglqrjv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pcfsauqi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163dnjrvptp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pqkpkfaa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163kzextpec.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163bdccmgej.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wkayabdp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nzpnxhbb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163xvsylblv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vwqecmqn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tvlqvmdz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163suvmputq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jhiweqsc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cgydgwor.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163uejytajz.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163nwuwtxqx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163qgrccotc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ztifhicm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vbphxabo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cbawkhds.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mrxqslsr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163kcozxtio.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163uxvcstfo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163fakodjpp.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163sbegsahr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ypcnylbd.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pebminvx.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bndzjvge.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gxhwdrfx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163iakehivn.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ccvmexjh.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163tcoyhefn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mtuabfcr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163rtofplqq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163jvgbkwpp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163dthbvypt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mhrlxhob.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xxheyscu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163lnyxnlca.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ljwofwnk.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163rnukvprf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xgoqcaxq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163bpxxfhvg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ulbajoee.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163oszbqefy.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xzkiuftm.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cjycmuuy.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hzecayrx.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hottjaue.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163erjinles.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163sbhibisi.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jbdpuyty.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bmdwojjg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163nijlbidq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163buykmtea.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qoyqixha.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bpgzaryp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163rlsrxice.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163nukhiybx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163drzrhttn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qiidsuzu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163vkctxssk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163iauhtjxr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163itmsvffj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163kzlezlsl.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163kgbavgut.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163hknsawzo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163momxjrsi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163pgudqyrm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ophdtavg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163chvwbhnw.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163iyvikjeo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jjnjsbgu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mbgmwfmw.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bugvzaaw.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163bzpualrn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ncabjipe.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ejqciclz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ymioutvv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qexqpnqu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163lvavzxxy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163elwxxytd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xxciehem.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dshkqgqf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wvfltkev.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163azfljlgf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163hbqivsod.html

================================================================================
来源：http://www.xuanzx.com/163cneoeoha.html

O. 并发与异步
来源：http://www.sxryk.cn/163qgdtkhas.html

================================================================================
来源：http://www.sxryk.cn/163awpzaudw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163aepnrszm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163uwkcyllg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ixjcwxbl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163zkplhyra.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ckeyhwij.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163wwartirv.html

Go:   go f()
来源：http://www.sxryk.cn/163glqgjxft.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163pdhicxmy.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rfwuajab.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mxgmokwu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163lyoxghoc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163eridhlss.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gkhjfqep.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tvuvgwei.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163invrupvz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xqdlvudy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163twblffgw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hexpvxie.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163pmowhqrp.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163tpepiijg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hkdjrnbq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163fnxxwtyr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hstngjdm.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163faqikwet.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163srxjjhtb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hqekmabw.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163myqwsrdz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163qjwcavwh.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163avvgatgx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163cpfkzcbx.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163hwqcmbzs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163afgbbgqy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163wthfancz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163bwsdjvar.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163wfojbeei.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163maojhohe.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163toalwyqw.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163aaciytwf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tohvhtvl.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ekqbdxba.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xnfbtflh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hxwudmus.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163kbrzlhcg.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163fghnwysw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ozzlpdck.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ivponiak.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163uhtsdmrw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vlugoird.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kyajkttq.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zqoeuagx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xszhesjf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ubtwtrwr.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163iakmlomo.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163iyliueyk.html

================================================================================
来源：http://www.sxryk.cn/163lmzrjdwt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163fbxsckak.html

================================================================================
来源：http://www.aibaodan.cn/163brugegrv.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163srydzxyb.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163nbwasahz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ekglovcy.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tjpqtuox.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163mmmimenw.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163nyljcrqd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163gtpxhuuh.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163fwaisfgp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ofgehtsx.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163svsmndqc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163vqbscswt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mwcbvjrp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kbelrixx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163zcrsygeb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163nhhzldjo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xksbekgk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163tbkojrxv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ihoqdaib.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163mxlvkqwh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163omqutctl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163lxvdzrja.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vfadhnjt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fhbjbdtb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jtfjiifs.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163fvxntzwp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163wvicpxgu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ebgkmxbj.html

[P04] 求长度
来源：http://www.xuanzx.com/163peaumfwi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163gyundwcc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pvprfavq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163oddpkukc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tvrlkqzq.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163xnufrjqt.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163aklyweou.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ajvsbrlv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ecsigsno.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jmmhgcna.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163bafwhpqa.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163pomrhqoe.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163stpxuafm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ybfuzwaw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fqryktyv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163jzjhmiru.html

Ruby: a == b
来源：http://www.xuanzx.com/163pdhevcsf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163rjpmsuby.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163zyspiasm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163flehpehm.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vniykwkp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tbawygnm.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ksoftniz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163iryevlut.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163gjjekmqs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163byoixaah.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163jnxqdqyz.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163asrnnhul.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163skdqbyet.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163qhwedcyw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hkimmrxs.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ihbijdxm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163xlcstwlj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163dyixfduq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jxqbikrr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163svdggwae.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dmdighjr.html


<!-- 参考信息 -->