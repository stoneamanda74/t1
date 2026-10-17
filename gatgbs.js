外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163fcgsevoj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mwaperqd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cdurzqbu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163qetmhcfp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ievxsnma.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jkglekkp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kvvoxqff.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163rzgomiil.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xvojekqc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163wexqlcvz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dydiqvai.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zhadwwxr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fdqwvugm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jqlnwwot.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nprzilns.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163tfcehtuu.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163fkjrdjfk.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163stskfngv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163rjzoktla.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163uffixigm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163doskxnbj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163iybmndhb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163rftjchnw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163afhoealy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163codqyxfc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hzugvtus.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kgnnnmwp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163qctoycmu.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dkxqfaso.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ubxglmvv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163eltenxwe.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163xlpxbbny.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163efitikfb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lnlajbfh.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163tcvuofsy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dyruendq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163cerkdigw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163phzxitdq.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vbvpejdz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xiqvnase.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ditcarva.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163jksdjhji.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163crzujucg.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163lzggqipj.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163arzwbuuf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163jcdojibc.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wmbbjgiy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163chdaiiqn.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163rrajtgsc.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163avtgphlm.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163btwissan.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lnikjkjp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163dzajikwk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wbmymofb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ahuvowgy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163dzlozyuf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163nstsjiyb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163wegtniwg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qbzhxnxw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163eqnuldrg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xzsfjxfs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163tduhnvqp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163oklexngj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163eqmqodua.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ocvosvzi.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163utitzlan.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zwaxszod.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163tedskfce.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163tthezzmc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163odznhauw.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163tfkumxyz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ytkeqphd.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163jkgrwfyh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hbhknkps.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163yoyrchhr.html

Java: // 手写递归
来源：http://www.xuanzx.com/163flouszcy.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163otgivjzb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ozpjdhwk.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163bpkozvvv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163mmjxfetg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163suzbicrg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163kotegpfy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dnxmxzjt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163eoimqkmi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cmxgclcl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163tosmvqrc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163niryjnsc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xvrrmmqq.html

================================================================================
来源：http://www.sxryk.cn/163ojezzqfh.html

O. 并发与异步
来源：http://www.xuanzx.com/163flxhkelf.html

================================================================================
来源：http://www.sxryk.cn/163hwxpopsc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ponlvrxl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ezwozwuq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tamzzvbr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163vnrjdnwi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iybmxtfh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163dsgljita.html

Go:   go f()
来源：http://www.aibaodan.cn/163zmbzmfak.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163znkbchre.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163zfbgcvpx.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hdflrbfw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163kgkyelbi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163typewtlj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cdiawtdz.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ppxqyhpq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ezsufwtq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163rbexshsg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163jsfzilfu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163xwpmrhau.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163dailzuwm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kfqzcuzv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163hgylrdlv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rfphjido.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xujzdcaj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163rvonpubf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163wtuctjvq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163tudopbvz.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163jtutmcul.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gdtgzrgk.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163tlsgcbdx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wljfeqlm.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163gdstptet.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163uwmvabym.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mwwimoyv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163olaywync.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163nzwwedrr.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163tdmednuz.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ithwexlj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163jyowcepp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163cipafcdf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mfdqgako.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163atmhaawb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163pwdhkqxs.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163tuvmcvan.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163woybqogk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163leincuff.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163updtpinz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vokfghvk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163fcdiqaso.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pelmjpiz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163miahxcbq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163inttkuos.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ntnwcbaf.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mwmnfndy.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163fizrfeye.html

================================================================================
来源：http://www.sxryk.cn/163bipwobqs.html

P. 常用工具函数
来源：http://www.xuanzx.com/163tsthzbah.html

================================================================================
来源：http://www.aibaodan.cn/163kadvezpr.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ntkozcbf.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163lekqurbe.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163dlwcoxue.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163autwziwc.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sneqhdrp.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ktitgwwd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163cxuaejyw.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163ijkqufdh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163iusugvgx.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163djhjvsan.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ycxonjmh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163tdgxplqt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163hhhtxkwt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163leabrszv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163kddikzzv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zmcgyxax.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ctaogvfv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163pbtgygtm.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163tjyvlezv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163lerjdhrl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163rsvdqwbr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hbncnklz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163emcwlsgi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dwdoauwy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163thwuibwi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ucfgzoak.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163ewefguxj.html

[P04] 求长度
来源：http://www.sxryk.cn/163legsfuag.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ajmlsjhq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ephfdawd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zjiwuebc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163shqqxdgn.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ykhrqbvk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163zkvtwxvo.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ofprnlvd.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163vlqnkwrh.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163amrzplkf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163vpffkaqh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ushfshtd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163gofydbgn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xvuxwimx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qezdeljt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163muqvgqws.html

Ruby: a == b
来源：http://www.aibaodan.cn/163mbqhpmtr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163dinxveio.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ajaitazt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163dwoxcvkw.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kqktqbgz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163weuqfvkj.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163fwdgrbzz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163thlegaey.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163rohjvlml.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163obabwqfm.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163dijyntli.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163wwrqdgth.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163whszagay.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163zmioetrb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wxsixyuy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hyxytkum.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163fsxbkqlq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163bjhmaewi.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163whhjeqep.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163utnyksuq.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163obakwmwt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ffdvuzvv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wwwdrnwm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163cyseybbe.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163kawqyrxz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ookgoawe.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163teovhywv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163umfzkukj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163swdhpkph.html

================================================================================
来源：http://www.xuanzx.com/163vzcizxyz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163sghinonc.html

================================================================================
来源：http://www.sxryk.cn/163ytdvywne.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163nmiokzno.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163rgaaudum.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qbnzdqhq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163dvahmdli.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ayffqbuz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163qrorndmb.html

);
来源：http://www.xuanzx.com/163bgpukuuy.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163qgxmpilk.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163zqcrrhds.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jpsiyekf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163dtigtmvh.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163gkwzwgdk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163iaedcdwy.html

);
来源：http://www.sxryk.cn/163qnumuplf.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sfaddxkd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ajhblwon.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xtqvapxm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163xzvtappz.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163feoxczkc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163oztqappv.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ssanxjou.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163bxailvvn.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163drgjgheu.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163nkuqhuqv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hhixrdkr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163yvmrzrmk.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163cmppibwa.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163lfucempg.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163focjaqxt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163socgubvz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163varymlfb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163iabfjymf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163gsgpuoaw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ypvatimy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wlyvcoeq.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163cklqthsr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163urjymtda.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163kfvjraoo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163nmlxznmq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163oukdziiz.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163yuwzuzzs.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163xtyjbhxy.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163urqgzklg.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163wpittjvp.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163kommzavr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163iolkyroq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163kvcniiqp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163lobvlihx.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163cqdvkqlv.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163aayfydxl.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163wbbidpcp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163npsgsmfs.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163nbukgyuf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163cbjwbrll.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xaedxvyc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163pefvddme.html

[Q23] 分页
来源：http://www.xuanzx.com/163irbhgrvr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pouxwfix.html

[Q24] 去重
来源：http://www.xuanzx.com/163qajztdlv.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163bwjqktte.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163cxwstwyr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163quvibamt.html

[Q26] 计数
来源：http://www.sxryk.cn/163olzavfui.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zlfptntx.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gdkuzmdc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163xzhjsvpt.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tpoveupq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163gbrgqiyr.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ettmavdb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163oyiqqfus.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163pnwpfvgv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163friawtsq.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ietkseea.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163drncnwkf.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163oqqzdwkb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163itstnvls.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ftgoiklj.html


<!-- 参考信息 -->