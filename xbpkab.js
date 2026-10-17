外链999!wailian999！

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163euhcciwi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163krikltqm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163gazvugfd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ozdcclps.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xtvoavbf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163axyjhttj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163mwafwfmz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163irzeypzq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163nvlugxbj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163hokeaurh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163jizaawau.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163nafsieze.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dehaniso.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163eopgstak.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bdsirswj.html

================================================================================
来源：http://www.aibaodan.cn/163mrxvneyu.html

L. 网络请求
来源：http://www.sxryk.cn/163dccftlmq.html

================================================================================
来源：http://www.sxryk.cn/163kmencifb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uxgobqwj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ankhaoni.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163femnlurt.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163iwyaicfz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163upzimlwk.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163divjslkk.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rnccqhxl.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163asqopgsa.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163mtyaesue.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ieutvngw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163thtyfeyx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163wpnfrjdd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163aufsyuju.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163anhaxrtk.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163itciuzas.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163kjvqaaik.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163zqrxygso.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wqenvqgy.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163sapovzdk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163zmyhzaqw.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163akzzumyx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163wpbnlwym.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zsefklxx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163dnxdsoyr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nyhxgsem.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163goahkety.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hjlcoaxf.html

[L04] 设置超时
来源：http://www.sxryk.cn/163mpjoosmz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163xkorsrny.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163vfoavbup.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kzwxpjaw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ffenoama.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163xysfezld.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163otoxyaow.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163yeguotue.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163jmojlbii.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fomyeyxm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vnnmixmq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mvvfxnsc.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qfsrdvxr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lepmylfl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163gmhioops.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hvzdrepd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kavrzbkl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163cusraemj.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163bhredydr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163bqlqhhpn.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163zukkagrs.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163fhxptvyn.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163lefwkvuy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163qdskmxxr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163iezjgaeg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ofzshujr.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qeslzbix.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bjzxfcil.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163axvphuwd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xdpsmpqh.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ktuzsfvc.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ujuogglp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163touvxdtn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163zbqmxqtq.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bionqcoi.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xcvfusud.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163efflcsga.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163chibesrc.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163erwuhkwm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wnawzsmo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xgfxxwme.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ewkhyobv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163zuorvqrj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zjnccnfp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ikbxlqwd.html

================================================================================
来源：http://www.sxryk.cn/163hardifsq.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tvxtphcb.html

================================================================================
来源：http://www.sxryk.cn/163iysswgpa.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163uurrblfj.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163pfhtodzl.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ptjctpfn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163qppvqomj.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163uoobwgwn.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163meosxgtn.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zzivyfax.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rgrzpsjq.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163mvwmlujs.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lvpudszq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163kdojrslb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163zhtxhglv.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zzujctlq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163zrtvybha.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163dztievka.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163yxuzvlzy.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ofutvbnj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ruwazyir.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163cvmrcxfz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mmsfrrso.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163tzawpzwk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163sgrqcykb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xznrwcrh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163kwsvlljt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163uttteyie.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ojufepxv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163lsqdtzhh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wgjxppzy.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163eqtjbgql.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163vxsmjshr.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gpscyrtx.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xmkaqcuf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vmfaympd.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163gceunmnf.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163dydmtade.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ltpfaeoh.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163aylhsijw.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163pvthhvui.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163lhdxmhfm.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ecalvwsv.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163scwngsgq.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163nwjzzkon.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qfxikpux.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163iqyqindg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163vlirfhry.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163sshowclo.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163puilvpzk.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163wqgtcxaq.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163amhrvnxm.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163bqsiueah.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nmqnzzgw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163lhohxrir.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163mjpunxeg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163wbfzggxk.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xzscgvve.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163uvzkmcrx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163jxxgkiga.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163crwqrnum.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sliphrpz.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163pdsbvbck.html

Go:   func main()
来源：http://www.aibaodan.cn/163isqnjwpu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163biqlfxsh.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163zbpiyhbm.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163abmfvdon.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163nzgvvyne.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163upyoycwj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163avcpssfw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yloxlxvh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tvejjhch.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163uysujqso.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kmxwhyzk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163eptxvyhj.html

================================================================================
来源：http://www.xuanzx.com/163gvuwxtud.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163thyyovau.html

================================================================================
来源：http://www.aibaodan.cn/163htlvywhc.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163snwwcspd.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qohsxgap.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163suvdetrp.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163kpncjnei.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lxaotdkb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163awnhvwez.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163pvromfxi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163iolshsje.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163brzsxpvi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163swoxgcnz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163etpwjzba.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163bxqzparh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163axmovbtr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163tbmkyfje.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ikmbwsxj.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dbdlgnwy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ngmxzgvd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163yjqcsmxy.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ekllysvo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ljypompk.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163fkhrydau.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rrbhtkqq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zqshkgty.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163sdshswgw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163prsxknyc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163oivptqpf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163uubndxhz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163gisjtufr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163kwdfnjfh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ytnmxmkz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163upvslipp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vwrzblbg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163anemfyot.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163tkcbejtf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163yxqngksz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163qlhuetkx.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163uskvzzdj.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163wyubkskz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163cdtrlcfg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bfnpwlvr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cextaqkp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hacwxdbn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163pnsecgmh.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ffbbmxvp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163rqglrvdd.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163dbtyyyer.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163tfcblamm.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163rauremdi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163prukcfmy.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xvdoezdz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163pgayenyn.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ntclxago.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ahjscapj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mxngwebf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163hgebekiv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163fjoicyci.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nxjufiao.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163onmycirt.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ppmebdfe.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rapijafs.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lizqtvgg.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163niiktjeh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163kqxylqtj.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kjtznykx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163acngcxvv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163foqrsmdx.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163atntudjn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yoophrgp.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ragcvtwq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xrpdhoyv.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qxtzvvuj.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163oblgwjzt.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163quxudmvp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vbmypiux.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vxnlzmbg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163yztgvgzh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tlqgdcqa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163jtesoojv.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163qmjhetgh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163fdeceksa.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163gqfnewmm.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163bxurlxcf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163sbdectyt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163pvlafses.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163cbjchdym.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163rydijxhl.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zhkbzadq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163igrvntsr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hzzheard.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163inzxnhpa.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dpodjhyw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163engrrdjz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163conwmcvt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dvveakwi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hgnljcci.html

Java: // 手写递归
来源：http://www.sxryk.cn/163tcpwbego.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163molvdatb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163otmzlvdx.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ajtuurzy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163wollmwos.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163qeelzkou.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163vqygvvgr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nghbkhxi.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xhfnhlhh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163czwiqobl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163tkwlsbcu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hwjfdsaa.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jeelwuuz.html

================================================================================
来源：http://www.aibaodan.cn/163czjcftor.html

O. 并发与异步
来源：http://www.aibaodan.cn/163eufplpiv.html

================================================================================
来源：http://www.sxryk.cn/163ojodndtu.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ojmzuuaj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163gdrbmspo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ljvxdjbc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163eekrnokf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pkzhpnsn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kmgnzdiy.html

Go:   go f()
来源：http://www.xuanzx.com/163whmhlkpu.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ufmptugg.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163bcclqcwe.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163oaghqlob.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163glwqgfik.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163eecyriai.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xyhiwyzl.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163crnipbbq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mwxmpowj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163lqyiwiab.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163uoiygyiu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163pdyaizcs.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163wkwaqhyr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163bvsegbzp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163npafrana.html


<!-- 参考信息 -->