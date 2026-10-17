外链999!wailian999！

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163yxucqzwe.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ufoauqxp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163aetsjehp.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163npbtefkw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dxqijpfs.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163gcnjfdkh.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ysohdyzt.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ngsbzmlo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163czagikuc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163zpfsyltv.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163rcmmepfn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qguyiemt.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bgeuqvty.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ysguotwv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163mymytflu.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fsblqdgl.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163adxvckwh.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163besdituw.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ygldfwol.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163pfvjlrqp.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163sthwokfi.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163dtrciflx.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qpgdhchy.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163zznaocky.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pthachja.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163enuwnkug.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dxyhdchs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163vbfyjuji.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163jxpkpmvi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163mobfbpit.html

================================================================================
来源：http://www.aibaodan.cn/163xyuxxnhf.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163jxxhoeub.html

================================================================================
来源：http://www.xuanzx.com/163qzbuiptk.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163mfuxhgeo.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163nwnlkzql.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ifarpkrn.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fpezmxvx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tyzyrfgw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163wfrqnkss.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163tlvjuimv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163kpwpxxna.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163hifgpcrn.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163pyujtmsi.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wcugxjub.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jgikjvwn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163seqvyjky.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163qgzyckxh.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163otcmxhar.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ubipzjeh.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tphzqmyu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tfndwsez.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163meihjsjp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163wrdusxhn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163rkevrpfp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mwzzyzee.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dychnhne.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163fuleleft.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gpwggwam.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163vmulzxmu.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163nybslcad.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163nkgldwtc.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163oeidzggz.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cxefzaay.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163kyhyeesh.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163nuntinad.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163eozjevph.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163etlyguxg.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163kcoeyxvi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163xnuawvqp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163woorcesy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qsyeovxj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163paojuhnn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163vcpjjzva.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ouoihmem.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163yixtgaeq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163eihofkbf.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vrajvvca.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ncaktfil.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163jhsnnrpq.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163streqrjh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163yvdgktpr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163zllcqvpf.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163ujekvfic.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163cjyetmbw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vdnovwxp.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ndffqikw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163bijosdvb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163typxyckp.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xaxncmpy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163izkczpcc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163plxhgzay.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163phshwrzw.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wjkeyglc.html

Go:   func main()
来源：http://www.xuanzx.com/163otpsoeyi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163rjvwrffc.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163leoufgvf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163emcpkapj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163xdrpsgnh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163kxxarije.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wwzvaedi.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gqckpymv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163earqacoc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wfkfplhb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163prkxfkqh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163gyqhbogl.html

================================================================================
来源：http://www.sxryk.cn/163ccutwerw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163urluqrqe.html

================================================================================
来源：http://www.xuanzx.com/163qfktqkmn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163cebbdvna.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ingvbxuz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hiklqvta.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163gfxplxjl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xlxhmgyd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163wdfegsrw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163kepjuxyk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163zghxszpl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163tibmrniw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163xrtkeoun.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dwvgkvls.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163uxpkgkeo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ggkzaumc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gyhortvc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zuxzvloo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163eijlptnz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nyirkneb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163rcrckndb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163uvitbace.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163sxnxhuhh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163udqgyovi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163eftdwctv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163hbbmchgd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jwzquocn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163fxigegsx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qjkjszmb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163swpccxuu.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lxtfpmzr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wefuxuul.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163jdbbytvn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163llakqcse.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vhfjkyry.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163hwmkftth.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163bkqdjbmb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jrwoayln.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ntfjjibb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163shtjfsua.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bwzbtjzt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dgeogtob.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163puxddque.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ymezbfpf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ykqapihf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ydojgasj.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163rdfubjzl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ziuhomyc.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fcbwdjhb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ekwiznat.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163yilegqqn.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xkoemuuj.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163curdukuw.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163uyzhtfhl.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ptvgcodu.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163vzhuwedk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bxsnzcqt.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163bdcfdufp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163garksipt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163pmygprqa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tbxxpllu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163abzehmkn.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vedmaiih.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163okhxounf.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163biixudit.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163eqljowur.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ccwhvhun.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ujfqfrpj.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jarktddf.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nxccqlfx.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163letfduak.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163jdxkmduf.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163tmudshzu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163sogwywxz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qeasmvjo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163jvxcoyjj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163puxpqlwa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163pharzpxc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lpaovjjw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163yqhscxjf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163evbhaqaz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vzsafict.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163jhhozuik.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163fuktedrv.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163iavremds.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163lkrxovfv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jrandnjc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vholxyri.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163umkhnaxt.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dvqtryvq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163lfypnnlk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lhqsrghj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ramwycbv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163fbinypnm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163pfqmrvso.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ejfrztbs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hicyfsuh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ikhyoqwx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163vsaofiix.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163egfmtcoo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zedslifz.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163avlpekrz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163otuwdtyk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qcroqyzz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ukhstnvc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163spihrelg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vjwlrmjc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lkeukamv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163jmiamwpp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163iaxfcosi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cnyfxtmb.html

================================================================================
来源：http://www.sxryk.cn/163lepbwfyn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163krwsignj.html

================================================================================
来源：http://www.xuanzx.com/163refnvxgs.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163bxxbstln.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ozrldcsp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163clrgifmo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163eytozrbp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163udpcunsk.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163nsnbbbmy.html

Go:   go f()
来源：http://www.aibaodan.cn/163axvfxdym.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ccayddvd.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163dfpzxdjn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163klcbwyop.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163wpyzlmsz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163dttqjwcj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ahjxxbpy.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ujntahpj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qfwyofeh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163yijjmtwq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dqqjxnzm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163vzshhvrf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wmakaner.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vdsjwthx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163erahdwsu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163qscryxsh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163blvzcglr.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163payhqszi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lbxzanav.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wnqxtiqc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163pmdqgnvo.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163rdbmbedd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163torrnjuf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ifeioqvx.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163sjgxqqqo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pymxleem.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163pjbedzis.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163cxtoyhvs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163mhfxpzyc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163cynljpkm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163eutgxwkv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163nwqtmqcq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163fkexfaep.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wvrmtzng.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nzmqzmza.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hiwctzzw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163kuyuhvei.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163fkhrzjee.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163krrzgoze.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163pfsfdoxc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163fyfijzww.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ktdmnucy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163byyrsfzh.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xbzlbmik.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163wuebgihh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dztspefa.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163mxqcykls.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163zzqephdf.html

================================================================================
来源：http://www.xuanzx.com/163nkmzjgtc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163legzujxf.html

================================================================================
来源：http://www.aibaodan.cn/163ivzdehik.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163smxnlaaq.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gzzjknfi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163kkthasqe.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163abvdbhjx.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rvwjpytj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163hgimpxlm.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163brfjvnzj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163dpzfcwmc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163cxqxqbje.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ebwjaoip.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163gvgsubzn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163xzsmapwq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163apsrwlnn.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163cjqpivhj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163bkjfxuxa.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fwokohow.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163bcpkdtax.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163nqprgemf.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163zntqmduf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163kviszism.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ahuwnakj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hbhzaqcs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dzyigqjn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qntuvzvz.html


<!-- 参考信息 -->