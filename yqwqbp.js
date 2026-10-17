外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163avtscqtv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wtcktslw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163zcoafvhd.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163whyccugm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163upbgzstq.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163fvynhubn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163sjsqbgfk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163vcqnmaib.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xezqlmnb.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ehevxroq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ajnqrtjq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rookrfyv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163syjqgdpn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zbfslxto.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rswuaabm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163hiodtipn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nftkidxs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ubewdwkv.html

================================================================================
来源：http://www.sxryk.cn/163krakxtiv.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163oqzxcptx.html

================================================================================
来源：http://www.sxryk.cn/163cdaseuxo.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163tjxohbfn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xvoovpqq.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163cplpynjh.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cojsrzgm.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163twbgywnn.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163omufkdby.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163mjajnxon.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163lregxhom.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163npzzsbak.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163aipxbtha.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163tasweogb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163wybuysjn.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163sntbazcf.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163lgkknupl.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163ydyrexrw.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163fyzlvcmp.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163qtzuqcld.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hajtpmhw.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ltneiduo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163cdbkvnpe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xfsikdmr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uxsbqjoo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fcwahknh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163eupizzfw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ugvymyij.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163lgdekfgo.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vznpuxjd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ekbsmygg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rozsctmd.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wbjmwgym.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163iubvhnkc.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163rityzsig.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qygkvfrv.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ycjxmrfh.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163boilyprf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163syovcynk.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163tldvhvch.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qjdsjaci.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gsanzcne.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ujbwhiwc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163gsqbsppu.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jsxdwsra.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ugatcghf.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rvutiprf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163cnjsopje.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163mfwpellk.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163alpaqnmp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163kouyskgj.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163tvgktuye.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163blxsvnhk.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qtyqrzjk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163opktdtdh.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163lktyvmds.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qgpmawgq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163xxuzmrqq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163iaiisjkw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dzfrxoxb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kgbdxjei.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lkretzhz.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163qapqamxt.html

Go:   func main()
来源：http://www.sxryk.cn/163mvsxatpi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163bsncfvhm.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163kqcvmnqf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zjpnaezv.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163mfypizzf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163nnkzmpmy.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lhzvnvry.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dlltuvox.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163gkwqdrcm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ltxxsmnq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ibnnimdw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vexrfseu.html

================================================================================
来源：http://www.aibaodan.cn/163apxbfnbb.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kvbrxplr.html

================================================================================
来源：http://www.xuanzx.com/163cetwqtqe.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qwkoqrgp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yypkjnan.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163xotknypj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163amilxqnc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163beehpstd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163onytjmlq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163oluxmfwg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163lmxhmauh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163agnfxdvh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tdduvkin.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163oblzuxbi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zubxjrkq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wndfolli.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jhuainry.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163pyyoltcu.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163wwzwmspz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vezsvcvr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163hmmfswot.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163gqqhdwel.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163pvitpoji.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mfyspqil.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xbialntz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163efwcgtjl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kajifvsf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vdziohox.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163miqenljk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163znwgmxos.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mbkkqcku.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rjxwcwfw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tbjesmnb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163taszcbsh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163axzkjqxv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163nztxxuvn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163eqqfyipl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vxkomabc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163glqkerwe.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ulhdmjua.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163adtbksuq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163zqubfdbt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zlewbmyp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lrexjyac.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163bczezwdx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mzsiviqe.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lwqqigim.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ypebnwjc.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qtwouway.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163foqjfpfq.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163zgwlufbc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163urvmxqtf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163emirctoh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163lukhlwut.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vnagwhjn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163pnjhkonr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xcfaguvk.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163wsoxbpux.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ueinjbhs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ywcuamwv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163lscgpgqi.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163bdvcbqcv.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163yonjyitb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163wjyokkpm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163uguwfymv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163kzianxqd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163okavhmms.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yfxyzcre.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163rnxhdzsp.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vgnvvlhi.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xisjptet.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xvysrocb.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163aqszxdyk.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hpqdrfrn.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163yokevxgm.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163quxmhuhl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163gvadrrlm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163biwaypwm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vhtyskza.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wyrgbsnd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163rdxplrpc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163dkgoggoi.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163aufwgthf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ajjcvfea.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163skvzmhhh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ahhhxjrm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163gzcctobt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163hpfoxmie.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163wugpunjl.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163uznyashr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163iadltifr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163kthyjxkl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163mgsgmiti.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163dggsjwsg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163psbngfwk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163yhdovvpv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cmldtpgu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ysjgxqpd.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ekuohaus.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hwbfbnml.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jakcczke.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163fawmkyow.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jrrdolwi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vajmigfj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163abcaeiib.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qdftbupl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163izzzakcy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163klbtyexn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163udcawiep.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163zudsycyu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tpgiwcxb.html

================================================================================
来源：http://www.aibaodan.cn/163rglwgqzf.html

O. 并发与异步
来源：http://www.xuanzx.com/163syzpurgm.html

================================================================================
来源：http://www.aibaodan.cn/163jismndvs.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163tajkpvni.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ocluedfu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163fgpthwls.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xfdiznjt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xeiygvur.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163oncdhypo.html

Go:   go f()
来源：http://www.xuanzx.com/163evvtsxhu.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163tqaqyqwz.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ziglqgug.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163csiqxiqh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ileaukjt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163fukikapx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jpvowgxj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163etuolztk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163yelaqrky.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163uibqwfoo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ejlguaga.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163xtbdzach.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ycbokxrr.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ojmkzedk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163iawfwnjv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zhricorf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tzvdmkjw.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163wtqnywzt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163wneejkle.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163qhqvnjpo.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ruonizrp.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163cjlbydfb.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mjkfkgvc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163huipnica.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163pafaxzci.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163esgmynoi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163znbacqfw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kqjfbzpg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jvapeeeg.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163cgnxtvit.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163wwoibjrq.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xnqonzsb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163zwbanncw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ozmqirwa.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ebhixotb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163aqinfzma.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163lsxtsvun.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163eyghyuol.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163wjmporvr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163kutlnfjr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163topwnnaf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xevzwpax.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163aowctamw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uejqenyb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163lgaaddzi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163socskldd.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163vkpwtqjj.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163drszjbop.html

================================================================================
来源：http://www.aibaodan.cn/163wvlkligd.html

P. 常用工具函数
来源：http://www.xuanzx.com/163gsghovny.html

================================================================================
来源：http://www.xuanzx.com/163nwtachhv.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163kjdbuoli.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163vzzkjtnm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163dnthatda.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163adsxvbgo.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163mrurrytf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rliyzwsc.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163nanehqvy.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163dosqbsxb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163pqjeqnhp.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hvnwvaxk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163itshnzop.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qmbzwmhv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163tgobhvqn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cmmtuaqj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163aetaxrab.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163cpddrciy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163iwnvbqnk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163zvsrlnon.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dvjcvujh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ocykjovn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zjlkwsys.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vqaluuoq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wljvvvzf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163utnhatnl.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163hlpkbbxt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fmlziaic.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163deinfnpi.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ezvuwmyl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163srarsqhw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163eeeakubt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mgoyiqoi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yrqcejqa.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163wfaoldhc.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163runllbtv.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163pcbfques.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163geqlxjbq.html


<!-- 参考信息 -->