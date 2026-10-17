外链999!wailian999！

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wujyyccz.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rzbvuifu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ejuawjpm.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163esbxakgv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pjiqxppy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163anuqughb.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hzvejgar.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163szpjgqqm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163mannfxug.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xqputvoa.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163dujjbcrz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163eohkncff.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xfogokem.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163nttzzieq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ntdxrhtn.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163fjorfape.html

Ruby: exit 1
来源：http://www.sxryk.cn/163pqltjlnu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163bkjuuawl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ghauwguf.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163hfujzhmr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ebzpykfc.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163huczczrg.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163asxmgypy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163glgsicxq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163eioyaewn.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xmagwgmh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163jgcsvzqg.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163rddyhout.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kxkzewct.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zqkmmztn.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xojbenjn.html

TS:   require.main === module
来源：http://www.sxryk.cn/163vcmgucpd.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uzbcdhll.html

Go:   func main()
来源：http://www.aibaodan.cn/163xurvjskx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163gkfolgqg.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163hhftzsyr.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163iatgehrc.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163dxfofgzy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163xbrisreb.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ckcnkfeu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163trudlydc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163gwjhifwa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163jhlceovq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163hypzynkx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163nllwepwi.html

================================================================================
来源：http://www.sxryk.cn/163dsbnqgre.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163scsimnzr.html

================================================================================
来源：http://www.aibaodan.cn/163deyileac.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163uucwsrox.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gfkmmkoa.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163yjjkjmau.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kulsxipw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nvvoippk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163xsaincft.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163emyxgvhq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163sykbwhen.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vjuiidqn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163kkhksrwe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163imqidlxb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163aogcqemy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mdcfmtsq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ccnepzhg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163troqvixs.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163hyqvkeif.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hiekadll.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163oskywasw.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163atakucxa.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163yyezcipj.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163urrlhxpn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ubyrnwfy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ehgqeges.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163bogqndae.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ajdclsev.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qlgilvvn.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wlavyejt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nixjugmz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xsagjcou.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163hfqaxygs.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hjjmcwan.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qwseoeai.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163gumoodhl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163epetgbom.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tpxmximv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ptfvxhnj.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xvpmxnwk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pdxgwfjr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ahgcxfxs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163exscxmfh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qeqhceym.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ipfmcupo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ddtxwvmb.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163oavzjelx.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ohdtbduw.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163tobujxft.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163oscalfvc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pmpidpzz.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hoqjoayn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xozsbdjw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163sdqhtrzi.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kyrhvmue.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163sggyxuzj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163sshyjpyn.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rnvoytvn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163uicxjpte.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163lcylmxsu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163tmaklylo.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163zanxzoxr.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163tjsdbzzf.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163hvmkkugr.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163exatdsqh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xhuqlxhl.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163haadqwuz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yolqqvuj.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163tkrlgqho.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vdeirjhx.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163imhenbzl.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wqvyqkyz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uphxulrr.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163xoynvgjz.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bqxrjobf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163bljoetyj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163uxlteytz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163dbmfigef.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163vpapggcl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nqzmnfqv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163gilaydfi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163llucmidp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163jqyybwfw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wxujeioz.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163raqoycrc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jsmoacul.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tkrsxmwb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163okrzpwxd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qeptljac.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163mndcrsld.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163prhjjyzh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163yxeadtce.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163toqyhoao.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163vkhnqawl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163nlxwsrll.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163gimbjitk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ewytzikh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163spwleloo.html

Java: // 手写递归
来源：http://www.xuanzx.com/163rzgrrtbj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163lpvnwkni.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163acrulbuo.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ozeoczdf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pvgxuzwg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163eaffazzj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163vgzlflar.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bjxclwzz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xjkpkiqk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ymuefqmi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qpokssqr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163adgboxtf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163poskatmb.html

================================================================================
来源：http://www.xuanzx.com/163uuhprgdt.html

O. 并发与异步
来源：http://www.xuanzx.com/163nyixzvrb.html

================================================================================
来源：http://www.xuanzx.com/163iztunvlc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163nglglmtm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163wcsmmjxv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163enhrqhwo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163vzyxjfiy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qbmpbqzk.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163pqexnznx.html

Go:   go f()
来源：http://www.xuanzx.com/163hzjcnwpq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163mrlyikgg.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163vbcwhesw.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mfutgfia.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163nxtiesda.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163zbmouglq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163syxltyiz.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163grfpbfzo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mnxgmpiz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163tjarjxal.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163fgfbbamg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163mswnzaqq.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163wrzukodm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nuosahon.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163kdnxzwlo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163jhohjabm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ivhcjduy.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163xvrrxsck.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163agovkysb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163lddlgpia.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163hgcoyfpo.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dwskfesy.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163thoiwzvg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163femeedxa.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163oncvohbm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wddptilx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163pzhknpis.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ogiakytu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163aeozjrqa.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163jpwuqadg.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163clhhjani.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163kutvcpro.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163shqyogzf.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gswvrale.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dimaiwgj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ksztojdd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xjmkciwz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163yqvarvcr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163sulnfoki.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163mrkvbuag.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zypexuoz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jljrqvnu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qldbpunz.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kjithazu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163acuohvxr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xsqaruos.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qqxcsrhy.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vgzmbxvt.html

================================================================================
来源：http://www.sxryk.cn/163zumqxupz.html

P. 常用工具函数
来源：http://www.xuanzx.com/163iasdpxub.html

================================================================================
来源：http://www.xuanzx.com/163ieopqqbv.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163sqeanjqt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163udcsdbrs.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163mroneuzo.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163nlccxyct.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qmjwleow.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163leximvqk.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163sqlhvbyf.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163csxkqfrs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ifxcdxgd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163fbkqmhml.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mwddrdga.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163khrvfaiy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163upsvvcwh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163yqkclqcu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vgcmpuzh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163avfpanot.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163njuxeiii.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163nonetsxp.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163wucwcmhf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163vfqipuyh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dwqyqrjb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vnusfubo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163asziosgg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163vfqyvnqz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163gwkgdypm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163utmaneqv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163byipnrpk.html

[P04] 求长度
来源：http://www.xuanzx.com/163usqgxbmp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163icmtijox.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163virqqjgw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jtaueain.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163zuxjawjs.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163csjqwdjt.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rzgblblb.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163fwpsgatn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qmylepyz.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163fdhjjfxh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rnrirwcy.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163tdgdnuhy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163bhdwacnx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163darfaiqn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163msaebrsf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163fdyxjlve.html

Ruby: a == b
来源：http://www.xuanzx.com/163fvvzuvvr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163gqyylcyb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gzoehayq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163icnidqvr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wbynifbt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163amdiveyc.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163dmtwcrcd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163gqvvouei.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163izifstfx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163bfhrbfca.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163bwzjbpxb.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163kawzbrmc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163mqlvqnkd.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163vateeujo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ngdqcnnd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zcjojtbr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rainzogn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xanbfnva.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ndjtkpbu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163stifhrqx.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bbwwwzec.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xfroclqg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163grakrxkh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163tfgrjudu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163toabwymu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163huuhudsh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163vjkmzvnk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163bttphbzn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qpjdsjcc.html

================================================================================
来源：http://www.xuanzx.com/163kqqbsrom.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163yzmmexov.html

================================================================================
来源：http://www.aibaodan.cn/163kdyqlhga.html

[Q01] 创建表
来源：http://www.sxryk.cn/163lbfeiiob.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163rochtkhl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tsxvrajy.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163mcurwfir.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163dtiqezut.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163qmzxrdit.html

);
来源：http://www.aibaodan.cn/163hgvwqiwd.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163cocshyyk.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163uclvhlld.html


<!-- 参考信息 -->