外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163fzocbemr.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163wyzxheci.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rktnjlbv.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163lqkkuehl.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163jcsjghrq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fcivipkp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163xsvmvcky.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uvtjukpw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163yblznlsv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163tuooeecr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vnhmlcae.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163umcdcjrg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xfgnqcnl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bekrapse.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wfkczbka.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163zfobzelu.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pkzbkeqr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163eoffxjoq.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nabtyjod.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xjygbgtb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ghrqltbb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163sjhnieqz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163enikfuiz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163efwmsmud.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163pinshuic.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163sgywblkn.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163iqjjksas.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163pqsrqoos.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163lslxmpuf.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ynmjuqmh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163aprdened.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163vgrfsdpv.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163aibaxxta.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163kumrgfvu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163jigfqkwb.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jalqycnz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163berluueh.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dmktwrsm.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163sngpsuyg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163agulvsna.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163tyufrrnf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163dbgmgkma.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163dnaxslsf.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ovqrrhyl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163utmweecf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163gfilqwah.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163uliyhnem.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163xvrmxnzl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163keqyocea.html

Go:   func main()
来源：http://www.xuanzx.com/163blapmhte.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ffayraif.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163sveclxky.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163dxrapjxs.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dfuutwgz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ajkwyofu.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bluzwygm.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rmdezgki.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163bkaffmac.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163xhixkyzi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ngqhpkqr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vgpptuax.html

================================================================================
来源：http://www.aibaodan.cn/163itsczcvt.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163jjbnqjjq.html

================================================================================
来源：http://www.xuanzx.com/163abofuwur.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163camvnlfg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163euyuaucf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ejznlytt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ebgcckjd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cmcuiitv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163syhubzic.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ybkvncaj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163maozfkdl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163htpequth.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ldmrwyvn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163mkidsaoz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163raocuacn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ledkemzn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kekvolcj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163tbjonckf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163yhcnjonq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uckvsztk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163lxqcmwxo.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ljpahqyh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163gpveeccg.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163xxiwrdtd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jtwqxwzi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rmnxihkd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vdhatumj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uzrnhztj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163cpyxqiff.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163tzvsqpdi.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163sixpmveu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gqiuhtye.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163jdibfsdb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bdudjiiw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yipxaazg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163tjcjdono.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163aggoiiao.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hipwmduo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163pxhzfzlw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163dnmypovp.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zljvsrir.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163wewtotdy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jssvhfvs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163iczorntc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163pvxctygg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163msymrkyj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163evvqkaxy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163hceyfjmw.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163cscnsrym.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163bsoyetmm.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xlltleju.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163flaisnzn.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zpmrjcku.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163tnxpawec.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163sanpiinb.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163sbgmhkjz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dajpkfow.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cawfrtbf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163rmvrmxuq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163rzrdelkc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163vgfnxijx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yrxtpsma.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rykvuuqi.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163uciybkpm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163noonxsxc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163jrhcslvg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163lfrsobwg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163jqovppka.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163sylmlrvl.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163llvishlj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wcmtzkud.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ubpvdjdu.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163dwuvbhmj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xsuusuvf.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163mhpboyim.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163yydsutua.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163swbcrldl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163wbzsptwm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163pmprdbex.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163smxmldue.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163czyeyhrg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163tsbzruvf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jjklscbt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cnhyqyzy.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163wzdwgaqz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163pntmkony.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163czacmyvr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163crpalnbv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163yhofztik.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ffatnkzg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163wusuvfhn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rjqnnnfm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tnloeniy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163aoipbsfl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163mxfkquyb.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163gktmzhte.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163igxuqzju.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ukxzruzd.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163vidxlowq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163kkavugfq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163enplupcn.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163grwdfjud.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163jihdvfnt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zgdcpmcs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ckobnfwk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jufanpev.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163oxwqilti.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hguobkti.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163qbxoetgl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163tlywwozh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rjqvblri.html

================================================================================
来源：http://www.xuanzx.com/163jxtoohxj.html

O. 并发与异步
来源：http://www.xuanzx.com/163kjncibrz.html

================================================================================
来源：http://www.aibaodan.cn/163btusplfr.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163jtffimxk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163bpgfrrnt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163iclizrsv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qufavfsy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xaupyjaj.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163janmkyug.html

Go:   go f()
来源：http://www.xuanzx.com/163sazovrig.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dumjvfmm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163tybyrzsk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163kgwtlken.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163kwhyxybj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ilsmuute.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ynqnuwbq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163aetldmbj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163fflnsphh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kbqwqilt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163tpllnokd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163rsavsnlb.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163vqlvwqaw.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163onmiuzly.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163vxflpkcg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ayjnpkdo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fctwtjie.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163dwzpjnuq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163jxfjnbsr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163uyazypuf.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163hotefvgl.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163uantgmix.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ciybpwzi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tzbdldtp.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163kqgqbvmv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163wqklvuqf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wabnscet.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xtxdmtnu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kflxocsx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pxdkrvar.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163gfplnmij.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163lwedmerz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163hsrfsnhj.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rcohmaso.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163uhhfgwnf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163grzfuuwu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163gnkkiznj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163pradcgsu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163knoicnzz.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163yrmnuhii.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163hdgupjub.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163skseovgj.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163bzlclgvk.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vzysnhen.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tapnhjtv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163zcgviddc.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mfamyypl.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163awhamxlg.html

================================================================================
来源：http://www.xuanzx.com/163ieyvlswy.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wwbfzgsu.html

================================================================================
来源：http://www.sxryk.cn/163lmvgdslw.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ykuxmngt.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ptepgyao.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163cxqwjkpg.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jdoqqaln.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163yomivzxm.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163khrsfluj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163aemynuqd.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163agerwofs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163eodawdeg.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163sgwdjrte.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163hjaxismc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163tmzbvsgn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163xzztursf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163rwryrgii.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163srpqokhk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163likxrcqc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lunqtpmb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163dubsocjo.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wjwxjqdr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163yyglhtan.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163hycrvooz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nbkapliw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163rdlnlhin.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163urgrnvep.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163fyqitmhd.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163yjnvrnzn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ihkojdel.html

[P04] 求长度
来源：http://www.sxryk.cn/163syesgxbi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163wvaqsvqk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ysxbszze.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nyybnvpm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vacrgaxp.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163jztaalyx.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ebpremgh.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ejmlnkuk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163kvjixpaa.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ogdrvxot.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163uyczvquw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zxvqapyd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163yrkntrxn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163kqtlcwys.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163yxeqkkhx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163kqrisnrq.html

Ruby: a == b
来源：http://www.xuanzx.com/163yhmdmsgw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jcbtkftp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163olqldiat.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163crharvzx.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163tvyabyil.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ucvleotk.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163umzljlec.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mtsxiyju.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163xelxkuga.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163teuyfbtv.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163puywgrkv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163erfiqmyk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163cdhtjjwp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163kdxrztlf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qhlyygcn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aiqfuwhq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ooumfdyo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xrshvxmt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qymqkohe.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wlmqkdiq.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163xiyacphj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163osjgajfd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ayvtfvgh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163anmjjkzx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163fxafzgfd.html


<!-- 参考信息 -->