外链999!wailian999！

[N05] 最大公约数
来源：http://www.xuanzx.com/163etfzxybh.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163fcvqwsye.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163cupygwpz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163oijbukmn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yixcxagv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ncrpnmcj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xaumhsge.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lznnagwm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wnvizxnm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ijjmdpyg.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ygqafdvc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163vnfcerav.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wbnkctfn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163afihyxtt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163nkibwsnq.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163aatkogpd.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163xssitajj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163oambgcvw.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163nvomnhgw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mrbiijqv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163wkplzaxy.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hvhjynmz.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163kelmoril.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163tvmhglpe.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163dhgwoxyk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ufxvlkxk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163tlkenjoi.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163svjylghy.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mqclytba.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163hvpjkujf.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163inhguarw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163pzeruinb.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163izeoouxn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gzgmjbvk.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xhrpxpii.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163nsszwtne.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163qkmvrxap.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lzbtjwuf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163vkhilgyt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fzpduuhu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163bilghhkm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163oknrobkg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163eeylxqkp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ykicdwcq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rquklkle.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163llkiufbp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hgiasaeq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ctctihmq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wrqjgcbx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zwzwrkzr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rkghuagy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163sxrgamrg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vrlwfuav.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163juseomqu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163uywgsxzd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xrzvydcv.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xzzwiktv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dpxskble.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fqdejupl.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bixitmst.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163rnejwrvz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ejcoyxff.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zqtyiece.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163syrkhbab.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ligvobje.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ehnpohzi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rnthsxmu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dkhwwqbe.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wecoazri.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163xshhqkfc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163hooifsdj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163sbnpnnvr.html

================================================================================
来源：http://www.xuanzx.com/163wiysnjvi.html

O. 并发与异步
来源：http://www.xuanzx.com/163xrgnrgbl.html

================================================================================
来源：http://www.aibaodan.cn/163hqvjqrnc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ibjwuilb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xjqehirr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vvoehwvv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163aurauihd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ovpmvvjp.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163uhphoosr.html

Go:   go f()
来源：http://www.sxryk.cn/163ootuxrci.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163iciswgjj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xnptdbnh.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xvakxzaa.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163qboyvkrr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163mmxjlspd.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xjtkbzef.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xghtjssp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163uigtnjjs.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163doydigtl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ududzxvw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163uvcqizkv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163jpqnpitm.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qiiaksfj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163stooxmbj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163astcobtz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rdecmyco.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163nlevajkg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lzzppjht.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163dbegljjr.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163reguflrq.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nsdnorpc.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163yjucesox.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163dwtiltsh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ebwjudgh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163cbskmhvr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zbadbwqb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163tyyvgabb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163gmnvbfjb.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163vdnmwhpj.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163snqksyvf.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163yxclkzew.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163rsqnftvp.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fqsjbbyc.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163lztocavr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vmdxibpj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163oiwizgwk.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gpznpxni.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163uvxocbvs.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163kuedxohj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163iugiiywh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163zkahlwgp.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kbljnoya.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163nexqpmwt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163fchxwawl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163mncdrxcs.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163cxcwynwz.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163tuspgcad.html

================================================================================
来源：http://www.sxryk.cn/163ultxmjbe.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163iqmjxbnb.html

================================================================================
来源：http://www.xuanzx.com/163dqxvifzm.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ujtooink.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163dsnzjeme.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jtxvnamu.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wgqqkvwh.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ipadnjfr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163vepxfpvt.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ddjxulpc.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163yrjgdcpn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163gsmcgxli.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163kgyoohep.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163kculdzjk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kmhieing.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vzegjvov.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xnvorspo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mpdjwakc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163jrvuryvu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163xwytfgmm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hyatbhqg.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163toiulqmw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163uoocjzxd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163hqaqwpqi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mpgozpoc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ahuexbbj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163pmyxvjso.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163yksjdomj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163cpzvziel.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mfhtcojc.html

[P04] 求长度
来源：http://www.xuanzx.com/163nmmsjojx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163bttdwepl.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vffmychb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yupzuxkp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kcghdaew.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wqzoyesd.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163gsxebldr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163arbpcewr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ytjohkuc.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163xbyfqmkj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163kwmazugc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zxqvcdxq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163yjniplpl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vehyobar.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163owogwape.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163xirncfed.html

Ruby: a == b
来源：http://www.xuanzx.com/163mwylmhzf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163noolmbls.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163czqpbuwk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163hewewooz.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163pgbgukqj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163eiistqgd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163wxjcduwo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163qupobihf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163jjhixuvi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163immvbldm.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163smfbvfje.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hdpmayxn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163phzsegpy.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rqzbkore.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oktapyzx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163obqtazhj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fytfawsq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163kamywpyk.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163vgspguvl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cbaztbdr.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163bnvsztyb.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163bqhhuedp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gzimdmme.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163yhixehnv.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163rcnyszgz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163rnxfqgfh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nrqnndjm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ugfpwjim.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163tmfmsqtn.html

================================================================================
来源：http://www.sxryk.cn/163fbxiqwsw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163jztlexwi.html

================================================================================
来源：http://www.xuanzx.com/163leyktmem.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hyynasxp.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nsmwscxn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qmlhudip.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ohvsraqq.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163gjrqhhfw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xtghmxfj.html

);
来源：http://www.aibaodan.cn/163eisvlyvd.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163opsgczyd.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fqtzvzkk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163pkxddbzg.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xalmsnbs.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163veltbfey.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163zevykwxk.html

);
来源：http://www.sxryk.cn/163wqfumvoq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163twpautbh.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qxazqgoz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163knrjjmoy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163fzgelowr.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ejoicbdk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163cstudpgk.html

[Q06] 删除列
来源：http://www.sxryk.cn/163brchfeth.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nroykvsk.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ameuuutb.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163gbztybhq.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ycsuvcul.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163frnmqwdj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163pmxgkaqu.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163qjxxgvbl.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ifhsbevb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xevgrcbx.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163exgpuwfi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163vgqxjkrs.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163erflkjhu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163mykkaemg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163hgjaqtrw.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163vqcjmlde.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163iztrwmpv.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163ktdqrimc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163eqdymxzy.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163niepvcby.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163skrwugtt.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163zegfvakk.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163lgcbzijm.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xontqwhn.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163kbaqlnfb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163rzcqdxnw.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vpvdpmna.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163rfgxgoze.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ondfldim.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163svrlvvhp.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kjokxmkf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163yeqxxovj.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163kmqhchma.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ubbvtruw.html

[Q22] 排序
来源：http://www.sxryk.cn/163wbfccbwh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ljxxamke.html

[Q23] 分页
来源：http://www.aibaodan.cn/163uqmqrpcd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pxfuzugo.html

[Q24] 去重
来源：http://www.aibaodan.cn/163fhesiubs.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163wiijbgvs.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wmpnvlfb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163uibpnasi.html

[Q26] 计数
来源：http://www.xuanzx.com/163bmsttdig.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163xhhiczze.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163enayazra.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163arnfdzwv.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163qmvszqao.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163uwtgduzy.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jomqlten.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163upmrhksy.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163jxaiygvm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vtckgnby.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163tgddahos.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163upzpednk.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163dxndfsqh.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mrsytmjf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163lpuepwge.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163dfsokhvd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163jcqpmqwy.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163vbyqykox.html

SELECT * FROM (
来源：http://www.sxryk.cn/163kkaedbmu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163dassmoua.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163uavtiiow.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ecepldhq.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163jpfhwdkg.html

[Q36] 左连接
来源：http://www.xuanzx.com/163fmynkepk.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163unosmknd.html

[Q37] 右连接
来源：http://www.sxryk.cn/163bkmddcvn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163zgvkcubp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163uvfhsuwy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163cgktcyva.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gigseqit.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163vqrkozbq.html


<!-- 参考信息 -->