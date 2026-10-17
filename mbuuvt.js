外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163akzkjfpe.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fysjqkrq.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163taeikllp.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163uuzfbgva.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bfpnvbsw.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dspggare.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ihgihwlb.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163wvpkscqz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163gyghscrc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163nmnlsvlw.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163msyywvwp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zemyacpw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163vfvkmzmb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tjdnqrof.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163fnqoqcks.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163skzgphrz.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163hckuokrg.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163xoyfdycb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wttanska.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163iykiroxz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163dzmcdoes.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163phnmnxie.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jzumvqag.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163nrhgmyqv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163hccpqrpm.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163cnncvlnn.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163pvcmifcc.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163wabsvqsc.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163duqqodbc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163iesjjvfs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163nsjppmgu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163biyqdsrf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163uawjqnky.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163lwlpwvzz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163jvmcjkob.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163favmasuw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163sgmohrlx.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163thajdngs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163hufrwmju.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163mmzpaosa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163gjkbpkng.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163cirzmgww.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163jefvxovb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ukakbxxn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163wgmzwupb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lrizymnt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163nalkiroo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163upiudfie.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tencjcsx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dvguwtqd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163fewbpenu.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tehrcjiz.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ysjfmbit.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163knqhzwew.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163koofrxbi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163zdzaqigv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163avwyyemu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163udpbesvn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163raqrlymi.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xsyhkyzz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163axvakxxt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163djquvsgg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163iabyekwo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cpzmphaj.html

================================================================================
来源：http://www.sxryk.cn/163fufknibv.html

O. 并发与异步
来源：http://www.sxryk.cn/163blejxqcv.html

================================================================================
来源：http://www.xuanzx.com/163dsudultt.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163grsrbfyc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jzmeevqp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163kiksrcyv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163kcemxlpx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163agrldsad.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163aubouuaz.html

Go:   go f()
来源：http://www.aibaodan.cn/163hsjwzcpv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163rvtfasep.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ozszbiln.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vsdejhkk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163tyjioedf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163hhvhhkiv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163syusigmn.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163udgvtwmo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163dvhjwasg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163loaeyltq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163tfpnnpzt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jkmhzvop.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163admiiqxh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ifsazldi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163etqyhzhg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163pelfikcv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jobywmhd.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163zmonthcm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vkzoxacl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ocdwfnqr.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163syfphvtk.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rgzrpysn.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zhwhciqv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163aflrxmqp.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mkvlyyth.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163sbdcuvhu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163likgunna.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163dchcclrj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163igbstmlb.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ayrzowxh.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163gvagoxfk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163mtfrctqg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163jrdsxilb.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163unlrtfku.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zbzgzvds.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163frjonvll.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163zdzyexmt.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ibypxusv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hyrgfxyo.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163rarirxuf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163upfobvtv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rpbiypeu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gqvsytxa.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kcqkmhyl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ytakclay.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163cworlvjd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163rsqtwfpv.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163sssqravx.html

================================================================================
来源：http://www.sxryk.cn/163bwjtlbhi.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qzqyxdhv.html

================================================================================
来源：http://www.sxryk.cn/163kjaltzcc.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163kobabyug.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163fpesmtag.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ynkqigzk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dowdpdoj.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kwupepki.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163wgptqzco.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163vhxuquse.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wcxplhrt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163akymudhk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vyagztxa.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163bfrhbinm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163hvizdzui.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163wohucefg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163qgkcsvpk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163ppawmjuo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163cuaxsfbj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163luvjjjji.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163wcjcemtk.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163lowouvhg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163luglauiw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ryucglpt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xalwnibu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xaibdrbb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163cgdqrnwi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163csotpbbo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163jusuzyni.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163vawkpiau.html

[P04] 求长度
来源：http://www.xuanzx.com/163fitbuexm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ivuojmpw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pdfzhilt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lteheykr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cxygquhp.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163xbhtwqwc.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qabmtldm.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163iohzkuuc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163amhtzarb.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163xlaalksq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163uyaqqtmf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ukvxoevc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163hcfzziym.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ygepfztq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163hkbgytuh.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163mkpruztz.html

Ruby: a == b
来源：http://www.xuanzx.com/163owjvrnkq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163dfmnumwj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163romwbyir.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163saprzhby.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163smrtulpz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163xqaapabh.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163wajjyfrz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163girqufzh.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163itzagyvm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rahrailt.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163vsgnpxdh.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163bzngqdgr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163dlfpvarn.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163umlnhbzp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wsmhujgn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163svpuoacg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163gdnjbtqv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ygldxwle.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qmdtyqvr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163jymsrsjh.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lqflrnhx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163vmunuqle.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163awrjewyy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163znbqyugc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163sgvwscjy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163gkpjoewz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163uoekeoyl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163znuhbldo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163tffwebam.html

================================================================================
来源：http://www.xuanzx.com/163vmvtzavl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163pmztvkpy.html

================================================================================
来源：http://www.sxryk.cn/163ygvmewpn.html

[Q01] 创建表
来源：http://www.xuanzx.com/163znfoigzd.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ukjziiso.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hhqrquiq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ezidvwhq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ovuhnkee.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163kmsnolwf.html

);
来源：http://www.aibaodan.cn/163ipepunpn.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163fnbfqzdr.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jycwtpto.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zbgnubmu.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163rdeadyuy.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163xuvcpziv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163hhxpeogw.html

);
来源：http://www.xuanzx.com/163vweqhkzb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163cgmsbulg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163azlreqtc.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163oeeiokwf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163jvxkomov.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163cltvhetv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163sriryotl.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ftimqleb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163irfyfbtk.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pondeygv.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163sidkzgto.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163yrohmpis.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163wezdeezb.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jijaaauw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163yagrfmhz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163kfgppmam.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163wpqiznwx.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163atbtcuel.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163sssshbky.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163cmidsnwf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163wqltzdlc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ecmldevo.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ryhawwmj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163xpepgccy.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163qdednnju.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pkdfnyxl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163xvkfhqda.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bkndkgif.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163bfzfohcy.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163vfzkyjwh.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163fasdkbqi.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163bntwgsws.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163bowqmeta.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163taowtays.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163anrzpxwa.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163oygsalgy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163peklikch.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ffxjhdod.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qenflfgx.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qekmvleh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163oojdyxpq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163tabqoixn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163zjzqogfx.html

[Q23] 分页
来源：http://www.aibaodan.cn/163mpziouvt.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163exkuoisc.html

[Q24] 去重
来源：http://www.xuanzx.com/163sulamydr.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lellmvcp.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163cnfgelwv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163aksoopzv.html

[Q26] 计数
来源：http://www.xuanzx.com/163enxkojyr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163qmwzwgis.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163eujfqcds.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163mqrvxyzy.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163lodgshbc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163juxggcyl.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163jjkdagoe.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163tqsvyyah.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163iykuqinf.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zsqdvgfk.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163eqmdyyug.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163hqpycxlt.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163icfojqqh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163sfpeeklo.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163zytfrulf.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ywsagnuj.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163lkkfxbnl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163awcuyxtm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163qovzasvs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163ydecnlfh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163ujcdmmml.html

[Q35] 内连接
来源：http://www.xuanzx.com/163pbdocfxx.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163fmmnkayl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163czdeqtum.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uijgjjmh.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ggekhaxz.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163dbboacan.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163ewtawrle.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163idrfylyd.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xeffltkq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163nweeuehl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ycshqswg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163rkbugysx.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163wivxvbvz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163cmkfnluw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163yzomdrff.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163sgxtdbqc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163qcdxgptu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163oyyiwfpn.html


<!-- 参考信息 -->