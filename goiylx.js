外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qxyjkydu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163hgiaedxs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163qxdkhnuy.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163mgqprsvm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cbtlagaq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ngelgmvh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163kmggkwxb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163qynjwowd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163lpmiistj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163xgspxbjy.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163znpcpeju.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163whsfobah.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163imgqrchv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hrmnzvsc.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163siejokhl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163mndpsvqb.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163xdlaswhy.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163dxazmdqk.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163gvzggmcz.html

================================================================================
来源：http://www.aibaodan.cn/163pjmbuyue.html

L. 网络请求
来源：http://www.aibaodan.cn/163tgqpnayp.html

================================================================================
来源：http://www.xuanzx.com/163ediohrcw.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163bywistsg.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163vhqjsuhd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163rvfvbcoq.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163enocqvbg.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163saigkwyy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ofslnzrp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163rqsjdeqj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163gadgqufz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163efaeetps.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163wnczsdfn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qhsxmrgd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163mwgofuiz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163nqwuuvci.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163syggsgyb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ieewbaza.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163wfrsphlx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163lnnxzing.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163tfwyjqms.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zmguvwsz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163uqmcexxj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zccqwnec.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163weswjdge.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163cwlkknoi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bfdxtvzl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163obdxslgu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jzvfncii.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163unhebwuj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163rnpehfib.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ikklfzif.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163pzprbadw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163fsqgcbcw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mrmxnylk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163eowlmhlp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163vmlkstah.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wizkcfqs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ltxhodxl.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wouvblrv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163nobmxmxs.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163yzqvgjdx.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jpgvjoyh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yhtivaxa.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163qlmxemol.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163ilagrrru.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163dzkidlgs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163yrymiuoy.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163atjolrpy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163tiynwlhl.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163dphojymh.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jowsmxdz.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qgmlmsww.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163czjkldbg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163yuqgmohv.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163tnxapcea.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163isjasuzi.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163jgfcslxo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163qrrjfnav.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163exrprbbu.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dqklhgxm.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163axmpjajl.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163zthlfsiw.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163tzknyaqz.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ndgrpnpy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pjyffndx.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zfdsiusu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ldxaujop.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rlsceamo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163roxegwmk.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ajseoieu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ghyztobj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163yqmzjwcv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163rrohjsut.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163krbuocky.html

================================================================================
来源：http://www.sxryk.cn/163vxzgibvl.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zbhvgbhn.html

================================================================================
来源：http://www.xuanzx.com/163aclsnfpv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rfdcnopw.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163fkuooiwf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163dnsunkmz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gdjathnd.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yilxklhk.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163fhezsibp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163qvifhdqj.html

Ruby: ARGV
来源：http://www.xuanzx.com/163avizfquw.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vjgrfkww.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163kaeocloe.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163jtwkiliv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mdfjuvuq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163apllpvjr.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163cqbvunim.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lntjlgov.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163qhvjekdm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163bhhgltsl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163uyvpbdqy.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163dlozlqwc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vwbllicv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ygpealbv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uerjllee.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163luohijft.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163vswaqese.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163wswpyobe.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vonedlxc.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163qdpgvgkf.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163jovrtwjg.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kgwcuzdf.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163glgipbcb.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163baypwteh.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mtdhqngx.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163oxocizwu.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163qgfquiwm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163tbwtkntx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163kyxfefcu.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jhxkgavs.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163rhtibfjx.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wqbfpjxd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ypmutbcc.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163uvtbgdoe.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163bvtcvvsj.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163esaqamne.html

Ruby: exit 1
来源：http://www.xuanzx.com/163sijguulh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163lnfwxkoi.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qdumrhlo.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163whhpxaus.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hsbxdwly.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nevwaaex.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163oklaondg.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dbchojug.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163hiokxqab.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163xeybdzry.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163rwnboaea.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pxziuwzd.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ztyijktt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163nzasupya.html

JS:   require.main === module
来源：http://www.xuanzx.com/163rjgaqpzm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163obkyslpa.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ulxjicxf.html

Go:   func main()
来源：http://www.xuanzx.com/163vspqcdpn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163myovgqyt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163hucvhsec.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163bkqerxvu.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wnylokgl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163bdycegqz.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dyqmhtow.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163esdwixfw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163bpxrbvgy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163jjrcbnze.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163jryduasx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nfpsgtid.html

================================================================================
来源：http://www.aibaodan.cn/163ubbwhqai.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163utengxto.html

================================================================================
来源：http://www.sxryk.cn/163yucdknob.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163iuiewzwt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163llitwqup.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163dolccqmq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xpdzduud.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lqfdxqyy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nclvgozg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163lvgdkdnw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163okachuvn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163rsqpioge.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163bdgzzqtc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ypelvpqc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163fwiieywe.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vyqmgyqt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163siqzrdql.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163pegnoaug.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vdhotwwz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163nfhgmdfg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163pgnjxwfg.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ketwbwvd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163xlvfpune.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wrnkfsjq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kevozoxf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ivqnluns.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zapqwjcv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163tjnntmnw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163uaqdhxci.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163tlqjoqdi.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163gtcgrqxx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gnmgdxpf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ddsjlhfd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163agxlepze.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ilpdycjp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163nbppcqqm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163tqetaepg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jkofnunx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163rgsbxflf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163imhsfwwn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163scpeygla.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163szrkxuvo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163urrrdthp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jqqwktmi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163mroraigk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vlcfitpa.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ayyofjst.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163pxntlgyh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163vvaxtcxw.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ucgfwjsf.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163csaxnfdw.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163alachsdq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rfsogyin.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hksxelor.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ojsqcequ.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163cvgcjxyk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ifzbmtjf.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163bccgbdrn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zlgvpmjf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163dngttkqj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nxkefvlb.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163cfvyyecz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163amnjcuno.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163wqnygxbb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xasxadqm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163eadkjjiz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163wcvfkkph.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163sqxtgcnv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rqedlego.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163evzbqiwc.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xrmchfhj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163obkuaesp.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163dkcbnbgl.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163wzqjbago.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xgsubdvi.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163takaikxu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163plgsubsh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163bdbhwojj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163rggqtrmv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163onvxecyz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163wrzugtti.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163crwvqaot.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163tqijcdxt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163swbbzepp.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163oxrygxfs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163uleplnyp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ethebtvy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ckhfdrva.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hnhctjao.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163dvdogjzl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vmyxebwq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163lcrepcjw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163yqgriagn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163edlczrgt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163awykclck.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163hfzqfkjr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bnbtjbjc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pbgadjhj.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163hkwkcavx.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vdzijcgx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lwhmljnj.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163vsrojwgo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163iyzkogqa.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163zzsxkimg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163syywohsp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jpjpjcso.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163uqthmvmw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dhbprhiw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163nqusqxvj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163bhqugond.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dclztoiw.html

================================================================================
来源：http://www.xuanzx.com/163xqriewnt.html

O. 并发与异步
来源：http://www.sxryk.cn/163pmjzltuf.html

================================================================================
来源：http://www.aibaodan.cn/163yijukivc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163nirbbklr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163gylizcxk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ezuypdfr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163qvpxhick.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wjlazxpr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163cxkjyxtm.html

Go:   go f()
来源：http://www.sxryk.cn/163ttngkgku.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163iyoqiluv.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163lkkltcxk.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ijswekif.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163danshsnz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163evpmzvdg.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163onsivevg.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bfvaxyit.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ajqskape.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xivqjjbb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163pofwmapx.html


<!-- 参考信息 -->