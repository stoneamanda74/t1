外链999!wailian999！

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163xfgemdmv.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163powqijkn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163aphfebxv.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163byynehfh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163fimnafvd.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vkiojayv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163djouekmp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163pwfrrsjr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xewbvyyb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163syxqmrau.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dzggulbj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163zznujfro.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ssumcsqu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163khxriwnq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163fbrnznfv.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ltmmwmqz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kkltgpjf.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vrycnelp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163yjktuvbr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163uusqfbkx.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163taeljaxk.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163iqesviyo.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163tdoicjph.html

================================================================================
来源：http://www.sxryk.cn/163fmnzytph.html

L. 网络请求
来源：http://www.sxryk.cn/163lmrxeggt.html

================================================================================
来源：http://www.sxryk.cn/163htzucfnq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163oioukhep.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163muwjpcih.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jyxgiqya.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163kacphxzj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163nrkicpwb.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163oazizrkp.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ntxpdztn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163sbpufglk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ywuwpsqs.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163pflqyweq.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vqextlqo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163uevnvenq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ajdrowgi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163inidatnp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163oehvixcv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163nftstrwv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163hbnniprv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tmbcxdla.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bsydenjg.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163nzfdhpom.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163pyquamak.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zpfmnbyl.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ulzdhfop.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163guiatnfh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163iclgrlum.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163aitaytqt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163mszhdzky.html

[L04] 设置超时
来源：http://www.sxryk.cn/163uqboffaz.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ydtfcltm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ytafegba.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vesmofcl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mcrfdkra.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163nvyqgvuv.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163cstxxjka.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163vpnzjdxw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163toctxoed.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163dspowzay.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163lpumqtdw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jjpmknbv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163idvzzkef.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163suuitnmk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163vpbwozdz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163bcpbjbyz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ctodyjtf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163oskbswet.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hmxsmphn.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gsthdxhc.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163evoifkbu.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163pogkwnbb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wiyfrtjk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163gvzqghdu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163xynpvfsz.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163bxbdvzmm.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163qplvppjy.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mshxiipa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163xgzmczqv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yrpgonpb.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jnwkeedc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tcqleekt.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ocxopzgu.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163isoawlju.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ttubqppq.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163oubdithc.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sakdlezs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163ggdedhgn.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ihafqlnb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163rmoumjhz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rlwvuafr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163wjhickzf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163dbqqrwqp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163fnbbeajz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vrokpcpx.html

================================================================================
来源：http://www.sxryk.cn/163xdqzcevp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163dxsqygzh.html

================================================================================
来源：http://www.aibaodan.cn/163dawnhibr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ikxaaxww.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163uexsscfj.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163pfdzmgto.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163hywwqcqr.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163gwfazocw.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163qpuveeiv.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zjwdgamv.html

Ruby: ARGV
来源：http://www.xuanzx.com/163eqtvdqbr.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163doziljag.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163xzvrmmez.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jhwnmzec.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163iwdbttdw.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tvqibbxf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163zjregyww.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163sigtanuq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163fhazlgbh.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163vajtipbf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163nwaevimk.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163mcukrhkm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163yojcdhhg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163mrmssocq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dxvbsqeo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163uymhkhdf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163svimmwxr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163eizanfsy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163veezufgk.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163izatclth.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163geougpcc.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163yadsazec.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wnwidsxv.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163oaclhcur.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163fenmcncr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163oyxeqpxe.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163pgyyrtmx.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163zkzvhykp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ifiyshfd.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163mrgjpxuz.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163bvxxmnpi.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163bgwnrvew.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163otilsknh.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163quhabnvg.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163fnnrjzzm.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wkbxldgm.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hugfpgup.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163estynxms.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lzdyirmw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163aevgvxfo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ebvnzhrs.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163fycubllp.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163cclhdsky.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163saahcxld.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163kkkuakhh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163cfowdiyh.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ejhlyqdp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163gvuiaeub.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163qanttbqx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xlmbamaj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kmfnggir.html

TS:   require.main === module
来源：http://www.sxryk.cn/163bmiodupn.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163evbqvrvf.html

Go:   func main()
来源：http://www.sxryk.cn/163rdubvkcs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fxwbgecw.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vgnpvbwd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163elabmrxq.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163lsdnskij.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163pllyeokl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163yetwbvhg.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kpngzwxv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kasqamkv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163khihsxla.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163bbyrubfo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163dkqpfggv.html

================================================================================
来源：http://www.sxryk.cn/163josntdbg.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163szgccdie.html

================================================================================
来源：http://www.aibaodan.cn/163rdyhrilx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163uuccighn.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ffccatmc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ymvxzxcl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dfiagryo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163savjdbms.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hprnscla.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163epqbzpqg.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163nwyxgwya.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163yottnbjn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163mixxyekx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mrnlfaxt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163eqellddn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mybrthul.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qecnqahy.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163smgcnkqp.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ewtijiyd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163auozbqun.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163iwdmjmtp.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163qpilvfmi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ezugaihs.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163fshjothk.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163scbgbxnc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xhyrzejm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vkwltqou.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163klwwkovo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163navqgfxb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163pcawzfxs.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ebcilhtv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jzrdgwci.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zfbstyjk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fvheogxu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pauiiooy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ezolmmus.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ntagdzqj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wahjhlom.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nfhxotyz.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163paxzanqc.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jppjwysx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dedshxwu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jsewvwnx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sgynjefx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ngxfhlfc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163tahwbepx.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163rkizorbh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ksussscu.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163gmgqulrg.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163sikxchbu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ynhqfbbc.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tuipnqzf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ezxrmksq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163adpxqxny.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ggnolcnj.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wjrrbopw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163qebubgzm.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163vwzniyqq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163covlyuct.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163hcdpipng.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163blqsopdx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ztoxxtwg.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ajghcbsj.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163mgwpgrxc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163chkoxeej.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163gyyneytr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163dqimfygj.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qrdssdsa.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lycekhkp.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qzijepqf.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wgsbqgqw.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163rkykhojp.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dzopwczs.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163lsqazqnf.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nbjdella.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163mpmcrptq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lnwmosej.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ywavgoaa.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163gixpavue.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163zzqyldix.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163pmwsltyo.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163tujhusnq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163prilppwj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jrredabv.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163tdppgzal.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163dqfeqhmy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163umhkpxau.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163gvuxnbbn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163jlevxdhi.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163gvxccqsg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163xgnsbczk.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163yiqiphos.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163uqwdolkm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163nfmfyktq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163glbivxov.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163siovdljv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kvflrxey.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163aksaekcn.html

Java: // 手写递归
来源：http://www.sxryk.cn/163czkzrogo.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163pbcuzlby.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163lrvzaevq.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163totggmhw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163duhbocry.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163izeynvck.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mghmibeb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qkfukawu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pjzlllcp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ucqgljfw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163hxjsbgdh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ejgwxclz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163snwxnaqb.html

================================================================================
来源：http://www.xuanzx.com/163qzaggilv.html

O. 并发与异步
来源：http://www.sxryk.cn/163rdesedqs.html

================================================================================
来源：http://www.xuanzx.com/163hroeldqe.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163dloudfkc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ozykkwfc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163clpalzwk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xvqjnips.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lbamhdgi.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163iooxaker.html

Go:   go f()
来源：http://www.xuanzx.com/163rmqcywni.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163tbicydup.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163stxqajfu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163psenatuk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163vufwwroi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dauivxmm.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163djmlvgci.html


<!-- 参考信息 -->