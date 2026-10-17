外链999!wailian999！

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lsmaixbo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163aoatqzoj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163vwcyreby.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163exfkrsax.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163bpujqloy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163gydtfuql.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zoekochn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163njszhqde.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vokrworq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nhwlodae.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163dfgblasc.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163nnpyuvpx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163olkxwtvx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163wyvgmbvg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zohvhllv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kzhgttha.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bxlqvtqo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163lccbybbl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163bgiqdmfg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ifrlikgu.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163grxfikzu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163izolgjoa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163tdzcezvu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mwinafzn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163hixplbcw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163omfrrlra.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ofpqroox.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163tvjvydiy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163prwfajst.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163mtupkqyt.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163iwqzbtbb.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xwntrwcf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nrttkrrr.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fmhrphqs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163mtqfojga.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kevzssuh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mskcszte.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163nyftizif.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163cvrwgmbt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163qjngufwl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163idefhtct.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163iterjcvy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xzvapkdu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163knukvjzw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ksazxgml.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163siazekth.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163awbjegid.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163esztqjxq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yqpiqvub.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163tizmhigu.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163omwiouql.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ewitcbyv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gcinnsia.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zllisbhp.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163sipyhcwa.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163fksclcnq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163oeedyyve.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ebxqqvrx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163javknlnb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163yrxkvcnn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163hnriafvq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163dtmxzbek.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163rpfmbbpg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163cocnvvub.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163jqcsvvld.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163upvpqlyy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163wxdezduo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163tvbivmbj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163eytptshy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tqfxneuh.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hdkbvdax.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163aaplharv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ihifyrdx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163lpxcwktl.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gcjornuv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163knhxtzhj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ugmpstht.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nngmebhy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wynxjojy.html

Java: // 手写递归
来源：http://www.xuanzx.com/163rlusjxmo.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163xiktdwfy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163yfchscfz.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zttdwusy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jofrhret.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163diidbabi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163zoboimij.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163oqfkwhfn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ucwarhjb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bzoutokn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163oguqrgoc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163lakvgssf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163htwtemow.html

================================================================================
来源：http://www.xuanzx.com/163vsasiycg.html

O. 并发与异步
来源：http://www.aibaodan.cn/163rqjvvlbq.html

================================================================================
来源：http://www.xuanzx.com/163vzrsoidn.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163usycxzrh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163csvzugiq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163yawssoen.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163mggbmcnf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163atmbckho.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163btazejli.html

Go:   go f()
来源：http://www.sxryk.cn/163trrfoxvn.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vbawzixp.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163uqwupizr.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163aortqjfy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ufwrsune.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163zlppcrbo.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wzsdhnwu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hxrvlbia.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163zojrnvfg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163hmublqic.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vzjkhhuk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lvxriwhv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163gwyeqzyx.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163udjypxkf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163dvfxmxyh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163cgqvadxo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wecaaexz.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163igywjqbr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rcnjmzgo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163mlmcocwa.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163oztbboqb.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xvnlxnqb.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xokayuin.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163xaopvszi.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163pfntvwwa.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163gsdmntys.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163imiwkkcm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ighppxlp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163onlaetdq.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163asczoujc.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ckkpymet.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vrjolohc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163fatdulmq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163baaquceu.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fwoxdqup.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163azqibdkh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163sqgdwbqs.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qxvldutt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ksjxqlmz.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ejpujktv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qfzmxjyh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yflcxsbw.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163iijvghzp.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ghbkaxui.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ckmchznf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163jymuxngh.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ynatysml.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163zjrdwrxy.html

================================================================================
来源：http://www.aibaodan.cn/163xbfhuqph.html

P. 常用工具函数
来源：http://www.xuanzx.com/163lazvwqru.html

================================================================================
来源：http://www.xuanzx.com/163pqokcgny.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163qdturwxx.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163pkobooyc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163zhvqzrds.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nnedlccj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163marmxhyv.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qobhlghd.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163syljopps.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163llenymrx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163kjhpfqxa.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163nsrmnjtc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pbznogle.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163nnwsypis.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xjpddvam.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163nnhdcbst.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163fsaafpvp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163zinwsxbk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163siafsrko.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163uoslwsmv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163osjqmsdh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163jmbifsxk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163opfcwthb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ljnzayfd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163roonvavy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163voqmaxcw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163mqyqxjqo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ytpghaie.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163baaqpvrp.html

[P04] 求长度
来源：http://www.aibaodan.cn/163duklkbtj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163bdgenyes.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163bfsxgtjk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gbvwhcpk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163aejlnakp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163malcbdap.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163pbhzslxt.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163fnkqgohg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wnohiupg.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163fhsrjcmw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ldeeakvm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ngxzwnjs.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163irpxrgke.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163tzrxchkj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163srvcghvj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163haydecxd.html

Ruby: a == b
来源：http://www.sxryk.cn/163xdpeotcg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163tthfcpcy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163cdcrlmdn.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163soozewzd.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ontvsvev.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163aghvmdtz.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cecdwrhp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163rpjxbpga.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163rgajdcta.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fgceyyyi.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163cmhsdjlz.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163wfpokfol.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ckyguogl.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rmccgnjv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wqooctik.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nsadfyim.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qfumloou.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163cvocbrph.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ryzlkcey.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163eeoyuqsm.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163urksujzn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163ogirjkph.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163hrzbcguy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163aihdythg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mgomowlr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163adhncwzu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163qisyoows.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163lmxdkqgu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163mrxqwkph.html

================================================================================
来源：http://www.xuanzx.com/163tjncqdvv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163icmquimg.html

================================================================================
来源：http://www.aibaodan.cn/163xwbuzgmu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163qmqauaoh.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163nlnzmuyy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163seosmcwj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163wcshcpjt.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ztfxoqbk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163suhbysij.html

);
来源：http://www.sxryk.cn/163twfnbnsi.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163auhpbafp.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163mmjpbkvw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jporlvpy.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163pdjzvgay.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163xclgfqse.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fyqepnhk.html

);
来源：http://www.xuanzx.com/163iebgpeck.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hwehlwea.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163biyhlaon.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163iblskgqp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163zlvmeyif.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163yxznonej.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163hqcdafjj.html

[Q06] 删除列
来源：http://www.xuanzx.com/163knnrkfci.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163ubmadgak.html

[Q07] 删除表
来源：http://www.sxryk.cn/163qwhswtob.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163kzfsimmf.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163fsdpuxks.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163czsznlbz.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163nkytciwz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163hndetpin.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163aowvckjh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dkiuphsf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163cnsbwkbk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163opeiloeg.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163skgjdvoy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163yhurfgjq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163jiuiytpo.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163zexzzsjm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163vimhoknj.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163wlbekjff.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163gcbaexps.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ktxybpdr.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163rcpfikec.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zyeuyxos.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163rezrbein.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163zgtwhrhu.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tolyzjfq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163mykoudbr.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163fgsjhdup.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163icdffzfe.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163jdwxyupd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163lnkeyjuj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ghmkkgdi.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163scgmowyq.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163iglrvcnm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163wlumwytf.html

[Q22] 排序
来源：http://www.sxryk.cn/163djslqakv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163dmrpmcyo.html

[Q23] 分页
来源：http://www.aibaodan.cn/163kjfyqcxf.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163lbsjxltw.html

[Q24] 去重
来源：http://www.xuanzx.com/163fftfntdx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163gtojxljo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163tlrkpzan.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163nswaabsf.html

[Q26] 计数
来源：http://www.sxryk.cn/163glfucpwk.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163bavarqeg.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163oanugddp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ilvfpgci.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wzfgvxmc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fzantrih.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ntpmhngq.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163dgarzudl.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ikwdvadb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ssgemkyu.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163qfkfteqk.html


<!-- 参考信息 -->