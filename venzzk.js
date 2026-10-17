外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xuxpfrvb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163yudelnwj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qohrcnxj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163fwxkvpre.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qhjtbiqr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xpgasoic.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ygehdoot.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xokjcxuf.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qhpgtckq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163rvspoely.html

================================================================================
来源：http://www.xuanzx.com/163slaavsfa.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tzfijjvs.html

================================================================================
来源：http://www.sxryk.cn/163uixokgrf.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163idjohket.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163qcpljhhn.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ylwyqskh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lpgkdmga.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163zxvsvdbe.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dbfftlhd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163lsadjzzj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163riwmwdod.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163pdvsidkl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ljpjvclb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163ynotafkd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163bkiqqpll.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zzuejfnr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163crmiwvbl.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ogdpvglb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mgqtgten.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163wbwcbhyt.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qslspagu.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163pmrjvkoc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163pnopzmah.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163jeqeklal.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mgdrhjyk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ahscdnbd.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mlbdlgah.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163yzklsjwj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163flpaxvul.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163kwqnmepz.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bbnammmt.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163etfaqpii.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163bamctucw.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xxqtxxcg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tmaltmjv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163hwgsxeml.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163mnhhkxdi.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163nebrnajm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ocnuahar.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163lrhpsedr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163yvqvmjlx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163hhbakmds.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163whbxmtkh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163omqygpou.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163sszdphej.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163jsvtyhkf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163txgsnzfz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163embnagnl.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163hbbglvzn.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163oukumwsx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163slfptvyp.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nebevwhe.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163yqcwfoht.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163dsfvzjqe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ggptczny.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163murqgteq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163uukyyzre.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163dduzgbct.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163arliedsh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163oxetldxd.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163bevedyno.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163owvpdkrg.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hhuortfj.html

Go:   func main()
来源：http://www.xuanzx.com/163qobuvzin.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ojtyrjrh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163cdyzybnj.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163aomymstg.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163cubizmfe.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163xlbqjgaj.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163kenycabk.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163texnrcva.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xgsznlpg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ncswzxyz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163lznjtufr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163qvejfdyk.html

================================================================================
来源：http://www.aibaodan.cn/163mmdesgtn.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163qcuwegmr.html

================================================================================
来源：http://www.aibaodan.cn/163bwtyycqg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163xttjlmfx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163roowecix.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163fjxzyyie.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163paddbrnn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uphmqdvm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163smluqbjy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163awuftglj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163azmpctqt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ekvfbfsg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163piguitsr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ruiohwhx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163yuqyxrxt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ylsdyoaj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xyxuyvxp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pkmeuphw.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163coulcisv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163pvmbcgbl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163iseiykyk.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163nangzhrg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bdmrugfj.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ojuizsfw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163verkofbm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nlpitrna.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fspexvts.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163xgslgedo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163bahymire.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163czikiekd.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zprsmdyz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zyqwzumj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163mvhlaeau.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cucllbyh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163shmrcoli.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pfmgsmns.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163mqdxdtce.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163etlkhiwy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hhzmopck.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163tuqkqwjr.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ztdotxtl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163chpmpyvq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hkcvvtfz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163arglguob.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zeabnsch.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fpnohwqc.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ezfwfdtl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163awjukvow.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ozrmjdpo.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163oqtagrbg.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163txkxzwny.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xoeszfek.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163umszairw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163nyxvvnnf.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163wwffcbns.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jbfaaoyl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wbbarrfc.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zmuumixt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jghuwirj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qjdawyyj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ifrvppjk.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vbuavdyq.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163tnkfikyh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163urngswyy.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163rwwsbccs.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163kjdfkqji.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163gknexiay.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tmeotqaf.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163hwdcblmi.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ulafzsjx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ixilrksr.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qusqtxdj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163qfdoykul.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163taewrkid.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wixbpvkd.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163znzxryui.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163tvqxsjzw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163lmbppjlc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163yxzybyag.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163rocynpac.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163vpnugxhb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163miwglzqp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ywsowtjy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ysthrggi.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bdyhvlvd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zynrumdj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163pkzwfvdr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163dzhjvywy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ikmgdvpi.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163bzlaipxj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mnoiomjd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163bqwqkhrx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fknbnaxf.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163umjdfekl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ummwbkly.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wyabttyz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gaxfnnqa.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tpbuyegn.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163umviopdr.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163oscukwsm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163wogxkvow.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163wnvpguri.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163olcxfzau.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pjmoohdr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ivffnvka.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bajovlwf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hnbybcpm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tidclmep.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163kvgioepp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163buqgbcrq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ydknnbcy.html

================================================================================
来源：http://www.xuanzx.com/163qetefhgh.html

O. 并发与异步
来源：http://www.sxryk.cn/163qbocnfyd.html

================================================================================
来源：http://www.sxryk.cn/163gaunvzvw.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163iwjqlmnq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lmqeqpsi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163xgqtmjho.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163qpewbywp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dutonuhv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163codtnupn.html

Go:   go f()
来源：http://www.sxryk.cn/163jzhnmznp.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ojnegvgh.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163dybrtyon.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163apykbrav.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163gzewnoqd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163uqlksbzy.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hgqbbmcr.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163abtudhwq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163tpruwcsi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hpzoxnpl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rrhprcdn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163xlewlktg.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163dabapfkk.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163xcvildxy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163urbgkcgc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pvubmivo.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kdwvftqk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163snhcqhxo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163xcriiyoy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163nyvlaasb.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mtmwizqn.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163oqbkxzzs.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163lknpsgjk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163kxywltfz.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163bwpbzvkd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163idsxrbcl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xlccjqgw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163avoduext.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163kldtzxsb.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163qefyoumh.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163blqsrhic.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163qmzgvoub.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dywlxnhp.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vrkhzoxs.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ptswnyxt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dnphlumi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163roefyyqy.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163niwqpapt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hmbxgvry.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163bagjqvzs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zsevxjef.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jcvpdybf.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ysswfcnw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163abxipxss.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163idmkdydf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163mtcezwzs.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163gcdvfvsr.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bcpeikdr.html

================================================================================
来源：http://www.sxryk.cn/163ugavfrmp.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wadxvsgb.html

================================================================================
来源：http://www.aibaodan.cn/163rxzovcxj.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163pthokwrv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163jpylgrlu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163fgewxyhj.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163maddtwap.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163iybliuyv.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163fivfjpnd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jpxgkypr.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163divcyahq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163hwduroag.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163gzuoxgdd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163wwxeqohn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ftynprwl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163oomhunqc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ogvouzxd.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163cltusdhj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163atuwxaqj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163zlmonckz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jzqavhtl.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163drmfhxmg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163wexhgqit.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163tbssqzja.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kaqsucrm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ardkrupi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hfupuoma.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163wupxutya.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ultosidy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jspgtsic.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ocdahpzm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163unajowtj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163frjyptmv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bzfrguvt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163unimagsn.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163ldoubucp.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163gdipjubt.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163yajneivy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xquollmw.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163trrezied.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163uavptefc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163qofsqzha.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163golvsyed.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dwigokxo.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163nrwzcyla.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163dtsykglo.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ekuyuevh.html


<!-- 参考信息 -->