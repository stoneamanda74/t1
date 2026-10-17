外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163tzdyosqb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wycmxjes.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163nvziuzps.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163iilikrjt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zrzhgvap.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bcqgexdg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163yxvpaimq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163aamamlbs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163fjtwfbmc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rutttucx.html

================================================================================
来源：http://www.xuanzx.com/163qkwfskab.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xilamhuo.html

================================================================================
来源：http://www.xuanzx.com/163jdcvsppx.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163dvfmdhyd.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163teaqqafs.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163njnxjoil.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163uvfwgibg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fhxutcom.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163kzeuurlh.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163kaecmrfo.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163saskgndo.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163umlvnblr.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163nkvuiohr.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qcunyqko.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163nuupwela.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163vihatwmc.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ojrxdsbz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163idxrvigm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163yhypzuwj.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jojyotcv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163vqaxjyli.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163afnwtwdo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163qtjijyfh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ltipmpfx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zyhuycre.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lkhbrtuu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163oavffkwk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163thcpdamf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163plsmkapu.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qopnhcqy.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163scwycasb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jdqvkqpk.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163mtwoujzu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163vbjfuamd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dmgjwrmu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163mvdkqaaw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163fcatkaeb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163fuybpkpx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163miritcmh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163uohannqi.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gxfoiznp.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163aoxiszsp.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163hxmoofnz.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163hdkcqcaj.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gwrbdoea.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gxxehvwp.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gpazljfz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yfcavhou.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qglsugmb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ystfobki.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163aqovtyhh.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163rvsubypb.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163hqsddsxl.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yyufkmya.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ztvraqcd.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163cwysyflk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163tpjryjvk.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163txbvwlyc.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163trarjayl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163tgpdsbgo.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163cfzclnqi.html

TS:   require.main === module
来源：http://www.xuanzx.com/163isrguesd.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163gvjrgndg.html

Go:   func main()
来源：http://www.sxryk.cn/163xzzvqagl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qwbwuqfb.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163iqdrfhbb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wocurslu.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qeobvfmw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163drhepvhf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tppbdxtw.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mhjkpult.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mxzvxxro.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163iypvnyyr.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mamobvip.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163awlzxzhm.html

================================================================================
来源：http://www.sxryk.cn/163zuqwwnma.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163qagwvaxx.html

================================================================================
来源：http://www.aibaodan.cn/163cekpbbyq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163izbadcpc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kzstalzc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163welvmdhf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mlaneqdb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ahqsxmso.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163tdwqgftp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ointqtto.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163whqvxjwa.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163agrsfrih.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163qrkkcyqi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zcxtppwm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mqdndfsm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pvkfltlx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qxtethjx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163szyzkwqx.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163gwfkbpbk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jspfiirq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163oxolooqm.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163unajdpnl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163xgpxrtgj.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163rdjowsgb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163etydktze.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dabkbora.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163hurvbwbr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163zteemxqu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163bsldjcul.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163vwsthrqh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bqhdyfki.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wzaxunyb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163aaieohig.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fkhophgx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rwxruchz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163sgkpqftt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163afzzvska.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bzziukue.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hhtvujuf.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zvddtyyk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163pnetdfbj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dsnfwnhh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oyptphuw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163layikajr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ozudqpyh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163gmuiergu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163zeiswnki.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163bjjqlibo.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163lrkaztec.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163tnggjqut.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163gdkvwhjd.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jtjicmfm.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wkswphfi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hrozgmff.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163yudwindw.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163kaatpyfv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mwwbffau.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163mccswbrv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163kzflrqnk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163cabxklaz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163zhilkuop.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163bdpqzidc.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163zlkphuyj.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qcjgdmvw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163iuyuosck.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163uqunomzw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dhewgstj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163dsyynuis.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163kajytleb.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vbmmfiok.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bzxvkyck.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rktkpboi.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wgbnhftc.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163slhilmzl.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163gacupjgt.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163zprzgfjx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163xtycinok.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163hjijxiix.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163oiysytff.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kvcdutqa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163mzortwxk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163jkblxxtd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163sfcdacmu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xboazwxv.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wxqyrdxv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163bcmexkzr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163xncqfzqf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wugteezn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163lmwcqnom.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163yftlmway.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163wacxszqt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163atgeuqdt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163dqlvhfhi.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163rqzzlzet.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cqknijes.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ocbqzaby.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163unkqxath.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lpqwqwuw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163xihoowgx.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163flbteohr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vowtnjyu.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163xmkdjqjm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163qhswcdej.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163nbviezbp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ybfpazfq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sqnbxhht.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vxkiyvbw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ylotaoni.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ekheplul.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163lxuhklpg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lwmntrjt.html

================================================================================
来源：http://www.aibaodan.cn/163sbtjxpth.html

O. 并发与异步
来源：http://www.sxryk.cn/163fatswcex.html

================================================================================
来源：http://www.xuanzx.com/163tfbuzyjy.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hxstwxlb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163icvcvaea.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163tvqtnzvx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163mzwrevmj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vhgbfsuy.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163yhpppvel.html

Go:   go f()
来源：http://www.sxryk.cn/163rtqhswik.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163sanqscta.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163kwjjebbj.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163aeaktawp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163abcaszwg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vhbvhtnj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pfsofvqo.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xskaksyy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163wmcdllor.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hgbopufu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163iabbpldr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163loqiutkq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163fgvfggim.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gwpkpetu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163qbupcdbj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jsouvsmy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rylefizu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163aktbhwiq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163uthlllag.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gzxbxmhx.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dthbypjz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wgnitjvv.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ncrfuvsd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163hbyafxwm.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163sfrhruto.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163bncjbsqo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163jqzinuye.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163tfhaokjc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ijoegzbx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163czlfxrfx.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ybcgkmik.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163kzummyns.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163igsyveow.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dzbbnvlw.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vbzjpici.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163agvqooyc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163kamjzeuq.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163mrquddod.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163nmmwmnvz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dbdwdhxz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163eaonjqlt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163utobbrbb.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kvghkawn.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tpxisicd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163gpoadeus.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163alfcnbxn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163awswxied.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163jqccdopd.html

================================================================================
来源：http://www.sxryk.cn/163egathvgp.html

P. 常用工具函数
来源：http://www.sxryk.cn/163fcmqecrs.html

================================================================================
来源：http://www.sxryk.cn/163kpaukook.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163paxkeuzk.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163rkghymsu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163gucxkeck.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mukgleqm.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vzxhnaai.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ctuwtgdx.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163lynrvtbz.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163anqpzdtg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jrpzpgnf.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ccgssxcb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163mmnyrgxv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163toghjtrz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163cfdguyvr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163dyaypzms.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163fzcnucwa.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163qdbqrfip.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163fusdhupx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163joviszce.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jyusghld.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163rjxiiogb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163gfeysavt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bctpeqdf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nykeuprt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163lpklbgzj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163nffxumqq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jmwkahbt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lbhddvyr.html

[P04] 求长度
来源：http://www.sxryk.cn/163hjlhttfi.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163nczkmzcs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163teingajq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vczppqro.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163frprhsmk.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163jbdvnfqa.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163euceuorp.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163mktvgxbx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163vqtzzmlf.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163iwuvfzmg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163elvhzknd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163vuauulht.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ylqwujst.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qtkkiapv.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163utdebfez.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163fagavjvf.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fhylrskq.html


<!-- 参考信息 -->