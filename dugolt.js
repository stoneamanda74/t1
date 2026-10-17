外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163etefpdgk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fenrstaq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zrzroowa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163iwjkiixi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163zzenymrb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163dkjgkxzr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163bprflhdr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163egwbxmgr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vusifwms.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163jalsjqek.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vopipeke.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bybnjrnv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163wpswbpqt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163bqcoyhnm.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jbwjlsia.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163abpuckvs.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ydmshqgl.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163rvggbtfm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163knxruddl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yknqwihb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vrxwynmv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163nnearrur.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163biydkkgf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ghcthzin.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ghliqzrt.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163mvcvbvrk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163dgmyxzpd.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nlzwbsuc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163bjufuxqz.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dyisxfkx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163rvywprja.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163khzmuzvs.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163fuakgwgd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163qjnpuhve.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163iskkhqrm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163fboayccy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163gqtkbsbh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163huizycqx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wpavtbri.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jnhusbeb.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163zihrtpfz.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163bmlrlfgf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ymrenecz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163dhtypchk.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163igqokgbr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163anqymseq.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kxnwrnzs.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rsooiqwq.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fvdiidkr.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163hccpmvkf.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163wmjbpggm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163eegvwbba.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jiamupxs.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kncbsjmi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ytmpnyfd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lwpwinog.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163htksbfzu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163habgrhey.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163afzfzcrb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163uuqpkdzu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163dapvwnoz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wudfjadx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163zckhlqlg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163gnsrltqc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wdixthwg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zyfvvmri.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ypvumycd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pdklrauc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ksgtplls.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hrnogigr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163kwmilmkh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163fjsipmbj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163nlevzglz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ppjlwlok.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gaggtbeb.html

Java: // 手写递归
来源：http://www.sxryk.cn/163jspervxe.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163oknfqzdn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mjutfffr.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163yurnkiqz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163jlkampgs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163bqiyoxbq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163iuqtpujr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hemcjtyj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qsvnkxlu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dfxehwtp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163cungocdg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163mzhvkvtr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ljuahtxa.html

================================================================================
来源：http://www.sxryk.cn/163ffomacdo.html

O. 并发与异步
来源：http://www.sxryk.cn/163nlsugwrk.html

================================================================================
来源：http://www.aibaodan.cn/163rpaxjrhg.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163fnemmagx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ueymqqrh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dpkkrwgw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wnfkupad.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jshykowe.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163wfcgljza.html

Go:   go f()
来源：http://www.sxryk.cn/163npwfmvbr.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163orbzutbb.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hqabmrpn.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hjwqurvh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163jmrupopk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163fwazovhs.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163apsutgao.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163cqvqrdrj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163dtxudwrx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qovyhufu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jxnxyeaj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wkqadgje.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163poyipxvt.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163iicxlusb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163fyjgndeh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163htbvgmex.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163dazbbppr.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163wacdflpt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lgdkmbmb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dgsdojrd.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bqaounsn.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163hjjjxagh.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163uqafahev.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163tacsqsek.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163fxdgxggj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163sfbnzyzf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163bfyazkcu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163utasalsn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163lnnaxbkg.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163tnjzqfrr.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qmgcnxrm.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163wehwgadc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163nikmlwzs.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163tivkkmqm.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wodzsgir.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163osohxwqq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ajqzhrax.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163huzxoghu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163iafmwqvd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ohrvxflm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163yyckanbj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163kacpmywe.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163sdclgrwp.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vhmizayv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163dqcekkyv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163rornhqyq.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163gncsvxow.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163xqurhvnz.html

================================================================================
来源：http://www.xuanzx.com/163grdgbqbe.html

P. 常用工具函数
来源：http://www.xuanzx.com/163tqoqmaeb.html

================================================================================
来源：http://www.aibaodan.cn/163kqwmcodw.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163lkwfpofb.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163pcvonrvw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163iplnattt.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163eahsnaaa.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163leyrzowx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163czsawpnu.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163omereoxo.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ixlfjaur.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163cszhwiul.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163elkexlgj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163kdczhklh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163trddwcxl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mzlhsqgy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163wmsryigi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xddtnwwe.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163rquaukqg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163objdocfh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ixzdzark.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163tvnvxgdy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163yrnembfl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ybkjergc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jmprchui.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163sdenqhqf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163zvhgzdow.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163tkxkomzh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jvcahkgt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lzjevpim.html

[P04] 求长度
来源：http://www.sxryk.cn/163ubhutzub.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163vqgkeqfi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163akksuajs.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nexywfgu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163mzuhmcrx.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163kfxfmopu.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163edieqnyx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163iyrcucad.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163oylmgcsx.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163olxgnrce.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163hvtrttzh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163prhoxbkz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ejbccnit.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ajbpnxdf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163szavfozj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ubcklxhr.html

Ruby: a == b
来源：http://www.sxryk.cn/163pzlxpvhr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ydvxlbci.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ytkpslql.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163iatsrniq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163icxsqwej.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163zhqxzrlx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ntscnmbc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163fskzkdpp.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163essepqnm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lqdawhrr.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qcqolrjf.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163pgybnwfx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rjnvqgnp.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qwyurcme.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163blxoxxav.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qowgzewh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163yxjrahwl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163euigeqrf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ygqnejsw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163pcmhtvrr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ppprrkbt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163wkrfrmev.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163agqegmin.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163gqhfowss.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163knhlypvi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163vcqxnnbw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pajojdje.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163zttweoum.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163teaifuzu.html

================================================================================
来源：http://www.aibaodan.cn/163aegytvfb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163bjyfkadq.html

================================================================================
来源：http://www.sxryk.cn/163culxhjfl.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jvgfhear.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163fbnwmlld.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rxqyvbid.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vptdbauw.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163wldbigwu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163mviqtafv.html

);
来源：http://www.sxryk.cn/163lqaevjkk.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163yjdeegwk.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163pgsybimk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163cxblyyjg.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163nwkvpoff.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wjriaebm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ephnfggr.html

);
来源：http://www.aibaodan.cn/163nirhfaee.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ktpodgur.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163hbzwlqbl.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163mjepzubv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163jnpoizcp.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163kvshenkc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163xybiozry.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wuhlmfkr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163trnfnnzv.html

[Q07] 删除表
来源：http://www.xuanzx.com/163muuffxqd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bjucfooe.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163zrugllkd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163nasfxmxn.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163uwqfyaxo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163xfeqihyz.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163lsoizdeq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163mbxyjlau.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163waaexvgv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jwsixemd.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163wojgxtqi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163npszibzf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jphxtqtk.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163vtyvmnik.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163spkctfbq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163iyfqkohb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163nodntzoc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ejmlxfgj.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163hqnjfgzm.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163iecgnspb.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163thshlspe.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163btvvtawk.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163quyjxuxr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163hahrluqi.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163huynqxgm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163hxoluxqj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163bpiwilhm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163wldxynaa.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163doreyscz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163eugneuvm.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163kvnzpqbu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163rzpxamcp.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ytqmflxm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163wyifhaws.html

[Q23] 分页
来源：http://www.sxryk.cn/163cvdaazvp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163aesyeaqo.html

[Q24] 去重
来源：http://www.aibaodan.cn/163wggusqpx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163jjajnbbg.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163ntgxxfzm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163sdngwzfx.html

[Q26] 计数
来源：http://www.sxryk.cn/163qihdhigs.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163iemnxaez.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163titirkji.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163qsyptxme.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rfksjzwc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163fhslufug.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163lvirnzfr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163fqqgbvkz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163buwynvxu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ictfbydb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cyfluczg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163mpbiucgy.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xezetons.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163sizfzypz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163rixdzmnm.html


<!-- 参考信息 -->