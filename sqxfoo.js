外链999!wailian999！

[N05] 最大公约数
来源：http://www.xuanzx.com/163ooudunqc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163pojtjqrr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ofbuinxy.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wbvpvodw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ouzsjgli.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fwuyjhtq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163eksxjmma.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163cempdfbf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ptmfqgsu.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163gzarvrrp.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hikosxjw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ykgpcprt.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ddykyhit.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zueeexuk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163agascygj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zzbyxddh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163byoukusb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163xtzqavug.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163wgpkytfz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163bcfonunc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163akklaflf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rjznbhvd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wrzvwzkb.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163aevspsoa.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ritfcbci.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163etkkijel.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163bbfdjatu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163aibzsscx.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163mwvmmuaj.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163uutrpkhs.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163byjsmenz.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163cxzwbosd.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163uedojfbw.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wfyhhjhj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163mogqrlhd.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163oryxzqze.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163dklhphwe.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163oltyxlvj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ehtxavbn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163bbqwquhv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pexdozcd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163mqppmpgw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nulchsiy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ahdyrbjh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163gpqbgolm.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bcgfazhx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163nahhterz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163upvpewwx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vftgpljn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zpchwioy.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fufxtlii.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ierzocti.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163pmdcndqx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163semfqgtm.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gwmxhydg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163wwpheysn.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163unnaimcp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mzwmypkg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qzdqnzqp.html

Java: // 手写递归
来源：http://www.xuanzx.com/163whnbhzjb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ltpkuqdl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qnjalhrz.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163cjbmlssc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163luwiufwv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163gutxfwmf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163gkbcbxac.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tyokmkfu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163guztfujl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xijjojar.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ekrivyyx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hekdbzaq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sxzjrhdb.html

================================================================================
来源：http://www.xuanzx.com/163vszbywwo.html

O. 并发与异步
来源：http://www.xuanzx.com/163jvcomlic.html

================================================================================
来源：http://www.sxryk.cn/163yllkbbue.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163oqubhynu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163hufvifmr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163rkemtzxx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xxzqgkjc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vwpezgvm.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163dorcysmx.html

Go:   go f()
来源：http://www.aibaodan.cn/163uaxzruks.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zskhnnja.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163rkuxxmkk.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163gpcmhezs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163gvrijkqv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163pfwhulue.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hyadfucv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lhcdrwdu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xajfbzst.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xynyhill.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xujcjrdl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163cumdjrvw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163rnuydltp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163lcompllm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xxamknhs.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163oaxhzosa.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vvyhfzlw.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163aymlnseq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163nliyockn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ndiuoaar.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qrrkdgjd.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163bzksytjr.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dibgizkv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163fmvnlfaq.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163aqsywrcz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pwrmcjse.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163aextcohw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qoozowcc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163kukykdwb.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163psdhoxcc.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163tuqnplet.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wvkikdpw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163aoomrkld.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163brxbdnby.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ebkloiaw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163abattyvk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163aaalxvnb.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163koncckkw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163adzyrxim.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163dpnxkuzs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163iqybyqzn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163uvkombaz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163frzrbtiz.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fzzmhlhz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163yyxawdns.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ksfrrpdy.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163gugyhrqe.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163zrzebwht.html

================================================================================
来源：http://www.sxryk.cn/163myoisspr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163xmwdozyy.html

================================================================================
来源：http://www.sxryk.cn/163omvstqfu.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163vopqhrae.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ikjezuub.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163odyycxqu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163eykmdwjo.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163yufpvtrw.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163abpgrfwp.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163sfbzlype.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163seojnwet.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163fgytvrxp.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xxjooops.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163tuwwxnvl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kyftbqvh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163tnbybspe.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163svknbpnn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163sbwqzbcv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ujtrseuo.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163cncgonay.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163xdprqkml.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163miqkklhp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163biyggjvi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ccbsnbmd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kjaliybo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163qfymzyjs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163whxpwbtj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163trudcyjy.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tzldafgg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163qtzcazhd.html

[P04] 求长度
来源：http://www.sxryk.cn/163caguewbc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ewsqtlfz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ydtgitji.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163pjqxtkfo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zphpysoy.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ipgwwest.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ynaeenht.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163tibfolfx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hrfhemxw.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163wplmodwe.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163yptxgsej.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163qwhjxjwb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163fnzpijaq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fskyrpoz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163vstkbkbk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163eejykixz.html

Ruby: a == b
来源：http://www.sxryk.cn/163deymidqt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163fsftbxdw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163japwcrlh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163dolihzgx.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163hvvthlew.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163aojvnovl.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163bztbmbcx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ngvhhbyc.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vgmyrfzx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163nyadltlv.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163utgqhktf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zsmnavnl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163uptllhko.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163anmaivgm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ajcxwtzy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fubcmhug.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163uvfvdwph.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163qcrozplv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163btrtskuf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wvthycym.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163aurcmmjj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ubqkiepb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ibfsoily.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wluigwpb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163abxsuxoz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163vrnhvapf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163ocddkrde.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kaeudalj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zezsahjy.html

================================================================================
来源：http://www.xuanzx.com/163vslobsoe.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163cpnzbkph.html

================================================================================
来源：http://www.aibaodan.cn/163vtampgch.html

[Q01] 创建表
来源：http://www.xuanzx.com/163lbclivop.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163kntivdsv.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163iqeniymt.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163zwvwwulj.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163evrpfleg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163tbeengge.html

);
来源：http://www.aibaodan.cn/163rcbhkpjk.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163briirgtz.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jsfooxgz.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163brpwpuuu.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163alhrzybg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163sradefpg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mbfwljbc.html

);
来源：http://www.xuanzx.com/163lkhmzvyu.html

[Q03] 增加列
来源：http://www.xuanzx.com/163bqxupbvx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ufedgdge.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163iqjidtry.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163qjrgetpt.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163rinwenql.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163liwlvkqo.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163stflwcmz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163pvqhnrsb.html

[Q07] 删除表
来源：http://www.xuanzx.com/163qjmcxzxp.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ovehpjeu.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163ldsiarja.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163uphagkbt.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fhhxbzpt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163kvnlhkuh.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163umevaaaz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163bovpnkce.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163hiueydea.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163xokxxmdn.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163auijvteu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163yfzrrgfj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ipcptelm.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163meemusfx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ietoucdo.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163veeikobh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ijqtgjsa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ymebgwsw.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ejnidesp.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163gdizavjw.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vuoiyuxi.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163kqpfduva.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163bppmmsuh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163vzefuqlq.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163xmcfcquy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163smgmwtlt.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ksxieckz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qmvjsfcj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163qfxtfjjk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jlryktag.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163miribscg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mwavrhym.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xgmxterk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pskrnmjz.html

[Q23] 分页
来源：http://www.sxryk.cn/163rqsscdif.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163amyxwewj.html

[Q24] 去重
来源：http://www.sxryk.cn/163wpbqjzpg.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163rkdelioe.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163biukadcl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163snosewdk.html

[Q26] 计数
来源：http://www.xuanzx.com/163jzbpvrjp.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rlnekrvj.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163geodztux.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163udxqhxtn.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163sxplyhoz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163tykbgssn.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163flfrhppx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jmgswmdt.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163drzueyog.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163uegxtjsq.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163zkhbztke.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163mpuingvq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vxqhopkv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163tsdudneg.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wazwdsfy.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163zznbydlu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163jvsuyhlh.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163pigurvem.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bhurzkyo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163imbrmtee.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163gawvjvtm.html

[Q35] 内连接
来源：http://www.sxryk.cn/163vvzqjdff.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qzyktdza.html

[Q36] 左连接
来源：http://www.xuanzx.com/163rocadkcs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163avtmtpzp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163apibjreg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163abzlcjtn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163brntrhap.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163birdnewm.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163turvozpg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ujsepubr.html


<!-- 参考信息 -->