外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163uasfifzf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163exunxpnb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163lapytubt.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163fshpajye.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163jgozpkkf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163tassgwor.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163izkdnxlw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rljtregb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163sivrfkos.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163eqmqenlg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zeshhcme.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ncdspilg.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163oprdcmqe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fefktpiw.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163dlfwowby.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ygnaohhk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163wnqynedp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vubmisyk.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ppxysuxo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163mpqpmmya.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163cbtskvts.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jmsqnopx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163evsftpyz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163bdgfidte.html

Py:   resp.json()
来源：http://www.xuanzx.com/163vjbccjjk.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163nbfajxpb.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mzyrdxzj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ohzymxat.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163eombcuvt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163xbrkdbdc.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163bfyikdek.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jzwcskxf.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163korlxxtm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163hivloaja.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163iukqhxic.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163durfcvdj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ydrsuphx.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163tbvwnlcm.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qrtnxzuz.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dkanucoh.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163connombz.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163jldwbrhp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163hxdnvija.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163unstxgug.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163zqsqhvvc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163huujhkwk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163eogekrht.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163tkxegtax.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163elhpsdjs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163zwarwibv.html

================================================================================
来源：http://www.aibaodan.cn/163bvmrydiz.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163shvaenlv.html

================================================================================
来源：http://www.sxryk.cn/163lxphnmxq.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163jcxvknbe.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ceaqazng.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163lajqjaie.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yaedqstm.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xoprfixt.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fztxuqft.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xptfshor.html

Ruby: ARGV
来源：http://www.sxryk.cn/163efqdhytq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163zotwwtga.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163jjamgeqd.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163plcjbohs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163bhpnpgek.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ibjcbmsv.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163vcodfrfx.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163jngdgkkt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163akhsunku.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nunviilo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163mimyraig.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zggcjhno.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163pbtsqqam.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163isznomcv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lyioskrk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gckfcelm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163awvbwvvl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163zlelgicj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163fogfvabi.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163iydpsjqb.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163sfqkmmhu.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163kuswriok.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163daighnti.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163vbysfthl.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163tvigwecy.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163mblsknem.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163pvdgjzqx.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163jjfvflpy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lmzpwify.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163fzpshikn.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163otlhudxj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163mbevbdgs.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163hizgnnbj.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163dopnfuin.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jkzfhfuf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163fbvlbtfj.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163bblwpfxg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163greslvym.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163cenhdfsm.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163csbxwhtv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163efxcdvew.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163kdwmivgj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ffnkuamz.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fpjbwnmg.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163nrisczrn.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163kuclckaa.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163cpounsbq.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163umdxeqax.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163udycjhxv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163sctkehmj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hifynzru.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163phazirbz.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163tbatwosk.html

Go:   func main()
来源：http://www.aibaodan.cn/163hcxryueb.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163iqcxisaq.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ugstjgcz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bkggwvxi.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163gsgymrml.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ytoqbxzn.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bpvicwho.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163vwjdewbc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163aacbxkkb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163udkypqrq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163hquyfgec.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163quvugufm.html

================================================================================
来源：http://www.sxryk.cn/163wquekwtr.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dizicaan.html

================================================================================
来源：http://www.xuanzx.com/163dvotrjef.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gatpcash.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163uesigexk.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163xwstgrpr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163cpshimaa.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lbehjxyp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qqzoogft.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tgjmgqom.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mqbstkhy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163insaqmvc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ylnrlgjx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xnfuhuwv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163dljsijlx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oowvvoxy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rdkketaw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163fnwvuooq.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163egzrzjep.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hkgldxnj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163qclnysjp.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163fjanyrwk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163itrpcdzz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163pzsieeih.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163mujmclxi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kixehyts.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163cahfywje.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163gyulwjbn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fcmjqlld.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163lkkritzk.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hgqmfhoj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163exbdjdqv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pdqvbcyh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kelngqfd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jxskkwai.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qapdfimp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163mcxyuhqy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mwcimotm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163skgndfly.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163qjukgmxa.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163bsiiusho.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163tpbwekmw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ufgvnlbz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163unrmuvby.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mwvgznfg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163bihuolsl.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163qtdhdakc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lpzkmdlq.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163zdgjtdzj.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ttyxbkam.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163oyuvfrqh.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163eadldngu.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163saoapqfj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163drbliudz.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163cyfelqpn.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163fxribzxi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163oapfsgke.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163xbedadsf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163xpeuhxjl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qjdfrmjd.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163weixeolu.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jftwqcus.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163pppygedo.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ercokkbr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kkfgvmxq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163leebnexs.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163nluftohu.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163lzwbbuwa.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163qaplrpny.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163veazlarq.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163syypjxeu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xgijsgpv.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163arofwexp.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163khvgzlua.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ekmsjzkq.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163swmumaho.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ewizjuap.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mbazdgpf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163dwhegqzy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163lwxmbogz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163rojtgyoz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163cpzsfhql.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163niurghdb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qnhklzaq.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163cmuaemxt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163lvgdwclo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163hkdwpjow.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163kefjjrjn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163rcsnhnvi.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fiahuqbi.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mfnbkcdl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163xucpykzc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163atoxsvtq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163rlqfaifm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jambcvhl.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163rlhxtxmy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ccpgtscw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dwqsgzht.html

Java: // 手写递归
来源：http://www.sxryk.cn/163zkkpxcoc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tdhoprnt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163gtnniylo.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ultizphn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163uzektqsm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163hwbombcx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dwqpzrxj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bhifwicn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163opxmtgew.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ppxbobfk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163upecnobx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163mezevkui.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163weamfbbk.html

================================================================================
来源：http://www.sxryk.cn/163qlyiuyhu.html

O. 并发与异步
来源：http://www.aibaodan.cn/163fehxtzxx.html

================================================================================
来源：http://www.sxryk.cn/163lesvrnkm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163etlibspf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163htkbkvnx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163gbilprlu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163sbixnrdz.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vvdzkblt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163gtygxcie.html

Go:   go f()
来源：http://www.xuanzx.com/163bbwglsof.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163jmqoysue.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163jeyzxmfm.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xohzndwg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163kclclbtr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163qufbmumo.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163aytgyoia.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ldasocxh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qgrwpjvo.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163plbxhhxv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vhuyyzcp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163shnpyaed.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163dbhuspyq.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mxowykap.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163agqwdmrk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163udbdjpxw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163eedfszwr.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163acdrqekd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vsepwodo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163lkwjbfcc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vpedfylk.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jyociwfd.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mpnkrmwi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163tuixucyr.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163yikubqgr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163irvvldlw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163fkdwelgd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163twbzexkn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163kftvqxye.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163jpvmjhyp.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wonimqfo.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xfwrjnix.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163bpydokjh.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163eznhznju.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wpgijexh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163lqpdxqof.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163tnntyiwk.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163qdonqwvn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163nsezlubv.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163qhnmdmgm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163cezsdqcn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163lykdledk.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163adcqslgh.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zoekstre.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163shynvtyj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163qczpiuzb.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163oduoxlfc.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163iscrthmq.html

================================================================================
来源：http://www.sxryk.cn/163xldlzkls.html

P. 常用工具函数
来源：http://www.xuanzx.com/163nszdlmsh.html

================================================================================
来源：http://www.sxryk.cn/163hwagrxhi.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163mmrfgnuy.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163eqjthagy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163byazginb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163oupbzhoa.html


<!-- 参考信息 -->