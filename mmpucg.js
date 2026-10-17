外链999!wailian999！

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163btwfwvly.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163crbqnlsx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163halhzxzu.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163wpmbxrln.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lpjsfxqi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lkdlohyx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163tcqllwne.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163khldlnrs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163obrfaypp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ayjnedve.html

================================================================================
来源：http://www.aibaodan.cn/163qbxvyyqv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qpaeclha.html

================================================================================
来源：http://www.aibaodan.cn/163srwbzial.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163iueqqksd.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163dectlwax.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163btlzumyg.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163swkgvdgk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vozcrzje.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163rorgpcfb.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163zmmdatsw.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zxfomnln.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163wapihpbv.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163vmezpnkk.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mtfpvucd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163shxafsij.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163mqvjmdfm.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jnsbpulx.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163sfnkqtxp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163pndllaal.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163krroqtit.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163eeiymmba.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163sumrmrqf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163cqcwknlb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163okakmeta.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ximduuga.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163baoenuoe.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163uioeadsq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163umvjrxxq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163tbtmoypr.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163gyfkawrl.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163wydrvfoq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kpshgcnf.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163txikxmlj.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163olnvixdi.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163blpbcnui.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163acftwqpw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163gmbxxrtk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ugtcubyv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163dczfxtgq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163vcdkewms.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jctapypr.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163hteltvyw.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163offwpmvt.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163bysqqvlj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kssphuec.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163gzwjhwlk.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ytktrqrq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163olvzajdx.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163fjucwoiw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163igrlgxoi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wxovkubi.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163erziqiil.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ficvankc.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163hiuqreol.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163igjglwwa.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163bxnqkzlw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163lbkurflm.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qtokfstx.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163bqeocanp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163hdhkazls.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ghqlsfer.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sbtdltsb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163kmpusfhg.html

Go:   func main()
来源：http://www.aibaodan.cn/163nbnqmwxm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163yvodnhbd.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163gabvisbl.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163slglwuht.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163dazlebqd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163teikckjn.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qbxvwshw.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163fhozompv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ksemvczv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163tnckopbw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ukqrwdkx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vjywajdc.html

================================================================================
来源：http://www.aibaodan.cn/163nrluywzd.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163udkdrkhj.html

================================================================================
来源：http://www.aibaodan.cn/163cjwknyga.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ithkjeue.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163uudzvjgn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163olegikog.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dujabwfy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pnbbiocs.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163zttxovph.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zkebkmwe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bccvjabh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163otyxvxrx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vxrwnasi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163scviiyaq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163bdfaqleg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ttlfuuhe.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hmeapekz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163gdztwzok.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163jwngonmu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163irvuihqk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163sifcwxxw.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zseoyqip.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qrnfqsjy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163nkgsqibb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ocxzyxbp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163txyhezjb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163rvnfzoje.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163kcurkgla.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163crwjevnz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163gqzkrdtp.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lunbtsfi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kciostzl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163znxmffpj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ahyzwluf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163muuuecxv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163hznfqkjr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wydksuaz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dkvktzts.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ddsvloig.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163tqqbhvqc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163qmzmysyj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ctzudcoy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163iahfuxqo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mdqxlemr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163fcjmmetc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xqqzbhoh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163szteixkx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163damxcgga.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163gfwpbxxj.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ysdszbye.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ghvwprxu.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vxswedcv.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xhqidust.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163yjiuomkf.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163kqzgycfc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ckdfqhxx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qysjnuhf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163tejycoav.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ltxjdpme.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163dxjyeddi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163qorikoxw.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jrwcsqmc.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zrbxlhmq.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ugwpkfkx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163zniijpum.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wvinpyoz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163iopprkwe.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163lsllorrs.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ibikgfgy.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ktmkcuit.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sxyrmxwq.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163cbwcmsyy.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qojnujpa.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qqvhyadh.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vognduzn.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vpyhbdwy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pzqkoveg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163nepbobph.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163yoegnxpo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163glcmfeth.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163uztnneou.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163rnhletzu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163aoruehet.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tuxpbycn.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163kpfbopbd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163negnbqnr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ojnriodo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jodljdgy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163loxarxgw.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zffqxfcu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163cilamhfb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ptoalbun.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mnjjvsxe.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fiuhxglu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163uwecsrbh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163nvzkvied.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jqoatoin.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wuroxvti.html

Java: // 手写递归
来源：http://www.sxryk.cn/163svsmtznz.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163lfojgevu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vwcwsoaj.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163crpbmyma.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163yvprwhgk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163uhfenukn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mzjgnspr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fxetdnim.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sphgqvce.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hjucgxzj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163uophbscw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163kkfdusxz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qhrwoxzn.html

================================================================================
来源：http://www.sxryk.cn/163evyyryzz.html

O. 并发与异步
来源：http://www.aibaodan.cn/163scnktyao.html

================================================================================
来源：http://www.xuanzx.com/163esmqyugt.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163tseefdol.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ihnedogc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163nfiatyns.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163rmixlzta.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wggrhmcc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163njdayltn.html

Go:   go f()
来源：http://www.xuanzx.com/163zaarsxjo.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163iseixaea.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163esqfniio.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ftbtnkgr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163jjzniydb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163rsysrtap.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tyhlzgjl.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163aqtskfon.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163tvqopurp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qprzvwlw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163kiupciru.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jntzuspi.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qaktpego.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163iemevzpx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163iurwfsvh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163tsfgeodw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163oyoxigxe.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163akwhqeyy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163jpmghrva.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163gifpbyxr.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163kzlejkyc.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163isbbznom.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163njxjjuym.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163clkznsnj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163scanldft.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jljhnrmj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163pzndregi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163yhbfalzj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163itvpluaa.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wfwviafa.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163llursrec.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163gxtbbkmh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qcawybxe.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hjfyxulu.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ybqzhqrc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163romsutrl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163deoxvbss.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163zzsunvzv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163hucdtrra.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163amtgruha.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163qvsehnww.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rtyqhuxz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wppiepkw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ziypzudn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163drhempnp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163peziqdmf.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163jauwhbic.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163hsdmdidr.html

================================================================================
来源：http://www.sxryk.cn/163uzcfrhyf.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ygoprquw.html

================================================================================
来源：http://www.xuanzx.com/163coepqbnx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163pizbdhqe.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jleiqtxq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163bdxrspwi.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ourrwnyc.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ntnnedub.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163cnilcrse.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163btqgluzb.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163pcmwzwzb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163xnyotaoj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163tgidkwvr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163vbgspqmt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163linuzydn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163phjxoldb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dgcwxsbo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ushuyfpo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tupzavdn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163gchgsybg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163tnnhyyid.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163czzlffye.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ehxriyau.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163eblzukdk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163elutycqc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163azagrtsv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zeaakube.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163wojwizme.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163zsenyvco.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163cyaytwbs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pdocmrsk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163rimauszq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163rfhqcfxk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163infjosnl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cxxiuuir.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163epunhjbk.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163kbmgmhwx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vosecgcn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wrgtkexy.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ktripuhl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hogzjrxg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xptvourj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163kqecqoju.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ajguvell.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ezhvezyu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163umnmhzxr.html

Ruby: a == b
来源：http://www.sxryk.cn/163vikkidkj.html


<!-- 参考信息 -->