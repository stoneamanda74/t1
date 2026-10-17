外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zkyycbmm.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163vwheccsc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bdnksmux.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163quxlldxj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zuutgkjq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nvffvlgv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163fsrzhafk.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163jgcshyqy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lqdutddw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163qdfrvmyz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163igislihy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163htbmuqgw.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gjxygrqa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qnhurrdz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bgtlsadd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163nxxprlxb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163dncxtmva.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163brybelfz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163flmmgamy.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163wmwdvqfw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qhagvlqh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mifeuxon.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cbyxozoy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lowshvud.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163yooyvmtt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vzckrjcv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qfofwrkz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163opalktrv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163bjpiyiok.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163yhppvrmr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hmfuraud.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jtljulgh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qzcrgpgq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jtdkaplo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163hfporfxl.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163nkmfdomg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163iegayiaw.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163lgocfkcr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ofisxkeg.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163hazriegv.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163twnpouaf.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vgensqkj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qrolvxvj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163zahijrjr.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hicczuux.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163enkxfjig.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163kckeowht.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163puhnsgpb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163cqnjlads.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hllrumyl.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ruxdppgf.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rkntgtja.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vvjcvxwp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vyvqkhnp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163yxzhfwzq.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163jjxbbayz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rxdiplwo.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163lztojwdo.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zeswyzyu.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cnrxsxkb.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163doubaxge.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163izvnacac.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163hpulqhcv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163bybtyezr.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ubbcwxuv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163iwvsbpxy.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ariwosjl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163nydhraho.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163tnyklgnd.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163nyvyxumq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163udifvfqo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163bfwfdxfn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ddyewlef.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ktzyqcmr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163nkxutkgi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ixuguhge.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163itzdfriv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163euucqsqp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163egioihcu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163wscfxqqr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163dxpwpphr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163wgqlkgsb.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163banhexaq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163yyvurfjp.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163bmmiwgsp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163odgqybyc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163loealxej.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163trrflzjo.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163sfxcpxbx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jfiejgfb.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163thhgepuk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163fqaudtao.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163fdqyevlg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cupbmebb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dwwirvew.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ohuvdvxu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tgvzkofm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pgvnbpql.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tcyamxjf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163xbrqufaa.html

================================================================================
来源：http://www.xuanzx.com/163eakvbygl.html

O. 并发与异步
来源：http://www.sxryk.cn/163adjdthpg.html

================================================================================
来源：http://www.sxryk.cn/163mhlcqtap.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163anjjumqu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163txsrdlea.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163zixsubxf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wfbtzyyi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uuhnwuuc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163xgwdybzb.html

Go:   go f()
来源：http://www.aibaodan.cn/163acimbmyb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163uvslwodf.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xxcsuytq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hdrzpnup.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qqifrtui.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163zhjybhuo.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jthozqqd.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rzyozwtj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163guhpaifu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163zvdcqnqd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163mghbmyxf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163neftorwk.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163lblxgpuv.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ubecumtr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163tdecaclm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163xbhwwjtv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163apyhlxyf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163paqipnoq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163yjeoqhrb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163fjtfexhp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163dxgslmax.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163rrkalkye.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163rvmnoawb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163vqcughbb.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163okqnnyqb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163uryqkllp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163udpwriwu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163kvpwkdme.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163gibhafha.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163hnktmiry.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163rtdtqlxq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163juljxeal.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163spclvahe.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wqbthtsn.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ettleemk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163kxmwwbdw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163tqtnkgll.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ytyvdbxs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vyscjtzu.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163zeqpsyzv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163cusfpqws.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dspuiyif.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ohmkbflh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eytyrxiu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163bydhtoep.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163kqseaknh.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163okorrxio.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163vmrjhgzz.html

================================================================================
来源：http://www.sxryk.cn/163eiomtzof.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163hppqamcx.html

================================================================================
来源：http://www.aibaodan.cn/163epsezfsk.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ysesdite.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163yhjoynap.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163eycqbkip.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vdnllqkw.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163grgkhwkr.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163elldakwr.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hdqhuaij.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163gghpkfjr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zuiemboc.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163stnlojco.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163krhtmpiq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163bnargqwo.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163aoyvsjbi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163gibfawdv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163faoqzeua.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lzrksxad.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163iopsmcpt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rszbxcgv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163mbmwbrlb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hhnstexn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163rvroteko.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rhsmuqgv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hsoiksmu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ebflsocq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ghfvjfdp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ujyxpubw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163gyrgbqed.html

[P04] 求长度
来源：http://www.xuanzx.com/163gsbrsqyj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163thqwntme.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ameggawa.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lkauxfer.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qyklaeqy.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fzufbnly.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163zohzmbnr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wmlmvbjq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ngsvcrto.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wukgmwzc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ldscqgqa.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163fzecxpcr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ilxxczlo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ensskovg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163vhreyhcl.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163zahalbhu.html

Ruby: a == b
来源：http://www.sxryk.cn/163tnyvcqpr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ndhksowk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ezylziey.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163plzdomfm.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163nhdrvdjf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pxdtttij.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163etxmcgau.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ntlmiabf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163xpdmobna.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163hbyvoqif.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163apqdzkfh.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163abtxtfhy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163oeokgplx.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163akfuqkiy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163svtebmpn.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wcqnopmr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ilwwpbkc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163irajutig.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163nivcxwvf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163gqwqknue.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ghmvfrwk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tngwprlq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qffqoyzl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163wcxjgkik.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jbexiljz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163nwdiieiz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ydknikcs.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163duqycftr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163nbubugtp.html

================================================================================
来源：http://www.xuanzx.com/163byhoiscg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163hcushtrl.html

================================================================================
来源：http://www.sxryk.cn/163kshiqnbd.html

[Q01] 创建表
来源：http://www.xuanzx.com/163jimhssuz.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163rqrzavmj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163piojgwnv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163yejmmetn.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163irqfhnxd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163gqoxezsy.html

);
来源：http://www.sxryk.cn/163nuikfjmw.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163anknilrx.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163yoteefmo.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163emgrqlyk.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163afiiaahm.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163safwsxja.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163afgpoqpo.html

);
来源：http://www.sxryk.cn/163tsptjuzr.html

[Q03] 增加列
来源：http://www.sxryk.cn/163bqvkylcq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ovcvcenf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rqycznqr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163vtceioep.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ltajghhb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163cbhrynoo.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163orfllnby.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nbuslige.html

[Q07] 删除表
来源：http://www.xuanzx.com/163gpkxdhqo.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163pxunptmn.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163kmarulho.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mwersebm.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dbbovisx.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163dhbfdtfw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163shdzlviv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fzhflwqh.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vbggfhzd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163buwbvpsn.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163wirygxpm.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jimsvalc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163hrbsbjtz.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163jjqmlkxm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163vbyyfrjn.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163mqstqdas.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163gdtwswgj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163pqonhyvj.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163iwdbkyfc.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163hjzxybhj.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qejoohnv.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xclduoko.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163lvmjsitn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163nucutjma.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163gbyyxdqk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163lxkdkaty.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163uvkzinna.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163nrkluipx.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163lphygufc.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163izbpvypn.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163jiqnitpy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nnxnsfad.html

[Q22] 排序
来源：http://www.sxryk.cn/163crcaongy.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163colpplts.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hnzdjqfe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163elhewrfp.html

[Q24] 去重
来源：http://www.xuanzx.com/163fdslqbqe.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pmmoezsj.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163dluknqjv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163ydxfwhna.html

[Q26] 计数
来源：http://www.sxryk.cn/163ansdwidj.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ainbfvlz.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163utkyzpst.html


<!-- 参考信息 -->