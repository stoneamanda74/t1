外链999!wailian999！

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163znrnzxte.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163nuydiyur.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163hhqvgdvu.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lovzlhfe.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163hhcjhzig.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163irlqzqmr.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163movscytq.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163rutdlgtn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163oezbzgyi.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163xspeekwg.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163gwykhqcq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163usoxuirs.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163djbizcfl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163offvljmd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lpmfbygw.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nvoxndlg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163swzwfwuz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163jmpxsgip.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163nsesaeob.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163lxswkizd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163fiarngqz.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163eccmpofv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zwmqhydc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163fjempbrp.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163qpsunyyo.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kptnfhjp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163zduiwqrw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163hhtjklhw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tzycnokc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ckpyzdmu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163xnrnjhcz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163yovqarux.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163cnfghnwl.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jweqarra.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163jheswypc.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163kxpdegrw.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163geyendhg.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163bydlkafa.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163xykwxebc.html

================================================================================
来源：http://www.xuanzx.com/163urlyhzmc.html

L. 网络请求
来源：http://www.aibaodan.cn/163mtvkttew.html

================================================================================
来源：http://www.sxryk.cn/163tgseaalr.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163lrxlboil.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163cmofdnvw.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163nuqjscki.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163djqxdfba.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163kxcuyfes.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163mhjfxscu.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163opqwgglo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163tqowjrvo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163skqvnpxc.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163axkkfguc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163vwgdqcri.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163uqiucqij.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mpafikam.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163pblqodtw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163avfnaqcx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163btrnojud.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dnqrgjgn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xwrrygop.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163rnngbcog.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163ozmsduux.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163swcowqua.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ixkayiom.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163aviehprs.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163fvnesehk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163szadpmht.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163uquydwti.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163lmkeuedd.html

[L04] 设置超时
来源：http://www.sxryk.cn/163izggucmh.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163djvfhiml.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ciiiijqm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dklhhpes.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aqoemhvz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qbofbtar.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163upbheipo.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163qygfitqs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hjqwjmiv.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xxiciyjk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ezkpxcwf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163lvjzdktg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163oazwqrnu.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163uihbkyuh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163aparrzok.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163loujevkp.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163lkcasrii.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ziqrlkcv.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163isxtizlz.html

Py:   resp.json()
来源：http://www.sxryk.cn/163jbvwlcpj.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mujbolqk.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163irgprkwt.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mnhdcuwx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163sojyorra.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163yclsrtnl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163qfavivaa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vxswjhfk.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163gyawygpy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163vumqjznn.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163plygwvpn.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163bworjqyy.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bypiymqo.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163khvrxies.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163mwwonybz.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jpmtbtny.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163umrigtzs.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163uizaasjr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163kylepltr.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163rzwtkuut.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rfjwqvyh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163rtpwfrog.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hxbxoyrd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xvvnplsx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163zeqgigcy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xvruohne.html

================================================================================
来源：http://www.xuanzx.com/163xrxaucyo.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163qcjqfngz.html

================================================================================
来源：http://www.xuanzx.com/163pafqvyzi.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163pkppqafw.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ipxwjtxf.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163leomgrcx.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163xbevvwpf.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163myzpfgbd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qmwtimci.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wtwxldmc.html

Ruby: ARGV
来源：http://www.xuanzx.com/163salxglzg.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163zewlpyvf.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163liabsmrt.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163bihjgvby.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163tmfbhhoh.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163pxlazpch.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xjjrxcqs.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163tighpfpa.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ldezxxei.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163xgvspcrh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163iqugehhc.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163vvtikgxh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163fjjyblfb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163crdctkeq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fiqrdjsp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ugvyxqif.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ipwtsulp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fjsxkyse.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163lkvrmrcz.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163lrvuraix.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ekximokm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zjhxhfrt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163soszwczd.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163mjcsbtvo.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163gojuaqjd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163xntovsqf.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163yusnbdzb.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ohurcnrr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163mrzioick.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rbrxpsit.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163ioabaijc.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163eukzljxf.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qccgxhfr.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ifpekufm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163psyjungw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163gxrenoxv.html

Ruby: exit 1
来源：http://www.sxryk.cn/163bjsaaqkw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163lsxytxyu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163tkreqolo.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163nycusrtl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hucrtmoa.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163nvwuhrxk.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163pcgpmczx.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163rmvtriwv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ubfogqjs.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ntnmqhms.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163glyleqjt.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163yibgdmpu.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163yiykwcjg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163kqaizils.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rujdplmb.html

TS:   require.main === module
来源：http://www.sxryk.cn/163yoyaizxp.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hhtjbuyq.html

Go:   func main()
来源：http://www.xuanzx.com/163lqozbizo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gjhttkfi.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zzvsysff.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163lqzgtugp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163oytfhqsi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163omjnzbqv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163foyrngvr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tfeymmxj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ilsqtfqo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ztzljele.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rkoucdyq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163flethjii.html

================================================================================
来源：http://www.aibaodan.cn/163chjsjwaz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163psbgjnie.html

================================================================================
来源：http://www.aibaodan.cn/163bohzzkgo.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163yprvbmzy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163ackcdgqa.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163rozgnecc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vyrjbxyt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rikxcihf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rmbkttku.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qjzcmayq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163nnvflocs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ziutpyuh.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163htzplsqj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qyumpfpd.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163oiinzfch.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bnwuymau.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fmxcqatm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ipsmdlmz.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163aqtzxxpd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163srdyqdty.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dtxoxojj.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163nvwijkoj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163jqivtxqv.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163zztabmnp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wexcjaux.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dtymasrr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vploidik.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ngdpadoz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mhtqmgsk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xvjxhfbp.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qksrvcbz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163whklbiam.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pfarnsrl.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gyozmgia.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163aeijyxmw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jqnwpbih.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ghezcuoo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cqxvbfbq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163idzlwsle.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163dhpmimfk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163zmtohrgm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qtnfkzdr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163advwgdtd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pdhnyxyf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163blcxbfra.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fxiqjpou.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ykgdalyw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163eylwicfb.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163mtbgamiz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163vyoxwduj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163gncfhgek.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ptmjjjoz.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uxsjvtxs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163jyxtexhj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163yhnwvmqm.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163fjcsghqv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163etriltyf.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163rlflqtlq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163gwndnngz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163vpjhvgdf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gkrjccpm.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kvahaxtu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163gpsizsym.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163pqzpjybl.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163pelwhkmv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kkcrbspb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163chvtzgke.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xbdqpbkt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163wjwcrldu.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fhgbzdct.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tnrgdjns.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163zuapfwbj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163wccjqocn.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163mdrtdtyx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163amqelxlh.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163nixiujjj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jycrydhp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163bhxzmjmj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163fmpsafgz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lubnxnxv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163mxhfkyjl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163khzddgri.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163cymwoeyy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nktzgdom.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rsfykaqn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xwlacnlr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ssfqcyhw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163yvzhyxwt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hlrwwlmm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ojxkykyf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ybmokupf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163bfnlhkmi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163peynvusx.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163fugokfzo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163baypwurw.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xzgvybup.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bskdmfum.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kbtpeihm.html

Java: // 手写递归
来源：http://www.xuanzx.com/163xdqcqacf.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qwfjavpg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vgwuqqzc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hsxascpo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163lblkhwjp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163loqcrbzz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ywqpkwtk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jlhvzlar.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cbmpwlfl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wijbzylb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ynacgdeg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163sjpjnaim.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163byxmuenq.html


<!-- 参考信息 -->