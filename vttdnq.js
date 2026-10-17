外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ebmvhbpe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163adcrzxco.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jgxreawk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163zwbkgtfx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163raqrfjis.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bcmzbdlc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163sjbugptm.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163rlmpuzya.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kyubeukc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163woxuakcu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163fyghpuqi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hdytkhis.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wxtodugc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163inpgqqdv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bhftyqxv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ynfmwnnx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163yfkgnfwi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ugvwfsie.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163phlhvzby.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163svkkiyqu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mpauojne.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163qerkbrwi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hxmcsynp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xojvvnrq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pbzrietx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163sapbmujn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cgzntnku.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163regfmnih.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163lgqvorls.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ourhsjyl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ezwxozux.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gofimxbh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163zznwfaqs.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163gtaituzz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jcicxrcu.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163wuvxvtcz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xnqszuyl.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163wrkdpxsc.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163kdxpulke.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163stniteum.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163owuhiksf.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rkavtefy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163udthngln.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jbairzfx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ldcvrqnl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tqdiyqly.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zhrobgyn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163lcabusnk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163kuqdpbnn.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163iwvyuwfw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ttkdfhvt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163tsfchyvo.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cgfuqgmc.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wnkdxyrr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163tppqbymd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163cfenufol.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163oyijoskm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ukrsbsuq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ikugnscr.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xntzqhxd.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163jwztmatl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bcazmjjm.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163nrymotoq.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rgyphywd.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ynfkmhax.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163jqiikigc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163uxzoxicl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163znumsllt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zxhecgvt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163hdsrohrp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163mqbvwovl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163uooptcjy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163pdcblyde.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163vprnfzxe.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163gfyscwns.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163puxlusym.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163mqdedwqm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163iyznhgxj.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163qwianlpx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163eaethoch.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gutdzjmo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163wgogmdqb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163xeugdhea.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163twwfasek.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163anvoxapy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163rsnxioaf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ivvwihxt.html

Java: // 手写递归
来源：http://www.sxryk.cn/163cpfhfaby.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wczgburg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bircegpk.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zflruxes.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jwwzzald.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163qxwuigfs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rqjzivzq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jrgxizux.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rebowiqa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fzikiaqm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cefpldhy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hdovlunh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163pjdqbift.html

================================================================================
来源：http://www.sxryk.cn/163xmcmhhac.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cpkaucny.html

================================================================================
来源：http://www.aibaodan.cn/163cmajocsx.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lzsqsxzm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zytbofzt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163uuimdshw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163mzvsdgec.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163oedotmdy.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ovwtwgwn.html

Go:   go f()
来源：http://www.sxryk.cn/163ustqsvyw.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ybywwpqd.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mfntizjo.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fdqnnfod.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163uennlzbj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ntvgwyfq.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dgusbpfi.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gevtnbuw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mwzmqlca.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hgifuemg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163wxtjwkjl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dshhaakm.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163arhqmstj.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gsgfvggp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163zblenwbp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163puznztwm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qcwuyrqq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163rdqkqwnh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mekdxxdk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fxjgmuep.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zjfjslus.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163dxsflwex.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hwxdtoqz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163xgzrrfzq.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163rvnebwzv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163fhcmkotx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163orvxaurv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sozeicfi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163avwztoii.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163sbjaqigf.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hpynefbd.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dtakicdd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163etthllua.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cqogzntb.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ybkurnop.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163rcspbzzd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ogxpwdpu.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163hjvdowjq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163bjwnloqp.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163pjhkiikk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qfjxnoso.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ktefronl.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163usbifqag.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163avxeqyqx.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163irjwdkjf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163bgrzfgng.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163exvjodxj.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163slcyabwr.html

================================================================================
来源：http://www.sxryk.cn/163bokmkokz.html

P. 常用工具函数
来源：http://www.sxryk.cn/163qntsbbta.html

================================================================================
来源：http://www.xuanzx.com/163gdniivjh.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163acefzayx.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163oyjpevkt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163zhnzrwet.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ytditqrg.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wztfyaad.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163vjcgdwjh.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163kamzmxsj.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163zvparsmo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ybufnttg.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rgzxhrfr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163dqmwjidl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163xandhcwk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163nepiazhw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163uxuwwhaf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163czpdwshh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163gmaisxnr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163dcsmsqlp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163logafzoq.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163npfzfpwh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163cdajuqio.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163acxdleez.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163eskdzpev.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163afsilbzy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lnpxhegw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zxzejivt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gmotczlh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163xkbmjpgp.html

[P04] 求长度
来源：http://www.xuanzx.com/163gpkncmme.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163auhvmyhl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bwrkwory.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sqwtzmep.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163iqxeyzzo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163pnyfuhhp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qfapvmua.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163fjyvyvqn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163vqiiqikb.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jjhokuyf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163vlvivszv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163pnsvhsfz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163hdssstaa.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163tocdhnad.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163njxpclog.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xsjdkbdh.html

Ruby: a == b
来源：http://www.sxryk.cn/163bpdlxgnl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ctfxcpsc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163rqomwnyw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163hjglszbr.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vyarahdl.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163bkmbpgos.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163fhdfziak.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vmayxesl.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163qsrmajxd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163pvkupjhd.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163angbythu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ovcwfzey.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ycmvtftz.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163wovbvbyc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bpifbsod.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163uibtwzxv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163rxoctmpl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163enicxcyf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163inkvsnls.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163nhtivwpe.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163akwoybtu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163kaxdgxjx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163naobcrvs.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163msfmexfn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163tdjzdbkb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jaujfryp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163clqugrug.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163tprahopl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ligpajgn.html

================================================================================
来源：http://www.sxryk.cn/163xbvejlzj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gjososqe.html

================================================================================
来源：http://www.xuanzx.com/163wvsnwhwk.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kgfnysqj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163asqtvmzw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163gdvdwtty.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xxyzkmbr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163xeiwtdwc.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163gjmtdslr.html

);
来源：http://www.sxryk.cn/163vemqfarb.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163lqzdcrox.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163qnwthdqs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bqxkjmkr.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163epvjcwxn.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kutlwxlq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163yemuxorb.html

);
来源：http://www.aibaodan.cn/163mwmgezrc.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sqpdkojp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mrrpmpmz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163vpwwsbaq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163hsqpgrlr.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163crbilsou.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163cvcbquve.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163nrpmcdmi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163jwcguzwk.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163fobwsyhq.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163exrxvobn.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163eacklnoy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163txpxqgro.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163eozgpbxr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163wxcxubiw.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163yskltscc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163sprkgosq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163iuwcrccs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163wllrurpa.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163xoqwhdnn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163djtmwpqi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wmrradwy.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163plgmyhwi.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163khiyeypz.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163enmmzanc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163nrygmcbf.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163kfvpvhko.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163kcnctkdo.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163swuyphvo.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ifnsjsvd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163vpisskuq.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163olmnfkht.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163cmwjjete.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163epohcwag.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163btxhzgdf.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163tkirqpxj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hjuvzkdq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163uaakqjtt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163fkidmwmh.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jrgevyif.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163uvczbmrd.html

[Q22] 排序
来源：http://www.xuanzx.com/163davexbap.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ksalokgc.html

[Q23] 分页
来源：http://www.sxryk.cn/163rvodkrcy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163czndbpcg.html

[Q24] 去重
来源：http://www.xuanzx.com/163lipfomxa.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163kfuioafr.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163tbiaxawo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fbchpuic.html

[Q26] 计数
来源：http://www.aibaodan.cn/163fbpftgsd.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163twzmmerw.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163hasvdbsc.html


<!-- 参考信息 -->