外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ehkritun.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jphahrev.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163whehcnwn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163kwniedij.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tbmmjwih.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cnngitwp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wwfhkwzi.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163tramidgt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fglwelxh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tsxieqly.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ftdhbwqw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163iwipqymb.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163pixmjtlt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jemlxitj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ujltssph.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163hxqiugxb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163atoltfan.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ytcbytzt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163nncgqkax.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163abmepezs.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lvwyqjfc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163uldioapc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ognzevii.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kusmghah.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163cqpkotac.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163qttmerdq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fargfqkw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nlwsrrxm.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ehmbvnbc.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163dkursgzs.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163agjjdiai.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cdpwdhek.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163issrpbei.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163bozoweku.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163jenhpnaa.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163izmxbmqw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163gmpcxeoy.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zztkrmxn.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163scezvnno.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163clrfvunk.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wgsedcbe.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mtyjlfjh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xgsmvbri.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163oukrenak.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163zvwefwgc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ybhdledb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cwsfidix.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163injnfvqw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163nnekldup.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163pxakhizx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163yoexzvqa.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ansdtdbi.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163wbutcccr.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163vxrotouk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163dbcmxlby.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163jpdjlpmc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rvaoddse.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163gzgdtage.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kckyjgyp.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ekhheews.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xixbntlp.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163apklzree.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163muupaenl.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zxlkwojk.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163xquvqovt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dynkogtr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hxjsncmc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163upizzgzb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163viizjptv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jpfcihmf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163kjvmjqxf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163zfyxzlwr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163jeafvsbp.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163gimbianv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163cnysencx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ewbqookx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163emjghvpy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163yldiwtqh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zxadviov.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ebjovzth.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163xyknfqnr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163emmlkuos.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163alewkgfm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qsnwhfrq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tiefhtff.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yyihwnix.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nyvqqmns.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ypxdzeym.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xjmqmflk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ogsxeyad.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163obynnpzh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163rquybrlm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163eysaknlh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163gaooqkxy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163atdowydz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163enwcyeaf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cueclskh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163rtykacxm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163tbvvzvzy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dvfnvyzd.html

================================================================================
来源：http://www.sxryk.cn/163frhcuyou.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ifijwhxn.html

================================================================================
来源：http://www.xuanzx.com/163zbxewwej.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163cxuqquis.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163bgglhtea.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163xgvihatg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rtgccqqi.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ebwwmewv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163mnlbdxir.html

Go:   go f()
来源：http://www.sxryk.cn/163lessjrtj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vjpikneg.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163oyjztydd.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163viuxrixy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163byiltdxc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163cdegreza.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kcrlsxop.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163owfcbfwm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163glrfzmos.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163lpndenep.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163pfnvktcr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163fgokdioa.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hbeipfav.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163dfltdrwr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163hnhljvim.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163drsrfqzc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zbgbuiri.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163gqrddakd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163krdweccm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163mrviwcxd.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163oragybke.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zxvgiods.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ypqwmluf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qwunfuvq.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163rwuhqrcv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163yddmgqdo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ploznxiy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ieciepzf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163igtrwsyi.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ubwcwydu.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zvzhfhok.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163shdczxta.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163irobgjgf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vdfanelv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xjcadjfh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jmyucwmm.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mduuxvwa.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ibxodikv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163krbpquil.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ebnbhdxz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163efhewqdx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163mvjkuesk.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ejyvcntr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163uuvydzww.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ztlzkcsi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163jzfxmnng.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163jpgrlnpx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163afsiaqlk.html

================================================================================
来源：http://www.xuanzx.com/163epicdbmp.html

P. 常用工具函数
来源：http://www.xuanzx.com/163mfxbwlqj.html

================================================================================
来源：http://www.xuanzx.com/163xnsbzhrs.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163dklwjibb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163tcvqclan.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163vungwjzb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zohzzubo.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fuxiijgt.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163fxprxxaw.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163felrfexz.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163vqzapoqy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163savazsde.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163eogvpnxd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163zoavxwgb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163jswhiwvx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163rcewmbjh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163lcokglcf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zhtqyhyc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fbpsylfr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lytfklpv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ybixmxeq.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163msiagqgs.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163yatqhnrd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163himfmxxa.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163lhinosbb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163adsidwgd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163xfyhrwto.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163yzijxhod.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163dfzciitf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ercnlnsu.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ihdwacst.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163uhgywwvp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zxwjeiav.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163akdsoyea.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dtrcpyyw.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163oynskdhg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163bamgewja.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ycfbwnxj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163hmcrnuyu.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163wedanqdh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163lpkytlvi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163urpdzdeg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163rvkhhuuf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xwiprpei.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163rjqspsnb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163zwfcydwr.html

Ruby: a == b
来源：http://www.aibaodan.cn/163qntkxoio.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163sxepuopu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163vmcdqajr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163sqbxagxn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wttwqphq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kelymhsg.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ideopnfu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gmbizfhh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163osdlwork.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163lnjwvvra.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163okpsadvf.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ngmhhzge.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jvtcxjth.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163kfgebhjg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sehlwlyh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163smewutll.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163stelmuti.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163vbwoxwbg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163izsvjkhw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163hnsbobjv.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163tcgaozmd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lpjfoktr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ioadhlyk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163jtxbiiph.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gactbvpy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163mqjavboq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163qynqdztz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163obnaqavg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163kayihtsq.html

================================================================================
来源：http://www.aibaodan.cn/163bvyldwox.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163myqxblnp.html

================================================================================
来源：http://www.aibaodan.cn/163qmdyzsqr.html

[Q01] 创建表
来源：http://www.sxryk.cn/163xvwvwosj.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163pccreypm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lqrgkvoc.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ubfyvcgb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163wnsvmdtm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163lvhjrodb.html

);
来源：http://www.xuanzx.com/163ckyvvxuw.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vdbknbyg.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163cxvbnrqc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163spusljfz.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ssznetgp.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163gcxwosmb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ngzlvcbg.html

);
来源：http://www.sxryk.cn/163wcqblwiq.html

[Q03] 增加列
来源：http://www.xuanzx.com/163gilqurrq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163lzztrhmv.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163klxhtdtn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163nhvdeetv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163oedcihhn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hhvojxex.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fkspceia.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163knnqwats.html

[Q07] 删除表
来源：http://www.xuanzx.com/163kweaxpda.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163sjayxzmh.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163zvtdbtut.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163khixecnh.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163ubldsktq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163kvusxppd.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163rbbtohsp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163reeugekq.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163dxaypfoh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pkqwrtcd.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ongdbbvi.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163oehfkzws.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163uzlzumih.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hhjmdyxy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163koehbnsy.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ozhoslcj.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163kodlpksd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163qqjsrtht.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ljghebpx.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163zmvqaknl.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163wjkzsqza.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163wqmjfkma.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163qbeikwcs.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163twxkyqmh.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163vljjbzrr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163bavjgopj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ompufskr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163olrxfuaj.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163gwzmssdz.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163drslfosh.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163eitpsgbq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163thgogwal.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hrfvtnpj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163xwbgabnd.html

[Q23] 分页
来源：http://www.aibaodan.cn/163cvptfyla.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163bowvjrae.html

[Q24] 去重
来源：http://www.sxryk.cn/163mtgzjhif.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163nppmoiim.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163nendebmt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163sxrazclq.html

[Q26] 计数
来源：http://www.xuanzx.com/163qaflyacx.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163smncpvxr.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kfowdqov.html


<!-- 参考信息 -->