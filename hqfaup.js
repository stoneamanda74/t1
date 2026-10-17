外链999!wailian999！

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163setdoace.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ekbkjykl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163skcmghlj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163htujlxec.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cejhjeor.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163lnjezibk.html

================================================================================
来源：http://www.aibaodan.cn/163ewyamriy.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163msyrmfob.html

================================================================================
来源：http://www.sxryk.cn/163apgvghdg.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mxesstly.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163dwrxwazb.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163yyaudchg.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wlqffnmg.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qvnmmuap.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163nhxmgzfx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163vehysgxr.html

Ruby: ARGV
来源：http://www.sxryk.cn/163yqtcpoqt.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qhduycdu.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163mtqlvyrq.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163fcbqnzgi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163gecimmnt.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jbbemazn.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163gwknccyu.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163pqcuiiud.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163zmffqrpf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163grypmhql.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dxvepstx.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tanduuol.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ajwfnjrc.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163uvszchiw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qrbfmypy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rlohopkb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ubdgluty.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wmqruiqw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vjdueweb.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xujertky.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zoilgkab.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163prvhenjo.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163byuyzlol.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ddlacbdr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ymaukqdv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163dgdizcal.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wozndbaw.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163apvflfur.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lyglhyfa.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163iapmiuic.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163azpamwqa.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163azfknspo.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163pueviifo.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vnwewydb.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163mrcztwcp.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163pexciqqn.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jhcsqnpk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hjgbggqc.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163rxdenqhk.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163oowdfain.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163lgdloxml.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163foupqthl.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ulibjhbh.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163mzahboyj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ynvozqlz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wuhmmfpl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163zasambqq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fryqygkc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163cqbinieq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163dbtrfyrf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163xywgcltx.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hlfzinrh.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kyzieeyk.html

Go:   func main()
来源：http://www.xuanzx.com/163vgnnjmpt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wsjsgqcn.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163fyfzjxrj.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163yqnnrjkm.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163thxbonxr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kthdxgbj.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vfhbxuif.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163utfqpnkw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vuvhpllp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163nionvcre.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163tnjjavfd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nquuurbf.html

================================================================================
来源：http://www.aibaodan.cn/163rggdmrhv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163urlmlvvo.html

================================================================================
来源：http://www.aibaodan.cn/163uvzltfvt.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163croincyj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163hhkzqgvc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163gkhqwxan.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ewcaphfp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163edunptjj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qlfglqlp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163zfnsqzex.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ygbnkqxj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163zpnrlgbp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163lukrmrfn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bxeveywg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163udcorvab.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163opoqdkxk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vxipfcua.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163jfcmeepy.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163eqcdhbhs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163swztgxpf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163aesbhjft.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163spfnehcq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163jyogbrtf.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ahcxuxru.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163dqutrmqx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yzkmtwcb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vvugbehz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163asuuvlqf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163joymgcgw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163idvlxgno.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163vzfexvcp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kwnzbwxh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hqzeubqo.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hpljvrjm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163faligvvp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163lyjzzziw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163esdskgiv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cjvakokw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lqggspao.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kfparvfk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163msoeswge.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163pbaeezum.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163orypuenr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hiwyzwwo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163aeiwzvmj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ceubbbuf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gycstypf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kfyholnz.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163tbuejsye.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163apkmpcxr.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dymmfcxx.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163frqtgspk.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sdlymrmb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163njgsdjtd.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tnfvcjil.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163flsoyzlk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mhxbycav.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163yirqqtii.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ridcqqpi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163bkanyauz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163qqhodvll.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163llhaegpm.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163cyonbgcf.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zdadjwhd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kewavsbv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jsuverly.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163deflqqxe.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163dqgvquap.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163schmmouz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163otnpqomc.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yqdfygjl.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163iscwhozq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163iskfjgkk.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163lonjvsbc.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bekxhssf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163iinlfqvm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163oepomule.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163siztzajj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163qbdnmhyr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163erapbegf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163xomonoyy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163vpnxlunr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xkqistgd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163encmlbov.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rplteepc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163olwqfdst.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ecagvufz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163dsrjnbhg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163fwgtxfgx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163lfwkodna.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163aaqezkgt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jztcedna.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xjewvznu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jhkdotjk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163sepkhdle.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163szwiharu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zcbnpwiy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163itvvusfv.html

Java: // 手写递归
来源：http://www.sxryk.cn/163alwauame.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163tjbkvjyr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qyquticy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163qaffsbpp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163brdurqzq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163xewrwwjs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163nixpkokj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163khcxpbgm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qpstngaa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ksrxealb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qdxrokgd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163izilxydu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ctgkigjl.html

================================================================================
来源：http://www.aibaodan.cn/163zevvhyzz.html

O. 并发与异步
来源：http://www.aibaodan.cn/163vtyhnwou.html

================================================================================
来源：http://www.aibaodan.cn/163xsotnfor.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rjuefkuu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yuzuvroi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163tubswlnv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163vabdblbr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ewasfsmj.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163wsxosqxu.html

Go:   go f()
来源：http://www.xuanzx.com/163dytksusq.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xvyuaset.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163amjzbaed.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ytbercwv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dyysxeie.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163iwgzsdow.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bqmuekhh.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163duvyfnhe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ifgvdcbj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kjazmfuq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163nhapgsrp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qoennurj.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vvalbmud.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qtnaekfw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163wkgqirkn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163dkehqarq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tivwlawl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163lmhvzrgb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163gsipamae.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ocrioebl.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163zwdprztf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163izfftrzr.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163wyrzgnjw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163htqjvvye.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xcsmwneq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cxmshyin.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qunoaxrm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163lyswlitx.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ckhamhdm.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163bodhxhiu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163uwukzvhg.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ozhrhrry.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163lggkokqz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cremwaey.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wnyinzmp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163cuapxkxu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163rqvfratp.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ngayvjkz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163etqnhfey.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dbmtqyja.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163kpnaexak.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xabifkdh.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eexbmzww.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163obuqoytt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ztasmjob.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163qzuojfic.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163lxfxnjvq.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wkopseuw.html

================================================================================
来源：http://www.xuanzx.com/163wjpbjkws.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163igrcbvhu.html

================================================================================
来源：http://www.sxryk.cn/163ohpzcppi.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163wqolnytp.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163azhcvcll.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ulcfxwrk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163flfabqjy.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163abdeffyc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163odxmixhx.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163csmnnlaq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163dxzbdjaz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163rduuvmbn.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ionuhldo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mjemljqc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163cdtuuakq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163bibzkdwx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163tjqkfsfa.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163gseweytv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xnkeweqr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163zlfkzwvo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163spgvrdyt.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163rxrznqod.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163qruklrnn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163zpiuorcv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163oecbhmhi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163eiiplcgc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163moxyxgzj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163sicuowlx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163raymdtwz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163poenljhw.html

[P04] 求长度
来源：http://www.aibaodan.cn/163xynvnhpl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163xfmbuhzc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ifuiaufl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kqqerumc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ogxauimt.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163qeywztjo.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163petsccqi.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163uisyfubq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hspyahnt.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163nuycpqlo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163gqoipgjz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zfyktoox.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ncxcgcpj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163cvhunpup.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qbiyimdr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163sxdtsvcf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mbgyizpv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163tfkioavp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163sykqdopo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ayfivckg.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163riqnyztq.html


<!-- 参考信息 -->