外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qievbxef.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qljdfkkg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fznsxngz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163gzqeqmeu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xogamgkb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kbshkuqq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163snvltcyy.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ygaiozea.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mbtwtgdk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163qsntezqt.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163sqqlvdhw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163yuowxujm.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xqqjwrbn.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163nogqingw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wjzwmqxj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163bzhgzbry.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163midrnucm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163dmksigvf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pebspteu.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163dlroimbf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jycheude.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163yprxbpkh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ifvvunlu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163svottxqb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163zkulbdcc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vwdwxfmg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wqnoujoj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163jixmfizf.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163lojslxch.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163cealgclc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163lqzavrjk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163sryncpnz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163adcczdxo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163uvqdcciu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kgmfgfwy.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hfdgshsq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163bwdnivys.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163tyfyyexv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163idffdoij.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jvakdfqu.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163sskemjvl.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163txpyjqin.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zbbsjjfj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163vtxfqaqj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qwixktui.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ilpewsdi.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163gvyuogai.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jsqgfcwd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163hesgxmjb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163seuhjjoh.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163lcsmofqg.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163dfmqmrrg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vtugtahm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xdtawbam.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163fqbofszt.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163piizwrna.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163vihmcrka.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163oycbuawo.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sbrhutqo.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fxnuqkco.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163jjjrcixu.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163xvrzcjqu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163lrqfsitf.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163cdozmabl.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kmiyrall.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163yqdpodld.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ynuewhft.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fdnkjpqx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163juyqbqcc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163uhyfchqj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163dhuwdqdv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163fgczcgok.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163hlerqgja.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163okabacwz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163utgynokj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163obbmffax.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163tmcqgidw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nwczpsos.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zzemwqry.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ajflyyyi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lsgvdhhm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163lvqjnemo.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163yhlsuszu.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163qrhhcrtw.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xujbianc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163iaatmwzo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gbbexcmz.html

Java: // 手写递归
来源：http://www.sxryk.cn/163inutqpnb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163dqcvnyqs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163fsqmszmd.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zxbwjwfl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163pvdlmrji.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163brzzkbwq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163fcbfmxzn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qrcsxljl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yfjuxacm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mmdewtgv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tjdenran.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163tkypprli.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ouvjbair.html

================================================================================
来源：http://www.xuanzx.com/163cobhcnui.html

O. 并发与异步
来源：http://www.xuanzx.com/163shxtprkq.html

================================================================================
来源：http://www.aibaodan.cn/163musotiux.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rvgqzxao.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163iwepgxmv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163bnahlqda.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163spjpxzxt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wbpotttg.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163dbuqjxie.html

Go:   go f()
来源：http://www.sxryk.cn/163jzqyiglv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163cxddujvu.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qwsnpvpd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163dchjiifc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zqdcxufb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163mquhbjmc.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yleumetf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ejmkwvxw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163myhnjdpd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163vnangifh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163eqtphwxo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jrfkewqg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163txhpkean.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kzofdzhz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163mrytnlbt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ubipeuoc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tkzluwrv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163advudfpj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163pevjdsjs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163bwzucxss.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163rkezutpq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wkedwbjm.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vovdmenn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jhnshiyn.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163kfijwlfz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ccfwpjpc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ikupthwd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163oblcxxly.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jceflgrb.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163iqmtcbqa.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163pzzkyhmx.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163kthtkvhm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163usqiguwz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qbdfrhrt.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163popeujkg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163jtoetuoh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163nvtvkxxy.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vkkhtwjc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163gmmbvmpj.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163zrvmzdao.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ptfezoye.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vwwksmnd.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163osvitwbp.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163oqfyhihr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163xwjrmoau.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163igewaztc.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163jkarnvux.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qbyordhk.html

================================================================================
来源：http://www.xuanzx.com/163jksxizpm.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wquzfuvo.html

================================================================================
来源：http://www.aibaodan.cn/163utnaokde.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163fpsvputt.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163lelwhjqp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163lyluzscp.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163haqhkvef.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hiszrhfg.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163arvtappd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rolhogwn.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163hlybadte.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wsxduany.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xouymrvz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163datouwbj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163fwscxrxx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zpbxbpzg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163fummsfgz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sjalbnwk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163goavajsp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163kfmdzjgm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163izfqantw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163lvpzcciy.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163npfhalhm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163gkrhxcyz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163nawddggq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163grjmdfrq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163kzokbpbj.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ocxazkdp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163otzvfoaj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163eppyrpxh.html

[P04] 求长度
来源：http://www.sxryk.cn/163ialamihh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ervilqxj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qjdqzkkt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163msoinwge.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tpzbgmeo.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163rfthrpjq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163fyveukfh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wmhuwfhp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dgidgpll.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ltcvwexa.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163nlozhlvu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xogutnfi.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163xgwyziue.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163oynowqrd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163dwhfdyvr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163pmakjdpv.html

Ruby: a == b
来源：http://www.sxryk.cn/163zvbwhiyv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ndlkqlgt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mrhjzwdo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163iofavxyt.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vrzsdhax.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163sblqmdsj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163qtvhqtst.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163vvsxotle.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163umanpvhv.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163uvfacqdk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163yjacqoau.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163fehcnfqj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163hyitrmrs.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ivgurjpp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bnbejcap.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qbunjzmq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xnnxvuby.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163kscplxov.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163pzkqmxbe.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163alawflmq.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163gnqinwhm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163eivbaskg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163fbkttfxl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163augebazd.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163yueszssz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163hklattiz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163hkajerdq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ujwwjswu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jnnxfbdd.html

================================================================================
来源：http://www.sxryk.cn/163ygekymhm.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ppvizddw.html

================================================================================
来源：http://www.aibaodan.cn/163niqmbanj.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163fcwlsfzb.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163lcpzcnes.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qluchtyd.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163lnudehra.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wlimmnwp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163buhwmocy.html

);
来源：http://www.xuanzx.com/163stmzbqro.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163yockapss.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163rksxxbnl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163oyaensbq.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163mbqggtrr.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163volkwctq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163iugwfgzd.html

);
来源：http://www.xuanzx.com/163dpgljidv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ifitcatg.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163soacgwgx.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qikpqfhl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163uzdtaqyn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ajnoznnx.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163zjqkeonl.html

[Q06] 删除列
来源：http://www.xuanzx.com/163sqjnkfdx.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163jqsslymb.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163mvutkxwc.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163mlziyduo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163whacqxyn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163wonkbfhz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163gcmnshsn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163mhasstgo.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163smtxjmzv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163jznvwwxg.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163lypplmxn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tpedueea.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ynwrcuhe.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163yarkkpjn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163trzqshri.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163bbmnersc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zpobusov.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163heulciwo.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163hqtswezc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163rhqjisan.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163exkvsiuj.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163qzjcmsju.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163vbrpzwal.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163sfzvubyq.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163voqhkdvt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163kuqfvtrt.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163rimrlttz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163cmkjoqib.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163lejcoabu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163qghdcflj.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163ocakciua.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163zvwjvyyu.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163xawxqwvt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jgohdujl.html

[Q22] 排序
来源：http://www.xuanzx.com/163tnswapux.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163cwcfsxzq.html

[Q23] 分页
来源：http://www.aibaodan.cn/163mdyqtlzv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163fqqncjzd.html

[Q24] 去重
来源：http://www.aibaodan.cn/163oxlqpntx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mwhwhxkz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163teueurqj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hejwsdab.html

[Q26] 计数
来源：http://www.sxryk.cn/163aavpfciw.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163rltjllgw.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163bdhdiyuh.html


<!-- 参考信息 -->