外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163ukuveehr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mfazpjbd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163rbdezcdu.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yehmzrju.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qsejcfiv.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163mutivyrf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hmhwnzyv.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163fvylghvr.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163bnjudubr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vradjlzh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163brgnjhth.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163oyjesvyr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dcsbvbwi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zlhbmkxw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163jbtxhlky.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163rjxncvjl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wuxbwrbe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ijvgzduq.html

================================================================================
来源：http://www.sxryk.cn/163wmkilpxh.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163emylsdnu.html

================================================================================
来源：http://www.aibaodan.cn/163udylycda.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rpngpgmn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163zqwadsbh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163qoxdpkqu.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163phtsqtlm.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qzipxkwo.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163cinjrkxf.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163kdumtczy.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163thnuijcb.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163svzqrisw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163mjsjhxxf.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qfunvaxu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zcvwsxjq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163dovoxzef.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163kghvwfod.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jdaunqmd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ywtyltct.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ecseeqta.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163znogrqft.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ahxpktjc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mcjsdooz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163bhdggmar.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163abwvvpso.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lmmfghgf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zypwzarg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163axfjzczt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163gwjvylaz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163elaaxohu.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163cvbxryif.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163vngjkajw.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hicdpast.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163fnfolrgc.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163gzbsgqye.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163oafrcgba.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ccvcxlsh.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163iobxgujt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163doszydgc.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163pxxtmaly.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163bciwhwnv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kndolpdl.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163bcsceiwr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163xiclkbhf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163frbnfocd.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163xjxgcmdr.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qzewbeog.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gdmrcdfe.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163higifxlp.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163dnqabqay.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163uaeoptgm.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ygkfrswr.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qbiyflva.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163afufiblu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ipfkcnjr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163lzngjfcl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163mwxumknp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163uazhhgom.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163npjofnqi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zrmybmuj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163eqatalre.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163lbpselbd.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ulajudvf.html

Go:   func main()
来源：http://www.aibaodan.cn/163geugyraj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163rssjsmqp.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jzcoixrj.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163fpfccopv.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zodlysyl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qorlqxpp.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xlygtkpl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qpsjvhrn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xhguourf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163jdaqfkjt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gqpdvafs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163sotfrocr.html

================================================================================
来源：http://www.xuanzx.com/163ipamgbqg.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163qggdqkxw.html

================================================================================
来源：http://www.sxryk.cn/163yygrhund.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163nwaodhjy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163dfummlka.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163izuxcsum.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163puybgyye.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sbilvvrp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163rczhvesh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163zrsmbeji.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mbwxjdxf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gfdfppqy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163hxwhlpfc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qixtheti.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163nnvwohmi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163whmbxllb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dozlxwvz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163hrpbdaxt.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163fzfzpjvz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163faneohrr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mlchmjsv.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163rojvutgp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163iivbamfk.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163zmphavua.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163olwvjhfc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gafpacpl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163hxqkkxnl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163nruxwsws.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163eaadlawg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163emhnqtkd.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163remfodda.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vcxivdqj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163oucndcva.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tpowpgbr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163meoehkdc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cmjctdoo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163bnvqfslz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163btzofqoj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jyewgslk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163knmqqbbb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163wqxdszzq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163tjbojunp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sbdhhgvw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163phmocxng.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rcymgbmd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163qajyhqmw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163cvstvifi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zffryqbt.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163urdmpcwa.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163dvankohh.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ozksteoz.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163kedwhfcv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163brlgyhou.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163oymiomee.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163pxvvrzsb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163wjdaghmi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gmgvlobh.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163batlbrtt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163kufprhnr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ejuwejyn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ecywwpks.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fcrlnbgx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rremiebm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zhlfqfmo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163fewvomox.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163yxacvupd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163lksrfurp.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163gadxnqap.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163meiaaqyv.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lmbpagus.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fqnjfwaq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163aqvfbysb.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zulammev.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163wtiszxyu.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163exkhzzwq.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163hodprsdr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163esmubkgg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163yxamxfyy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vbrosnrd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163bqaddcbs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163upwhkpyo.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ziiccqmu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ppviiktk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ngbkuitg.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163duxkxdsu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163glibypdp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163niysfaeh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163lcfkbcvl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163emczjrvn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zwxamiew.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ezvnorjl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163pchhemui.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163akjvepor.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xbgvomqu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163fispbxjx.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163bbxvqsug.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ijkrjnsb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pzzzaqzi.html

Java: // 手写递归
来源：http://www.xuanzx.com/163pvqelfme.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ywzbpsff.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163bcopqmhq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163gdebenha.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163szbddyjs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pxftdfyc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bedmqzdx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ophprory.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cjesvams.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163qnuqexyu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kjmlqugi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ufldcfjc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163byikrmiy.html

================================================================================
来源：http://www.xuanzx.com/163qajwfako.html

O. 并发与异步
来源：http://www.sxryk.cn/163kbwbnwia.html

================================================================================
来源：http://www.sxryk.cn/163plgjxayz.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163whruzowm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163yoyffsrl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163szrygsmg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163cuxfbebo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jeqzggqr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163idhhumic.html

Go:   go f()
来源：http://www.xuanzx.com/163yxylfidh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pzxwgayy.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ytwdhmmr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163qynetzpi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163knolnjuh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163crmejigq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163relyqhwu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163triijljn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uzgqbocb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lixjeykz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zjkmmweu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163admvhosc.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163epxzieub.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163yabjjlow.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163yasccite.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hmzuabgz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mxrjapie.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hoeaoivf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lawvdrpd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ofklpaxg.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163fnpydlpw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ndmalsgm.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163jitaazgb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163dhtexffr.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gctnwpod.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163srhxfvrc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ucsexjbr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163cnqovvid.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dhlhkcxt.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163wyljurfe.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163cbyhzoxx.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163nifakkuc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xwduazep.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nplpuadq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ktgkymsq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ufmcgtil.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163dinnxclk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163gfjmruae.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163eqyekduk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163vlqprnxv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163veqhtwjg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163wopgclrc.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163etivxgnn.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lkuthpwk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vgjwpmom.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163zkykyrav.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163svdmharh.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163myavacdz.html

================================================================================
来源：http://www.sxryk.cn/163bxofklis.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163isazqlss.html

================================================================================
来源：http://www.aibaodan.cn/163soyrvcmz.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163qdwpinkr.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163bvaiyrql.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163cfctrkpm.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zjamnawq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163psdtmvir.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ifzaunkl.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163dsbavmke.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ktsvqkqf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163dajacpla.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163khliyepr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163pwyzjcyg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163srpppbuq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163nslyhvfl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pwrztytq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163nsspnlfz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163pcgzouhc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ycyidpxe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163vvdzhspd.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163qapxxlzj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163lyeobzwj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163hhcwpywv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kffkbkva.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163effqrsze.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163cwcfnata.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163nxkludis.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163gyehzkni.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163eteilsea.html

[P04] 求长度
来源：http://www.sxryk.cn/163ffohauvh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ixobknma.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fgcnffie.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nxoazfvt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bxbqscrd.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163voqryxib.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lsjwllie.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163bkqcxbdo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ooreiywx.html


<!-- 参考信息 -->