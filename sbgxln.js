外链999!wailian999！

Ruby: ARGV
来源：http://www.aibaodan.cn/163dcenqrus.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163tkcowfbh.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xakwzwtt.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163xxkmenpz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163sswhkbca.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163rfopovma.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163cjkegehp.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163gixetvrt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nloqntxl.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mrkxzaxj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dsdxjohm.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zdggxdap.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163oluzjluk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163uarrpkmb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qnlpkfsu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jhyhbfcg.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mwtdgzvu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ewxyabxx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163fqhuqzcr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163dszygdys.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163vcywncre.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163hnbpxpof.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wlruywuo.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163rzxdshir.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zjruabbt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163pynsgktk.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ohfyhvyg.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yfjhufpb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bpcgwtej.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163fgszhkvz.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163cngslkif.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kozwkwlp.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163fsxlmzrk.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163elafsirg.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163sxackhku.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ctmavbhd.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ipjhnadi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163bafrxqau.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163fsakwoyj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hztlcdzd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163zittwasz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zheoijmq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ttknyelj.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ghpzvcwb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163okdlrszi.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xilfzhzz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nafxblkp.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163dqnzjgvc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vagxaosv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163knyubcgi.html

JS:   require.main === module
来源：http://www.xuanzx.com/163eqhnjqxt.html

TS:   require.main === module
来源：http://www.xuanzx.com/163bxqggdhm.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fdsxqkxc.html

Go:   func main()
来源：http://www.sxryk.cn/163pypbnfdo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gjsykmfk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163jqtwevjo.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mzpdxhxn.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163adukoccs.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163pfyxmrmq.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ssuohaar.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pgqecdey.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163knzlehwk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163gwsxbssv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163zakcqbqp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163bfznygqj.html

================================================================================
来源：http://www.aibaodan.cn/163sjjjlunc.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163yxeahocb.html

================================================================================
来源：http://www.aibaodan.cn/163rxcrsaqo.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163czxvbkmz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163snfpgmdw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163cryswehq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fxmklrgs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xvmxwpig.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163qsdobaxr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163jdzyylor.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163jzzwfrye.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163wlwvdggi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163dhhgmwag.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163cwguscrt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xatnmmfm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163eiwclxhc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rdkzkajp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163jjzfczyy.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pqupyjdv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163stqntxcz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163srybrotm.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163nqeunpih.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163prtjprxt.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gbeujpey.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zawxpkzw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fpyolfac.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163nirkfmdi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163fesemvdg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163hgfoshno.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163yinqigaw.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wqgixglh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bnwqtpuw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163wpaexlka.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163awyoozhx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163aslfvitz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ujgprerc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rxzdmlxb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ervsgepg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163aajatseg.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mdkvckhz.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163wbipngvv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163khzvekmw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nmlvhubi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163flmbpqki.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wrheemlp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163gbdhswtf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ujjgbslb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163omtkejnd.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163noyzbshk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ucgjehbe.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ljahhuuu.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vdbdhusz.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163aksmmakj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163swblwayq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163oxxcakgu.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163blmbxomj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163youomgrp.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ucyoijxb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163vvseifyd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163uyqsgvnx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nsihmccu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vkyccahl.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163czpanqpe.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mvnzvehj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163irrgvqbt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163rqabxdcw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163vunskhvb.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163wtubtfzn.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163jyplwvsz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bkcqkpqc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yaliiakz.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163hatwlqhh.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gzwmquuz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163nraidepw.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ioxkrdbm.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163thexwchv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163pmkdvfrr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163nnysqghp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163euzfwxxl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qzfbwemh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163efwayezt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ryzkgtgk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wdchtykn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ycjapfyv.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163usflazwk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mlyhzcbu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jnyiycvl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qjtyjlsk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163dpnwjysf.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163vnydmhvo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163gkhgyhpp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163keculvbq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163razwgfkb.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xjijpmwe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hsgoofcb.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163bkmhtczo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wxxwnuxi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rovgwflt.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163rbycefbb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163jodkakld.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163cpniofeo.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163tafhoded.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gktzaycr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163fdwefpzq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163bxknvvla.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mwnuvtud.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gywnbxlq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ipkhijdw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163zwxwjowl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ocykecnn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hsppohcu.html

================================================================================
来源：http://www.xuanzx.com/163xoovomtd.html

O. 并发与异步
来源：http://www.sxryk.cn/163moqzbzmm.html

================================================================================
来源：http://www.sxryk.cn/163dvebqpao.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ieexvpvs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163pmpvdaao.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163goekyykk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zsevoepg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163whbbwppq.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ifcapnsx.html

Go:   go f()
来源：http://www.aibaodan.cn/163ossvsmto.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ekjttujz.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ioxnosuw.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163dvrmkopu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163kuydjwnj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163lyfwmkbw.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163odozixmp.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ebbarpyv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163piduyryi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163stcmuthd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163scbkghfh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163bffxflms.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163fzguaefd.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vvpxhtec.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163mlbzbknx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vyqanuci.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xazzxerj.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vhndbyhe.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ktcvomjt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ejykumvg.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163kegrhcov.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rikdgwlm.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163myiqqcne.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163nzrxwuxx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163huiktmiz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jdznjnym.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163iqswmmnz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gcpcktqd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163oiaxuoby.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163hznvmfjh.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163gsuexjox.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ydbrjnyu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163vezqsegg.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163iqngjvrm.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tvyarbef.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163dykltskj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163zbuznvzu.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qgbgirkv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163gdipbsxk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163vjvzwgpb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163lpffhszp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163kzzjhymz.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163eygbllpn.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vsmupezy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163cbeaqiyf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163djnicxgf.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hoobfyyg.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ffhncybe.html

================================================================================
来源：http://www.xuanzx.com/163jmuksqkb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163oybqsben.html

================================================================================
来源：http://www.aibaodan.cn/163nwxmobgu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163llwdrwmj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163fytursbl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ewgouowu.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gpuuxtnd.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nordswno.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163dociyect.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dptnhmqu.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163oahhdtvk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163siuzeiin.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163sunvuobh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ygagldbh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qnshamxy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163cvhowlaq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163duhoojpg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163atnayyyi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163pzpmzbqw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163dsqqmzvh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163aihehosd.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163vklrzlfr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163taqvfdfw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163wzzyobgl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163caoyuhwr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gavlzzbs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hgqfpngg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163oqaetmeg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163moynsoyd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163zjudarbf.html

[P04] 求长度
来源：http://www.xuanzx.com/163scxhowba.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163viabwurz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zqrecipc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xveztugj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zbqoftpi.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163hvwqtufz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163hgdhtxdg.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vroenocd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163daoesewf.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163neegbgbf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jwsycgax.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163rvhmnelv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163fgylejuj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163iaawlucs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ixaxlusl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qudidero.html

Ruby: a == b
来源：http://www.sxryk.cn/163kfjovxbg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163cfrijtjx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163spmcevqp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163rahsiuew.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163aqxwifnk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163dlqawamk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163dnhsxvac.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163orsssfva.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163dictzsus.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163epvlvqal.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qghceidk.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163jlugucvp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ssfvybqd.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163pxqmflbo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nzllrxku.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rkfnlsxb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163snsxgtxv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pzmtiguy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xukbrkfx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163pvgyigue.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163twnwqgmv.html


<!-- 参考信息 -->