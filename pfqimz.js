外链999!wailian999！

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163yvdkkjub.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163thmntiav.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xbezzffd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jtkgijfs.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mlutxeol.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163vwznxhob.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163mzhouack.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163lmbqjtmg.html

Ruby: exit 1
来源：http://www.xuanzx.com/163nckogwxy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gjlvvpjq.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163dxbkuugq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163vgmyuirw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163axkngggh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163tqepvzij.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163mirbreea.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163lnjllatj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163vwimxmgm.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dhmyijwe.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163gvzqtfxg.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163srgdagic.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kqpvnhli.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163dduaxnro.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jolbjffx.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ivbfnoyk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163oxrauwmu.html

Go:   func main()
来源：http://www.aibaodan.cn/163zbgeeuyd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163rrxmffhp.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163gvdzgoat.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163mxwcsipw.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jlbwswsv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163famcawfh.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hofrybfw.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163iidesfvc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163bbkoyvaj.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163muzjsyxt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163nzvxjqxv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163exxkmgpf.html

================================================================================
来源：http://www.sxryk.cn/163lxpprpaf.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163grvizigf.html

================================================================================
来源：http://www.xuanzx.com/163acthgrnh.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163rfmlvrxr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ccqomwpe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mwclshsv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zjemsnak.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bjxtqbux.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qgitqlem.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163kwclqity.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ilsclplt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tgmyzwua.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163zsbwrhvj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tppzhulk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nophaedx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pzskdjzs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163bhxoaoka.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163kydlnqqm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163gxhydezj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163emnqljkj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163invpnfjp.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ealwqtjk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163akcxhnyz.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hrnjbeqf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ixlggfpi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ctmdfrca.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163koetjogc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163rmsjqoxq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163dhtsiied.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163imttrqvc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ocyghyiw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vltioeqy.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163scvdenmy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163zpzdbgjj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163slrbthtq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163tszqhetn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163dqlopqse.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163inirdmmy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qtauawap.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163khpxgouf.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nyelusck.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nrnoevii.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jtllvtsl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zfulynky.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163nkrxjjhx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zbocvnmd.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ivznfdlj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hedtzgrd.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ejxgduky.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ijncdgfw.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jundrjiq.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bphpgpoe.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163oaccvgrz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163clekzgxv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163exavpdbg.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rhupweyh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bleqrfes.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rcmnvdaw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ikwwlvsc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163cltbyntj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ikylqzdf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163bpgxixnk.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zlxzyjyv.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163zyyhqgbo.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163yoinfnqe.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163gkwubczt.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163yyxksbwf.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163cbvrzaoq.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163pyywukyn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ujenaxqg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sdnfmynz.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rhyjuutq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163llzvhybs.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163llxrjlot.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163vbihdnvy.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163chgnnmgc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jjogwwiu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163upanzoyx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163fxrmxatl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163gqbmmght.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163eusqtpzn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vkestnip.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vufsppio.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ozgxmtwk.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ajzovkvz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mdprofej.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nzflkews.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163fjrtwtxj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163umofsidl.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dauhfhce.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rxygxegk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163fkorpmni.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xlylobzh.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163fbrlwxqv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163gqjsmdqu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163obckxrxg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163fuqhloaz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wyobcujv.html

Java: // 手写递归
来源：http://www.sxryk.cn/163jmllwfxm.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vyrkepym.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163phaywkpk.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163anzeayny.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163mrrdjbik.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gmelzayb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163befhpdoa.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hqwkevsq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163eorkluap.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zveufgbe.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ahrycfib.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ghcpxjqk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zzeztqcl.html

================================================================================
来源：http://www.aibaodan.cn/163iqosdztn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163tagbwnty.html

================================================================================
来源：http://www.aibaodan.cn/163ifdtbpfr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163szgbhaqv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xpdnsltv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ioyrvvrt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ffisxohb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wkcdtrhk.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163szibasso.html

Go:   go f()
来源：http://www.xuanzx.com/163kxggcksd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163lgimpivj.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163cccjriqp.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163gggnzsjz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zrryxwix.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163eyybklwp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nxdlnjdm.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nhqlirrw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hkicthdl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163kazqxaiy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jfhebogi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163volryout.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163enkhczrx.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163jfmwkmca.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163vaonkuji.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163wzsogrjy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163gjbfepxl.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163icegteye.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163yrzhxnjw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hxnzvnja.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163avnkuqqw.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nowmrplx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163jwvuuhws.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ifnaubcy.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163llyflnko.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163cspcsavv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163zslfispu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qhppefiv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163hdysokiq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163haoosapa.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vxavxaye.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163jaspjvgx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qsbwmoil.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ufsaiehs.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qvvqrugj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163cuevpvdj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hmbvcptz.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163gtwozuwd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wmdiowic.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dlyhtwzs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163hxjpjkuw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jryhhnrq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qnxuecll.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pbmscpmj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xqhpfflx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163qsngjnau.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bxfgtznh.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jnljfqbg.html

================================================================================
来源：http://www.aibaodan.cn/163rxvxsirq.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163tqxermrm.html

================================================================================
来源：http://www.sxryk.cn/163otazejzr.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163txpbcgfd.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163mjjmowpv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ukdvuhrr.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dhcepbwg.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fqoslpig.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163vaxwqevx.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163hsnkcwxr.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wsczucnq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163pugertjt.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163kqxbbpbh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vhjatqsf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ylvblmep.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ssbyoozq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pyslujgk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163uoaxbueg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163vqvlmkoy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ftaoxbss.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xzyutmuh.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163jpxuzbwe.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163twuzogjz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ysowvlxg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163pexzvrta.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dbmtulou.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163pcktjnez.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163aydicvvn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gtjcatox.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jzhzlmlu.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ocghbocf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ubdugwsa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163tqxkhzek.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163onqqjbxr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dkgzlvcg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163vfcscuzw.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163jsfxzagj.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163tdrcbtko.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jnbeztch.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hbkbdyqs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163tjpgzvrv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163usmnrssy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163vyfgbajx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163migjgnyq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163gyzgxqlj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163tarrtmkd.html

Ruby: a == b
来源：http://www.xuanzx.com/163jodkpikx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163frvjovkt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ghxvhpfk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ymkadabv.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163wwcunvxd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jaskghca.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163yldyjzgx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163mqabukmn.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gmanylgz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163cwjqvslz.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xspuyrwz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163hwgxoyjq.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163zcikrkbd.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163dmptpyvj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163krdwupep.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wzpkiznp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hkbsvidw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hycvespd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hxcggage.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rwqomupx.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163eptlqdvd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163yqzjrwrw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163defwnaoi.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163hkmxathy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163djhrkcbq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163zxnsqpwk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163awoncwsr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163dnguamov.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163xptwzmlj.html

================================================================================
来源：http://www.sxryk.cn/163bhhigtie.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dcenkhkj.html

================================================================================
来源：http://www.aibaodan.cn/163fjslxhkf.html

[Q01] 创建表
来源：http://www.sxryk.cn/163hugnnqbb.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163lycebydf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tjgymsfc.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163cpcwyjec.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163hfqmnyrl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163uulbzkfz.html

);
来源：http://www.xuanzx.com/163joofxppr.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163tsyflwdr.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163nhiehriv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tyfhiaen.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nltjstsq.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zxtohcjq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ojokedat.html

);
来源：http://www.xuanzx.com/163luthxcai.html

[Q03] 增加列
来源：http://www.sxryk.cn/163adymgavh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163askirweh.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ovcxpwyn.html


<!-- 参考信息 -->