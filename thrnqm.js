外链999!wailian999！

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ixutjpwi.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163vodqmaul.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163fjzszdff.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qrinpciu.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ubudxfdg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163wwqikrjb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163zlemlyng.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ipgsursm.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163pvnjlbcd.html

Go:   func main()
来源：http://www.sxryk.cn/163jflwykuo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163duuebcwh.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163bgwxudks.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163epxzoppn.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163rwjelkcv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163hagjnjpx.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fbnqtvhy.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mbgpnlbk.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163tivzaght.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163efabegfk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163wlzqtkbo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163fhwuouel.html

================================================================================
来源：http://www.aibaodan.cn/163wqblfvqe.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163oeagxnet.html

================================================================================
来源：http://www.aibaodan.cn/163jjbrbwgr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163zcghqunj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163edihntxf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163clrmnghz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163acxbfzpv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hwkqkixw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163kofzmqnd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vqzbgovk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163juckjbuv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163cynesvlm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163hxstkjbu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xqknwlkb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ekoozmlu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rnqewwod.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163egxtdqer.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ydskffom.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163khmgeywz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bydxfbmk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163xqtxlczc.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163revjeliu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163derkcnub.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mxgioytn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163raxnflds.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qyskdvzd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163cczfwyok.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163amtrfkiq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163nniyxfql.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163xlcuzadh.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163wjnvuvdk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qdmwezew.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163izngemin.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wbautkai.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163eeddsutn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163werpdgdu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ktlgzusu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163aabebjws.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163maedywtl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163xbbwnxjn.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bnlqszpu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163cdikgiwd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kjalatui.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bhecthuh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163uerukine.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163rqcmtmtz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163dniifcks.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163avsjlcae.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vqxmdgnh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163znlkptjw.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163axzvtspk.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mdpdlsrk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wgpujmci.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163audjiiux.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163xgnkwttu.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jkprrcbr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163msrkhdkf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163krxuejll.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163hczgpcfl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163floxvbck.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163nyzmtpgw.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163osjmcbzh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163wvhxwrym.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vpjjhavv.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163huxlzgcc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cakzmufh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rswobofw.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ypavtghc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163oymyigks.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163smpbtnoo.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nzxkuqfv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163bychtmxg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ivzvtags.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163sroosezx.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163qgyqtbrz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fujnqwyx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163uxkrnaxy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gsnoufrp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vbfbthvi.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nzbtozyb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163gdinclzy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ocwptzdd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163vpvlauno.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163iwacljwj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hkbtcppl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ticdpdft.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163qjtvjcrq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163lnlmrbip.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163kntgyteb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163migbbmdu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163aetmtpdp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163inkhyixg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ctjspkpi.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163rkoeihxv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163brpjpknm.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163msfmhnry.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mkjjqplg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sctciywb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163klnlrupt.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163badgmewm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bhdfprgp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163mianfvqq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163fktuprum.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163atuprujq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163yldvwacv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ahcatfam.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ovyihmxf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yjtfcwyc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tsyfjmts.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bkjdjzxz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yviwewwj.html

================================================================================
来源：http://www.aibaodan.cn/163biewrpaw.html

O. 并发与异步
来源：http://www.xuanzx.com/163igumqxtc.html

================================================================================
来源：http://www.aibaodan.cn/163teoztbuv.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163gogdtezn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163joyrhjxz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163spdpkhjk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163kzmhzexl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wiqitzxq.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163sojmejuj.html

Go:   go f()
来源：http://www.sxryk.cn/163ondgbvre.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163zhbqrmfe.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163igyhsxtu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hzmeeugx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ymuaucvg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163oeyajxwl.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163czbvvblc.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ewfnfjnx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163uecovwtp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gkkwpiic.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ldluydwi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163bxforgol.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ozcpywss.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kehbxyde.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163mrrpqvjn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163hwxgcfot.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jhlkovjj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163khdjhogi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163svcreuaa.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163iloogtlr.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163puydlaey.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163geaoupeo.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ougobdnx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163dnvdacrp.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mwcbiotb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ssibpkyw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qtueurgl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163arsrlkzs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163qquhpkov.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163gzuwxcpw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163zcblirsw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163pmcbjkid.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ctgivkrz.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wtbkztfq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mujvrind.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163sdqovurt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163liawwnln.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163pzjgxsvs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163srxhlnbt.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163yjtbnzzi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163bqvsrrty.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163kcpnkalr.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lvdjrlee.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163gdlgxdje.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ugmsjmqv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163osnztags.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163lknnelhe.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ertpvlvx.html

================================================================================
来源：http://www.sxryk.cn/163lwprccpw.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163grbwzguy.html

================================================================================
来源：http://www.xuanzx.com/163akjptktk.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mxwnigmf.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ntgxolgk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163hfoysdyk.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fqfqkakx.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iikvwwob.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163zhezxlxb.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163tcirbbog.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163itodcwwy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163kmzrbbsq.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163hgdlmvmc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gnxkeute.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ewiwqwhx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163lwlelmtg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163owtrrfne.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163uvvazooa.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163qkyecckg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163yztpqhtd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xthbycwu.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gxwoiwqn.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163adkoxoiu.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jfhljvqy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163olpqibda.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jzxfgair.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163wqfsiqlk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163zdslpllq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163bhvkgqln.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163tfbimjmx.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ygpxepnu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xihckocp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xrhesijp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cnrleibj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xtchntyv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163rlfwaujg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163brfawoqt.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163jgqfmpcs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cvahgswr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163asoyamrz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xdpkybjh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163rhzzvzih.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163oxuomaax.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163yvycofau.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163dthpkmyn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xkhlsrqz.html

Ruby: a == b
来源：http://www.sxryk.cn/163ogtyfrnn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163bmaincbh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163tjacbtol.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163sweyhtln.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163yzohneyj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163wtxqrsro.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kiityheh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163lffwhpkh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163zcfnzagn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163bgjyfrkw.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vexbihzs.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163lrxujstr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163bwvcnazn.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163fsruknnq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kvlwczmx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zmekoqpk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163goksbitw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163qwktkeuq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163sipofify.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163vwaajgsm.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qyjqgjee.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163amlootoq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163lxxkeisc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wtgxvdir.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163qnepvaqp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163unovgywd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163lotukjmt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163bsuocemt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163drfkwtrn.html

================================================================================
来源：http://www.xuanzx.com/163sswyrlou.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163zrtvxtld.html

================================================================================
来源：http://www.xuanzx.com/163hkipwnpo.html

[Q01] 创建表
来源：http://www.xuanzx.com/163itknbaxk.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163aphyzbxb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yqrblbna.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163bimqcwrl.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163egfttayx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163nwgnwqcr.html

);
来源：http://www.aibaodan.cn/163hdwmdlbo.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163grldtmmk.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ykmnppnt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xplywnbr.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163jvuyzpzi.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163wotbefdx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163gtbzwgeq.html

);
来源：http://www.aibaodan.cn/163syxvvnhd.html

[Q03] 增加列
来源：http://www.sxryk.cn/163lxaptpbh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xngijnlj.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163yivjshiz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ajcsimva.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163nwdrfsxt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163gghlmziv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ihvekkut.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ujelqxfj.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qbshhyzn.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163tpttbink.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163tiedryhb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163mhjknfgw.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xumkqpbe.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163imdljgnj.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163oqbegfxr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lsxxyjak.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163xhjvblkl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qptrcfkn.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163jfrdjoda.html


<!-- 参考信息 -->