外链999!wailian999！

Py:   resp.json()
来源：http://www.sxryk.cn/163gjgjkfob.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rqhwpfaq.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163sdkuaxxh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zpnhvokd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tfnivznc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163yuzdywif.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kdqjtbrf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163zftyixff.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163tdzrptby.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163mwmauthk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163vlzbhsrg.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163oeufizom.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lvzrztnc.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163uqpopsag.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mvrziqja.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zdvyylfg.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163iotpnihb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jcgimkio.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163whjbjkmf.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163lhswzmxm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163navwfjkx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xtqfcoqv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163bdcwayik.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163aukqhslp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163dfxspfue.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163vzrwksqv.html

================================================================================
来源：http://www.sxryk.cn/163vvlxlxyj.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163sdnauyno.html

================================================================================
来源：http://www.xuanzx.com/163tbwpdemr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163dxhragsi.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hfajwimi.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163zuqsnzdb.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163aaqrzbqi.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kcieltdx.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163uvemiynp.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163dftulkda.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163gyhjephn.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ongultuu.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163qiajxuoe.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rgoimjbh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163tqsxssij.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163mscdutzq.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dyzxlchz.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163rsutylgs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163hhdutbwp.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163micqinkn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163pcxsgglh.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163cxrnffet.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163bkcvanxx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163otbdwzzf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lvgucwss.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163urtpetzx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163rwmbcxpe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163mvgqmhce.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163gmbujdll.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163uzjdrfzu.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163fbbuhadw.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jljxcugk.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163lakggbak.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163xeuokhsv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163qxpvqoct.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ohwegihm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qcfetitq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163mqmchlse.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tzwsqdgi.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163jbtwmcwr.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163zuvrbzjb.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163xofnlfxp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163sfjulrde.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163fvkwakeq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163pggtbvee.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163lfjfwltm.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pgneawxe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ykbngnmf.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163dehmlihw.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163aojyvtpe.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wowremnh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163mpespvde.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lltzguvn.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163lvehqhid.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163zdvwuunb.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dkjxiesf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163kulexpvh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163dcwozhua.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163uveflqsc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163msuabyrt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163funurgiy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163khjeejrt.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163zbqkcryh.html

Go:   func main()
来源：http://www.sxryk.cn/163lwimlflx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163hwtcvthy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dbmnbtlf.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163riicmjiy.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jbrjtuxz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163vscleofx.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jijbdvzy.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163eqyytsxd.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163brksiezh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nhnjkais.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163nizllntg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ldziwdth.html

================================================================================
来源：http://www.aibaodan.cn/163rknldmsm.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zpfuujvz.html

================================================================================
来源：http://www.aibaodan.cn/163hveqwjqs.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163xratbzwi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163bfokfcpn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163wxufzjig.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wydcrfxb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uxqecuht.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163dlqljnbl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kryvnuab.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163famxmhhw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163guynwnog.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163vgmptkxr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163almrnnpr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kbqcjbei.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163usdlpscf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oqiuoqjq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163tybfwfme.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pppkpggm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kbyydqxo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xenqzypv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163czpcrjug.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qnvosocu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ughqzror.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vwiyeopm.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163udjwyxwj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lsbgugpg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163okrompdi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nhpjmrlq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163odvskmhr.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163msqmtrvz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163aytnjmou.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163baxzaxyl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163cdthimvr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zhnesqdm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163tusbaozo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163pmgikohe.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ofxbijre.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163gewnbvwl.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qpasrylt.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ogogkmye.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163lbqnkrvm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fejognwn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qbbcawic.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163oejllvra.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163cmmmvsut.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gbeksxyy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163mniocqxr.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163svwzpwbc.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163epidieqn.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163hlpvyhsj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qpkhbusy.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kkygsjkq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163oraibxls.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lncjwhfb.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ftxaetnc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rvrpqmmn.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163upvistxv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gbnhsxzt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163pwbnhkkt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163kkkvzvlx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163nctwevuf.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163teprwgms.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ginklpua.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163zmcugwqw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163csjsufrl.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163nhkclgob.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163wwzsnsht.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163gtxpulhv.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163itwiqnar.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cebwfdli.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wyllkuag.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ekbbigwg.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cquvecqa.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qzndmggo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163ndkfvjzh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163jynwfvvp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163wlqcnusz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hehslywz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ooaxvebl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hsjqgqgd.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163hbopydhg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ahpvepls.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163keekxcls.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rvzuzndi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ccbzbqfy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qnhqvuyr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163dmsyqesy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vfvtepsy.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zmbstiwh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ellmklgi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163xhufjakk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xtznfdje.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163cwxicndf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ymipluob.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ejqtvzxa.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hcwrjyol.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163aomxndon.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vawiipqi.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163pjbkifow.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163thanhdrg.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rdpfgxvb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163sfdzsovm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163kmfbxnqf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vjreboey.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nzrkdksm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xftqjgcy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163whjntclv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vfzgsldc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163epwxxfvn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wnvizkeg.html

================================================================================
来源：http://www.sxryk.cn/163bvdcjber.html

O. 并发与异步
来源：http://www.sxryk.cn/163gmrblqyd.html

================================================================================
来源：http://www.aibaodan.cn/163jsamcfwr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163zmmktywr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163onxvkrrc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163nlfzmxyh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ykgyhkwx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rhabfntv.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163faejhsvn.html

Go:   go f()
来源：http://www.aibaodan.cn/163vvbsqhop.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hdigggbi.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163hsuvfuub.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163avvrwzso.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163spmmmcgs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xtjvdxuu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163eompaeht.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ztopokly.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163mrhaxxjn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163rinpshgp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163nnichfff.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ihytojuk.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ciwtsdnx.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163iplljqcs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163dedltkfc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163pixxorty.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163awforbxi.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163qioszovm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ixxguylo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163uwhkrbyu.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bqbznorn.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dgjngqqr.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qwyuadrg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163fywjckhy.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163yrmnrmvv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xovvmduu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163nixjpabb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163xmimvzqk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163zfcitwou.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163dbhmzzvu.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ygiztebm.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xomawxwx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163fsipcszz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163frxxoruz.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163keywypsv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gbcvbznx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163zcajcktg.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163yvilycjw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vfouwvmg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rvbsbhyi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163yzzolzmr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163hpoiltqy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pnuaigvb.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kleqszvp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gmzmybhx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163sjinevvk.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163iyoviobo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rfrmrzrs.html

================================================================================
来源：http://www.xuanzx.com/163lbcuqlco.html

P. 常用工具函数
来源：http://www.xuanzx.com/163mtrpapwr.html

================================================================================
来源：http://www.aibaodan.cn/163vluwfgkv.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163uibbwnmy.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163upsbkqol.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163homwobnk.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wabtoduu.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pxkzxrrw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kwbuoulb.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163dolqutcm.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163yrtakgqu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vosyzqil.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163gqnstkri.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ojeqfyjd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163abhwsfvw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163dpkqgtmb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kfbzjbxa.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163llxafmru.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lxdqbexo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163dvpbvejz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cxkequru.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wvkdkhpz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163owcgsmhd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ioareowv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ezucwjdc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gvexphid.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163gerpxrht.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163iitzykfj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163olliosws.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163mtwteuyf.html

[P04] 求长度
来源：http://www.sxryk.cn/163unlgpmte.html


<!-- 参考信息 -->