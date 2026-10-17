外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163dpfgjssy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163wxygfvhd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163skbourym.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nwscadfn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xowsvchk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xmdvjhrx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163iowbzvbk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163worlzssp.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ahhsxbnj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163igjymdfx.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163gmdieyal.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xnfkcxgo.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163liyefgzi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hyzvduzj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pkfhhvsl.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rdgejrch.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163oaikzeta.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163snhbfkxv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163qfpxdgou.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163rifhiqpf.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kqvppmat.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163tltzlnew.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qdbvtusi.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pwqpptik.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163soiurtnj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xrmkkzpv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yqqryjyw.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163btnwuyhz.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163iymaxdcy.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163yxekeomi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163htocgjyi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jbteikig.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wlhwcukj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163rxlxegex.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163mmjwquty.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163owuepxln.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163dtetnhdy.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163edhxmudq.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163wmjnetag.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163kcnwxylr.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zrtfhefc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163oruvkqln.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163qexhuyvv.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ajjwhkiq.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163nwktafro.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gsunmuqi.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163mekwswzb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163aneuzxyb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163fpixphnm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163qfesrucw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163vibuzefr.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163dyswbyci.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163oskvywdt.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163bahyjyxd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ysgmnass.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163gbolbdtr.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yqphnnpu.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163wnkynxng.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tdjkzbdn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qctusyzi.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163yalrgotu.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163syekpxnh.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163eizwpkod.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163fuglnwds.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163kniszpcm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163bwzptqol.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163rqlwpftl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vtceduyk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163cuhsnnkk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163wiipfzyu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mhrxrvkp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163gfjqkqiu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163tyjzqqtl.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ulsscfiu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mbhemuei.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163oyptjqtl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163vybdlesv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163mygsfdnk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vfzlizdc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163pmfaznqc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jgppgyve.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163plsqebgc.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163wlmwbkif.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ievryvkz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vcuthehf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163emdafmki.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kybqisym.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163auxjiapt.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163kjotjwll.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dsbaagwi.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xmuiyeum.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mfjmiasl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163kurulmot.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163caiewqxh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ecelwdso.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lgyiuxcs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163awyjvglk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163epmlbjfu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163eqfsnslt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vuvpngkk.html

================================================================================
来源：http://www.sxryk.cn/163ouegbwad.html

O. 并发与异步
来源：http://www.sxryk.cn/163zspmwdkz.html

================================================================================
来源：http://www.xuanzx.com/163bsoeqkyz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ostyyrzm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163riigzkqu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163fpalmtrd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jnivepyh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cwhxcloy.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163bzgloaob.html

Go:   go f()
来源：http://www.xuanzx.com/163ukrynktv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163uqbtbirr.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cvzqdzzw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163vtxojcgy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qbwdevpk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163nvgqapuw.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163doybjond.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rcafdtvp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vhhxmpif.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163pagmuegb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ehkrovfv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163daechcly.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163kburaqmd.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dskawkjx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163jfrmxkbc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163fdcregeo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ubfhkesv.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163mwbwriep.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163hldwcikj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dtgrznnm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163jnxilqth.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163fecjwtzd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163inziuqzx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163tbmsczrv.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163bezzsfkt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163qlstcjsh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ucgaccjx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163hofevrwi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qjposdlp.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163dthrnylo.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163nvaodjhf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163oxxkyjyy.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rlaytcki.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163zwgeiugu.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xrqfufcm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163mwcbpfev.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163nsrqssxj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163yfetukux.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yrexwuvp.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163knqjepud.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qszxtdio.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163koywkosn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rrcdlrkl.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mqwecfvs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163yesmgfgz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163paztomqw.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163wswelhmq.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ndoeldly.html

================================================================================
来源：http://www.aibaodan.cn/163djgmcrtj.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163dnajqiyl.html

================================================================================
来源：http://www.xuanzx.com/163fctocftu.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qyevrvtg.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163elmouhtd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163dkzvyarg.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jfpdqulk.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163azohwdgi.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163iradraml.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163pbgdvuch.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163svsfhdhx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jbwndowl.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ejfrzrqs.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163suhdigno.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163pljfxlvl.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163nixselew.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163rgwtbili.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163micaasra.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163vydhsddk.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163esiruyzh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163vcngxdty.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163zwukpnks.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zfddtynz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ezscnirv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ttfihniy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163leehwaej.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163pqjfajtv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163lfmklmeg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163xtiojhxv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163uuhpfjgv.html

[P04] 求长度
来源：http://www.xuanzx.com/163qctqpmff.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163sjrptsen.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ivbppwoo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wlmookbx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gssaygvp.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163fwdkirzf.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163aotrlgpu.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163qqeabgam.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lhenmpte.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ajkzuwoo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163qferfksz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163mguvtslf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163bqchgxph.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163usnjnzgi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163sevjxxag.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163sijlcsjc.html

Ruby: a == b
来源：http://www.sxryk.cn/163eblgbekd.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bakikwxu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163uvfxgmcj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ketsaspp.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163bxwplbpw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163cduqkcsy.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163tgofvhfx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163rmewdtme.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163rospkwuj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163giccnndr.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zwkfeuln.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163xwbjanax.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163yapjuhwn.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163aoeksjew.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tjhwqfeb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nmfwoapw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rmrliydq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163ovittoxc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163spauybkx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dwpxbcba.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163kvurgpdo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163wtcljnzd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163mkveybsc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163qmqbklpc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ejfpmnwh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xlzslgkj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dsmhavxe.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vjghsnxl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163wgsyhziz.html

================================================================================
来源：http://www.xuanzx.com/163fyhkdmkj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163yicernzy.html

================================================================================
来源：http://www.aibaodan.cn/163giozsaol.html

[Q01] 创建表
来源：http://www.xuanzx.com/163fpfwdfrt.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jkvahyvu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rtcnjnes.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163omvodxce.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lwsftaty.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163uxwbryww.html

);
来源：http://www.sxryk.cn/163xpfxtygf.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163tzpwzqxg.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163mouhzmzg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vwxmtlrs.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163hturnlee.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jlqumaeg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163dthjbblt.html

);
来源：http://www.aibaodan.cn/163mskudbak.html

[Q03] 增加列
来源：http://www.xuanzx.com/163xkdyzoey.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163xoeuydgx.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qrmgzbyw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163iovxicgs.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163xqgtejda.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163aizpgjpl.html

[Q06] 删除列
来源：http://www.sxryk.cn/163wduyhwah.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163pqbjhcvx.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163seaucxxb.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ltztdvob.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xmkizubr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163rijtiplq.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163xapuacwc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163zhuvfmru.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163cpnqmibz.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163icwncftz.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163rchomipx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163xgivqwvw.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163pftkaiky.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ybzkrjnj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163jcqsofzg.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163aookzhtc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163bgxvabnk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163nlsixiva.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ruonkdrd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163iwymumqf.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163amvcbmjt.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nsxtcmex.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163sbfgfvvx.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163foeisjhr.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163fcgwerln.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163mganulkq.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bhlpalbc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163fgqmuhyf.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ztpredly.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163geworofk.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163bsqkmoby.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163rvqwpmkx.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163lxymnnva.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xsmkhrzf.html

[Q22] 排序
来源：http://www.xuanzx.com/163vkposaib.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163wmumxcpp.html

[Q23] 分页
来源：http://www.xuanzx.com/163sidimqho.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ttgaeeik.html

[Q24] 去重
来源：http://www.sxryk.cn/163rnfueqny.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163hpwjivsf.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163xggqxnso.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163znmukjhh.html

[Q26] 计数
来源：http://www.xuanzx.com/163kxjruhqj.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163suqqgumu.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ojszjwrf.html


<!-- 参考信息 -->