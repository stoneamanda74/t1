外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163crhpeton.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mgebnjlv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yoluiejb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163tkvhllkr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163vzahilsj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163geillhft.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hajfxwwc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hoqdeeeu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ilmpsuwn.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163awwuozny.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lasgdxwk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nckquyyj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ceezwtuz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163kwdqmyuj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lggsoecm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163pbxvopqp.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ahujzayo.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163tzmzblii.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163idkafcih.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qzpevhqr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ogcudufz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ykalsdfd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163bfjrsymw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163rrmnjetd.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163rhoprief.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163flozcfpp.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hwcxkxhu.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163tzkqlbya.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jaegfuis.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gifejbzg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163biyzcbaf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wusilcal.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163kadbuqgv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hcrsjsfl.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163nmoxcvqp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mhnowrww.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163clvdnodb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vcmiqgxp.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163rgfkozjz.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163orxyzsal.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163lhrkedbi.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163zspslmrs.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163nzdhjwgg.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ofjpiulq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ztcqsxob.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163hurcyncr.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ihmmlogd.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rswwfkuy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163hcvmzszr.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163olyynwdd.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163erjyxrat.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163nepzxdhs.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163edvoefia.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163uadqwvjp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163wmzxewfw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mcqbbtrp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163zhogglwq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ljpyhrgt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163vgwzmbma.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163rjwcekbg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163lnpxfrdl.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163wdkgvcvp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163caaonjmq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xtlyjaxj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163dogsbjiq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vgvanzin.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ofciwqch.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163daxzqlxk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163uzzwehsf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163bgxjncmy.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163cxocfqxp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rertaays.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163gpuosbdp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yrlbgvbu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163umqgmwzf.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bsicnsyj.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163whuqeiht.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ztugxryi.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163edvbqmla.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163vpqfbqgk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163btidzfns.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ogzdoxlk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xdcuwklx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xhivwkau.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rmruumzr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163gafmszlr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163dnegzsmt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hzimbvma.html

================================================================================
来源：http://www.sxryk.cn/163ottpgpwq.html

O. 并发与异步
来源：http://www.xuanzx.com/163mtdeoffh.html

================================================================================
来源：http://www.aibaodan.cn/163jsiqcpcc.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ouzfpqww.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nljyauqw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163qftxqrzh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rcxpugfc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tuhvzrsv.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163kwxdtqfa.html

Go:   go f()
来源：http://www.sxryk.cn/163gnmelaox.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163bujpwwsj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163vopphyzt.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163rbrhugrc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fkgrqrps.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163yldrznri.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zzmltbau.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dlpwcmxb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163mmqdsbyk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163exndiwut.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163udrkmzpp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ngifnfzr.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qdhqmsxv.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163phlfubon.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163yowzxzvg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hifsjkod.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wbatnzxp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163cnbzulxe.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163yhlrtyjm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kmdrgnar.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163lqgtehnw.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163fojuuspv.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163phoqhjay.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163xwvuaeue.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163fpdixkdb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163crpatjsz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163igsmdxal.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163anesajnv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163crirbeis.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ilgbdbaa.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163drzstumu.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163fezjonhz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163yktnxlwn.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fyyrjnmx.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ysxhudzr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163bezxaote.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163rlpvcdty.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163rpxpwvqx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jnaffiab.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163slouyzhs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ffghewde.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vbtwwcyp.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163guisefqe.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kopybqdq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xkefdyem.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yemgnnbp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163moxgoybp.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163lebzqjyp.html

================================================================================
来源：http://www.sxryk.cn/163prqjtcts.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163ohggnkgk.html

================================================================================
来源：http://www.xuanzx.com/163tgxokfur.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163eivmryis.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ojbiapgn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163yernhxap.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163larygvao.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ywgesegn.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kficcvyg.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163yiptyygz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163voxetavo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163crainpqk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163nzwvmvmz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163rdbchili.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ojtdnfhv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zkaroivq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163mndddlpm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ittxstyy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vpforjzn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163cttgajoe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163roluhdqr.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163upnwuves.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163znqfshgo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163zfjqveur.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vxbpidaq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163twxolyjp.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163lwjufzez.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163pvdjppgi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163luhrqidy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163cxatewhy.html

[P04] 求长度
来源：http://www.xuanzx.com/163czwurcpx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163zcsfcqiq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ncqniidh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mpmqcyuz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163spxmrgyh.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163lxqqkcsv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163gawathgh.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163goibnmus.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163qmxsgmcd.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rjqdozfp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163oeizcxfm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zjowumce.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qxjguijg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nidahcol.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163yzdxhuqv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163zgsolzit.html

Ruby: a == b
来源：http://www.xuanzx.com/163pecymcnp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163mvazmjqp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163rokwqnjc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163oukubotq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ceedqizp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163tbprugkg.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jxdgqpwj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163byrhbhmv.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163zsximkxz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163kjaepqae.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163bzmkkxql.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ejwziddb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ebwohdvx.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163awcmslyf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163krjjfeiy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zzkkcehy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163whvgzthq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163qjfdglma.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qkonlfej.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163pbyuzdid.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163chnjjwbq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163meehbozy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163aipwoftl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163nzwqjwtj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gpypmjac.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163joqjuglk.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163efozqeby.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163fdeataho.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nkggvahs.html

================================================================================
来源：http://www.aibaodan.cn/163gucxxbay.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163momjgjwi.html

================================================================================
来源：http://www.aibaodan.cn/163aqecmvcz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163vsjbvzpn.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163egnpcmjq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dzrobzqt.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163vcpjfijp.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163imkacvgb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163rnhmyrul.html

);
来源：http://www.sxryk.cn/163ijgrxrer.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163lxrkpbwe.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163clhakcux.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rwuzyxay.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163ghhklhtl.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163jyrununm.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163scppblau.html

);
来源：http://www.aibaodan.cn/163rmushgcv.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ttpkcpgn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163wokireqe.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ziwnoxak.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163idmzfywr.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163yxmxqfya.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163rzjbqpjm.html

[Q06] 删除列
来源：http://www.sxryk.cn/163gwyskozq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qpwtfhfe.html

[Q07] 删除表
来源：http://www.xuanzx.com/163hpaurupa.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163pptjjruj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163owkhurft.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163gdlranez.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163axkjmylz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163brxqcltl.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163yvlubnek.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163emzswcqm.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vlkqzhiv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163larrccvh.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163dzyigsas.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163kqqccsam.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163zhukxuww.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163bstzbxzf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163pkiddqbw.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163nnnzzwlm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163xknmjqib.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163pkkdaepw.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163zlntjqed.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163vqeegmvd.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163kmjzkysm.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ipjpdjrg.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163uzhtvcqo.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163paqlqatz.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163lkvbscir.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ewvjeyzj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163vzseicgp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163aokjnonq.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163piewmgtn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vsxttebc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163erygtuns.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163thscajfx.html

[Q22] 排序
来源：http://www.aibaodan.cn/163ujjrnfaw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163vpqihjed.html

[Q23] 分页
来源：http://www.sxryk.cn/163vdisahah.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163mutohxrh.html

[Q24] 去重
来源：http://www.xuanzx.com/163rdclgrqm.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rofyhqfo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163kjfxnzuv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ovwrfwqa.html

[Q26] 计数
来源：http://www.aibaodan.cn/163jiqhices.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163jciylopo.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163blxgnotc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163xynakghk.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ghhuudxu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163dyrvvbmb.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163ughkbobx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163xzcygzwx.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163hjtyjswa.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nabrkqaq.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163llgemalr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163mmgsiaga.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163cgnemkdv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wpenixtc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ivdsacal.html


<!-- 参考信息 -->