外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vjimnyki.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163szcdoasz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qdvsmblg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163gobzyamy.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163nerhceir.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ktcpqqle.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163wyfaxgvm.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ewjaflld.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vhzllysi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tlgwjnar.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ijktnzoe.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xknhhfpi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163cqyxdjnn.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163akbsvrfr.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xxabpdbx.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163gpxbzrsc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ypquuyon.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wdlvhoad.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163rmgwypbi.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ldjfkore.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163czustidc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tdiktjts.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163lgsrdlhh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zffgztqa.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163aextcbrt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hucnqzxn.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163uhdbjygo.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ulhrbgbm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jytveetz.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163qvflqtah.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163dbbdmnpy.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163qxhlaijk.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163pbyiguhx.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163yadbpqyb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163gacphchx.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163onirjpmv.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163clebehhs.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163chmohumn.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163zrixlpgb.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163soqzcvbd.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163rhknazvi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163hfiuozbu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ftwurhgf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163gwkfuntr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mkdjzcmj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kduixrxg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163zndhoopi.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163zmvoavde.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jiewsvkp.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163qmmgyzlq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ktsuyiwk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163opqnszfb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163luttgolj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163vpwblxds.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jzvojomr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ptkcmhmy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ijhvwwjb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ycvpwcpg.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163gwxfieec.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163dtsdnnak.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163mfspwslr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tdgvogvx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vzfthcaw.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163noxglodv.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zzohaguw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163jxkpqfrf.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163yuhduevb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wftggkzt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ojrsjbax.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163pzmkeaur.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fibsfwcb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gtoojqnk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163awulppdn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163hxklndui.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163bdohnoay.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qxzmshwi.html

================================================================================
来源：http://www.sxryk.cn/163ucbtatbn.html

O. 并发与异步
来源：http://www.xuanzx.com/163ubinvwcv.html

================================================================================
来源：http://www.aibaodan.cn/163wppwamyc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qrhdrjew.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163mklufcsj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ecykmtbr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ztswtiyp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rfnbvuas.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kbisiyhd.html

Go:   go f()
来源：http://www.aibaodan.cn/163sdsprsed.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163cbxkinsr.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xuwvyltc.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wyxdkrpc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163amiwlqcs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163jvalmldr.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dwsnyizx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vwtzgykf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163zkwzyrph.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163iurehguk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163byuctyen.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163oltjakhc.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163dtpkhayp.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ksvxinoo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163agfmkdcq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163kjybboei.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lglmnqgy.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163pigmvlxf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163npxuovsp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xncqphfr.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163yftvcxyc.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163oserdzos.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hyrspsrz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vhfvnefo.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163zqbnnwtl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163njilpxig.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xglfdqsz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163wtizyplm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163hbjabqou.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163qepfwplv.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ihkfrwzv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163xrebohta.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ktqbiznd.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ajjroowv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163eoriqrwb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ymqcqxbj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ievxbaac.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ulcohbrl.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163bqxwwrac.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163vxsjbdyw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163muohptps.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163rugmgtbf.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163alnohzni.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163drotvnsg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163cawbxjik.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163yqwfgyyv.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163jfajmkxu.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163lswnejbq.html

================================================================================
来源：http://www.sxryk.cn/163psphpbzk.html

P. 常用工具函数
来源：http://www.xuanzx.com/163fkbrxmus.html

================================================================================
来源：http://www.sxryk.cn/163qronfbcf.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xisgtymq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ltqofszr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163odapwukl.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tkjthskt.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163spjehwtj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163jkgrnbuc.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hzgbywuf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cmrepawq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vvilxyae.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163yejoiatb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163cdapdjvl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163iifwsrdy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163psanmetb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163hungejgo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163qynqecrq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ufjwfaax.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qpcqprbi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163hjwcmzli.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dhqbzvgp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163wgwsxonc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vmfakkrk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dwsevmnw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163nehjmcyt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163wwjqwopm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163nzegrabb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jsbjcebv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163hlutvwtp.html

[P04] 求长度
来源：http://www.sxryk.cn/163rudajvpn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163akrlrlaw.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sfsxtkyw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163eierykvp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163semegpws.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163xhvohwqx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163vndfqxvj.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163bgwjvzjb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ygykchuo.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163bqfaqxvz.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163dvuxfzsl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163fkhxgzyx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ibupckwq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163jbtacnmx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ctyyiwjt.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163keuycuzr.html

Ruby: a == b
来源：http://www.xuanzx.com/163ontpqijr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163zwjiipkg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163jiutxlsk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ftmhmjgv.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163qvjpbtyh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163vsfrvnll.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163chwcedbt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163nseotzkf.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163wodqukpi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163kbwwzvgf.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163msnjnwie.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ohzkjpuk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163cpexutyy.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163avvjcvis.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pmzqtwai.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163uhwgfdux.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163lshmolfq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ztophekl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163udxsnusb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163kznhmlmd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163eopsiesz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163guttsweb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163cydwvhdj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163pzycfcyb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163zjczrxny.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163yvtnsvid.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163uqmetjbd.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kktbtxtp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rxowsluw.html

================================================================================
来源：http://www.aibaodan.cn/163xhnbwjcs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163ufouowvo.html

================================================================================
来源：http://www.aibaodan.cn/163uqyisego.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wtlpezap.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ehqrhqem.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163xcbyqrim.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163samunsuo.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163jbxtylyd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cwolxdbx.html

);
来源：http://www.sxryk.cn/163fdvrfnwz.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qsuzpbjl.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163iznqelrs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gevaedya.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163iyuhjszj.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163lggccapy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163lwbmyloc.html

);
来源：http://www.sxryk.cn/163jexrvjum.html

[Q03] 增加列
来源：http://www.sxryk.cn/163rstsafvc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ckqfdshx.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163kldlgqhy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163vvpaoceb.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163yurlscxv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163gnkhxuwb.html

[Q06] 删除列
来源：http://www.sxryk.cn/163hllxyjvq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163xmakmnxp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163abcveskd.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hevkhxho.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jirbxbyq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163njsbqkyp.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gkrjoczk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163hptfrmra.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163wblnourb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163dmnhnybg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163rjoyvzhf.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tgcwfybz.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163tmxdyybw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163pkvyzvic.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163atygdjms.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163bxbfdemk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163dfenysfn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163hvmqalol.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ypbxlurk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cjzcuyla.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163eavmdpsh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163tiipnzde.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163fzlcaigr.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163yriwxoqg.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163tzhxvkjm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163nraezsqa.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163wswvkglz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163nbfebodd.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fixypwel.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163lvlvpart.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gjdfkwiq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ihvylnib.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jwabyuph.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163fjspvtxe.html

[Q22] 排序
来源：http://www.xuanzx.com/163hzkejxqy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hqinamwx.html

[Q23] 分页
来源：http://www.xuanzx.com/163skgpmalv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ewfychie.html

[Q24] 去重
来源：http://www.aibaodan.cn/163acselroy.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163klrojach.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163cxbakytf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163dvngctli.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ibawqgpa.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163rvpoivzj.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163zkwhljvp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163evxmkduh.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163wirozxsf.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163poixjqse.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163egtsvcso.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163nmyggqoc.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163luojfwzq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jlstxvyg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163rherzmrf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qgwnendt.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163oqcqvvhi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wkkouczj.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163gwptfszu.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163yzofgpfm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163hptwvzce.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163aowmdhwb.html

SELECT * FROM (
来源：http://www.sxryk.cn/163kzlqerjv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163hcmwzpjx.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nzlpfmtk.html

[Q35] 内连接
来源：http://www.sxryk.cn/163bpqxqzgb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lyrkdjpw.html

[Q36] 左连接
来源：http://www.sxryk.cn/163zduvqtzq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163wueerejp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163djqqiaiu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163ilabbwnv.html


<!-- 参考信息 -->