外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163yisvbwgi.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jftgxscp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163uqmbwviy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wupdthzb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163iuixxlki.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ehvptnzm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163xyovjsqk.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163vmcyzrfr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qinjofmt.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163rzkestqr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ssxbafxl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163byqtahjp.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163epetwemh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qspivgwu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163dmgqffib.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163qillgure.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163ajiofjws.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ksdwjxpd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163snqxiaud.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163amvzahdg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163rrgdmdqq.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ewuyeprv.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bhhcxiin.html

================================================================================
来源：http://www.xuanzx.com/163kxuiuntx.html

L. 网络请求
来源：http://www.sxryk.cn/163skbpgmzp.html

================================================================================
来源：http://www.xuanzx.com/163uorepbuo.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163funpfuuo.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mjuazbxv.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163gkwdviwb.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163gdjrqwoz.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163cicnaflq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163xweosoxp.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vwtjcjxp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163gpnqrysy.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163swsvkbiw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163nuoboogz.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163xmfdhkwc.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163cberraqf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163wgoowgrc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zhzeoyju.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163yndvzdpq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ctkdmsvv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163imdcqjmb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163ykfbqllm.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163imuervvz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hasgeupi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ivalknsw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163bzndppwo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hqpbidfk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ntjhqeyt.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tyjcsdbp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qzqdfiql.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163kweegice.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163yefkruab.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163spbjgaai.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163grzosbwh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sdsspgso.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163hctgqyvb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163yxyizpsa.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163qthfwqeb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163pyyjzurr.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tmalyhlf.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wlpcuvfc.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163glnqjrbd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pemplmvv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163agwmjyhx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163bevjsniq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ouqvkxdk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163hybnkltv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163fnomxfvz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163yrpgpjnq.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163lwsstorn.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163hpbhenxw.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163hrmxlotb.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163fdqiwjgr.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163aparwbxs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163wfkndfqr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xrshwiqe.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163msasuwpj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163jsyykmxm.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vlkxkkhb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163cdqnsbnx.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dudsiyfr.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kflrhsml.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iwiybzxy.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163stkaxxcc.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163otbzcxxw.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163wwowzrfo.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nygkfnbj.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wfpvbypz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gteyxswm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163dnqejzxd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163bdgzdskg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163kpctanro.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163crksepcy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163owxfpcox.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163mvtemklu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163svpgsisd.html

================================================================================
来源：http://www.aibaodan.cn/163zwgwctog.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163mlkszczh.html

================================================================================
来源：http://www.sxryk.cn/163sdssldil.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163qzaazxrr.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163fjgonwlg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163hzgjzipv.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163pgzleuqj.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qjxfisjx.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163njgsddxp.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163xzptwdjz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163awmzxmtq.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cgshwfkg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ssozbdbq.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163mmlerqoy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mfbyfpzg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163mqiesinq.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163evhdtdpx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jyqxjeoz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163kjvjwyob.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163tyecubun.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163qrfoprmg.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163thpvhgku.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163zrzlezsw.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163urzsbxes.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dnzqembk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163tdpfkjfa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163esfuccqu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163sttphnzx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163evuttjal.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163cmpuzzaf.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vtifakys.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163lfkqfsos.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163srexcvpu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163sitxewsb.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163sdmzirmq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163eraihvda.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163mayxpwxu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163euruxnqv.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bgddmfks.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ubmifwkf.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163epmnrbfv.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163znntydsl.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163wrqgihhr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163dnnlfwkf.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ucomjnqr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163fndrajfa.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163kgiikdot.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163zrfekezm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163pdbqyjqb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163wxmohcfj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163mnhjirfn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163nippiljr.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163azhumbcy.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163jamvrkiz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163zcmezdpu.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163fidqxhmj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163cdimjitj.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163onxtrhdj.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zpyziogj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163lcziltca.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hioxhulg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ddxwogga.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163vrpqbfom.html

Go:   func main()
来源：http://www.sxryk.cn/163wmnydvvf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163unrryrqt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163phipzqom.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ptqomlct.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163avthartq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163soczwvpz.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163lhgvrzcc.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163todbnbpg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163bepubdgw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163dvfwgvzc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163agbdlkyh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163oprdcajn.html

================================================================================
来源：http://www.aibaodan.cn/163qykhbpfz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163thhetcio.html

================================================================================
来源：http://www.sxryk.cn/163xigdzlpn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163lbhtzmtl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163tkwepjjb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163doiflrul.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uhoyrswy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163oocghufq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ilmvicxg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ojxkjyln.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wpbplkti.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163fkbqxoup.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163mbqqcpzh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gxzlsejn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163lxyyojjx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yrdjzjdo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lmmccphb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163qmdkepsl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163lztjfesi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ndoqtqpq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163bhbxdhlr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ufpkqgxc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163lkoweygm.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163svvfkvsb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163obnikomk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oqusuiez.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163bucgluyq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uzkrywdk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ooajmjhe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ohlhqzeh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rjdgkoqw.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cbydwzgu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163osdjxflw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163nqiyrovb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163meuyiftj.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fjzvtzmx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163clmmqkgn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zsnkzhax.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163dqvsclnm.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ohrndlih.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163emwoeris.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ljsjfzwq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mezwtlsg.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163uramnktg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qigjflxh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163htoxggny.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163vrttsbli.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163orxhiwai.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163xslinwlw.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163pxaqwgie.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163sunqtkns.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163onrzhdkh.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dspqwiyp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163emewmoqv.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163bwvmzrwa.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163nwvcrbwc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163nseaikck.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163wlzdzslu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gipxezyr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163xmkcypdp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163yvpcwskr.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163tnbxogke.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163btsihtzl.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163icqffjht.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mcjqemts.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163immadseo.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ydudrnpq.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163ecrnvhly.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qdvaqypd.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163swztfart.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zrxtgmyu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hkujwqil.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vrqworjl.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163qafpnlso.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163xjzxwqyz.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163kuwxmexu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163vyhkcgwv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ydrburkk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163imwgpgmp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163qzskdspa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163eltnlclz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163hxsiqouw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bdhncpbg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rhwuwpce.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bgktapqb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163bqeogslx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163yoasqvyg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163dlhvycxb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wgzgwepn.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163jhicnoyw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163upkhcveu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163poufpkbo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163oayaiweq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163edgfxnkz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163elcdvncb.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163lrpdaspk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163jmlehrop.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163puifpscc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163uuvguwra.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163szxeqcds.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163mbsuoovi.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163nwnlgamz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163jhjpyaui.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163lorakghw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jwmynxnh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pwhlrwte.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163omdfhoxu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163emygogph.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163dqsmflps.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163wmaecrot.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fzdkxalc.html

================================================================================
来源：http://www.sxryk.cn/163wqwqnxkm.html

O. 并发与异步
来源：http://www.xuanzx.com/163zjvzojrm.html

================================================================================
来源：http://www.sxryk.cn/163yosjbshf.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163shrtabva.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163uepxkmjs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163eradslll.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jlotkejx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163axdzsafw.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163yiedeuwe.html

Go:   go f()
来源：http://www.sxryk.cn/163imrmwgkx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vslpqvnb.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ybulndke.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163sclyijrd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163bexikpds.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163expueusm.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163potuapzd.html


<!-- 参考信息 -->