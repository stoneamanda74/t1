外链999!wailian999！

TS:   process.cwd()
来源：http://www.sxryk.cn/163utggyijc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163mlrpaeip.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ycclimbn.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163xzmkeqnl.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xpheqkvq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163zllyhekt.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163pheqbmag.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163kkfjmowh.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163opeefmjg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163zylzomax.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163okpuxphh.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163gvrznnfy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163rtncbkny.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ssbykfqm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163plhnvvak.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kaaeikub.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163dptzwiam.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qnoexenq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zhpochyv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163sxeqrztv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ijtsivfl.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ryrgpftt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ksuckjzj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163pqvlaffl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163twewmlqg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ohpanznm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ifffurfa.html

TS:   require.main === module
来源：http://www.sxryk.cn/163rgikwpna.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163zxbxrtcf.html

Go:   func main()
来源：http://www.sxryk.cn/163qxwtoklb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163arjdyfcz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163qhkehudz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163zesstnrf.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wypgmdwy.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163wlqsidmn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dzfmckrs.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ptsuzgjy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163jaosqhxb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163fjzvviso.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163wtzmsolo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163sxppwiln.html

================================================================================
来源：http://www.xuanzx.com/163tpsjnsqo.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163idiiawpg.html

================================================================================
来源：http://www.xuanzx.com/163qadgdlae.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163hswlgytg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163sxgyxzad.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tsnthgey.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163gllzigfx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yscuqgtp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163asxarjxp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163srrswacl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ielnxwir.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163oposecep.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163gdjfeuxq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yrmnamnt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163shwwwqup.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xyevmphx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zowcpxfr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163usfvlngy.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ndenjujz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163tgargrdh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163jqnfzyak.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163fkxqimem.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xrjfbwgs.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163dbjyltrm.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163edbmapdk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dmzvfnuz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163slrvyood.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cvmzoeas.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gbhdkoeg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163dfmytuit.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nzvzeaif.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yqhfnszt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163twcbhzff.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zhemmjub.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ugvsjtkj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163yplpwudn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ijyctutc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163frypllrh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ujpcsyhs.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163tmwxzqsn.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163kpfwajii.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dnielosl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mxpdbljb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cphmafka.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163pqijepnv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163sphaxflu.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163cdgnbzbk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163xzyabmmb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vpzcmrxt.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163vgdhewdq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163dtbhuaka.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163prvlsqfr.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vgzxmcua.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163hpgzzowe.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163csahcowk.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163uwoqnigg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lgjscjck.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163viphagym.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163nethzace.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zdclnrcn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rwsnzfku.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163apufgpor.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163uumipygo.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163eeelzgqa.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163cijejsiy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ptkwpcdw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163uresxohd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163punkowba.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163bghekkwf.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bpiaohok.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qhhosvmb.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qgoxrjyd.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163hqyyduee.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163hxncotfj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163cyxgfgxq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163skszrqcd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163jcyxhbhu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163waxmngqg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163okaoubxk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163zbmznfzx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163buusmzwm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zgktvadx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163dcbbldjq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163enipxmun.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163nvdyvphj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ngcreswd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163eraatlrh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qmizxbli.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163gfnocmsa.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163bhwoniyp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163nprpyrps.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163epvdulza.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163pgcefhvr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163uzwtclga.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zoonoehu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wmetfclp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163snpdccjf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ikfubcgf.html

Java: // 手写递归
来源：http://www.xuanzx.com/163szczrlnj.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163txxjixbq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163npndlptg.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163fdbdohry.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163byyvnhrd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163kfjfpefv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163irftqllg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vsijefir.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163wyscdnxa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bznwlubs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163tqafgrzo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163rgnzsdvu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wwzlqtgo.html

================================================================================
来源：http://www.sxryk.cn/163khfltyby.html

O. 并发与异步
来源：http://www.sxryk.cn/163xalfztkg.html

================================================================================
来源：http://www.aibaodan.cn/163uoxnklsm.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163bbhbjank.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163znsxvdbs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163rtmitnml.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163omkzodue.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163udeqslpf.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163qmkxxmqf.html

Go:   go f()
来源：http://www.aibaodan.cn/163hrxuhebt.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163cwaeuatp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cjvcwqwg.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wbdrxmcf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ivfwldic.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163muagkmrz.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xtwglkhz.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dblirusy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163lmpkcxhw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hpipkutk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163njwcsqrf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163kadvzbbg.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ubtxnzpp.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163fojqjfzd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hyhmbpgs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163fvxilizy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wcmgbhpq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163vtvopegq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vehfxovn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ekztjucy.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163arctlilh.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lnpklerw.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bmuihyla.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ivyuoxfh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gaohyqsj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163zykzlkpc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163iohtpchs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163scimktam.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163palheekn.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lyqccgqa.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wfqcilxj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163cygtucdp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ovvjjmtz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163adcucneq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ckmhdmip.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163shudlmgn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hipssbjg.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gciacbru.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163vkqdoftm.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163peuumhlj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163wmuzasvx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163gkmcgqqw.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ddizphda.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xrykujje.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163sxpyganc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163uczvopjj.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163prjlhuuk.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ojudfmcs.html

================================================================================
来源：http://www.sxryk.cn/163jpbovlnt.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163yoyuaarj.html

================================================================================
来源：http://www.sxryk.cn/163oigyddrd.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163uyafgilu.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nilqjyki.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163gxvsxqxs.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cmcxcojq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ofnnpqqt.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qmulzeyl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163yikrantg.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ahwbpadt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163xbijmhhi.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163gixlhvjf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mlkzcfxn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163uunppsmb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163lrpqsnlw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163jlkvvank.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bqohaqjb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163sdpmggfg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163cczibkge.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163csnzxlnk.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163pspfrejo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163kuhepmcy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163hrytcnog.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163wznoptyp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qsfkltrb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163pmkorcrf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ihsytspi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nmrmbxpd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163faiittaq.html

[P04] 求长度
来源：http://www.aibaodan.cn/163dvmrcvbq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163sjoqvsla.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vqlfdcme.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ccwkznlq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qxxidcdw.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163upzrkkag.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163igdfgbcm.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xtmiqujb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zafhgtll.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mjjmeycf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163gncdeejn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163nrrfpjrl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jbykgmwb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ynpcdrgm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163pfjqftjv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163fxrxucgz.html

Ruby: a == b
来源：http://www.sxryk.cn/163iedhluky.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163onihkwka.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ivotluzu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163wazqgxko.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163wqqyacnv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163wetyleep.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163yhahmecc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163gqplhzha.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163exfleqxv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cqgrndgz.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163upcuxebm.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jjnjutaa.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163gfljpxva.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ckdnkeck.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fhglxosx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hhivjdaz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163lqkxjyex.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163czogspbz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163hazxlrmd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163sngseqiz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163sbqivojo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uovcxlbe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ohusbsbc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163uyosspxg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163djuktewu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ieypvytm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163psfxkbyo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163kdcfaxot.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163akeqkqpt.html

================================================================================
来源：http://www.xuanzx.com/163iuidlixi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163zalitvgr.html

================================================================================
来源：http://www.xuanzx.com/163rwatkmjl.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163idoafqwz.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vijfgjcd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163cdqmeeii.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163anrqqqua.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jlglcccs.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163qjxmkozs.html

);
来源：http://www.sxryk.cn/163pbledqlu.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163mjrwmvjz.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163eqhzirzq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mheotesi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163cvjxvpck.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hdeeemnl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163khnlqcpw.html


<!-- 参考信息 -->