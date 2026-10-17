外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mofhppdd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163esyupjff.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163mjzdcgqk.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163wxbxrmhp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163rpqlpujs.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bvpbfxhi.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163saakutss.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163thhuwbje.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163yshqrbwu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ekxtppsj.html

================================================================================
来源：http://www.aibaodan.cn/163odpsnpel.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163wrgfxkwd.html

================================================================================
来源：http://www.aibaodan.cn/163ofhnskky.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rqmtowlq.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163aqkidkjj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163lmtfwjiu.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163grjqlahn.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nhxhqaxf.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163supvnkjp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vyawjacw.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xtyujjah.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163uzpljgsd.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163nznhetbw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gpzaldvn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zrhccmuy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163chezzcti.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163kkkpikmm.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dphsrdsy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163hyrdfnzi.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163jldstxhm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lnyxdoak.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163qvnkbmgt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ulrxrwof.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163aimctznl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lwxtxauc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163vntvugar.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163azsbsknp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jdhdvpfp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ckenwjtq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kiggatzx.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163lgiwdxyi.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163rshbltus.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163iqlrcdxt.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163betnmiyq.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wvjohfiy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163onyauzml.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163uklihhew.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bhycmwid.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163efhrzwmc.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pzteuihf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163exsyhliz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163onpzdnsz.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fgyzkevy.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xentrcot.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163tekowvil.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163nwfgoshe.html

Ruby: exit 1
来源：http://www.sxryk.cn/163yyogoygx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jitkluxz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163cvbhyair.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163akkvahze.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hmwhaixr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163payzftrr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ojdoyucg.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163xjfvjctg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163kmzvmodx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mygtyhlx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163seoocnes.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ezkpqisr.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163dxkfuztv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163lymfajvy.html

JS:   require.main === module
来源：http://www.sxryk.cn/163cqmvmoay.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wyejdadx.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163bxfcbgbd.html

Go:   func main()
来源：http://www.sxryk.cn/163asuqordy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fuvascav.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jubtkmkm.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163rbqfcoua.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163mecfnlbf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163awasjvap.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vvumhhwq.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163sckhhunc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163tapzfukw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163jtelelso.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163wiaulzvo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163omffayow.html

================================================================================
来源：http://www.sxryk.cn/163rgsiowwc.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163motlcexx.html

================================================================================
来源：http://www.xuanzx.com/163pvgqsyia.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163tdihbqar.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xmchaeip.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163uevhmsbk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163loqmtpdy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yovqwffy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wxkoggdv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163tbtbyebd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163oqxielku.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mqbvozvc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163yndbwgej.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vxosiogv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163svhldcog.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qgdhbcbz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fnzfiqwv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ncvzoqzw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jjfgqemz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lxrccdve.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zsxvpewq.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ffnuibnp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163osnatwby.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163eghxeghu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eezsxcjh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lqnmdtst.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163fkixyazp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163jfshytzi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sswjkhtd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zobqgczz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163typvtkqi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ehdgrshm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163gyvrhakc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163enhwntfj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163skxrwdhx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163zhigranb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dvswaxxk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vsdsflvf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163vhjelqye.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163mppfemul.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163swihkbbh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ffepgszs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zfiouode.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xpctcowp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163izwdampk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163eiuoprjz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ntysjnaa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163jxurcjoi.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rcpapddn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163qmoleajx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jcvuroty.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bpdtweza.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fetpfpgo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163tiiuyfji.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163rppvqsws.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rzszflbk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ekdjjjvs.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163irktnfpg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163kzqhmrbw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163tmxpwrzu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163pbiggwgg.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163djnqipdl.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163unbzqvfb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163prpdtbfv.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163swwgpgoq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163vrdkmehe.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ohjobcqt.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163avzykvsv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xcvrxfvd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fhqzlqch.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163syzdcxmw.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163belmszrg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163jbuafepw.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163miaucrwy.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zqyayzig.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163drgioqnb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163waolukre.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163cqbgcfxh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ojpgxncq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163fcmgxmzy.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xgurxhjv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163kbntclip.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nsodaudb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163sfflmlmu.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163bkuyofuz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163leasdbgp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163wwwdtqqc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163rsggtwkh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qmzzwqiw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163gkjoyqgw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163vybeiypo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163dclxkpza.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ldeheqvt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ybhqtsrr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cuzduvzl.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163cvktagjy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163inwvvrrf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uzmysowb.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163nrpkzxqs.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163yjmbnueo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vjhpgviy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ilsnferd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ugdzdomk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163epvoaobs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ycujamkh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kgkqfjlr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qhdgldjv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xkdxppwh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163swbwngio.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163udefhhty.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163btyyxgei.html

================================================================================
来源：http://www.xuanzx.com/163xzsmqcud.html

O. 并发与异步
来源：http://www.xuanzx.com/163axvmmzky.html

================================================================================
来源：http://www.sxryk.cn/163cjhvnlem.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163mcfohmka.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163mzejypaj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163pttbeqwq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163toztgcmz.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pgxzbmlw.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163obyjtcgf.html

Go:   go f()
来源：http://www.aibaodan.cn/163zcqpwpif.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163velhglqx.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163bxqkdxtm.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vbgqbdft.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ftjkpdnn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163tdzmuoym.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tyoyvhgt.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bktcvwsc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163yrbyfhei.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163wghvtaxv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163zebroezt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163bwztbaoq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163dlrerrof.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vbdtrqmw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wuqgpeaz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163flsspvbk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bckiiweu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163xgfuqmeg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163espanawf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ctgjfeyv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163zorqgjdk.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qevgmitx.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163yujumams.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ltzqkffi.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vmripjdc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ryqhxdld.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163dgisdfqb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163yngisyeg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163sdoknjxx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163jsqdpeqa.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163inphqais.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163odyfxhxh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163licgfiqx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xqagcsgg.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ppkdcsbz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163olawowkv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163wpqkfcaf.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vklmhcrz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163mujvvjlc.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163eivmbhli.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163xgkomdhz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163wmoolssg.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kkiadphg.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jfjosaov.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ukgetije.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jiqirlnv.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zstkqfja.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163eexjekqe.html

================================================================================
来源：http://www.xuanzx.com/163odseyhod.html

P. 常用工具函数
来源：http://www.sxryk.cn/163damopapa.html

================================================================================
来源：http://www.aibaodan.cn/163vbpaxovb.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163kgwtnont.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vvhcpgwg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163dnsygwaw.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yxthyeep.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qehgeekf.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163izhcdinv.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163uwqinwmc.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163kkkisvdh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163epheaifr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zhyzxotd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163zybmkwop.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zojqfmzy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ofmymwne.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ftutwoob.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163kfqpwkev.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163wsyfioku.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163bxctxedq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ibwldgyw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gqcnnrvh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163fpoihqdj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163doihzmok.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rbnthzft.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163usckxiph.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163swmvjgnz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163bzlikfnl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tnmiilsy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ryjnudsq.html

[P04] 求长度
来源：http://www.aibaodan.cn/163gatjagci.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ndzjlvbt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xguunqey.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bwqfriul.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cbltiwgw.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163eebhvabf.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tophyupe.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ojihqxig.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zquqjvaz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163vawygqbz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163zzefrrue.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zxsxjfrz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ihhbhebc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163oohiacfd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163gyshhegf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163qfmjqjad.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ezlvfghh.html


<!-- 参考信息 -->