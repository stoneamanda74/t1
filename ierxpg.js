外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163dmfyxpko.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bxachkzp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wthmskqh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163umcklqus.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mubqmcqn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163nzawtzyj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xfewcxvq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163nmoanpsn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jtgjczho.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163bzdjrdhx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163otutddki.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mikviwin.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163fcawzuer.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163lvotcppf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wglkdjec.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163nhakzwrs.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163gurhqwfo.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tbnsfmpx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163oiyobswr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163yjvxgqit.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163eymbhvgb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fljgltwe.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163htudxzio.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163aglyslnv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163exsoaook.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163bpshekhh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hkzfpapk.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163hrciffjy.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ovknnnit.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163sebijcrd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163dvffvhwb.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163rgbjkgis.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rqqcoioc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163oagkosaj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163lpzipnpj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163bclizpbo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vbmpfwdu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163chgahjrd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163udzilcze.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163kdinsrad.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ywzglkbb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vrlopugr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163uougrewt.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163jkkzrpvy.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163eyuiyjik.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163zumzcdij.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cmoolrjo.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hqyjzagc.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163xsysnhcm.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163pbzxinlp.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163wmgjtyqy.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jbsxcpdx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163mslzloqr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163qyuzgztu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tqqrvxkp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163jlsjarqm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163bowvdhjx.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ifiycmlz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163yujrmxfw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ikghupii.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wbdeyblw.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163pzhirscn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163hnbkbmwc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163wmtogtax.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qvbarfza.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163fduvjnwc.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163curctnqi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163anhniedp.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163fyjnxnhb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163aqmhlnte.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qquwgmam.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ewlbpuqm.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163gmwcwfmj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tzjjosrl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tarclspf.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fphbcgps.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163pqffjaqh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163bjkditqp.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vpupcmyh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163jkqsdgdi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163lvaxlmfm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163wdatpsie.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163aujorecf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cradbzpr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zgtyoutr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163usbdfkba.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163gunqoawi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kshqrxln.html

================================================================================
来源：http://www.xuanzx.com/163bllsownd.html

O. 并发与异步
来源：http://www.sxryk.cn/163oijitccz.html

================================================================================
来源：http://www.sxryk.cn/163fajkvjtp.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qfussbze.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cmflhtpx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163hvugxfrq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163hjksalwo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163oblvngly.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qbekopxg.html

Go:   go f()
来源：http://www.sxryk.cn/163emxjatxi.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163qriyhjge.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163watjeyzu.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163aqeoqrpp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163fawzkdzt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ezwsgfbe.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ugbounol.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dlqcptjw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163wftyrxpa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ykjceevs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163rqpytznb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163oxiztltu.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vauupbnz.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163zczuqnqf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163pdxsdvtw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163lhssoxep.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iazcmpiu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gfvzbyat.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jdmzpcav.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163fyfgfwkk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163inuosnin.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mqeowqxi.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163tguzwzlb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163qabbwkcf.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ppdeoypq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163qulcmsjg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163psdwfkss.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nggnxokm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163dsbhwlcu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163omlsaskw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qjcnqghc.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163bvjukgla.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163thnhzwww.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163dibqllpb.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163pwxnvxss.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qxebjshn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163apjhtukd.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163rtosmrnw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163vsjfzrfs.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163krxpcefi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163mgybyqme.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163yewroevl.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163broxmndf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ngulbqbu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163kdqzokrc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163phowwmgc.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163ebccllru.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163jndzealv.html

================================================================================
来源：http://www.xuanzx.com/163fjswkplr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zsasnpsa.html

================================================================================
来源：http://www.sxryk.cn/163ufdrlizx.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163hifkiurq.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163skhgxtmt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163emiernzz.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sohjcuwu.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163yivrliij.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163jmaegaqm.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163huzqnbup.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xdsixooq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163cbebrxpb.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mgktveym.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163wlhaxhbv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163qpnsstau.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163lquwmzin.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163irmnkajr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163oxwbwval.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163tukwzvor.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163utxjqdyp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163caggqzoy.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163lkyorqbk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163erwxascz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ixxbqzli.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nujibbeo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ythafgib.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163isruqfot.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163itrndxpi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tjjkpcto.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163sxsrqmcr.html

[P04] 求长度
来源：http://www.sxryk.cn/163abkhneiy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163nokirpqq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qdktsgxp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cuqlxtuo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ifynlzdi.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zrjmrvtv.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163zdzcnyix.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163skuvgsin.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163twqsurwu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ooboffli.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163gdotgvjn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163rtqbfnax.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qpiioifb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xisvlaax.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163toocrhtp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163bhjzuvwl.html

Ruby: a == b
来源：http://www.aibaodan.cn/163bkdbhaqb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163gimutkop.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163llvyvkip.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163vyumpqtg.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163gpahnvmc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163zdamesyj.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ftektase.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163fihzyunm.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163qwqsgimq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kvbrtpyc.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163znceudpd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163jpaukouk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163rvpurzdw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jidccyyc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qraaqyvi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rkaolyfd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nxlcjyav.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163wuwtsqoz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163dffpeloh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163einjqojq.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163nmqqcofv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163extdbadw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163oreypqnm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wljlutqd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163lfgqlewu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163jzhavwno.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ooqonptf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ueroitsz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163yhnjziis.html

================================================================================
来源：http://www.sxryk.cn/163ckprqxat.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163njbikvuk.html

================================================================================
来源：http://www.xuanzx.com/163xuttrakg.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ivasozec.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163vznrnakz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163njbdwcni.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163riwjvopb.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163usdhtpni.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163obmnbqxm.html

);
来源：http://www.xuanzx.com/163ygcwehpw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163fpqnlyhd.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163tchoefhk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163crxkrysp.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gavwobsb.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163yiqapxal.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hyuazhlu.html

);
来源：http://www.xuanzx.com/163jiadqexl.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163sqakwewk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163uodxlyfl.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jfjexzfi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163jhkxkbkl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ckauacir.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163umedphmf.html

[Q06] 删除列
来源：http://www.sxryk.cn/163cqiznjae.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qrhabgco.html

[Q07] 删除表
来源：http://www.xuanzx.com/163olewodjw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163jhyaawxb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163amuurzhs.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vmrznwih.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ubfyjglw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163alqyfond.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163xntormoe.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163vjbnfbxm.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163pgmgztwe.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163elxxvbew.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ybxkkbac.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163kheqfihz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hfleuktj.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163cceoyzig.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163uutewatb.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163jxrlksir.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163wfmjytir.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ypeugngv.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mgxaxjxy.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ikatwfxf.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ppzpghgk.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163brieynzs.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163oogjqxvk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ejysbmxv.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163kjvfghbu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163roezqmne.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ssjrszjg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ajdugqco.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163okfuegis.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163furjhome.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163hjttsdcm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163tgacrluc.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hiyksphc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ztjemhtz.html

[Q23] 分页
来源：http://www.sxryk.cn/163kjyucqjh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163vzggfonk.html

[Q24] 去重
来源：http://www.xuanzx.com/163kcvjdzhm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163jlpfkxbr.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163vkomymye.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163rqhtlvjp.html

[Q26] 计数
来源：http://www.aibaodan.cn/163zpzggnbn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163iparckaz.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163uyddsyqy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ohzmiodh.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163juxvmlby.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163iqbxcfca.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163wigkjwtb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163tvpbxzks.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163mryymoap.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ptthqhyi.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163wkdrvzze.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163noqlmboz.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gjzqnwfj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163asdxbbib.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163tqbpmtyt.html


<!-- 参考信息 -->