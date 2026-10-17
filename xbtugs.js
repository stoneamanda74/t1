外链999!wailian999！

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fivnaflp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163uduwdlzi.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163lkzpilif.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wmblayfq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hxbreqhf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163eazzhenv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rpxtgknz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163nbguetoz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ylvcvvla.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ntkdprcb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163fdywwdgy.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163zmylsncr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ykpuvxjx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163afdzlxbn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pdkagqck.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163uwmbrqxd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163hxybgjmd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163garzsymk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hdykrwkn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163aathhmkq.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163bcfkdvpm.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163qthpscov.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163rihexdkl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jfjopiig.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163aqjdmmbc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gngjrpxx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163hotjhrkf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163mokjhaew.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163nxrxkcmn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qefmprbc.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ysmdrxxl.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ycsvamjn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ofpmpimc.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cwcdtryd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163rvmkifom.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163swdzpdgs.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163eregstsg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ljruwfml.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lrfkgjyn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jbvkujmi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ljezxffi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rtepzucm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163mgywfaif.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163nndjptvm.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pjatfhif.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vavawnfz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ivnjxgjt.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163gautfefc.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163nozgocib.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lgwrbryl.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zexaqwwz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hixfpdrj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ylopoqsb.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163cgdmhkjg.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ezbletuo.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163dfugogwn.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163wxsfkkyq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163kqcomtxp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163uqyufdne.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163kfvdkzzv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tnlnicrk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163evphyacl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163holckwpx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163bhwycbgt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163opwjujdj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163pxdsawqt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163diksvbyv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163cucpgzve.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xxrjyvqn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mgkmrxyn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163xdsvhcad.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163pamnjdvc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ucunmbwr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163glzhzzid.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163oiazimyq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163iqycwkbh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163htxzrvas.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163giegwqog.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tlgahlwn.html

Java: // 手写递归
来源：http://www.xuanzx.com/163wayqmzsc.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163pmnspqpj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163akmdmnuf.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163nyzbfyeb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163lckxqoeg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163kzavtmzb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ifwnavxb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163scabbwkn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ncaedmli.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jurezuix.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qnfqzovp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163mpkemhkm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fgrzeaen.html

================================================================================
来源：http://www.aibaodan.cn/163vltpxkta.html

O. 并发与异步
来源：http://www.xuanzx.com/163mlmdgnwx.html

================================================================================
来源：http://www.xuanzx.com/163zkyoacix.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163pefcqldn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qbvmtcnw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163obdpwput.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163somqvwji.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tplizohc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163yvejnspf.html

Go:   go f()
来源：http://www.sxryk.cn/163ceeycjim.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163bynoiwia.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163gqmyndbp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163viogtipw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163lquzhqwv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163mgziqrpj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163elmhdptt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163emtgxmbt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mnpohzxd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gxcxcibe.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163zfghmkqc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ddxufncz.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163inanyyuv.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163tqsaommn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163evbypndz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163kvvvyzoq.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mquepslx.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ptoxjhch.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163dtcmzbih.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163wgqdcyja.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163kyoflijw.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ecfqonfj.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163lwrhfuji.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163cyrnwnig.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163fizdmbww.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cdeywjxc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ygmmdutk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163tovevrmk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163wxufjjzl.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163jbafehjt.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wzbigkvs.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163jcjsmlsv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163rcfvrggm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tfdscafl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163udjndtnb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jhhabrcq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163nsxzqlnd.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qfcdtmnu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163doshieju.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rdvvoqoq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ckxjawlz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vkyqebmz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163viymrdfo.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yqenrunv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gahonhgx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163nxptupmv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163citawxsb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163hehpfcni.html

================================================================================
来源：http://www.aibaodan.cn/163vsdrtumm.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163gfqbmiev.html

================================================================================
来源：http://www.sxryk.cn/163hkaxmzeu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163sibkhzov.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163hmqfkcey.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163dmkqiatf.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nwijpbly.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163pmdyjscs.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163uklkpcuy.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163drsrjwkz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gqonwuhd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vcezfnml.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163uhijrosh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163cfssrpaa.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bnjsnqlq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163inayqjev.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163lvuwhnyh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hzexgnay.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163aqvrhrkd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163egrhmizv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163eaqdfzpm.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hpfgfzjo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163wbnxlhza.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163dygsdthj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163upzjvzwy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wmtyvjnd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163obzhsrai.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163daihhzvv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zqjewdqm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163wandnosw.html

[P04] 求长度
来源：http://www.xuanzx.com/163urlupjox.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vtqixubi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rhnxowzz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lyuhzvmn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hsrsvryv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163jootzvcz.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163lrmlrvzw.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xmwcljru.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ebmpdsca.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bcjvhuld.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163uyiraktl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163dxumgfsl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163lpzgtupo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ninderte.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163qrrfwcwd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163rpynpjah.html

Ruby: a == b
来源：http://www.xuanzx.com/163afzallwb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163psdijnqm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ticgenez.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163wuqrvlfs.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163otpwvpxi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163oakrubdh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163fkfvzkcc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163qpcjmpmd.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163iqqvfvtp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xxixphoy.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163xuqtebed.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163zoxhbhey.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163nwilmxdp.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163rngcjzci.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163tfjaafck.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lsremxlm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163yfbpoahj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163mtopeazd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163dtltmhpx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163liswmkss.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163mwkudcdl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ttsdayht.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163kgywegkv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163jgyedvhx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163epptogde.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163dxgzfeyq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163mikfjdgh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163onnksivt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163uvpebsha.html

================================================================================
来源：http://www.xuanzx.com/163nqlsolaj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163smkkvjha.html

================================================================================
来源：http://www.sxryk.cn/163slfrardc.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qkhxgizt.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ahxtodte.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nauqfpuw.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ybbmhjxl.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163taedjnwl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163lqszemib.html

);
来源：http://www.sxryk.cn/163oyswoiuj.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163nkhqgjax.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zblqsarn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nobrcwrw.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163smoztnyx.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163qecoqsju.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163wlnoctke.html

);
来源：http://www.xuanzx.com/163muwrzgsk.html

[Q03] 增加列
来源：http://www.sxryk.cn/163sbpgxvou.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163hsiprylj.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zbgjgtem.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zihmctgg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163pspuvltq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163gjtulyhn.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163pmsotuen.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163fgmounlf.html

[Q07] 删除表
来源：http://www.sxryk.cn/163fnwhdtdk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163btykoauu.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163urlsmnqn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163addzsnvg.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163aynfhjji.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163mhiiuyao.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jkbgozij.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163gixseazi.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163cehbsvvq.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163upywpkiu.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163fqymfcld.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163kxdgwgmn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163rskphhsb.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wckmnpvc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ymqaxurc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163beazvazk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163rwknshcq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163hsuozuci.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163eolhyxsl.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163bvdbxxoo.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163lgzrzeth.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xkyvavxt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163pkbulxul.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ucdaezcu.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163oxjrxjjo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163kzurwdle.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163pjtlfoka.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163autoccvk.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163mrcsmbic.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163mhfwrkup.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zxpdpdhr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163fjqeruli.html

[Q22] 排序
来源：http://www.xuanzx.com/163lvavjfjv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163gfktvfyw.html

[Q23] 分页
来源：http://www.sxryk.cn/163nxwillpd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163eluppmkw.html

[Q24] 去重
来源：http://www.sxryk.cn/163zfbvhiks.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163gzesuuwo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163evfbgzan.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163cfjrcfro.html

[Q26] 计数
来源：http://www.aibaodan.cn/163riggcdcc.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163nxaysuxs.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163xnpegfaw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163zftdmewf.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163thwwjvwp.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163qilshjtt.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163kcitpftx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163necdwrwt.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163gvwepdzf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163dmipynib.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hggwhtko.html


<!-- 参考信息 -->