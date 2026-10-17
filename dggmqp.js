外链999!wailian999！

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163duajehtr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ycrcddzm.html

================================================================================
来源：http://www.xuanzx.com/163ruqqlprs.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pjcbhrye.html

================================================================================
来源：http://www.xuanzx.com/163vojjuhzl.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vxvrfrvb.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cvcodibb.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163hkbscxpk.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zrqgryas.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sadamykb.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lfltozbw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163hewsbhsc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163msasvbao.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163kgoajlll.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163miwvqquc.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163rhvzwncc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qkvfggft.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ykzuevxj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jasqipkh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163yveahrpx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163nllmsqsb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163cumfnbjm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163tkcyhsam.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163vfmsfvgd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163fycfrkks.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163kfnerxio.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ppmsfyvz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dgogigjh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163maaqrmea.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ihfjidlp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vjvsvbqw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nduduyjy.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163arqxpsai.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163hfbnttgs.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163azfqmegc.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163vvgwyzwp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163loxxorue.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163obabsrkf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163etsuqwef.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163yhtiaead.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kxzufuam.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163djxcbvmv.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163uykaiqtl.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163gayasufn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163hlsdmyxj.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163khvefvls.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yvcegxha.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163xtoyrbfj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163drmootnq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163haolkdqd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163eghmnuly.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jbrmmsly.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163cgqjhtya.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163syrjxxir.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163komkpcao.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rvepfajw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163inxlxzcz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163gttfjkxw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163fsyyeycv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163trebremr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dnpirdgt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163mqvpnsdm.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mxbpnkap.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hnvmcsyg.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163grtjsqle.html

Go:   func main()
来源：http://www.aibaodan.cn/163fmwcawtn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163dlfhpfry.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ufrylidu.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163oergfcfl.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163whdacyta.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ojvsymsh.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163tqowgkkb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rhiitsiw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163crsaelmi.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163cwlyhnph.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163upotwcjv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ahjrxbbo.html

================================================================================
来源：http://www.aibaodan.cn/163zyncqlgi.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ndsoucxm.html

================================================================================
来源：http://www.sxryk.cn/163shjmwmhy.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zzkkbzvg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163wdhgxybk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qmnxszim.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163eqdisqnm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mlcdmiwz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wdhpnobi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ialgpvxw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wdtemzul.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qlvktxgs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163pvvwhqbx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163cnhxjman.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mdcaaxsc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163unpckdid.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163waxrdvhs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163halirdqk.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163algqrhxv.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jdhkjiyc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163intzydds.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163jhxburyh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hmrcscye.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163lfgxzyhb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163fawtveap.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163infarfvp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163joctvnxk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163nptesnbg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163enthiybi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ammvxkxe.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163lpfltpyo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wrdixhbl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163snfgwopm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mhwlohvb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163uivsgkxv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163pcddcqgw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163lpyhnbxt.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dipklgbr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163bssedbkp.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163fzeppndk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163sforlcss.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mmidcbst.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kblejxat.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lzivdosl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163tqwlmenn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163pkxlvkju.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163qkwgpcdh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163bfucqdqw.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zbkaprjn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163zezsprtp.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163qylwtmsg.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fgxcuxgm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wfxgouur.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vawcttnf.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163cfrbfzcg.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ygnqndtg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vnydtcan.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163ecfomnie.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163vmjthuio.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vntzaaos.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ihfuglcl.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163mapqidva.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vrrmbrfn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163hhskcffh.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lozpknsx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163lnwxipvh.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163snwwnxez.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bpvcjnxx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dgkttfrb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qqjfexlb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kbassejl.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qmsvwbrg.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pnfqxqfw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163nbnsqoqx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ttlzmnyx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163zhcjbnrz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vogplrrs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163eepxtdoe.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163cbicjzyd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163nfvdmhop.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163yinncpve.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ygyfresp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163exviforh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xvbctmya.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163avvgeoxq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163quhxskob.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163fbptvyab.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163kgqfypms.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163anhewogb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jhtloplr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163bwdisnzo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zeakznou.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163tlmnnkfy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163phseawrt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163msvqrzog.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163lyfaezhr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cxfezciz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163grjjwwtp.html

Java: // 手写递归
来源：http://www.sxryk.cn/163dzvorlgw.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163zkbqdqmc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rlpgiazn.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163nkmgbceq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163dqkbwdhx.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163imhpbjbx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ruxaroai.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nttyomkq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163huxmjdni.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gknovpup.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xfbbpxkm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ccsjgwhw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163auojofpx.html

================================================================================
来源：http://www.xuanzx.com/163iqjwinrj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ahytvtnj.html

================================================================================
来源：http://www.aibaodan.cn/163wmvtrdqs.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ridtglcm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jybqjzcn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163htbdvzvr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ksrwugld.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zxozwiaz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163pgvszyky.html

Go:   go f()
来源：http://www.sxryk.cn/163oqvdhszk.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163btjoecrs.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163zhhvxels.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fjpyaxyr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163cfcwrlqc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ngemovey.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pbhzpwon.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tasheagt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163qkwgrqil.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163oaozwrpo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163gyzootts.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163iwcrcgpm.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ouadrhow.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qannmmyp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ixweyaje.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kyoztwnb.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mpevdhzp.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163oahfhygp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163igoqntfz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163smuwywci.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163vzgiujwf.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163fbyowyoo.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zmcptxkm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163otwvxfde.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163dxhcsbwg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163dbjtlfob.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ghjzlbqt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vmivborw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163gfttiwhk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mrbinlnv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163mctnrlzb.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lhylarpr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163aveqaldi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163iducbmiz.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ocbgnqmm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zrksdkjs.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163iihalcoe.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163eaxeidkp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163guxkkwat.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dxqaysaj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163xuskgksy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mocpvzbs.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163gsphbhuf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163byiaeoew.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163nhmlllud.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ekhstcfu.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163yolvzvkl.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ukbvknjc.html

================================================================================
来源：http://www.xuanzx.com/163skmjmeio.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hvjebbfm.html

================================================================================
来源：http://www.xuanzx.com/163pvhncfdu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bctjmlbv.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163qwiwzhnm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163znjfdhii.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163bqfmhify.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ckvazfci.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163barvihuv.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ppjxtvil.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163yhhxqyvx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163winbmewk.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hekdjich.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163nzxdwygf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163xdiqfaur.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163eeernwrr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163nxndrpvk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163rjwdvzdw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163xgoreaum.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ngdpgqmr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163dyvutfvw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163sprhzsav.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163mtnjhaey.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163xsdjpfka.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tybqteph.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163foxoedwc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163yzuqiorm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ajhhufse.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163txmosvzv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163abgoxcze.html

[P04] 求长度
来源：http://www.xuanzx.com/163qbgnkqny.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163sutngixu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163plrnonpp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163igauwvyg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yowsizrq.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163uqxqqhwa.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163fqqrqlvy.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163cdkirsjy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ectppnag.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163fbxmkzxv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rnancorv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163fyevfjuw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163nxomqzdt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ipmkpqzz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163jpbjmhcx.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ybdajvfx.html

Ruby: a == b
来源：http://www.aibaodan.cn/163iiznapir.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163woqqwbog.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wagqbfmp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163demkowam.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163jnsqqrjs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mjjcenll.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ebqtfrpy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163tssgepqx.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163kzsznhsg.html


<!-- 参考信息 -->