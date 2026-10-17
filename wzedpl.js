外链999!wailian999！

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163paqmvhqr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163maekergs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163fklgazrk.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163syaghbyu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bkyaapom.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163yqqlpqbx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qjgxvvay.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163fnsqeszp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163gjsqqlgq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163pvxqvjqx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lpgqztsj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163tgzmjmzk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kloegbxr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vnissulp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163iyvtnxwu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pnbjrnmr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jrriluhz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163qlzgxugt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163uvststsw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163tomqrhcp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163rdpztlmi.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fekfzerb.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ewvwpyyf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vznhjwkr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qspvdlqf.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tkhbackr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163meefzfhz.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163rsgpwopw.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hocilyyf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bmprqilc.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163nneikbrp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163qfpyjzxf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bijxyceo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163oyiofnit.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163pmvpezbd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163nzdhfoay.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163mhnrqbao.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163lpiuvagn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163acalutil.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163mfprzzgo.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163xjhepihv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163zjafjnuu.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163khozycff.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ifevquyv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163mdiawiww.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163smmmdiwd.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ajdugudk.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tlsfsilm.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163rlvlkpoq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163tpmilooe.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163aqdckutu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163kygnyfzw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163jsngmvjw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163riwobyyw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163aqrvfset.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ckvazztp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163vxrfpggy.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ixhdmcrq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163apjdeiee.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163lqxecwda.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163asrjnvdh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163kbxfrafv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163dbwnecvk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163kppveacv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163whsgbrdu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163gznyodqq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163cmghfdla.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163wepajeuh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163rvayshzd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163klxltpck.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163uswixlgg.html

Java: // 手写递归
来源：http://www.sxryk.cn/163blyjwete.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163mumbofvj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jqwapbzm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163htvjhytm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163csdtvnca.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pzorwczc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163svhplium.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bhzoybil.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xtunhbfa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163rojpgpwl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163fhoboqui.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163zhfazpxh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163szkvbtfx.html

================================================================================
来源：http://www.aibaodan.cn/163lcfwjume.html

O. 并发与异步
来源：http://www.xuanzx.com/163ridnexpa.html

================================================================================
来源：http://www.aibaodan.cn/163xvergyzp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ybdbgycd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163cvengypp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163hyqkropf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163xxsgkogn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163wqxueedn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mabrxjsb.html

Go:   go f()
来源：http://www.aibaodan.cn/163vzbsngif.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163sldfhcpb.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163etvqxfir.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163yxhruzjg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163lekmxoql.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ptgxwwgv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pxgzklhv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hfkjrqif.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hdscrodb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163wbbxnmak.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163loqnzyzf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163nsjgckvy.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163tmllnwhc.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163iqljvipi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163sdgxcdtl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163nnmqwiyo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mnpbjckm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hjvtkejj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hpjwisgd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163iopsplqt.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163qtmhijaa.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163xflmrqpi.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163zosgrqmp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163vyrofers.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gtjwrcfx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163fdrcslkn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mguyszqn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163mmmdylur.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163vqjbbmbz.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ganditfd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vcngosel.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163fgxoshuz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ntktdegm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163yixrmuks.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163acqgsvue.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163mxgvbrzk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163anazczxi.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163cfpkmkol.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163tiqffryo.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163mkynheuo.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163juptjlei.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163acmqjtkh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163rdmnzwmp.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vzyungmk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163xugliqfs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163tdpabdiy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163fqxeyxyu.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163eebxmbwk.html

================================================================================
来源：http://www.sxryk.cn/163bilxzwgm.html

P. 常用工具函数
来源：http://www.xuanzx.com/163opblpwwh.html

================================================================================
来源：http://www.sxryk.cn/163bsjybwln.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163yuwblhbt.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ebkgahuz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rpipmsyt.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wkqjyihe.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ktqpkguq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kydkwddd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163fkxjpmgz.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163alztifzq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163efchmafq.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163uohijrvb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163yvcestgo.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163pzwdvwsl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163mpcnmwbc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163qnudydcr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163qoeehtlg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ynghhdqj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163gwarhvnb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163rozerwab.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163qmaegiwi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163avbzbcfv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ichmvfmg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ebkuizam.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tuxgjspb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ksyshtvq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163kokrtoid.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163fdmgadyh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ddkudski.html

[P04] 求长度
来源：http://www.sxryk.cn/163dzgnupgv.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163nauizkju.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ydasrfua.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vvlcjmwb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mpsqjoot.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163mwaytybs.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163prpzxkjd.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163yawzfjre.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163moaferwt.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wfwoytwz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163mdtnexkt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rhkdgnaq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163kxpkduso.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gimpkjtr.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mpfccpxr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163mtuscidp.html

Ruby: a == b
来源：http://www.aibaodan.cn/163gwpnrfcz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163atugekdu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163gxlgqkvz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163uywxxosq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163qukxiozs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163qjxruovm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zwrwqiqd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163rclarzzp.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163pdaydtcx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163eqgkosym.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bmvbrswv.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ipxfvjcu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ggkegcps.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163qyrlzbex.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pxbkwbkf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163djylheth.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163fkjmsacm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ckbtelrt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163unyzjxcw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xximbric.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163anuhtypm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lmlzqcvy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jwubrluz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mrxatgse.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163tgxtdrlp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163tbguzdmc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163zpfiocxq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ddmvjglk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163hasoadwt.html

================================================================================
来源：http://www.xuanzx.com/163updrnric.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163rexvuekg.html

================================================================================
来源：http://www.xuanzx.com/163otcggvva.html

[Q01] 创建表
来源：http://www.xuanzx.com/163rqsehbrl.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wqzwvlkc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163iahbbhxo.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163jugmmnyr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xedpcxxw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163jhagcwea.html

);
来源：http://www.sxryk.cn/163fioabvld.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163zrxlojao.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163oijjpsdv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163spmdcucs.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163carozfmk.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ewzoxhay.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163dpygujvy.html

);
来源：http://www.aibaodan.cn/163lwpdjetv.html

[Q03] 增加列
来源：http://www.xuanzx.com/163iadcgbjc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163iattimxh.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163sfsxirst.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jfakonza.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163dvwdycck.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163dvbjrhmx.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ypyycowy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nnxrkeoa.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163jibrsprb.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163itrpycnz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163dhqfjnwv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qusqkmxt.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163uxdljezo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163ntgwbxhc.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163stkiriuq.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ibnuljnq.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163pgxcghlt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163dbbsteoy.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163vmqdkpua.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163jgogvicn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ufpbbtfy.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ttjeiodg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163lahskxdr.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163qofvprsh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163pvzkwdlw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163znphbzae.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nxlgpxzf.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163bqlimupn.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mdoucqdb.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163hnrlbidh.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163douiypaj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163alglenli.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163hbowzfgm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163shualqaw.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hhvrygeb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wngycior.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bvymjcog.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163nxcaohxa.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163vakzriaj.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163xeiwqqkp.html

[Q22] 排序
来源：http://www.sxryk.cn/163vllqxfjg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163zmukrhkd.html

[Q23] 分页
来源：http://www.xuanzx.com/163qfrdwiiw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jhqyxjpq.html

[Q24] 去重
来源：http://www.xuanzx.com/163mzzhobxo.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ukisezjo.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ylprclmb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163havtbcgs.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ciflftay.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163chzyrxpl.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ibhpcwbl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163csmetrzm.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163kyygosku.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163vbvcognx.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163sszmjbnl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gavdylzh.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163yxgigoxf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nyyhbgmd.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163mrkhpjei.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ldjbwlev.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hywemdbg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nxtxlswm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163gbmrxsoj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163tddtmvre.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ubtgieuj.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163vtwqzptn.html

SELECT * FROM (
来源：http://www.xuanzx.com/163gvdbciua.html


<!-- 参考信息 -->