外链999!wailian999！

TS:   process.cwd()
来源：http://www.aibaodan.cn/163lsblwncx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163tzxhvsae.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wrzytfjf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163upeucoka.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163xwizsotv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163dynlhykz.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gfdcfhka.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163dvxfaeyw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163uctkiypr.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163oqoshyyh.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ighcbmem.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kngyvtfh.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163hcuemswe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hzxnchyo.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163greiipva.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163icixxlyb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163jbamxszc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163fcarfydk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163cnatlnqo.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cbhkxvej.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163suskchao.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nqmtlgfm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163sjmrtmjd.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163lizpqkjn.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163kxaqwvca.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163iylqhnis.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163pggzjlwu.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rgmyyzaj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bxlbzhnz.html

Go:   func main()
来源：http://www.xuanzx.com/163cprtbnud.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163mccgnxzf.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163rmmfjcos.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mmhlsxin.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163cyighxud.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163prdyatdk.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yjeogjal.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wfdtcknx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163uollqiyq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163lpzfmyad.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163bsoouoga.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ugyadghp.html

================================================================================
来源：http://www.aibaodan.cn/163vizmshdi.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163emaymqid.html

================================================================================
来源：http://www.xuanzx.com/163ggrmlemu.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qjqaamcb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163katovftx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163nsrugqms.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vxojdlhw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163cchftunk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163fdhuwvxv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163siwahzfp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163usbmacri.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163chlwjgoo.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ocmjvarv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yzaiqeme.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163rkygyckj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ydgvrgdp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xlmreftp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ydtoeipp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163niussyyo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fbpvkfij.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wgiekctw.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163yxvvenht.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163joisbzor.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163naxpddqu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jfnzofuv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163csxbfyva.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163rxcacubu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163djezgnty.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163hkbhylqd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uyjmjqye.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163rwwfhore.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xduyarjw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163irzthmvx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kkxqkxvc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163olglyand.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163kmkfwlvj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163kztbklac.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163pvfvjbel.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163zcwnpdbb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ncjacbty.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163hzxddjbh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163saumbavq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163njxzfani.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163crwfgdkg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163dncwrtja.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163niizrmiz.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163bpnytpjs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tdgctvgf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163tjacfpqp.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163bmatkkms.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jswjgmwy.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hkkilweg.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qveqnzki.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hlncspld.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163icdlecgh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163zuirsgid.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bigxllco.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163twhmxexn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163mhsvbsua.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ysvepgvl.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wtizcqjq.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kpmbhgwt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163iurvtdvs.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qcdbniaa.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163qpnxklih.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163apsqfvmd.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163tycrkqkg.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163abqrjcyq.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163rrdvaqae.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ukykotss.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163oxdqrktm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163xzjurvic.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wogdowiy.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163duyydeej.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zrfnrtvy.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163egxcclpl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163deqjruns.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163twmlldjh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163nwrggjnb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ycbkaqff.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163nwpjasvs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163agqsvcnb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163pvyiymcz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163kmcuqlfd.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ocwqpdem.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163gwbkveza.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163lfgescwb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tznsbiht.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163yphdhpvb.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163yzjaoggh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rhnrckfc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163liwwloai.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163abtuwuok.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163irikilru.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163tcgufcjs.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ylctmtjt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ykflrxuf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xvmytokk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163psbotdqd.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jpackywr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163gsuuzdha.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163dbbmwtos.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163trzvdcyu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163vrkfjylj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163eqrlucut.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vmyrvccq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nuibcahg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ntkfuajh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163arjjwuxy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163pnzopvgu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163abhcbwhl.html

================================================================================
来源：http://www.xuanzx.com/163vwzejeax.html

O. 并发与异步
来源：http://www.sxryk.cn/163bkqflppn.html

================================================================================
来源：http://www.aibaodan.cn/163osaidwam.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163qtysawjm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163iprwtjec.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mivzjueb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163rmmvyrlp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vxxysqqu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kuhaufaf.html

Go:   go f()
来源：http://www.sxryk.cn/163lhqopgrn.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ofcbsndt.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163htrjuxtu.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163tdntaccz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163syxjdgiw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163sapnwxah.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qnunztxl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163prqkiqfi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163doiqhnhd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xqpoltko.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163terwehlb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163gkvzlywz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ovmkhtfk.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163qxsrzohe.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163bvmlifrd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lckpaziw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kueguexv.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163kpexludb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mxpbhcqt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163fyvjwqor.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163kfhvlgwr.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163edkafslw.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163gunkmxbz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163bgmdkdyl.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jcdbkmzz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163deqixiqn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163hfpythgs.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163kgycmxhe.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163snffdvsb.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163eoxwsqhi.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ukcadprf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163bpdipmye.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163vlbhcftz.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yqcujfwk.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pngtxytw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163irbfpaaa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nrnyzqcb.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163iyvaxdia.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163uujobdfo.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163sswhquoe.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163pmtcjbwf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163igbbwsom.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163eofttbwy.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163resyxyyh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163rbwzgwae.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163hkhqscjd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163bndyzoxf.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163idtkqsan.html

================================================================================
来源：http://www.aibaodan.cn/163pgsdswiq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163hlwsznfv.html

================================================================================
来源：http://www.aibaodan.cn/163duqgdnqf.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163bsqtnpij.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ugnfdgvr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163bbsnvkqc.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cmcbawkp.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163oxueldaw.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163intwnfyn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163mhmlrmmt.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163rlrdyqug.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163dzxtbrbh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163cbkqpjnn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kxlbypnj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ysxdjqdd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163esyntlvz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163dqvwzimc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163gtwrioud.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163pdtigqne.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163rjbzgazd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qtsmonjw.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163hhdefdfw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ivvurcab.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163grubklbu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ffedmshb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yiqjweqj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qsvkcuoz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163xhvktlka.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163xzwjiyqv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163gyxblwph.html

[P04] 求长度
来源：http://www.xuanzx.com/163fmdmgmbc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163bzozmwfz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163woppboyd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lzxqquid.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163oebwwebm.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163julicref.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163rlyqavpk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163kvzcvvao.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163trzjfxjr.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rdtsrpvd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ulnfrfnq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rnbxwqai.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163dsifwgbk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163bfcjvcgm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163tdksbphh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ykqiknzt.html

Ruby: a == b
来源：http://www.xuanzx.com/163hjxcween.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zlrawdwe.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163hlpvuypa.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163nnipcxoq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jjsptfjc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vpkefekk.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163rzlwsosx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ftdobggm.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wthhleuf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163wooajcow.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163uaogpjwy.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vnndsjoi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ikhrubuk.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163zbvketgv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dhuomkrv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163uokitiik.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163btceljnt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163zfjfzttu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163dvntzxld.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163fdueykis.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lsmxipje.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163sagvlynl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ssvwoxcw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163xgaakyji.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163derqdkvw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fdbyiubo.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163durrxbcu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163qrmmeles.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163suyzcgur.html

================================================================================
来源：http://www.xuanzx.com/163hrppxehw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163eqbfilbd.html

================================================================================
来源：http://www.aibaodan.cn/163yupkhxem.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163voueoeed.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ftkxwewy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163squuraxz.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163iknlxcua.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163ibgaqott.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163tmvmjcis.html

);
来源：http://www.aibaodan.cn/163ycyfhbgo.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163xakjlvfj.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163oltwwvps.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yaykrqeh.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vluznkki.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163dsxphuxo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163iztxaayg.html


<!-- 参考信息 -->