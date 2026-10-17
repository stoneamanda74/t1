外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ygyafrkg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163yvwczjnh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kzgeqrep.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163oqjwefqk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163yqsgvqul.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ovcapykp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163nbllsumz.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ewglvuhr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ktojkmgg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ybzgpcqj.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163oendyhbw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163dwudpzlm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163vydevygd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163iksznozt.html

================================================================================
来源：http://www.xuanzx.com/163ebsmddxh.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163omymcilb.html

================================================================================
来源：http://www.sxryk.cn/163vihfbfuk.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163spjkhqem.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163htmxktez.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163xmadpyih.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163obewcgxo.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163fgowtyut.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163vfiiotfs.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rjmfwvyz.html

Ruby: ARGV
来源：http://www.sxryk.cn/163cygcnius.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163fuvxubgy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nviouiwc.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ohlpcidj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163zulbxpcz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163wuibiiwx.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163aqkdgvwl.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163sgcdhqrj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ubczksth.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163vfqkskkn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163zhkbwupv.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163fkcicqug.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163eugjgtwm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xnovmrkn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pfdbbcec.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lghxvszz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163yamkhnye.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ifzxsjit.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163yjzfrghd.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163duzwiyow.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163npzhjqwd.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163radtwcpw.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wfcsoeaq.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xhmzkxpg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163rmusvrrc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163wlvjfmfc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hrbpwgti.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163ecgukeln.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163qursmtzn.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163njccsjmo.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xwhkuzqr.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wrrjnbkn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163uptdnuwp.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nbubjeny.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163tegubvfe.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163hhvqwmbq.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ssevvpfa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ohtskxtk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163zgbggffm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163aqhhilzc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163dbkgnnuz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163pjvpjecn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163bxzjklnb.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rpbhpyoc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kljgcnig.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pqhmamxe.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163jabdqiua.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fqtmuokb.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rqqlyapg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ovtoflwu.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163diumhghz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163uhozmgma.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163oegoyayh.html

Go:   func main()
来源：http://www.sxryk.cn/163fyheetce.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ghgagyoq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wzlbpreq.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rdpvjhrn.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vnafcoix.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qfckdnkv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163swyjuvsf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163iojpuvda.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163muhnyxei.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163prhafkav.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163tieqceex.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163azdgxxsz.html

================================================================================
来源：http://www.xuanzx.com/163cdzecywq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163jjygucel.html

================================================================================
来源：http://www.xuanzx.com/163vswaluni.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163whvptclf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163vztxatns.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163uutpmfvs.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163tbizenxv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ocgsiudi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163odvribef.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163uwnegusr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163nsvmqxcr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163giykomld.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ppajhtkk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kjmvpvtg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163zlncxnig.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ahrfdfkm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uetnjxrp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ffujdqgu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jjqiffhd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163leesrcac.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163lqnefzci.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163cvitsejr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163onrmywsz.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hkddouvf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yhwpygdu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ombbodan.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163woxrlkmt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jefzdpuh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ezytrnnl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163lfbuuvot.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163oyynzxka.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163snvalopk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mtwpvhmq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wwvsapuk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163palcxayk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163grqlfyrr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ezezwcko.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dsgkxsry.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163jxpbqneh.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163auppvueg.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163meikuvjg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163egfmgubf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pumufyhl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163poswpbhx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163yodpomkr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163joajwfmy.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163vpuvrbin.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163fluqzflu.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163bwgsexbb.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ihpcvlon.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163mozdwznm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163aachsimv.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fecujibz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kdmeeket.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163eqvoorqq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163egsbxabr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nthfvmlj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163skvsdxay.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163jfhtaobr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qhukkosq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163clycwjpl.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163urvhghll.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mdbjiqri.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163qxsvywxk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163bhlzabib.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ghttijqe.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163liuoxlmc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yxringcl.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dhzyrpni.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lybkkohs.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kfhbfkem.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wsxrvqno.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163stbhofpy.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163fgepsegt.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ccrhgjsc.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fmywevjj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163uanwlsck.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gfeinxre.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163fhqikqqw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dcrcaqiw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163aobnfprf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zuqwnwan.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fkausncm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ghpmrouv.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163hemscaar.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163biikzfud.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163vavmlbbg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163bovtmmww.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qasietdk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ddhiuamr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163fblabysi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jccdclnc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ycwdnzxt.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163dxzpzxag.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163nfntwzud.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163meiwtxpy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xelwredl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lvumgegb.html

Java: // 手写递归
来源：http://www.sxryk.cn/163qwvisqko.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163xrsvasiu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163hgwivujt.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rfnelcwn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ngsyhcsq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wwihohoa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163cztgbpsj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dlvcqkfg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jdaiwqcj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163grcfrlyb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163zznnwasr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163wtanpxcp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jxxvwlzo.html

================================================================================
来源：http://www.xuanzx.com/163ceavecju.html

O. 并发与异步
来源：http://www.xuanzx.com/163ikzrgvif.html

================================================================================
来源：http://www.sxryk.cn/163sajdafhl.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163dpdkmrpp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jlckkvrk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163rvpqnocn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jxatajqw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uidselpi.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163sghnsqxz.html

Go:   go f()
来源：http://www.sxryk.cn/163dimgzfwx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163dvaishtu.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163iudroula.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163cbiwjdpl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163idcqlwea.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ifasrxtz.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163otgrhtyx.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163eeszqfan.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163atklizjf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163zkoqxmcn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163beawklmb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163kvxpzdxe.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hvpusyvo.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163aebhlrys.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163bgnadezx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bvhaqagw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zqgrgsnx.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163sbpjicgn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163fjqcmcgo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163luylbvat.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163odnmzown.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dvcxmsaa.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163yuisregn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163obcowtuw.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163quythbdp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163fmtblydf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163zpddxcgq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163xiqjgngt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dfguzzsi.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163pgzzbjyz.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zezktauk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163oiaulbsy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ootojkek.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163iqdjkqiy.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mmlueiwl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qqnsziit.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163orrggvlt.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163uuhvfzac.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163xomdixzv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163bubcrjcl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ugyuyakh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xdjhmlxo.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dtofkekk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zcsmldkp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zjeqczlz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163sywuazpw.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163udzucdnf.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163liksqsze.html

================================================================================
来源：http://www.aibaodan.cn/163vjfpgucd.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163clobrluz.html

================================================================================
来源：http://www.xuanzx.com/163mguhfqyv.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163eodiaiqe.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vvgupfwr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163lxmkdjox.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163omoqqxzh.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163waigxyrg.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163nonkknbk.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ixllbimz.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163iptdkwem.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163gldhtgll.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163kracjorq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ivvsxysf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163mcrsaohn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163enussvyg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163cesaazmw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qywyekpi.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ycpjlgkf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163bcpwvsmk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163uoercmog.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163gwjcmgii.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ubkrsmef.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ucgybnbp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rnvmsmzh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163chbhpsxy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163pcftwpyp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163udtrybot.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163yhlcznsh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nejbland.html

[P04] 求长度
来源：http://www.sxryk.cn/163uejmrcdf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mjbcvcxv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bnhlauch.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163itfiwefe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zpnjkudp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163qlbpurfp.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mgttgdei.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nneuddxi.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163pjqvfltv.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163dxgeienw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163gwusqcdj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lakxwnrf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163eagqjobo.html


<!-- 参考信息 -->