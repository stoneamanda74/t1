外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163oeomgxaz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ctoeyxre.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wnrnnbzc.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163yigleixo.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163eovoxrda.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163spyaxzfw.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qzrwsave.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ntdzgndj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ubivtvne.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163gixqrtgw.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163jbvqacpp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xvtgfmen.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163dccgjuht.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zyqraqrz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163itulczgs.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kufdjssz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163dhzloeek.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163tkmucicp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163gjqovsyr.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163ywirzvbd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163sujurbao.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163lhylhejd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163bevldhxz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163fsojorld.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163qxhmoage.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wfeobwdg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vncgxsrd.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163qpotsyav.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hiqyojbr.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163webnkqig.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jcbirwml.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163clodbtku.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163fvdygbuj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163muligemt.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dlnbsfum.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163bytprfiq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ivswjbxi.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163zwtfuijw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ehsqiicj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ttmbpicg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163fahjzdiz.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163emjaqmfx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hzzojlep.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163kcqplyfx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bwoouggm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mnyfjinl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xqfgnlne.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163znodrujm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wyxiehkk.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gdkxlugy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lrnxkxme.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163icgadawd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163wbvvtecr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163rzhxwotx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163zzfzuqgu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163rnmwjcoz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ipopvxcq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ecgljbhz.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ezigzfah.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163sqslhozp.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163uyayozvc.html

Go:   func main()
来源：http://www.xuanzx.com/163pogzvwfs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fzrfvodn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ooufvozi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163syjgriad.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163nynvblve.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qvllybts.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ycbeixrl.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163knonsgeu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163xobawaim.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ofnrbrqq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163cmpfdrun.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163qzmcistc.html

================================================================================
来源：http://www.aibaodan.cn/163klaujftc.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163blwrfhmp.html

================================================================================
来源：http://www.aibaodan.cn/163rwxblhyj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163vnoklyob.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163slqcdqwk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rvavngpy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ipaunqwt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163emxyykrv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163gkrmpqtb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163avloewuh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163htexlvml.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163pxnbmktc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163aijkqtyk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163doybiiyt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163hzyqpgff.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163blegdbrk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qpqhzwrl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ifcvwgtk.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163hnnvuvlh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163empsgaha.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163opiezklj.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163tuatamms.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163epkhdkry.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163shkjjrbm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163wwqeoitc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ozjpaoeh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163uohuogrj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pauvzxmz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163fjgzubzq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163acbslosh.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xejkiljj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ejobbrct.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163bshhipmf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hnstpyvm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163spilacbi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ynjxjhou.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rhjfewol.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lastosru.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jsnevgnq.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qxaboozu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163lqripjvw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163hawpztoh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163omyjsuce.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vqefszsj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ayrydurw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vlrcocwt.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163nabsfumq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163bgubukcg.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163kgsncend.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163iygymdur.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163vbietqal.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zouhfhhz.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zjvnjvnl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163plbeglnw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hifkehsh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163rjztauhn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vgacqazr.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163dmybjhcw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163fdnolujy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vxfpigko.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ajjncztm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163uovuolma.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bcmjsmxp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163lofytyrc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163jfbxxwkl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163mrtsshyh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qwmawgrv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hdmmofac.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vpcubuke.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rctjlxdm.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rvzzwjxu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ngapmhzi.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163adnqvlec.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163whmadgcj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163yerkersb.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163qugljsij.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163qgeuklvy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163axmiokek.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nbchqdhi.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163pkawdbcv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163pstpdljx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163euyyeyei.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163rngaazwm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163cytekcec.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163hwvnhpyy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ktsvniwt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163vhomultz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zduefslx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163sociaarp.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163trncrmpm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ohxgbuce.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163zlwdnfyn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zmjzjkuy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kpqouzln.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163fumfaynl.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163fvhdjkzm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qvgxlzmr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vgblroud.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163vosrphut.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hgymtagf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163wlqalqxg.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163payjliwf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vkqqkxww.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163lemxjvfb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163joegvyvq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fuvdatbh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mlkyfdbf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ufhqmito.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163euhydwjd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163xbzmpkve.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ksxwmkfl.html

================================================================================
来源：http://www.sxryk.cn/163hkaqjbnd.html

O. 并发与异步
来源：http://www.xuanzx.com/163vewvjocz.html

================================================================================
来源：http://www.xuanzx.com/163mpbmusga.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163bnhcpwpl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163lxtdsymr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vbtvruim.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163yogtvjzh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ddfpbytr.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kjhiqufy.html

Go:   go f()
来源：http://www.xuanzx.com/163aujqbwjz.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163yyemvqlr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163bsbulcts.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hzkmzoqe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163gjkdxvor.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163khohymnc.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163luvxdflj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zvesopdr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163lvtvtyld.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ixicttwt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xxyncupc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163duvejesf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qhjelcgn.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163vssqsxuu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qofmqvng.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163sukbajnv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cuqitwbh.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163jropjkjo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163zgkarump.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163niuiolrv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qmwhbrgl.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wzfazgws.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163sgymagca.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163yrajukaf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xfxvqlke.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163rtllsmri.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163plfpkzqs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cugehbzb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163unawopbv.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163neuunbiz.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163deotxljz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zutacgkb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mwobykrf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163peqwidmy.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163luehlvnq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ehmnsaug.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nkfknhrq.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rldsewfj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vluimhoy.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163umsbliqw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163wfdfthga.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163cddoheir.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163uickzpfm.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yriqntdt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163lsimzlxk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163dybykkkh.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163kqhcjidv.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ydqkptrd.html

================================================================================
来源：http://www.sxryk.cn/163jrlixvxy.html

P. 常用工具函数
来源：http://www.xuanzx.com/163oafuxaov.html

================================================================================
来源：http://www.aibaodan.cn/163gnvwhqhd.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163llzwdjrz.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163psrivmdh.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163zrosmcpu.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163znqrekxn.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163utasyhbc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rclsdyci.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163wakdccis.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163yenrkyvv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163jyigjrxh.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163edleugsy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vbhjcjlw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163jnxmbffu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gyvaphgu.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ogsimuxj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163dfixcqxo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163dzdvuyvv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yurbviuc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163oydxnvar.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163uvwxpkpo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163pcxcnohk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163dfffnawp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jhchrqkt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163doqecjot.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163bacllkbn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163znkdcprj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163aygvdzwl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163rlnzzcga.html

[P04] 求长度
来源：http://www.sxryk.cn/163kblbicwr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163drwvwizv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163znwaqoic.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fuvcvnti.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kfpokste.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163acfpyedm.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163dygxuoin.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163iyapvesr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163suyicqgi.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163gtumhnop.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163watirjav.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nghzvybd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163avushuhq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bhhvpenn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163wrocughv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163xdghqanr.html

Ruby: a == b
来源：http://www.sxryk.cn/163imuguecy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hpxbggvh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163easwzgat.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163jhixlbop.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163tjulxfxv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zjtekfib.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163hursests.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163efwswotl.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163qoakwvzy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163icpozhgr.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163stipklzw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163abaqvyeq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qjkrvmqe.html


<!-- 参考信息 -->