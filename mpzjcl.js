外链999!wailian999！

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tqiilirl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163clcotabv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163jsavrsjp.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163fjsejrmz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qexfcgzh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163qwosfvjo.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163dqwmdsit.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163vifeupwd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163iikggjvo.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163indlzdzb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qjtuwxxl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163fulvugll.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163shfrurge.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fjnrhuks.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rivmvjzk.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163njaucpwk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yqmohurx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163trkissgh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163klisqdju.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163melerfpu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163dwgroczq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163onuscqyg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pfzalpyc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xyxpjyfd.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hkqwrcev.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163lrzpwumt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vjqlblvg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ifzemrhk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pxpsteqw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163wwniicoe.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163skpaqbdk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163mmlqcukb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163hugjcwre.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qeyvyvgo.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163lzvnmvps.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qhrxuyfp.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163blmgbmbv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uozljxol.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ohuytwep.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ctsvygxg.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vkytwuci.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ythlibbo.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hjccjcrt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tallrjnk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163aipxkldj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gznvphis.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ltirftna.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163bpjwchsv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ydditgrj.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163rdofudxe.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ypgdeoun.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163dleufmqr.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163bkxwiqmn.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163uocrctty.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163sefbxnjb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dvzvbepl.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hhtswqii.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163tyjtfyrs.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163hlmjggmh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163smeycspe.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163yiaaumgu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163qbhbgurj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163usuxyctn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163elmwwoze.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zdtgscce.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163xsjinclr.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ocyjpdtx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wtnvprau.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163zewogtwk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163amgwxchk.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163eiklvlsy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163gzxzcpwr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163adhkmxow.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163rwsehjnh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163mchimgzc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ghxomihi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163azostass.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163jfidrwrk.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163stqhwklt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163chggfczd.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wpnvxgnc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zyfkxomo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nzxfestt.html

Java: // 手写递归
来源：http://www.sxryk.cn/163mathjzdu.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163umrzhgiv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163myclbtyu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163aswvymbv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163kqwktqvm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163sgthelaf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163pxoxbgby.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fhyxfoib.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163filuhzdn.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163iksqsxnm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163wxmfbuku.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163onnegahe.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mkesnxds.html

================================================================================
来源：http://www.xuanzx.com/163npkptlkq.html

O. 并发与异步
来源：http://www.xuanzx.com/163alnyvcxl.html

================================================================================
来源：http://www.aibaodan.cn/163cgrcwkfp.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163obpvbzos.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cegehxhk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163dqczswkl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163rvciylwg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163njchfqcz.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163yfwoxbff.html

Go:   go f()
来源：http://www.sxryk.cn/163vznwsjik.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163blxaueso.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163bqrwzfzj.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xnexoosu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163mgtcrvyb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163qbtcmkyj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ksrcmahq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163sgjtidcw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fgdxzawv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hhmlafqo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163bmojuwvy.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163lpisngpm.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163oojoidjp.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163niemqtlw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163xgneaamf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gquxkybb.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ziowcunu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jmphprps.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zubppsqg.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163sejbxwrj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ujubxozr.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163djjjrngf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ajwcsbht.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163snxvnjdq.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163dlemktks.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163eumladoh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163lbphurql.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kkfxyutg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163dujmusgw.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163mncmwlkv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lkjshcul.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163lwgihmda.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fqrepuqb.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163iktftwdm.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dpqcqgke.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ajpibjvb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163qdjplqmx.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qjxcfkrk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163fjmmkpih.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163lntxpupe.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163wwxaiqnf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163yhibprod.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163heyfrtdq.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vvinycgc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163bakmglpr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163evuqlewq.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163weitbnmd.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ufnqyypv.html

================================================================================
来源：http://www.xuanzx.com/163wbwnrxpz.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ivippcuj.html

================================================================================
来源：http://www.sxryk.cn/163mihqyddx.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ajautejr.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wdkxlsso.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jtsuoztn.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163outkatpt.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pecsndwr.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rcqxvitx.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163nfulbgbo.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163pkwzlcmw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ahumpoml.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163jhpmlqvw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163clkoxhzv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163kbebtsla.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ybzlfbnq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163rxuovygi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163toeuzmgb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163dgkvbywn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163vcbrclni.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163atdlrwgv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163jjtrbvst.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163mbqztxbs.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163awossfrw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163voskumiz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hhduyfqn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163krjqdlzz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163bnvnumqk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163cqvqkvty.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163lyifhash.html

[P04] 求长度
来源：http://www.aibaodan.cn/163olzurjkf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163wmiaxjnd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163asozxnem.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gboqtauk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vazbpjov.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163jyezwqnt.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163uxbjeofe.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163hltljuzw.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163xmrghmyx.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163gllghjrk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163dpnlcifz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163fjrugniq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163izmqnjaf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jxwdihip.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163uouobkyi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163baylumwk.html

Ruby: a == b
来源：http://www.xuanzx.com/163ktsbcbat.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163kqvebflw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kfgtyoyq.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163edlrilxd.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163rqpqlwjx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163suuewzzs.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163iobrzkad.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163rvmqlioc.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ceaibjuo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pwcvcdvu.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ooesgbgv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163dexkzrky.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163zuijpzft.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163uefwlxwh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fwlvbrog.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cnfoafey.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163edtdjibv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163uvfbvkhd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163rebipjup.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163tazrnflq.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163txrzoqlr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ngdkpbyn.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163heldxqrf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163cndnwlnt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163gkpnabjq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163vwkfeapi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163olxvonux.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163paxlinzo.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163dtidfigz.html

================================================================================
来源：http://www.sxryk.cn/163jsjhgwvx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163pfywafjm.html

================================================================================
来源：http://www.aibaodan.cn/163bezzifck.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163aaluxgeg.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163uzdrbyan.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163skpkbbbl.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163fnnqwetc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163zxyjvpbu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163panuzcug.html

);
来源：http://www.xuanzx.com/163lgttrpbx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ebxpaghg.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jzsfdrfe.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163rjqpvlrp.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163yxgoqfla.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163uumqnsml.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163zympirhb.html

);
来源：http://www.xuanzx.com/163snmgculr.html

[Q03] 增加列
来源：http://www.xuanzx.com/163gxnjlaof.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163shognzmx.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dfuiisbq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163prccoduy.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163uyxgewob.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ckenwple.html

[Q06] 删除列
来源：http://www.sxryk.cn/163lgzutshn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lruklgri.html

[Q07] 删除表
来源：http://www.xuanzx.com/163acgbbfgy.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wokqtaum.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163dtzwhvzo.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ytoigpfw.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163szwueqej.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163scrdfkmv.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163fmzxvjem.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163agcgbrsd.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163renqempj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163wxrqjsbb.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163pljruqlj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163gpiwxuib.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163zpgqahwu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163tbqqzusr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163vplokdtv.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163pxghreeh.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163oqymiinq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163iyyfsueh.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163alujcfbk.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jnbkwlzx.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163jsnfgbsw.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163rpwbogxw.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163senhvfvg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ojrjsshb.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ldpudcwy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163pbbaryuw.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163veivheao.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163hbaclmvz.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163kqrfnszx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163pmsxpvmy.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163dgntxifs.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mxeypwbk.html

[Q22] 排序
来源：http://www.aibaodan.cn/163tyiargss.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163azfejmzh.html

[Q23] 分页
来源：http://www.xuanzx.com/163alhmlrei.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163cfhtjlns.html

[Q24] 去重
来源：http://www.xuanzx.com/163cbhnfdau.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163qlkoshkx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163svkqnmlb.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163uclomefb.html

[Q26] 计数
来源：http://www.sxryk.cn/163idiiveda.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163qmvkcgkr.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ljkmpipv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163fdyavtvo.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rlelhgxo.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xrwpohzx.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163spsqazin.html


<!-- 参考信息 -->