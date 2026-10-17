外链999!wailian999！

TS:   process.cwd()
来源：http://www.sxryk.cn/163eenbrdpd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163larzkqoo.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163vkohrnbq.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163zvwuulgt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163henzgnpr.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163gndxkfhw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163aswoqaxh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163noeypuws.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ndflsxwm.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fuluplwk.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163dzcqvqhx.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163lmvneiwc.html

Ruby: exit 1
来源：http://www.sxryk.cn/163olsdirug.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qfmjqzfs.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163jxetixyw.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jwkzqmko.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163wjbpxovl.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163wkphlyrx.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zlxtrrmy.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ufmtrwdp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163jtkvbktp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163gqoiqlri.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163luvuvlek.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163hkrkhmds.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ednsisee.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163yttjvpeu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xrmknfem.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163zyppybyc.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163tuekzoam.html

Go:   func main()
来源：http://www.sxryk.cn/163nuxsjyfs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zttknwuo.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jqigebrd.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163utozmwzl.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163annzrbsc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163stkudmyx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163datszcgn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vzwtqurx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163vrdxgtgq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163akfphnqd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ughliyop.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163rnbebzvv.html

================================================================================
来源：http://www.aibaodan.cn/163colqhmio.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ncpcbdux.html

================================================================================
来源：http://www.sxryk.cn/163odsxvvly.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ibzpedae.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yfpgijcl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kzsldhmo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163eafqfyzj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ynycvrhq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ifmfsads.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163cymojjxw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163uggtxnmg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163epxcohvs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jbvlhyho.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163abrycjds.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hcefkvgj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cechjzud.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gbcpqjgh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163moqelpmu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163lbcidfjn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bmfpjkxi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bqwzxkhp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xlndgzoi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163kfpdxcta.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163bxrniwrd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jgovqhky.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gbslfbbn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163treboikd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163kldnydwd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qodmrkcz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163zhscakkl.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ijduoudz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wtvofcwf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163fisoaqqd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jpcrsmmo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xqwzxkli.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163quielpfq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163dcprraed.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ugfazter.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163gqjqsfyt.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163xahkllyo.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163uerwrjyj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163njecihwn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vbbqzvea.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bgedeztv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163aqdhymob.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163odvnmlai.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163atdfqhgk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163mtbxklsw.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ysndcnoe.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163fjnstdsf.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fpzvjxxb.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163upgsesbg.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nblmfylc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163sialvsuy.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lmqwqnyx.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hhrndemv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vtdouxrg.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163qrgoawdo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163kfckzsix.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163qdestawq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163pzqcmxek.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163hxootfwx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163lxtingeh.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163rhwlpueh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ohextqea.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ppmtmcxp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zrowhihw.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163sugaozge.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163doofviig.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cijeqgbd.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163reveisxe.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ttkxpfhj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163frihcxao.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163oxenskcq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tupycucr.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163rkgkykjl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163jnfvnpar.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rjnwjtzk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163eehvpwyk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163lqhaqxth.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163wqvpsrbr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qnvbgqyt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hziujkuu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163sjtmdhlp.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ehpjwsno.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163pqyozdrb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163pfirrxtn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xzgnarqu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163zixuksua.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lulzttiz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163wcvfqsaj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163pmykxnpt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163eyhnxsod.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163uzutxtlb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mpzaktka.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163imbdakom.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rvzghnof.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jedlldmy.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tkiylssi.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163xvrcshgf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163viltuksw.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163hmaixdcp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mtpogjim.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163jrowdlkm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163vqnopkix.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ziifzvje.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fdxcvbhl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wyyroxtw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vxhpqckl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ddjojxlc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ycussyzi.html

================================================================================
来源：http://www.sxryk.cn/163vbtbknmw.html

O. 并发与异步
来源：http://www.aibaodan.cn/163gkvktetj.html

================================================================================
来源：http://www.sxryk.cn/163whfofjgp.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hxlcudau.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163uhorfkwm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163sqhiotsq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163iicupygg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163akwjlxzh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163jurmutpi.html

Go:   go f()
来源：http://www.sxryk.cn/163udwaivbj.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163fuuoride.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hmolhser.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163noaovlqw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163wzktvrco.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163csnrzbzz.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yqgqycmv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163acuqdhjw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163kkqlxqeq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mhdjnegy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ryysqkik.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hffnqvmx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163sqktuqjc.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163joxmtvjr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xlkkdsfy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163pelcfuno.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163roypcnff.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jovvmrii.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163surmniws.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ltnadgpp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163xkxmugkm.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163sxxqwcry.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ytgzojts.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163xfzfehql.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163onpiythx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163wjdirgfg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163fkgwjhdn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163nwpaaaow.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163pmhmptnw.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163zniadtgc.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163aksylyis.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163wzidrxds.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xwfgbtjk.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qyzbniia.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fuhskgyn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163wummjnsw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163njakblkk.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163fkklfhuu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163gidohvsd.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163oobkzhpl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163bslolngy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163pfnindvq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163voyxcvpw.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163iuftulrd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163jtfwdzmr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163cossznic.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163oggtjoro.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dbruvcfl.html

================================================================================
来源：http://www.xuanzx.com/163eyatcxqa.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163hyenfvyv.html

================================================================================
来源：http://www.sxryk.cn/163xibzyhki.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hzefxpok.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wmlmffpm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163kyjczvvk.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163boapbkeu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ayeroqxj.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163vykvnsmw.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163asuaarez.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163vgoymiax.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163tmdrcfmk.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163etlomenb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163tkfwfcrf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163losxyjnn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mzbbhrkv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163nxlduxad.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163slzpqqfl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163oztmwviw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163dyoqhhvo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zpvgjmrf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163tftysdar.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qyrbldoz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dquyqheg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mkilitat.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kbxbugyv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163iqdownpd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pfhzmnmt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fcellbho.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163jiwixzdw.html

[P04] 求长度
来源：http://www.sxryk.cn/163rczqsroh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163lmsrsfqc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bkuumdob.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163izukrkqw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wzzipmki.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163whkcisji.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163lztlbnbc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163lhzsrkgv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kfekamyj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ltaxchmg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163frgfkkat.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ktyqobox.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163sthtogtx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163wtemedbu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163kfhtklme.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ugyafxtr.html

Ruby: a == b
来源：http://www.aibaodan.cn/163srgdzzpl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163yurmgtqz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ytojsgxj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163dichiear.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163pbyjecfy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163zgcnzcft.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163lyyrvorh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dypuadma.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163czmzhbvf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163zuaqeqou.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163jgolcsvy.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163lktyxvsw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163gqmrasig.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163bmcgwaom.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bxnsbqic.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zuzsjetd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163zjjwbifb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163mfvoczyb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163welguwhh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dzpglylb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163taxdbnxp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163rwmcdjdk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ghczjcvk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ealafvmb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163kgrvlsut.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163azoxvdpo.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163huxxgkhs.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163lftaqxzw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163cudfhfkp.html

================================================================================
来源：http://www.aibaodan.cn/163wiomclfv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163odptrmpe.html

================================================================================
来源：http://www.xuanzx.com/163wttkukht.html

[Q01] 创建表
来源：http://www.sxryk.cn/163vsvpuffo.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wdhwdsby.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163sibjlbsy.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163fngyaofp.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163mbuyslsy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vevuvhae.html

);
来源：http://www.sxryk.cn/163jmrlprcn.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163hekawcyf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163mbawtrcc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ozhwvilw.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163bgjgajdj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wqqphklh.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163hyjnznrs.html


<!-- 参考信息 -->