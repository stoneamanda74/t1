外链999!wailian999！

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ygbspety.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163jnsrcfxm.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qaunqshp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163yhyzxjis.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163bttfzuct.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163virhppdf.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163bxjyiusi.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163emzakzaq.html

Ruby: exit 1
来源：http://www.xuanzx.com/163eenrtguu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163snuzulrx.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163prgerwia.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163uwcrqpug.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163yrtfqiid.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163jrdwrrvk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ikgovctb.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163srhdvrua.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163dwbtggkb.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ewshoygr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163fbfcpxgg.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pjvfuxgm.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rhqfoeyj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dnzikbce.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163dwwhlrqv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gzccaied.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163yeqnqtfy.html

Go:   func main()
来源：http://www.aibaodan.cn/163hdpuftsn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163lpmlitgt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163cdtfmbxl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wksfjhrm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163kclprluk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163xicpdzpt.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gdlpfvzb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163umyxsdqy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163txwoajaq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163puwegicg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163lpvpuuub.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163rqlmpcdw.html

================================================================================
来源：http://www.xuanzx.com/163mdfgeeti.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163fcsqfmai.html

================================================================================
来源：http://www.aibaodan.cn/163oejwaque.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163stzhavbc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163azmllhrw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163vnrviahg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ubhddnui.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163udxjhkna.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163tviewtpr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163vchwvpnc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163stheqpyh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163uqbekwws.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163aozuhvqz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vhgxjaca.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163hppognam.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ygqhyzbj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163piphymiz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163yevgsdwg.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163vqvlkype.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163trmabmtc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ldqxhwgh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bwgbpmnj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163vxfonoqp.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163vygftssw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jmrbvoyg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rcaeekcs.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163euspxsld.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jytbuawy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vlpooimo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uuxoiosa.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163jpomulvc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rzbzmfnk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163kxdvzitc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163slcmmxlx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pfasozpg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163iknjopim.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163gpnxdzoq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vqjcugtj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163irjndysb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163bpucchld.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163vcmzgoul.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163bhgkzkxo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163cqghiaul.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ecdzufhd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kcegocsb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wcceyoib.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163dwebsqhj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ykzkrvuk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163wkgdmvev.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163zzmxdvug.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163zeyfsfbc.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fhwysmvm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jinfdrrl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tsybioxl.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163xwojxgbo.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ljzhkglg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ljtnufvk.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163saabnhqi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qrbabzdv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163isujmbze.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nhtvglqo.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wyplimmy.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wgjrtyri.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163epbayyuq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163luseevbi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163lulwcehk.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163nxxulevg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ilbpheki.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163qagfvbpy.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163snbcwywi.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qamgfpts.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163lglneuew.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pquavkxy.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ucloglez.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uqsxjjkw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163afitmnvo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163bybfjbbr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zahmurgg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163jcqhlupw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pdnrymio.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zxmpltyf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163zvzuxdjm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163mxavqbbh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163lhpgsjsi.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163jqzqolmt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163sifcpcsy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163zdxdfebd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163iaolmjzx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qpoiecpc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pdhpngsb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163dwdiyrpd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163xfytydvy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ohpfqgld.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bxtqzovx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qriifkes.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xdpdedhf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hnjaiqrh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sbbvpnyo.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163dcewdith.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ldsjtetx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ajmbygmc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uwskcqkt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163huwhimgc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ojnaorzo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163bykwpyxi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vhvmmzad.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qohaqrsg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163srtnngsv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ijpkijzp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tssgziys.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ivfpfezk.html

================================================================================
来源：http://www.xuanzx.com/163jqpkrdgu.html

O. 并发与异步
来源：http://www.sxryk.cn/163jmmxgewj.html

================================================================================
来源：http://www.aibaodan.cn/163oowpdwbi.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ybdmcfcx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163fhadhmal.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jrlkvmds.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163zkcxvutm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tvkapoid.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jdxujipc.html

Go:   go f()
来源：http://www.xuanzx.com/163fcmmbtpq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163kcxbwwjx.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163acsyplxp.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163spkyrfqi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163eijjrmvd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163umtncjbz.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ughmrwte.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163trhdazkm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163uvshplou.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kartwshs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cdeimytj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163itfkfmbl.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jptvyjvl.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163skmeukec.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163pahppznc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mdoqkjlv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jdrffooa.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163lwpbxbyt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163htyayozg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fudwlfwk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163kmkriask.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fqgzomym.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kbovipzu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163efuziozk.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qyqwpmrp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163dqvlafdj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163cpdsoafh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163bzlcuhen.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163lgenkpdx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163cuibhkrs.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ofinhprv.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163fytdvktd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163btogjwqa.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163koadoxfk.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cinhucnx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163cbpccgpx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gabcphdl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163emssbqnb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163aqgqmegt.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163axcxgfvi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163doxeheeb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lrwhgnbn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ivoqxcqo.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ltvczshr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163izdjdsrb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163slsemrmp.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163xqgcrinn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ntmxtzvw.html

================================================================================
来源：http://www.sxryk.cn/163saaxejvs.html

P. 常用工具函数
来源：http://www.xuanzx.com/163rwmvtvpp.html

================================================================================
来源：http://www.xuanzx.com/163ouceudlp.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ngpdtiup.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163lhmqvwdm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163cqgzqgwd.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ksnikhsv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163srlcapem.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163hcgqciob.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ctypyfxa.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163nkiznegu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ltjglvnq.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163htbwdxfq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163redxwgsc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163nclhvfcy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kivlnhdf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163witvjqsq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vnzoiwcs.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163iofsjbwk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ziitcjtv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163hajbefri.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163iytuvywj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163kstxjnxi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163vrtlbgsm.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yjaqpxxe.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mfgwbrpt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163eevnbyeu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163gupgcdkv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163idytzmta.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bgblsgev.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ouofwgmm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163iscmerfc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163dxtohykj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gjbfqlcr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vbvnzunc.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163rrrugzkw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163wrlujnla.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163bddbazuy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163bpchwxjr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163nlhhntuy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163uvumemcf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ubmcjyep.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ytgdvmtw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163jvvuqmvd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163njomuras.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163nogpunkz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163twbzkuol.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mvohdcws.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qfdmeaja.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163jhsaartk.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163drvbmxtt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xaxsxpzv.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163fkcbnjxp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163lcenjdgd.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163fxrjzqil.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lnrowxto.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163nikuvqrh.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163tdtyizpv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163duylmmuu.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163qbqbuodl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lcwwovjg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163thgedvmk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163hqasqxrz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163skqwxmry.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hzoidztm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163incdulbn.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163rauiqdgu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163srmoxewa.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mpjiapft.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163sjeprkmu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163pjnxkdfa.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hxeqyjvw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163nfaqhjmj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163jfpvpxbc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163khrtdkvb.html

================================================================================
来源：http://www.xuanzx.com/163zjdwbytj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163cnormque.html

================================================================================
来源：http://www.sxryk.cn/163mmqsmyne.html

[Q01] 创建表
来源：http://www.xuanzx.com/163fuausbtb.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163znylkcfm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163oezhhicj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ilwbfcjc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163thdupvlt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163oqrvlxfp.html

);
来源：http://www.sxryk.cn/163zyzywonr.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ogaibzpq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163ouomdptv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vtpmrnac.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jnfnrerz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ayneftjl.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163cnluptdt.html

);
来源：http://www.aibaodan.cn/163qflxtser.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ndriycud.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163nlvibeud.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jhccmpnt.html


<!-- 参考信息 -->