外链999!wailian999！

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163birapxux.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163sguotndu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pmajvfra.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163pxicaiyi.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163fairqouy.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tuzqfljh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163surfjqip.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vgjzxide.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xnbbhbnp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163xblknbhs.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ofdwzywf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163xrvgwhau.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163dhzpbttz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zkyfulwv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163szbnupom.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163lvydfjxg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uxmuzivz.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163yxrharof.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163tmwqnfcl.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163digcgkfv.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ksnfcjit.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ywfkaqqg.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qtnubliz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163lwgybstt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163acbavneg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ddlofgfu.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tzuczbgd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mvozqqeo.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163jnoparyg.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163rwvpcjfv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163lwwkfhcg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163gdhatfxj.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163hmsujxck.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163abquyzjd.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nsjcilkt.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ljsqanus.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163yaoubkod.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hprxbcxe.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163smmlfhbi.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163quhrmmhs.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nfswbnco.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163xdpunwwu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163cmyxrghm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163tiuuvtyd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tgvayhep.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163lxovlahq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163lkhspzwu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163hkqcioor.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ablycgzd.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163elvimvdq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163nbpfnxdv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163xfazjivo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163csrrsrtw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163eclwpxnj.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ryedxqvo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ongngnws.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xtaoyrkj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163azrcytct.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163wjvavmka.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163dnoowuvw.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163aulqghrx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lrvhgdzn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163djmnibfh.html

Java: // 手写递归
来源：http://www.xuanzx.com/163zvwrkxll.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163babuhwby.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yvbijsgr.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ugovrhfv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163cnrnklzh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163lmpwntyc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163euftfyyb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lvhptmyh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163umyyiocv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163txlytqnz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163whmokccu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163awsmldhs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dkbwxxqi.html

================================================================================
来源：http://www.aibaodan.cn/163lzqegmtu.html

O. 并发与异步
来源：http://www.xuanzx.com/163veonxska.html

================================================================================
来源：http://www.xuanzx.com/163tdoivojv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hikutlyf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163qpfqqcsw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163yxolgiyk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163vpmzbyvb.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ewlycfwc.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hnequryf.html

Go:   go f()
来源：http://www.aibaodan.cn/163mmtigoxg.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ijxrcenr.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163krbkysbu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163gljiapmr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163svndptcy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163jzszpkcn.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qqniwels.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mcvxdfph.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163awmrfohu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163nwaggzeg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163jkhsrols.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163gaaopwms.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163yfjkadwv.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163sgzifwds.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163nnvolgls.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163fvoxddee.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hkgseciu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163tyvclwnc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pognuxds.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163njztugjo.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qrrxfoym.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gbzhznzl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163tuuzrrxx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ibkiilrv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163omhuaveb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163hrhptsgg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163omtdfssm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gbupuhja.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ojffyznn.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163myvkrdzv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163gzvxnopw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ngyhqppm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163bdcldjtx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ykcmczsa.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gkbjsadm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163czymkpio.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163kavcslbe.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xbrokzyz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163uyrkqway.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ckrrjvsa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163pccdpnmg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163nldneewy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163phkfbgis.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kiersioe.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wpculycs.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163sshoqmib.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163sodjiqae.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163hmhsuonm.html

================================================================================
来源：http://www.sxryk.cn/163yoixvmjr.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163yqzmetqb.html

================================================================================
来源：http://www.xuanzx.com/163cpdctdtd.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163opkpksjz.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163rgirqpto.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163uybqasoe.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nzuitxkr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fzxmdawu.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163eyvyotri.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163kgrxdndb.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163izarweet.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163szdyneqa.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163tgbfjhpk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163mvedwgot.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ykrmdngc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163tsvrcywf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163utbcdpts.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163fvececei.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163stxehpal.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163xsxoxcjz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163njylexoy.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163saltxqpw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hrbactuc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163uumrfmna.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163plctjvkb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163susxqafq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163nfryvoby.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163lxqtmkef.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163dcutdolv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wbgxdscl.html

[P04] 求长度
来源：http://www.sxryk.cn/163esjecaqn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163jcepwymn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cuodydfe.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cbiqhcgp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163novfpgof.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ieifxuwv.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mjsyhtgh.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163uormzncg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163fmgnhaby.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ayierqjb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163nfdhvzls.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163bpdoadkh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163atzxivtv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pppwmvct.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163otnuxgvm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163rwxigqvz.html

Ruby: a == b
来源：http://www.xuanzx.com/163wowgajvc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163phqstovj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163upvxuqrq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163virrvdlg.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163lanintvm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163hieqxfdu.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ukrljuhs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ywlmwmra.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163xhvubwvo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ewsimoeg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163yozzzhmr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163qlptvdal.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163vimojrca.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163qyzacnpa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fjdvmpai.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163farqbzwr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163abpcwmsg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163lxxaknox.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163gfweoonh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163medshdib.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qkxfkgnl.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pswqctwr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163wpulthmw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163oaegadwg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163iwiskegy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163cskbofmc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ecjgojfx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163njwhfndh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nymilbau.html

================================================================================
来源：http://www.aibaodan.cn/163xycotqsb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ibhhcxme.html

================================================================================
来源：http://www.aibaodan.cn/163bjyqdiye.html

[Q01] 创建表
来源：http://www.xuanzx.com/163lwffoijc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163xnbtglmq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163afxybmtt.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163vsgxuddr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163arknrvcv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163pjdzuaha.html

);
来源：http://www.xuanzx.com/163lpewwcoi.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ordjvyyc.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163kjyuzpna.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163fwkfkccx.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163argtahdq.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qnmfuftz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fkhceppt.html

);
来源：http://www.aibaodan.cn/163hzeowged.html

[Q03] 增加列
来源：http://www.xuanzx.com/163lquspwyz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163hcyceizq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jkwkltmb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163yaiblhqi.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163asgyitdo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163fuvzjsxu.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vfqkksdx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163aeqirthk.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163mlhhiecm.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ydxgqjog.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163dnmwexlq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163dngdmtzy.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163oetggcfz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163vuylvyix.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163mwotasku.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163dhrelutf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163fdtczxjj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163shkqmhng.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163hqxdtkno.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163yeyrrgnz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163fjnhsrln.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163svreijca.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163csemslot.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163kbwloouq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163fjkcpgjk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163fzsbliqd.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qialwyoy.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163oxjmygvn.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163hxusrqjj.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163elusczmv.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fxjlqscv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hwirymic.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163rknzgcdp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163pbvehsea.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163odafgwys.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163qizvpdkn.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163bbmpmmal.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163jfunbisy.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163bhtdgdsv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163pnkawcuw.html

[Q22] 排序
来源：http://www.xuanzx.com/163aasuzbmp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ecfpydfr.html

[Q23] 分页
来源：http://www.aibaodan.cn/163vvsmgaax.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163cdzezdpm.html

[Q24] 去重
来源：http://www.xuanzx.com/163zgezpipy.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163sslbtfmm.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163grkiiuxr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163liyyhmbo.html

[Q26] 计数
来源：http://www.sxryk.cn/163raqqievm.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163brysdmgk.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163fayupccp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kertphsb.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163cbvlbehr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163anikiilu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ahkpjwuu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ngjtocpp.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ynargldp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163carsqhdn.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163faqervgq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wccdeexl.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163tvupjxqw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ougcgens.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163zhkljjnc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163hdtnslqp.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163rvxefpkx.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163fdgtgjtb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163chxckgwe.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dfjdzcqw.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163uhjjzwcp.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ajvlrrkv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zbvgconv.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163eiweqxjc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163voqemtjl.html

[Q37] 右连接
来源：http://www.sxryk.cn/163mdioommg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163dylhntlx.html


<!-- 参考信息 -->