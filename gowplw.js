外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163itiltbgg.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ftxvfkbb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ejtfhkgq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qalmctmz.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ywuqbwwf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zfqhjacp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163gtojknho.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163keebsngn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qcqbmorv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jgaivwdz.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163aldeviii.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163qtqxrnga.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163mwmcnmwi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163qdzhscer.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163hkhneljb.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163qyundszh.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vflfedtx.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163afcpqxaw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163xbzjksho.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163amzeyjed.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163iyhugmrm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163wifyjfbf.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163msbyzjom.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163woulzpnc.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163masjsouz.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gakkeehk.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163aubowfiy.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wkfiucey.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163uyotngbk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pdhioprb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163vnnbmedn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163kbgugqsd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163vonvzmrq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163hzcwldwq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163cwvorimi.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163qewgwdpz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163gikisrey.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163lewklivf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vqkhkigs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163wcpcytdj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163scadxijo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163dqldlorm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ixvcnonw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ueekfokl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163etnqtfir.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163pfrtqbxo.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xxlleasv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ophgfsjn.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163oibnliwy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wexalnho.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163trlpcien.html

Java: // 手写递归
来源：http://www.sxryk.cn/163nsmnyezv.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163trkgjwtl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163gzvkyilz.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163fppxgofc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163koobtgve.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163gxzqmbzn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163pobvzofi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163snesjhul.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jkhnlxiu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pxcyirgl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163vnvqeilg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fcforixs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163nzgfhrxl.html

================================================================================
来源：http://www.xuanzx.com/163gswrtfhr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163hzahyhee.html

================================================================================
来源：http://www.xuanzx.com/163exdiaooj.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163zdiaokcw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163rkphtkpo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163fftnognt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163hiygquyn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fztsirgf.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163obcnbqhp.html

Go:   go f()
来源：http://www.xuanzx.com/163sgigpgns.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163pvrbttok.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163udlfvqih.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163gotindhz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163xbpgvekn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ifkzilgc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163knsfktiw.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vdjlyfnv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ronahyrm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gvadpytt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163skmiirbv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163xbueoacr.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163dkrzkykn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ltnkkofe.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tkznixcw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163xogxvyhl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jczkedfs.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ljlxzcrh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vnitskub.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163bobrayyq.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163qujpwzib.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163xprqkkiz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163dbboxhzu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163uvirdbij.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163cbbdugbk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163sbnmeckd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163wuwtcdva.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163fjpmiwmr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xsqcsqai.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163akuueidw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hwrperrc.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163qdznpodr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163dwymnueb.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fzltcjyh.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163erfeexdq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163tlqhugko.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163uyxiyboo.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163xurhqgty.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163bvmmvvgd.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gyoxinnz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163pbgetoyv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163eqkcmgwk.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fshybfag.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163slfooudz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163iwdckvrb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163xzvubqsi.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163tunvcput.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163urgjwtdy.html

================================================================================
来源：http://www.aibaodan.cn/163pasdfvmv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163nxamlrsx.html

================================================================================
来源：http://www.sxryk.cn/163smutcczj.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163patrprcn.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163croiagko.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hyetnrjp.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ajvfzsgj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163norisgje.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163npmhtpuc.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wiultsva.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163tvsuctjj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tmsstruv.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163yogkyogj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ivrkhgzv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163lkcqgjqp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163tmhnurpx.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163zdpstgxj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163wtytdcuf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163rhtcngzg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163jiuqcqdh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fcsrngki.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ospdceup.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163mvmcseeo.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163fgtqfnex.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163aiofbrdt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163lvogqxgk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163yjcdaxdn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163oemhzwdt.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163hfqohzmq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163pebnpurb.html

[P04] 求长度
来源：http://www.xuanzx.com/163swdmpgsq.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163neyhauzr.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163inorhqin.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163pneptmcw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163hgyzxmcc.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zqmacrfa.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163eieceois.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163dtorrqap.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163nblmbrrf.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163hpqwqevy.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163vudmvuag.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nbwhfbwe.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163wzeitlvw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jxegfqml.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163rkctgict.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163yokdktfu.html

Ruby: a == b
来源：http://www.sxryk.cn/163vyuiwlkk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jeghebam.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163fzwainpo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163plivxbpc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163kuhczuss.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163gxvedyua.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163nyrtluam.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ucthswkr.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wrcmtnoj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wzyjtpwc.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163tidddhep.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163fcxqdtmh.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163viosoidf.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jnpdbnok.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cehohzkk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gmrzhdyy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163uugwgzeh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163aqcrgfyt.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163lnyxghxp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ekhapruv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163kzchenvs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ibuzzyfx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163rqhfheae.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163mppjjqsl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gdtcojoc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163xvhxuviu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163isooypvp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kylfafca.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nmgijccl.html

================================================================================
来源：http://www.aibaodan.cn/163rxtzgftb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163tjttpyte.html

================================================================================
来源：http://www.sxryk.cn/163quuecjcz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163rioynpgr.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163fkvdtqft.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qijyeuji.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163fnwxdjor.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163fklwhxec.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163jmozaswf.html

);
来源：http://www.xuanzx.com/163yehtgdwn.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163owbyynmc.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163cdlfmomx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mmrhlwcq.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kqqumsxa.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ywroajoi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163sypmbeuf.html

);
来源：http://www.xuanzx.com/163uzdubchl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163weididav.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163kxyjmboj.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163khvwfuil.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ifnntvom.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163smvtnjpv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163vsslxjrh.html

[Q06] 删除列
来源：http://www.xuanzx.com/163rscbilie.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163dadvwycj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163umikryir.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ulxrgvca.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ttuhgpdz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163xsunlnlp.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163anvgtccn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163lzruogaz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163zxpkzuuu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163svjayloy.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ozdsrseb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163spyqozae.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163yjylbiht.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163qorreaox.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kakzyrfc.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163cylvirjr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163kcgwsyjx.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jctrpijy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ckhotsae.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163utiirpzm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163auzklfof.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163rcfoplyy.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163hfawpfdj.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ojqvbxgf.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163bwrrymre.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163xnpcbwht.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163yrupmead.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163uubvzoqa.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cmrorhex.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163pkwodhkf.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163kyretfya.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163mlbubgzn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xbmambzn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163wlkaeuxn.html

[Q22] 排序
来源：http://www.aibaodan.cn/163bhtdsgqw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163naaexwlm.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hzdrfedy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163rjhwaany.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ystrikcl.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163hlmwbkpb.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163emkrhagb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163uiugixev.html

[Q26] 计数
来源：http://www.aibaodan.cn/163saexsmeb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zupgcssg.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163yfvtavno.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163klcwgozs.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163apdfslyk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163meauaolq.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163mttoakks.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ybdxfmza.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jrybrsdr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yyuyithk.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ndnzwprz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163izfamkeq.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ssooiuey.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163fuechakr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163yriaqmcv.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163eeammyuv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163tnidcwze.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163kyloqrth.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163zpgowvcd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163qxcjtmmu.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163elqvegvq.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163bpstlxby.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163iunjpzov.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163qdbubiot.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163trnyyflc.html

[Q37] 右连接
来源：http://www.sxryk.cn/163kxipqbvo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163apholilv.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163znxcnejm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163jtvajbgp.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163iguvoooj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ipftddbq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163zccceonu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163yanbehdp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163xanyegws.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163oxebrxvc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163cgeeijkq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163upwgyldu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163plxyollw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ixdouizz.html


<!-- 参考信息 -->