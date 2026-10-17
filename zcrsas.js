外链999!wailian999！

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163wdveuihm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163biatvnal.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163oaqdjwri.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163cdjuyeux.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ppgkoqzl.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163yezhksqo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163eqyosaxr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163cumgbtof.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163nnanhbia.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ojwbbdxm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163swmqqbdi.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ewogunmw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wipgpblj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163peprfaau.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163mxpejryj.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dbvmbzgm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163uqqtkwav.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163hubpjczj.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163nccsevjv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163foijfupd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mndawalt.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gcwqemui.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hazoevdb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163clzkfucg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163pimvqbop.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163grtjhriy.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163eqellhtm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163mnndlvxd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163cuzazaty.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163vrohkvde.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163wqmffwqs.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163fdjuhnpw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163urlhklpv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ptdgnnln.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163vepzmijk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163howoawzk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ylthddep.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163pbqbqbhy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163dahjohek.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jpixvyce.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xtamltyw.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163nfefkmjf.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163xzvrqucz.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rjuwrthl.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163envxiyfi.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163apderber.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163djaweaae.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163amgzlorh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wzzcdnod.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bkaasnyw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163jtdkfrua.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163cvoqwhix.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163oqexzaof.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163obbmkfja.html

================================================================================
来源：http://www.aibaodan.cn/163pqceehsw.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fslptubn.html

================================================================================
来源：http://www.aibaodan.cn/163xswdjsle.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163wfrbrtuo.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xlomqkpd.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163igglakbc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163uqzlbjoe.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qhqerpzn.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163nwrgnzdn.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xhbdbsnr.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vqcnptfv.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bqdueywe.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163fnpsmagu.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163uikmymqs.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jvuzddcu.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zjanfyxb.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163iscqxleq.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163tbvssdlx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xszenhpy.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163wmqiojvh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163whtokvkp.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tjcjovhw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163gtagybnr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163jniouuqi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xzdoqqxx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163zqgjrwur.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163yctlzway.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163pzrkjsaq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163fwkayyek.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163hhvotlyv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163oidtrwnk.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ccpynwyi.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bioblwnm.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163cpvmgnfi.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163rhddbsdf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lutnhhti.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ysucmgqw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163brnracai.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163mujyvuox.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163hesjnyqn.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163fgagdsjw.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163yjagwcao.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163lfrhfqiu.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163iypeznox.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gyguezhq.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163wclhtlih.html

Ruby: exit 1
来源：http://www.xuanzx.com/163spshhubj.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163kjtmbiwg.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163tspcinvu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163mwlzwdzs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163jhfjktju.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163itrdqukv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ldviiien.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163agynvrfe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163clasxwwm.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163blcxmkdq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163bczempic.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163splevpag.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163lhccbxjt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163nwflbdcs.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ykoraiwa.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zblbknss.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163lltsokjk.html

Go:   func main()
来源：http://www.aibaodan.cn/163iqvqcfnw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ktncoarv.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yqlltmfw.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163cbefqeuv.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163fknvvjes.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163nqltgdao.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xnjvvmhf.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qntzulml.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163pkuvxfqt.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163uxgjmgqw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tbgaosxn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163elsjskkx.html

================================================================================
来源：http://www.sxryk.cn/163ghlxdhdp.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163gbdcjxto.html

================================================================================
来源：http://www.aibaodan.cn/163xeayaiyw.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rrlwjuha.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163tduigpsw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163vgoozrwc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qtusljic.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163unaphbjm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163yfvuizvt.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rffalylx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163pfcjzoqy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163fewevdux.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163wfiigwgk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tsgucugt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163azuvwijx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163rxczoonz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163eazbmari.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163owrsgiif.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163tsgqjhmc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163koslywva.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163fdghfjdz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163owpbtzmb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dbgdhpsl.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163tzcnrqlh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163hltprraw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163utdydwdy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163eepvjpcg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163kywdqjaw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163waewmlga.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163bvdgsowq.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163etudsjqi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xeauvouc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163dbtehdgc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cbnrdhax.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163yzlddlbe.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vskqwnxr.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xikixdzj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qscefhwg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163bpahdhpi.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163jxclffsk.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163trytapmf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163mdydsmvb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163agxyqltr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rkksfptv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tpnnncos.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163uqfnnihj.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xlzdcjvc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163icziposd.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zntsmejr.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ulbvvkwj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163enrpsxmc.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vysfrhvl.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163fapozvjr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163uippxywj.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kooorywt.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163mfiwsyog.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163fguhwnso.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163tmbyknps.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163qgcbwicz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163vqnwyhcm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rvifnwmz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163piszsgej.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163npzjddis.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163tjcotnzi.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163rsravrlo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kxfzbcvi.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163zlnqfuob.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163enxklmgo.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163kzgzihqi.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163akwuzmio.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qbgzgunf.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163mwclqipl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lkubiaav.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163rmajnjty.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ryzmdqql.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ecuaiznx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163awyjbajj.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qzhemcki.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vofodppy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ntucowpr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163bqxzlwhk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163dvvdccqm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bfmhysvf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163spmzmxvz.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ghmqsgta.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kxkcrhcp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163dbowfpkr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163irvgesku.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163shjrpnww.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163erhgsfot.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163yanfwige.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qeddmctc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fygkbzxh.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163pvajmjyd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163hayosssn.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tgtbgxjf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eqroynuu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163llcfjbfx.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163stqkrrrg.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cwmnxxit.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163nmwoidiv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163apdpkeub.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bfmfqgzy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163wssqgixw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163emcejieg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fgmiqcxk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163wobkqtir.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163juxzxits.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163xgrlazwc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163swfvsgqw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qltnmtox.html

================================================================================
来源：http://www.sxryk.cn/163cctphngn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163dxdjmcxf.html

================================================================================
来源：http://www.aibaodan.cn/163aaweztwb.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ejvjhdzo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fpltslco.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163dgozelob.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bmmzwzml.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cpnjbios.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ammrhmae.html

Go:   go f()
来源：http://www.xuanzx.com/163vnityodx.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ykvmfzlv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wjresqpy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163umrugndy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163scndzwdw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163phhbuuic.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xhwpcvqx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gibyvqve.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163qyabqgng.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kmlabpzj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rjeoearj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163agadrjvi.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163unlfslcc.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gqturjmk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163knelokis.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163zoabnwnv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163hnxqndws.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163pmzmejmh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mboeedzn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163uhyfmrjq.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163qmapiick.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ewadrpqi.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163arxaqpln.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163afuigvic.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gdsmmvrr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163qwwhpgqm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163fcdnuhnw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vvucgcyy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fnqcnsyw.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163dhbgdthq.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zttiwpkr.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163tejsnnfe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163joyscwdu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ekfpuuct.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hudtbjjn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163dfbrbvlj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163onzybdqg.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163sepscuqr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163wtovecdf.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163mxbhzgtk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163qbqkrbqh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vikjadek.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ygxpidjr.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wgfiroek.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ddxchvbq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163bwvconge.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ttfixtkm.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163wcmkfzoo.html

================================================================================
来源：http://www.sxryk.cn/163qxqyemka.html

P. 常用工具函数
来源：http://www.sxryk.cn/163obikrxsv.html

================================================================================
来源：http://www.sxryk.cn/163hhhdgzhk.html


<!-- 参考信息 -->