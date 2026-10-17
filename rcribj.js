外链999!wailian999！

Py:   resp.json()
来源：http://www.aibaodan.cn/163zwncnbqn.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lriokozs.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163pznsbcpq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163dofdsrcz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163divomwya.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163djdbqvwr.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163zlvfvplf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163wuqefshc.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163vsgrjihf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163lyxfwlpz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nwxowjdk.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163itqrkrnz.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dkmmczsj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ykmmsoxw.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ozdndove.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163schjnisx.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163llwvwjko.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nurzqxth.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163dupqbhoh.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163tnwqmzwa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163iquownxw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vczihivy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wubdnhif.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163puuhydnw.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163yswzcpol.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ukwqvzty.html

================================================================================
来源：http://www.aibaodan.cn/163atydpnxk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163biajemrm.html

================================================================================
来源：http://www.xuanzx.com/163bxbzlllg.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163zbpgidqg.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163bmvjfllh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mcwdfpjo.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163vbbakaeo.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bgetxcxp.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wmlcqbsr.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163vgvavjzh.html

Ruby: ARGV
来源：http://www.sxryk.cn/163eheoxgzf.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163oetgfkxi.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wxleyvnl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163opdixyhc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163sjhjhxqv.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fyjleoma.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163wgrajrkk.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163npsyihed.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xdetopix.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ldppznup.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cegdvnge.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163efalfcfm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163qnpntada.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ogextqfw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ljawcdwu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aimybarc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163bizvnsaj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bsapauws.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163telfqnjx.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lrhcqqjk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163qhyjwamm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163oazjrnwj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jvuovyuu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xthtzpnk.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163tokugntd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163igstckgi.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163edfhrvca.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163xjmfkfyn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qclshscl.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jznofodn.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ehgamcbd.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163syzgkjul.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163lcsiwevf.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xspubqcl.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163cjfjuwas.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163yhjlxonf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gbuiytvv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163cvjlmtze.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lszugeyw.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zjpmkgke.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163tqifrovh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qrkgjuqf.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163scydfgci.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ermrnwsf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lqbuvsho.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163bkpguojt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163dwsnlrqw.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163azcdncuw.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163unwchhpt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163rslitmmt.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ugzznuuc.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163cxgbtckc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tewkhspr.html

Go:   func main()
来源：http://www.aibaodan.cn/163hzellvty.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163slroazph.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163thbgwxgc.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163vepnricm.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yjmcyjrt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163bpxyoyax.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mifuehfm.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xthngsdj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163batgbexl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163spjoeyjg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163bdaouhub.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163lqwjyhmw.html

================================================================================
来源：http://www.aibaodan.cn/163uahfulxi.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163kakihfhq.html

================================================================================
来源：http://www.xuanzx.com/163cusydgzn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ilwdvdsy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163liznwzge.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163tmpixfou.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qsufogms.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uwwtmqar.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163laapxgop.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163pbnzngkp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163oyvdgfnu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163guqigtop.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163lcbycvtv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zmaokffu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163thdpzorj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163oqfisjdg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wqzfrlgz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163eezjxufx.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163mrvwajye.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rxglvgcw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163htnmpjrf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163erqjlndi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163khukzirt.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163stxnyboy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163kjvcgsaq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kkpmnuxg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163nkcpeesg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163anucqtsc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163wjztmkvm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163cubnherw.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jyxbwhbp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vbodjczp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163kxjsplqk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qrmvgedo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163yjsnvnoy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dpvnvprk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xztdrfoj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163igscslzd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qhtziyyt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163azmsnise.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163zuygtbil.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163axpyfjcl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qyzajdff.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163nthyyaja.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163jglzgcqo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163hrvrtokp.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163lxvgrblp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jucoiupr.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rrpfgjje.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ygglrqev.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163tnhiqhni.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zkyhsckb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jhfwaopb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lgvejual.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pwbucope.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jicbdsid.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kgwzqtmr.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163iruophgg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ibxecxoa.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qhoatjcx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rhokrrsb.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qpebmvkj.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163rvjioplt.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mddwcyry.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tvnzwdxu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163iggryhpg.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163hbbhrahh.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163wsgfvvqb.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vvsvznpb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yyftdvpb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163autxegki.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163bwmpvzro.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wjxafnxb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163wpcyirhy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163mekgscoq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zzvssekb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wwzppasg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163cdwpciod.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dxiepbrc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tdiynarb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163fztruepq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fgoxkgph.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wtydqckm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ktexxqni.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163rackplhj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163cjiaaswu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163gynrkmgw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wsrenici.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163sxddsuon.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163sjjvtdmm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163uifslkap.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163glwaxzts.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163anmlqrie.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163syfqmlti.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163aacnbbbd.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ltkqksho.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mzmwfoyu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163umohdchq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163bboqyczy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163fhflathi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163cxipnljb.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163queelexd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163trvlcjuz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163tycefwri.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kijhrtou.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hcmuznwe.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zyrgnwkk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yyjzsxum.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163jalkvaet.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163hbuscxbd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jpuqzevi.html

================================================================================
来源：http://www.aibaodan.cn/163yatabdrt.html

O. 并发与异步
来源：http://www.xuanzx.com/163kkeozyui.html

================================================================================
来源：http://www.aibaodan.cn/163ratwmlnl.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163fgzhqecp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vsdefoeo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163sxeeqsvg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163wlplbmwe.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163knvtjpri.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163badgktbb.html

Go:   go f()
来源：http://www.aibaodan.cn/163utgsjrho.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163qeblnrdd.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163gagdwnjr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163heyoazcj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163jmurdmjx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163udatbhkv.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163snvhbyqz.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zwjxpdmz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163mtfhpcei.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163qneqobtk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163cvothsdo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163umgkqgjn.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163anshhdla.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163gkygvlli.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163gktimqyw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163bnmnljfr.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wjesogff.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jvjelyid.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163gmahzoyd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163oegljgms.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ovkufjgn.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163yzozjnnm.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163jlmiuyzd.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ouzezjrf.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163pzqwdlms.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163otrpzzgy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163fdjcnotp.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vczbxutu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wmxijsfp.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ryddvucd.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163oetihiiv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mxsnikun.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xjmtioav.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kwffywuf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ycjpgnsm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163fhietbdd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163dfbbzpjt.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ngoumwdg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163oppuhasr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163idqiwwaz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163yahymwzu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163zjcdfebz.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ozkoikrz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163tmrnyzfl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tsmyhlyp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163lridvtep.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163jeuyulwp.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163okwgpqdc.html

================================================================================
来源：http://www.xuanzx.com/163arrqtxbi.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163nloxftmv.html

================================================================================
来源：http://www.xuanzx.com/163adafulci.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163fsnjwzke.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163vovkuujz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163mveoueud.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gsxealmu.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163blmtvmdo.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163xfdcvjws.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ontbmqig.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163tgkwvfbd.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163jbzttqgc.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163whrrsqsj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163tdncwgxc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163nbpiytfs.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ydsexsze.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163lomqiuef.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163pbvldhzc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163vchxtpyq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163pdflnwyk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163dahmqqvr.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163oxtmnsvi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163wptaljrk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163guhmwgrf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dvcfkqsd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gzumduro.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163pdxyzprp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163jcmcppxq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163fiuuooqy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163okqswacv.html

[P04] 求长度
来源：http://www.xuanzx.com/163upnnithr.html


<!-- 参考信息 -->