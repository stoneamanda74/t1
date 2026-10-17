外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vtugvvra.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zquruige.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163khzrhnys.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hqvotytq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tjaihiib.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xejrpzwt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163tgdhnasc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jttljmcw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163andmocpp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163oyrvuoiu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gnxxefyt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163fesswmvf.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bfgpuslk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kamgjkjq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163uydyzyyd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ffjafzgv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fawlzycp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163tgszwxps.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163otvttcmv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163odcuammc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rgiwsdeh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163jnhehesr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163nduzspyt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163gbuzrhpc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163qwonnhxc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rdegkasj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mfgujwnd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qssgfcdy.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163oybkqllc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163zmdljrew.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163pvqapfpf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zmtbtdqd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mjkhipxv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163qzmiuomm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163jxriiimi.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hicxookb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163yziibzol.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163jsdofkem.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163odmzdkyf.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ywmjpbcp.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mfqpadbc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163upoiaffi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163frkpaidg.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163sflldlmp.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mfciultu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bvbzqigl.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163suycehhq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163krubartt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qpigebjx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gcutjpkv.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tsprqdjo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163odelsgql.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163iqqcquua.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163fmhddxmc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163aahbojkg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163tkgtfcjm.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163fdziozxf.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163cjcbsosu.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fzsiqlgn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ftputbui.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163taittcvj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vlqupscq.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163iqphounm.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xkmykone.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zthfpgdr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lbpaptdh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ziefsxbc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163monikqxd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163yfwkigro.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163prylakrw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kvtiaycl.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163thuafxfl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nevirdwv.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163vfayrcgv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163qtimsmmq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163vpjkjkei.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163myfsweme.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163swyuzunw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vaazgsvl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163rzliadbc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163icdtgsyx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163vlahixyp.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163tysnkkkt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163bdzjyupd.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tnutsdve.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163yjzvqzuw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163spgrpftm.html

Java: // 手写递归
来源：http://www.sxryk.cn/163zekthimd.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qoiwfubs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ftgnkmdi.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163exdwcsgp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163dvduziwz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163heetwrxc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163pglyggfn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163btwcxqlm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wcwuyevf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cnhfhium.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163jtgnmhjs.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163eifrpeds.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163msbzotrf.html

================================================================================
来源：http://www.aibaodan.cn/163lmlzkvul.html

O. 并发与异步
来源：http://www.aibaodan.cn/163pbwkbzzt.html

================================================================================
来源：http://www.sxryk.cn/163vjafhyda.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163dtuymyqk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ipsdbvjn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163umrrubsx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163bypbijas.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jvjdoigg.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gmpwalan.html

Go:   go f()
来源：http://www.aibaodan.cn/163tlpdyyjg.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163shmodihf.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163tizatgpp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163rrtxcoqd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qptkodyz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163euihxxyv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xszipror.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163osfopjbq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163xzaneehd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ewxthrmj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163jzvtbrxv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hbongxuz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rqjzzwry.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163itawmxoi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163npfuugto.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163juoocvuv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cbjyzhtw.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gmrczknc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xaoutgmt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163wiqdwzuv.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bqxabrbt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ijpugkjt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163vaxtxmep.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163bwfuoste.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163rxteogci.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163wbsbewie.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163gwqspbrk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163dknhintp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163khsuoixh.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163bnfkudkj.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163anwsialt.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163pylczkrd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163aetttomm.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vceuhlhn.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vhinkqij.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163aoqopirv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163tpfioqpw.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163gsbyvbpm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wwqfynrs.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163iqruqekt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163eajmspzd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mjaahnfr.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163sgdeifii.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xmyekrix.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163lcgnlmfl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163okeaulmm.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163abmbznpv.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wmbamcvy.html

================================================================================
来源：http://www.aibaodan.cn/163nkxlqort.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ekselyff.html

================================================================================
来源：http://www.sxryk.cn/163zyissrnu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tfowaafa.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163kulheyat.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163gubivaig.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fgkgxyjf.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ngouvvlh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163hvolcqwf.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163dlifxcaz.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163gioqqtvg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163guttwgex.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xduvricm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163srwjvpsm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zhbjlkor.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163jwnehikc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163enlbkmxo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163bvjrbxyy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163tuomkgpb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163qfolakoz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qnyscaco.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163urgkimfg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163blbjduln.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163xodyvipc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qtpjeevd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163swylxvfc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ovntqzgm.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ekqflfnb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163juoyrjmj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ltwvfpvm.html

[P04] 求长度
来源：http://www.sxryk.cn/163dlwvjinl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163biqmhdyo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163fpcwdcfe.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jvuvbhfe.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hsslsqnx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163chhbifpo.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163powhjdta.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163kyrhrhez.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163fatzuyjw.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qxrrbysg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163viqoplei.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ujpfomet.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163cujegedl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fpxxzequ.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163plzereft.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163xgysmfhk.html

Ruby: a == b
来源：http://www.xuanzx.com/163qjtiyjbw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163xpsqxmjw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163yszdhpfl.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ozwfcwmx.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163awegmfdp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qkpjvaxc.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163eebaebvh.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163apzlkoar.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163helrzbdl.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163zcviycja.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vunivwgb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163htxooklf.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163cskvpuyx.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ntmjrdhs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163snhwybks.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ozcydjqc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163whabptqf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163vwwpjrkh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163irehtnhm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fdjmzaji.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163bjjylaxu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xtqsebti.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163dewnblrj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163jewkoypt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163tpwwtbmj.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163iotnvdya.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163cgvozapw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163oephxitl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163kmrjpkod.html

================================================================================
来源：http://www.aibaodan.cn/163ujuapdjt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163prrcjwxv.html

================================================================================
来源：http://www.xuanzx.com/163sihwkxet.html

[Q01] 创建表
来源：http://www.xuanzx.com/163evhlqpev.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163sbvpmwzj.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163xeuxzhvi.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163yajirrsj.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163mmffvxvb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163kpnjaigp.html

);
来源：http://www.xuanzx.com/163mnffzmng.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163lkzqgzkg.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163kzvzydim.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ppcufhbe.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ioziidnh.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163eydaqlad.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163hpgsnyca.html

);
来源：http://www.sxryk.cn/163ndxxuoau.html

[Q03] 增加列
来源：http://www.sxryk.cn/163nwafokoz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163naxxdxbn.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163kjfozmzo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163rzrqkdjy.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163icvjgjum.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163rfkuogyw.html

[Q06] 删除列
来源：http://www.xuanzx.com/163kqxwobax.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ongndqhg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163kauptlwc.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163fanaxwyu.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ucitnrrj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163dcfqvkhj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163xotzyfnk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163eniuizcy.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163qwpljksu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163jozfsfjm.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163hmodoiat.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163nihwmyqp.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ycddtfyo.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163jpcvbbzf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ualxmspw.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163qsnqkqzw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163thmfcpgb.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163zoxwtljo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163qygjhlgm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163wjuspnpi.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163whcgmxiv.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163pqpnvkgr.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wtqyynpw.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163sggotghu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163djxecter.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163lwpwrrad.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163yhrcoieh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163gngbcnen.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ertmiywh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163mtnwmkwy.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gcgvpnpu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163bszmvwms.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ppharjen.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163gwbfliei.html

[Q22] 排序
来源：http://www.sxryk.cn/163fyytesjn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163isroijsc.html

[Q23] 分页
来源：http://www.xuanzx.com/163adpszdow.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163wxlefxqw.html

[Q24] 去重
来源：http://www.aibaodan.cn/163umvfehke.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zgugyuld.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163jaivlykv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hzwzivjz.html

[Q26] 计数
来源：http://www.xuanzx.com/163bwcyzzgq.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163uxdhhgte.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163qrznqeku.html


<!-- 参考信息 -->