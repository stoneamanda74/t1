外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163tnwwzrob.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fzotavyh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ehgboyiq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163enawrdtt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gqpzrxqm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163penbqmwq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163oimbbawf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163idranplj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kfpzhsrg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163sgexhgjt.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163fbwjdrla.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dsxjppeh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kanqmtjo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163aoyprnhr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ifcofzzc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163egctuoem.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vwflysux.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ueqmmnie.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163jskjujml.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163powupfyc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ugucmqbr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163gmtituak.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ttzegsry.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ehfwqnra.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163chyhnqnl.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163frsztkpd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163gdomyijf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163rcvpuisj.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163fbqkonvh.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163zowlmmpb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163wgkhxqhr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kdgzuhvz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ejbnbykc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163bkqsnwsd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qeuolivg.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163wwbjnscs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163kbrongfz.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163bmiizsqi.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163tyyvhtjj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163mphuwvpd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163deajgtkd.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nvzqwirn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163mddxdltq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163nzfxcbhv.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163lbxgeiyw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jcejafif.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163xafekfbv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163lxnruhdg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163fxvutgwi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vygkpgfd.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tpazqugt.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163lprhbsgy.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163rgxmmpcp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kunxukuk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wamfqgms.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163glrrnqfw.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yfrzsjzg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163keehgftb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163oyulffpv.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qwfyvuzn.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163bpmyikxq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qwuwbkfu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163yqdxahcs.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163olwdmykw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163cockhlck.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163elanblgv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163optplohe.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nwbvsdzj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ejhuutyi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163occcmxfv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163dobflykc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163aqeibcmt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163xffxdyjs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gxtqjjhk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163anezsxrz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163sbpjlidj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163cirzlcpy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mgsucfsc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163cbblzork.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163clmfljik.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163cidsuymv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163prcisxwu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xeyvrmjb.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qjshisrw.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ggabobmf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qszkfwii.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bmlvmizb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163npgpldvg.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163sntxorew.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rieidzcl.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163oqhdedew.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163heycamtc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ixooatny.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163mtinligc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163goiohjag.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nikyanqg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lxwawchi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163gohoqije.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163qookwsmk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163eaudshxi.html

================================================================================
来源：http://www.xuanzx.com/163xzkqnhii.html

O. 并发与异步
来源：http://www.xuanzx.com/163xqbvkliu.html

================================================================================
来源：http://www.sxryk.cn/163chfanxzh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163eauzobny.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cptajxvr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163gjbheamg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163katiyoey.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wmaqzoxq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163zootmwoy.html

Go:   go f()
来源：http://www.sxryk.cn/163xvztcxgf.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163dtsuffya.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jnzqxizb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hyhssgws.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163oatmbryx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163czkvsxtj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163csnoedkf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qbtbgted.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fpqclxzb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163pwghvlay.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163kgckpbwm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zjaijudg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ydfavoyb.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163guuroucz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gdysurqx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163dfqdkiiz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ymlcnpto.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163cywallwv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163iqgvbasi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163johvfqii.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163hislayzz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rtuvgvvj.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163kkjgoadh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163eaqyiwfw.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ymyywqtl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163iwtevlxf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xpizfnne.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163opnelwgs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163pwoxyeia.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163patexqjk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163onnnmhze.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163fewhogph.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163tsffbito.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yejkxbxi.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ebzvbfxs.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163fyhrznty.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xdkbaugn.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ootqwmzh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163bsfoaxjw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163xbxkkxvk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163mlkswgur.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163hogxamgs.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oiszjesh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rgayxxcn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ybjvfhfw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163hrxdapjh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163wpkjyenp.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163rddmobva.html

================================================================================
来源：http://www.aibaodan.cn/163uolpnlkc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163tkombvbk.html

================================================================================
来源：http://www.aibaodan.cn/163wqcifbnj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163wkwgjept.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163thjprkal.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tqqdugib.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163conlonxd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163sjvqhrox.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163jscepxhk.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163gxbbfmxo.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gxppcdrj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163huyehrhr.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163xmrjorrx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ocyvyjhr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ffydflvq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163uolvraqm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163wdosdmeh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163lnmdjdbn.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163dwxrqhbb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163qhgydotx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163okluercq.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163zdgotcog.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163gcozgybh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rorskbzq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163vkghhjxs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rbrdkqub.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163oehstcve.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vaefsyfg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163cmxvdsrv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163knsazyqm.html

[P04] 求长度
来源：http://www.aibaodan.cn/163paskqgzw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163neawlhon.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163qeniupkh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ruxohyel.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jgnkddgi.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lqyzwarj.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163hzumvbve.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163glmkjqhc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qebzktrm.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jxtxsxvl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163cwitddmp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163kjndxfzh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163wpeewjts.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163bahuppbq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163bgsuxyvb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163dlaopruf.html

Ruby: a == b
来源：http://www.sxryk.cn/163lxsikjna.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qbguzhva.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bibwtzem.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fmggqqmd.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ayvvxifa.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163kxzjmfll.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163uyjsbhom.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163vokgfqgh.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ivkyokyy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163nkqfoksh.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163csycfvvj.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ntctnkgd.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ytzfdrpj.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163gssuhjvy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nqcrdaiv.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wrgwxkkc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163qknslkkh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163bormceig.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ehoynafr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rrrtgles.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163bpcftgct.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163aqlffbxy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163bvsurpxk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163nfzhjxyr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163wwxmqrds.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163rnwbsvim.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163mhdfyltx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jlmexxxa.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163dkqqmakd.html

================================================================================
来源：http://www.aibaodan.cn/163xiyjxcdg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163avcyrbjl.html

================================================================================
来源：http://www.sxryk.cn/163dldkoacp.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163nqwinykr.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dnwbdoic.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163etqigtpw.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163mqrmccsn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163uivfxyph.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163kfcupkoj.html

);
来源：http://www.sxryk.cn/163vksvxuym.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qiftaumi.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163xokxolxf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bqxeaqeo.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kziobjjg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xgfdesln.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163mwuuotfl.html

);
来源：http://www.sxryk.cn/163wclrulnp.html

[Q03] 增加列
来源：http://www.sxryk.cn/163dhvomcka.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163eahsrstu.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163tsdjhuei.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163egzhssjf.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163orillued.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163llqzqjub.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163uxyewhzu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163wsyoxvxb.html

[Q07] 删除表
来源：http://www.xuanzx.com/163iqoqxkuo.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hxfmfvyo.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163lhiyjvqe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mbgsgdmj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zlmoubmz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163twrjinog.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163wxcuoqnu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163uzklfvzj.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163jygrgdgk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vbgczdsg.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qslqkjiz.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163csybhfdk.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zubfhrau.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163fkxroeuj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163zikdrity.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163dcoxkqbb.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163yfjnrakw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163grpqaded.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163qzaumkpn.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dhlguped.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163orqiweol.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163cmbcdnbw.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163rcdvbibz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163deccdapb.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163sohfpkfl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163glzpfqsc.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163xmgckqln.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dqcfcumq.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163tkqdwppf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163rvmekegu.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163wkgglwht.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163yfosyxsv.html

[Q22] 排序
来源：http://www.xuanzx.com/163jeiooizx.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163xdzbduga.html

[Q23] 分页
来源：http://www.xuanzx.com/163gpiljpsa.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163djclbtrb.html

[Q24] 去重
来源：http://www.aibaodan.cn/163cnchjrft.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vpnqseqw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163cturnpih.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qbjsyptf.html

[Q26] 计数
来源：http://www.aibaodan.cn/163twpmkcdf.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163vwhmphpw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163haikvanm.html


<!-- 参考信息 -->