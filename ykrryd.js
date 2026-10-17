外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jxcscvjp.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163obwtshne.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163esvcbdnd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ntdlnzja.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jqanokmy.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163stdumuze.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rkjlawgs.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163oqnuntvn.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163mlkxeyto.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163lmqqdcyz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163nzwxyvcs.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163xveusfqn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vyyorfsh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jhdapqbe.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ammxdron.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163nmfqqzwv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163cxjmjvjq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163kcmldacp.html

================================================================================
来源：http://www.aibaodan.cn/163zwfsvttk.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163blknkbqn.html

================================================================================
来源：http://www.aibaodan.cn/163qtsvsnhh.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163cmnodzfl.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mfvfvxxm.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wqvgnqys.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163odohtijm.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qvjxdktp.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163mxvyrifd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163plnybcbn.html

Ruby: ARGV
来源：http://www.sxryk.cn/163xwfnwvvr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163pmhzcoih.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163imeypezl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ovrkawoa.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163pfhvmmhn.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163nqcevkkp.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163taqxllbd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163btqbuosj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163nnfkflex.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163gxfzvece.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yiffydut.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163eoftlrxj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mtjeipuv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jfvvurqe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163syisibir.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ikcwqtmo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mdbakpac.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163pvdcpojg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kgdvjfii.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ripfbmth.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163cfanijaq.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163kciskdet.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163hyggqhpk.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163nyjhlgrh.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163tuwguvqi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163kvtvmmtp.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fhiyevmf.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163pajjynbh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lesbahwp.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163qomyuepy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163pxxtcszt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ilvzavnc.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ddsiwtif.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163dhdterzo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qfzslqnn.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163lmvidtmg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jbeeaqfo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dnnshxdd.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163gpzcipme.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uqpcqtgd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163uqhjhzbi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gfdyykfg.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vdvejsov.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163cdxzqxoc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163jutqeuql.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xynwcjny.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fjdamleh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fbydxjvt.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wturpdjz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ldwhrwnd.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163atcyhujv.html

TS:   require.main === module
来源：http://www.xuanzx.com/163zvzclhpx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qydpxdnt.html

Go:   func main()
来源：http://www.aibaodan.cn/163fwbyqxph.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163aooqyqol.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ufpkefoz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163tzvdfrwa.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163lcmgfpcz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163imfckzpq.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163gmwgrxwg.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163uknonfya.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163sqkbssxd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163tpiqupfd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bklraypq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163npmjsznj.html

================================================================================
来源：http://www.xuanzx.com/163nzlbetkl.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163brkdphih.html

================================================================================
来源：http://www.xuanzx.com/163ndjmrdls.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163eytrosyn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163zkakkyeu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wdhoqbax.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dftwovkv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tmrvkxsa.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163fnxxfxtz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ybqzfuza.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163vofobavh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163wnnuyeac.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163outulakn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hquwhjtt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163guvvhqmg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tpopmxuf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rnzrskej.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gibddmvc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ykqbxczt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hxmjynur.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163zwvfmxjl.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163fizrwsce.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163mnagilhf.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163mxfniciw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bgfdkfdb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yiblbdjv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163yltkfqas.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163rvjgcgao.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163zlsudbru.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rzjfukdc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163onfkjxdz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163chugwcya.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163smcakfyw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tmeqwcyh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163smzmwcpp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163bcwkndds.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163zltvjnrn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nusdkhtr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hirsgner.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163rxwukqqc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163cxbeqyuu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dhkyzhlq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ulskkqsy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wiinitkf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163xywialku.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163nsusekap.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163wppwybrv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vivzcyft.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163okspgeyh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163dswcsfwd.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xhmecfcg.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bffqnqmt.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ubycmayt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qrssrjsr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zoiegezr.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163oizkzboh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zidtmiks.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163enqgtgkx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163sydhzvre.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163gcvyzkqk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163uraekvse.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163liyrbfme.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163tiysgijv.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ezewdndm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kkgumgca.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163oaorjofo.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163lqybzwrc.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163uormqqgk.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163rjgtwuoh.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tvajuhjk.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bkistway.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163yekltnrf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163bxzcyjek.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163zxbzmbmq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163yiqbhgrs.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ihksuvgy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cvczscxn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163rsdgcsco.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hmvknhgh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163iuuzbzpq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163wbnulwdc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xsiixfly.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163npwggaih.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163obevrpuu.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ehphcrjk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163oneruohk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163egicdgnj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163oaoywgpi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163jdlxmgxy.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ycjvpsvk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163xazaefgn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163pkedhfqy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163uqutfele.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163eqtisfxb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vtkswakg.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163faifrjto.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bazgkkqh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rxqevwzc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ahmqwfbn.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163exzrewka.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gqqkqemm.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ualasclr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gxfkbpst.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163wydmogfh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163hrykptow.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tckgbmis.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pdibwsve.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hwbgrrmi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163fqmpalau.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163eemelfhv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jjujhlpj.html

================================================================================
来源：http://www.sxryk.cn/163mvtmqimr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163fyfennyc.html

================================================================================
来源：http://www.xuanzx.com/163jipuztfl.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163lmmmzdql.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163hwiffqnf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163etpwkagb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tjolxhqw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ozifqohq.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163lztxsngv.html

Go:   go f()
来源：http://www.xuanzx.com/163pprwwsfc.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zdvqyfnn.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mzqglbsk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163euivwwqj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163pjaiwnhj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wtiwvldx.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163krhkobym.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vywieuxz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163stwqosbe.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163sbxofpai.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163crecbmpu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163aalsuwvp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163tuulsxxe.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163felkturp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163kftnejta.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rrgmexga.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mxfbukfx.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ffhdurfw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ducefhjs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163eqsyonnr.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163svwllchb.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163zhuvlidf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163cywxbzxt.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163grvohqnj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163odzhamoy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163vznmlvxa.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163sbyshljg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163sgcrfyjr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163agumhhdo.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163rjhyfurt.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ynatcnfa.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163htqfzgjx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163mvetkceg.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nozvxbdt.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fturniea.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163yddqsdwv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163neuxuwbp.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xkvyymyq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nseqtcpl.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163urnikowe.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163mijulfbh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vhqigmjc.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fvrhelgt.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pjtfeilu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163tmejvsiv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163iqqgsybm.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163aqosuktd.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rabcjbxv.html

================================================================================
来源：http://www.sxryk.cn/163kxthjqnl.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ifzqysep.html

================================================================================
来源：http://www.aibaodan.cn/163shykznhp.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163qvxwkkwd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wwhtohtk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163apueghei.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ucragpqh.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rzxedwfs.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163sxgkxpmy.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163wbiacwun.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zqglotfk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ndqctrrt.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163kjojbjjz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163uggnowdg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163elojvrkr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163cptwbcej.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ntsjstup.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vxesdyfw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163gkkmtanr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lmnowbxf.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163bddyqmyp.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163wtvnlkas.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zwrdsfpl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163pcklvbuw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xwnbsaky.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163przbtmqv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vdosecsr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163afrflfhs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163bgzrottu.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163dcrqzaon.html

[P04] 求长度
来源：http://www.sxryk.cn/163thyazlhm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163qdqlvfkt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kscsykld.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kjnfqfkv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163opulmlbi.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163gyqpkvdr.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zqmsgkvo.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163isqrxrmj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163sybmerty.html


<!-- 参考信息 -->