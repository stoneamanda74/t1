外链999!wailian999！

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ifpcrpvi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cyofspjs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163myxbjpts.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gfvmloqv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wlybanwn.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163czskqfpf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163yqavevrd.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163djinjzko.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zbryjstb.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163thnrlsls.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xldtxqlp.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163dsbxjbnk.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163vwargsni.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163clwgnndq.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163oibjkohy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163sthmexeo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163veznruqw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163mrcgkjtq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tyzwglxt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163rwlaryjv.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163zhweuqav.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vrzhzwbu.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hmdovkba.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qfxkhtpp.html

Ruby: exit 1
来源：http://www.xuanzx.com/163wleyugys.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163yirfldpg.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163luqgljvm.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xifqoicb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163iilftdph.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qzspiwfj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163vedwcfjs.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163zcyvzrav.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163gvaebhli.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163gztfwazj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jxxqtenw.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kbhzgqct.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163kchegowz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163brzpjgou.html

JS:   require.main === module
来源：http://www.xuanzx.com/163swxxqlnt.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163beluxski.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163euupgacm.html

Go:   func main()
来源：http://www.sxryk.cn/163txhlhbja.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163enxajaot.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vsndmcna.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163sphrcakn.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163iumqlnaf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163keowagud.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dzazucyl.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kqoucjif.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163otrtmdpa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163yifzgdxh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163jqehbtiz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163hejrekwt.html

================================================================================
来源：http://www.aibaodan.cn/163mvcwbzei.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cvrjxtgp.html

================================================================================
来源：http://www.xuanzx.com/163bwemcksb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163wvhzevpm.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163scrhidmv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163trzoktqb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mooerter.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163spvumtah.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ascvmcaz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163fwrkpdpu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163avibhqjl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163gyhokyca.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163nsgtrzia.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163spnsahmf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163euvvcgjk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sidajauc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yeuaxioy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163dowpeayr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163sfxrcxmz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163oirkzhxs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163dtfrmmjf.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163lzqxilbu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163vgmevjol.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163obwqoqgj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gvqiltdq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xwzciylx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vhgmhcad.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ruiatwxy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163rwjyluba.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uxmwsalu.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163adnzfdon.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qykfnxxg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ehcsxjpr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lahupnyv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mchkbqqe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mkhzrtyw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jnkiwgnj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rtlihtuj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163cmiijnyt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ztkqfdil.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163aswmlfkr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163mizwesox.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jbwdjohl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kqvmhjor.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mhmqwatr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163qawizqvu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nakuukkl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163vlpbynsp.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163khgiduxw.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163aljwmava.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dhqzfvts.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ekmqpaue.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rjxijjzq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163yszlhkcy.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163wvmxyfoq.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163mflkqrkw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rlnarbme.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163tnuthnzl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163xvvgoqcx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zijtsais.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163kyfvrjki.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163rgaersko.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ovzglzza.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163dhoakesb.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163bnjemzib.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163reipznjy.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163tecsenev.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bsgrtgkd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163eksoxmif.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vcyetbji.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jjhpagfn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163bghystsw.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yuireqvd.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163klwjkgxj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ajpwzdhf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163uexkonab.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163jqydapcg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163cahjfmzw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163puyvoshr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zphkobpl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bfowaofe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163edssyica.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tqwkpdka.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163cytnustt.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163bhghotux.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163eukokbso.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163xuwoxatu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163sdxullzi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163bsxpxgwr.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163przdbdfa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pncxztyv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163nolqncqd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fqngulhy.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xmnfzufs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163yyetvcyh.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163tcaacwef.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ywvhzhhi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nwnwvkei.html

Java: // 手写递归
来源：http://www.xuanzx.com/163bcmcgksd.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163obfjlmfp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jdvxmmpn.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163pqpuvltl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163aeajxejq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dtyhoutg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163shfmwtkk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163emmkoosv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163skvxtagr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xbhbmgby.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163mhzsaqum.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163wzndcpgq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163iswtfqur.html

================================================================================
来源：http://www.sxryk.cn/163haacydic.html

O. 并发与异步
来源：http://www.aibaodan.cn/163wddxmrwr.html

================================================================================
来源：http://www.xuanzx.com/163czcjjhwk.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lflalkni.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kmwnhhqk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jcfbcrvt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bichhnxu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yqleegga.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163fppbqedq.html

Go:   go f()
来源：http://www.sxryk.cn/163vkpotjks.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163eiylcruq.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xnomgbue.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163sepqquyu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ucibcehx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163tkzijcnt.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wrzyvqnw.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cdkqulhe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ikijjuxj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163jaiswwry.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163bcwklyhu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163pttlsxrm.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ytalurud.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163cyszbmcn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rzbgwssv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ccucqpuz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163spnnrero.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163odetsbsw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163qrmcmgst.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163pdvqhcgq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163kaprpusm.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163xkssdkod.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163oofzikqy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163tgynhuhx.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163inrmwabm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163miumvlla.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163iebuumri.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163mtgvjmed.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163keqficae.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163lwcywxav.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163jzyaddhs.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xdebxbfc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163aihgioee.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163btrprjrq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vjuytuiv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jzhbvcxj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lqnokhrw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163occjtggo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163bujtlofn.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163tppniuid.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163wevsikqm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163zuuhzpzl.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cszcpsli.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fbknhyos.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hhetyquz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dnyhsbsp.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163yxsjwbsl.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mehhaisq.html

================================================================================
来源：http://www.aibaodan.cn/163qzdwykrv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163idqndhkm.html

================================================================================
来源：http://www.xuanzx.com/163wpfwnqdh.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qzudadxt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163zvpcrovf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163sozvokwk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fjutdpll.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jpirydtg.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163yednuoah.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163sjxajcjf.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163pyyssbxi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163gentqkel.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163grskmygf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ntiqvosh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ioijekee.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ijrkfzkz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qmrheamc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qvnibgjf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163aftdshxa.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163cfbamnvn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163mxbsxagc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163buevylmn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163xmuodoxq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163phassfjb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dbdmnubx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jhnnbogx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163uipfujyq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163iecnmpoo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163suyvduig.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wugarezv.html

[P04] 求长度
来源：http://www.sxryk.cn/163nlqzbsax.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163aaspaxoy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rybytefy.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bhkijxtm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163uvqtcegt.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163grlrkpvh.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163brezauye.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163dexcsxkp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zhfxztst.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ipcdwhjh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163hbweswtb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163mqvhbwqz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163vjyqvqva.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163djwrhfbd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163hcaxuviu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163kbdswqgt.html

Ruby: a == b
来源：http://www.xuanzx.com/163skznxeem.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xhpzbnjq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163efdxtash.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ylwcabnn.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163eolhgyek.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163aolzcuxh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163qsonunrc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163nzgpmqhs.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163cxautxvy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kqauzoer.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163uicxyniw.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163rrabvleo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163soecweuy.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163swiemcfk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163vmbcahtx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mroinhco.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163dolsxikr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163asfkdhmj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163lxynosdl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163jlpwusrw.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163mbgvhron.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163yifusjsv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163gzykrlym.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163jlaulfbv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163qpganwtn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ocatwrry.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nkyuolte.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163nwpzjfgs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163suxpccgz.html

================================================================================
来源：http://www.sxryk.cn/163ouptevfo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tjskalqi.html

================================================================================
来源：http://www.xuanzx.com/163tzvfyizu.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jngnmbqb.html


<!-- 参考信息 -->