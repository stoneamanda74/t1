外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tvrortcv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qyoewsfo.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163onpwlnpv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163kwzexahh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ddjvkhkr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dseojmqu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163djsrdfge.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163pwzlywdt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163zmukgfol.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163igysrmmt.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163dwmmgdzq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163cyspqyxj.html

Py:   resp.json()
来源：http://www.xuanzx.com/163dhwxgtto.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163hadzlkou.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ryxfpyox.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163bztljqnp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yczutbym.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ggnzjwnl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163fwsimevl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ljrvbehw.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ynwvdmqk.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wulevhbh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163kzivejyv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163mivuvezk.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ebjoxbbm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163vbgcpipv.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163bjsltkpn.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163xinqckrc.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163lqlpulgd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163iahzifwb.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xoxykgaq.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163kytkihar.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vhaklpsj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xsroqbuq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ezunnjgf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163qjtbetcj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ltuoyrnm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163vvzkimte.html

================================================================================
来源：http://www.aibaodan.cn/163mxbiyenf.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163dklrlyfq.html

================================================================================
来源：http://www.aibaodan.cn/163ptvcgwcl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ddfdylmd.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163voyyilzu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163nwukwltv.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163ematdzvk.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bmzxpejr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163tfbjmhga.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ryicdele.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ciggddgx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163utfkncth.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wcvyxxsq.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163moftjkkk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163sqybzmzf.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ytgsexfs.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163tpykemyn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163rrrbjhvk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163lsdnudlf.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163mvkndyaf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163eteukxip.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163sjpjtwxc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qtggduea.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163yjlaamoo.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163azbxqicz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zpudfkfz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163uwyippgd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163cjlqupgc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163uwbsiyxi.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bxomyiax.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163uahaumyj.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163nzyabywv.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rwmzlhra.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163upjvokkg.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163rpnfesec.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163basyyjbj.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163zxdvznwt.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hlqqnptu.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163doskiruv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xkluljzt.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163tbmegixw.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163docufrbg.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163kwrcfigt.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163hjpnumhm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163faazwllb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163akvirtuk.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vragxlcm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qiqryrfp.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163emiyzyfd.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163yljkgwne.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ltooefbi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163itepvcxm.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163mwwphcwp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qxmerzon.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163cfcvavmm.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163ybcxfdmm.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163xxlgxilu.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163grzbblrf.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zgsdfpkb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163tlmppalr.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ukxojsqg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163naypnpvm.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bipazhpp.html

Go:   func main()
来源：http://www.sxryk.cn/163bhzsvdnm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fcoafyjb.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163wsksfysg.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163yyxvzyvz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ezvjkmbn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163dnnhzcag.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jokwbpxs.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163frjgckyq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163fintpxxs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163atljlnoy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163pxijehma.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163klwnmxux.html

================================================================================
来源：http://www.xuanzx.com/163nsmgswnm.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vsauankj.html

================================================================================
来源：http://www.aibaodan.cn/163stzqizjd.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163scdsexva.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163yivkzlsi.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163yffkcwdb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xfpvaizl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uitqnfva.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163iqesoknm.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163eqrqdpmj.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163xvhzwvmh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ycmxwtqx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163guxgoppg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ynvvxjvt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163uqcgfqib.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163unzgaqcc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kdbnylgs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163hdqoiran.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163nhxrrocm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163avqjrejx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163qcykpijs.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163wjvwyqhz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163gvzbtuue.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ofzudmwa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163auyxbmsv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ijnsofgt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fujmwddr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163shtnxkao.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163jerrwkeg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163pwphzfva.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ryhtonoi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dqdjmxpf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163dmdrcobp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163inwwqkvl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kiknrgta.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163djyoxqhz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163rkxbsivr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ikakunag.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163enzpzkdb.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163pnpwggdc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163xijhswoh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dtmehyba.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163uoawvlej.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ctovghqm.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163onxvdumf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163yackipdy.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163khyfurkr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163etnlocbz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163nwdvacps.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163rkbppksw.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jizhclov.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ifxlychq.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nhdcvfxx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kxgrdisc.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tiiicdrq.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163woeckapb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lmleullh.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rtfylgif.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163imofimhv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ytgattmw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163hubepkwv.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163lwrcirrb.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jfiositx.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163xtseadlr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163syrxzqkh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163fhickrtu.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163gnnpgzky.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163trzhjfbi.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163onqsfqfr.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ztavymgc.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uoqrllyr.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wvrgltot.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163uunquobf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ksxcajyo.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163qigcvgzf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163kncqywri.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163tuvwtfme.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163qkytaeja.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rstxjypk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163hcxiehxw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163zpbchhgs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qhkcafjb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163jzidzjyb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qqnnzxon.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ndhuzcfx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163uxfitnfy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163fgqdjekz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jhmuommj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163afoslrwh.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163hrmtknmy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163fkglkvxd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163uojiaxpn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fiiieuxx.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163ftszyqtv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163oxsgomdr.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163uzawejnw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163jfkhuzgd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163eqdimwji.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163kajloqvy.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163xlbazhwm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yfwciuoh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xswfiprv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163dugojhwe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163myissuki.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163ihmnknru.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xfvsnlay.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bmlbtsum.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dpjhljga.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163enjgswva.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163xunbmkgc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163skoiwddo.html

================================================================================
来源：http://www.sxryk.cn/163ewvzwmry.html

O. 并发与异步
来源：http://www.sxryk.cn/163vysamsvi.html

================================================================================
来源：http://www.aibaodan.cn/163wvnafetd.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163urbillmp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163nmrvctzw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mrtdqsph.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163pzwpjasp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zynhuduz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ylhouqml.html

Go:   go f()
来源：http://www.sxryk.cn/163gezlaumi.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163tzhscunn.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163dwmjltjy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ktdktcgb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zwwttwqw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163eahxdano.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163yhoyxavj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jsatmnsj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163tbxjqblz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163bmackryc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163gvrbcfqz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163esosyohz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163qwalckat.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lhmuzrfj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ozvecgfq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rrtoqslq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dkckfabk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163kdmwdhho.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pksstiwx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163hrmgzcvu.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163exvwtnfr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163wffovnod.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163slfqtcuj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163vdxteaww.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mhkvoatx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163qbkdszoh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163qeqolxsk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163katybjcj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163bmwbbgux.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163auzkkmtk.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zhugfqlv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163krfiiunr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fgwzmegt.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163spxbhpbm.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dirifolw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wrdayzyp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163aeoaidtr.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xomiylfx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ggkdljap.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163luxedisg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rolqhsit.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ykcbhbqs.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163lddjhjtv.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cmrlgouo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163suxydedz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163zhuctpsb.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vtrgvasg.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163odxlmjos.html

================================================================================
来源：http://www.aibaodan.cn/163nazxokva.html

P. 常用工具函数
来源：http://www.xuanzx.com/163tqoxfbpy.html

================================================================================
来源：http://www.aibaodan.cn/163ojzawxlk.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163lgisiian.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163swliuwyg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163vzooulct.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zhhvmizz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163cpmbnogc.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163axxkadav.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163oqkwdxbl.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163milohtlm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163pulbdncl.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163mxqogtqm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ugcfpyue.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163izjofyxr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kqiggbgt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ppdrgzka.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163lelqnptf.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163nvakgydx.html


<!-- 参考信息 -->