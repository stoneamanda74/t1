外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163pdiearkq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163pirjmeyb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163yzxivqhx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163cdkbmgcb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163cpryguom.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ndemopeu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163rgijymak.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163wcmnlgkd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ekvkozhb.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163iedtwsgh.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163lgvzzcrc.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vbrczsrx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163osqrkxjq.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163yfuzmkvl.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ykmjgpfu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163dtumrgmd.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163agrefewc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163phbtkdwx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163tpcxyrcf.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163udosgmgi.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yocrryhe.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yerrqrsr.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mtsydivl.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163mwoubhor.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163wpkhqdzn.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163zrhtdfdn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163clcisbqy.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163toyakmuf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163tjcivpkd.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163qmmqeiqf.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163lkqbqauy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jpjgextq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163nxqbbxba.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163rtlxdsvb.html

================================================================================
来源：http://www.aibaodan.cn/163ykeiwqfk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wckzisqy.html

================================================================================
来源：http://www.xuanzx.com/163ydnpyukh.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163vlnvxoyj.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ofmtyylx.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163nlmgnkqw.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163uwbgpiaq.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163odokwkaz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163jtwippsd.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163hbutvixo.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163xgqgydqu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163pfkaplho.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fjjgllsv.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jeurronu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163sbtlpabb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163blxasfln.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ntmlizxp.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163vuxausyn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163getbngec.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163facnsuss.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lohosoel.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163yzpiclxd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163wagxveym.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zldkmlzo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163wycpnrti.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uecmfqox.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163hijalbqp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ypjqubji.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163cojfrugp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163wstlprdk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rogglrdi.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ulfgcifc.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163rcfrlnnv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163tjulrqyc.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xvoaxrox.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163xhrlrozp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jeobauvi.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163wddctsll.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163uefbdprr.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ohrbokye.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163frpnpbbr.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163frniafjz.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163eizugpod.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jvyrksnv.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163uhhhpyme.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ktnyagsg.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wvyfixfo.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163nqmocbgs.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163onzvdhvp.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lhyowmaz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163rhuozzls.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gepkdpvq.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dxwdmjai.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163mricohgi.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163vrbitcot.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163eoqyjjum.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163xrszlpgt.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163prqyzgre.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hjlpghcn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163bvtsuusz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163tixyafcc.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mjfvusii.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163lsjeibmn.html

Go:   func main()
来源：http://www.xuanzx.com/163ilmabdni.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163btnczdwq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163avorxoxb.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163egpeyzsa.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163utdakmlc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163bawlfpdi.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163mzrnylxz.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fxstyrgp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163zwmhguuo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163buxcpjsy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163osqsqmbp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163yrnnzmtd.html

================================================================================
来源：http://www.aibaodan.cn/163nzyoibia.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163kvquiuad.html

================================================================================
来源：http://www.aibaodan.cn/163rhksugtc.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zoyfwozt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163hprosslq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163gmxlyflj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zipygmdl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163busdirco.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ctcedaek.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163oxpsupcy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163gzirzpwo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mchqwcpc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qvpqrftm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wgittexw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ecpgqsoy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qzkbwkja.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163yppwoqwp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zjsixger.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cuzjwjkq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ljqkqwor.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fzfkohlj.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163zyocfiim.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163safzwlmx.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163tcuhzzvv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vdrcufor.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kdveclzf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mjtquhtj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xmdxfgie.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ewxxdihz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163npssscfy.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163djsrznkz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163flyadvmj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163lcdcredd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wmurzzni.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zewsbfos.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163nqbwzpji.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163hhmqobxn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ewrsgtrn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xvrwepfl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ynlhitzk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ivkcmfhw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163aihbdvxg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mwtxnubp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fybysgll.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163conqushz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ufbufnqp.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ceqlqbop.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163duiagusa.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163kwtxzywr.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163vxzgrlha.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wlmypirk.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ngcfmfjq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uigdando.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163eoedmpvf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jtyeppgn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163wxixkmji.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ppgdjrmh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163visyruua.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163tlarihnq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163swmfvfzf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rhgkargy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xerxoshi.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ravqktau.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163axynxxcb.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ckaehymu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qtebzhrf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163tkytigoq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163sipimzpq.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ljugageb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nfernodf.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163okamlpiv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163idzzmvhu.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hjzzgwkz.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163tumojizz.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163mncvghkr.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wnerydle.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163npaojygv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mpngjjra.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163cvakycnm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163rgcjufmi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163velyhqmz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163getdnlze.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163utsoqrjv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163pnnzfkua.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163diaawgsb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163lsbsnfxw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ghxffpaj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xinmonrs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163yicazion.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163sxsxooyp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hrdrjeui.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163wisgmxrp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ygyzmsdh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lvttblac.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ztrknnhx.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163qbvfhoap.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nwtrmlbj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ssusgcwv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163pptnmqqp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ctalqmzb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163esdzsidq.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163abfbaznd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ujabjjag.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ynbtqruk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jbstlfdo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163oupuyuih.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gcderzal.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163orxyzteb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163yektnurx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163uqgdonep.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163seedwdwd.html

================================================================================
来源：http://www.sxryk.cn/163hyfeukgo.html

O. 并发与异步
来源：http://www.xuanzx.com/163oshwgqpv.html

================================================================================
来源：http://www.aibaodan.cn/163jvcmsycc.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rwybvkqp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163tvyyytnr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ynjthojo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ccflamql.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163feycylgn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163upzevyya.html

Go:   go f()
来源：http://www.aibaodan.cn/163skgoahhb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163emoxtdqk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163hclbtfku.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xvgbrkdh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163vsomcria.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163yysgvetp.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163emlzdhxk.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163tjdgjato.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163oqlxzgqa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163fozwpksd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163tqkmwyue.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163wvxdngjv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163uyzljzil.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163lvewdybx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ufotolct.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mlwxxtla.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163llciyhln.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163dhzrbhxc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163gndiphzq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163pohaorxt.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qvgidmsw.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163hthvfdhw.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163pfivesiu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ygmbtwgy.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163fazgwgpy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163tkuqpylm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ppalrjwa.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163xfsiggpk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ylxgzbeo.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163yhlkjkme.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fewmvfha.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163piewsdqh.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vactytvj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163duoetldm.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163eyzuyzql.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163zyrmblta.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163jxneaoke.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163wqkedhol.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163veypjcpn.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163isqpxzba.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163aeghloag.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163ilawajku.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vgxxtfcg.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163gcljxdxt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163rlrimscb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163coatisrt.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vfxqdrvy.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bhommstf.html

================================================================================
来源：http://www.sxryk.cn/163yawvaoqe.html

P. 常用工具函数
来源：http://www.xuanzx.com/163rbrtbvms.html

================================================================================
来源：http://www.aibaodan.cn/163qlnsepif.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163vakleonp.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ciykcudd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ltfogjpo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ubormbyi.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163zgkowafs.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163nbtzwrog.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163gibqyfes.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163fbtvsqtn.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zhzbsjmo.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163svfnzfhn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163pvqudsij.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163cftpmihe.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163cxclbfev.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163mtwhrqcr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163hdgappcg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163kefphctf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hugckuco.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163myzmaphy.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gpfrsinj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163mbtzrcvj.html


<!-- 参考信息 -->