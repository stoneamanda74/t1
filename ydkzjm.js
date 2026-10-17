外链999!wailian999！

Py:   resp.json()
来源：http://www.aibaodan.cn/163jmrryosu.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hamtdsba.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xerdynhs.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xjvrsrhh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ixnlmxaq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163sbgesgoj.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163uundqibp.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163yjiigbov.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bqdpmzig.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163olfrvkwm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163qqcxbbta.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163evozkkfc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kcrarelo.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yrmowsgc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zwgubddh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jmhpxizq.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163muwwdhro.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jgkvppsi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163zneifweq.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ivykrbwh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163jyzdfhkc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163uzlzwqcr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163iynmhwya.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163pqwxssmg.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163tktjulqq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163uvqyauro.html

================================================================================
来源：http://www.aibaodan.cn/163qznsjqqb.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ltxttlhk.html

================================================================================
来源：http://www.xuanzx.com/163vramenae.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163aekduutf.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163gytjcwjp.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163turwnmtl.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qzpqjftj.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kuaeduwm.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163pzgfiwen.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163unlpxkft.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ezmhkadw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163icylvfch.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wrpwfdih.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mbavaqcu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163dsmashtq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163yyvwihzm.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163tsrvrsls.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qnylocdv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vyzhnsiw.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163szpsipqn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163bdgxwzzb.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bsgzcrrl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163amoaaasv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163hwplnawx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xticvezs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163cjzxanyi.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163abdvbcko.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163eqjnnyjy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163abkuqala.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163lonswmfa.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vmsxlnua.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163sygipzpn.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163txdukdbl.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163khbiqafs.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163lfxynhro.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163jvkmpkir.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163skqhngfg.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ixdbovni.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163iyvgubnv.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xusmgnvd.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163arzxjfhq.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163eaeaazlc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ggwmisnx.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163wsmjibde.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163crsqugdt.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163unwxxqjr.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163orqhimey.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163qhgaales.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163umglicnh.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nzustzgd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mjuqdxaj.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ivktlwhn.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zbgmfovc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ybmuuhkn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163nafgidfm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qgnfjbzx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163qzqgtycb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wahkyjgc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163fcpnnxwr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rovqngfx.html

JS:   require.main === module
来源：http://www.sxryk.cn/163pdcslqel.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rjlwkuen.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163hqxwvkcs.html

Go:   func main()
来源：http://www.aibaodan.cn/163rtwwjdmu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163nkmsobmh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163sutusyng.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163sliiszxm.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wiywxnwe.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163dyanqzqm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163opjhbrna.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163awwyyrmm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tystpkbd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ayxgqsnu.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163bcwbknzn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163purgdjjp.html

================================================================================
来源：http://www.aibaodan.cn/163xekyrhpk.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163afajtbqt.html

================================================================================
来源：http://www.aibaodan.cn/163ogciikli.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zsiehuww.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qdccpjah.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163wmdvnuqn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xelljuxh.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163rhofjtdc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163xnebfuem.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163uixkhvke.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163phjifclh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163egakqruu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163yxkuyxxp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rrxqdxyy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163skhokaoc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xcxddwxt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rduuxtze.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163gitbjlcu.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ymnukuju.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hjirouqv.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163rsnapnvs.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wvhmpnvd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163tosrhnwz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jrepbawi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163iaevlfzc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ufahfatp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163qjtolfxx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163hjjtethh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wwnkbnbd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163yyvngrnc.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163duxgysoz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mfpdgjez.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163iauxmpsk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hiajvsoo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163roucgqdr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163fmwdsyvp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163nhqvdlus.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163usxrmwht.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163womlcprl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163arompcek.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jsbprzoi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163riaaipby.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163wruwgqjd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kiuurjqi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163pfvuprvv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163hmmirsxh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ufjbcjrg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163xvknfkoa.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163pqosopxb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163iftsahgo.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163jvudrkbg.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163eybnubqx.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gprzwrlc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163oqivsbgh.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ikarzkjd.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ftrpxqgm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xagngbzi.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cpwlnjtp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163cxuarnqs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163oonvzomr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163etokjmda.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163pyiedpdz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163juawnauy.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qtrrohop.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163zgokhfqv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kntjeoif.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163uhgyflnv.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163qcbgpjyt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163yjyzziwt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163swpuxmpp.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hrfqrsnc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163eqwpuqcs.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wwsjtwxu.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163btedxxzl.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163avpsnwsj.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vitdzkms.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163keoejbmq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bxukmkyv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163mbigbmnu.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qlozjbof.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jkgyothl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163dfkbbryr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163vqlejqkv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qinfrqfa.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163sfnzkjab.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hwebboib.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163lzsfrzbf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163pixnlhgc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163xqjvbmty.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163sbkoapiz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ztizgqqr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163aqamvoce.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163jdjgmdrk.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163mmlifwxo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lotcttre.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163bwganuof.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xbvbxxnu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ncjosplv.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163dhvbdokx.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163oyjfrlbw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163gtspemul.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163iekdazow.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163uytteeqb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lsgethyf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qtkqdhok.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kwxgzjle.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yezfjgfq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zrlqmgvb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ujpeauxp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163yvtuoflv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vtbctiyh.html

================================================================================
来源：http://www.xuanzx.com/163hllzxzsu.html

O. 并发与异步
来源：http://www.aibaodan.cn/163kpdhurfd.html

================================================================================
来源：http://www.xuanzx.com/163umvedjot.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163zpzhmqwg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163oeiatbkg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ucaxkmmf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163gdlvmeyc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hketshcr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163lrktfazw.html

Go:   go f()
来源：http://www.xuanzx.com/163kldptwja.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163pdsxcvvm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163pkvvpffc.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163uzjokyjf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ccbtittg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dakghdjr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163inuztjvu.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zcnvbgro.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163lerxnawd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163eutwdvio.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163lavxdhew.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163umgnxbal.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163lnxyfair.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163zovhnzua.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163vpetglno.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163miswamyk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kjgzjbmg.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163livqercu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163rbbwlmzq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163yjkkpgay.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163jhixedww.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mxndbhyd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163lfmpinvl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163yttswivg.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163upsadcsx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163eysmfecv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163qazsfxps.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163cjvtbmkl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ypuptxen.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163yydrzmsf.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163azgrvisa.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163yqrabtkb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163pozzizyl.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kkwbjwzs.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xwzzehhq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163zwbgzrkr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163quxcfdvl.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163alastypa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163mpvsedpk.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163txehccif.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163lzyjobvs.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163crmtazds.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163fxwlphmu.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rvhhsfyy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163xijfsoaw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163seiznucs.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163yzhwjimx.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163sczhwdbm.html

================================================================================
来源：http://www.xuanzx.com/163eznlsxpt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hjhvjqrs.html

================================================================================
来源：http://www.sxryk.cn/163fzlwdyxs.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163piqtfviu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163uzjbhual.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ysqrycit.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163eonosecr.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163spsvahug.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163xabsqndb.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163jqbhncvl.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163fvtjjube.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163nsvrqvlj.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163euebyhmx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163afoybinp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kafhwmkd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ninwqwmo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163tbuqkcuv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163yuuilkpu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163vxsehgfg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hgttqyks.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163neadnmcu.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163ajnnpujd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163htuzovih.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vzchytjd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qpvugeje.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163coixnfmj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163hxbuwtce.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163lsgqogjx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163lpvtnxaj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163xwgzjduy.html

[P04] 求长度
来源：http://www.xuanzx.com/163vsmdvthz.html


<!-- 参考信息 -->