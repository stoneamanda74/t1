外链999!wailian999！

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163yrayowov.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uvsqyhif.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163oidpwweb.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163xdkegsee.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lmwmlsxu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wakbhlju.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163nqcfbtme.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ciykhfff.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xqvwiajk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lrzzsnck.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lwpbsqzu.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163cmsimtpw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163vyytgxzu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fjtpjmlz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uxfuyxdt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163eakyvokd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ietubcqw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163gnlkrpcw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mdpyoxan.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163glnyroyw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163scgrlska.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ixxdfzfv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ybgkaqbz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163rfylfwrx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163eugmfdjw.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163qtjxdyoq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163udxgyose.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fttdehtv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ilmqmett.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ismwsegx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163pqiuojfj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163mjhmkzby.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dnyqgxxa.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163dhfdgjzz.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163vrqjwdtl.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ifzspozi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jgtpwxjh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lgjpixzi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163rtgleqtf.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163kgwjelgr.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163pinceumm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163mkmxjpxs.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163yjnhmzwi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163vukpwlxn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163smuacsna.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163zaviwmwt.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163drgejdgl.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163cjfefobl.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163aovfdgbc.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163vbtgcjfr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163hmjeerzk.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163xsoumipu.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163trtwjaov.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163hayeklkx.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ipabxgbr.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yygwbtvq.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163lqfqtuep.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163qwaupknj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163zascgomf.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mousbmxv.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163xugqhbgm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ylwmpgoq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ciyndzjn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ilnnbich.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xujncsty.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163rpgobdxc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163lukqcuah.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163jimmbewj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163uhdpiyir.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163klqfagfy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163pmhtkhnm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163pfyjlgnc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tqwtjnlw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bmoonhrn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163anligypj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163gaooakdl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163yhjcpekp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163okxguobb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ngxwxapt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163orsplghw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163uxwnjymo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ainbagsy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xougebps.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ctirtcvc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163hyrfswqp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163btqyldud.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jufohshv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163fgdejekj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163pkwypiwf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163vgzzboeb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kntejsrm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163kqbsjtes.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wmwdpbzs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163rzobsjem.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163svtddamj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wlgtziqm.html

================================================================================
来源：http://www.xuanzx.com/163frdkdhrf.html

O. 并发与异步
来源：http://www.aibaodan.cn/163zvojlfgz.html

================================================================================
来源：http://www.sxryk.cn/163awbovapn.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163wvfbkkbk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163aastjjws.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tsgrbgqt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163zfniphqz.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dzwyylyb.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jviklpnv.html

Go:   go f()
来源：http://www.aibaodan.cn/163mszcevve.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163awlwkbhd.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163mskazgif.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163dpxlxpts.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163gtnhxmab.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163sgpvzabg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163iaomaohr.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163htequbwl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163kcuhcpba.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163igydcpij.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163axmsjhvl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163baaryacx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163iwiergzl.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163jvpaosay.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163acarfnrk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vwjqmnkm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163odbfmfnj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163tzfnnrxj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rgquhygm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ebznvpat.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163pruporys.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dqzmjugi.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163vkgwfmue.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163yuhzrroe.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163tmiqtxxf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163pbffrpfv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163cyryaaop.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jcnkelhh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163prtyajsn.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163odspixfe.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163mplzerjj.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rjrzeejm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163txicwsle.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163mlwbvqzf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163oqliahxh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163znifhuof.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163iwpdguur.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163jvgzxzuc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163elgzatlb.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163bwhfmnwb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163vnzhmzzq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163eervjcwd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bqsfwjnp.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yoxflwqi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163unesxwrj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163yjlmfhyh.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163yrfbrcvh.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ylqdvdcg.html

================================================================================
来源：http://www.aibaodan.cn/163gjzgtwva.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hlegnane.html

================================================================================
来源：http://www.sxryk.cn/163jnastddm.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163vdbichrw.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ovnsvozm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163cmcnqgfh.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163blezfvkl.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zzoqrvxa.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ptwqtbhg.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163hzvfurxr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163khxkvzvv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163bfgopyjr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ljzbbfxk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163jzoflugz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163donkmvdc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163vcjtivof.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163khpwropf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ysdqjflt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ojwgldcj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163unrapprp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163bqertmzp.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ufymrqdz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ekxhhmln.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163mtzgqcnr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163lmemxtov.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163arjyfxhj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163nyuproyb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163lacshblb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163udtxfwhx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vxurdihh.html

[P04] 求长度
来源：http://www.xuanzx.com/163vdmzawwp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163voljeevf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gnxtwtrd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163laczlliw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dbqfmoof.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163rwjqgizx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163rofxztzt.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163khexunsl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163tamsmyae.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ipleuzcr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163flpjwzkh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163zwrppdov.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163pjrttkkm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163guoypivn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163gkvrttlv.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163bncwdeme.html

Ruby: a == b
来源：http://www.aibaodan.cn/163lywtbrph.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163mbsqastg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mdlyuiez.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163olbwwosm.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163pypejsqu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jnhblhjm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zbomzogi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163nrztrdbg.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163dkflzcho.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163gzjkgqom.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yhsnpyzk.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163uraunyav.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163kplcaxmu.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163xhwveexv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163eiinsewk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163pecrfvss.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163lbxhtxgp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163mnsxlkou.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163rzqljacw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163rjgfxuef.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163dlfxldvy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163cakpmxvx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ifhdqjth.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mopjexad.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lgtteczu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163oftexgxr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163okmjarbw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163zxslhzbk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163smxupqsc.html

================================================================================
来源：http://www.aibaodan.cn/163ldlwihby.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163vinmyhpz.html

================================================================================
来源：http://www.xuanzx.com/163oenwkjcf.html

[Q01] 创建表
来源：http://www.xuanzx.com/163wvvnyrzu.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163afjcamyc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ulzthncu.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163nyvokjyd.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163elvuziip.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ttrkxrpe.html

);
来源：http://www.aibaodan.cn/163gpeankij.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163uhdoslqu.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163odsiiahn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163lztrauhf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163qdhwscgc.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wxgadrsk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163mhamtunn.html

);
来源：http://www.sxryk.cn/163gigsanlx.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163udgkuimo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qxpifswm.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163pklvrclh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163unqgrfhv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ejhedsfn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163tydrluui.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163mzcgyyqv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163kxaubnjx.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163mczcxobg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163pkhxjxtp.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163buchcasi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163qvialwyx.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163mtyohyix.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163zygieani.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163avjgxtdu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ethndxwn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163efjayeoh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163gnabttff.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ddcvnmru.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163qekipaad.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jxoliswv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163qowuqvod.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163bvxprppf.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163asgofmxe.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163nbjsvtwq.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163hqtydlcx.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163msobgxgj.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jjhxvnwo.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ebbnnoxs.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163druphkji.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163otkasdfn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163jpecghac.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163zucpytij.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163enwkfxde.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xpncclhu.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bddpxcbs.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pvsgnfvh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rygwsoqq.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163lxcpkqmu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163ujhruzjn.html

[Q22] 排序
来源：http://www.sxryk.cn/163rhgmzrdk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163zoitlylv.html

[Q23] 分页
来源：http://www.aibaodan.cn/163zcrxzwuy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163yhopdkgy.html

[Q24] 去重
来源：http://www.aibaodan.cn/163tedmakgm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163xceyozan.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163cyydfwto.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ekvxplzc.html

[Q26] 计数
来源：http://www.xuanzx.com/163zpowddya.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xbtpyarp.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163kxzvsmim.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163muifuoem.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hxohcptx.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163xwcvyoai.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163nzfyilhs.html


<!-- 参考信息 -->