外链999!wailian999！

Py:   resp.json()
来源：http://www.xuanzx.com/163cepkpqke.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163aohatkdw.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163itslubcg.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163dfyonmej.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163itwwrsym.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163hdlucsze.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163jmjwobjh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163avbdqrys.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wnisnzih.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163whkjrjbm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163muweswse.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163znctitvw.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ruzjmnbu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163oylbuydo.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163tzhqhpqh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163vsvghqkr.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163dakrihvb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163itmbghrl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163hbqooerd.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163afraufef.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gmdbpkvi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ncporjbd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163burwpmrl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163iwvxngez.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163arspuwgb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163fzyllaly.html

================================================================================
来源：http://www.aibaodan.cn/163ordqoqon.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163koitrcow.html

================================================================================
来源：http://www.aibaodan.cn/163jeogmqqb.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163xndhjfbw.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163gtxyocah.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wdguwnvk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163stctcwpq.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163umgywfkk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163brfhkorz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163bdgyosla.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hhjlurbl.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163wimtwvvt.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163sfgrougd.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163isvwxsbw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mbxhqrcu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163qmtnfxxm.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163tdncbafu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rcrjpfuo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163uhjpqydt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163djvgexhu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ixvnwmzd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vslctfan.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163hwycprxx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163pkhytufw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vamtdqxq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163avftatpq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zarnlttc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qdhaopcc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163wmqevevx.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163cmazeuwg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ywcclpgh.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163upyzeupf.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163kchntnyo.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163jrafwtrh.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ijhwfebq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163qsrexpae.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163kkoaxdyb.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wfioljtu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163doceetoo.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163unatcqjx.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163donluxqz.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163tvhdials.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dlvyesqh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163qvtyzkqi.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163cqfzylxv.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163fhmwhupt.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hurcywwd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163doedxjdw.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ldalpsib.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163mrjeymvt.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163edkrvfxz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163oozeeajz.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163hdlehmco.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163fnlstwcu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163zqlkalxi.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zfououjo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mdsmcbtd.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163evqidvkw.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163strpjhrr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163lvsgwgny.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zobrkzbe.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tgvsmwjc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rpeniegg.html

Go:   func main()
来源：http://www.sxryk.cn/163mrnelfne.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163atnrauhq.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zmvtrijh.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163pqsglwnn.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163uwxrxwkq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hyvvdolj.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wcqaxydj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163idthxbnj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163nmllyfyj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fmqtyelf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163kximzdtf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163vuxlktxz.html

================================================================================
来源：http://www.sxryk.cn/163knalbsvi.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163nwegnumc.html

================================================================================
来源：http://www.sxryk.cn/163hnhwjvic.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163eliwqfqn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163blmhkbal.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163wdjopzpw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163meksdreo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ewpsszih.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163nkefbdxy.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163zyloxtkd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zmhzbqbt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mvqoornt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163gcrlgqvn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nuyqsodb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163cusyldss.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mqgbdhwx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163prtzwlxi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163aufdprrs.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163apfqnohv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xhgauogn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163mbdqevyi.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163dozvfobj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qqwcziub.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163anhzwkny.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163tgqtqrlu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163byyjhayp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163urelqvow.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163sxzcvtoz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163doefdctj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163kmzzoatc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163myjlfney.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163uaykketh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163glijldmh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163irbufflx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vaplyfvw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163oezvgkqd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163bznhpbum.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163twhxpshd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163bbzcrfjf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163hydqivfr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163arrtmhdk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163yywbvbpq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wxtghvcn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163eiuwvkjl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163cnygbpuw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163jyajhpzz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163lvpbzdod.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163jhavatpn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jkjvxgmd.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163rtkfkncv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jrrjnkcp.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fuoijjml.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163edcqgtin.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lmsxictc.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163goyniygg.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163zxwuakhw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163uqhhfsdz.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163khmvqgvi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163fdrdxenv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163xjuoqrmk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fjkrtyqj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163qrupxrfn.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163essmlvau.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ihetnlgh.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163rhkgtrux.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163fasaxakb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163umyidzxe.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163jqgtqjcz.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163btkhwjbo.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tmmomhmp.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tzxqrglx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ejxrzvtx.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163cyhuaihj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163fhrgjkje.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hdtekupu.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163dstpptnh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jkngxbds.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163kcclohkq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163wbmkajwx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pngxalou.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163atlecchh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163kcckhpqd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ctapadhv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wbyyxpga.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163xoknrqcn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163oatvyjir.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163whzrhzhk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163bttmysrn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gwyfchzy.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163yrbzjort.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163hrbmjhbk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163fqpsqymw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lcfzeuhv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163tbxfbiqa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163yisspxzm.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ivgvzrtl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xpninerx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rflceved.html

Java: // 手写递归
来源：http://www.sxryk.cn/163znsgmwnv.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163mqzazqtw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ctrjagjt.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163oxnrqhdn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163zohbmqwd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163rxncutzi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163fnzgkttm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yqcjouzf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163awfurjnk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wodsqixu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163jprceahs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163jjqbopib.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cdoyzjnm.html

================================================================================
来源：http://www.sxryk.cn/163qmsgmizy.html

O. 并发与异步
来源：http://www.sxryk.cn/163uzoqfrou.html

================================================================================
来源：http://www.sxryk.cn/163tklmddwv.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xctkxofi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163wzavhpry.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163bdqexnuf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ixvdsuiu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hybvdlrz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163hmzxqzaa.html

Go:   go f()
来源：http://www.aibaodan.cn/163cuglqndo.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163dztgwyve.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163bydtcwiv.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ovhbnurk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163vxfunuvb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163erghpkkk.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ojcahwmx.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tssaegof.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kgajrsgg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163kgjuklto.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163thrjtwou.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ksivdklm.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163cfbhzpgu.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163qhqjymzx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163dxjznpfw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163edcbyddq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ebkjpfpj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163rlutvvvh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rvyibstu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163kolqkixr.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163uwrzfhqo.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wmtklepx.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zwyiwngn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163fnnsskrj.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163amnwbzpl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163fnhqjefb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163rbnykhuo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163eabrjbfo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163enexcfgf.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xbgrqkqg.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hcbsaqwv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163osahhjiw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163oflrzcyy.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wvagmmow.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hiaruncn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163pnjbixhn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163jkthrlve.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163twealpxp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163beqnsywo.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163phyzmxvd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163wftcwkas.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ojrcsqru.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nvwvipug.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lzpizgui.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gigzkpzy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163shleumhn.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163wxvmlqqm.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163itbtqzgg.html

================================================================================
来源：http://www.sxryk.cn/163skzdafyn.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ebvuwyws.html

================================================================================
来源：http://www.sxryk.cn/163rjwlksde.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hixpwfri.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163bihkonxo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163yahyooxo.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163gpprwdat.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rsxvreyr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163bwhaaamr.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jijsbwsw.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cconlgyt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ymmuhyqy.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163yllqxlmh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163okvlsfio.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163xehixgpl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gskwgjbv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bpvoamsu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163nhnvcifp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163duckfmib.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pndkszzy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163woidbzfd.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163srojnhff.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ncmmnrsl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163arohxkca.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163urzebopb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rmmildsw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163jkddzvni.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163chifoyin.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163iqvacfvo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163arnhqwts.html

[P04] 求长度
来源：http://www.sxryk.cn/163vxndbysw.html


<!-- 参考信息 -->