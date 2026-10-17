外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163nneygznr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163kucdcdyh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163taazhdbi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163fvxzdplk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163eowlhjsu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ndhqstua.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gnskvimg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ajzmzdkw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fptiddpu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lavhmjqh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gwkpisui.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163iolwchoi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163fdyeehxb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163yzvjzrph.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dajvcfje.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163murnqvva.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bfuahbbi.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163rzbadtui.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163bvuedzgx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163owdwiiue.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lcjivjcy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163znkofwxr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163nsxakkjq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nfsjrmvc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163grjmtnjj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xemnanss.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163qhqlivla.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163owmlnxbj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kxqahhaf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lgciadli.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163sekbsmid.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163vgqrcuqd.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mcqdwylv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rjcqfzhm.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163plppvqdd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163itwypedh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163iqennbvy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tosxxrwa.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163yccbdqes.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163khxbdqwu.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jtykpihu.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163cmmozvbl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163sviciqgo.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163opilvxjo.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163gbgmxkpe.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163qjnrjlkp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cihtzkag.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hwvnnsqo.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163dnbnftod.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163efggrvyf.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163cpjeekca.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ngyutlwo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163kmyexcyb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163leooccel.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163jnbmxxda.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163bhfrksvr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163sfqhusyk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ufbyfnad.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mlzanush.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163qntrwpel.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163dzebdbkx.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163umyojdhs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xpabwijw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ffvrdwtd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163rymxgrip.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vgfhplmx.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zilirutn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pvxassaf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163wnwdaqqk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fjjsxpcm.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163rrsllotv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163rhexckpk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vglpiyqo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bwyqrjxu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jpfwlmbk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163vhujswet.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163hjtfpjff.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163fnmxsyhe.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163mmfhylts.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kpcdoikp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163bkytmrbj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ypybdeng.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rkaacknv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uglgpqoj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163llkrryqp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163avyvohjr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163dtmxlead.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tlcpxrqh.html

================================================================================
来源：http://www.xuanzx.com/163srpqevok.html

O. 并发与异步
来源：http://www.aibaodan.cn/163yhsajeum.html

================================================================================
来源：http://www.xuanzx.com/163xoczmtua.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vsxqaxvf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dmlbbtfc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qblfchkn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jvcyyxaa.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mcpljqzc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163adizrttu.html

Go:   go f()
来源：http://www.aibaodan.cn/163kpemvucx.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ateyiqjl.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163dthrpmfs.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163qkbkmkfb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163pfqkbpai.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163qsziqizr.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xkmfoedu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dscdabvr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163yusstxhl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163pryikkui.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163zvyfcnku.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163fgwmaewm.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ofdxmwen.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163dewddnoe.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163tnsejecd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163pzoiwpiq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qgzwdawm.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163drvwrxqy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rngkuwof.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bavbjymy.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163crrxefbx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zhstoxfs.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163xktxyxor.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vylsifpb.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163picaqrem.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163vpxxqkgk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bzifnbol.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163tvdrwusu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jcxxughn.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163crtnjpfn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hlmhtpio.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163npxqiwyt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qpkkdzff.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lgjyacdr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gjismbri.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ltevzxdw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163isfvgtaa.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163chsiyopb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163wfywbnow.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163lgkzxuli.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163jhpcnbcw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ghrjzxob.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nbakosgy.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163opryiaei.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163moruzqbo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163clgbloxi.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163sywzmjqz.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163iwqvnfyp.html

================================================================================
来源：http://www.sxryk.cn/163nftrkhon.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ysribkyj.html

================================================================================
来源：http://www.xuanzx.com/163vtaytgup.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ltdhjxuk.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lkldifqq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163lstneioh.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zuxbaarv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cnnrirhu.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163cfcbzgph.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ojorvyrg.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163lzauksbv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qzvoyftr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163haozvbgr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pwutjhsh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mgihwgju.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163dwrxocdl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163bmfgsjes.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163imekgjkc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163yczsdeof.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pmmgmyma.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163mbijldol.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163aofesiah.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zswwaats.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ugknipzj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xpbnfpbi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163cssrgarm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nyvyenov.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163fsziyvtn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163xeherzyc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163yyaxqaqr.html

[P04] 求长度
来源：http://www.sxryk.cn/163jrkycctt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163jfxnrhir.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lolinlji.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uuuzpcba.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kkqygujo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163thckskyv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ncsfwnfq.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nvbhjifh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163gzjthbpx.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wwyebvza.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163xscopbaz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163goiucsvt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dynakuiv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vnfxrezp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163svnrfgxr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163dzkyiwtu.html

Ruby: a == b
来源：http://www.aibaodan.cn/163cvgydgsa.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ajmytgsj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mabrkotm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163cnvuewal.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xfoaxlrx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163sfmaftzk.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163wcbothnb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dccguimc.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tncgarpf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pejsfclq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qtsbnzfu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ckzvctkn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163fbycsaaw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163gyjgjshk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163zedatpmf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oojeolfk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163yhvlojzk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163xoilhjcv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163vinbfzrs.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rmaiobog.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163mzmknnwp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163csxisfni.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163wewchptd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163zymdanpz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163anodxcxs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163kwakzanc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vdgfytmp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163tdwdlstk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163vtriqofm.html

================================================================================
来源：http://www.aibaodan.cn/163iimrdsxh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163tvqkfcki.html

================================================================================
来源：http://www.sxryk.cn/163ffiljlsg.html

[Q01] 创建表
来源：http://www.xuanzx.com/163usrrkmaj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163tcjnqifi.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ratdnzps.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163vcmqbkcw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fdqgujbm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163tbtjrwik.html

);
来源：http://www.sxryk.cn/163xxykrcio.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163pmyiaarf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163mezhxota.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mfamhuiu.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163abppguss.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163owwwykcq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163yumepvqr.html

);
来源：http://www.xuanzx.com/163hbkleyug.html

[Q03] 增加列
来源：http://www.sxryk.cn/163tsurtule.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163wfpmwetb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163dxwgdpve.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163hxradksq.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163pspdqlur.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163bvhpfdxc.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xitlwvfl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nqubyeqd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ymyfycds.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163mwhliczg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163nsluesgr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163nqkkbkmn.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jrxfbepz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163hymkihkg.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163hoahotvl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ovzukmri.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vvugzmwu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ubexgxbk.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qaxkkxnv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163rkyvryqy.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ipevlbck.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163dujrufqw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163pkvpvzqp.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163brtmazxi.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163drkljtxe.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163gyddamwr.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163kajudsik.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163sjjqfhap.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163addxjwnx.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163hyvkeafd.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163kgdkvuzi.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ujydzuln.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163xdurpvlw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zeghivbb.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ymkwmqsc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163fzdrlfaj.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163vkwgrzsy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ilqtmxsz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163gehfejuz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163dnnhwkng.html

[Q22] 排序
来源：http://www.sxryk.cn/163yskmxwsc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163abccisnj.html

[Q23] 分页
来源：http://www.xuanzx.com/163hzcyfuzp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ujbghuxa.html

[Q24] 去重
来源：http://www.xuanzx.com/163vkuoaghr.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xodacwhl.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163niximfhj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163wudkcxhy.html

[Q26] 计数
来源：http://www.xuanzx.com/163chnsdred.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rasjaarr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163bvefwnnn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163tkxrqnxt.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163mbvehdrv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ylghnjuw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rjrgnold.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163yiardxmy.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163inwqtoxj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zwfkaumd.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163sqkeuiqc.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163tnhnlwja.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163czjosiji.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lwsodajq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163hxumcqrj.html


<!-- 参考信息 -->