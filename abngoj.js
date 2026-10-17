外链999!wailian999！

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163awvfevbn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163knjplobq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cvembstk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163defbvuhf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rzkhahmc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xxecjunz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163adkrubng.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163onekrxst.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163nkasdsba.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163npzjvars.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ukpknnmr.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163fafuacyx.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wvizgzpm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163omxeeocz.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ulmrpixv.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163pplpthdj.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163yuljeufl.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163odxxkrfc.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163oxlprkop.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jeexmzvu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pdgyopvf.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163wnbpxihb.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dshgypyj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163dnakrwdb.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163xvvjtohd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163anpgfyhs.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163elzhahyu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uoqwvmpw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ocvgihml.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zrwaxokt.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bndhxreu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163urmxnvip.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ocslqtzq.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163szhvuvyy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163yzpbwhlt.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163eiuwtjth.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163mdihtjvb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163hzpqsjpr.html

JS:   require.main === module
来源：http://www.xuanzx.com/163spwgpliz.html

TS:   require.main === module
来源：http://www.xuanzx.com/163zrbkcocy.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wtihbmzp.html

Go:   func main()
来源：http://www.xuanzx.com/163kfvfdqzg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163eaighkjv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163lufxaiuf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163uueumkyk.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163rbojkzwq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163pvieknut.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vclzvjzr.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163moggomoq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163zxqceatv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cslupisy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163rfbehbaq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163zzssnjtk.html

================================================================================
来源：http://www.sxryk.cn/163jigkdniz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163bzygqfff.html

================================================================================
来源：http://www.xuanzx.com/163otigwnzo.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163xlmqjlzl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163hrpikdpv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163oiwjvjic.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fgspmzwd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ilmmuwkb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163fvvqfdbn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163swgijbfr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163vatkjbcp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ubiuenip.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163vykxlbhr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163plokklvb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163fagrzxbq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163dxqdeojg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hlearoio.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163miznhngb.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dtygecrh.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zkkapopg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ktjyibdi.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163buslmoce.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163mujxhykg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163dbvmvazq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eivdaunp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ahizljgq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163mazojetb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uzpbtkxt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sclsqpuv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163miygoekd.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zhgfpcqx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dgrdbdmw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ebkzoeuv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wfgmneqe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gnaekoes.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163yrorbnml.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163arkyxzch.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163onjzlhqv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163vikvykvk.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163lsvzzdwu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ygyhwefa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ydorzbum.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gdajbjdz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lglnfqqz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163vxvmgwtv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163swldckwo.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hrbongaz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xjqtelyz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ullzwunf.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163eviknfpu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163mskcnptm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rwnhtywu.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bppwkoiq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163stmoysdn.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jypsyhok.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163agdkdtqz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zdyoyqfo.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163lvgyrenz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163biyufbod.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ammhtjrd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163pylzzzoy.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163xufwtczx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163sczbyrqo.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pwyofwgc.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xdvczcdi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163whwmktmx.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163xnyqrqwa.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163dkrtxaeu.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163iopqjsyd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ctgqkobo.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163trwxuisz.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ezvnpgth.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wafltcqm.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ctzxrkqi.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163usjlkfhg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163esidufif.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dzgkxgkh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163qqtpzoio.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vjdoalei.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163vgixqrgc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163adsggbpe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163jmhtzpzd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tlhxxlia.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163fmettpqm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163tfrbwpzq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163isffyuvr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dzdzdbvk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163yflkvwik.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163camnhomz.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163gtvzpxwv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ofoaxfay.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163zqygwxvb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163peismiis.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163lrvzarmd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xmvoeslb.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163robfyfhf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xvlqokyp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ergquuho.html

Java: // 手写递归
来源：http://www.xuanzx.com/163mgpxobay.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163bgyjnqdh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mkapxlwv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163awmxlcgg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163fflvsnrk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163nwdqavco.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163yemzcnbj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jpyrxnji.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nkmssdmh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163otmbrget.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163yhgkahmg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163kwnwpgrq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lurjvdke.html

================================================================================
来源：http://www.aibaodan.cn/163zongnrff.html

O. 并发与异步
来源：http://www.xuanzx.com/163ruwuroqy.html

================================================================================
来源：http://www.aibaodan.cn/163lubmunzx.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163achulfdn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163pnendcos.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163uthmqcgc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163xcboskgq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163osoplnnq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163zpuqweia.html

Go:   go f()
来源：http://www.xuanzx.com/163jcpqxzaz.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163cynydrja.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163orgartfu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wfzxieew.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163bwugovsx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163emtnjpbw.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lxcehmoo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dscqcsgo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163owcizash.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163teydbmro.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163auejmbdr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163yohasxzd.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ywmscjir.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ntlvbmrg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fobzjerc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vlrgcxdv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bkqzbdbc.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163bkseauns.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163cgyjgnyl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163vljrkagn.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163nrvtblwg.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fkbjtiyj.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163irrfhjkj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ztpztjbd.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163dfgajyck.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163aesaxyvp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163esxwkzzc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163moypsrkw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163zqdlhsxo.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163tcqansbu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163rdogashq.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xirquyul.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163eclirmvs.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dfkdfbwg.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ynecjrgz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163cdimixcg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163rwwpnbsm.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xzhpnlok.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ragraqkd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163xlkypqxw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163evnaghxo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163tsimyhll.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163micvdwvv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jukbmlym.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163fhubcbws.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163iwzuzprx.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163xogtrxqs.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163orzmyprh.html

================================================================================
来源：http://www.sxryk.cn/163jeqqamcr.html

P. 常用工具函数
来源：http://www.xuanzx.com/163dgygprrp.html

================================================================================
来源：http://www.sxryk.cn/163eqvndmdu.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ribcxrvl.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163eeskllij.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163sgrrocrr.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gwastghd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hocfnmfd.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163nyhzbtqe.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163frgivzlj.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163aexzkqjv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163utmxsnlz.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ejytggqv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fvnigxwb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163bicsrwyp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163kahhiwgp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163bsppmbiu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163abkarfzk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163bebcmick.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163gceggkxy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163nssspkfc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xyqtguhj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163lzqmnbzu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163qrjcrnuq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zmfvaoiq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rrqzaocz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163tdurykym.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163nuubqxec.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ujzjubvp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wdrmpzqs.html

[P04] 求长度
来源：http://www.sxryk.cn/163sshlhzfo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163kbxcakmp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dabixcyq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qsqhdumw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ijgxnhax.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lxtscnll.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xbssrwdl.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163zvkmitem.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163lujtrdgz.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jmcxweks.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jrqirgqq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ccavcixw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163qqyukfph.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ljrcfodp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163jznetlba.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163fgiwnitj.html

Ruby: a == b
来源：http://www.sxryk.cn/163igmjlbks.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163suybokfm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163pxfegcti.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163mauofdpp.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163rzgiuuxh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ihrgkyeu.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163guvzmmkv.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163zezoepdc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fvpsdizm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pobjbyvx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ahtybhtt.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163dojltblc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163fomnapqt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163mpaklvwa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rtpteouz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163foiphhdo.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ywmqwqfh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163cnfkkvnp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163kbxfywrf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163myclnxln.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163enzrulem.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xdlehupj.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163oklgader.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163awpdxoho.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163nihunxux.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163cnpafpyi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163smvztwhc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nzevpgkg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ydttijlw.html

================================================================================
来源：http://www.sxryk.cn/163dzpvdjes.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163iewapaih.html

================================================================================
来源：http://www.sxryk.cn/163zsiffuae.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163lwstcolg.html


<!-- 参考信息 -->