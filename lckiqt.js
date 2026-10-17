外链999!wailian999！

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163uusxzyac.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163bwfxefny.html

================================================================================
来源：http://www.sxryk.cn/163zayrayxm.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163qaynrqjt.html

================================================================================
来源：http://www.xuanzx.com/163nlnjixco.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jcqruzvj.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163wcgklqbj.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fwufwyup.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xvikhgvi.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zmyjsxxr.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163hcfqppbk.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163pohrdvnz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163eeztuhkt.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163dokjfqho.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163uhpslsvo.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rnmkgtqw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163prgofoak.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jocbzvnp.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mvfjudea.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163vipqqzgj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ynhhpdfg.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163wuaqnzmr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163knrphxds.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163izqrjypc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ywjajzkj.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163nbxpmlnu.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wtxkjnpf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uropofco.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163jujxunnz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163iuymgdzx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163eclhpzpa.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163rklazxsx.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163yustdila.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163tgqisbwk.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163offtfsbg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163kbexkapl.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ganhzsmp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163bytuzbtm.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ordujptt.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163djqrcbue.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163imxmzwhl.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nvupqgen.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rqddjuzs.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gxialmzo.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163dlxllkyp.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ksfjsuad.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jdhriwfp.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163djxhxmis.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wtrpqjyy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163rbwvqund.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163bvjvxumv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163sryngcoz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163npgwdzev.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gfymrhbn.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ctxzuzcu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163zjhuwusu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163dmmjdkhk.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ovfvrxtn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163tskcjudh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163xbmsrest.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163grhkfyep.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163cgfjfmpf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163eeclvsgd.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163qkjzfqmk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163leenhzpx.html

Go:   func main()
来源：http://www.sxryk.cn/163onazfpiw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wssakihm.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jvzytnux.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163rdegiqga.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ujpndajt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163wtgueogu.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163dhummzvw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163insdusmy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rezkmluw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163bdwigahd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bedkwhuk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163cpivjkwr.html

================================================================================
来源：http://www.xuanzx.com/163jrwdyxtn.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ojqgzxth.html

================================================================================
来源：http://www.aibaodan.cn/163bhpwhomd.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163sxvpcncz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163cmuyrcmp.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163upnwhubo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zvysrqun.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163kfuqtabz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163awkuqxow.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163kysvcfmg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zorjrwoz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tupdwfro.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dobdafsl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tojnmunv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wkldgjcl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dhageffy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gcftawhu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ibudvydg.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163euffnvbd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uaauhrtx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163bavxhrug.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wxpwsvkc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163pmjtljcd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jhlomvfs.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yvvdzftq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wbxmdyjs.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163litbdrjl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163yjuftvhc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163evijxmkw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163iyqupcwo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ewgeytck.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lfgybdgv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tnnxdecq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ubmkrkwt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163tgsivoep.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163irppxrgh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163uctvcupo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xxfptffd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163qrpprvas.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ecohdrps.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jmsnxaev.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163wbabbwlx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163calykxlo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163fafcrwbd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mnvfttrh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163oelbmrwr.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ribxqdww.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163wvcynsvl.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fkufnfdl.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163lgghnvvf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163aaxcvejl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bonhuvxv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nvxfdgej.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163nzemhgvc.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163jmlodher.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163cpdtbxik.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gjihcllt.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163yrcxsqdw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163hjnxbipo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163exjoheim.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lhdvcwgb.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ljmozsqj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163kxpopfkg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163hpxtdrom.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163qkworqro.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mofkkzdi.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163tjtblthj.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xipdjyzh.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163tdyzewwz.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wfwktvoq.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iqlpyuuv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163zjvxqnwg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163lfdtrggg.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hlziqorz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jnvsvccl.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163rvurpwtr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rebneyjx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163fqkrzfwp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163clmjijxl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163niwxmiwr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ffwedxda.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163urdneouh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163prhdvcxe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163yrkjbrmm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163tppxgdhn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163tkaqibed.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mxalwlhx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zkhrpufi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163lcbjyxxs.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163mwylmwhx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163fmvvkkxc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vyysranp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zurwmdhv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163heotrwgr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163xsbvmjql.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163givhaxzx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wkhdsilk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163anbvngvt.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163egfospnq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tkghtoih.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163oqvcbysx.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163roxxlmfu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163edvlwdwt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163kjkftzia.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163batqpiqb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lvlmejyu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vtjszrqo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wwqjpioh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mvppxahu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fpokuqgw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kqeysiyw.html

================================================================================
来源：http://www.sxryk.cn/163ilnppsro.html

O. 并发与异步
来源：http://www.xuanzx.com/163bzwjcwng.html

================================================================================
来源：http://www.xuanzx.com/163cpujeznr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hhbqpuyf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xainnwpt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163sgqysaet.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163cjfmsipa.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zuhzvbrw.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rlsziiel.html

Go:   go f()
来源：http://www.aibaodan.cn/163gteohcib.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163rwcgxhst.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ncbqjcwn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163tlazltzg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vwjvgnxf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163dxkuogaa.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dpuptaua.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zmiakkcp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hrttnwhu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163svqiqovh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xeunvdpk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163fwwtbvwc.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ctktsspd.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163biacogrc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qqmnfzza.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163bbviwdiy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bmhdpafp.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163okbtbqqi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163mywbknlr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163bkfnphma.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163xneitbdv.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wrllmecs.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163pfugapsx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163bmclatrh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jrwjuodf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163flrwlbbl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xpyegugg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jfqbwmcg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ofudluzi.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pevgmmgs.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163fkmaehgt.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163boworbky.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ehthmreu.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cdnqtfur.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gnzfojqj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163exlmaurn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163wnozfbvn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gfpllrtq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jobzegdd.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ycmjwxet.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163nrcdlhke.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ehgosfnq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163snrumyln.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qnldppdw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163oqpwwudv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bmmwsaha.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163wsoaczpl.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163xnkjqnkg.html

================================================================================
来源：http://www.xuanzx.com/163mzrmfmqt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bstvjbwk.html

================================================================================
来源：http://www.xuanzx.com/163ejwjqgza.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ifgyypjs.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163bmverbrj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163yxixrzdq.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bdlmcqzd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zfvhiwzp.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163zzyfpewy.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hwuneigl.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163dhorcwdy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163cqrugtwk.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163xwuiiitn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vfqlusod.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ibckmewf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163lorgodpq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163epvapvnm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163crgvorty.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163bxhjixxx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163afxtzvee.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163mekrbbln.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163mtvivpia.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cmvacrxv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ykeanodx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ucxtasav.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vojmepjg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163kmklpgqi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163tjwbfavo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163yjxzsheh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jttnfqem.html

[P04] 求长度
来源：http://www.xuanzx.com/163ijbulogf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163buzfcipf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163oxacthjy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163azlcqoqq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tabfgpyy.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163fallusrc.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163nusieeqq.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163gmyyfjjo.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163aanrwwfx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hdxqceok.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bkyoorkb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163rhwgmrqx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163fsnjrvst.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163tfanurur.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163pcdrplzw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163epatxnih.html

Ruby: a == b
来源：http://www.xuanzx.com/163hayrecxr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163olxhqhor.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163qkiwnsqx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163pjtfbycm.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ojdzhclg.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163twbdyaeb.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163eynuhour.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163siiuwibw.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163khjrodga.html


<!-- 参考信息 -->