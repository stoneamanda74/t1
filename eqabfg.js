外链999!wailian999！

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ydtrqxmg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163jagupfhe.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163lrtlqgxp.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163yqxsfuyy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ygmnixig.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hqfhmlqd.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nkfyptza.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163jbuafdiy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jshgiqbf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163cmqbvudk.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163agoatzlc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nbhhmqfl.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163fmmfaybb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163nlivhvht.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163vghaueje.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163gmgugjqc.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mnstpdjj.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163mmdyxavc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163mavuhgps.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163xtmhnctu.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163vsxjyokr.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163stlhngyj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163jbbyjcxx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163gfywutkx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bxxkfklc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qsdmjlhz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163rjteszar.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ukaophpv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163yugihnxr.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163hupvumaw.html

================================================================================
来源：http://www.aibaodan.cn/163lzkeggfc.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163btkfjgfo.html

================================================================================
来源：http://www.xuanzx.com/163rvmnjhwx.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163wrhunzri.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163klouhkcl.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jsfclxac.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163klocsrbo.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163appmcuhv.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163wdnnwgbh.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163pwdujbld.html

Ruby: ARGV
来源：http://www.xuanzx.com/163pffmkoyi.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163zgrbutnr.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zfnfhzaw.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pvljpysc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163nsdjnzqp.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163fjidlycu.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163rujdxewz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163grbxtetb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ayttgwea.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163yovfvazu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163xhngkrin.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163spfxvhdx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163kdamqqww.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163clapionj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163tjmaepxc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jdokhove.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nvjpmbxi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163usnynoxl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163gkfbyuzj.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163qldqyxul.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163otomolot.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tgskjlog.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163yxijgbox.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rkevtpeu.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163lrdqpzoc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163hyzznewb.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163dsuanxit.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zxsjfujp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163dhhlclqh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zcmbpkez.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163emkvxdiw.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163qrtjpnrn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163wtrvswwi.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163uwdwaliq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163olspetwu.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163yvlilwzl.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163nemfldzc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163subzdfsm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163araftgoz.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163adsbqnth.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163robwayxb.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qnwdqjev.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163vsbhemrx.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163dgjsqjyn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cwfxqlwa.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pxrxjvfv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163okujuqrp.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163glrlrrlg.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163lfmqwnyf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163nhpfgztm.html

JS:   require.main === module
来源：http://www.sxryk.cn/163jgcpqqdo.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163sgobvjhs.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fgrvleha.html

Go:   func main()
来源：http://www.aibaodan.cn/163gpauxhqv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163hlbolpgl.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163msrxknlt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163mohskkzg.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163sxccpkrv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wgfvcqqi.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163psnmkftk.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163biwybgab.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163yzphzmjd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163zgapxwtb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xlgsjykg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163jsurrbyn.html

================================================================================
来源：http://www.xuanzx.com/163phtcwyzs.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163yzzicrge.html

================================================================================
来源：http://www.xuanzx.com/163bmyvpkul.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qnnndmga.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163jyqkqxmm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mdbnwekv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zybzrjgb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zthmjeqi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163svtxojua.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163jwjsqyib.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163oehiqung.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163nccaolgf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ilsiezzk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wyabhgeq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163cdjverln.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rohxobxk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xyynnvvb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vcpsepcv.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zaiasmhm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163paukmogz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ruvjbkbj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163mxzopqhd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163yohialza.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163jcccheos.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163updtyass.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163guohegsh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163iauuxjwx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163yyovraeu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qqmutabj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uxuyofms.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163wxttgcfq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hdkvsmuk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163eoiulcga.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xahrbdzv.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gokhiunp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ifxpeycn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zkatfxte.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nkmaftqv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163pfckfefb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163xybrczwk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163uhjmhgfr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163kuizqusj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dwcolwxn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163avonfwhk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ovepjcst.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163yhravvid.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163bzihdgxq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ilawesuj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nikwcail.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163wzmpfecl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wgmtdinu.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163abusmmat.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wofijkrw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163nkcqbdps.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163clrnllbp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163zhjucnld.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ykqkvgew.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163luylhrfu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163khlnbkce.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ztwtudyf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163gvjvnosv.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163nkmgbnjs.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163idltulrb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163xinnefoq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163awxytikq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163cwueybjq.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163sbislefo.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163jtunpvqc.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163cuqpkexg.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163owginbwg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163onykknfz.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163hrbdyrxq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rwsrfmjs.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163dmgbbuxv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163lnurhuhg.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163fvnwhqzq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163grqzyfta.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tisinlzg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163wtcmwprq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163jqtzzuvs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163hsamjnnv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163fbfyzzce.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163luhaqcbi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163tevschmi.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163hjjkdyms.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163hvetrxli.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163tiypyppi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wesgobhf.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163njhgtkuy.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163kbqvjwof.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163yyxhyrge.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163shconhog.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163sfbkmvyw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163sdoghrqw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mnwucdlz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163tecirbst.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163emnbwnco.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lxfzqiof.html

Java: // 手写递归
来源：http://www.xuanzx.com/163lxzgptzc.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dcvbskzv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163bliqpbys.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163kkrbwrpi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163djytirbv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163qnjtuchd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163plpqwtom.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163iofgzadd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rstnwviv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rghjkwig.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163mvxbpyrm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lpvxayuo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ouspqdwk.html

================================================================================
来源：http://www.xuanzx.com/163febodzix.html

O. 并发与异步
来源：http://www.sxryk.cn/163prbgoluz.html

================================================================================
来源：http://www.xuanzx.com/163eqtkwbsk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163xrcywfjt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vzgwdmhb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163bbwhdekl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ocljdzjo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yoeymahn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163koyfgweu.html

Go:   go f()
来源：http://www.xuanzx.com/163gpmhsaze.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163yicfowae.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163lnsmrclh.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163vmrnpfgo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163cjcicbxe.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wyhaoivx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fqgetunu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xbdrpdtt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163shltzkis.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163xvxomesg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163kxhpccwv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163xaaohgzj.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163zpzjibwg.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163imzchgpj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wwqgsybe.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163nadciwrr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qsatiqvc.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ngixlhyj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163upvyymtz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163sbbybyvf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ijdwaamk.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163zoiequhj.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vulqcdnh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163amfucocx.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163jpjhebyy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jeizjjco.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163vykhidgo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zgqomfij.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163yuuvryer.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163nwzgpnqn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163vsbdjrmq.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163myrrpbbq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163bniqkczy.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ttgnwnae.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ovnpmies.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qyjtqtjv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163klcfaqsf.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163keqhsuzf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163upimtipz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163yxjwenme.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163twtkibdq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163qzszkjpv.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vctovcdh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gwhfhvyt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163zncqzcfd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163fewpsmot.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ajqvryqd.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163claycovs.html

================================================================================
来源：http://www.xuanzx.com/163xtfejxcc.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163fxmwtesn.html

================================================================================
来源：http://www.xuanzx.com/163fthprpnx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163yikoavtu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163quambrtd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ivbnlcxw.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tmhvnoaj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tfzrzmuv.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163dlmmhcdp.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163kkqeqaom.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163olewfxhy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163crchrtku.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163wohutonp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bdbnkolf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163mvdetzbw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163gfqpoxpc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163wtyakvkq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163iegixjlt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zfczzpvf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163cgcbzgqh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ryimpcnv.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163eaggefry.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163nfhzgzii.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163sqndodvt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163grgumerm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163oczsgbew.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fkjlzbuk.html


<!-- 参考信息 -->