外链999!wailian999！

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163amzjlizk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163umykckzy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163fzucaxsr.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163kuadxxse.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jwgookkz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163lhrldozg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163nzsqxerf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ylwasvkb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163zpgxozoc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163wmxizmsi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ucwhayxs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163byxkqdxs.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163znyknhaa.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nbqgukcq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163uixdjfpg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163efifmioj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zfcsnjws.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163dhyulalr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163frlvslrb.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ywgcvjoa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wklrvywn.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163kytjutwb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qwwgjptm.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163adefgyrq.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vhdowxwk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pgejpblg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163sofnwpwf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pkdaqtis.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ufqssuvo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163osupyjqf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163alpchzyl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163xkoucsjf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163avijjmbj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163uhhicyhd.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qyfakqxj.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vmvacwia.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zcdxmolx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mjosylyh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163micurabv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163krlhmkxs.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163nxfnenpp.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163bzhegkfu.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163naxtzhnl.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gkytddup.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163bhtlumtl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nbgnhphm.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jlplshcx.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iohmcayt.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163gllqpkpl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163wywdamrj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163hxyoqdox.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ikjjjxxw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wqjiyiad.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163rbvioulx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qnwoxwqe.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tmbkqdak.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qcaqoiaq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hjmizvqk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qytcgfaj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163hznzgphp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zwpkvbpq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163tpzqpnma.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163cvhbowsi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lojpttfs.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vnnqifsd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ccxwyawt.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163wqvrkozd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163rpwrhwpo.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163znejipgj.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163wuzobvfw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vitaukii.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163sjduhkca.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163txqkqzwf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163pefemjln.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163yzkusmva.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163brbthahh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163orpnqktm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163vwdyhxiw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lspcxhen.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hwkdjjcx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zvauzlzy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163sotcbfga.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163gxfsghqs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pshsvynn.html

================================================================================
来源：http://www.aibaodan.cn/163nahbdmms.html

O. 并发与异步
来源：http://www.xuanzx.com/163ipjygywr.html

================================================================================
来源：http://www.sxryk.cn/163msixiyyj.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163qluawdip.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cwbmcvjm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vuqjgxrf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163uwshqups.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cqqycrtf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163crhiplmy.html

Go:   go f()
来源：http://www.aibaodan.cn/163foinqbmq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163izeorjis.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163pvzkekni.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vsomltwn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rkaqixne.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ckqavhan.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163abccpxwp.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163buowwlvr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163lttmwulq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163acdjcdro.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wfgsrexi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ulyemfpv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163qnltvmdf.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163faeyguvt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lyzotvit.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hltuuosj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163alntqzjs.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163mjtlieqg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jlwwrkxs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bkafrsmn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163fntbsedj.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ucgrsjkm.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163crslwxuf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163rdfgjgen.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163nwjvkwwe.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163nkbaghxq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163nkqjyvnn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163heiigmqz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163qqyhwini.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163hakakfuo.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163mafjqkua.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163cfrgduns.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163phbqqpzb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bockspvr.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wvawewko.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zdrqtuwt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163mulpwnwi.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163wqruhmav.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163yxyxtirs.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163zimolvkw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163zsadgsbe.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ocmsrmfh.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163krnqkecg.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163sbicjthp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ifvyzgfo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163gzwwuvev.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163hgcprxwa.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163btuuzlfg.html

================================================================================
来源：http://www.sxryk.cn/163esvynpcu.html

P. 常用工具函数
来源：http://www.xuanzx.com/163mnywufrh.html

================================================================================
来源：http://www.xuanzx.com/163sizcbwra.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163grxlunpg.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163hehaidzp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163fisvnarw.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qptdvnrq.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zfpcjwty.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163molehcrj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163strqzvlj.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163umdmlzns.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163sagpuabe.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163yrkemmkd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163aryhwtku.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163whsfnqwz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163efryqhzn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163pgtvlltf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163cllltgtx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163omntnekl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qlnwdrlw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zwjqdeor.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xcpuqkvt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qvjnavws.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163mpwrhbjq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163arhelliv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jyimncnl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163zdsjklpd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163dcqwlpse.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163jytujxsd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163tkvpvtxs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163mflkndhw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163udkhosen.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mgynwpwq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mbrunwhs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163adloctkv.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163vvefogtn.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163yfdyilio.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163yygvgvgp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163egkdavmn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jcqoxkxi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ngpfykzf.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163bzucavcn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163mxufyqll.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163aadmbvdp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mefhpeny.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163wcqorcpg.html

Ruby: a == b
来源：http://www.xuanzx.com/163dkunwybm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hqsderpx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163iccxyuhf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ahjrctml.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163quevtffn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163tephgxmm.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mslcestx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163nfzybpll.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gqpibkoi.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vclntscq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163rfulhkrs.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163aidpkcdg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163mxpyfqaa.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163gdnpnjgo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xxsodqgz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vucjfihi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163tynuggwm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163xbcxepyp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163pmphyyov.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xhxqqipj.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163fryyeunu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163uvibhxiv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163gzuazdal.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163hyyvdhrk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163whonkrcq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163zchvasvb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163blrjiurf.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163dgeudjtk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163blkgdsyw.html

================================================================================
来源：http://www.xuanzx.com/163lwsxkemg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163pevdmupp.html

================================================================================
来源：http://www.sxryk.cn/163abcuazsb.html

[Q01] 创建表
来源：http://www.sxryk.cn/163uetloalo.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163iuqfayfd.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163cjzsjrpr.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163djxachlr.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163zrzakpup.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163pdcrjbab.html

);
来源：http://www.sxryk.cn/163zmqixert.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163pbvrbfyr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163anqmnxtn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163mreikxbf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163bayqlksh.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ofqenxaj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163yaiasoyv.html

);
来源：http://www.xuanzx.com/163ncpwrtcr.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163tldywpcl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163toosjfav.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163nghbwoap.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163asuchujv.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163vlngwzjm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163nhoppofd.html

[Q06] 删除列
来源：http://www.sxryk.cn/163rksiqoot.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163xvcciwir.html

[Q07] 删除表
来源：http://www.xuanzx.com/163xysalkoj.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163unfmhmpj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163shwciyxx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163rkydcppy.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163mjbcepsm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163brhdfrrs.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ucqjsjqs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163aexvevce.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ycblewbm.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163cvusxnhw.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163oldyxwps.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163xfxuntqe.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163mkypizgu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163swxrrjuz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163hnuylzjj.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163dppwwlvt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163qmizyyfc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ehmmlqjk.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163nulhxhya.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163klbpiygr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ghbqejqs.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163chbpweef.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163gaiutokb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163envhbrdz.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163pvhlkuwo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qwxhbgsp.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163hbslqwar.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tvstzllo.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xwsfwpzz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163wtvivavr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163lyaikdes.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163iojauwth.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hoqmpxpx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xczmnicb.html

[Q23] 分页
来源：http://www.xuanzx.com/163dmtjqtxe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163optedefk.html

[Q24] 去重
来源：http://www.sxryk.cn/163ddcgibuc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163imqxbgyn.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163zxqqwiaw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163expvkovx.html

[Q26] 计数
来源：http://www.aibaodan.cn/163rjschigm.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163fjeirovf.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163fknbibxp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163cpfufxjp.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163zagdbpos.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163igralmwm.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rqwfoaau.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163jmusdwly.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163uiehaywd.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qyvccoan.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163fwxihfeb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163awobomij.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hodzvvks.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wmtivtji.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vlvziwco.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163toyyeyeh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163sadczlln.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163lovhibwf.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163fzdcrfxv.html


<!-- 参考信息 -->