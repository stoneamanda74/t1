外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163csxebvyp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zpodbaee.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163scxgpauw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zawzponr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163muvdnntp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ycbdxgxn.html

================================================================================
来源：http://www.sxryk.cn/163dgqcmwcp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wbqttbtz.html

================================================================================
来源：http://www.aibaodan.cn/163yikjrcsk.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ycozsros.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163pcjpucae.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163omlixonq.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163oxwpvqig.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xgfdixju.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163nkaqjffb.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ewwdhwzw.html

Ruby: ARGV
来源：http://www.sxryk.cn/163vgklqcxf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163yuysvibd.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lpktdrwu.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pyfoougf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163amkpdpim.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163gcssjwzu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163abttpzph.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163tmffcfef.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163golnsavz.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163unenutyj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ozqropap.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163lscievzk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163kmqmulnh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ljgcuhiy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163twjqkssf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rthwxzzy.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163aqzhwuiq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ljipyrtt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vcfvhhmg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163bictdxlp.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pcninatr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163lhknjhmo.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rlqdibgy.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163iqdfjyln.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163thzfqwcc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vfdzcrpi.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163feexsvrr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163dkqlwhzf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xxxwiant.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163jojmxttz.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163rittvrmt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163oddokczh.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163cgkcipti.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163msbfpmow.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vpyzlimp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163kimlgtdc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163vwfhbevp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wrdvxfzs.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ucbfetmm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163rdtzjttf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wmiuzmne.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gytsynxi.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163fplbdhbi.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163kbkdgjjs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mubpsafr.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163mqudscvc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163kkworukl.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163mfipzswq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wuldmhxs.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163yrgdsubo.html

JS:   require.main === module
来源：http://www.xuanzx.com/163bvldnvoe.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tqnexikx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163azijixzr.html

Go:   func main()
来源：http://www.xuanzx.com/163ismpgusz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fnqbothz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vurmhups.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ymooquax.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ttatgpor.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163fdnicelz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nxvqtybn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zyzpvwdj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163nwwtvecr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163uibtqggv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pkfiewbv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mlkxqbux.html

================================================================================
来源：http://www.sxryk.cn/163rkmvirka.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vsuroeeo.html

================================================================================
来源：http://www.xuanzx.com/163uhxpaohb.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xrbcagnx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163gdwskyan.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163oyywqbgj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163gdbenipz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163feovcuzk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jgqrvbcy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163sepamdcu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zmomjqgx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163grtfopvz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ypapukbv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vpkswhgm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163gvpgbrwz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hmpstbrw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qayadlsb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zfwsxiby.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163yqqtyuhj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iatnelqo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wtpbflla.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ksusrrlv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wtzqlyft.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163hkttuufh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sixqvrgw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nogkysot.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zidradgl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163yjoezgnd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wpjcsbcj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163voudxbuh.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tmittsdh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163woqkpxvo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163otpbcrbk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ietzvnwv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yulynfar.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163orsitfsb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163dyjtkqpx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zlxesqgs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163rwwgafyb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xpdqldys.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nlmhomnk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163harsashj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mhzbdlwm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163nfaoxuop.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163plkcdutb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fnogicha.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163pxqcrbef.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163wixpwqef.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ukvdvatd.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ogjphwgz.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163mxylnmsc.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tnozxqpu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163spxhphmz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xosuwuqo.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163nzqvjkth.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163eapulomv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ipozqnkb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163jxotaorm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163yscqqxfo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ukfslkja.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wxflhhud.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163gazinhkq.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163yukolxft.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163nuzryhzo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163sgdzqjax.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vateqawl.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163tolkfjbc.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163plilfbrp.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163cnmoahie.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163eqtpagib.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tvuteywm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163yymorunl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pmbkgwej.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163btowpjli.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ismjjtuy.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163znjwwrsx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163vwrtfthz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163firoeutu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163fhyclhkv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163wpzbapss.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ejtaarud.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zizyulou.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163egmvfyvw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163fpdjoixx.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163epuimaks.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163nylomxij.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qjvhtmhq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vvpeqaqn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163oyxmkurn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163agmqrrod.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vmnksupx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jnlqpoez.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163qjfwhhvb.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163zzcdxufk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163pxyjcjnk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ipskiuvm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ppjihbny.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pmxbhiru.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vecvmtsj.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163pudzcoay.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163wcxmdyfr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163qdlqyvms.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163dkhdwtnl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163oiescuyc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xkdokrbp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xvlstemc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163drrkhcok.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163icedbbxl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kdlqooyv.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qmdqksyg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163duraoenb.html

================================================================================
来源：http://www.aibaodan.cn/163tpupyati.html

O. 并发与异步
来源：http://www.sxryk.cn/163wgenxvnk.html

================================================================================
来源：http://www.aibaodan.cn/163alvymokh.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fuvxvlnt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ubcrmlsi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jiukzlhx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163iglheltb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tccqjhyy.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163bujecgja.html

Go:   go f()
来源：http://www.sxryk.cn/163ykskkjvx.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ykapqsyg.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ktoxaeds.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qsauuhii.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163jotittoo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163zweqtitf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mugkzftf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163khrybeif.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163inaexkoi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163zecnxawa.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vxtrgrji.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163iaytabbz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163btnuxzuu.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163jbzongbi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163wfisczec.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jtgetboy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ynydrnlz.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163uqyhuszm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163toxgazxx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ysabqsur.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163agsbngsy.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163zrvjuumm.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163cpdoqpnm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163zerjapim.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163yxngupod.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163pbiieprb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163fpyvmpdn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qrtboada.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ezhisyaz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163akfzufee.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163footnnna.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ewiyjctj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163aujyssto.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163sknolyef.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163icrxmoof.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163bxlnicwm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163vxibvzwv.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vswaohqf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163aauocapx.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ghiicxhx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ehmnjzxe.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ksvmhcex.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jslqmjcx.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zfrnedsl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163fklpewan.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ddhbbkzg.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163sigpsonm.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mrhpbgad.html

================================================================================
来源：http://www.xuanzx.com/163qxdrqupy.html

P. 常用工具函数
来源：http://www.xuanzx.com/163vdcdphyh.html

================================================================================
来源：http://www.aibaodan.cn/163wophxnyt.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163qsnnsulb.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163wxjkrmac.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163usjfjuvu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qvtvtfqm.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tjsakioi.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163cnidozws.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163fzjggcfb.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163wtilqaqw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163gghtmtda.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lktadsyg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163pzvsrrsn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lovbomtu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163gkkcmicw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163mvghongr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163iekkzdgp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163yzliwaau.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163dqzmglzn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163qioiemxw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163cqxdjzkz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163fvqrlnga.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163bbbqfcaf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163izycubut.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xwchnaci.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163xzheobwg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163zablqttx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163teicjqbc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jvfpfhqk.html

[P04] 求长度
来源：http://www.aibaodan.cn/163izpkplau.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163wifzttbk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bzejwtzr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hjmacvsi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163etzcfsij.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163jzfmaknt.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163rdjvdwjh.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163cdcsxrql.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163fulavtth.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163pxygwyqf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qqqporei.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163pcxxgfbd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163uffkjqrg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163etmvavgs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163oupzrkgq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nlovpyza.html

Ruby: a == b
来源：http://www.sxryk.cn/163qmcvspya.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163amnubaum.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163vdesirax.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tzrxeprh.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vayikgns.html


<!-- 参考信息 -->