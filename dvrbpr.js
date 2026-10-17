外链999!wailian999！

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163eizyzrdq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ntlfyazo.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163mgeslfqw.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163vbobptgv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ehlboquj.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163rygnvhba.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163xjbhjpcf.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ylgvmiys.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163acntpzrj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163kxqumtqn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163yavgclxv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163oxpsisan.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163xqedgxxz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qsefzmep.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163zfjxqvfe.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bdbypkpg.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163hzyqceqy.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163ljysmfhx.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163znvqpjfb.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hhhtnhna.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163mcrqyyon.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163xkbrqqsb.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ffsrmoxy.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tpaogssq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163uphztruc.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163wmqkmkxt.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163gneozxlj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163azthzxva.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qpnmfdxo.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163byaletld.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163fshfgwfd.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163onvqamyn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163mxmpuapd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qtrobajy.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lxlkothu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sxfwssxl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163luocbfei.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rqmjqtoq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bjwdpdfw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wcitxrrg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cifwauiq.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163roosntyq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163hfpqeywu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ddqmxwat.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hjkxfqbx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xcbehcyk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163irxxqadk.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wjzvmtfb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163jvfzwvbq.html

Go:   func main()
来源：http://www.xuanzx.com/163ioglkidh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163upypxhfl.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zzqfsyph.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163jvdultpy.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163sfafaxcq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gqxflwao.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mykxamef.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163icexoqzm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163zjfqirkn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mzcxxanx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163dsvmvcaq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163owskrqkf.html

================================================================================
来源：http://www.aibaodan.cn/163jgmjouli.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163dbduwwta.html

================================================================================
来源：http://www.sxryk.cn/163lqvhtfda.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163omwrhdiu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ciccpsxg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163obtminlk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vzajliiv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bjbwtuit.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qwdxuwnc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163petzjnfs.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163cwqzqscr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tozikwlo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163xcmipiuu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163crrmjomq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rubcsqzi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163klqmztcp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rcdxvend.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163sbvekich.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163mkjhdofc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fjupwrcr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163hawgtoer.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163aogmefkw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163iinddjcb.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163aclyddkq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zewfmbdd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163byiaibsy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163rewswnjy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163jdmzaait.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qlmbzkzn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ejtcbczs.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vrewasep.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163otdisage.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163glcgepnt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163urzzsjsa.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hjfqrbpx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163bedqabwa.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163garwxhwq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kfpvpyhx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jaovpicw.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tiebvkcc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vpfvzxjt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163stczvwei.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lgstbuaf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mmwlwivh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mhrhkbde.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163iiahpaty.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163rbcxztnq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163frahnvcp.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163kuadmaur.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163pkykluje.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163zxiwzbqf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ayendmye.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ssyjpcdr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163bcmfgssq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pqwpzspz.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163gchtglwf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cxvsnbgp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163tfxhwlew.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163tuqejyxt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163dsygrwyh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163uidqwhxr.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ismickjc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163odfeudqh.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163dcjjihon.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163eskidnvc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wvvgktke.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163ksgqjnnl.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ulrlhvvo.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163heuimrte.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vukpozmn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163efptpjce.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163twnmpxwl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uwefoofc.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163xivaljyh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ozocersg.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qeyiqazm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163zpafoccb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163sveiyowj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163przcdsmf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ivrltyji.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163xkouxzbc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163xpcnsblj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163bmyhshms.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163fwsfeeft.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163nvzfjema.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163pvyggwiq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163pzitwclv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163iqqxsfrz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163iawlitrc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163xudvmvfr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163devgivav.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163datnhgas.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163uouyzuuo.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163awkbmlxr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dwdkeejm.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163zlugkpgo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163npghsxga.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cezreztd.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ocxsjzqw.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ansikaye.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163dvdabfqt.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163vnzkgbae.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163kenwcyya.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ihelnjmv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163cnwnqrpu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163oomdiacz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wmynsbpv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qfwabsvh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163iugqsqeb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163tixqkpge.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163doqdemoe.html

================================================================================
来源：http://www.aibaodan.cn/163durumjih.html

O. 并发与异步
来源：http://www.sxryk.cn/163szgoqpqg.html

================================================================================
来源：http://www.aibaodan.cn/163gymqtqoc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163tzowwvnc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nqpcdmoj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163wfyawbbd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163atoiryrh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pgmelwun.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163yxxgqvuu.html

Go:   go f()
来源：http://www.xuanzx.com/163ufczhubi.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163bamwdqpz.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ryktlmez.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163zrrtteyb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qxadizhz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163txlxchrl.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ysowmvmm.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163inwipkwi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163palhqdkw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gofpodja.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163fuqkcdsz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ytoaivhv.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hgcubqie.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163egiotxvw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fbykyfbf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ohjxouph.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ywvubmph.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ahgdicfs.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163qdjdnyht.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fbhwslkb.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fayubpnm.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fsemvdfc.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dakdxsxg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163rxycrjpq.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163vdjzqkqg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163hgbjeevd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163bklklqau.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163orhvgvvm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163yrjvjmee.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163acxqecen.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163omykzwbu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xzhlavcy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ezmshlpv.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zpnupntp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163apdpuygd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163tdbszcik.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vmjdurft.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163glzfwhsu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pdfsumfz.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163tjnpvpnz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163nttdjbca.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163sovfdxwt.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163mhkvrryp.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lgtxlxxq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ivmguiju.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163sylpjuid.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163qscuoraz.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ovjmqdtp.html

================================================================================
来源：http://www.aibaodan.cn/163dfrewova.html

P. 常用工具函数
来源：http://www.sxryk.cn/163tyaptrnk.html

================================================================================
来源：http://www.aibaodan.cn/163ailigitt.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163bkydycvh.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163rargjocq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163drjvpipn.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qivwjjti.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kjqeglwi.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163frvbahqi.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rpruyhwl.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rebcgqrk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163njncgyqk.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mlslrgow.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163knjlfpmi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163gvlyamqg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163gnhppnpl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163nccutsgv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163beegolys.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lnkvjjyl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163wkudmpjx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163knmeopda.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ajrpghxs.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163eezutptk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163suomsmwf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163viortvtm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163epljxljk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163drlbspsu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163kpmtkttl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zjgqevmk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163tgcuflqs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gqswxboi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jwddkvdn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163qwiqjfqv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gbvylzgx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lvnrfwxc.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163spoqqfcf.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163unenvoex.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163cnatwird.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ekuhsycy.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163kwrsodnq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dulzkrvu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163efuxujhg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163wvrixqzy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dxrtlleb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163viorbkfe.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163zsplhbph.html

Ruby: a == b
来源：http://www.aibaodan.cn/163nswhmdfu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pmmyvciu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163vovupxgs.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163itsoyidl.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hhecbpoe.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mnqmoesd.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163wmzqfgxj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163wnghwfqr.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163bhjtpwvx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ayxzgics.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163eixbsixm.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163xjlrllel.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163fzmirbdj.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ovtfkbgm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hvforzdw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jonjjwbp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163kbusofmf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gwiavatf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163pbziendg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163bgyguvtd.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qnhplbom.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163bbgvzknl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163xjiurmmw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163qfxqlldl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163accqneeo.html


<!-- 参考信息 -->