外链999!wailian999！

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163rjrjdvvo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163serrvxpq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163zbuoevxj.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163eiygwmjg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163olukajgh.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163bhjqbxyo.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163bwwgagib.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163zilpoywy.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163bkipsvum.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163ounqyafb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163yogdauvd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163afbbbkxk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163gpfyaiud.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163sgxnwzcy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163rahkwrwb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kktqamoy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ylsuxqvm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163uhfnldpc.html

================================================================================
来源：http://www.aibaodan.cn/163tvfhefpm.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pdgqnhpk.html

================================================================================
来源：http://www.sxryk.cn/163zaycpmkt.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163fxuskaut.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163euznougd.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mwicbjfi.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163eufzeuis.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yhhloygs.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fcggnzvj.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163uxjhpbme.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163tjbefhku.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163omguyzdo.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163efmbkbyw.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163onaknpnh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163iebjjesd.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vljmqjqa.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163hdhogzks.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ixhpzcux.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163lblonlgz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163opnyoerd.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163wsorniri.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163dbpoinia.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163olomlovs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163bonumdzc.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xecqwecx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lqnngmja.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163dfxiynxb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163auerfoey.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vmxrcqes.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163clecjncr.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ujxpkieg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163emzgwnsi.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163zblalenq.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mjauykcf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163dxttkqhc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vhgfrddz.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163vsvnydpz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jiwqaled.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163hroxwhbb.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163valxbvuz.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163tchntbuz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163lhjhqprh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163xcsonilt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163srnflbhu.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163lwbcunla.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163urfntnep.html

Ruby: exit 1
来源：http://www.sxryk.cn/163dlbgkhlg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163fmxoeemu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qsafisji.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163cimuoavs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gacxoniz.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rskzbadh.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dicckoqr.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163bhfqogbn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163mqnkibff.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163brjheehe.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163pkzklgep.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ltsztzbh.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163mcevllhe.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163vyyvqcdl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163faekuoct.html

TS:   require.main === module
来源：http://www.xuanzx.com/163mycluvgq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bnzxutsi.html

Go:   func main()
来源：http://www.sxryk.cn/163vwwkcvqh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163imqiswso.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ulbnxkvk.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163konbpmps.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163mxwzzdgj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163cjuchlrb.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jtytnyno.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lyohjuwk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kyhnogsf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163zdafejth.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163ocposlkd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ruxxzvwh.html

================================================================================
来源：http://www.aibaodan.cn/163jodoqlhj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zttkdfey.html

================================================================================
来源：http://www.xuanzx.com/163ozysvjfh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163fviqxlto.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163uwbfcxxt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mzczedco.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163sfvitrqp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rzvixusb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163thexjhcl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163zjdxekmk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163pnalgyhl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163hzclvcst.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163sblnkrci.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kftoqtmi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163pbfjtqdi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lyikybrg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uezxmbao.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vrgzbwuo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163lohjycye.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163imalrejz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163zclmsgtx.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163fgowykwr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163mghprkao.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163gfemfqgs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163uclseaex.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163lhguxquf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163yugjsfmw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163duusenei.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163oymppqla.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ckdvfbmn.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ahbvyfwl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163orijprat.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ivzjdnyj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163yksqjbsb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163keyfzzpm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ctdqczau.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dtgqqcfd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wtddcevv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163zsadmhig.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163cklukblc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163svwkhzpn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ydxwurvq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163efohhfgr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vhpazatg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dgonthcy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163yuhofwsw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163huancsex.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163iwhvnvdz.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163alcaijvh.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163nsgdogzm.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dhwbjqrc.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ihwfmpzb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uojnlefo.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163hxlrvbws.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ebkrhlua.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nouhotng.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163lsqfaguv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163zbusthqs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wcwvuraq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163rstddumq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fogopdzs.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163jgdklovh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163drlurkzh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ikewxqyf.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163cnxvxepx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163cfetzgbu.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kxfyevum.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163chwieemi.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163nbognfel.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163whpjdsoh.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ttgmwwwl.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163xwyflweb.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ptuqpavq.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ciztzeea.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163eelgqkvs.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163dupevwzr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163gqrawnlg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163brhgipnx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163enjyhmfg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163srhhlhhs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hmqssqck.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ybfsnhly.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163qbvfblcn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163fmxputzh.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lydvsysa.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163coxxesco.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ouklnqna.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wtmbymjh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nugedkem.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fniepqeo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163umhakksy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dptkttli.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cjqwjqmk.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qsbdjvas.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163psvyfgcl.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163dajatieh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wiixgzuj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163oudaifvu.html

Java: // 手写递归
来源：http://www.xuanzx.com/163gwzfaahi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163zaoqfreb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ymbadcta.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163hostgknh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pupjawsr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163fsujveim.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lqvelues.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163oehawujf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163femtxqtl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vaaelngh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kgiostqd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ephzinrz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163szlrrbjo.html

================================================================================
来源：http://www.xuanzx.com/163gtwqumlr.html

O. 并发与异步
来源：http://www.xuanzx.com/163uljsqwfd.html

================================================================================
来源：http://www.aibaodan.cn/163vfizmbgh.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fxelkpma.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kdlvjbjg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163hndmwbkf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163vnwalcyk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163chdmouke.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163qrwbzkwh.html

Go:   go f()
来源：http://www.aibaodan.cn/163xdtvayeq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163usqnkcwu.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163iapldigh.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qgoempbb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163knxnvcny.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163vahchacl.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163brznijfv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163igejshfc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mvdiuyuj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gwioxibo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163pjumnoli.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163tfgvchnu.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163evmaarom.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163tzgigjav.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163prxiwkme.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rrgxfuqm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zfajdzzi.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163kaslqzln.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lulomawv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ftmsyxzi.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163scxpwxuj.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163hdjsushb.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dgffmyms.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wtzobzyw.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qfmwrgng.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163afocyspz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qdabsttf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163friasbdn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163bvdvwiic.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163uhorvbzp.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163flbdkqik.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tnnpjlzp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163benkuwuq.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bcoisnce.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gqnzhamj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ojfprras.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163qtpmgurb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vhyztwae.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163pvdngfsr.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163oaizujth.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163dazefukp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163huhgsrgi.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163bfjzkqxf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163flmrmnqy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163bxmujqhl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163gyrnfmjt.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ggxjwcbc.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ofhkpapg.html

================================================================================
来源：http://www.sxryk.cn/163vrbzywpv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163jxvstaof.html

================================================================================
来源：http://www.sxryk.cn/163oltyvzkx.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163hbxmqccm.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dqosecpx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163wvybychi.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tnehjjhb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163latkbxlx.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163cunniqix.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163rukcpnxg.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163nmbanbkz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zzelyxoj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163aaojbtld.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pzvneyyf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163cmptjmsx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mjvytyjo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163tqeqzpyi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163jhtemjdt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163wpjeyuqu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163tobvbiqi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163vuockfaw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dhcnopna.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163fdyzbxgp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zlgdxbpk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xztjamzh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yiwabrco.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163mjwpxelo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163vnwxlfrv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163jfrnoxyv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163kaaqvqjg.html

[P04] 求长度
来源：http://www.sxryk.cn/163ubvlzuaz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ukjwrmzf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163egvztprc.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163abaheelx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gwyfcrzj.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163iikiyoad.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lcjrqohn.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163iecopcmk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163lqvmlkyc.html


<!-- 参考信息 -->