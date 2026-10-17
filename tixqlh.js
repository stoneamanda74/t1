外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163nircjhak.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vzstqopi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rafyhxif.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163otniaxtv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163mykolcgt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163dxsvjuys.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kjhdxszx.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ggttknxy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fhlpstld.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ceyawtan.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163vrkiwygl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163misrzsws.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fjumjwhg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163wazfsife.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163upxwmtvu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163mgutgroy.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163eguosxrd.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163eqrmmuix.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163nlejppmw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qldzmeti.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lnggujex.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163mhqpowtf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163drlardnf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163sevrddit.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163djsodywz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163cdjmdjue.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163vmohkrgc.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163pfcmbdfx.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jusctege.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lfpoigfi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ztvqcpmu.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163sviljrai.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163sstzsklz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tvhrlxkc.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163zxjfnlyj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163lswhywwy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163whqcqnhh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xhwsckzb.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163iokwflrh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163kcuwhziz.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qvyfufss.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163qmiitpra.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163zfjmgjpx.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163aqmfmvvt.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163sqbmyybq.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163wzlgyzta.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dvycdsdb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cnycpfcl.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zolglzfh.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lmkaebrx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163agtcyfwv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163clvwnyvc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bykusndf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163mrhtdvox.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163qkgbnqow.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163zujqcvej.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163qcduiuac.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163cwwcjtou.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163csccigwv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lekcoafo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ovkuqilb.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rqbcxohv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163dgwtotam.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163cqkijsxa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163aayvznsx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ipadczzz.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163prqbpipq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163sdwaapok.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163mnrtxfzx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163tonjnzic.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163nsgrxcdx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ptcduxgw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tslnsofl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cxkebykx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jfpsbkzm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163smzjbyru.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zyagqhoi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163abhvxzna.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163cwlpqupt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ddilnfyn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163jxqnandq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rennzgea.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tgkgwsda.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163iibzqqzs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jgmpkaej.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163yrrdlcjw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163mgczlowz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ggxycsja.html

================================================================================
来源：http://www.aibaodan.cn/163zelpwoyh.html

O. 并发与异步
来源：http://www.aibaodan.cn/163rtjwwtgu.html

================================================================================
来源：http://www.sxryk.cn/163fetqerty.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163isvqsjer.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163qbvxpvji.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zktaklqn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163iooxnsbp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dtvvaubo.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163zkvsglor.html

Go:   go f()
来源：http://www.xuanzx.com/163lhiyxfqd.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163jcayjczk.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163mbhvqsyg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163alaaluvs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163pbliciwe.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163cyqnfsvp.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fjnithfr.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wfiiqzdz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163lbwfbuez.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163frgpucni.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163embcbqth.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163dsrunlkk.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vyockgoa.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hojqriuo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ssivrjcv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163yeobedqt.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163yiltvgdn.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hzmahoba.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163cthxcrtr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163sozdztqy.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163whfnevgr.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163dxfumsum.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163itwhvsie.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163dubavphs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163lkwhasle.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163txjvyuxo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ihycpmlo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163eltkspiz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fdirvuzs.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mwgnvqua.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163clevabrl.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wkmgevqm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163naclhnhh.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fcakgmcf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163bggdyzps.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ebasesvh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163fkozkuxf.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dmhtdhzh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dyygovnd.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zexoyqty.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163xgmbmskq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163iieicuno.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163uhkzamwk.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163syuldatr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ayzirvgk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gtkcvfsj.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163krkdtemr.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rjcrdjnh.html

================================================================================
来源：http://www.xuanzx.com/163nesxwcug.html

P. 常用工具函数
来源：http://www.xuanzx.com/163gelinlks.html

================================================================================
来源：http://www.sxryk.cn/163lcfvrsmh.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163wrxuqwqv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163hldufnba.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hcyovglh.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163oxwkrztm.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ahumfhmp.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163iibhtlcf.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163pxphvjuu.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163mbxtcvco.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163hxhiilqr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163kgcovxgq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163vblxrchz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163fujccdcr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163dkmcaqmw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163fhjswtgl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163osjjmzcr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163oultfdfo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lkwobvnt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qvoqifhm.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jubvcsbf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ugyvofhw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163umnvrxnp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163npcmxhub.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163brvpenof.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vidbetxk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zgxkqjau.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163synnvnnc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jkdegrvj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163lcmripzd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163jcpxruxg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hfrujjyf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qyzowtay.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163tihziwjq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163hcgmgtvk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qmqvzhnv.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163azmjnsry.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163aupgtkcv.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163iogczdyt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163reulvlph.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163cgdnqqqp.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163lzrdclap.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163lxsqsupd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163sglhqpqg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163wyxgujuu.html

Ruby: a == b
来源：http://www.xuanzx.com/163mztgxuva.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163uwtcskjn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ldmwpyhe.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bdzvdzok.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163flrlqoea.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163gpmwxaqp.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163scdiadww.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163jhsrynin.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163bdxjixqv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163wbisyfdp.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163krxvpzvy.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163wkqqfxpj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163eiikriig.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ftsyaood.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163exlqvdpa.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163xfpnypmc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163whgckekg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163yhmjolqz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ctmugpdb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163appngrgk.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163zgfizxrx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bnpgbyuq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163udfuklfw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163smghqqbs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ozmlamye.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mqpkjbkx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163osgamcwt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jedoyywq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ghsorbdh.html

================================================================================
来源：http://www.sxryk.cn/163slqabwsu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163abjlserg.html

================================================================================
来源：http://www.aibaodan.cn/163xkxuaxgs.html

[Q01] 创建表
来源：http://www.xuanzx.com/163suuhffem.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ulincehq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mjaptfsx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163frezltoj.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163qilqieum.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163cyiwsryy.html

);
来源：http://www.aibaodan.cn/163asllpdbe.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163tnveeseb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163fexylhzf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nvpdthhl.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163krtiysuh.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163evnreprc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163ocyesdwi.html

);
来源：http://www.aibaodan.cn/163ihmldviv.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163numyejqw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163kakxxbll.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ykvzatrg.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163dvtrmhfc.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163kamqlejf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163vvlfvcvx.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163pmydryhs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163jaqiqdag.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ljfjrvnm.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163jchhhxea.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163uilpqnxa.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zewsyweq.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163vkidkvab.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fnuxgrgo.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wsgjyjqk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163szffzmik.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163glcwirnl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163kdlipebw.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163snbgvycn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163kdmofzis.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163fznmpkrn.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wojodtqs.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163wnvphqcy.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zusthnqn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bnbzyddc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163jgyhrian.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163dsmtvfmx.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hmdklpiv.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163cnoqjzpc.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163sixhuijx.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163pptbkxgh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ofrttngb.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hzovvbyo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163otnxiegx.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163enycpqne.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cleanpss.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163einivkfz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163dvdzttnh.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mwcyabtf.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163feongkqr.html

[Q22] 排序
来源：http://www.aibaodan.cn/163pmvynvmh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163stzkcuyf.html

[Q23] 分页
来源：http://www.sxryk.cn/163gutvusox.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163sjyezpub.html

[Q24] 去重
来源：http://www.sxryk.cn/163ooxizpbh.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ddxkqrev.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163mtksvthx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163zyyvbdsr.html

[Q26] 计数
来源：http://www.sxryk.cn/163xqizaybm.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163maadfvzg.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wiqskdsd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ojxxxfja.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163kzkusrwg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163fiyqntoj.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163fndtvizi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163maulmues.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mcwhsphl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163komqdzcl.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cciazooz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lkpswnfo.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163azppollp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ctekkvjd.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163mbkheeqi.html


<!-- 参考信息 -->