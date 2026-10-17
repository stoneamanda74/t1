外链999!wailian999！

Ruby: arr.sort
来源：http://www.sxryk.cn/163smtfveec.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163kghnvwdh.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163eebcppvc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163drmnsxry.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163tgznyfib.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163onejshdp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gnycplyt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163uumsynrz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163bivajfnw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163tzosmvho.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163shdhamar.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163pvoreqhn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163azdbafhp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163uyxzfuyf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163iclshmri.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xukblaql.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ysvwdswg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jkdqisbo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zuksoxqq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163tdonopez.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163gwlzppkv.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163phwmvbca.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163lrbsxkpc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163svojerty.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163glvzqfqv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163necfikfi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163latemxrv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163jpjeqtsc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163aslfixpp.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vpgvpncc.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163favwjgje.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bwxktjzf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cgcojiua.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vhkjhqzb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163vdptbhfm.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163dxazaxin.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mekmlwdi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163aofvfrol.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163fvddbnlz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wnhlpdwe.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nqzdlagt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rygnylsv.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163fvvucrxw.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163dzsghwdn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163ubjggblz.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ngcdlyhv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163lyothgml.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kzppdurg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163xqkuxrqh.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163yjghnzho.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xlpuzcgx.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xkachazb.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163pegjprnq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163noojfjix.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xqitqjdn.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163dbgoybfc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ykeukdfb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163yjzozvca.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163dgdzuwwv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163fnzyymcu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tctcsfwu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163utgwkipw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qjlegrad.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lrkqzrmt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163nuzupbhm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163jypobhvt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163dypasarq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163yxvobdym.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ntsgxcxf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qioxmgna.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163syjlnegb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ywmnbzob.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ahiqsgav.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163glybxvqj.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163plxlzlbe.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163teaxsojb.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163qupkdtab.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ewprroen.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gydmineg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163slczwcpa.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ffvdvote.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163zgahigry.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163auijccbx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gjknyuqg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163tdtdmgll.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163kvpgydwu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vrixvlof.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163uamhuhpy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xdzmrcwi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hvlktqob.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163vjzvxdhr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163supoftmh.html

================================================================================
来源：http://www.xuanzx.com/163lphbcpkc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163wnvzuwjq.html

================================================================================
来源：http://www.aibaodan.cn/163fovguese.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163blowuyrp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163cbheaxuf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163vtrlkglv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163thbgpygw.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zdijbxni.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163toyulxyy.html

Go:   go f()
来源：http://www.sxryk.cn/163cgtrwffh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ylhofjpl.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163xzlkcfuy.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163skzqwsmn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163dptnuukg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163mrbkdofe.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163idljjpwm.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163elilqlom.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163telwaofg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zjhahuce.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163bvtzqfuh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163rvnmmswp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163zrckpyxf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163awgbvkgd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163emixkobt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rufadlcq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nnhcltkq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163sgmvfzug.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163nnpxdeah.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163haooycct.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163nlmaogpb.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163vuwkrrot.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163tmniickj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jdwmtbsf.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jthkcvbi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163dftnchkr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163enursitf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ssixcyjn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163wgmeqkjg.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163qmrebefp.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163nzmbpiyp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163rijqchgi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rdayvzua.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163afuiddja.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ikfodjhf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163sdodbxfb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ubfywwqe.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gsdirdjx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163hxflzbnr.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ldvvoqzl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zneepiiy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163aoibvmjj.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163oyaybdky.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163hejligaq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163prsobipd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163azrbvtvb.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163mpeojurq.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163hgehzcra.html

================================================================================
来源：http://www.xuanzx.com/163oyqncfsf.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wdyqwlmj.html

================================================================================
来源：http://www.xuanzx.com/163ixstjljr.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rvencsyh.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163dlryztqm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163zjngwilj.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163iqttthea.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yvyyjcgk.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xqrxgsvb.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163kiuaaqcu.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163tijchxis.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163zbdqmvjw.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163rakduwor.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163pjvpouyp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163nzteilwq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163roaaqoay.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163epwsvvel.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163gdgvushv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ilhlzgug.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hslvxzgc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163deaqtccf.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163akkoayjr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163owylrtuc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163fqsttqjd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163uzwqheyn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ipbcuygj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nffldlio.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163otlgtzqn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163fjjtecuy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163mulcubhj.html

[P04] 求长度
来源：http://www.xuanzx.com/163czunxngw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163pymkuqht.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wcdwvbti.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rjcvucdx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ivkcdtyn.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163avsxvlhd.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163waakdpbs.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xhkseztk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163yvblebzk.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ezpnhjiu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xzxpxdmw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163bipddfsc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163wobqldce.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nmxtubnq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163xgpisvme.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163jyvxpnow.html

Ruby: a == b
来源：http://www.xuanzx.com/163khrebaht.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163nnlvsnib.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163hxjzzvzd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163jwpvjdfi.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163totdzmjr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163splvfiwj.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ovneuwwa.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163rzahoyty.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163nktulrfj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163woayoqqz.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163vomrosds.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163pfytfrka.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ehzbmnxi.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xgofznen.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163czeufpkp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ldfaeolb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163kuoeuqlv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163pzyyvbjo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163vespehxf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163hhwsdwtu.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163tucvzntp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163qlvfffkc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163jexenece.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ltiwluba.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163cymyngbh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163awhwjpcx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163diaohkuz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163btueqwsg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163yldijldu.html

================================================================================
来源：http://www.sxryk.cn/163heaygxwl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163zbayqwyj.html

================================================================================
来源：http://www.xuanzx.com/163ntvqjpyg.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163wocyjkwc.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163eximdlrk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163hneadkzr.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163hmgdqwlt.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wylrvtdh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163dpffjqqb.html

);
来源：http://www.aibaodan.cn/163wcpogwvv.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163wbbdykkv.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jwxoohyx.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wfqxlxsh.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163faahcapi.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163adxtppwb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163nfrtyfnw.html

);
来源：http://www.aibaodan.cn/163wkfmckea.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hgcnqqbj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ahoduyij.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163wtgdpzmy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163fcgvxqay.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163irngtjcd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163xbnetqji.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ratsqxqn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163sjmxwhfo.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xrciyblg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163houlbbio.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163dclsqgcb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ugluhoil.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ophthpbp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qitnowkp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163woxcjval.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163vhoezaxc.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163tqxhydyk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163fulqwurt.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163zvvwdrle.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163nafpbmhi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dftfxpas.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ludndozu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qooyxpfj.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163dvizfyte.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163mmpeednn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ninccklr.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163qrqjcevp.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ktkleazk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163gtaqxsdq.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163feuallvt.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ntwxhfcy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163zdirzkba.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163qtdlgmzw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163iyptyuuq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163jffzcchn.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163dodwirva.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163jgtsxlhv.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163upfqvhnt.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163jioockut.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163eejymbjz.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hxabxlmd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hqjfgluj.html

[Q23] 分页
来源：http://www.sxryk.cn/163xbvnlzsa.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163yuijfyzt.html

[Q24] 去重
来源：http://www.xuanzx.com/163isbpipit.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163mwgtccsw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163wpnkowxc.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163twkcqynd.html

[Q26] 计数
来源：http://www.aibaodan.cn/163gcunpwhq.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ezjkaerf.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163yfmorlsd.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ygeuwjnu.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163vryzkytu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ahjbmjnc.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163szcuowlo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ahscvavv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163judscwhu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163egnzitgt.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163gvopyiew.html


<!-- 参考信息 -->