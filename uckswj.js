外链999!wailian999！

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163imarpxdz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163juziroru.html

================================================================================
来源：http://www.sxryk.cn/163lfhlzpat.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ljyfpizy.html

================================================================================
来源：http://www.xuanzx.com/163ocbxcieb.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zbdscodv.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163owaiumpq.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163hsajxjub.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xilswvko.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dqbqybls.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163ugnusvif.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163kuytskmo.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163qrxanhxo.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xygdqbci.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ufzxoifg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163wpwybveq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163fqnxowms.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163vbctoihi.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ospgzjna.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163kszmivtj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163wcnxugvm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163nolktuds.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163apkmseda.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163dbsqbddb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163oqlehcwp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ojmhrnfq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163agnpraea.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ovoxgtpw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163idbgewzy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xdrmtdli.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163lohalynx.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qedowyzq.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dmbxlffi.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zyyujgpj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163fxwtktwp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163cqxyjfcm.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mkypkymz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163bgaiatil.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qtacsjhw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163uqqlwlcw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163nvxxtzaz.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163gugwvlra.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qjdjffcr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rcyldozv.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163carekezh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vowozsnu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ygtzbvve.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163mlinypfb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gotgtqih.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zhoxrhuh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163pzralqjw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163zafvfqrr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ohrvpewi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163unsbnbne.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wsdmjtre.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163zhawsdye.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163guvktwxx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163aivnskck.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163yvcqnpyc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163fbwzanid.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mqywywzj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163grhtarpi.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163rxlxrheh.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163njcejowq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163xlmpfxwq.html

Go:   func main()
来源：http://www.aibaodan.cn/163negptvjh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163obbapwfl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163hsszfnzz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163fautvtpd.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ggizdqis.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163pecifsyv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163sryxvlce.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163snkhahgu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163nvxckzif.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163srhwgrni.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ueqchqte.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ywuyydrf.html

================================================================================
来源：http://www.xuanzx.com/163ljfuzbxo.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kxuksqyl.html

================================================================================
来源：http://www.aibaodan.cn/163qvsifkff.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gxkcilzw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163utgnqaeu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163xhnyrshx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163kqtzpmwj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163icjdlzeq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jripjlzb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163wfaipsfe.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xwpagmtd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163fjuqabgd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163sutqxntk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163igtwqqsa.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qvpnpzxz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dadlpusm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163okufgzkl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ljuhaaes.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gipqbrzk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lvgitdxo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ifhbhpxm.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163egfuygcp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ehendpfz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bxdpvxvb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rdtiacrg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ctgynuud.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163iuzsgroq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163pvluvmze.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163vkylbhgq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xnydotjh.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zzlgfjrv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xcjmozrg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ifotmjfp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zoyzhtxh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dxpfajdj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mqvfjeio.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163cdixfjki.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163eyenanat.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hpcbydkh.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163erqaqxor.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ahishnnd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163armlqlul.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163srgcfqhk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pheqaiao.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163crzniskv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163yppzumee.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163asufsvfz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ngvqoisa.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jnrrhrvr.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163efqrwuiz.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ztrcmyon.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jdisothi.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rpupvjre.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zbynacqv.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163igzjpxfr.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163byufdvrq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xrzqcbxt.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163myvdtgds.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163twxgcxim.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163szwvxaug.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163mlnczfcf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163aitznmwc.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163menjwqua.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163tiaozvak.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163etebpeha.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163bwguzhza.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163bdlxbzwl.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163gdmarpge.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163jgfbxiwh.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ajisadck.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qlsqvcfx.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163dlcfprjt.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pgkzzbgw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163vshdsqfl.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163iukfaxjo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163dhbnuxzo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cachszxp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xvstojmo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163tihqclke.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wzybymvv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163wcemopri.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ybfhctxp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kjjprzzf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163knebwjsj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163thfcttqo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163pzzufmio.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163bzpfbqlq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163undbxkyw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ykxfglzx.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ytjqatac.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163fpnwmwqu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163twtdswzm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163kmqfrerm.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163aucqhftk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ijxjijif.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163lnkjfwgi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163svyhmppl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163omypmwre.html

Java: // 手写递归
来源：http://www.sxryk.cn/163vbatywsu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bagtpyke.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ldmrrzoy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163kdsjeiwm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163gjecspem.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163gxrejbeu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163jzjnwaql.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bgpxvktj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163grbcbsgz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hywkakmw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163lynpftwl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pfvbzzpq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163maaejgds.html

================================================================================
来源：http://www.xuanzx.com/163jjfevojw.html

O. 并发与异步
来源：http://www.sxryk.cn/163qznkthln.html

================================================================================
来源：http://www.aibaodan.cn/163obvnioup.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hpasizep.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vxswjzyk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jxntylvb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163llsskodn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rlybnuap.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ylitxxna.html

Go:   go f()
来源：http://www.sxryk.cn/163difzpakk.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vfvjlcyp.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163pblvqqnr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163cvnindsc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vuahkqvj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163jaeyqtbo.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163srkrvldk.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hnbdhyou.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uprisbdk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163jrmoqdmm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jgtadxau.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mauwqpka.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163tamhbdgg.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163rbfuhdqj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jctuucbv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ufzeucwm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xeembxto.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ltrwmqcp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163imbnegan.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163njpruyyk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163pusahzyx.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163qjeyokze.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ivoqniaj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163znlwlazt.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jggqiqbd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163vlynxwiq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163bgvgxczg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163nryqnnfi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163sltrrexx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163yhwgndgp.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gqvjmexb.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163rmqhfttc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163rbetccbh.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zpdqnzrp.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163prglmnpr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163zifzhxho.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163dnuyiykb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163fooaaykd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163deoiwgju.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163oxnydwoe.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ljdypnlz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dizqjkzb.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163arwmfshu.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pjlfelcs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163atbekhpu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qjtgotsv.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163etkneyrj.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163sqzmwqjb.html

================================================================================
来源：http://www.aibaodan.cn/163ungdonvd.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ayjfqwri.html

================================================================================
来源：http://www.xuanzx.com/163szyoesfl.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163rreqvanq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163jozfxvhd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163xtjatxil.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163yzefzzdl.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163chdicmvn.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163rogqrzhf.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ueprrvgp.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163pobbrwbf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163hjrwcisv.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163fprinrog.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ucxoywdg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163riapyvln.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ytpihxuk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163nvfzieyh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163pewywolt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163smpnukqr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163ncfkrujb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163gdmaacjv.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163svazeuah.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163uhbucilg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163hnpkunvh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163envyjhvt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bwdhvgjw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dulrcbyh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163duatwvkp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163cpwqzlqb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163uruikvfb.html

[P04] 求长度
来源：http://www.aibaodan.cn/163izeuusuh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163eenkakhr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163guzuotrs.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xkqbtzej.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xugacddm.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163npebwiyv.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163yosvzkby.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163htxxecfn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163npywljyu.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163jkaubaiu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163hqfkikev.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163efoglcwy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163smnjmrjj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163tfxdtpmh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163puatpidf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163bnenvoko.html

Ruby: a == b
来源：http://www.aibaodan.cn/163vcdracff.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163aubkbhmd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gismgebz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163bolinlfn.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163dxojatiw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kpxbrmbx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163uivtnpwe.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dwpawuup.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163sbveybvx.html


<!-- 参考信息 -->