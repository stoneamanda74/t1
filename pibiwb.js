外链999!wailian999！

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163snjbxpkx.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163jncnfspt.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zdgctqxr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163tzpuptyr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aemvkvum.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qlifyzrk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163hbewjilo.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163sttnrctc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163tmcnucsf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163yvpejfnj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163xhbuziuf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ksbglbiv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163zzbjdgrb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xjqphpcf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163quzdmmkm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hccefnkk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163fcmfxgfi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163atiaaisq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163bgetuzhn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163vlngsudu.html

Py:   resp.json()
来源：http://www.sxryk.cn/163erqblust.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ioaarugt.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163laxmkoaq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163odmxllan.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163qbsxvjrw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xinjtprd.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163skftamne.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vmsaaoje.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163cufeiomf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qjaoidtb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163hsujllks.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163cdevcjaj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163zfbngqxb.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163aizmybee.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163remwuwgb.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163sggbivor.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vmlycneq.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163iyogeoir.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163inqjpibr.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163geanlqmc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pejksxqz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ipnfmljr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163hlfqzxwv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163yiymhjxm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163lxeuobbo.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ndgnjqth.html

================================================================================
来源：http://www.sxryk.cn/163ibrbkrpr.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163vrdsaakx.html

================================================================================
来源：http://www.xuanzx.com/163dmgweirx.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163fzcngcrz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163faiyvnei.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163gcxilacn.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163luvtzaqj.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163iqldrqtx.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fbxmnfjt.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163wexqreth.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163lwvhecsn.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163itxlhnxt.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163vbarzqsr.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163guonfrca.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163uizmfdpn.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xzyqjrmr.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ybnztamf.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163idzewokf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163cqgdxdck.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163zcoonxjs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lotsytka.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163jymjdwcw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163rohhbafe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163nunhysdw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163izdrhygl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nkzsjznb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163wqrftdyv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hxoxaeym.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163dcvjguxc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qtwsacjr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163vnppvczs.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163prykbzbf.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163fsnyutqh.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xmlszrym.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163zsmgazai.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wyjupzif.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ngxboifn.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163vwvdkclz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bqahgmfo.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pyeenodz.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163paqimyhp.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163lvfqdmqj.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ofqbamdo.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163mppoxkfw.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kltrcebv.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qtumbpah.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gxgnhlaw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ilwlilhk.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163kiggkymu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wbyrlpvc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163byjjnxyi.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163zbpdeinj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163rnbgljak.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hcluwbpe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163msvivoui.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163tijxhdkw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163fywwidax.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163haybnhuu.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ycippqbp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163efwsloyd.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163yblmskmj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mnatbwou.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163lgstmiqk.html

Go:   func main()
来源：http://www.xuanzx.com/163pamkrajg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ppkdudtw.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jrhvoorx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163lvpbqeoj.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163elwibfkq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ztkuqeko.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sjbfqxpa.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163avykfmmg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ifazayuz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gdzixxog.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xxcuapsa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163grqdmnpj.html

================================================================================
来源：http://www.xuanzx.com/163pbpntxrm.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163hbjiedrl.html

================================================================================
来源：http://www.aibaodan.cn/163ofhjudtk.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mymijqja.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163eyofjgkz.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163faaqpztp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163plpzvcmg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tghdshig.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ysactrnj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163oqbzfqlv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ypcgqtso.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ygcxsnvl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163hibrflcd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hrccmrke.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xxgsovue.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163uzplurzs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163lqswawau.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163okkwzmzm.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163zjqhmhpa.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xqmjogbf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163eyicfcwx.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163fmissneo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ykrlzywg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163mvptmola.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163zsccsouf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hgjwosom.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163gbaupxhe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ovbxsyrg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163nyzaidiy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163erkrqztm.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163jdajzlap.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ilwilaiw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163czqanqiu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bshnxptt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163awzpzftv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163unxndkhi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163sambqcnh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zqsufzbq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ynxtvsbm.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163lbejhihl.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163nobsjsyw.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dohebczp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wrffwtbt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vnvhfdnp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163gsbdqhwx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jtlcpqlj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163uldnedyh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163hufyvnzs.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163zbzitauu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163jhthnyun.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163qyzyhaoj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ubrekpwq.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163splmsirb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ihgzehta.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163yhivqgug.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163youaldzx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fpqmuadz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163bbujxmte.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hertspao.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163pspvgrai.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rvwdoltr.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163dghaqmaq.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kkciwrte.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zcohfibj.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ddzfxwka.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163muutydog.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kivnmmcg.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163fwriljqa.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ddgpjlxw.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lmklkzub.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yehbzcht.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163enpjuwhj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163zoznuogd.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xajktwkm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zthmdugu.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163zoqiqcmr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163xgvgzxrg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163rrguyaqy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163zromtxvq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163gzhdrgdv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163vpvqxyho.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163tgvfsiqv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bibgsaem.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mrqtsjqd.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163yvhkpisv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vptqdzdc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nrplbmgw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163zsftzble.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163seckdtqs.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163unjruuht.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163trwjvvqe.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163cgcgjabt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163nmhkiwpd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163jckwvopx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ewvjndof.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163rnvnvkjb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cexrdrzk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cttqqphg.html

Java: // 手写递归
来源：http://www.sxryk.cn/163gmbdxuqn.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163zzygttzt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dvqfipjt.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163tzxuwptv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163haenxvkg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163hhjeqwqd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163vdlkillu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qefsspjp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163suovdwmy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gigqbazy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163equrrhgx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163msnfeqdg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ilciyxop.html

================================================================================
来源：http://www.xuanzx.com/163tnsxzejw.html

O. 并发与异步
来源：http://www.sxryk.cn/163evtwafji.html

================================================================================
来源：http://www.xuanzx.com/163ypukotgq.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163bxnzcpbb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cpcuwdbm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163imuiwgte.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163rguwmjqi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163fvwedgfn.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163jhkbdsdp.html

Go:   go f()
来源：http://www.xuanzx.com/163eoehjewt.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hnbgomgk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163aewcraui.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163biwvhcrn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ciyyeteg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163lcoojvck.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jcjfvjht.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vjtplbvf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163iqhztayz.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163nnqdhphh.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163kfoucttf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163somnvpxp.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163kyojgcen.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163haejttsq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163uccmdgou.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rpraxryv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zhefbksy.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163vucrkaut.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163okxiozyc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163zygnpmia.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163etjtvqfa.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163oltmlryz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163bhvbfjlb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qjvcjdzb.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qksxndfb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163frjbmdzg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163znxmtryy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ysbkcvsv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163jtqpdrap.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163bjxmxxsb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163cwnrvvba.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zduymtbp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163acrltrra.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163krlfogal.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hnrocpay.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163xhcmnyou.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wistqmmv.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163tifxgipu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163azwayovr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163vchluskl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163lskcbglf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163wprzcadn.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163myvfnxzw.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jjkuiarc.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gwuhsvim.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163qjkmfbjc.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163bddbfayx.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163odvfmipd.html

================================================================================
来源：http://www.sxryk.cn/163ivsaplcx.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vaaldvkb.html

================================================================================
来源：http://www.xuanzx.com/163smgrqacp.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163cocaasct.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zaxpiicy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qfyaxivt.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qydefcbx.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163duapqqva.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163iyumjluj.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163apnwpnit.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163pvicwvdp.html


<!-- 参考信息 -->