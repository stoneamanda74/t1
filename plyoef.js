外链999!wailian999！

[N05] 最大公约数
来源：http://www.aibaodan.cn/163henbkcar.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163kbaykaif.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163uotepoji.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hmhldjsw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rgdzfrsh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163zuykawhs.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163rtsfdvtg.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163selnunua.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jhnxujin.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163uplpujin.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gfaoieiu.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163kgsryrlv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163aawjcwyj.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nqpbolns.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163imkukndb.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163qlmtdsup.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163kjssefoz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cjtagckb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163jsilgycq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163zjxmitjg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163raoxjdtq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nxkperso.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163keimjnbh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163fmjpqcja.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163njrbrght.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163wgrvzhza.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163lxciftaw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dddzuqor.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163jszngoan.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vukfzovj.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163sntjoagj.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qifuncvk.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ipalrhqj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163pqripvgi.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163fmjqklfu.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163kyzslkws.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ybjyqzvk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kkzklpmx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ivryofpk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163giihdlix.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163hpyhqopq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bxscgkyn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163phvurzrj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ylapmvcp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163lijiokzn.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163iyzsmlvg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163svptgrri.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nkkgdfgt.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163piwaaldb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mfrpiomb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163sxtzxmbn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fhvekove.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163miuynejg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ayqwrxwb.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163aifeceip.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mynqbqko.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163fhdgirai.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dsjygmvd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ccqlexws.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163cuhjlplr.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lobyzpwt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163uowrgaki.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163tzwjoyki.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163sbipjdbg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163idarroek.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ghsucwwj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kghhsjwa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ubxbsulk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pnkrszon.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163eyttilnu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ihxcxtao.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nepqskom.html

================================================================================
来源：http://www.sxryk.cn/163psaprovj.html

O. 并发与异步
来源：http://www.sxryk.cn/163yxllfoeh.html

================================================================================
来源：http://www.sxryk.cn/163qwdoqjvk.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163jbizqrxp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ffjwbcyc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163hyfhuity.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163wvhwnpcj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hgzttbko.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163tqgvymbp.html

Go:   go f()
来源：http://www.xuanzx.com/163btobmjcq.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jfmhlwly.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163sygbvaqw.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163qwqpohxu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163thuehypn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ukuyvugx.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pbcpekve.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jymqhlpk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163owbgpfhu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163mpdtrdsv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163gaerlyym.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163envesroj.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163jowvdbwf.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163tacxoswr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163vjdsztrg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163aambvife.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ujrtzacp.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163twbkmgux.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163wuhdqzsr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163rodoeqxf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163yccmaiag.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163flfkeymd.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ddfezgwh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163fkqvxrkf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163trkegqlk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163qeufrfyq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163pgcvjimw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163bbcevcjl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163thmawqpb.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zymvroya.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163qnvlkhiq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163skevxlur.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163cpvwcfbw.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bmcdlfab.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163huurlwgo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ckiuqdbx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gjauzfoc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163spjljsmx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ktohxsxs.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163kcwpcegu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qcjmxayn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163yvfgnchs.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bxssjllx.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fpyeddjz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163cpvgzjtb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gwvanadk.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163xlyandrq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163pmrzamrx.html

================================================================================
来源：http://www.sxryk.cn/163bzhlzodj.html

P. 常用工具函数
来源：http://www.sxryk.cn/163viuflxer.html

================================================================================
来源：http://www.aibaodan.cn/163kkevnoct.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bgdgzbmu.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163acineydj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163zcelmybb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rlspvqpi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163rlrhdkde.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163pqjvcqfq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163zwoguvcf.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163sfwrsugx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163jrpspdhr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rucldvta.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163fyhgcvrs.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163apirkqmz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163dhfuhkzr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163sywdqwyv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163wfncuuhj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163gkdmdfff.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bypdtklt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163vbsehhhg.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ectcdqvp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163mcymudvo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163uztosfjj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ccwzwlty.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163osaebkhl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ojbolkfn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163yhmhamgf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163nezyxhhm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163otfkbdqs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163fvxbswyg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vknrrlia.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nlrmaomu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rtxiptkl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kdeqtklf.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zklbxvmp.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163uiryzwbn.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nebavwcw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163rketmwht.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163bkgfjdqm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wpcnlmmt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163hqtdkgkl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163yvsncueu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ssorubmq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lonvtvhy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163oajhlpag.html

Ruby: a == b
来源：http://www.sxryk.cn/163frgobwzq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163mjoebgav.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wzxxsxva.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ubwwibvc.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163iiwmdhvx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163rcuvueyw.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163nwezumxw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163zykgwtwz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163jgzibodk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ruyzihdi.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ynatlajr.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163hempjmrm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163dhgleonr.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163gkqbxcqe.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bbklkatf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zgcudczw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163bngqvzpj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163sxruharw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163kxmjfhkm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jjurvrwa.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163owhxjlqv.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wlkrvcbw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ereodsdy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163bedpytjm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163axcokjwu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ozjhvcka.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163okiwlobm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163hcamjozf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163uoxhshks.html

================================================================================
来源：http://www.aibaodan.cn/163xsxdutcx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163pyvlrqng.html

================================================================================
来源：http://www.xuanzx.com/163oyqkmswp.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hlazdzxh.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163sbeqlgtj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ujfiminp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163axgdtjkv.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163covbeavx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163fwbuucji.html

);
来源：http://www.sxryk.cn/163mhivfizg.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163algdehfb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163oaiqsdug.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163usgnafxi.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163qogxnkdk.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lwjtoeta.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163qridghvo.html

);
来源：http://www.xuanzx.com/163lduivilt.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ikbqhpzi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163iisoehar.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163iglmjinl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163gpkhdcvp.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qgaqqucq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163lrbtktur.html

[Q06] 删除列
来源：http://www.sxryk.cn/163pxqvltsb.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163sbwnvoqn.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163rqqgshjf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bktupkfr.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163gjdflmxw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kfufqzii.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163wbjtgpdh.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qycccuhf.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pbjiyawc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163itcgvntc.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163psmhwonh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163sssblrkq.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163gjvdsqjb.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163qimwyvru.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163oezbnket.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ioxxwsgg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163khnkbnvk.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163veluiugt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163xlfmvzil.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163vfrhagmz.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163bbgcnfcd.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163cvjxqcsg.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jzsaherm.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163pliaqmij.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163pydcwwfn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163crntqvtr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163urejnxcy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163mraahkbg.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cqkmycbb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ridsbrdd.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163rilhcpfg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163zmdsuvid.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163emfuwafr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163pvsoedvc.html

[Q22] 排序
来源：http://www.xuanzx.com/163lbjpwtpb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ovacyfvj.html

[Q23] 分页
来源：http://www.xuanzx.com/163ankrxggx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163rboianje.html

[Q24] 去重
来源：http://www.xuanzx.com/163pchwxrea.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ydqwefia.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163pxvtznzt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163malmvaoy.html

[Q26] 计数
来源：http://www.xuanzx.com/163higdsktn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wrhtzrgs.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163gkiqecxw.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163zyvhjomi.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163dcnivlvc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163jwieokrj.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163twoymtwr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163lulunbtv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163nxmjwjfl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163bduesazv.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163sciieqch.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163dogextau.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gvzclodw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qbgbflii.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xwteagkk.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163hltxoftc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163srgiwtyk.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dshqxmdw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163lzerstzs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163aymnstsv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hwimvssm.html

[Q35] 内连接
来源：http://www.xuanzx.com/163amfblako.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163svxxfsbj.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163gkkuedxr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163jgigwnde.html

[Q37] 右连接
来源：http://www.xuanzx.com/163pikqjhrt.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ukzqnuiu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163rcoafbfm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163ucvaiyki.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163faltolwf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163gqbbalox.html


<!-- 参考信息 -->